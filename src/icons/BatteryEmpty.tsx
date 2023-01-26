/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M192,44H44A28.1,28.1,0,0,0,16,72V184a28.1,28.1,0,0,0,28,28H192a28.1,28.1,0,0,0,28-28V72A28.1,28.1,0,0,0,192,44Zm4,140a4,4,0,0,1-4,4H44a4,4,0,0,1-4-4V72a4,4,0,0,1,4-4H192a4,4,0,0,1,4,4Zm60-88v64a12,12,0,0,1-24,0V96a12,12,0,0,1,24,0Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <rect
        x="52"
        y="36"
        width="144"
        height="184"
        rx="16"
        transform="translate(252 4) rotate(90)"
      />
    </g>
    <path d="M256,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0ZM224,72V184a24.1,24.1,0,0,1-24,24H48a24.1,24.1,0,0,1-24-24V72A24.1,24.1,0,0,1,48,48H200A24.1,24.1,0,0,1,224,72Zm-16,0a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M256,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0ZM224,72V184a24.1,24.1,0,0,1-24,24H48a24.1,24.1,0,0,1-24-24V72A24.1,24.1,0,0,1,48,48H200A24.1,24.1,0,0,1,224,72Zm-16,0a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M254,96v64a6,6,0,0,1-12,0V96a6,6,0,0,1,12,0ZM222,72V184a22.1,22.1,0,0,1-22,22H48a22.1,22.1,0,0,1-22-22V72A22.1,22.1,0,0,1,48,50H200A22.1,22.1,0,0,1,222,72Zm-12,0a10,10,0,0,0-10-10H48A10,10,0,0,0,38,72V184a10,10,0,0,0,10,10H200a10,10,0,0,0,10-10Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M256,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0ZM224,72V184a24.1,24.1,0,0,1-24,24H48a24.1,24.1,0,0,1-24-24V72A24.1,24.1,0,0,1,48,48H200A24.1,24.1,0,0,1,224,72Zm-16,0a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M252,96v64a4,4,0,0,1-8,0V96a4,4,0,0,1,8,0ZM220,72V184a20.1,20.1,0,0,1-20,20H48a20.1,20.1,0,0,1-20-20V72A20.1,20.1,0,0,1,48,52H200A20.1,20.1,0,0,1,220,72Zm-8,0a12,12,0,0,0-12-12H48A12,12,0,0,0,36,72V184a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12Z" />
  </>
);

const BatteryEmpty = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

BatteryEmpty.displayName = "BatteryEmpty";

export default BatteryEmpty;
