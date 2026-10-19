// Each mode has its own algorithm tabs, reflection table and contexts
// (components/<mode>/, contexts/<mode>/), sharing only generic UI.
export type ModeName = "tof_laue" | "rotation";

// null before import, or for an experiment type no mode handles yet
export function modeName(experimentType: string | null): ModeName | null {
  switch (experimentType) {
    case "TOF":
    case "LAUE":
      return "tof_laue";
    case "ROTATION":
      return "rotation";
    default:
      return null;
  }
}
