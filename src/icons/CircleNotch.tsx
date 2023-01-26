/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M236,128A108,108,0,1,1,83,29.8,12,12,0,0,1,93,51.6a84,84,0,1,0,70,0,12,12,0,0,1,10-21.8A108.3,108.3,0,0,1,236,128Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M232,128A104,104,0,1,1,84.7,33.4a8.1,8.1,0,0,1,10.6,4,8,8,0,0,1-4,10.6,88,88,0,1,0,73.4,0,8,8,0,0,1-4-10.6,8.1,8.1,0,0,1,10.6-4A104.4,104.4,0,0,1,232,128Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M232,128A104,104,0,1,1,84.7,33.4a8.1,8.1,0,0,1,10.6,4,8,8,0,0,1-4,10.6,88,88,0,1,0,73.4,0,8,8,0,0,1-4-10.6,8.1,8.1,0,0,1,10.6-4A104.4,104.4,0,0,1,232,128Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M230,128A102,102,0,1,1,85.5,35.3a6,6,0,0,1,8,2.9,6.2,6.2,0,0,1-3,8,90,90,0,1,0,75,0,6.2,6.2,0,0,1-3-8,6,6,0,0,1,8-2.9A102.2,102.2,0,0,1,230,128Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M232,128A104,104,0,1,1,84.7,33.4a8.1,8.1,0,0,1,10.6,4,8,8,0,0,1-4,10.6,88,88,0,1,0,73.4,0,8,8,0,0,1-4-10.6,8.1,8.1,0,0,1,10.6-4A104.4,104.4,0,0,1,232,128Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M228,128A100,100,0,1,1,86.3,37.1a4,4,0,1,1,3.4,7.2,92,92,0,1,0,76.6,0,3.9,3.9,0,0,1-1.9-5.3,4,4,0,0,1,5.3-1.9A100.2,100.2,0,0,1,228,128Z" />
  </>
);

const CircleNotch = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

CircleNotch.displayName = "CircleNotch";

export default CircleNotch;
