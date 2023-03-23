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
  public static isEmpty(str?: string, trim = false) {
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
  public static isNotEmpty(str?: string, trim = false) {
    return !StringUtils.isEmpty(str, trim);
  };

  /**
   * 分割字符串-默认配置项
   *
   * @since 0.0.1
   */
  public static DefaultStringUtilsSplitOptions: IStringUtilsSplitOptions = {
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
  public static split(str?: string, separator = ",", options?: IStringUtilsSplitOptions) {
    const { removeLeadingSeparator, removeTrailingSeparator } = Object.assign({}, StringUtils.DefaultStringUtilsSplitOptions, options);

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
  public static underline2hump(str?: string) {
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
  public static hump2underline(str?: string) {
    if (str == null) {
      return null;
    }

    return str.replace(/([A-Z])/g, "_$1").toLowerCase();
  };

  /**
   * 阿拉伯数字转为中文数字
   *
   * @since 0.0.4
   * @param num           阿拉伯数字
   * @returns {string}    中文数字
   */
  public static number2chinese(num: number) {
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
  removeLeadingSeparator?: boolean;
  /**
   * 是否移除结尾的分隔符
   */
  removeTrailingSeparator?: boolean;
}