/**
 * @author WMXPY
 * @namespace Immutable
 * @description Map
 */

import { DraftFunction } from "./declare";
import { Medium } from "./medium";

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

    public get length(): number {

        return this.keys().length;
    }

    public get(key: K): V | undefined {

        if (this.original[key]) {
            return this.original[key];
        }

        return undefined;
    }

    public keys(): K[] {

        const result: K[] = [];
        // tslint:disable-next-line: forin
        for (const key in this.original) {
            result.push(key);
        }
        return result;
    }

    public clone(): Record<K, V> {

        return Medium.clone<Record<K, V>>(this.original);
    }

    public mutate(func: DraftFunction<Record<K, V>>): Record<K, V> {

        const medium: Medium<Record<K, V>> = Medium.from(this.original);
        return medium.mutate(func);
    }
}
