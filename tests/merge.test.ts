import { merge } from "../src/merge";

describe("merge()", () => {
    test("merges three arrays with given conditions", () => {
        const c1 = [1, 3, 5];
        const c2 = [9, 7, 4]; // descending
        const c3 = [6, 10, 12];

        const result = merge(c1, c2, c3);
        expect(result).toEqual([1, 3, 4, 5, 6, 7, 9, 10, 12]);
    });

    test("handles empty arrays", () => {
        expect(merge([], [5, 3, 1], [])).toEqual([1, 3, 5]);
    });

    test("handles all empty", () => {
        expect(merge([], [], [])).toEqual([]);
    });

    test("handles overlapping values", () => {
        const c1 = [2, 4, 6];
        const c2 = [9, 6, 2]; // descending
        const c3 = [1, 5, 10];
        expect(merge(c1, c2, c3)).toEqual([1, 2, 2, 4, 5, 6, 6, 9, 10]);
    });

    test("handles single element arrays", () => {
        expect(merge([1], [5], [3])).toEqual([1, 3, 5]);
    });
});
