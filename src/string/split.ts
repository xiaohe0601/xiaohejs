import type { NullableString } from "../types/common";

import type { ISplitOptions } from "../types/string";

/**
 * 分割字符串-默认配置项
 *
 * @since 0.0.1
 */
export const DefaultSplitOptions: ISplitOptions = {
  removeLeadingSeparator: true,
  removeTrailingSeparator: true
};

/**
 * 分割字符串
 *
 * @since 0.0.1
 * @param [str]                                     字符串
 * @param [separator=","]                           分隔符
 * @param [options]                                 配置项
 * @param [options.removeLeadingSeparator=true]     是否移除开头的分隔符
 * @param [options.removeTrailingSeparator=true]    是否移除结尾的分隔符
 * @returns {string[]}                              字符串分割结果数组
 */
export function split(str: NullableString, separator = ",", options?: ISplitOptions): string[] {
  const { removeLeadingSeparator, removeTrailingSeparator } = Object.assign({}, DefaultSplitOptions, options);

  if (str == null || str.length <= 0) {
    return [];
  }

  if (removeLeadingSeparator) {
    str = str.replace(new RegExp(`^${separator}`), "");
  }
  if (removeTrailingSeparator) {
    str = str.replace(new RegExp(`${separator}$`), "");
  }

  return str.split(separator);
}