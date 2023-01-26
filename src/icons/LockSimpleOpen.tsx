/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M208,76H104V52a24,24,0,0,1,47.9-2.7,12,12,0,0,0,23.8-2.6A48,48,0,0,0,80,52V76H48A20.1,20.1,0,0,0,28,96V208a20.1,20.1,0,0,0,20,20H208a20.1,20.1,0,0,0,20-20V96A20.1,20.1,0,0,0,208,76Zm-4,128H52V100H204Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <rect x="40" y="88" width="176" height="128" rx="8" />
    </g>
    <path d="M208,80H100V52a28,28,0,0,1,56,0,8,8,0,0,0,16,0,44,44,0,0,0-88,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm0,128H48V96H208V208Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M224,96V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V96A16,16,0,0,1,48,80H84V52a44,44,0,0,1,88,0,8,8,0,0,1-16,0,28,28,0,0,0-56,0V80H208A16,16,0,0,1,224,96Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M208,82H98V52a30,30,0,0,1,60,0,6,6,0,0,0,12,0,42,42,0,0,0-84,0V82H48A14,14,0,0,0,34,96V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V96A14,14,0,0,0,208,82Zm2,126a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M208,80H100V52a28,28,0,0,1,56,0,8,8,0,0,0,16,0,44,44,0,0,0-88,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm0,128H48V96H208V208Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M208,84H96V52a32,32,0,0,1,64,0,4,4,0,0,0,8,0,40,40,0,0,0-80,0V84H48A12,12,0,0,0,36,96V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V96A12,12,0,0,0,208,84Zm4,124a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z" />
  </>
);

const LockSimpleOpen = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

LockSimpleOpen.displayName = "LockSimpleOpen";

export default LockSimpleOpen;
