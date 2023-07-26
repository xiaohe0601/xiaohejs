import { describe, expect, test } from "vitest";

import { number2chinese } from "../../src/string";

describe("StringUtils.number2chinese", () => {
  test("数字0", () => {
    expect.soft(number2chinese(0)).toBe("零");
  });

  test("字符串0", () => {
    expect.soft(number2chinese("0")).toBe("零");
  });

  test("数字10", () => {
    expect.soft(number2chinese(10)).toBe("十");
  });

  test("数字100", () => {
    expect.soft(number2chinese(100)).toBe("一百");
  });

  test("数字1001", () => {
    expect.soft(number2chinese(1001)).toBe("一千零一");
  });

  test("小数10.1", () => {
    expect.soft(number2chinese(10.1)).toBe("十");
  });

  test("负数-10", () => {
    expect.soft(number2chinese(-10)).toBe("十");
  });
});