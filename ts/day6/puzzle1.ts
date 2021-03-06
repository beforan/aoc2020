import { readInputGroups } from "../lib/file-io.ts";
import { sumGroupDistinctValues } from "./lib.ts";

export const Solve = async () => {
  const groups = await readInputGroups(6);
  const result = groups
    .map((g) => sumGroupDistinctValues(g))
    .reduce((sum, count) => sum + count, 0);

  console.log(result);
};
