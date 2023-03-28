/**
 * 字符串工具类
 *
 * @since 0.0.1
 * @author 小何同学
 */
export class StringUtils {

  /**
   * 是否为空字符串
   *
   * @since 0.0.1
   * @param [str]           字符串
   * @param [trim=false]    是否String#trim()
   * @returns {boolean}     是否为空字符串
   */
  public static isEmpty(str?: string | null, trim = false): boolean {
    return str == null || (trim ? str.trim() : str).length <= 0;
  };

  /**
   * 是否为非空字符串
   *
   * @since 0.0.1
   * @param [str]           字符串
   * @param [trim=false]    是否String#trim()
   * @returns {boolean}     是否为非空字符串
   */
  public static isNotEmpty(str?: string | null, trim = false): boolean {
    return !StringUtils.isEmpty(str, trim);
  };

  /**
   * 分割字符串-默认配置项
   *
   * @since 0.0.1
   */
  public static readonly DefaultSplitOptions: IStringUtilsSplitOptions = {
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
  public static split(str?: string | null, separator = ",", options?: IStringUtilsSplitOptions | null): string[] {
    const { removeLeadingSeparator, removeTrailingSeparator } = Object.assign({}, StringUtils.DefaultSplitOptions, options);

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
  };

  /**
   * 下划线风格转驼峰风格字符串
   *
   * @since 0.0.1
   * @param [str]               下划线风格字符串
   * @returns {string | null}   驼峰风格字符串
   */
  public static underline2hump(str?: string | null): string | null {
    if (str == null) {
      return null;
    }

    return str.replace(/_(\w)/g, (all, letter) => {
      return letter.toUpperCase();
    });
  };

  /**
   * 驼峰风格转下划线风格字符串
   *
   * @since 0.0.1
   * @param [str]               驼峰风格字符串
   * @returns {string | null}   下划线风格字符串
   */
  public static hump2underline(str?: string | null): string | null {
    if (str == null) {
      return null;
    }

    return str.replace(/([A-Z])/g, "_$1")
      .toLowerCase();
  };

  /**
   * 阿拉伯数字转为中文数字
   *
   * @since 0.0.4
   * @param num           阿拉伯数字
   * @returns {string}    中文数字
   */
  public static number2chinese(num: number): string {
    const units = ["十", "百", "千", "万", "十", "百", "千", "亿", "十", "百", "千"];

    const str = String(num);

    const result = ["@"];

    let cursor = 0;
    for (let i = str.length - 1; ; i -= 1) {
      result.unshift(("零一二三四五六七八九")[Number(str[i])]);

      if (i <= 0) {
        break;
      }

      result.unshift(units[cursor += 1]);
    }

    return result.join("")
      .replace(/(零[千百十]){1,3}/g, "零")
      .replace(/零{2,}/g, "零")
      .replace(/零([万亿])/g, "$1")
      .replace(/亿万/g, "亿")
      .replace(/零*@/g, "");
  };

  /**
   * 转换Url相对路径-默认Url基地址
   *
   * @since 0.0.6
   */
  public static ConvertUrlBase: string = "";

  /**
   * 转换Url相对路径-例外的Url前缀
   *
   * @since 0.0.6
   */
  public static ConvertUrlStartsExcludes: string[] = ["http", "ws", "udp", "tcp"];

  /**
   * 转换Url相对路径-默认配置项
   *
   * @since 0.0.6
   */
  public static readonly DefaultConvertUrlOptions: IStringUtilsConvertUrlOptions = {
    base: undefined,
    prefix: null
  };

  /**
   * 转换Url相对路径
   *
   * @since 0.0.6
   * @param [value]                                     Url地址
   * @param [options]                                   配置项
   * @param [options.base=StringUtils.ConvertUrlBase]   Url基地址
   * @param [options.prefix]                            Url额外前缀
   * @returns {string | null | undefined}               转换后的Url地址
   */
  public static convertUrl(value?: string | null, options?: IStringUtilsConvertUrlOptions | null): string | null | undefined {
    const { base = StringUtils.ConvertUrlBase, prefix } = Object.assign({}, StringUtils.DefaultConvertUrlOptions, options);

    if (value == null || value.length <= 0 || StringUtils.ConvertUrlStartsExcludes.findIndex((it) => value.startsWith(it)) >= 0 || base == null || value.startsWith(base)) {
      return value;
    }

    return `${prefix != null ? prefix : ""}${base}${value.startsWith("/") ? "" : "/"}${value}`;
  };

  /**
   * 生成uuid-默认配置项
   *
   * @since 0.0.6
   */
  public static readonly DefaultUuidOptions: IStringUtilsUuidOptions = {
    radix: -1,
    characters: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  };

  /**
   * 生成uuid (若未指定长度会生成rfc4122标准的uuid，否则只是生成随机字符串)
   *
   * @since 0.0.6
   * @param [length]                                                                                生成uuid的长度
   * @param [options]                                                                               配置项
   * @param [options.radix]                                                                         生成uuid的基数
   * @param [options.characters="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"]   参与生成uuid的字符
   * @returns {string}                                                                              生成的uuid
   */
  public static uuid(length?: number | null, options?: IStringUtilsUuidOptions | null): string {
    const { radix, characters } = Object.assign({}, StringUtils.DefaultUuidOptions, options);

    if (characters == null) {
      return "";
    }

    const chars = characters.split("");

    const uuid = [];

    if (length != null) {
      const radi = (radix == null || radix <= 0) ? chars.length : radix;

      for (let i = 0; i < length; i += 1) {
        uuid[i] = chars[0 | Math.random() * radi];
      }
    } else {
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
      uuid[14] = "4";

      for (let i = 0; i < 36; i += 1) {
        if (uuid[i] == null) {
          const r = 0 | Math.random() * 16;
          uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r];
        }
      }
    }

    return uuid.join("");
  };

  /**
   * 格式化文件大小-默认配置项
   *
   * @since 0.0.6
   */
  public static readonly DefaultFormatFileSizeOptions: IStringUtilsFormatFileSizeOptions = {
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
  public static formatFileSize(bit: number | null = 0, options?: IStringUtilsFormatFileSizeOptions | null): string {
    const { lowercase, digits } = Object.assign({}, StringUtils.DefaultFormatFileSizeOptions, options);

    const units = (lowercase ?? StringUtils.DefaultFormatFileSizeOptions.lowercase) ? ["b", "kb", "mb", "gb", "tb", "pb", "eb", "zb", "yb"] : ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const bits = Number(bit);

    const index = Math.floor(Math.log(bits) / Math.log(1024));

    const size = bits / 1024 ** index;

    if (digits != null) {
      return `${size.toFixed(digits)}${units[index]}`;
    }

    return `${size}${units[index]}`;
  };

}

/**
 * 分割字符串-配置项
 *
 * @since 0.0.1
 */
export interface IStringUtilsSplitOptions {
  /**
   * 是否移除开头的分隔符
   */
  readonly removeLeadingSeparator?: boolean | null;
  /**
   * 是否移除结尾的分隔符
   */
  readonly removeTrailingSeparator?: boolean | null;
}

/**
 * 转换Url相对路径-配置项
 *
 * @since 0.0.6
 */
export interface IStringUtilsConvertUrlOptions {
  /**
   * Url基地址
   */
  readonly base?: string | null;
  /**
   * Url额外前缀
   */
  readonly prefix?: string | null;
}

/**
 * 生成uuid-配置项
 *
 * @since 0.0.6
 */
export interface IStringUtilsUuidOptions {
  /**
   * 生成uuid的基数
   */
  readonly radix?: number | null;
  /**
   * 参与生成uuid的字符
   */
  readonly characters?: string | null;
}

/**
 * 格式化文件大小-配置项
 *
 * @since 0.0.6
 */
export interface IStringUtilsFormatFileSizeOptions {
  /**
   * 单位是否小写
   */
  readonly lowercase?: boolean | null;
  /**
   * 小数位数
   */
  readonly digits?: number | null;
}