/**
 * @author WMXPY
 * @namespace Immutable
 * @description Medium
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { Medium } from "../../src";

describe('Given {Medium} Class', (): void => {

    const chance: Chance.Chance = new Chance('immutable-medium');

    it('should be able to create medium', (): void => {

        const target: string = chance.string();

        const medium: Medium<string> = Medium.from(target);

        expect(medium).to.be.instanceOf(Medium);
        expect(medium.original).to.be.equal(target);
    });

    it('should be able to mutate with void function', (): void => {

        const oldValue: string = chance.string();
        const newValue: string = chance.string();

        const target = {
            a: oldValue,
        };

        const medium = Medium.from(target);

        const result = medium.mutate((draft) => {
            draft.a = newValue;
        });

        expect(target.a).to.be.equal(oldValue);
        expect(result.a).to.be.equal(newValue);
    });
});
