import { describe, expect, test } from "vitest";

import { isEmpty } from "../../src/string";

describe("StringUtils.isEmpty", () => {
  test("null", () => {
    expect(isEmpty(null)).toBe(true);
  });

  test("空字符串", () => {
    expect(isEmpty("")).toBe(true);
  });

  test("空白字符串", () => {
    expect(isEmpty(" ")).toBe(false);
  });

  test("空白字符串（String#trim）", () => {
    expect(isEmpty(" ", true)).toBe(true);
  });

  test("非空字符串", () => {
    expect(isEmpty("我是非空字符串")).toBe(false);
  });
});