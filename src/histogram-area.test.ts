import maxRectangularArea from "./histogram-area";

describe("Calculate maximum rectangular area under the histogram chart", () => {
    it("Test case 1", () => {
        expect(maxRectangularArea([1, 2, 4, 5, 1])).toBe(8);
    });

    it("Test case 2", () => {
        expect(maxRectangularArea([1, 4, 3, 7, 1, 3, 6])).toBe(9);
    });

    it("Test case 3", () => {
        expect(maxRectangularArea([6, 2, 5, 4, 5, 1, 6])).toBe(12);
    });

    it("Test case 4", () => {
        expect(maxRectangularArea([2, 3, 4, 5, 6, 4, 2, 1])).toBe(16);
    });

    it("Test case 5", () => {
        expect(maxRectangularArea([1, 2, 4, 3, 2, 5, 6, 1, 4])).toBe(12);
    });

    it("Test case 6", () => {
        expect(maxRectangularArea([6, 7, 5, 2, 4, 5, 9, 5, 3])).toBe(18);
    });
});
