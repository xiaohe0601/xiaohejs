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
        var removeLeadingSeparator = (_a = Object.assign({}, StringUtils.DefaultSplitOptions, options), _a.removeLeadingSeparator), removeTrailingSeparator = _a.removeTrailingSeparator;
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
        return str.replace(/([A-Z])/g, "_$1")
            .toLowerCase();
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
     * 转换Url相对路径
     *
     * @since 0.0.6
     * @param [value]                                     Url地址
     * @param [options]                                   配置项
     * @param [options.base=StringUtils.ConvertUrlBase]   Url基地址
     * @param [options.prefix]                            Url额外前缀
     * @returns {string | null | undefined}               转换后的Url地址
     */
    StringUtils.convertUrl = function (value, options) {
        var _a, _b;
        var base = (_a = Object.assign({}, StringUtils.DefaultConvertUrlOptions, options), _b = _a.base, _b === void 0 ? StringUtils.ConvertUrlBase : _b), prefix = _a.prefix;
        if (value == null || value.length <= 0 || StringUtils.ConvertUrlStartsExcludes.findIndex(function (it) { return value.startsWith(it); }) >= 0 || base == null || value.startsWith(base)) {
            return value;
        }
        return "".concat(prefix != null ? prefix : "").concat(base).concat(value.startsWith("/") ? "" : "/").concat(value);
    };
    ;
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
    StringUtils.uuid = function (length, options) {
        var _a;
        var radix = (_a = Object.assign({}, StringUtils.DefaultUuidOptions, options), _a.radix), characters = _a.characters;
        if (characters == null) {
            return "";
        }
        var chars = characters.split("");
        var uuid = [];
        if (length != null) {
            var radi = (radix == null || radix <= 0) ? chars.length : radix;
            for (var i = 0; i < length; i += 1) {
                uuid[i] = chars[0 | Math.random() * radi];
            }
        }
        else {
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
            uuid[14] = "4";
            for (var i = 0; i < 36; i += 1) {
                if (uuid[i] == null) {
                    var r = 0 | Math.random() * 16;
                    uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r];
                }
            }
        }
        return uuid.join("");
    };
    ;
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
    StringUtils.formatFileSize = function (bit, options) {
        var _a;
        if (bit === void 0) { bit = 0; }
        var lowercase = (_a = Object.assign({}, StringUtils.DefaultFormatFileSizeOptions, options), _a.lowercase), digits = _a.digits;
        var units = (lowercase !== null && lowercase !== void 0 ? lowercase : StringUtils.DefaultFormatFileSizeOptions.lowercase) ? ["b", "kb", "mb", "gb", "tb", "pb", "eb", "zb", "yb"] : ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
        var bits = Number(bit);
        var index = Math.floor(Math.log(bits) / Math.log(1024));
        var size = bits / Math.pow(1024, index);
        if (digits != null) {
            return "".concat(size.toFixed(digits)).concat(units[index]);
        }
        return "".concat(size).concat(units[index]);
    };
    ;
    /**
     * 分割字符串-默认配置项
     *
     * @since 0.0.1
     */
    StringUtils.DefaultSplitOptions = {
        removeLeadingSeparator: true,
        removeTrailingSeparator: true
    };
    /**
     * 转换Url相对路径-默认Url基地址
     *
     * @since 0.0.6
     */
    StringUtils.ConvertUrlBase = "";
    /**
     * 转换Url相对路径-例外的Url前缀
     *
     * @since 0.0.6
     */
    StringUtils.ConvertUrlStartsExcludes = ["http", "ws", "udp", "tcp"];
    /**
     * 转换Url相对路径-默认配置项
     *
     * @since 0.0.6
     */
    StringUtils.DefaultConvertUrlOptions = {
        base: undefined,
        prefix: null
    };
    /**
     * 生成uuid-默认配置项
     *
     * @since 0.0.6
     */
    StringUtils.DefaultUuidOptions = {
        radix: -1,
        characters: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    };
    /**
     * 格式化文件大小-默认配置项
     *
     * @since 0.0.6
     */
    StringUtils.DefaultFormatFileSizeOptions = {
        lowercase: true,
        digits: null
    };
    return StringUtils;
}());
//# sourceMappingURL=string.js.map