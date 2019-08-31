/**
 * @author WMXPY
 * @namespace Immutable
 * @description Medium
 */

import { barbaricDuplicate, duplicate } from "@sudoo/duplicate";

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

    public barbaric(): T {

        const clone: T = barbaricDuplicate(this.original);
        return clone;
    }

    public clone(): T {

        const clone: T = duplicate(this.original);
        return clone;
    }
}
