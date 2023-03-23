/**
 * 字符串工具类
 *
 * @since     0.0.1
 * @author    小何同学
 */
var StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    /**
     * 是否为空字符串
     *
     * @since                 0.0.1
     * @param [str]           字符串
     * @param [trim=false]    是否String#trim()
     * @returns {boolean}     是否为空字符串
     */
    StringUtils.isEmpty = function (str, trim) {
        if (trim === void 0) { trim = false; }
        return str == null || (trim ? str.trim() : str).length <= 0;
    };
    /**
     * 是否为非空字符串
     *
     * @since                 0.0.1
     * @param [str]           字符串
     * @param [trim=false]    是否String#trim()
     * @returns {boolean}     是否为非空字符串
     */
    StringUtils.isNotEmpty = function (str, trim) {
        if (trim === void 0) { trim = false; }
        return !StringUtils.isEmpty(str, trim);
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
    StringUtils.split = function (str, separator, options) {
        if (separator === void 0) { separator = ","; }
        var _a = Object.assign({}, StringUtils.DefaultStringUtilsSplitOptions, options), removeLeadingSeparator = _a.removeLeadingSeparator, removeTrailingSeparator = _a.removeTrailingSeparator;
        if (str == null || str.length <= 0) {
            return [];
        }
        if (removeLeadingSeparator) {
            str = str.replace(new RegExp("^".concat(separator)), "");
        }
        if (removeTrailingSeparator) {
            str = str.replace(new RegExp("".concat(separator, "$")), "");
        }
        return str.split(separator);
    };
    /**
     * 下划线风格转驼峰风格字符串
     *
     * @since 0.0.1
     * @param [str]             下划线风格字符串
     * @returns {string|null}   驼峰风格字符串
     */
    StringUtils.underline2hump = function (str) {
        if (str == null) {
            return null;
        }
        return str.replace(/_(\w)/g, function (all, letter) {
            return letter.toUpperCase();
        });
    };
    /**
     * 驼峰风格转下划线风格字符串
     *
     * @since 0.0.1
     * @param [str]             驼峰风格字符串
     * @returns {string|null}   下划线风格字符串
     */
    StringUtils.hump2underline = function (str) {
        if (str == null) {
            return null;
        }
        return str.replace(/([A-Z])/g, "_$1").toLowerCase();
    };
    /**
     * 分割字符串默认配置项
     *
     * @since 0.0.1
     */
    StringUtils.DefaultStringUtilsSplitOptions = {
        removeLeadingSeparator: true,
        removeTrailingSeparator: true
    };
    return StringUtils;
}());
export default StringUtils;
//# sourceMappingURL=string.js.map