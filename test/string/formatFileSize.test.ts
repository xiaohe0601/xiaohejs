import { describe, expect, test } from "vitest";

import { formatFileSize } from "../../src";

describe("StringUtils.formatFileSize", () => {
  test("10000b", () => {
    expect.soft(formatFileSize(10000)).toBe("9.765625kb");
  });

  test("10000b (小写单位)", () => {
    expect.soft(formatFileSize(10000, { lowercase: undefined })).toBe("9.765625kb");
  });

  test("10000b (大写单位)", () => {
    expect.soft(formatFileSize(10000, { lowercase: false })).toBe("9.765625KB");
  });

  test("10000b (2位小数)", () => {
    expect.soft(formatFileSize(10000, { digits: 2 })).toBe("9.77kb");
  });

  test("10000b (大写单位且2位小数)", () => {
    expect.soft(formatFileSize(10000, { lowercase: false, digits: 2 })).toBe("9.77KB");
  });
});