import { LngLatArray } from "../types/geometry";

import { DegreeRadians, RadianDegrees } from "./config";

/**
 * 计算两坐标点之间的方向
 *
 * @since 0.0.5
 * @param from          起始点数组型坐标点
 * @param to            终止点数组型坐标点
 * @returns {number}    两坐标点之间的方向
 */
export function bearing(from: LngLatArray, to: LngLatArray): number {
  const longitude1 = from[0] * DegreeRadians;
  const latitude1 = from[1] * DegreeRadians;
  const longitude2 = to[0] * DegreeRadians;
  const latitude2 = to[1] * DegreeRadians;

  const bearing = -Math.atan2(
    Math.sin(longitude1 - longitude2) * Math.cos(latitude2),
    Math.cos(latitude1) * Math.sin(latitude2) - Math.sin(latitude1) * Math.cos(latitude2) * Math.cos(longitude1 - longitude2)
  );

  return (bearing < 0 ? bearing + Math.PI * 2.0 : bearing) * RadianDegrees;
}

/**
 * 计算三坐标点之间的角度
 *
 * @since 0.0.5
 * @param p1            点1数组型坐标点
 * @param p2            点2数组型坐标点
 * @param p3            点3数组型坐标点
 * @returns {number}    三坐标点之间的角度
 */
export function angle(p1: LngLatArray, p2: LngLatArray, p3: LngLatArray): number {
  const bearing21 = bearing(p2, p1);
  const bearing23 = bearing(p2, p3);

  const angle = bearing21 - bearing23;

  return angle < 0 ? angle + 360 : angle;
}