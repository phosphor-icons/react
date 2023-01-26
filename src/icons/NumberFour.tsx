/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M184,96V224a12,12,0,0,1-24,0V172H76a12,12,0,0,1-11.3-16l48-136a12,12,0,1,1,22.6,8L93,148h67V96a12,12,0,0,1,24,0Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M180,96V224a8,8,0,0,1-16,0V168H76a8,8,0,0,1-6.5-3.4,7.9,7.9,0,0,1-1-7.3l48-136a8,8,0,0,1,15,5.4L87.3,152H164V96a8,8,0,0,1,16,0Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M180,96V224a8,8,0,0,1-16,0V168H76a8,8,0,0,1-6.5-3.4,7.9,7.9,0,0,1-1-7.3l48-136a8,8,0,0,1,15,5.4L87.3,152H164V96a8,8,0,0,1,16,0Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M178,96V224a6,6,0,0,1-12,0V166H76a6,6,0,0,1-4.9-2.5,6.3,6.3,0,0,1-.8-5.5l48-136a6,6,0,0,1,11.4,4L84.5,154H166V96a6,6,0,0,1,12,0Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M180,96V224a8,8,0,0,1-16,0V168H76a8,8,0,0,1-6.5-3.4,7.9,7.9,0,0,1-1-7.3l48-136a8,8,0,0,1,15,5.4L87.3,152H164V96a8,8,0,0,1,16,0Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M176,96V224a4,4,0,0,1-8,0V164H76a4,4,0,0,1-3.3-1.7,4.2,4.2,0,0,1-.5-3.6l48-136a4,4,0,0,1,7.6,2.6L81.7,156H168V96a4,4,0,0,1,8,0Z" />
  </>
);

const NumberFour = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

NumberFour.displayName = "NumberFour";

export default NumberFour;
