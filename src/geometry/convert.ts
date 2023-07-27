/**
 * 平方米转亩
 *
 * @since 0.0.5
 * @param sm            平方米
 * @param [fixed]       最大小数位数
 * @returns {number}    亩
 */
export function sm2mu(sm: number, fixed?: number): number {
  return decimal(sm * 0.0015);
}

/**
 * 亩转平方米
 *
 * @since 0.0.5
 * @param mu            亩
 * @param [fixed]       最大小数位数
 * @returns {number}    平方米
 */
export function mu2sm(mu: number, fixed?: number): number {
  return decimal(mu / 0.0015);
}

/**
 * 平方米转公顷
 *
 * @since 0.0.5
 * @param sm            平方米
 * @param [fixed]       最大小数位数
 * @returns {number}    公顷
 */
export function sm2ha(sm: number, fixed?: number): number {
  return decimal(sm * 0.0001);
}

/**
 * 公顷转平方米
 *
 * @since 0.0.5
 * @param ha            公顷
 * @param [fixed]       最大小数位数
 * @returns {number}    平方米
 */
export function ha2sm(ha: number, fixed?: number): number {
  return decimal(ha * 10000);
}

/**
 * 亩转公顷
 *
 * @since 0.0.5
 * @param mu            亩
 * @param [fixed]       最大小数位数
 * @returns {number}    公顷
 */
export function mu2ha(mu: number, fixed?: number): number {
  return decimal(mu / 15);
}

/**
 * 公顷转亩
 *
 * @since 0.0.5
 * @param ha            公顷
 * @param [fixed]       最大小数位数
 * @returns {number}    亩
 */
export function ha2mu(ha: number, fixed?: number): number {
  return decimal(ha * 15);
}

/**
 * 转换小数位数
 *
 * @since 0.0.5
 * @param x             数字
 * @param [fixed]       最大小数位数
 * @returns {number}    转换结果
 */
export function decimal(x: number, fixed?: number): number {
  return (fixed == null || fixed < 0) ? x : Number(x.toFixed(fixed));
}