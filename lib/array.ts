/**
 * 数组工具类
 *
 * @since 0.0.4
 * @author 小何同学
 */
export class ArrayUtils {

  /**
   * 扁平数组转树形结构数组-默认配置项
   *
   * @since 0.0.4
   */
  public static readonly DefaultFlat2TreeOptions: IArrayUtilsFlat2TreeOptions<any> = {
    key: "id",
    parentKey: "pid",
    processor: (item) => (item)
  };

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
  public static flat2tree<T extends { [children: string]: any }>(array?: T[], options?: IArrayUtilsFlat2TreeOptions<T>): T[] {
    const { key, parentKey, processor } = Object.assign({}, ArrayUtils.DefaultFlat2TreeOptions, options);

    if (array == null || key == null || parentKey == null || processor == null) {
      return [];
    }

    const map = array.reduce((previous, item) => {
      previous[item[key]] = item;
      return previous;
    }, {} as any);

    return array.reduce((previous, item) => {
      if (item[parentKey] != null) {
        const parent = map[item[parentKey]];

        if (parent != null) {
          if (parent.children == null) {
            parent.children = [];
          }
          parent.children.push(processor(item));
        } else {
          previous.push(processor(item));
        }
      } else {
        previous.push(processor(item));
      }

      return previous;
    }, [] as T[]);
  };

  /**
   * 树形结构数组转扁平数组-默认配置项
   *
   * @since 0.0.4
   */
  public static readonly DefaultTree2FlatOptions: IArrayUtilsTree2FlatOptions<any> = {
    childrenKey: "children",
    processor: (item) => (item)
  };

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
  public static tree2flat<T extends { [children: string]: T[] | any }>(array?: T[], options?: IArrayUtilsTree2FlatOptions<T>): T[] {
    const { childrenKey, processor } = Object.assign({}, ArrayUtils.DefaultTree2FlatOptions, options);

    if (array == null || childrenKey == null || processor == null) {
      return [];
    }

    return array.reduce((previous, { [childrenKey]: children, ...others }) => {
      if (children && children.length > 0) {
        previous.push(...ArrayUtils.tree2flat(children, options));
      }

      previous.push(processor(others));

      return previous;
    }, [] as T[]);
  };

  /**
   * 递归遍历树形结构数组-默认配置项
   *
   * @since 0.0.4
   */
  public static readonly DefaultRecursiveTraversalOptions: IArrayUtilsRecursiveTraversalOptions<any> = {
    childrenKey: "children"
  };

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
  public static recursiveTraversal<T extends { [children: string]: T[] | any }>(array?: T[], options?: IArrayUtilsRecursiveTraversalOptions<T>): void {
    const { childrenKey, processor } = Object.assign({}, ArrayUtils.DefaultRecursiveTraversalOptions, options);

    if (array == null || childrenKey == null) {
      return;
    }

    for (const item of array) {
      const children = item[childrenKey];
      if (children && children.length > 0) {
        ArrayUtils.recursiveTraversal(children, Object.assign({}, options, { parent: item }))
      }

      processor && processor(item, options?.parent);
    }
  };

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
  readonly key?: string;
  /**
   * 父节点唯一标识属性名
   */
  readonly parentKey?: string;
  /**
   * 节点数据处理器
   *
   * @param item    当前节点
   */
  readonly processor?: (item: T) => T;
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
  readonly childrenKey?: string;
  /**
   * 节点数据处理器
   *
   * @param item    当前节点
   */
  readonly processor?: (item: T) => T;
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
  readonly childrenKey?: string;
  /**
   * 父节点数据
   */
  readonly parent?: T;
  /**
   * 节点数据处理器
   *
   * @param item      当前节点
   * @param parent    当前节点的父节点
   */
  readonly processor?: (item: T, parent: T) => void;
}