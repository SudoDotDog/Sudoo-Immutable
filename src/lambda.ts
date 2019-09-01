/**
 * @author WMXPY
 * @namespace Immutable
 * @description Lambda
 */

import { DraftFunction } from "./declare";
import { Medium } from "./medium";

export const produce = <T extends any>(target: T, func: DraftFunction<T>): T => {

    const medium: Medium<T> = Medium.from<T>(target);
    return medium.mutate(func);
};

export const clone = <T extends any>(target: T): T => {

    return Medium.clone<T>(target);
};
