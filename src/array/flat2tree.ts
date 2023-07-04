import { IObjectMap, IObjectRecord } from "../types/common";
import { IFlat2TreeOptions } from "../types/array";

/**
 * 扁平数组转树形结构数组-默认配置项
 *
 * @since 0.0.4
 */
export const DefaultFlat2TreeOptions: IFlat2TreeOptions<any> = {
  key: "id",
  parentKey: "pid",
  processor: (item) => (item)
};

/**
 * 扁平数组转树形结构数组
 *
 * @since 0.0.4
 * @template T
 * @param [array]                               扁平数组
 * @param [options]                             配置项
 * @param [options.key="id"]                    节点唯一标识属性名
 * @param [options.parentKey="pid"]             父节点唯一标识属性名
 * @param [options.processor=(item)=>(item)]    节点数据处理器
 * @returns {T[]}                               树形结构数组
 */
export function flat2tree<T extends IObjectRecord & { children?: T[] }>(array: T[], options?: IFlat2TreeOptions<T>): T[] {
  const { key, parentKey, processor } = Object.assign({}, DefaultFlat2TreeOptions, options);

  if (array == null || key == null || parentKey == null || processor == null) {
    return [];
  }

  const map = array.reduce((previous: IObjectMap<T>, item: T) => {
    previous[item[key]] = item;
    return previous;
  }, {});

  return array.reduce((previous: T[], item: T) => {
    if (item[parentKey] != null) {
      const parent = map[item[parentKey]];

      if (parent != null) {
        if (parent.children == null) {
          parent.children = [];
        }
        parent.children.push(processor(item));
      } else {
        previous.push(processor(item));
      }
    } else {
      previous.push(processor(item));
    }

    return previous;
  }, []);
}