import type { IObjectRecord } from "../types";

/**
 * 树形结构数组转扁平数组-配置项
 *
 * @since 0.0.4
 */
export interface ITree2FlatOptions<T> {
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
 * 树形结构数组转扁平数组-默认配置项
 *
 * @since 0.0.4
 */
export const DefaultTree2FlatOptions: ITree2FlatOptions<any> = {
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
export function tree2flat<T extends IObjectRecord>(array: T[], options?: ITree2FlatOptions<T>): T[] {
  const { childrenKey, processor } = Object.assign({}, DefaultTree2FlatOptions, options);

  if (array == null || childrenKey == null || processor == null) {
    return [];
  }

  return array.reduce((previous: T[], { [childrenKey]: children, ...others }) => {
    previous.push(processor(others));

    if (children && children.length > 0) {
      previous.push(...tree2flat(children, options));
    }

    return previous;
  }, []);
}