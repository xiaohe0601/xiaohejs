/**
 * 扁平数组转树形结构数组-配置项
 *
 * @since 0.0.4
 */
export interface IFlat2TreeOptions<T> {
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