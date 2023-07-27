import { describe, expect, test } from "vitest";

import { uuid } from "../../src";

describe("StringUtils.uuid", () => {
  test("不指定参数", () => {
    expect.soft(uuid()).toHaveLength(36);
  });

  test("指定长度", () => {
    expect.soft(uuid(10)).toHaveLength(10);
  });

  test("指定长度及基数", () => {
    expect.soft(uuid(10, { radix: 10 })).toHaveLength(10);
  });

  test("指定长度及字符串", () => {
    expect.soft(uuid(10, { characters: "987654321" })).toHaveLength(10);
  });

  test("指定无效的字符串", () => {
    expect.soft(uuid(10, { characters: undefined })).toBe("");
  });
});