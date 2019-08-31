/**
 * @author WMXPY
 * @namespace Immutable
 * @description Medium
 */

import { duplicate } from "@sudoo/duplicate";
import { DraftFunction } from "./declare";

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

    public clone(): T {

        const clone: T = duplicate(this.original);
        return clone;
    }

    public mutate(func: DraftFunction<T>): T {

        const clone: T = this.clone();
        const result: T | void = func(clone);

        if (result !== undefined) {
            return result as T;
        }

        return clone;
    }
}
