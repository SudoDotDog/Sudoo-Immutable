/**
 * @author WMXPY
 * @namespace Immutable
 * @description Medium
 */

import { duplicate } from "@sudoo/duplicate";
import { AsyncDraftFunction, DraftFunction } from "./declare";

export class Medium<T> {

    public static from<T>(target: T): Medium<T> {

        return new Medium<T>(target);
    }

    public static clone<T>(target: T): T {

        return this.from(target).clone();
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

        if (typeof result !== 'undefined') {
            return result;
        }

        return clone;
    }

    public async asyncMutate(func: AsyncDraftFunction<T>): Promise<T> {

        const clone: T = this.clone();
        const result: T | void = await Promise.resolve(func(clone));

        if (typeof result !== 'undefined') {
            return result;
        }

        return clone;
    }
}
