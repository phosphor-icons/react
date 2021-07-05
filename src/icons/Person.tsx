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
    <circle
      cx="127.88745"
      cy="44"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M153.91044,134.715,188.657,161.74012a12,12,0,1,0,16.97056-16.97057l-39.598-50.91169A19.93738,19.93738,0,0,0,151.88746,88h-48a19.93739,19.93739,0,0,0-14.14213,5.85786l-39.598,50.91169A12,12,0,1,0,67.1179,161.74012L101.86446,134.715,74.13088,222.3089a12,12,0,0,0,21.75139,10.14284l32.0052-50.37108h0l32.0052,50.37108A12,12,0,0,0,181.644,222.3089Z"
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
    <circle cx="127.88745" cy="44" r="28" opacity="0.2" />
    <path
      d="M153.91044,134.715,188.657,161.74012a12,12,0,1,0,16.97056-16.97057l-39.598-50.91169A19.93738,19.93738,0,0,0,151.88746,88h-48a19.93739,19.93739,0,0,0-14.14213,5.85786l-39.598,50.91169A12,12,0,1,0,67.1179,161.74012L101.86446,134.715,74.13088,222.3089a12,12,0,0,0,21.75139,10.14284l32.0052-50.37108h0l32.0052,50.37108A12,12,0,0,0,181.644,222.3089Z"
      opacity="0.2"
    />
    <circle
      cx="127.88745"
      cy="44"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M153.91044,134.715,188.657,161.74012a12,12,0,1,0,16.97056-16.97057l-39.598-50.91169A19.93738,19.93738,0,0,0,151.88746,88h-48a19.93739,19.93739,0,0,0-14.14213,5.85786l-39.598,50.91169A12,12,0,1,0,67.1179,161.74012L101.86446,134.715,74.13088,222.3089a12,12,0,0,0,21.75139,10.14284l32.0052-50.37108h0l32.0052,50.37108A12,12,0,0,0,181.644,222.3089Z"
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
    <g>
      <circle cx="127.88745" cy="44" r="36" />
      <path d="M211.67456,139.51367,172.34448,88.94629a7.93269,7.93269,0,0,0-.65723-.74512A27.81868,27.81868,0,0,0,151.88745,80h-48a27.81872,27.81872,0,0,0-19.79981,8.20117,7.93259,7.93259,0,0,0-.65722.74512L44.09936,139.51416A20.00055,20.00055,0,0,0,72.37378,167.7876l14.09961-10.96729-19.832,62.64014a20.00009,20.00009,0,0,0,36.23731,16.897l25.00879-39.35937,25.00879,39.35937a20.00007,20.00007,0,0,0,36.2373-16.897l-19.832-62.64014,14.09961,10.96729a20.00035,20.00035,0,0,0,28.27344-28.27393Z" />
    </g>
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="127.88745"
      cy="44"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M153.91044,134.715,188.657,161.74012a12,12,0,1,0,16.97056-16.97057l-39.598-50.91169A19.93738,19.93738,0,0,0,151.88746,88h-48a19.93739,19.93739,0,0,0-14.14213,5.85786l-39.598,50.91169A12,12,0,1,0,67.1179,161.74012L101.86446,134.715,74.13088,222.3089a12,12,0,0,0,21.75139,10.14284l32.0052-50.37108h0l32.0052,50.37108A12,12,0,0,0,181.644,222.3089Z"
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
    <circle
      cx="127.88745"
      cy="44"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M153.91044,134.715,188.657,161.74012a12,12,0,1,0,16.97056-16.97057l-39.598-50.91169A19.93738,19.93738,0,0,0,151.88746,88h-48a19.93739,19.93739,0,0,0-14.14213,5.85786l-39.598,50.91169A12,12,0,1,0,67.1179,161.74012L101.86446,134.715,74.13088,222.3089a12,12,0,0,0,21.75139,10.14284l32.0052-50.37108h0l32.0052,50.37108A12,12,0,0,0,181.644,222.3089Z"
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
    <circle
      cx="127.88745"
      cy="44"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M153.91044,134.715,188.657,161.74012a12,12,0,1,0,16.97056-16.97057l-39.598-50.91169A19.93738,19.93738,0,0,0,151.88746,88h-48a19.93739,19.93739,0,0,0-14.14213,5.85786l-39.598,50.91169A12,12,0,1,0,67.1179,161.74012L101.86446,134.715,74.13088,222.3089a12,12,0,0,0,21.75139,10.14284l32.0052-50.37108h0l32.0052,50.37108A12,12,0,0,0,181.644,222.3089Z"
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

const Person = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

Person.displayName = "Person";

export default Person;
