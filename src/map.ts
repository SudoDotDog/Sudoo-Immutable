/**
 * @author WMXPY
 * @namespace Immutable
 * @description Map
 */

export class FrozenMap<K extends string, V extends any> {

    public static from<K extends string, V extends any>(map: Record<K, V>) {

        return new FrozenMap<K, V>(map);
    }

    private readonly _original: Record<K, V>;

    private constructor(map: Record<K, V>) {

        this._original = map;
    }

    public get original(): Record<K, V> {

        return this._original;
    }

    public get(key: K): V {

        if (this.original[key]) {
            return this.original[key];
        }

        return undefined;
    }
}
