/**
 * 字符串工具类
 *
 * @since     0.0.1
 * @author    小何同学
 */
export default class StringUtils {

  /**
   * 是否为空字符串
   *
   * @since                 0.0.1
   * @param [str]           字符串
   * @param [trim=false]    是否String#trim()
   * @returns {boolean}     是否为空字符串
   */
  public static isEmpty(str?: string, trim = false) {
    return str == null || (trim ? str.trim() : str).length <= 0;
  }

  /**
   * 是否为非空字符串
   *
   * @since                 0.0.1
   * @param [str]           字符串
   * @param [trim=false]    是否String#trim()
   * @returns {boolean}     是否为非空字符串
   */
  public static isNotEmpty(str?: string, trim = false) {
    return !StringUtils.isEmpty(str, trim);
  }

  /**
   * 分割字符串默认配置项
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
  }

  /**
   * 下划线风格转驼峰风格字符串
   *
   * @since 0.0.1
   * @param [str]             下划线风格字符串
   * @returns {string|null}   驼峰风格字符串
   */
  public static underline2hump(str?: string) {
    if (str == null) {
      return null;
    }

    return str.replace(/_(\w)/g, (all, letter) => {
      return letter.toUpperCase();
    });
  }

  /**
   * 驼峰风格转下划线风格字符串
   *
   * @since 0.0.1
   * @param [str]             驼峰风格字符串
   * @returns {string|null}   下划线风格字符串
   */
  public static hump2underline(str?: string) {
    if (str == null) {
      return null;
    }

    return str.replace(/([A-Z])/g, "_$1").toLowerCase();
  }

}

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