/**
 * @author WMXPY
 * @namespace Immutable
 * @description Declare
 */

export type Writeable<T> = {

    -readonly [P in keyof T]: T[P];
};

export type DeepWriteable<T> = {
    -readonly [P in keyof T]: DeepWriteable<T[P]>;
};

export type DraftFunction<T> = ((draft: DeepWriteable<T>) => void) | ((draft: DeepWriteable<T>) => T);
export type AsyncDraftFunction<T> = DraftFunction<T> | ((draft: DeepWriteable<T>) => Promise<void>) | ((draft: DeepWriteable<T>) => Promise<T>);

export type ObjectEntry<K extends string, V extends any> = {

    readonly key: K;
    readonly value: V;
};
