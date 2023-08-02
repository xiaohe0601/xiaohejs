import { beforeEach, describe, expect, test } from "vitest";

import { convertUrl, ConvertUrlConfig } from "../../src";

describe("StringUtils.convertUrl", () => {
  beforeEach(() => {
    ConvertUrlConfig.base = "https://xiaohejs.xiaohe.ink";
  });

  test("null", () => {
    expect.soft(convertUrl(null)).toBe(null);
  });

  test("以斜杠开头的URL", () => {
    expect.soft(convertUrl("/xiaohe")).toBe("https://xiaohejs.xiaohe.ink/xiaohe");
  });

  test("无斜杠开头的URL", () => {
    expect.soft(convertUrl("xiaohe")).toBe("https://xiaohejs.xiaohe.ink/xiaohe");
  });

  test("带协议头的URL", () => {
    expect.soft(convertUrl("https://xiaohejs.xiaohe.ink/xiaohe")).toBe("https://xiaohejs.xiaohe.ink/xiaohe");
  });

  test("额外的前缀", () => {
    expect.soft(convertUrl("/xiaohe", { prefix: "target:" })).toBe("target:https://xiaohejs.xiaohe.ink/xiaohe");
  });
});