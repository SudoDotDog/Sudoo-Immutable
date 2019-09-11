/**
 * @author WMXPY
 * @namespace Immutable
 * @description Declare
 */

export type DraftFunction<T> = ((draft: T) => void) | ((draft: T) => T);
export type AsyncDraftFunction<T> = DraftFunction<T> | ((draft: T) => Promise<void>) | ((draft: T) => Promise<T>);

export type ObjectEntry<K extends string, V extends any> = {

    readonly key: K;
    readonly value: V;
};
