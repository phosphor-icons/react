/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M144,192a16,16,0,1,1-16-16A16,16,0,0,1,144,192ZM128,80a16,16,0,1,0-16-16A16,16,0,0,0,128,80Zm0,32a16,16,0,1,0,16,16A16,16,0,0,0,128,112Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M140,192a12,12,0,1,1-12-12A12,12,0,0,1,140,192ZM128,76a12,12,0,1,0-12-12A12,12,0,0,0,128,76Zm0,40a12,12,0,1,0,12,12A12,12,0,0,0,128,116Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M116,64a12,12,0,1,1,12,12A12,12,0,0,1,116,64Zm12,52a12,12,0,1,0,12,12A12,12,0,0,0,128,116Zm0,64a12,12,0,1,0,12,12A12,12,0,0,0,128,180Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M138,192a10,10,0,1,1-10-10A10,10,0,0,1,138,192ZM128,74a10,10,0,1,0-10-10A10,10,0,0,0,128,74Zm0,44a10,10,0,1,0,10,10A10,10,0,0,0,128,118Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M140,192a12,12,0,1,1-12-12A12,12,0,0,1,140,192ZM128,76a12,12,0,1,0-12-12A12,12,0,0,0,128,76Zm0,40a12,12,0,1,0,12,12A12,12,0,0,0,128,116Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M136,192a8,8,0,1,1-8-8A8,8,0,0,1,136,192ZM128,72a8,8,0,1,0-8-8A8,8,0,0,0,128,72Zm0,48a8,8,0,1,0,8,8A8,8,0,0,0,128,120Z" />
  </>
);

const DotsThreeVertical = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

DotsThreeVertical.displayName = "DotsThreeVertical";

export default DotsThreeVertical;
