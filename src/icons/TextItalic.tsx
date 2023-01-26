/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M204,56a12,12,0,0,1-12,12H160.6l-40,120H144a12,12,0,0,1,0,24H64a12,12,0,0,1,0-24H95.3l40-120H112a12,12,0,0,1,0-24h80A12,12,0,0,1,204,56Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M200,56a8,8,0,0,1-8,8H157.8L115.1,192H144a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16H98.2L140.9,64H112a8,8,0,0,1,0-16h80A8,8,0,0,1,200,56Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M200,56a8,8,0,0,1-8,8H157.8L115.1,192H144a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16H98.2L140.9,64H112a8,8,0,0,1,0-16h80A8,8,0,0,1,200,56Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M198,56a6,6,0,0,1-6,6H156.3l-44,132H144a6,6,0,0,1,0,12H64a6,6,0,0,1,0-12H99.7l44-132H112a6,6,0,0,1,0-12h80A6,6,0,0,1,198,56Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M200,56a8,8,0,0,1-8,8H157.8L115.1,192H144a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16H98.2L140.9,64H112a8,8,0,0,1,0-16h80A8,8,0,0,1,200,56Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M196,56a4,4,0,0,1-4,4H154.9L109.5,196H144a4,4,0,0,1,0,8H64a4,4,0,0,1,0-8h37.1L146.4,60H112a4,4,0,0,1,0-8h80A4,4,0,0,1,196,56Z" />
  </>
);

const TextItalic = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

TextItalic.displayName = "TextItalic";

export default TextItalic;
