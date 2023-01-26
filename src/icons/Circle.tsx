/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M128,236A108,108,0,1,1,236,128,108.1,108.1,0,0,1,128,236Zm0-192a84,84,0,1,0,84,84A84.1,84.1,0,0,0,128,44Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <circle cx="128" cy="128" r="96" />
    </g>
    <path d="M128,232A104,104,0,1,1,232,128,104.2,104.2,0,0,1,128,232Zm0-192a88,88,0,1,0,88,88A88.1,88.1,0,0,0,128,40Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M232,128A104,104,0,1,1,128,24,104.2,104.2,0,0,1,232,128Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M128,230A102,102,0,1,1,230,128,102.2,102.2,0,0,1,128,230Zm0-192a90,90,0,1,0,90,90A90.1,90.1,0,0,0,128,38Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M128,232A104,104,0,1,1,232,128,104.2,104.2,0,0,1,128,232Zm0-192a88,88,0,1,0,88,88A88.1,88.1,0,0,0,128,40Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M128,228A100,100,0,1,1,228,128,100.2,100.2,0,0,1,128,228Zm0-192a92,92,0,1,0,92,92A92.1,92.1,0,0,0,128,36Z" />
  </>
);

const Circle = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

Circle.displayName = "Circle";

export default Circle;
