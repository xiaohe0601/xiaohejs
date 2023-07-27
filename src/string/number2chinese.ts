import type { NumberLike } from "../types";

/**
 * 阿拉伯数字转为中文数字 (仅支持正整数)
 *
 * @since 0.0.4
 * @param x             阿拉伯数字
 * @returns {string}    中文数字
 */
export function number2chinese(x: NumberLike): string {
  const units = ["十", "百", "千", "万", "十", "百", "千", "亿", "十", "百", "千"];

  const chinese = "零一二三四五六七八九十";

  const number = Math.floor(Math.abs(Number(x)));

  if (number <= 10) {
    return chinese[number];
  }

  const string = String(number);

  const result = ["@"];

  let cursor = 0;
  for (let i = string.length - 1; ; i -= 1) {
    result.unshift((chinese)[Number(string[i])]);

    if (i <= 0) {
      break;
    }

    result.unshift(units[cursor]);

    cursor += 1;
  }

  return result.join("")
               .replace(/(零[千百十]){1,3}/g, "零")
               .replace(/零{2,}/g, "零")
               .replace(/零([万亿])/g, "$1")
               .replace(/亿万/g, "亿")
               .replace(/零*@/g, "");
}