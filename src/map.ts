/**
 * @author WMXPY
 * @namespace Immutable
 * @description Map
 */

import { DraftFunction, ObjectEntry } from "./declare";
import { Medium } from "./medium";

export class FrozenMap<K extends string, V extends any> {

    public static from<K extends string, V extends any>(map: Record<K, V>): FrozenMap<K, V> {

        return new FrozenMap<K, V>(map);
    }

    private readonly _original: Record<K, V>;

    private constructor(map: Record<K, V>) {

        this._original = map;
    }

    public get original(): Record<K, V> {

        return this._original;
    }

    public get length(): number {

        return this.keys().length;
    }

    public get(key: K): V | undefined {

        if (this._original[key]) {
            return this._original[key];
        }

        return undefined;
    }

    public keys(): K[] {

        const result: K[] = [];
        for (const key in this._original) {
            if (this._original[key]) {
                result.push(key);
            }
        }
        return result;
    }

    public entries(): Array<ObjectEntry<K, V>> {

        return this.keys().map((key: K) => ({
            key,
            value: this._original[key],
        }));
    }

    public clone(): Record<K, V> {

        return Medium.clone<Record<K, V>>(this._original);
    }

    public medium(): Medium<Record<K, V>> {

        return Medium.from<Record<K, V>>(this._original);
    }

    public mutate(func: DraftFunction<Record<K, V>>): Record<K, V> {

        return this.medium().mutate(func);
    }
}
