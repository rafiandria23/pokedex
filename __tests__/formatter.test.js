import {
  formatIdNumber,
  formatStringFromArray,
  formatStringFromString,
} from "../src/helpers/formatter";

describe("Test", () => {
  test("Format ID Number Helper Works Perfectly", () => {
    expect(formatIdNumber(1)).toBe("#001");
    expect(formatIdNumber(10)).toBe("#010");
    expect(formatIdNumber(100)).toBe("#100");
    expect(formatIdNumber(1000)).toBe("#1000");
  });

  test("Format String from Array Helper Works Perfectly", () => {
    expect(formatStringFromArray(["fajrin", "fajrin-noor"])).toBe(
      "Fajrin, Fajrin Noor"
    );
    expect(formatStringFromArray(["bulbasaur", "bulba-saur"])).toBe(
      "Bulbasaur, Bulba Saur"
    );
    expect(
      formatStringFromArray([
        "bulbasaur",
        "bulba-saur",
        "fajrin-noor",
        "fajrin-noor-rachman",
      ])
    ).toBe("Bulbasaur, Bulba Saur, Fajrin Noor, Fajrin Noor Rachman");
  });

  test("Format String from String Helper Works Perfectly", () => {
    expect(formatStringFromString("fajrin")).toBe("Fajrin");
    expect(formatStringFromString("bulba-saur")).toBe("Bulba Saur");
    expect(formatStringFromString("fajrin-noor-rachman")).toBe(
      "Fajrin Noor Rachman"
    );
  });
});
