import { NullableNumber } from "../common";

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