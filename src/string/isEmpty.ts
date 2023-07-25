import type { NullableString } from "../types/common";

/**
 * 是否为空字符串
 *
 * @since 0.0.1
 * @param [str]           字符串
 * @param [trim=false]    是否String#trim()
 * @returns {boolean}     是否为空字符串
 */
export function isEmpty(str: NullableString, trim = false): boolean {
  if (str == null) {
    return true;
  }

  if (trim && typeof str.trim === "function") {
    return str.trim().length <= 0;
  }

  return str.length <= 0;
}