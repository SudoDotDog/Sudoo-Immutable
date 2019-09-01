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

        return this.original.length;
    }

    public get(index: number): E | undefined {

        if (this.original[index]) {
            return this.original[index];
        }

        return undefined;
    }

    public mutate(func: DraftFunction<E[]>): E[] {

        const medium: Medium<E[]> = Medium.from(this.original);
        return medium.mutate(func);
    }
}
