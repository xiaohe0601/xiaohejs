/**
 * 对象型经纬度坐标点
 *
 * @since 0.0.5
 */
export interface ILngLat {
  /**
   * 经度
   */
  longitude: number;
  /**
   * 纬度
   */
  latitude: number;
}

/**
 * 数组型经纬度坐标点
 *
 * @since 0.0.5
 */
export type LngLatArray = [longitude: number, latitude: number];

/**
 * 联合型经纬度坐标点
 *
 * @since 0.0.5
 */
export type LngLatLike = ILngLat | LngLatArray;