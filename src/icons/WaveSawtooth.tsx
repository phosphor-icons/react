/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M238.3,138.2l-104,64A11.8,11.8,0,0,1,128,204a12.6,12.6,0,0,1-5.9-1.5A12.2,12.2,0,0,1,116,192V85.5L30.3,138.2a12,12,0,0,1-12.6-20.4l104-64A11.9,11.9,0,0,1,140,64V170.5l85.7-52.7a12,12,0,0,1,12.6,20.4Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M128,192V128H232ZM24,128H128V64Z" opacity="0.2" />
    <path d="M236.2,134.8l-104,64a8,8,0,0,1-8.1.2,8.1,8.1,0,0,1-4.1-7V78.3L28.2,134.8a8,8,0,0,1-8.4-13.6l104-64A8,8,0,0,1,136,64V177.7l91.8-56.5a8,8,0,0,1,8.4,13.6Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M236.2,134.8l-104,64a8,8,0,0,1-8.1.2,8.1,8.1,0,0,1-4.1-7V78.3L28.2,134.8a8,8,0,0,1-8.4-13.6l104-64A8,8,0,0,1,136,64V177.7l91.8-56.5a8,8,0,0,1,8.4,13.6Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M235.1,133.1l-104,64a5.6,5.6,0,0,1-3.1.9,6,6,0,0,1-2.9-.8A5.9,5.9,0,0,1,122,192V74.7L27.1,133.1a6,6,0,1,1-6.2-10.2l104-64A6,6,0,0,1,134,64V181.3l94.9-58.4a6,6,0,1,1,6.2,10.2Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M236.2,134.8l-104,64a8,8,0,0,1-8.1.2,8.1,8.1,0,0,1-4.1-7V78.3L28.2,134.8a8,8,0,0,1-8.4-13.6l104-64A8,8,0,0,1,136,64V177.7l91.8-56.5a8,8,0,0,1,8.4,13.6Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M234.1,131.4l-104,64a3.9,3.9,0,0,1-2.1.6,4.9,4.9,0,0,1-2-.5,4.2,4.2,0,0,1-2-3.5V71.2L26.1,131.4a4,4,0,0,1-4.2-6.8l104-64a4,4,0,0,1,4.1-.1,4.2,4.2,0,0,1,2,3.5V184.8l97.9-60.2a4,4,0,0,1,4.2,6.8Z" />
  </>
);

const WaveSawtooth = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

WaveSawtooth.displayName = "WaveSawtooth";

export default WaveSawtooth;
