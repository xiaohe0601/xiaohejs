"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringUtils = void 0;
/**
 * 字符串工具类
 *
 * @since 0.0.1
 * @author 小何同学
 */
var StringUtils = exports.StringUtils = /** @class */ (function () {
    function StringUtils() {
    }
    /**
     * 是否为空字符串
     *
     * @since 0.0.1
     * @param [str]           字符串
     * @param [trim=false]    是否String#trim()
     * @returns {boolean}     是否为空字符串
     */
    StringUtils.isEmpty = function (str, trim) {
        if (trim === void 0) { trim = false; }
        return str == null || (trim ? str.trim() : str).length <= 0;
    };
    ;
    /**
     * 是否为非空字符串
     *
     * @since 0.0.1
     * @param [str]           字符串
     * @param [trim=false]    是否String#trim()
     * @returns {boolean}     是否为非空字符串
     */
    StringUtils.isNotEmpty = function (str, trim) {
        if (trim === void 0) { trim = false; }
        return !StringUtils.isEmpty(str, trim);
    };
    ;
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
        var _a;
        if (separator === void 0) { separator = ","; }
        var removeLeadingSeparator = (_a = Object.assign({}, StringUtils.DefaultStringUtilsSplitOptions, options), _a.removeLeadingSeparator), removeTrailingSeparator = _a.removeTrailingSeparator;
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
    ;
    /**
     * 下划线风格转驼峰风格字符串
     *
     * @since 0.0.1
     * @param [str]               下划线风格字符串
     * @returns {string | null}   驼峰风格字符串
     */
    StringUtils.underline2hump = function (str) {
        if (str == null) {
            return null;
        }
        return str.replace(/_(\w)/g, function (all, letter) {
            return letter.toUpperCase();
        });
    };
    ;
    /**
     * 驼峰风格转下划线风格字符串
     *
     * @since 0.0.1
     * @param [str]               驼峰风格字符串
     * @returns {string | null}   下划线风格字符串
     */
    StringUtils.hump2underline = function (str) {
        if (str == null) {
            return null;
        }
        return str.replace(/([A-Z])/g, "_$1").toLowerCase();
    };
    ;
    /**
     * 阿拉伯数字转为中文数字
     *
     * @since 0.0.4
     * @param num           阿拉伯数字
     * @returns {string}    中文数字
     */
    StringUtils.number2chinese = function (num) {
        var units = ["十", "百", "千", "万", "十", "百", "千", "亿", "十", "百", "千"];
        var str = String(num);
        var result = ["@"];
        var cursor = 0;
        for (var i = str.length - 1;; i -= 1) {
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
    ;
    /**
     * 分割字符串-默认配置项
     *
     * @since 0.0.1
     */
    StringUtils.DefaultStringUtilsSplitOptions = {
        removeLeadingSeparator: true,
        removeTrailingSeparator: true
    };
    return StringUtils;
}());
//# sourceMappingURL=string.js.map