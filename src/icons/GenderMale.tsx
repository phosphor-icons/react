/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M216,28H168a12,12,0,0,0,0,24h19L154.3,84.7a84,84,0,1,0,17,17L204,69V88a12,12,0,0,0,24,0V40A12,12,0,0,0,216,28ZM146.4,194.4a60,60,0,1,1,0-84.8A60,60,0,0,1,146.4,194.4Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path
      d="M154.9,202.9a72,72,0,1,1,0-101.8A72,72,0,0,1,154.9,202.9Z"
      opacity="0.2"
    />
    <path d="M216,32H168a8,8,0,0,0,0,16h28.7L154.6,90.1a80,80,0,1,0,11.3,11.3L208,59.3V88a8,8,0,0,0,16,0V40A8,8,0,0,0,216,32ZM149.3,197.3a64,64,0,1,1,0-90.6A64.3,64.3,0,0,1,149.3,197.3Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M216,32H168a8,8,0,0,0,0,16h28.7L154.6,90.1a80,80,0,1,0,11.3,11.3L208,59.3V88a8,8,0,0,0,16,0V40A8,8,0,0,0,216,32ZM149.3,197.3a64,64,0,1,1,0-90.6A64.3,64.3,0,0,1,149.3,197.3Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M216,34H168a6,6,0,0,0,0,12h33.5L154.7,92.8a77.9,77.9,0,1,0,4.5,114.4h0a78.1,78.1,0,0,0,4-105.9L210,54.5V88a6,6,0,0,0,12,0V40A6,6,0,0,0,216,34ZM150.7,198.7a66,66,0,1,1,0-93.4A66.2,66.2,0,0,1,150.7,198.7Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M216,32H168a8,8,0,0,0,0,16h28.7L154.6,90.1a80,80,0,1,0,11.3,11.3L208,59.3V88a8,8,0,0,0,16,0V40A8,8,0,0,0,216,32ZM149.3,197.3a64,64,0,1,1,0-90.6A64.3,64.3,0,0,1,149.3,197.3Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M216,36H168a4,4,0,0,0,0,8h38.3L154.8,95.5a75.9,75.9,0,1,0,5.7,5.7L212,49.7V88a4,4,0,0,0,8,0V40A4,4,0,0,0,216,36ZM152.1,200.1a68,68,0,1,1,0-96.2A68.1,68.1,0,0,1,152.1,200.1Z" />
  </>
);

const GenderMale = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

GenderMale.displayName = "GenderMale";

export default GenderMale;
