/**
 * 几何计算工具类
 *
 * @since 0.0.5
 * @author 小何同学
 */
export declare class GeometryUtils {
    /**
     * 地球半径 (单位：米)
     *
     * @since 0.0.5
     */
    static readonly EarthRadiusMetres = 6371000;
    /**
     * 米每度
     *
     * @since 0.0.5
     */
    static readonly DegreeMetres: number;
    /**
     * 弧度每度
     *
     * @since 0.0.5
     */
    static readonly DegreeRadians: number;
    /**
     * 度每弧度
     *
     * @since 0.0.5
     */
    static readonly RadianDegrees: number;
    /**
     * 平面多边形面积阈值 (单位：平方米)
     *
     * @since 0.0.5
     */
    static readonly PlaneAreaThreshold = 1000000;
    /**
     * 联合型坐标点转数组型坐标点
     *
     * @since 0.0.5
     * @param point                           联合型坐标点
     * @returns {TGeometryUtilsLngLatArray}   数组型坐标点
     */
    static point2array(point: TGeometryUtilsLngLatLike): TGeometryUtilsLngLatArray;
    /**
     * 联合型坐标点集合转数组型坐标点集合
     *
     * @since 0.0.5
     * @param points                            联合型坐标点集合
     * @returns {TGeometryUtilsLngLatArray[]}   数组型坐标点集合
     */
    static points2array(points: TGeometryUtilsLngLatLike[]): TGeometryUtilsLngLatArray[];
    /**
     * 获取平面多边形中心点坐标
     *
     * @since 0.0.5
     * @param points                          平面多边形范围坐标点集合
     * @returns {TGeometryUtilsLngLatArray}   平面多边形中心点坐标
     */
    static planeCenter(points: TGeometryUtilsLngLatLike[]): TGeometryUtilsLngLatArray;
    /**
     * 计算多边形面积 (单位：平方米)
     *
     * @since 0.0.5
     * @param points        多边形范围坐标点集合
     * @returns {number}    多边形面积
     */
    static area(points: TGeometryUtilsLngLatLike[]): number;
    /**
     * 计算平面多边形面积 (单位：平方米)
     *
     * @since 0.0.5
     * @param points        平面多边形范围坐标点集合
     * @returns {number}    平面多边形面积
     */
    static planeArea(points: TGeometryUtilsLngLatLike[]): number;
    /**
     * 计算球面多边形面积 (单位：平方米)
     *
     * @since 0.0.5
     * @param points        球面多边形范围坐标点集合
     * @returns {number}    球面多边形面积
     */
    static sphereArea(points: TGeometryUtilsLngLatLike[]): number;
    /**
     * 计算三坐标点之间的角度
     *
     * @since 0.0.5
     * @param p1            点1数组型坐标点
     * @param p2            点2数组型坐标点
     * @param p3            点3数组型坐标点
     * @returns {number}    三坐标点之间的角度
     */
    static angle(p1: TGeometryUtilsLngLatArray, p2: TGeometryUtilsLngLatArray, p3: TGeometryUtilsLngLatArray): number;
    /**
     * 计算两坐标点之间的方向
     *
     * @since 0.0.5
     * @param from          起始点数组型坐标点
     * @param to            终止点数组型坐标点
     * @returns {number}    两坐标点之间的方向
     */
    static bearing(from: TGeometryUtilsLngLatArray, to: TGeometryUtilsLngLatArray): number;
    /**
     * 平方米转亩
     *
     * @since 0.0.5
     * @param sm            平方米
     * @param [fixed]       最大小数位数
     * @returns {number}    亩
     */
    static sm2mu(sm: number, fixed?: number): number;
    /**
     * 亩转平方米
     *
     * @since 0.0.5
     * @param mu            亩
     * @param [fixed]       最大小数位数
     * @returns {number}    平方米
     */
    static mu2sm(mu: number, fixed?: number): number;
    /**
     * 平方米转公顷
     *
     * @since 0.0.5
     * @param sm            平方米
     * @param [fixed]       最大小数位数
     * @returns {number}    公顷
     */
    static sm2ha(sm: number, fixed?: number): number;
    /**
     * 公顷转平方米
     *
     * @since 0.0.5
     * @param ha            公顷
     * @param [fixed]       最大小数位数
     * @returns {number}    平方米
     */
    static ha2sm(ha: number, fixed?: number): number;
    /**
     * 亩转公顷
     *
     * @since 0.0.5
     * @param mu            亩
     * @param [fixed]       最大小数位数
     * @returns {number}    公顷
     */
    static mu2ha(mu: number, fixed?: number): number;
    /**
     * 公顷转亩
     *
     * @since 0.0.5
     * @param ha            公顷
     * @param [fixed]       最大小数位数
     * @returns {number}    亩
     */
    static ha2mu(ha: number, fixed?: number): number;
    /**
     * 转换小数位数
     *
     * @since 0.0.5
     * @param num           数字
     * @param [fixed]       最大小数位数
     * @returns {number}    转换结果
     */
    static decimal(num: number, fixed?: number): number;
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
