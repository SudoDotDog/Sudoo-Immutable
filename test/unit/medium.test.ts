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
});
