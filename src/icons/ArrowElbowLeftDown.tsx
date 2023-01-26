/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M236,64a12,12,0,0,1-12,12H92V179l27.5-27.5a12,12,0,0,1,17,17l-48,48a12.1,12.1,0,0,1-17,0l-48-48a12,12,0,0,1,17-17L68,179V64A12,12,0,0,1,80,52H224A12,12,0,0,1,236,64Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M232,64a8,8,0,0,1-8,8H88V188.7l34.3-34.4a8.1,8.1,0,1,1,11.4,11.4l-48,48a8.2,8.2,0,0,1-11.4,0l-48-48a8.1,8.1,0,0,1,11.4-11.4L72,188.7V64a8,8,0,0,1,8-8H224A8,8,0,0,1,232,64Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M232,64a8,8,0,0,1-8,8H88v80h40a8,8,0,0,1,7.4,4.9,8.4,8.4,0,0,1-1.7,8.8l-48,48a8.2,8.2,0,0,1-11.4,0l-48-48a8.4,8.4,0,0,1-1.7-8.8A8,8,0,0,1,32,152H72V64a8,8,0,0,1,8-8H224A8,8,0,0,1,232,64Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M230,64a6,6,0,0,1-6,6H86V193.5l37.8-37.7a5.9,5.9,0,1,1,8.4,8.4l-48,48a5.8,5.8,0,0,1-8.4,0l-48-48a5.9,5.9,0,1,1,8.4-8.4L74,193.5V64a6,6,0,0,1,6-6H224A6,6,0,0,1,230,64Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M232,64a8,8,0,0,1-8,8H88V188.7l34.3-34.4a8.1,8.1,0,1,1,11.4,11.4l-48,48a8.2,8.2,0,0,1-11.4,0l-48-48a8.1,8.1,0,0,1,11.4-11.4L72,188.7V64a8,8,0,0,1,8-8H224A8,8,0,0,1,232,64Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M228,64a4,4,0,0,1-4,4H84V198.3l41.2-41.1a4,4,0,0,1,5.6,5.6l-48,48a3.9,3.9,0,0,1-5.6,0l-48-48a4,4,0,0,1,5.6-5.6L76,198.3V64a4,4,0,0,1,4-4H224A4,4,0,0,1,228,64Z" />
  </>
);

const ArrowElbowLeftDown = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => <IconBase ref={ref} {...props} weightsMap={weightsMap} />
);

ArrowElbowLeftDown.displayName = "ArrowElbowLeftDown";

export default ArrowElbowLeftDown;
