export type NullableObject<T> = T | null;

export type NullableNumber = NullableObject<number>;
export type NullableString = NullableObject<string>;
export type NullableBoolean = NullableObject<boolean>;

export type NumberLike = number | `${number}`;

export interface IObjectRecord {
  [key: string]: any;
}

export interface IObjectMap<T> {
  [key: string]: T;
}

export default {};