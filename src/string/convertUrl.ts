import { NullableString } from "../types/common";
import { IConvertUrlConfig, IConvertUrlOptions } from "../types/string";

/**
 * 转换Url相对路径-默认缺省值
 *
 * @since 0.1.0
 */
export const ConvertUrlConfig: IConvertUrlConfig = {
  base: "",
  excludes: ["http", "ws", "udp", "tcp"]
};

/**
 * 转换Url相对路径-默认配置项
 *
 * @since 0.0.6
 */
export const DefaultConvertUrlOptions: IConvertUrlOptions = {
  prefix: null
};

/**
 * 转换Url相对路径
 *
 * @since 0.0.6
 * @param [value]                                 Url地址
 * @param [options]                               配置项
 * @param [options.base=ConvertUrlConfig.base]    Url基地址
 * @param [options.prefix]                        Url额外前缀
 * @returns {NullableString}                      转换后的Url地址
 */
export function convertUrl(value: NullableString, options?: IConvertUrlOptions): NullableString {
  const { base = ConvertUrlConfig.base, prefix } = Object.assign({}, DefaultConvertUrlOptions, options);

  if (value == null || value.length <= 0
    || base == null || value.startsWith(base)
    || ConvertUrlConfig.excludes.findIndex((it) => value.startsWith(it)) >= 0) {
    return value;
  }

  return `${prefix != null ? prefix : ""}${base}${value.startsWith("/") ? "" : "/"}${value}`;
}