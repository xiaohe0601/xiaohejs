/**
 * 数组工具类
 *
 * @since 0.0.4
 * @author 小何同学
 */
export declare class ArrayUtils {
    /**
     * 扁平数组转树形结构数组-默认配置项
     *
     * @since 0.0.4
     */
    static readonly DefaultFlat2TreeOptions: IArrayUtilsFlat2TreeOptions<any>;
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
    static flat2tree<T extends {
        [children: string]: any;
    }>(array?: T[] | null, options?: IArrayUtilsFlat2TreeOptions<T> | null): T[];
    /**
     * 树形结构数组转扁平数组-默认配置项
     *
     * @since 0.0.4
     */
    static readonly DefaultTree2FlatOptions: IArrayUtilsTree2FlatOptions<any>;
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
    static tree2flat<T extends {
        [children: string]: T[] | any;
    }>(array?: T[] | null, options?: IArrayUtilsTree2FlatOptions<T> | null): T[];
    /**
     * 递归遍历树形结构数组-默认配置项
     *
     * @since 0.0.4
     */
    static readonly DefaultRecursiveTraversalOptions: IArrayUtilsRecursiveTraversalOptions<any>;
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
    static recursiveTraversal<T extends {
        [children: string]: T[] | any;
    }>(array?: T[] | null, options?: IArrayUtilsRecursiveTraversalOptions<T> | null): void;
}
/**
 * 扁平数组转树形结构数组-配置项
 *
 * @since 0.0.4
 */
export interface IArrayUtilsFlat2TreeOptions<T> {
    /**
     * 节点唯一标识属性名
     */
    readonly key?: string | null;
    /**
     * 父节点唯一标识属性名
     */
    readonly parentKey?: string | null;
    /**
     * 节点数据处理器
     *
     * @param item    当前节点
     */
    readonly processor?: ((item: T) => T) | null;
}
/**
 * 树形结构数组转扁平数组-配置项
 *
 * @since 0.0.4
 */
export interface IArrayUtilsTree2FlatOptions<T> {
    /**
     * 子节点集合属性名
     */
    readonly childrenKey?: string | null;
    /**
     * 节点数据处理器
     *
     * @param item    当前节点
     */
    readonly processor?: ((item: T) => T) | null;
}
/**
 * 递归遍历树形结构数组-配置项
 *
 * @since 0.0.4
 */
export interface IArrayUtilsRecursiveTraversalOptions<T> {
    /**
     * 子节点集合属性名
     */
    readonly childrenKey?: string | null;
    /**
     * 父节点数据
     */
    readonly parent?: T | null;
    /**
     * 节点数据处理器
     *
     * @param item      当前节点
     * @param parent    当前节点的父节点
     */
    readonly processor?: ((item: T, parent?: T | null) => void) | null;
}
