import React, { forwardRef, ReactElement } from "react";
import { describe, it, expect } from "vitest";
import { render, getByTestId } from "@testing-library/react";

import * as Icons from "../src";
import { Icon, IconBase, IconWeight } from "../src/lib";

const aliases = new Set([
  "FileDotted",
  "FileSearch",
  "FolderDotted",
  "FolderSimpleDotted",
  "Activity",
  "CircleWavy",
  "CircleWavyCheck",
  "CircleWavyQuestion",
  "CircleWavyWarning",
  "TextBolder",
]);

const isIcon = (candidate: any): candidate is Icon =>
  "displayName" in candidate && candidate.displayName !== "IconBase";

const allIcons = Object.entries(Icons).filter(
  ([name, module]) => !aliases.has(name) && isIcon(module)
) as [string, Icons.Icon][];

describe("All icons exist", () => {
  allIcons.forEach(([name, TestIcon]) => {
    if (aliases.has(name) || !isIcon(TestIcon)) return;
    it(`${name} is truthy`, () => {
      expect(TestIcon).toBeTruthy();
    });
    it(`${name} is properly named`, () => {
      expect(name).toEqual(TestIcon.displayName);
    });
  });
});

describe("All icons render content", () => {
  allIcons.forEach(([name, TestIcon]) => {
    if (!isIcon(TestIcon)) return;
    it(`${name} renders`, () => {
      const result = render(<TestIcon data-testid="test" />);
      expect(getByTestId(result.container, "test")).toBeTruthy();
    });
  });
});

describe("All icon weights render", () => {
  allIcons.forEach(([name, TestIcon]) => {
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

describe("Custom icons can be rendered", () => {
  const weights = new Map<IconWeight, ReactElement>([
    [
      "bold",
      <path d="M129 123L222.5 216.5M216 128C216 176.601 176.601 216 128 216C79.3989 216 40 176.601 40 128C40 79.3989 79.3989 40 128 40C176.601 40 216 79.3989 216 128Z" />,
    ],
    [
      "thin",
      <path d="M129 123L222.5 216.5M216 128C216 176.601 176.601 216 128 216C79.3989 216 40 176.601 40 128C40 79.3989 79.3989 40 128 40C176.601 40 216 79.3989 216 128Z" />,
    ],
    [
      "regular",
      <path d="M129 123L222.5 216.5M216 128C216 176.601 176.601 216 128 216C79.3989 216 40 176.601 40 128C40 79.3989 79.3989 40 128 40C176.601 40 216 79.3989 216 128Z" />,
    ],
    [
      "light",
      <path d="M129 123L222.5 216.5M216 128C216 176.601 176.601 216 128 216C79.3989 216 40 176.601 40 128C40 79.3989 79.3989 40 128 40C176.601 40 216 79.3989 216 128Z" />,
    ],
    [
      "fill",
      <>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M128 216C176.601 216 216 176.601 216 128C216 79.3989 176.601 40 128 40C79.3989 40 40 79.3989 40 128C40 176.601 79.3989 216 128 216ZM136.071 115.929C132.166 112.024 125.834 112.024 121.929 115.929C118.024 119.834 118.024 126.166 121.929 130.071L177.929 186.071C181.834 189.976 188.166 189.976 192.071 186.071C195.976 182.166 195.976 175.834 192.071 171.929L136.071 115.929Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M128 216C176.601 216 216 176.601 216 128C216 79.3989 176.601 40 128 40C79.3989 40 40 79.3989 40 128C40 176.601 79.3989 216 128 216ZM136.071 115.929C132.166 112.024 125.834 112.024 121.929 115.929C118.024 119.834 118.024 126.166 121.929 130.071L177.929 186.071C181.834 189.976 188.166 189.976 192.071 186.071C195.976 182.166 195.976 175.834 192.071 171.929L136.071 115.929Z"
        />
        <path d="M192.071 171.929C188.166 168.024 181.834 168.024 177.929 171.929C174.024 175.834 174.024 182.166 177.929 186.071L192.071 171.929ZM177.929 186.071L215.429 223.571L229.571 209.429L192.071 171.929L177.929 186.071ZM136.071 115.929L121.929 130.071L121.929 130.071L136.071 115.929ZM121.929 130.071L136.071 115.929L136.071 115.929L121.929 130.071ZM177.929 186.071L163.787 200.213L163.787 200.213L177.929 186.071ZM192.071 171.929L206.213 157.787L206.213 157.787L192.071 171.929ZM196 128C196 165.555 165.555 196 128 196V236C187.647 236 236 187.647 236 128H196ZM128 60C165.555 60 196 90.4446 196 128H236C236 68.3532 187.647 20 128 20V60ZM60 128C60 90.4446 90.4446 60 128 60V20C68.3532 20 20 68.3532 20 128H60ZM128 196C90.4446 196 60 165.555 60 128H20C20 187.647 68.3532 236 128 236V196ZM136.071 130.071C132.166 133.976 125.834 133.976 121.929 130.071L150.213 101.787C138.497 90.0711 119.503 90.0711 107.787 101.787L136.071 130.071ZM136.071 115.929C139.976 119.834 139.976 126.166 136.071 130.071L107.787 101.787C96.0711 113.503 96.0711 132.497 107.787 144.213L136.071 115.929ZM192.071 171.929L136.071 115.929L107.787 144.213L163.787 200.213L192.071 171.929ZM177.929 171.929C181.834 168.024 188.166 168.024 192.071 171.929L163.787 200.213C175.503 211.929 194.497 211.929 206.213 200.213L177.929 171.929ZM177.929 186.071C174.024 182.166 174.024 175.834 177.929 171.929L206.213 200.213C217.929 188.497 217.929 169.503 206.213 157.787L177.929 186.071ZM121.929 130.071L177.929 186.071L206.213 157.787L150.213 101.787L121.929 130.071Z" />
      </>,
    ],
    [
      "duotone",
      <>
        <path
          d="M216 128C216 176.601 176.601 216 128 216C79.3989 216 40 176.601 40 128C40 79.3989 79.3989 40 128 40C176.601 40 216 79.3989 216 128Z"
          opacity="0.2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M128 200C167.765 200 200 167.765 200 128C200 88.2355 167.765 56 128 56C88.2355 56 56 88.2355 56 128C56 167.765 88.2355 200 128 200ZM128 216C176.601 216 216 176.601 216 128C216 79.3989 176.601 40 128 40C79.3989 40 40 79.3989 40 128C40 176.601 79.3989 216 128 216Z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M123.343 117.343C126.467 114.219 131.533 114.219 134.657 117.343L228.157 210.843C231.281 213.967 231.281 219.033 228.157 222.157C225.033 225.281 219.967 225.281 216.843 222.157L123.343 128.657C120.219 125.533 120.219 120.467 123.343 117.343Z"
        />
      </>,
    ],
  ]);
  const CustomIcon: Icon = forwardRef((props, ref) => (
    <IconBase ref={ref} {...props} weights={weights} />
  ));

  CustomIcon.displayName = "CustomIcon";

  it("Custom icon [thin] renders", () => {
    const result = render(<CustomIcon weight="thin" data-testid="test" />);
    expect(getByTestId(result.container, "test")).toBeTruthy();
  });
  it("Custom icon [light] renders", () => {
    const result = render(<CustomIcon weight="light" data-testid="test" />);
    expect(getByTestId(result.container, "test")).toBeTruthy();
  });
  it("Custom icon [regular] renders", () => {
    const result = render(<CustomIcon weight="regular" data-testid="test" />);
    expect(getByTestId(result.container, "test")).toBeTruthy();
  });
  it("Custom icon [bold] renders", () => {
    const result = render(<CustomIcon weight="bold" data-testid="test" />);
    expect(getByTestId(result.container, "test")).toBeTruthy();
  });
  it("Custom icon [fill] renders", () => {
    const result = render(<CustomIcon weight="fill" data-testid="test" />);
    expect(getByTestId(result.container, "test")).toBeTruthy();
  });
  it("Custom icon [duotone] renders", () => {
    const result = render(<CustomIcon weight="duotone" data-testid="test" />);
    expect(getByTestId(result.container, "test")).toBeTruthy();
  });
});
