import { LngLatLike } from "../types/geometry";

import { DegreeMetres, DegreeRadians, EarthRadiusMetres, PlaneAreaThreshold } from "./config";

import { points2array } from "./point2array";
import { angle } from "./angle";

/**
 * 计算平面多边形面积 (单位：平方米)
 *
 * @since 0.0.5
 * @param points        平面多边形范围坐标点集合
 * @returns {number}    平面多边形面积
 */
export function planeArea(points: LngLatLike[]): number {
  if (points.length < 3) {
    return 0;
  }

  const formats = points2array(points);

  return Math.abs(formats.reduce((previous, point, i) => {
    const j = (i + 1) % formats.length;

    const xi = formats[i][0] * DegreeMetres * Math.cos(formats[i][1] * DegreeRadians);
    const yi = formats[i][1] * DegreeMetres;
    const xj = formats[j][0] * DegreeMetres * Math.cos(formats[j][1] * DegreeRadians);
    const yj = formats[j][1] * DegreeMetres;

    previous += xi * yj - xj * yi;

    return previous;
  }, 0));
}

/**
 * 计算球面多边形面积 (单位：平方米)
 *
 * @since 0.0.5
 * @param points        球面多边形范围坐标点集合
 * @returns {number}    球面多边形面积
 */
export function sphereArea(points: LngLatLike[]): number {
  if (points.length < 3) {
    return 0;
  }

  const formats = points2array(points);

  const angleValue = formats.reduce((previous, point, i) => {
    const j = (i + 1) % formats.length;
    const k = (i + 2) % formats.length;

    previous += angle(formats[i], formats[j], formats[k]);

    return previous;
  }, 0);

  const offset = (formats.length - 2) * 180.0;

  const excess = angleValue - offset;

  const multiple = DegreeRadians * EarthRadiusMetres * EarthRadiusMetres;

  if (excess > 420.0) {
    return ((formats.length * 360.0 - angleValue) - offset) * multiple;
  } else if (excess > 300.0 && excess < 420.0) {
    return Math.abs(360.0 - excess) * multiple
  }

  return excess * multiple;
}

/**
 * 计算多边形面积 (单位：平方米)
 *
 * @since 0.0.5
 * @param points        多边形范围坐标点集合
 * @returns {number}    多边形面积
 */
export function area(points: LngLatLike[]): number {
  const area = planeArea(points);

  if (area > PlaneAreaThreshold) {
    return sphereArea(points);
  }

  return area;
}