/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M208,28H48A20.1,20.1,0,0,0,28,48V208a20.1,20.1,0,0,0,20,20H208a20.1,20.1,0,0,0,20-20V48A20.1,20.1,0,0,0,208,28Zm-4,176H52V52H204ZM91.5,108.5a12,12,0,0,1,17-17L144,127V108a12,12,0,0,1,24,0v48a12,12,0,0,1-12,12H108a12,12,0,0,1,0-24h19Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <rect
        x="40"
        y="40"
        width="176"
        height="176"
        rx="8"
        transform="translate(256 0) rotate(90)"
      />
    </g>
    <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208Z" />
    <path d="M136.7,148H108a8,8,0,0,0,0,16h48a8,8,0,0,0,8-8V108a8,8,0,0,0-16,0v28.7L105.7,94.3a8.1,8.1,0,0,0-11.4,11.4Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM164,156a8,8,0,0,1-8,8H108a8,8,0,0,1,0-16h28.7L94.3,105.7a8.1,8.1,0,0,1,11.4-11.4L148,136.7V108a8,8,0,0,1,16,0Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm2,174a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM162,108v48a6,6,0,0,1-6,6H108a6,6,0,0,1,0-12h33.5L95.8,104.2a5.9,5.9,0,0,1,8.4-8.4L150,141.5V108a6,6,0,0,1,12,0Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208ZM94.3,105.7a8.1,8.1,0,0,1,11.4-11.4L148,136.7V108a8,8,0,0,1,16,0v48a8,8,0,0,1-8,8H108a8,8,0,0,1,0-16h28.7Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,172a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4ZM160,108v48a4,4,0,0,1-4,4H108a4,4,0,0,1,0-8h38.3L97.2,102.8a4,4,0,0,1,5.6-5.6L152,146.3V108a4,4,0,0,1,8,0Z" />
  </>
);

const ArrowSquareDownRight = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => <IconBase ref={ref} {...props} weightsMap={weightsMap} />
);

ArrowSquareDownRight.displayName = "ArrowSquareDownRight";

export default ArrowSquareDownRight;
