import * as Icons from "../src";

describe("all icons exist", () => {
  Object.entries(Icons).forEach(([name, Icon]) => {
    it(`${name} is truthy`, () => {
      expect(Icon).toBeTruthy();
    });
    it(`${name} is properly named`, () => {
      expect(name).toEqual(Icon.displayName);
    });
  });
});
