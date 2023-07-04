import { IUuidOptions } from "../types/string";

/**
 * 生成uuid-默认配置项
 *
 * @since 0.0.6
 */
export const DefaultUuidOptions: IUuidOptions = {
  radix: -1,
  characters: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
};

/**
 * 生成uuid (若未指定长度会生成rfc4122标准的uuid，否则只是生成随机字符串)
 *
 * @since 0.0.6
 * @param [length]                                                                                生成uuid的长度
 * @param [options]                                                                               配置项
 * @param [options.radix]                                                                         生成uuid的基数
 * @param [options.characters="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"]   参与生成uuid的字符
 * @returns {string}                                                                              生成的uuid
 */
export function uuid(length?: number, options?: IUuidOptions): string {
  const { radix, characters } = Object.assign({}, DefaultUuidOptions, options);

  if (characters == null) {
    return "";
  }

  const chars = characters.split("");

  const uuid = [];

  if (length != null) {
    const radi = (radix == null || radix <= 0) ? chars.length : radix;

    for (let i = 0; i < length; i += 1) {
      uuid[i] = chars[0 | Math.random() * radi];
    }
  } else {
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
    uuid[14] = "4";

    for (let i = 0; i < 36; i += 1) {
      if (uuid[i] == null) {
        const r = 0 | Math.random() * 16;
        uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r];
      }
    }
  }

  return uuid.join("");
}