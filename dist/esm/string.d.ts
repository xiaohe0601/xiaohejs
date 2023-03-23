/**
 * 字符串工具类
 *
 * @since 0.0.1
 * @author 小何同学
 */
export declare class StringUtils {
    /**
     * 是否为空字符串
     *
     * @since 0.0.1
     * @param [str]           字符串
     * @param [trim=false]    是否String#trim()
     * @returns {boolean}     是否为空字符串
     */
    static isEmpty(str?: string, trim?: boolean): boolean;
    /**
     * 是否为非空字符串
     *
     * @since 0.0.1
     * @param [str]           字符串
     * @param [trim=false]    是否String#trim()
     * @returns {boolean}     是否为非空字符串
     */
    static isNotEmpty(str?: string, trim?: boolean): boolean;
    /**
     * 分割字符串-默认配置项
     *
     * @since 0.0.1
     */
    static readonly DefaultStringUtilsSplitOptions: IStringUtilsSplitOptions;
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
    static split(str?: string, separator?: string, options?: IStringUtilsSplitOptions): string[];
    /**
     * 下划线风格转驼峰风格字符串
     *
     * @since 0.0.1
     * @param [str]               下划线风格字符串
     * @returns {string | null}   驼峰风格字符串
     */
    static underline2hump(str?: string): string | null;
    /**
     * 驼峰风格转下划线风格字符串
     *
     * @since 0.0.1
     * @param [str]               驼峰风格字符串
     * @returns {string | null}   下划线风格字符串
     */
    static hump2underline(str?: string): string | null;
    /**
     * 阿拉伯数字转为中文数字
     *
     * @since 0.0.4
     * @param num           阿拉伯数字
     * @returns {string}    中文数字
     */
    static number2chinese(num: number): string;
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
    readonly removeLeadingSeparator?: boolean;
    /**
     * 是否移除结尾的分隔符
     */
    readonly removeTrailingSeparator?: boolean;
}
