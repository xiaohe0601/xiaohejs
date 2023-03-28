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
    static isEmpty(str?: string | null, trim?: boolean): boolean;
    /**
     * 是否为非空字符串
     *
     * @since 0.0.1
     * @param [str]           字符串
     * @param [trim=false]    是否String#trim()
     * @returns {boolean}     是否为非空字符串
     */
    static isNotEmpty(str?: string | null, trim?: boolean): boolean;
    /**
     * 分割字符串-默认配置项
     *
     * @since 0.0.1
     */
    static readonly DefaultSplitOptions: IStringUtilsSplitOptions;
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
    static split(str?: string | null, separator?: string, options?: IStringUtilsSplitOptions | null): string[];
    /**
     * 下划线风格转驼峰风格字符串
     *
     * @since 0.0.1
     * @param [str]               下划线风格字符串
     * @returns {string | null}   驼峰风格字符串
     */
    static underline2hump(str?: string | null): string | null;
    /**
     * 驼峰风格转下划线风格字符串
     *
     * @since 0.0.1
     * @param [str]               驼峰风格字符串
     * @returns {string | null}   下划线风格字符串
     */
    static hump2underline(str?: string | null): string | null;
    /**
     * 阿拉伯数字转为中文数字
     *
     * @since 0.0.4
     * @param num           阿拉伯数字
     * @returns {string}    中文数字
     */
    static number2chinese(num: number): string;
    /**
     * 转换Url相对路径-默认Url基地址
     *
     * @since 0.0.6
     */
    static ConvertUrlBase: string;
    /**
     * 转换Url相对路径-例外的Url前缀
     *
     * @since 0.0.6
     */
    static ConvertUrlStartsExcludes: string[];
    /**
     * 转换Url相对路径-默认配置项
     *
     * @since 0.0.6
     */
    static readonly DefaultConvertUrlOptions: IStringUtilsConvertUrlOptions;
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
    static convertUrl(value?: string | null, options?: IStringUtilsConvertUrlOptions | null): string | null | undefined;
    /**
     * 生成uuid-默认配置项
     *
     * @since 0.0.6
     */
    static readonly DefaultUuidOptions: IStringUtilsUuidOptions;
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
    static uuid(length?: number | null, options?: IStringUtilsUuidOptions | null): string;
    /**
     * 格式化文件大小-默认配置项
     *
     * @since 0.0.6
     */
    static readonly DefaultFormatFileSizeOptions: IStringUtilsFormatFileSizeOptions;
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
    static formatFileSize(bit?: number | null, options?: IStringUtilsFormatFileSizeOptions | null): string;
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
