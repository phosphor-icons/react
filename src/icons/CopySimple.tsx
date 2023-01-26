/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M232,36V176a12,12,0,0,1-24,0V48H80a12,12,0,0,1,0-24H220A12,12,0,0,1,232,36ZM192,76V216a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V76A12,12,0,0,1,40,64H180A12,12,0,0,1,192,76ZM168,88H52V204H168Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <rect x="39.9" y="72" width="144" height="144" />
    </g>
    <path d="M216,32H71.9a8,8,0,0,0,0,16H208V184a8,8,0,0,0,16,0V40A8,8,0,0,0,216,32Z" />
    <path d="M184,64H39.9a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V72A8,8,0,0,0,184,64Zm-8,144H47.9V80H176Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M224,40V184a8,8,0,0,1-16,0V48H72a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40ZM184,64H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V72A8,8,0,0,0,184,64Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M222,40V184a6,6,0,0,1-12,0V46H72a6,6,0,0,1,0-12H216A6,6,0,0,1,222,40ZM190,72V216a6,6,0,0,1-6,6H40a6,6,0,0,1-6-6V72a6,6,0,0,1,6-6H184A6,6,0,0,1,190,72Zm-12,6H46V210H178Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M224,40V184a8,8,0,0,1-16,0V48H72a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40ZM192,72V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H184A8,8,0,0,1,192,72Zm-16,8H48V208H176Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M220,40V184a4,4,0,0,1-8,0V44H72a4,4,0,0,1,0-8H216A4,4,0,0,1,220,40ZM188,72V216a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V72a4,4,0,0,1,4-4H184A4,4,0,0,1,188,72Zm-8,4H44V212H180Z" />
  </>
);

const CopySimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

CopySimple.displayName = "CopySimple";

export default CopySimple;
