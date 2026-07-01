export const ALGORITHM_SUCCESSORS: Record<string, string[]> = {
  findSpots: ["Index", "Refine", "Integrate"],
  index:     ["Refine", "Integrate"],
  refine:    ["Integrate"],
};
