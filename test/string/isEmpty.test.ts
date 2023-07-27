import { describe, expect, test } from "vitest";

import { isEmptyString } from "../../src";

describe("StringUtils.isEmpty", () => {
  test("null", () => {
    expect.soft(isEmptyString(null)).toBe(true);
  });

  test("空字符串", () => {
    expect.soft(isEmptyString("")).toBe(true);
  });

  test("空白字符串", () => {
    expect.soft(isEmptyString(" ")).toBe(false);
  });

  test("空白字符串（String#trim）", () => {
    expect.soft(isEmptyString(" ", true)).toBe(true);
  });

  test("非空字符串", () => {
    expect.soft(isEmptyString("我是非空字符串")).toBe(false);
  });
});