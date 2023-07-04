/**
 * 地球半径 (单位：米)
 *
 * @since 0.0.5
 */
export const EarthRadiusMetres = 6371000.0;

/**
 * 米每度
 *
 * @since 0.0.5
 */
export const DegreeMetres = 2.0 * Math.PI * EarthRadiusMetres / 360.0;

/**
 * 弧度每度
 *
 * @since 0.0.5
 */
export const DegreeRadians = Math.PI / 180.0;

/**
 * 度每弧度
 *
 * @since 0.0.5
 */
export const RadianDegrees = 180.0 / Math.PI;

/**
 * 平面多边形面积阈值 (单位：平方米)
 *
 * @since 0.0.5
 */
export const PlaneAreaThreshold = 1000000.0;
