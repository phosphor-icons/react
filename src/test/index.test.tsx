import * as Icons from "..";
import { Icon } from "..";

import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, getByTestId } from "@testing-library/react";

const isIcon = (candidate: any): candidate is Icon =>
  "displayName" in candidate;

describe("all icons exist", () => {
  Object.entries(Icons).forEach(([name, TestIcon]) => {
    if (!isIcon(TestIcon)) return;
    it(`${name} is truthy`, () => {
      expect(TestIcon).toBeTruthy();
    });
    it(`${name} is properly named`, () => {
      expect(name).toEqual(TestIcon.displayName);
    });
  });
});

describe("all icons render content", () => {
  Object.entries(Icons).forEach(([name, TestIcon]) => {
    if (!isIcon(TestIcon)) return;
    it(`${name} renders`, () => {
      const result = render(<TestIcon data-testid="test" />);
      expect(getByTestId(result.container, "test")).toBeTruthy();
    });
  });
});

describe("all icon weights render", () => {
  Object.entries(Icons).forEach(([name, TestIcon]) => {
    if (!isIcon(TestIcon)) return;
    it(`${name} [thin] renders`, () => {
      const result = render(<TestIcon weight="thin" data-testid="test" />);
      expect(getByTestId(result.container, "test")).toBeTruthy();
    });
    it(`${name} [light] renders`, () => {
      const result = render(<TestIcon weight="light" data-testid="test" />);
      expect(getByTestId(result.container, "test")).toBeTruthy();
    });
    it(`${name} [regular] renders`, () => {
      const result = render(<TestIcon weight="regular" data-testid="test" />);
      expect(getByTestId(result.container, "test")).toBeTruthy();
    });
    it(`${name} [bold] renders`, () => {
      const result = render(<TestIcon weight="bold" data-testid="test" />);
      expect(getByTestId(result.container, "test")).toBeTruthy();
    });
    it(`${name} [fill] renders`, () => {
      const result = render(<TestIcon weight="fill" data-testid="test" />);
      expect(getByTestId(result.container, "test")).toBeTruthy();
    });
    it(`${name} [duotone] renders`, () => {
      const result = render(<TestIcon weight="duotone" data-testid="test" />);
      expect(getByTestId(result.container, "test")).toBeTruthy();
    });
  });
});
