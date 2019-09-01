/**
 * @author WMXPY
 * @namespace Immutable
 * @description List
 */

import { DraftFunction } from "./declare";
import { Medium } from "./medium";

export class FrozenList<E extends any> {

    public static from<E extends any>(list: E[]) {

        return new FrozenList<E>(list);
    }

    private readonly _original: E[];

    private constructor(list: E[]) {

        this._original = list;
    }

    public get original(): E[] {

        return this._original;
    }

    public get length(): number {

        return this._original.length;
    }

    public get(index: number): E | undefined {

        if (this._original[index]) {
            return this._original[index];
        }

        return undefined;
    }

    public rebuild(func: (element: E, removeSymbol: symbol) => E[] | null): E[] {

        for (const element of this._original) {

        }
    }

    public clone(): E[] {

        return Medium.clone<E[]>(this._original);
    }

    public mutate(func: DraftFunction<E[]>): E[] {

        const medium: Medium<E[]> = Medium.from(this._original);
        return medium.mutate(func);
    }
}
