/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M208,228H48a20.1,20.1,0,0,1-20-20V48A20.1,20.1,0,0,1,48,28H208a20.1,20.1,0,0,1,20,20V208A20.1,20.1,0,0,1,208,228ZM52,204H204V52H52Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <rect x="40" y="40" width="176" height="176" rx="8" />
    </g>
    <path d="M208,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208a16,16,0,0,1,16,16V208A16,16,0,0,1,208,224ZM48,48V208H208V48Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M208,222H48a14,14,0,0,1-14-14V48A14,14,0,0,1,48,34H208a14,14,0,0,1,14,14V208A14,14,0,0,1,208,222ZM48,46a2,2,0,0,0-2,2V208a2,2,0,0,0,2,2H208a2,2,0,0,0,2-2V48a2,2,0,0,0-2-2Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M208,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208a16,16,0,0,1,16,16V208A16,16,0,0,1,208,224ZM48,48V208H208V48Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M208,220H48a12,12,0,0,1-12-12V48A12,12,0,0,1,48,36H208a12,12,0,0,1,12,12V208A12,12,0,0,1,208,220ZM48,44a4,4,0,0,0-4,4V208a4,4,0,0,0,4,4H208a4,4,0,0,0,4-4V48a4,4,0,0,0-4-4Z" />
  </>
);

const Square = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

Square.displayName = "Square";

export default Square;
