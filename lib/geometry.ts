/**
 * 几何计算工具类
 *
 * @since 0.0.5
 * @author 小何同学
 */
export class GeometryUtils {

  /**
   * 地球半径 (单位：米)
   *
   * @since 0.0.5
   */
  public static readonly EarthRadiusMetres = 6371000.0;

  /**
   * 米每度
   *
   * @since 0.0.5
   */
  public static readonly DegreeMetres = 2.0 * Math.PI * GeometryUtils.EarthRadiusMetres / 360.0;

  /**
   * 弧度每度
   *
   * @since 0.0.5
   */
  public static readonly DegreeRadians = Math.PI / 180.0;

  /**
   * 度每弧度
   *
   * @since 0.0.5
   */
  public static readonly RadianDegrees = 180.0 / Math.PI;

  /**
   * 平面多边形面积阈值 (单位：平方米)
   *
   * @since 0.0.5
   */
  public static readonly PlaneAreaThreshold = 1000000.0;

  /**
   * 联合型坐标点转数组型坐标点
   *
   * @since 0.0.5
   * @param point                           联合型坐标点
   * @returns {TGeometryUtilsLngLatArray}   数组型坐标点
   */
  public static point2array(point: TGeometryUtilsLngLatLike): TGeometryUtilsLngLatArray {
    if (Array.isArray(point)) {
      return point;
    }

    return [point.longitude, point.latitude];
  };

  /**
   * 联合型坐标点集合转数组型坐标点集合
   *
   * @since 0.0.5
   * @param points                            联合型坐标点集合
   * @returns {TGeometryUtilsLngLatArray[]}   数组型坐标点集合
   */
  public static points2array(points: TGeometryUtilsLngLatLike[]): TGeometryUtilsLngLatArray[] {
    return points.map((point) => GeometryUtils.point2array(point));
  };

  /**
   * 获取平面多边形中心点坐标
   *
   * @since 0.0.5
   * @param points                          平面多边形范围坐标点集合
   * @returns {TGeometryUtilsLngLatArray}   平面多边形中心点坐标
   */
  public static planeCenter(points: TGeometryUtilsLngLatLike[]): TGeometryUtilsLngLatArray {
    const [longitudes, latitudes] = GeometryUtils.points2array(points).reduce((previous, point) => {
      previous[0].push(point[0]);
      previous[1].push(point[1]);

      return previous;
    }, [[], []] as [number[], number[]]);

    longitudes.sort((a, b) => a - b);
    latitudes.sort((a, b) => a - b);

    return [
      (longitudes[0] + longitudes[longitudes.length - 1]) / 2,
      (latitudes[0] + latitudes[latitudes.length - 1]) / 2
    ];
  };

  /**
   * 计算多边形面积 (单位：平方米)
   *
   * @since 0.0.5
   * @param points        多边形范围坐标点集合
   * @returns {number}    多边形面积
   */
  public static area(points: TGeometryUtilsLngLatLike[]): number {
    const area = GeometryUtils.planeArea(points);

    if (area > GeometryUtils.PlaneAreaThreshold) {
      return GeometryUtils.sphereArea(points);
    }

    return area;
  };

  /**
   * 计算平面多边形面积 (单位：平方米)
   *
   * @since 0.0.5
   * @param points        平面多边形范围坐标点集合
   * @returns {number}    平面多边形面积
   */
  public static planeArea(points: TGeometryUtilsLngLatLike[]): number {
    if (points.length < 3) {
      return 0;
    }

    const formats = GeometryUtils.points2array(points);

    return Math.abs(formats.reduce((previous, point, i) => {
      const j = (i + 1) % formats.length;

      const xi = formats[i][0] * GeometryUtils.DegreeMetres * Math.cos(formats[i][1] * GeometryUtils.DegreeRadians);
      const yi = formats[i][1] * GeometryUtils.DegreeMetres;
      const xj = formats[j][0] * GeometryUtils.DegreeMetres * Math.cos(formats[j][1] * GeometryUtils.DegreeRadians);
      const yj = formats[j][1] * GeometryUtils.DegreeMetres;

      previous += xi * yj - xj * yi;

      return previous;
    }, 0));
  };

  /**
   * 计算球面多边形面积 (单位：平方米)
   *
   * @since 0.0.5
   * @param points        球面多边形范围坐标点集合
   * @returns {number}    球面多边形面积
   */
  public static sphereArea(points: TGeometryUtilsLngLatLike[]): number {
    if (points.length < 3) {
      return 0;
    }

    const formats = GeometryUtils.points2array(points);

    const angle = formats.reduce((previous, point, i) => {
      const j = (i + 1) % formats.length;
      const k = (i + 2) % formats.length;

      previous += GeometryUtils.angle(formats[i], formats[j], formats[k]);

      return previous;
    }, 0);

    const offset = (formats.length - 2) * 180.0;

    const excess = angle - offset;

    const multiple = GeometryUtils.DegreeRadians * GeometryUtils.EarthRadiusMetres * GeometryUtils.EarthRadiusMetres;

    if (excess > 420.0) {
      return ((formats.length * 360.0 - angle) - offset) * multiple;
    } else if (excess > 300.0 && excess < 420.0) {
      return Math.abs(360.0 - excess) * multiple
    }

    return excess * multiple;
  };

  /**
   * 计算三坐标点之间的角度
   *
   * @since 0.0.5
   * @param p1            点1数组型坐标点
   * @param p2            点2数组型坐标点
   * @param p3            点3数组型坐标点
   * @returns {number}    三坐标点之间的角度
   */
  public static angle(p1: TGeometryUtilsLngLatArray, p2: TGeometryUtilsLngLatArray, p3: TGeometryUtilsLngLatArray): number {
    const bearing21 = GeometryUtils.bearing(p2, p1);
    const bearing23 = GeometryUtils.bearing(p2, p3);

    const angle = bearing21 - bearing23;

    return angle < 0 ? angle + 360 : angle;
  };

  /**
   * 计算两坐标点之间的方向
   *
   * @since 0.0.5
   * @param from          起始点数组型坐标点
   * @param to            终止点数组型坐标点
   * @returns {number}    两坐标点之间的方向
   */
  public static bearing(from: TGeometryUtilsLngLatArray, to: TGeometryUtilsLngLatArray): number {
    const longitude1 = from[0] * GeometryUtils.DegreeRadians;
    const latitude1 = from[1] * GeometryUtils.DegreeRadians;
    const longitude2 = to[0] * GeometryUtils.DegreeRadians;
    const latitude2 = to[1] * GeometryUtils.DegreeRadians;

    const bearing = -Math.atan2(
      Math.sin(longitude1 - longitude2) * Math.cos(latitude2),
      Math.cos(latitude1) * Math.sin(latitude2) - Math.sin(latitude1) * Math.cos(latitude2) * Math.cos(longitude1 - longitude2)
    );

    return (bearing < 0 ? bearing + Math.PI * 2.0 : bearing) * GeometryUtils.RadianDegrees;
  };

  /**
   * 平方米转亩
   *
   * @since 0.0.5
   * @param sm            平方米
   * @param [fixed]       最大小数位数
   * @returns {number}    亩
   */
  public static sm2mu(sm: number, fixed?: number | null): number {
    return GeometryUtils.decimal(sm * 0.0015);
  };

  /**
   * 亩转平方米
   *
   * @since 0.0.5
   * @param mu            亩
   * @param [fixed]       最大小数位数
   * @returns {number}    平方米
   */
  public static mu2sm(mu: number, fixed?: number | null): number {
    return GeometryUtils.decimal(mu / 0.0015);
  };

  /**
   * 平方米转公顷
   *
   * @since 0.0.5
   * @param sm            平方米
   * @param [fixed]       最大小数位数
   * @returns {number}    公顷
   */
  public static sm2ha(sm: number, fixed?: number | null): number {
    return GeometryUtils.decimal(sm * 0.0001);
  };

  /**
   * 公顷转平方米
   *
   * @since 0.0.5
   * @param ha            公顷
   * @param [fixed]       最大小数位数
   * @returns {number}    平方米
   */
  public static ha2sm(ha: number, fixed?: number | null): number {
    return GeometryUtils.decimal(ha * 10000);
  };

  /**
   * 亩转公顷
   *
   * @since 0.0.5
   * @param mu            亩
   * @param [fixed]       最大小数位数
   * @returns {number}    公顷
   */
  public static mu2ha(mu: number, fixed?: number | null): number {
    return GeometryUtils.decimal(mu / 15);
  };

  /**
   * 公顷转亩
   *
   * @since 0.0.5
   * @param ha            公顷
   * @param [fixed]       最大小数位数
   * @returns {number}    亩
   */
  public static ha2mu(ha: number, fixed?: number | null): number {
    return GeometryUtils.decimal(ha * 15);
  };

  /**
   * 转换小数位数
   *
   * @since 0.0.5
   * @param num           数字
   * @param [fixed]       最大小数位数
   * @returns {number}    转换结果
   */
  public static decimal(num: number, fixed?: number | null): number {
    return (fixed == null || fixed < 0) ? num : Number(num.toFixed(fixed));
  };

}

/**
 * 对象型经纬度坐标点
 *
 * @since 0.0.5
 */
export interface IGeometryUtilsLngLat {
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
export type TGeometryUtilsLngLatArray = [longitude: number, latitude: number];

/**
 * 联合型经纬度坐标点
 *
 * @since 0.0.5
 */
export type TGeometryUtilsLngLatLike = IGeometryUtilsLngLat | TGeometryUtilsLngLatArray;