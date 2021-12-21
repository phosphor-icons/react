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
      d="M24,92.8S56,48,104,48c104,0,96,160,0,160-64,0-64-96,32-96,64,0,104,48,104,48"
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
      d="M24,92.8S56,48,104,48c104,0,96,160,0,160-64,0-64-96,32-96,64,0,104,48,104,48"
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
    <path d="M246.1,154.9c-1.2-1.5-22.9-27.1-59.8-41.4-2.1-17.8-8.9-34-19.6-46.6C151.7,49.3,130,40,104,40,52.5,40,18.9,86.2,17.5,88.1a8,8,0,0,0,13,9.4C30.8,97,60.8,56,104,56c21.2,0,38.6,7.4,50.5,21.3a68,68,0,0,1,14.7,30.8A134.2,134.2,0,0,0,136,104c-26.1,0-47.9,6.8-63.3,19.7C59.2,135.1,51.4,151,51.4,167.2a47.4,47.4,0,0,0,13.9,34.1c9.6,9.6,23,14.7,38.7,14.7,25.2,0,46.7-10,62.1-28.8,12.2-15,19.6-35.1,20.8-56a146.3,146.3,0,0,1,47,33.9,8,8,0,1,0,12.2-10.2ZM104,200c-25.3,0-36.6-16.4-36.6-32.8,0-22.7,21.5-47.2,68.6-47.2a117.3,117.3,0,0,1,35,5.3v.3C171,162.6,148,200,104,200Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M24,92.8S56,48,104,48c104,0,96,160,0,160-64,0-64-96,32-96,64,0,104,48,104,48"
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
      d="M24,92.8S56,48,104,48c104,0,96,160,0,160-64,0-64-96,32-96,64,0,104,48,104,48"
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
      d="M24,92.8S56,48,104,48c104,0,96,160,0,160-64,0-64-96,32-96,64,0,104,48,104,48"
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

const ScribbleLoop = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ScribbleLoop.displayName = "ScribbleLoop";

export default ScribbleLoop;
