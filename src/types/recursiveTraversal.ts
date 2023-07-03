/**
 * 递归遍历树形结构数组-配置项
 *
 * @since 0.0.4
 */
export interface IRecursiveTraversalOptions<T> {
  /**
   * 子节点集合属性名
   */
  readonly childrenKey?: string;
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