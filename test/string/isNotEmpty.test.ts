import { describe, expect, test } from "vitest";

import { isNotEmptyString } from "../../src";

describe("StringUtils.isNotEmpty", () => {
  test("null", () => {
    expect.soft(isNotEmptyString(null)).toBe(false);
  });

  test("空字符串", () => {
    expect.soft(isNotEmptyString("")).toBe(false);
  });

  test("空白字符串", () => {
    expect.soft(isNotEmptyString(" ")).toBe(true);
  });

  test("空白字符串（String#trim）", () => {
    expect.soft(isNotEmptyString(" ", true)).toBe(false);
  });

  test("非空字符串", () => {
    expect.soft(isNotEmptyString("我是非空字符串")).toBe(true);
  });
});