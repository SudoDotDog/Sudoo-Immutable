/**
 * @author WMXPY
 * @namespace Immutable
 * @description Declare
 */

export type DraftFunction<T> = ((draft: T) => void) | ((draft: T) => T);
