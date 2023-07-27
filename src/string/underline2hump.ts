import type { NullableString } from "../types";

/**
 * 下划线风格转驼峰风格字符串
 *
 * @since 0.0.1
 * @param [str]               下划线风格字符串
 * @returns {NullableString}  驼峰风格字符串
 */
export function underline2hump(str: NullableString): NullableString {
  if (str == null) {
    return null;
  }

  return str.replace(/_(\w)/g, (all, letter) => {
    return letter.toUpperCase();
  });
}