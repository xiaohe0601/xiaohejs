import type { NullableString } from "../types";

/**
 * 驼峰风格转下划线风格字符串
 *
 * @since 0.0.1
 * @param [str]                 驼峰风格字符串
 * @returns {NullableString}    下划线风格字符串
 */
export function hump2underline(str: NullableString): NullableString {
  if (str == null) {
    return null;
  }

  return str.replace(/([A-Z])/g, "_$1").toLowerCase();
}