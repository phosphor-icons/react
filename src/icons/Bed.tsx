/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, IconBase } from "../lib";

const weights = new Map<IconWeight, ReactElement>([
  [
    "bold",
    <>
      <path d="M208,68H28V48A12,12,0,0,0,4,48V208a12,12,0,0,0,24,0V180H228v28a12,12,0,0,0,24,0V112A44,44,0,0,0,208,68ZM28,92H92v64H28Zm88,64V92h92a20.1,20.1,0,0,1,20,20v44Z" />
    </>,
  ],
  [
    "duotone",
    <>
      <g opacity="0.2">
        <path d="M104,80H208a32,32,0,0,1,32,32v56a0,0,0,0,1,0,0H104a0,0,0,0,1,0,0V80A0,0,0,0,1,104,80Z" />
      </g>
      <path d="M208,72H24V48A8,8,0,0,0,8,48V208a8,8,0,0,0,16,0V176H232v32a8,8,0,0,0,16,0V112A40,40,0,0,0,208,72ZM24,88H96v72H24Zm88,72V88h96a24.1,24.1,0,0,1,24,24v48Z" />
    </>,
  ],
  [
    "fill",
    <>
      <path d="M208,72H24V48A8,8,0,0,0,8,48V208a8,8,0,0,0,16,0V176H232v32a8,8,0,0,0,16,0V112A40,40,0,0,0,208,72ZM24,88H96v72H24Z" />
    </>,
  ],
  [
    "light",
    <>
      <path d="M208,74H22V48a6,6,0,0,0-12,0V208a6,6,0,0,0,12,0V174H234v34a6,6,0,0,0,12,0V112A38,38,0,0,0,208,74ZM22,86H98v76H22Zm88,76V86h98a26.1,26.1,0,0,1,26,26v50Z" />
    </>,
  ],
  [
    "regular",
    <>
      <path d="M208,72H24V48A8,8,0,0,0,8,48V208a8,8,0,0,0,16,0V176H232v32a8,8,0,0,0,16,0V112A40,40,0,0,0,208,72ZM24,88H96v72H24Zm88,72V88h96a24.1,24.1,0,0,1,24,24v48Z" />
    </>,
  ],
  [
    "thin",
    <>
      <path d="M208,76H20V48a4,4,0,0,0-8,0V208a4,4,0,0,0,8,0V172H236v36a4,4,0,0,0,8,0V112A36,36,0,0,0,208,76ZM20,84h80v80H20Zm88,80V84H208a28.1,28.1,0,0,1,28,28v52Z" />
    </>,
  ],
]);

const Bed: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

Bed.displayName = "Bed";

export default Bed;
