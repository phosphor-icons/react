/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, IconBase } from "../lib";

const weights = new Map<IconWeight, ReactElement>([
  [
    "bold",
    <>
      <path d="M52,192v8a12,12,0,0,1-24,0v-8a12,12,0,0,1,24,0Z" />
    </>,
  ],
  [
    "duotone",
    <>
      <path d="M198.12,25.23a16,16,0,0,0-17.43,3.47l-160,160A16,16,0,0,0,32,216H192a16,16,0,0,0,16-16V40A16,16,0,0,0,198.12,25.23ZM192,200H32L192,40Z" />
    </>,
  ],
  [
    "fill",
    <>
      <path d="M198.12,25.23a16,16,0,0,0-17.44,3.46l-160,160A16,16,0,0,0,32,216H192a16,16,0,0,0,16-16V40A15.94,15.94,0,0,0,198.12,25.23ZM192,200H32L192,40Z" />
    </>,
  ],
  [
    "light",
    <>
      <path d="M46,192v8a6,6,0,0,1-12,0v-8a6,6,0,0,1,12,0Z" />
    </>,
  ],
  [
    "regular",
    <>
      <path d="M48,192v8a8,8,0,0,1-16,0v-8a8,8,0,0,1,16,0Z" />
    </>,
  ],
  [
    "thin",
    <>
      <path d="M44,192v8a4,4,0,0,1-8,0v-8a4,4,0,0,1,8,0Z" />
    </>,
  ],
]);

const CellSignalNone: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

CellSignalNone.displayName = "CellSignalNone";

export default CellSignalNone;
