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
      cx="127.9"
      cy="44"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M153.9,134.7l34.8,27a12,12,0,0,0,16.9-16.9L166,93.9A19.9,19.9,0,0,0,151.9,88h-48a20.3,20.3,0,0,0-14.2,5.9L50.1,144.8a12,12,0,0,0,17,16.9l34.8-27L74.1,222.3a12,12,0,0,0,21.8,10.2l32-50.4h0l32,50.4a12,12,0,1,0,21.7-10.2Z"
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
    <circle cx="127.9" cy="44" r="28" opacity="0.2" />
    <path
      d="M153.9,134.7l34.8,27a12,12,0,0,0,16.9-16.9L166,93.9A19.9,19.9,0,0,0,151.9,88h-48a20.3,20.3,0,0,0-14.2,5.9L50.1,144.8a12,12,0,0,0,17,16.9l34.8-27L74.1,222.3a12,12,0,0,0,21.8,10.2l32-50.4h0l32,50.4a12,12,0,1,0,21.7-10.2Z"
      opacity="0.2"
    />
    <circle
      cx="127.9"
      cy="44"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M153.9,134.7l34.8,27a12,12,0,0,0,16.9-16.9L166,93.9A19.9,19.9,0,0,0,151.9,88h-48a20.3,20.3,0,0,0-14.2,5.9L50.1,144.8a12,12,0,0,0,17,16.9l34.8-27L74.1,222.3a12,12,0,0,0,21.8,10.2l32-50.4h0l32,50.4a12,12,0,1,0,21.7-10.2Z"
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
    <circle cx="127.9" cy="44" r="36" />
    <path d="M211.7,139.5,172.3,88.9l-.6-.7A27.8,27.8,0,0,0,151.9,80h-48a27.8,27.8,0,0,0-19.8,8.2l-.7.7L44.1,139.5a20,20,0,0,0,28.3,28.3l14.1-11L66.6,219.5a20.2,20.2,0,0,0-.4,14.7,19.9,19.9,0,0,0,10.4,11.3,19.6,19.6,0,0,0,15.2.7,20.2,20.2,0,0,0,11.1-9.8l25-39.4,25,39.4a20.4,20.4,0,0,0,11,9.8,20.9,20.9,0,0,0,6.9,1.2,19.1,19.1,0,0,0,8.4-1.9,20.2,20.2,0,0,0,10.4-11.3,19.7,19.7,0,0,0-.5-14.7l-19.8-62.7,14.1,11a20,20,0,0,0,27.9-.4,19.7,19.7,0,0,0,5.8-14.1A19.9,19.9,0,0,0,211.7,139.5Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="127.9"
      cy="44"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M153.9,134.7l34.8,27a12,12,0,0,0,16.9-16.9L166,93.9A19.9,19.9,0,0,0,151.9,88h-48a20.3,20.3,0,0,0-14.2,5.9L50.1,144.8a12,12,0,0,0,17,16.9l34.8-27L74.1,222.3a12,12,0,0,0,21.8,10.2l32-50.4h0l32,50.4a12,12,0,1,0,21.7-10.2Z"
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
      cx="127.9"
      cy="44"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M153.9,134.7l34.8,27a12,12,0,0,0,16.9-16.9L166,93.9A19.9,19.9,0,0,0,151.9,88h-48a20.3,20.3,0,0,0-14.2,5.9L50.1,144.8a12,12,0,0,0,17,16.9l34.8-27L74.1,222.3a12,12,0,0,0,21.8,10.2l32-50.4h0l32,50.4a12,12,0,1,0,21.7-10.2Z"
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
      cx="127.9"
      cy="44"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M153.9,134.7l34.8,27a12,12,0,0,0,16.9-16.9L166,93.9A19.9,19.9,0,0,0,151.9,88h-48a20.3,20.3,0,0,0-14.2,5.9L50.1,144.8a12,12,0,0,0,17,16.9l34.8-27L74.1,222.3a12,12,0,0,0,21.8,10.2l32-50.4h0l32,50.4a12,12,0,1,0,21.7-10.2Z"
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
