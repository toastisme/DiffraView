// Copies the server's Python source into build-server/, which electron-builder
// bundles as resources/server (see "extraResources" in package.json). The
// built web client and Python caches are left out.
//
// A Node script rather than rm/cp/find so it also runs on Windows.

const fs = require('fs');
const path = require('path');

const src = path.resolve(__dirname, '..', '..', 'src', 'diffraview');
const dest = path.resolve(__dirname, '..', 'build-server');

fs.rmSync(dest, { recursive: true, force: true });
fs.cpSync(src, path.join(dest, 'diffraview'), {
  recursive: true,
  filter: from => {
    const rel = path.relative(src, from).split(path.sep);
    return rel[0] !== 'web' && !rel.includes('__pycache__');
  },
});
