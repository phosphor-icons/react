/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M128,20A108,108,0,1,0,236,128,108.1,108.1,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.1,84.1,0,0,1,128,212Zm16-112a16,16,0,1,1-16-16A16,16,0,0,1,144,100Zm0,56a16,16,0,1,1-16-16A16,16,0,0,1,144,156Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <circle cx="128" cy="128" r="96" />
    </g>
    <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm12-88a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm0,48a12,12,0,1,1-12-12A12,12,0,0,1,140,176Zm0-96a12,12,0,1,1-12-12A12,12,0,0,1,140,80Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm0,164a12,12,0,1,1,12-12A12,12,0,0,1,128,188Zm0-48a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm0-48a12,12,0,1,1,12-12A12,12,0,0,1,128,92Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M128,26A102,102,0,1,0,230,128,102.2,102.2,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm10-90a10,10,0,1,1-10-10A10,10,0,0,1,138,128Zm0,48a10,10,0,1,1-10-10A10,10,0,0,1,138,176Zm0-96a10,10,0,1,1-10-10A10,10,0,0,1,138,80Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm12-88a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm0,48a12,12,0,1,1-12-12A12,12,0,0,1,140,176Zm0-96a12,12,0,1,1-12-12A12,12,0,0,1,140,80Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M128,28A100,100,0,1,0,228,128,100.2,100.2,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm8-92a8,8,0,1,1-8-8A8,8,0,0,1,136,128Zm0,48a8,8,0,1,1-8-8A8,8,0,0,1,136,176Zm0-96a8,8,0,1,1-8-8A8,8,0,0,1,136,80Z" />
  </>
);

const DotsThreeCircleVertical = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => <IconBase ref={ref} {...props} weightsMap={weightsMap} />
);

DotsThreeCircleVertical.displayName = "DotsThreeCircleVertical";

export default DotsThreeCircleVertical;
