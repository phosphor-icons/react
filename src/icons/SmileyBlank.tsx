/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M108,108A16,16,0,1,1,92,92,16,16,0,0,1,108,108Zm56-16a16,16,0,1,0,16,16A16,16,0,0,0,164,92Zm72,36A108,108,0,1,1,128,20,108.1,108.1,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.1,84.1,0,0,0,212,128Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <circle cx="128" cy="128" r="96" />
    </g>
    <circle cx="92" cy="108" r="12" />
    <circle cx="164" cy="108" r="12" />
    <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24ZM92,120a12,12,0,1,1,12-12A12,12,0,0,1,92,120Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,120Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M128,26A102,102,0,1,0,230,128,102.2,102.2,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM102,108A10,10,0,1,1,92,98,10,10,0,0,1,102,108Zm72,0a10,10,0,1,1-10-10A10,10,0,0,1,174,108Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M104,108A12,12,0,1,1,92,96,12,12,0,0,1,104,108Zm60-12a12,12,0,1,0,12,12A12,12,0,0,0,164,96Zm68,32A104,104,0,1,1,128,24,104.2,104.2,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M128,28A100,100,0,1,0,228,128,100.2,100.2,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220ZM100,108a8,8,0,1,1-8-8A8,8,0,0,1,100,108Zm72,0a8,8,0,1,1-8-8A8,8,0,0,1,172,108Z" />
  </>
);

const SmileyBlank = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

SmileyBlank.displayName = "SmileyBlank";

export default SmileyBlank;
