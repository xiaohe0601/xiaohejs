import type { NullableString } from "../types";

import { isEmpty } from "./isEmpty";

/**
 * 是否为非空字符串
 *
 * @since 0.0.1
 * @param [str]           字符串
 * @param [trim=false]    是否String#trim()
 * @returns {boolean}     是否为非空字符串
 */
export function isNotEmpty(str: NullableString, trim = false): boolean {
  return !isEmpty(str, trim);
}