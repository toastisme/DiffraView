import { serverMessage, ServerRequestType } from "./protocol";

// Electron is only available when running inside the desktop app
// (nodeIntegration is enabled in electron.cjs); in a browser this is null.
const electron = typeof window !== 'undefined' && (window as any).require
  ? (window as any).require('electron')
  : null;

export const ipcRenderer = electron?.ipcRenderer ?? null;

// The desktop app on macOS, which keeps the native window buttons inset into
// the client's title bar (see electron.cjs).
export const isMacDesktop = electron !== null && navigator.userAgent.includes("Macintosh");

export type FileFilter = { name: string, extensions: string[] };

export const PHIL_FILTERS: FileFilter[] = [
  { name: "Phil files", extensions: ["phil"] },
  { name: "All files", extensions: ["*"] },
];

/**
 * In the desktop app, shows a native open dialog and resolves to the chosen
 * paths ([] if cancelled). In a browser resolves to null, meaning the server
 * should show its own dialog instead.
 */
export async function selectPaths(options: {
  title: string,
  directory?: boolean,
  multiple?: boolean,
  filters?: FileFilter[],
}): Promise<string[] | null> {
  if (!ipcRenderer) return null;
  return ipcRenderer.invoke('select-paths', options);
}

/**
 * As selectPaths, but shows a native save dialog. Resolves to [path], [] if
 * cancelled, or null in a browser.
 */
export async function selectSavePath(options: {
  title: string,
  defaultName?: string,
  filters?: FileFilter[],
}): Promise<string[] | null> {
  if (!ipcRenderer) return null;
  return ipcRenderer.invoke('select-save-path', options);
}

/**
 * A server message with the paths picked in a native dialog added, so the
 * server uses them rather than opening its own dialog.
 */
export async function withSelectedPaths(
  type: ServerRequestType,
  payload: Record<string, unknown>,
  options: Parameters<typeof selectPaths>[0],
): Promise<string> {
  const paths = await selectPaths(options);
  return serverMessage(type, paths === null ? payload : { ...payload, paths });
}

/**
 * As withSelectedPaths, for the save and export server messages.
 */
export async function withSelectedSavePath(
  type: ServerRequestType,
  payload: Record<string, unknown>,
  options: Parameters<typeof selectSavePath>[0],
): Promise<string> {
  const paths = await selectSavePath(options);
  return serverMessage(type, paths === null ? payload : { ...payload, paths });
}
