import { describe, expect, test } from "vitest";

import { hump2underline } from "../../src/string";

describe("StringUtils.hump2underline", () => {
  test("null", () => {
    expect.soft(hump2underline(null)).toBe(null);
  });

  test("驼峰风格字符串", () => {
    expect.soft(hump2underline("helloXiaohe")).toBe("hello_xiaohe");
  });

  test("下划线风格字符串", () => {
    expect.soft(hump2underline("hello_xiaohe")).toBe("hello_xiaohe");
  });
});