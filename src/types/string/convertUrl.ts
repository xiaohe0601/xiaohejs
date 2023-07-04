import { NullableString } from "../common";

/**
 * 转换Url相对路径-缺省值
 *
 * @since 0.1.0
 */
export interface IConvertUrlConfig {
  /**
   * Url基地址
   */
  base: NullableString;
  /**
   * 例外的Url前缀
   */
  excludes: string[];
}

/**
 * 转换Url相对路径-配置项
 *
 * @since 0.0.6
 */
export interface IConvertUrlOptions {
  /**
   * Url基地址
   */
  readonly base?: NullableString;
  /**
   * Url额外前缀
   */
  readonly prefix?: NullableString;
}