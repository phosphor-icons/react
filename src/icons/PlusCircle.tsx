/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M128,20A108,108,0,1,0,236,128,108.1,108.1,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.1,84.1,0,0,1,128,212Zm52-84a12,12,0,0,1-12,12H140v28a12,12,0,0,1-24,0V140H88a12,12,0,0,1,0-24h28V88a12,12,0,0,1,24,0v28h28A12,12,0,0,1,180,128Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <circle cx="128" cy="128" r="96" />
    </g>
    <path d="M128,24A104,104,0,1,0,232,128,104,104,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z" />
    <path d="M168,120H136V88a8,8,0,0,0-16,0v32H88a8,8,0,0,0,0,16h32v32a8,8,0,0,0,16,0V136h32a8,8,0,0,0,0-16Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M128,24A104,104,0,1,0,232,128,104.1,104.1,0,0,0,128,24Zm40,112H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M128,26A102,102,0,1,0,230,128,102.1,102.1,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm46-90a6,6,0,0,1-6,6H134v34a6,6,0,0,1-12,0V134H88a6,6,0,0,1,0-12h34V88a6,6,0,0,1,12,0v34h34A6,6,0,0,1,174,128Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M128,24A104,104,0,1,0,232,128,104.1,104.1,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M128,28A100,100,0,1,0,228,128,100.2,100.2,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm44-92a4,4,0,0,1-4,4H132v36a4,4,0,0,1-8,0V132H88a4,4,0,0,1,0-8h36V88a4,4,0,0,1,8,0v36h36A4,4,0,0,1,172,128Z" />
  </>
);

const PlusCircle = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

PlusCircle.displayName = "PlusCircle";

export default PlusCircle;
