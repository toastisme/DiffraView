// Finds a DIALS Python environment and runs the DiffraView server in it.
// Used by the packaged app without a built-in DIALS install

const crypto = require('crypto');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn, spawnSync } = require('child_process');

const CONFIG_DIR = path.join(os.homedir(), '.config', 'diffraview');
const CONFIG_FILE = path.join(CONFIG_DIR, 'config');
const MIN_DIALS = [3, 31];
const MIN_PYTHON = [3, 10];

const SERVER_REQUIREMENTS = {
  websockets: 'websockets>=14',
  aiofiles: 'aiofiles',
  lz4: 'lz4',
  msgpack: 'msgpack',
  numpy: 'numpy',
  scipy: 'scipy',
};

function readConfig() {
  const config = {};
  if (!fs.existsSync(CONFIG_FILE)) return config;
  for (const line of fs.readFileSync(CONFIG_FILE, 'utf8').split('\n')) {
    const idx = line.indexOf('=');
    if (idx > 0) config[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
  }
  return config;
}

function saveDialsPython(python) {
  const config = readConfig();
  config.DIALS_PYTHON = python;
  fs.mkdirSync(path.dirname(CONFIG_FILE), { recursive: true });
  fs.writeFileSync(
    CONFIG_FILE,
    Object.entries(config).map(([k, v]) => `${k}=${v}`).join('\n') + '\n',
  );
}

// Environment prefix, or a CCP4 folder (whose Python is bin/ccp4-python)
function pythonFor(location) {
  if (!location) return null;
  if (fs.existsSync(location) && fs.statSync(location).isFile()) return location;
  const ccp4Python = path.join(location, 'bin', 'ccp4-python');
  if (fs.existsSync(ccp4Python)) return ccp4Python;
  return path.join(location, 'bin', 'python');
}

function isCcp4(python) {
  return path.basename(python) === 'ccp4-python';
}

// CCP4 installs, newest version first
function ccp4Installs() {
  const home = os.homedir();
  const parents = ['/Applications', path.join(home, 'Applications'), '/opt/xtal', '/opt', '/usr/local', home];
  const found = [process.env.CCP4, whichDir('ccp4-python') && path.dirname(whichDir('ccp4-python'))];
  for (const parent of parents) {
    try {
      for (const name of fs.readdirSync(parent)) {
        if (/^ccp4-\d/.test(name)) found.push(path.join(parent, name));
      }
    } catch { /* missing directory */ }
  }
  const version = dir => (path.basename(dir).match(/\d+(\.\d+)*/) || ['0'])[0].split('.').map(Number);
  const seen = new Set();
  return found
    .filter(dir => dir && fs.existsSync(path.join(dir, 'bin', 'ccp4-python')))
    .map(dir => path.resolve(dir))
    .filter(dir => !seen.has(dir) && seen.add(dir))
    .sort((a, b) => compareVersions(version(b), version(a)));
}

function compareVersions(a, b) {
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    const d = (a[i] || 0) - (b[i] || 0);
    if (d !== 0) return d;
  }
  return 0;
}

// Server packages installed with pip --target, for read-only environments (e.g. CCP4)
function packagesDirFor(python) {
  const key = crypto.createHash('sha1').update(path.resolve(python)).digest('hex').slice(0, 12);
  return path.join(CONFIG_DIR, 'python-packages', key);
}

// Puts `dirs` at the front of sys.path. Not PYTHONPATH: ccp4-python unsets it.
function sysPathPrefix(dirs) {
  return `import sys; sys.path[:0] = ${JSON.stringify(dirs)}\n`;
}

function prefixFor(python) {
  return path.dirname(path.dirname(python));
}

function globDirs(pattern) {
  let paths = [path.sep];
  for (const part of pattern.split(path.sep).filter(Boolean)) {
    const next = [];
    for (const p of paths) {
      if (part === '*') {
        try {
          for (const entry of fs.readdirSync(p, { withFileTypes: true })) {
            if (entry.isDirectory() && !entry.name.startsWith('.')) next.push(path.join(p, entry.name));
          }
        } catch { /* unreadable directory */ }
      } else if (fs.existsSync(path.join(p, part))) {
        next.push(path.join(p, part));
      }
    }
    paths = next;
  }
  return paths;
}

function whichDir(command) {
  for (const dir of (process.env.PATH || '').split(path.delimiter)) {
    if (dir && fs.existsSync(path.join(dir, command))) return dir;
  }
  return null;
}

function condaEnvironments() {
  try {
    return fs.readFileSync(path.join(os.homedir(), '.conda', 'environments.txt'), 'utf8')
      .split('\n').map(line => line.trim()).filter(Boolean);
  } catch {
    return [];
  }
}

// Common conda/mamba install roots
function condaRoots(home) {
  const names = ['miniforge3', 'mambaforge', 'miniconda3', 'anaconda3'];
  return [
    ...names.map(d => path.join(home, d)),
    // macOS: Anaconda's default, and Homebrew casks (Apple Silicon, Intel)
    ...names.map(d => path.join(home, 'opt', d)),
    ...['/opt/homebrew/Caskroom', '/usr/local/Caskroom']
      .flatMap(root => ['miniforge', 'miniconda', 'anaconda'].map(d => path.join(root, d, 'base'))),
    ...names.map(d => path.join('/opt', d)),
    // micromamba, and conda's per-user envs directory
    path.join(home, 'micromamba'),
    path.join(home, '.local', 'share', 'mamba'),
    path.join(home, '.conda'),
  ];
}

// Explicitly chosen python: --dials-python=, DIFFRAVIEW_DIALS_PYTHON, or saved config
function configuredPython(argv) {
  const flag = argv.find(a => a.startsWith('--dials-python='));
  const config = readConfig();
  const location = (flag && flag.slice('--dials-python='.length))
    || process.env.DIFFRAVIEW_DIALS_PYTHON || config.DIALS_PYTHON || config.CONDA_BASE;
  const python = pythonFor(location);
  return python && fs.existsSync(python) ? python : null;
}

// Candidate pythons
function candidatePythons(argv) {
  const home = os.homedir();
  const flag = argv.find(a => a.startsWith('--dials-python='));
  const config = readConfig();
  const dialsImportDir = whichDir('dials.import');
  const roots = condaRoots(home);

  const candidates = [
    flag && flag.slice('--dials-python='.length),
    process.env.DIFFRAVIEW_DIALS_PYTHON,
    config.DIALS_PYTHON,
    config.CONDA_BASE,
    process.env.CONDA_PREFIX,
    dialsImportDir && path.join(dialsImportDir, 'python'),
    dialsImportDir && path.join(dialsImportDir, 'ccp4-python'),
    // bootstrap.py developer installs, e.g. dials/conda_base
    ...globDirs(path.join(home, '*', 'conda_base')),
    ...globDirs(path.join(home, '*', '*', 'conda_base')),
    ...condaEnvironments(),
    ...roots.flatMap(root => globDirs(path.join(root, 'envs', '*'))),
    ...roots,
  ];

  const seen = new Set();
  return candidates
    .map(pythonFor)
    .filter(p => p && fs.existsSync(p) && !seen.has(p) && seen.add(p));
}

function runPython(python, code, timeout) {
  const result = spawnSync(python, ['-c', code], { encoding: 'utf8', timeout });
  if (result.status !== 0) return null;
  try {
    return JSON.parse(result.stdout.trim().split('\n').pop());
  } catch {
    return null;
  }
}

function hasDials(python) {
  return runPython(
    python,
    'import importlib.util, json; print(json.dumps(importlib.util.find_spec("dials") is not None))',
    15000,
  ) === true;
}

// Check Python is valid. Returns {ok, error, tooOld, dialsVersion, pythonVersion, missing, writable}
function inspectPython(python) {
  const code = sysPathPrefix([packagesDirFor(python)]) + `
import importlib.util, json, os, sys, sysconfig
r = {"missing": [], "python": list(sys.version_info[:3])}
purelib = sysconfig.get_paths()["purelib"]
r["writable"] = os.access(purelib, os.W_OK)
try:
    import importlib.metadata
    r["version"] = importlib.metadata.version("dials")
except Exception:
    pass
try:
    import dials, dxtbx
    from dials.command_line import tof_integrate
    from dials_algorithms_tof_integration_ext import TOFProfile1DICParams
except Exception as e:
    r["error"] = f"{type(e).__name__}: {e}"
for module in ${JSON.stringify(Object.keys(SERVER_REQUIREMENTS))}:
    if importlib.util.find_spec(module) is None:
        r["missing"].append(module)
if "websockets" not in r["missing"]:
    import websockets
    if int(websockets.__version__.split(".")[0]) < 14:
        r["missing"].append("websockets")
print(json.dumps(r))
`;
  const result = runPython(python, code, 120000);
  if (result === null) return { ok: false, error: `Could not run ${python}` };

  const dialsVersion = result.version || null;
  const pythonVersion = result.python.join('.');
  // The imports decide: developer installs can report a stale version
  const dialsTooOld = Boolean(result.error) && (!dialsVersion ||
    compareVersions(dialsVersion.split('.').map(n => parseInt(n, 10) || 0), MIN_DIALS) < 0);
  const pythonTooOld = compareVersions(result.python, MIN_PYTHON) < 0;
  return {
    ok: !result.error && !dialsTooOld && !pythonTooOld,
    error: result.error,
    tooOld: dialsTooOld || pythonTooOld,
    dialsVersion,
    pythonVersion,
    missing: result.missing,
    writable: result.writable,
  };
}

// First local (non-CCP4) DIALS found, skipping `exclude`
function findDialsPython(argv, exclude = new Set()) {
  return candidatePythons(argv)
    .filter(p => !isCcp4(p) && !exclude.has(p))
    .find(hasDials) || null;
}

// Into the environment if writable, else into packagesDirFor(python)
function installRequirements(python, modules, writable) {
  const target = writable ? [] : ['--target', packagesDirFor(python)];
  const result = spawnSync(
    python,
    ['-m', 'pip', 'install', ...target, ...modules.map(m => SERVER_REQUIREMENTS[m])],
    { encoding: 'utf8' },
  );
  return { ok: result.status === 0, output: (result.stdout || '') + (result.stderr || '') };
}

// Starts `python -m diffraview.server` with the DIALS environment activated.
function startServer({ python, serverDir, addr, port, processingDir }) {
  const prefix = prefixFor(python);
  const env = { ...process.env };
  // The AppImage runtime may point these at its own bundled libraries.
  for (const key of ['LD_LIBRARY_PATH', 'PYTHONHOME']) {
    if (env.APPDIR && env[key] && env[key].includes(env.APPDIR)) delete env[key];
  }
  if (isCcp4(python)) {
    env.CCP4 = prefix;
    delete env.CONDA_PREFIX;  // don't source another environment's activate.d
  } else {
    env.CONDA_PREFIX = prefix;
  }
  env.PATH = [path.join(prefix, 'bin'), env.PATH].filter(Boolean).join(path.delimiter);
  env.PYTHONUNBUFFERED = '1';

  const run = sysPathPrefix([serverDir, packagesDirFor(python)]) +
    'import runpy; runpy.run_module("diffraview.server", run_name="__main__", alter_sys=True)';
  const serverArgs = ['-c', run, addr, String(port)];
  if (processingDir) serverArgs.push('--processing-dir', processingDir);

  const activateAndRun =
    'for f in "$CONDA_PREFIX"/etc/conda/activate.d/*.sh; do [ -r "$f" ] && . "$f"; done; exec "$0" "$@"';
  return spawn('bash', ['-c', activateAndRun, python, ...serverArgs], {
    env,
    stdio: ['ignore', 'pipe', 'pipe'],
  });
}

module.exports = {
  MIN_DIALS,
  ccp4Installs,
  configuredPython,
  findDialsPython,
  isCcp4,
  inspectPython,
  installRequirements,
  pythonFor,
  saveDialsPython,
  startServer,
};
