/**
 * 分割字符串-配置项
 *
 * @since 0.0.1
 */
export interface ISplitOptions {
  /**
   * 是否移除开头的分隔符
   */
  readonly removeLeadingSeparator?: boolean;
  /**
   * 是否移除结尾的分隔符
   */
  readonly removeTrailingSeparator?: boolean;
}