import type { NumberLike } from "../types/common";

/**
 * 阿拉伯数字转为中文数字
 *
 * @since 0.0.4
 * @param num           阿拉伯数字
 * @returns {string}    中文数字
 */
export function number2chinese(num: NumberLike): string {
  const units = ["十", "百", "千", "万", "十", "百", "千", "亿", "十", "百", "千"];

  const str = String(num);

  const result = ["@"];

  let cursor = 0;
  for (let i = str.length - 1; ; i -= 1) {
    result.unshift(("零一二三四五六七八九")[Number(str[i])]);

    if (i <= 0) {
      break;
    }

    result.unshift(units[cursor += 1]);
  }

  return result.join("")
    .replace(/(零[千百十]){1,3}/g, "零")
    .replace(/零{2,}/g, "零")
    .replace(/零([万亿])/g, "$1")
    .replace(/亿万/g, "亿")
    .replace(/零*@/g, "");
}