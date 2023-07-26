import { describe, expect, test } from "vitest";

import { isEmpty } from "../../src/string";

describe("StringUtils.isEmpty", () => {
  test("null", () => {
    expect.soft(isEmpty(null)).toBe(true);
  });

  test("空字符串", () => {
    expect.soft(isEmpty("")).toBe(true);
  });

  test("空白字符串", () => {
    expect.soft(isEmpty(" ")).toBe(false);
  });

  test("空白字符串（String#trim）", () => {
    expect.soft(isEmpty(" ", true)).toBe(true);
  });

  test("非空字符串", () => {
    expect.soft(isEmpty("我是非空字符串")).toBe(false);
  });
});