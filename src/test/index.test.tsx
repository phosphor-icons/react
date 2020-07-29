import * as Icons from "..";
import { IconContext } from "..";

describe("all icons exist", () => {
  Object.entries(Icons).forEach(([name, Icon]) => {
    if (Icon === IconContext) return;
    it(`${name} is truthy`, () => {
      expect(Icon).toBeTruthy();
    });
    it(`${name} is properly named`, () => {
      expect(name).toEqual(Icon.displayName);
    });
  });
});
