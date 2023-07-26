import { describe, expect, test } from "vitest";

import { underline2hump } from "../../src/string";

describe("StringUtils.underline2hump", () => {
  test("null", () => {
    expect.soft(underline2hump(null)).toBe(null);
  });

  test("下划线风格字符串", () => {
    expect.soft(underline2hump("hello_xiaohe")).toBe("helloXiaohe");
  });

  test("驼峰风格字符串", () => {
    expect.soft(underline2hump("helloXiaohe")).toBe("helloXiaohe");
  });
});