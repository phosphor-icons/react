/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M211.4,52.5l-80-24A12,12,0,0,0,116,40V140.2A52,52,0,1,0,140,184V56.1l64.6,19.4a12,12,0,0,0,6.8-23ZM88,212a28,28,0,1,1,28-28A28.1,28.1,0,0,1,88,212Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <circle cx="88" cy="184" r="40" />
    </g>
    <path d="M210.3,56.3l-80-24a8.2,8.2,0,0,0-7.1,1.3A8.1,8.1,0,0,0,120,40V148.3A47.4,47.4,0,0,0,88,136a48,48,0,1,0,48,48V50.8l69.7,20.9a8,8,0,1,0,4.6-15.4ZM88,216a32,32,0,1,1,32-32A32.1,32.1,0,0,1,88,216Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M215.7,66.3a8.2,8.2,0,0,1-10,5.4L136,50.8V184a48,48,0,1,1-48-48,47.4,47.4,0,0,1,32,12.3V40a8.1,8.1,0,0,1,3.2-6.4,8.2,8.2,0,0,1,7.1-1.3l80,24A8.2,8.2,0,0,1,215.7,66.3Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M209.7,58.3l-80-24a5.9,5.9,0,0,0-5.3.9A6,6,0,0,0,122,40V153a46,46,0,1,0,12,31V48.1l72.3,21.6a5.9,5.9,0,0,0,3.4-11.4ZM88,218a34,34,0,1,1,34-34A34.1,34.1,0,0,1,88,218Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M210.3,56.3l-80-24a8.2,8.2,0,0,0-7.1,1.3A8.1,8.1,0,0,0,120,40V148.3A47.4,47.4,0,0,0,88,136a48,48,0,1,0,48,48V50.8l69.7,20.9a8,8,0,1,0,4.6-15.4ZM88,216a32,32,0,1,1,32-32A32.1,32.1,0,0,1,88,216Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M209.1,60.2l-80-24a3.7,3.7,0,0,0-3.5.6A3.9,3.9,0,0,0,124,40V158.7a44,44,0,1,0,8,25.3V45.4l74.9,22.4a4,4,0,0,0,2.2-7.6ZM88,220a36,36,0,1,1,36-36A36,36,0,0,1,88,220Z" />
  </>
);

const MusicNoteSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

MusicNoteSimple.displayName = "MusicNoteSimple";

export default MusicNoteSimple;
