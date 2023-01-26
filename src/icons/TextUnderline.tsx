/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M228,216a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,216ZM128,192a76.1,76.1,0,0,0,76-76V56a12,12,0,0,0-24,0v60a52,52,0,0,1-104,0V56a12,12,0,0,0-24,0v60A76.1,76.1,0,0,0,128,192Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216Zm-96-24a72.1,72.1,0,0,0,72-72V56a8,8,0,0,0-16,0v64a56,56,0,0,1-112,0V56a8,8,0,0,0-16,0v64A72.1,72.1,0,0,0,128,192Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M56,120V56a8,8,0,0,1,16,0v64a56,56,0,0,0,112,0V56a8,8,0,0,1,16,0v64a72,72,0,0,1-144,0Zm160,88H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M222,216a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,216Zm-94-26a70.1,70.1,0,0,0,70-70V56a6,6,0,0,0-12,0v64a58,58,0,0,1-116,0V56a6,6,0,0,0-12,0v64A70.1,70.1,0,0,0,128,190Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216Zm-96-24a72.1,72.1,0,0,0,72-72V56a8,8,0,0,0-16,0v64a56,56,0,0,1-112,0V56a8,8,0,0,0-16,0v64A72.1,72.1,0,0,0,128,192Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M220,216a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,216Zm-92-28a68.1,68.1,0,0,0,68-68V56a4,4,0,0,0-8,0v64a60,60,0,0,1-120,0V56a4,4,0,0,0-8,0v64A68.1,68.1,0,0,0,128,188Z" />
  </>
);

const TextUnderline = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

TextUnderline.displayName = "TextUnderline";

export default TextUnderline;
