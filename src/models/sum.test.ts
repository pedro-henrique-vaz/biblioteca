import {describe, expect, it} from "@jest/globals";
import {sum} from "./sum";

describe('test sum', () => {
    it('adds 1 + 2 to equal 3', () => {
        const a = 1;
        const b = 2;

        const number = sum(a, b);

        expect(number).toBe(3);
    })

    it('adds 1 + 1 to equal 2', () => {
        const a = 1;
        const b = 1;

        const number = sum(a, b);

        expect(number).toBe(2);
    })

    it('adds 2 + 3 to equal 5', () => {
        const a = 2;
        const b = 3;

        const number = sum(a, b);

        expect(number).toBe(5);
    })
});