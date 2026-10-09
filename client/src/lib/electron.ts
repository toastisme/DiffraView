// Electron is only available when running inside the desktop app
// (nodeIntegration is enabled in electron.cjs); in a browser this is null.
const electron = typeof window !== 'undefined' && (window as any).require
  ? (window as any).require('electron')
  : null;

export const ipcRenderer = electron?.ipcRenderer ?? null;

/**
 * In the desktop app, shows a native open dialog and resolves to the chosen
 * paths ([] if cancelled). In a browser resolves to null, meaning the server
 * should show its own dialog instead.
 */
export async function selectPaths(options: {
  title: string,
  directory?: boolean,
  multiple?: boolean,
}): Promise<string[] | null> {
  if (!ipcRenderer) return null;
  return ipcRenderer.invoke('select-paths', options);
}

/**
 * Adds the paths picked in a native dialog to a browse_* server message, so
 * the server uses them rather than opening its own dialog.
 */
export async function withSelectedPaths(
  msg: Record<string, unknown>,
  options: Parameters<typeof selectPaths>[0],
): Promise<string> {
  const paths = await selectPaths(options);
  return JSON.stringify(paths === null ? msg : { ...msg, paths });
}
