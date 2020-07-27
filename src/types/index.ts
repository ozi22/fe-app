export type StringMapping<T> = {
  [key: string]: T;
};

export type KeysMapping<K extends string | number | symbol, T> = {
  [P in K]?: T;
};

export type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};
