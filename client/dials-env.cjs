// Finds a DIALS Python environment and runs the DiffraView server in it.
// Used by the packaged app without a built-in DIALS install

const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn, spawnSync } = require('child_process');

const CONFIG_FILE = path.join(os.homedir(), '.config', 'diffraview', 'config');

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

// Environment prefix 
function pythonFor(location) {
  if (!location) return null;
  if (fs.existsSync(location) && fs.statSync(location).isFile()) return location;
  return path.join(location, 'bin', 'python');
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

// Check Python is valid
function inspectPython(python) {
  const code = `
import importlib.util, json
r = {"missing": []}
try:
    import dials, dxtbx
    from dials.command_line import tof_integrate
    from dials_algorithms_tof_integration_ext import TOFProfile1DICParams
    import importlib.metadata
    r["version"] = importlib.metadata.version("dials")
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
  return { ...result, ok: !result.error };
}

function findDialsPython(argv) {
  return candidatePythons(argv).find(hasDials) || null;
}

function installRequirements(python, modules) {
  const result = spawnSync(
    python,
    ['-m', 'pip', 'install', ...modules.map(m => SERVER_REQUIREMENTS[m])],
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
  env.CONDA_PREFIX = prefix;
  env.PATH = [path.join(prefix, 'bin'), env.PATH].filter(Boolean).join(path.delimiter);
  env.PYTHONPATH = [serverDir, env.PYTHONPATH].filter(Boolean).join(path.delimiter);
  env.PYTHONUNBUFFERED = '1';

  const serverArgs = ['-m', 'diffraview.server', addr, String(port)];
  if (processingDir) serverArgs.push('--processing-dir', processingDir);

  const activateAndRun =
    'for f in "$CONDA_PREFIX"/etc/conda/activate.d/*.sh; do [ -r "$f" ] && . "$f"; done; exec "$0" "$@"';
  return spawn('bash', ['-c', activateAndRun, python, ...serverArgs], {
    env,
    stdio: ['ignore', 'pipe', 'pipe'],
  });
}

module.exports = {
  findDialsPython,
  inspectPython,
  installRequirements,
  pythonFor,
  saveDialsPython,
  startServer,
};
