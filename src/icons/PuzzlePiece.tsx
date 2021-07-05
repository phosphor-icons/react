/* GENERATED FILE */
import React, { forwardRef } from "react";

import {
  IconWeight,
  IconProps,
  PaintFunction,
  renderPathForWeight,
} from "../lib";
import IconBase, { RenderFunction } from "../lib/IconBase";

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set("bold", (color: string) => (
  <>
    <path
      d="M63.99986,216a8,8,0,0,1-8-8.00009l.00053-42.69468a28,28,0,1,1,0-50.61044L55.99988,72.0001A8,8,0,0,1,64,64l46.69456.00053a27.99993,27.99993,0,1,1,50.61031,0L207.99939,64a8,8,0,0,1,8.00007,7.9999L216,114.69478a28,28,0,1,0,0,50.61044l-.00053,42.69487a8,8,0,0,1-8,7.9999Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <path
      d="M63.99986,216a8,8,0,0,1-8-8.00009l.00053-42.69468a28,28,0,1,1,0-50.61044L55.99988,72.0001A8,8,0,0,1,64,64l46.69456.00053a27.99993,27.99993,0,1,1,50.61031,0L207.99939,64a8,8,0,0,1,8.00007,7.9999L216,114.69478a28,28,0,1,0,0,50.61044l-.00053,42.69487a8,8,0,0,1-8,7.9999Z"
      opacity="0.2"
    />
    <path
      d="M63.99986,216a8,8,0,0,1-8-8.00009l.00053-42.69468a28,28,0,1,1,0-50.61044L55.99988,72.0001A8,8,0,0,1,64,64l46.69456.00053a27.99993,27.99993,0,1,1,50.61031,0L207.99939,64a8,8,0,0,1,8.00007,7.9999L216,114.69478a28,28,0,1,0,0,50.61044l-.00053,42.69487a8,8,0,0,1-8,7.9999Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M165.78027,224.001,207.99951,224a16.018,16.018,0,0,0,16-16L224,170.34863a7.99966,7.99966,0,0,0-11.05957-7.3916A23.25464,23.25464,0,0,1,204,164.72754c-13.2334,0-24-11.09277-24-24.72754s10.7666-24.72754,24-24.72754a23.25464,23.25464,0,0,1,8.94043,1.77051A7.99966,7.99966,0,0,0,224,109.65137L223.99951,72A16.01812,16.01812,0,0,0,207.999,56l-36.21728.001A36.60975,36.60975,0,0,0,171.99951,52a36,36,0,0,0-72,0,36.60975,36.60975,0,0,0,.21778,4.001L63.99951,56a16.018,16.018,0,0,0-16,16L48,104.21777A36.47481,36.47481,0,0,0,43.99951,104a36,36,0,0,0,0,72A36.47481,36.47481,0,0,0,48,175.78223L47.99951,208A16.01791,16.01791,0,0,0,63.999,224l42.22071.001h0" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M63.99986,216a8,8,0,0,1-8-8.00009l.00053-42.69468a28,28,0,1,1,0-50.61044L55.99988,72.0001A8,8,0,0,1,64,64l46.69456.00053a27.99993,27.99993,0,1,1,50.61031,0L207.99939,64a8,8,0,0,1,8.00007,7.9999L216,114.69478a28,28,0,1,0,0,50.61044l-.00053,42.69487a8,8,0,0,1-8,7.9999Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <path
      d="M63.99986,216a8,8,0,0,1-8-8.00009l.00053-42.69468a28,28,0,1,1,0-50.61044L55.99988,72.0001A8,8,0,0,1,64,64l46.69456.00053a27.99993,27.99993,0,1,1,50.61031,0L207.99939,64a8,8,0,0,1,8.00007,7.9999L216,114.69478a28,28,0,1,0,0,50.61044l-.00053,42.69487a8,8,0,0,1-8,7.9999Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path
      d="M63.99986,216a8,8,0,0,1-8-8.00009l.00053-42.69468a28,28,0,1,1,0-50.61044L55.99988,72.0001A8,8,0,0,1,64,64l46.69456.00053a27.99993,27.99993,0,1,1,50.61031,0L207.99939,64a8,8,0,0,1,8.00007,7.9999L216,114.69478a28,28,0,1,0,0,50.61044l-.00053,42.69487a8,8,0,0,1-8,7.9999Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const PuzzlePiece = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

PuzzlePiece.displayName = "PuzzlePiece";

export default PuzzlePiece;
