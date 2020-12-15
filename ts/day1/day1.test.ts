import { solve } from "./puzzle1.ts";
import { assertEquals } from "https://deno.land/std@0.81.0/testing/asserts.ts";

const testList = [1721, 979, 366, 299, 675, 1456];

Deno.test("Day 1 Puzzle 1", () => {
  const expected = 514579;
  const actual = solve(testList);
  assertEquals(actual, expected);
});
