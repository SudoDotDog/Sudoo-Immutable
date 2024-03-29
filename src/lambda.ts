/**
 * @author WMXPY
 * @namespace Immutable
 * @description Lambda
 */

import { AsyncDraftFunction, DraftFunction } from "./declare";
import { Medium } from "./medium";

export const produce = <T>(target: T, func: DraftFunction<T>): T => {

    const medium: Medium<T> = Medium.from<T>(target);
    return medium.mutate(func);
};

export const asyncProduce = async <T>(target: T, func: AsyncDraftFunction<T>): Promise<T> => {

    const medium: Medium<T> = Medium.from<T>(target);
    return await medium.asyncMutate(func);
};

export const clone = <T>(target: T): T => {

    return Medium.clone<T>(target);
};
