export type NullableBoolean = boolean | null;
export type NullableNumber = number | null;
export type NullableString = string | null;

export type NumberLike = number | `${number}`;

export interface IObjectRecord {
  [key: string]: any;
}

export interface IObjectMap<T> {
  [key: string]: T;
}

export default {};