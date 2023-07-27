import { beforeEach, describe, expect, test } from "vitest";

import { convertUrl, ConvertUrlConfig } from "../../src";

describe("StringUtils.convertUrl", () => {
  beforeEach(() => {
    ConvertUrlConfig.base = "https://xiaohejs.myhdg.top";
  });

  test("null", () => {
    expect.soft(convertUrl(null)).toBe(null);
  });

  test("以斜杠开头的URL", () => {
    expect.soft(convertUrl("/xiaohe")).toBe("https://xiaohejs.myhdg.top/xiaohe");
  });

  test("无斜杠开头的URL", () => {
    expect.soft(convertUrl("xiaohe")).toBe("https://xiaohejs.myhdg.top/xiaohe");
  });

  test("带协议头的URL", () => {
    expect.soft(convertUrl("https://xiaohejs.myhdg.top/xiaohe")).toBe("https://xiaohejs.myhdg.top/xiaohe");
  });

  test("额外的前缀", () => {
    expect.soft(convertUrl("/xiaohe", { prefix: "target:" })).toBe("target:https://xiaohejs.myhdg.top/xiaohe");
  });
});