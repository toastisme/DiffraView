import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, "data");
const NXS_PATH = path.join(DATA_DIR, "sxd_nacl_run.nxs");
const NXS_URL = "https://zenodo.org/records/4415768/files/sxd_nacl_run.nxs";

test.beforeAll(async () => {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(NXS_PATH)) {
    const response = await fetch(NXS_URL);
    fs.writeFileSync(NXS_PATH, Buffer.from(await response.arrayBuffer()));
  }
});

test("import SXD NaCl: Browse button shows filename and log is populated", async ({
  page,
}) => {
  await page.goto("/");

  // Wait for the Import tab to render (Browse button starts enabled)
  await expect(page.getByRole("button", { name: "Browse" })).toBeVisible();

  // Before anything is loaded only the viewers every mode has are offered
  await expect(page.getByRole("tab", { name: "Experiment", exact: true })).toBeVisible();
  await expect(page.getByRole("tab", { name: "Reciprocal Lattice" })).toBeVisible();
  await expect(page.getByRole("tab", { name: "Experiment Planner" })).toHaveCount(0);
  await expect(page.getByRole("tab", { name: "Integration Profiler" })).toHaveCount(0);
  for (const step of ["Import", "Find Spots", "Index", "Refine", "Integrate"]) {
    await expect(page.getByRole("tab", { name: step, exact: true })).toBeVisible();
  }

  // Allow time for all four viewer iframes to load and register their
  // WebSocket connections with the server. clear_experiment() requires all
  // five connections (gui + 4 viewers) to be present before import can run.
  await page.waitForTimeout(2000);

  // Inject the import message from within the browser using its native
  // WebSocket. Returning a Promise ensures page.evaluate only resolves once
  // the connection is open and the message has been sent. The server responds
  // to the registered gui connection, so React state updates and the UI
  // re-renders normally.
  await page.evaluate((nxsPath: string) => {
    return new Promise<void>((resolve, reject) => {
      const ws = new WebSocket("ws://127.0.0.1:50010/");
      ws.onopen = () => {
        ws.send(
          JSON.stringify({
            channel: "server",
            type: "workflow.run",
            payload: { step: "import", filenames: [nxsPath], backend: "DIALS" },
          })
        );
        resolve();
      };
      ws.onerror = (e) => reject(new Error(`WebSocket error: ${e}`));
    });
  }, NXS_PATH);

  // After a successful import, currentFileKey is set to the filename and
  // replaces the "Browse" label on the button.
  await expect(
    page.getByRole("button", { name: "sxd_nacl_run.nxs" })
  ).toBeVisible({ timeout: 120_000 });

  // A TOF dataset adds the planner and profiler (session.capabilities)
  await expect(page.getByRole("tab", { name: "Experiment Planner" })).toBeVisible();
  await expect(page.getByRole("tab", { name: "Integration Profiler" })).toBeVisible();

  // The log card should not have a red border (import did not fail)
  await expect(
    page.locator(".custom-scrollbar").filter({ hasText: "DIALS Output" })
  ).not.toHaveClass(/border-red-500/);
});
