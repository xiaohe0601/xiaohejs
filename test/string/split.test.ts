import { describe, expect, test } from "vitest";

import { split } from "../../src";

describe("StringUtils.split", () => {
  test("null", () => {
    expect.soft(split(null)).toEqual([]);
  });

  test("空字符串", () => {
    expect.soft(split("")).toEqual([]);
  });

  test("逗号分隔字符串 (首尾无逗号)", () => {
    expect.soft(split("你好,小何同学")).toEqual(["你好", "小何同学"]);
  });

  test("分号分隔字符串 (首尾无分号)", () => {
    expect.soft(split("你好;小何同学", ";")).toEqual(["你好", "小何同学"]);
  });

  test("分号分隔字符串 (首尾有多余分号, 过滤首尾分号)", () => {
    expect.soft(split(";你好;小何同学;", ";")).toEqual(["你好", "小何同学"]);
  });

  test("分号分隔字符串 (首尾有多余分号, 不过滤首尾分号)", () => {
    expect.soft(split(";你好;小何同学;", ";", {
      removeLeadingSeparator: false,
      removeTrailingSeparator: false
    })).toEqual(["", "你好", "小何同学", ""]);
  });

  test("分号分隔字符串 (首尾有多余分号, 不过滤首分号)", () => {
    expect.soft(split(";你好;小何同学;", ";", {
      removeLeadingSeparator: false
    })).toEqual(["", "你好", "小何同学"]);
  });

  test("分号分隔字符串 (首尾有多余分号, 不过滤尾分号)", () => {
    expect.soft(split(";你好;小何同学;", ";", {
      removeTrailingSeparator: false
    })).toEqual(["你好", "小何同学", ""]);
  });
});