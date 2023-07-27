import { isEmpty as isEmptyString } from "./string/isEmpty";
import { isNotEmpty as isNotEmptyString } from "./string/isNotEmpty";
import { DefaultSplitOptions, split } from "./string/split";
import { underline2hump } from "./string/underline2hump";
import { hump2underline } from "./string/hump2underline";
import { number2chinese } from "./string/number2chinese";
import { convertUrl, ConvertUrlConfig, DefaultConvertUrlOptions } from "./string/convertUrl";
import { DefaultUuidOptions, uuid } from "./string/uuid";
import { DefaultFormatFileSizeOptions, formatFileSize } from "./string/formatFileSize";

import { DefaultFlat2TreeOptions, flat2tree } from "./array/flat2tree";
import { DefaultTree2FlatOptions, tree2flat } from "./array/tree2flat";
import { DefaultRecursiveTraversalOptions, recursiveTraversal } from "./array/recursiveTraversal";

import { DegreeMetres, DegreeRadians, EarthRadiusMetres, PlaneAreaThreshold, RadianDegrees } from "./geometry/config";
import { point2array, points2array } from "./geometry/point2array";
import { planeCenter } from "./geometry/center";
import { angle, bearing } from "./geometry/angle";
import { area, planeArea, sphereArea } from "./geometry/area";
import { decimal, ha2mu, ha2sm, mu2ha, mu2sm, sm2ha, sm2mu } from "./geometry/convert";

const string = {
  isEmpty: isEmptyString,
  isNotEmpty: isNotEmptyString,
  DefaultSplitOptions,
  split,
  underline2hump,
  hump2underline,
  number2chinese,
  ConvertUrlConfig,
  DefaultConvertUrlOptions,
  convertUrl,
  DefaultUuidOptions,
  uuid,
  DefaultFormatFileSizeOptions,
  formatFileSize
};

const array = {
  DefaultFlat2TreeOptions,
  flat2tree,
  DefaultTree2FlatOptions,
  tree2flat,
  DefaultRecursiveTraversalOptions,
  recursiveTraversal
};

const geometry = {
  EarthRadiusMetres,
  DegreeMetres,
  DegreeRadians,
  RadianDegrees,
  PlaneAreaThreshold,
  point2array,
  points2array,
  planeCenter,
  bearing,
  angle,
  planeArea,
  sphereArea,
  area,
  sm2mu,
  mu2sm,
  sm2ha,
  ha2sm,
  mu2ha,
  ha2mu,
  decimal
};

const xiaohejs = {
  string,
  array,
  geometry
};

export {
  xiaohejs as default,

  string,
  array,
  geometry,

  isEmptyString,
  isNotEmptyString,
  DefaultSplitOptions,
  split,
  underline2hump,
  hump2underline,
  number2chinese,
  ConvertUrlConfig,
  DefaultConvertUrlOptions,
  convertUrl,
  DefaultUuidOptions,
  uuid,
  DefaultFormatFileSizeOptions,
  formatFileSize,

  DefaultFlat2TreeOptions,
  flat2tree,
  DefaultTree2FlatOptions,
  tree2flat,
  DefaultRecursiveTraversalOptions,
  recursiveTraversal,

  EarthRadiusMetres,
  DegreeMetres,
  DegreeRadians,
  RadianDegrees,
  PlaneAreaThreshold,
  point2array,
  points2array,
  planeCenter,
  bearing,
  angle,
  planeArea,
  sphereArea,
  area,
  sm2mu,
  mu2sm,
  sm2ha,
  ha2sm,
  mu2ha,
  ha2mu,
  decimal
};