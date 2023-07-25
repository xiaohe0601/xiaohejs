import type { LngLatArray, LngLatLike } from "../types/geometry";

import { points2array } from "./point2array";

/**
 * 获取平面多边形中心点坐标
 *
 * @since 0.0.5
 * @param points            平面多边形范围坐标点集合
 * @returns {LngLatArray}   平面多边形中心点坐标
 */
export function planeCenter(points: LngLatLike[]): LngLatArray {
  const [longitudes, latitudes] = points2array(points)
    .reduce((previous: [number[], number[]], point) => {
      previous[0].push(point[0]);
      previous[1].push(point[1]);

      return previous;
    }, [[], []]);

  longitudes.sort((a, b) => a - b);
  latitudes.sort((a, b) => a - b);

  return [
    (longitudes[0] + longitudes[longitudes.length - 1]) / 2,
    (latitudes[0] + latitudes[latitudes.length - 1]) / 2
  ];
}