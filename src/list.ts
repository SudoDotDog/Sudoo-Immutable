/**
 * @author WMXPY
 * @namespace Immutable
 * @description List
 */

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

    public get(index: number): E | undefined {

        if (this.original[index]) {
            return this.original[index];
        }

        return undefined;
    }
}
