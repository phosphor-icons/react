/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M208,28H48A20.1,20.1,0,0,0,28,48V208a20.1,20.1,0,0,0,20,20H208a20.1,20.1,0,0,0,20-20V48A20.1,20.1,0,0,0,208,28Zm-4,176H52V52H204ZM88,156V108a12,12,0,0,1,24,0v19l35.5-35.5a12,12,0,0,1,17,17L129,144h19a12,12,0,0,1,0,24H100A12,12,0,0,1,88,156Z" />
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
        transform="translate(0 256) rotate(-90)"
      />
    </g>
    <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208Z" />
    <path d="M100,164h48a8,8,0,0,0,0-16H119.3l42.4-42.3a8.1,8.1,0,0,0-11.4-11.4L108,136.7V108a8,8,0,0,0-16,0v48A8,8,0,0,0,100,164Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-46.3,73.7L119.3,148H148a8,8,0,0,1,0,16H100a8,8,0,0,1-8-8V108a8,8,0,0,1,16,0v28.7l42.3-42.4a8.1,8.1,0,0,1,11.4,11.4Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm2,174a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM160.2,95.8a5.8,5.8,0,0,1,0,8.4L114.5,150H148a6,6,0,0,1,0,12H100a6,6,0,0,1-6-6V108a6,6,0,0,1,12,0v33.5l45.8-45.7A5.8,5.8,0,0,1,160.2,95.8Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208ZM92,156V108a8,8,0,0,1,16,0v28.7l42.3-42.4a8.1,8.1,0,0,1,11.4,11.4L119.3,148H148a8,8,0,0,1,0,16H100A8,8,0,0,1,92,156Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,172a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4ZM158.8,97.2a3.9,3.9,0,0,1,0,5.6L109.7,152H148a4,4,0,0,1,0,8H100a4,4,0,0,1-4-4V108a4,4,0,0,1,8,0v38.3l49.2-49.1A3.9,3.9,0,0,1,158.8,97.2Z" />
  </>
);

const ArrowSquareDownLeft = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => <IconBase ref={ref} {...props} weightsMap={weightsMap} />
);

ArrowSquareDownLeft.displayName = "ArrowSquareDownLeft";

export default ArrowSquareDownLeft;
