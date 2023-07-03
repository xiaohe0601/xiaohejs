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