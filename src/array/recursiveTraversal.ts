import { IObjectRecord, IRecursiveTraversalOptions } from "../types";

/**
 * 递归遍历树形结构数组-默认配置项
 *
 * @since 0.0.4
 */
export const DefaultRecursiveTraversalOptions: IRecursiveTraversalOptions<any> = {
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
export function recursiveTraversal<T extends IObjectRecord>(array: T[], options?: IRecursiveTraversalOptions<T>): void {
  const { childrenKey, processor } = Object.assign({}, DefaultRecursiveTraversalOptions, options);

  if (array == null || childrenKey == null) {
    return;
  }

  for (const item of array) {
    if (typeof processor === "function") {
      processor(item, options?.parent);
    }

    const children = item[childrenKey];
    if (children && children.length > 0) {
      recursiveTraversal(children, Object.assign({}, options, { parent: item }));
    }
  }
}