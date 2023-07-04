/**
 * 生成uuid-配置项
 *
 * @since 0.0.6
 */
export interface IUuidOptions {
  /**
   * 生成uuid的基数
   */
  readonly radix?: number;
  /**
   * 参与生成uuid的字符
   */
  readonly characters?: string;
}