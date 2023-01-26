/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M236.2,51.7v48a12,12,0,0,1-12,12h-48a12,12,0,0,1,0-24h19L181.7,74.3a75.9,75.9,0,1,0,0,107.4,12.2,12.2,0,0,1,17,0,12,12,0,0,1,0,17,100,100,0,1,1,0-141.4l13.5,13.4v-19a12,12,0,1,1,24,0Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M232.2,51.7v48a8,8,0,0,1-8,8h-48a8,8,0,0,1,0-16h28.7L184.6,71.4a80,80,0,1,0,0,113.2,7.9,7.9,0,0,1,11.3,0,8,8,0,0,1,0,11.3,96,96,0,1,1,0-135.8l20.3,20.3V51.7a8,8,0,1,1,16,0Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M232.2,51.7v48a8,8,0,0,1-8,8h-48a8,8,0,0,1-5.7-13.6l18.4-18.4-4.3-4.3a80,80,0,1,0,0,113.2,7.9,7.9,0,0,1,11.3,0,8,8,0,0,1,0,11.3,96,96,0,1,1,0-135.8l4.3,4.3,18.3-18.3a8,8,0,0,1,8.7-1.8A8.2,8.2,0,0,1,232.2,51.7Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M230.2,51.7v48a6,6,0,0,1-6,6h-48a6,6,0,0,1,0-12h33.5L186,70a82,82,0,1,0,0,116,5.9,5.9,0,0,1,8.5,0,6.1,6.1,0,0,1,0,8.5,94,94,0,1,1,0-133l23.7,23.7V51.7a6,6,0,1,1,12,0Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M232.2,51.7v48a8,8,0,0,1-8,8h-48a8,8,0,0,1,0-16h28.7L184.6,71.4a80,80,0,1,0,0,113.2,7.9,7.9,0,0,1,11.3,0,8,8,0,0,1,0,11.3,96,96,0,1,1,0-135.8l20.3,20.3V51.7a8,8,0,1,1,16,0Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M228.2,51.7v48a4,4,0,0,1-4,4h-48a4,4,0,0,1,0-8h38.3L187.4,68.6a84,84,0,1,0,0,118.8,4,4,0,0,1,5.7,0,4.2,4.2,0,0,1,0,5.7,92.1,92.1,0,1,1,0-130.2l27.1,27.2V51.7a4,4,0,1,1,8,0Z" />
  </>
);

const ArrowClockwise = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

ArrowClockwise.displayName = "ArrowClockwise";

export default ArrowClockwise;
