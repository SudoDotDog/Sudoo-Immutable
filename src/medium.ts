/**
 * @author WMXPY
 * @namespace Immutable
 * @description Medium
 */

export class Medium<T> {

    public static from<T>(target: T): Medium<T> {

        return new Medium<T>(target);
    }

    private readonly _target: T;

    private constructor(target: T) {

        this._target = target;
    }

    public get original(): T {

        return this._target;
    }
}
