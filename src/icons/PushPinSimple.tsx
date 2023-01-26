/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M216,164h-5.9L190.3,52H192a12,12,0,0,0,0-24H64a12,12,0,0,0,0,24h1.7L45.9,164H40a12,12,0,0,0,0,24h76v52a12,12,0,0,0,24,0V188h76a12,12,0,0,0,0-24ZM90.1,52h75.8l19.8,112H70.3Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M200,176H56L80,40h96Z" opacity="0.2" />
    <path d="M216,168h-9.3L185.5,48H192a8,8,0,0,0,0-16H64a8,8,0,0,0,0,16h6.5L49.3,168H40a8,8,0,0,0,0,16h80v56a8,8,0,0,0,16,0V184h80a8,8,0,0,0,0-16ZM86.7,48h82.6l21.2,120H65.5Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M224,176a8,8,0,0,1-8,8H136v56a8,8,0,0,1-16,0V184H40a8,8,0,0,1,0-16h9.3L70.5,48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16h-6.5l21.2,120H216A8,8,0,0,1,224,176Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M216,170H205L183.2,46H192a6,6,0,0,0,0-12H64a6,6,0,0,0,0,12h8.8L51,170H40a6,6,0,0,0,0,12h82v58a6,6,0,0,0,12,0V182h82a6,6,0,0,0,0-12ZM85,46h86l21.8,124H63.2Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M216,168h-9.3L185.5,48H192a8,8,0,0,0,0-16H64a8,8,0,0,0,0,16h6.5L49.3,168H40a8,8,0,0,0,0,16h80v56a8,8,0,0,0,16,0V184h80a8,8,0,0,0,0-16ZM86.7,48h82.6l21.2,120H65.5Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M216,172H203.4L180.8,44H192a4,4,0,0,0,0-8H64a4,4,0,0,0,0,8H75.2L52.6,172H40a4,4,0,0,0,0,8h84v60a4,4,0,0,0,8,0V180h84a4,4,0,0,0,0-8ZM83.4,44h89.2l22.6,128H60.8Z" />
  </>
);

const PushPinSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

PushPinSimple.displayName = "PushPinSimple";

export default PushPinSimple;
