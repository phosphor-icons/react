/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, IconBase } from "../lib";

const weights = new Map<IconWeight, ReactElement>([
  [
    "bold",
    <>
      <path d="M216,220H40a20.1,20.1,0,0,1-20-20V56A20.1,20.1,0,0,1,40,36H216a20.1,20.1,0,0,1,20,20V200A20.1,20.1,0,0,1,216,220ZM44,196H212V60H44Z" />
    </>,
  ],
  [
    "duotone",
    <>
      <g opacity="0.2">
        <rect x="32" y="48" width="192" height="160" rx="8" />
      </g>
      <path d="M216,216H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216a16,16,0,0,1,16,16V200A16,16,0,0,1,216,216ZM40,56V200H216V56Z" />
    </>,
  ],
  [
    "fill",
    <>
      <path d="M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z" />
    </>,
  ],
  [
    "light",
    <>
      <path d="M216,214H40a14,14,0,0,1-14-14V56A14,14,0,0,1,40,42H216a14,14,0,0,1,14,14V200A14,14,0,0,1,216,214ZM40,54a2,2,0,0,0-2,2V200a2,2,0,0,0,2,2H216a2,2,0,0,0,2-2V56a2,2,0,0,0-2-2Z" />
    </>,
  ],
  [
    "regular",
    <>
      <path d="M216,216H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216a16,16,0,0,1,16,16V200A16,16,0,0,1,216,216ZM40,56V200H216V56Z" />
    </>,
  ],
  [
    "thin",
    <>
      <path d="M216,212H40a12,12,0,0,1-12-12V56A12,12,0,0,1,40,44H216a12,12,0,0,1,12,12V200A12,12,0,0,1,216,212ZM40,52a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4V56a4,4,0,0,0-4-4Z" />
    </>,
  ],
]);

const Rectangle: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

Rectangle.displayName = "Rectangle";

export default Rectangle;
