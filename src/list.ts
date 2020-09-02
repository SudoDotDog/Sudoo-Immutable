/**
 * @author WMXPY
 * @namespace Immutable
 * @description List
 */

import { DraftFunction } from "./declare";
import { Medium } from "./medium";

export class FrozenList<E extends any> {

    public static from<E extends any>(list: E[]): FrozenList<E> {

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

    public rebuild(func: (element: E, removeSymbol: symbol) => E[] | symbol): E[] {

        const build: E[] = [];
        const currentRemoveSymbol: unique symbol = Symbol('remove');
        loop: for (const element of this._original) {

            const result: E[] | symbol = func(element, currentRemoveSymbol);
            if (result === currentRemoveSymbol) {
                continue loop;
            }
            if (!Array.isArray(result)) {
                continue loop;
            }
            build.push(...result);
        }
        return build;
    }

    public clone(): E[] {

        return Medium.clone<E[]>(this._original);
    }

    public medium(): Medium<E[]> {

        return Medium.from<E[]>(this._original);
    }

    public mutate(func: DraftFunction<E[]>): E[] {

        return this.medium().mutate(func);
    }
}
