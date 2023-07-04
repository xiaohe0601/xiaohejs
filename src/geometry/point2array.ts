import { LngLatArray, LngLatLike } from "../types/geometry";

/**
 * 联合型坐标点转数组型坐标点
 *
 * @since 0.0.5
 * @param point             联合型坐标点
 * @returns {LngLatArray}   数组型坐标点
 */
export function point2array(point: LngLatLike): LngLatArray {
  if (Array.isArray(point)) {
    return point;
  }

  return [point.longitude, point.latitude];
}

/**
 * 联合型坐标点集合转数组型坐标点集合
 *
 * @since 0.0.5
 * @param points              联合型坐标点集合
 * @returns {LngLatArray[]}   数组型坐标点集合
 */
export function points2array(points: LngLatLike[]): LngLatArray[] {
  return points.map((point) => point2array(point));
}