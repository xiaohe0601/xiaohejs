import { describe, expect, test } from "vitest";

import { isNotEmpty } from "../../src/string";

describe("StringUtils.isNotEmpty", () => {
  test("null", () => {
    expect.soft(isNotEmpty(null)).toBe(false);
  });

  test("空字符串", () => {
    expect.soft(isNotEmpty("")).toBe(false);
  });

  test("空白字符串", () => {
    expect.soft(isNotEmpty(" ")).toBe(true);
  });

  test("空白字符串（String#trim）", () => {
    expect.soft(isNotEmpty(" ", true)).toBe(false);
  });

  test("非空字符串", () => {
    expect.soft(isNotEmpty("我是非空字符串")).toBe(true);
  });
});