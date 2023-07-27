import type { NullableNumber } from "../types";

/**
 * 格式化文件大小-配置项
 *
 * @since 0.0.6
 */
export interface IFormatFileSizeOptions {
  /**
   * 单位是否小写
   */
  readonly lowercase?: boolean;
  /**
   * 小数位数
   */
  readonly digits?: NullableNumber;
}

/**
 * 格式化文件大小-默认配置项
 *
 * @since 0.0.6
 */
export const DefaultFormatFileSizeOptions: IFormatFileSizeOptions = {
  lowercase: true,
  digits: null
};

/**
 * 格式化文件大小
 *
 * @since 0.0.6
 * @param [bit=0]                     文件大小(单位: b)
 * @param [options]                   配置项
 * @param [options.lowercase=true]    单位是否小写
 * @param [options.digits]            小数位数
 * @returns {string}                  格式化结果
 */
export function formatFileSize(bit: number = 0, options?: IFormatFileSizeOptions): string {
  const { lowercase, digits } = Object.assign({}, DefaultFormatFileSizeOptions, options);

  const units = (lowercase ?? DefaultFormatFileSizeOptions.lowercase) ? ["b", "kb", "mb", "gb", "tb", "pb", "eb", "zb", "yb"] : ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const bits = Number(bit);

  const index = Math.floor(Math.log(bits) / Math.log(1024));

  const size = bits / 1024 ** index;

  if (digits != null) {
    return `${size.toFixed(digits)}${units[index]}`;
  }

  return `${size}${units[index]}`;
}