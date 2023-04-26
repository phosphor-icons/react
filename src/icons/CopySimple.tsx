/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, IconBase } from "../lib";

const weights = new Map<IconWeight, ReactElement>([
  [
    "bold",
    <>
      <path d="M180,64H40A12,12,0,0,0,28,76V216a12,12,0,0,0,12,12H180a12,12,0,0,0,12-12V76A12,12,0,0,0,180,64ZM168,204H52V88H168ZM228,40V180a12,12,0,0,1-24,0V52H76a12,12,0,0,1,0-24H216A12,12,0,0,1,228,40Z" />
    </>,
  ],
  [
    "duotone",
    <>
      <path d="M184,72V216H40V72Z" opacity="0.2" />
      <path d="M184,64H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V72A8,8,0,0,0,184,64Zm-8,144H48V80H176ZM224,40V184a8,8,0,0,1-16,0V48H72a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40Z" />
    </>,
  ],
  [
    "fill",
    <>
      <path d="M192,72V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H184A8,8,0,0,1,192,72Zm24-40H72a8,8,0,0,0,0,16H208V184a8,8,0,0,0,16,0V40A8,8,0,0,0,216,32Z" />
    </>,
  ],
  [
    "light",
    <>
      <path d="M184,66H40a6,6,0,0,0-6,6V216a6,6,0,0,0,6,6H184a6,6,0,0,0,6-6V72A6,6,0,0,0,184,66Zm-6,144H46V78H178ZM222,40V184a6,6,0,0,1-12,0V46H72a6,6,0,0,1,0-12H216A6,6,0,0,1,222,40Z" />
    </>,
  ],
  [
    "regular",
    <>
      <path d="M184,64H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V72A8,8,0,0,0,184,64Zm-8,144H48V80H176ZM224,40V184a8,8,0,0,1-16,0V48H72a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40Z" />
    </>,
  ],
  [
    "thin",
    <>
      <path d="M184,68H40a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H184a4,4,0,0,0,4-4V72A4,4,0,0,0,184,68Zm-4,144H44V76H180ZM220,40V184a4,4,0,0,1-8,0V44H72a4,4,0,0,1,0-8H216A4,4,0,0,1,220,40Z" />
    </>,
  ],
]);

const CopySimple: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

CopySimple.displayName = "CopySimple";

export default CopySimple;
