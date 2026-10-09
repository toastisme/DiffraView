// Port of the DiffraView server. Whoever opens the app passes it as
// ?port=<n> (Electron, ./diffraview). When the page is served by the server
// itself (browser mode) the page's own port is the server's. 50010 is the
// default `python -m diffraview.server` listens on.
export const serverPort: string = (() => {
  const param = new URLSearchParams(window.location.search).get("port");
  if (param) return param;
  if (!import.meta.env.DEV && window.location.protocol.startsWith("http") && window.location.port) {
    return window.location.port;
  }
  return "50010";
})();

export const serverWSAddr = `ws://127.0.0.1:${serverPort}/`;

// URL of an embedded viewer page, telling it which port to connect to.
export function viewerUrl(path: string): string {
  return `${path}?port=${serverPort}`;
}
