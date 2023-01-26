/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M204,88V192a12,12,0,0,1-12,12H88a12,12,0,0,1,0-24h75L55.5,72.5a12,12,0,0,1,17-17L180,163V88a12,12,0,0,1,24,0Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M200,88V192a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h84.7L58.3,69.7A8.1,8.1,0,0,1,69.7,58.3L184,172.7V88a8,8,0,0,1,16,0Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M200,88V192a8,8,0,0,1-8,8H88a8,8,0,0,1-7.4-4.9,8.4,8.4,0,0,1,1.7-8.8L128.7,140,58.3,69.7A8.1,8.1,0,0,1,69.7,58.3L140,128.7l46.3-46.4a8.4,8.4,0,0,1,8.8-1.7A8,8,0,0,1,200,88Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M198,88V192a6,6,0,0,1-6,6H88a6,6,0,0,1,0-12h89.5L59.8,68.2a5.9,5.9,0,0,1,8.4-8.4L186,177.5V88a6,6,0,0,1,12,0Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M200,88V192a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h84.7L58.3,69.7A8.1,8.1,0,0,1,69.7,58.3L184,172.7V88a8,8,0,0,1,16,0Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M196,88V192a4,4,0,0,1-4,4H88a4,4,0,0,1,0-8h94.3L61.2,66.8a4,4,0,0,1,5.6-5.6L188,182.3V88a4,4,0,0,1,8,0Z" />
  </>
);

const ArrowDownRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

ArrowDownRight.displayName = "ArrowDownRight";

export default ArrowDownRight;
