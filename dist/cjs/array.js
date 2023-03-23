"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayUtils = void 0;
/**
 * 数组工具类
 *
 * @since 0.0.4
 * @author 小何同学
 */
var ArrayUtils = exports.ArrayUtils = /** @class */ (function () {
    function ArrayUtils() {
    }
    /**
     * 扁平数组转树形结构数组
     *
     * @since 0.0.4
     * @template T
     * @param [array]                               扁平数组
     * @param [options]                             配置项
     * @param [options.key="id"]                    节点唯一标识属性名
     * @param [options.parentKey="pid"]             父节点唯一标识属性名
     * @param [options.processor=(item)=>(item)]    节点数据处理器
     * @returns {T[]}                               树形结构数组
     */
    ArrayUtils.flat2tree = function (array, options) {
        var _a;
        var key = (_a = Object.assign({}, ArrayUtils.DefaultFlat2TreeOptions, options), _a.key), parentKey = _a.parentKey, processor = _a.processor;
        if (array == null || key == null || parentKey == null || processor == null) {
            return [];
        }
        var map = array.reduce(function (previous, item) {
            previous[item[key]] = item;
            return previous;
        }, {});
        return array.reduce(function (previous, item) {
            if (item[parentKey] != null) {
                var parent_1 = map[item[parentKey]];
                if (parent_1 != null) {
                    if (parent_1.children == null) {
                        parent_1.children = [];
                    }
                    parent_1.children.push(processor(item));
                }
                else {
                    previous.push(processor(item));
                }
            }
            else {
                previous.push(processor(item));
            }
            return previous;
        }, []);
    };
    ;
    /**
     * 树形结构数组转扁平数组
     *
     * @since 0.0.4
     * @template T
     * @param [array]                               树形结构数组
     * @param [options]                             配置项
     * @param [options.childrenKey="children"]      子节点集合属性名
     * @param [options.processor=(item)=>(item)]    节点数据处理器
     * @returns {T[]}                               扁平数组
     */
    ArrayUtils.tree2flat = function (array, options) {
        var _a;
        var childrenKey = (_a = Object.assign({}, ArrayUtils.DefaultTree2FlatOptions, options), _a.childrenKey), processor = _a.processor;
        if (array == null || childrenKey == null || processor == null) {
            return [];
        }
        return array.reduce(function (previous, _a) {
            var _b = childrenKey, children = _a[_b], others = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
            if (children && children.length > 0) {
                previous.push.apply(previous, ArrayUtils.tree2flat(children, options));
            }
            previous.push(processor(others));
            return previous;
        }, []);
    };
    ;
    /**
     * 递归遍历树形结构数组
     *
     * @since 0.0.4
     * @param [array]                             树形结构数组
     * @param [options]                           配置项
     * @param [options.childrenKey="children"]    子节点集合属性名
     * @param [options.parent]                    父节点数据
     * @param [options.processor]                 节点数据处理器
     */
    ArrayUtils.recursiveTraversal = function (array, options) {
        var _a;
        var childrenKey = (_a = Object.assign({}, ArrayUtils.DefaultRecursiveTraversalOptions, options), _a.childrenKey), processor = _a.processor;
        if (array == null || childrenKey == null) {
            return;
        }
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var item = array_1[_i];
            var children = item[childrenKey];
            if (children && children.length > 0) {
                ArrayUtils.recursiveTraversal(children, Object.assign({}, options, { parent: item }));
            }
            processor && processor(item, options === null || options === void 0 ? void 0 : options.parent);
        }
    };
    ;
    /**
     * 扁平数组转树形结构数组-默认配置项
     *
     * @since 0.0.4
     */
    ArrayUtils.DefaultFlat2TreeOptions = {
        key: "id",
        parentKey: "pid",
        processor: function (item) { return (item); }
    };
    /**
     * 树形结构数组转扁平数组-默认配置项
     *
     * @since 0.0.4
     */
    ArrayUtils.DefaultTree2FlatOptions = {
        childrenKey: "children",
        processor: function (item) { return (item); }
    };
    /**
     * 递归遍历树形结构数组-默认配置项
     *
     * @since 0.0.4
     */
    ArrayUtils.DefaultRecursiveTraversalOptions = {
        childrenKey: "children"
    };
    return ArrayUtils;
}());
//# sourceMappingURL=array.js.map