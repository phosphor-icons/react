/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M144,200a16,16,0,1,1-16-16A16,16,0,0,1,144,200Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M128,219.7a16,16,0,0,1-12.1-5.6L12.9,92.7A16,16,0,0,1,9.2,80.5a16.3,16.3,0,0,1,6.2-11c66.3-50,158.9-50,225.2,0a16.1,16.1,0,0,1,2.5,23.2l-103,121.4A16,16,0,0,1,128,219.7ZM25.1,82.3h0L128,203.6,230.9,82.4v-.2C170.4,36.6,85.7,36.6,25.1,82.3Zm-4.9-6.4Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M128,219.7a16,16,0,0,1-12.1-5.6L12.9,92.7a16.1,16.1,0,0,1,2.5-23.2c66.3-50,158.9-50,225.2,0a16.3,16.3,0,0,1,6.2,11,16,16,0,0,1-3.7,12.2l-103,121.4A16,16,0,0,1,128,219.7ZM25.1,82.3h0L128,203.6,230.9,82.4v-.2C170.4,36.6,85.7,36.6,25.1,82.3Zm-.1,0Zm-4.8-6.4Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M138,200a10,10,0,1,1-10-10A10,10,0,0,1,138,200Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M140,200a12,12,0,1,1-12-12A12,12,0,0,1,140,200Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M136,200a8,8,0,1,1-8-8A8,8,0,0,1,136,200Z" />
  </>
);

const WifiNone = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

WifiNone.displayName = "WifiNone";

export default WifiNone;
