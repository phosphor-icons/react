/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M208,20H72A36,36,0,0,0,36,56V224a12,12,0,0,0,12,12H192a12,12,0,0,0,0-24H60v-4a12,12,0,0,1,12-12H208a12,12,0,0,0,12-12V32A12,12,0,0,0,208,20ZM196,172H72a34.4,34.4,0,0,0-12,2.1V56A12,12,0,0,1,72,44H196Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <path d="M48,216a23.9,23.9,0,0,1,24-24H208V32H72A23.9,23.9,0,0,0,48,56Z" />
    </g>
    <path d="M208,24H72A32.1,32.1,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24Zm-8,160H72a32.2,32.2,0,0,0-16,4.3V56A16,16,0,0,1,72,40H200Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M216,32V192a8,8,0,0,1-8,8H72a16,16,0,0,0-16,16H192a8,8,0,0,1,0,16H48a8,8,0,0,1-8-8V56A32.1,32.1,0,0,1,72,24H208A8,8,0,0,1,216,32Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M208,26H72A30.1,30.1,0,0,0,42,56V224a6,6,0,0,0,6,6H192a6,6,0,0,0,0-12H54v-2a18.1,18.1,0,0,1,18-18H208a6,6,0,0,0,6-6V32A6,6,0,0,0,208,26Zm-6,160H72a29.7,29.7,0,0,0-18,6V56A18.1,18.1,0,0,1,72,38H202Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M208,24H72A32.1,32.1,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24Zm-8,160H72a32.2,32.2,0,0,0-16,4.3V56A16,16,0,0,1,72,40H200Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M208,28H72A28.1,28.1,0,0,0,44,56V224a4,4,0,0,0,4,4H192a4,4,0,0,0,0-8H52v-4a20.1,20.1,0,0,1,20-20H208a4,4,0,0,0,4-4V32A4,4,0,0,0,208,28Zm-4,160H72a27.9,27.9,0,0,0-20,8.4V56A20.1,20.1,0,0,1,72,36H204Z" />
  </>
);

const Book = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

Book.displayName = "Book";

export default Book;
