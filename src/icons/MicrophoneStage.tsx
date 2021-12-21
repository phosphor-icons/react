/* GENERATED FILE */
import React, { forwardRef } from "react";

import {
  IconWeight,
  IconProps,
  PaintFunction,
  renderPathForWeight,
} from "../lib";
import IconBase, { RenderFunction } from "../lib/IconBase";

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set("bold", (color: string) => (
  <>
    <circle
      cx="168"
      cy="88"
      r="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="213.3"
      y1="133.3"
      x2="122.7"
      y2="42.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M104.8,97.9,28.1,202.5a7.9,7.9,0,0,0,.8,10.4l14.2,14.2a7.9,7.9,0,0,0,10.4.8l104.6-76.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <path
      d="M158.1,151.2a63.9,63.9,0,0,1-53.3-53.3h0L28.1,202.5a7.9,7.9,0,0,0,.8,10.4l14.2,14.2a7.9,7.9,0,0,0,10.4.8l104.6-76.7Z"
      opacity="0.2"
    />
    <circle
      cx="168"
      cy="88"
      r="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="213.3"
      y1="133.3"
      x2="122.7"
      y2="42.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="100"
      y1="156"
      x2="88"
      y2="168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M104.8,97.9,28.1,202.5a7.9,7.9,0,0,0,.8,10.4l14.2,14.2a7.9,7.9,0,0,0,10.4.8l104.6-76.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M96,88a65.1,65.1,0,0,0,.4,7.7l-74.8,102a16,16,0,0,0,1.6,20.8l14.3,14.3a16,16,0,0,0,20.8,1.6l102-74.8a65.1,65.1,0,0,0,7.7.4,71.9,71.9,0,0,0,41.1-12.9,4,4,0,0,0,.5-6.1L115,46.4a4,4,0,0,0-6.1.5A71.9,71.9,0,0,0,96,88Zm17.7,65.7-20,20a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4l20-20a8.1,8.1,0,0,1,11.4,11.4ZM239.9,84a72,72,0,0,1-12.8,45.1,4,4,0,0,1-6.1.5L126.4,35a4,4,0,0,1,.5-6.1A72,72,0,0,1,239.9,84Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="168"
      cy="88"
      r="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="213.3"
      y1="133.3"
      x2="122.7"
      y2="42.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="100"
      y1="156"
      x2="88"
      y2="168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M104.8,97.9,28.1,202.5a7.9,7.9,0,0,0,.8,10.4l14.2,14.2a7.9,7.9,0,0,0,10.4.8l104.6-76.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <circle
      cx="168"
      cy="88"
      r="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="213.3"
      y1="133.3"
      x2="122.7"
      y2="42.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="100"
      y1="156"
      x2="88"
      y2="168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M104.8,97.9,28.1,202.5a7.9,7.9,0,0,0,.8,10.4l14.2,14.2a7.9,7.9,0,0,0,10.4.8l104.6-76.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <circle
      cx="168"
      cy="88"
      r="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="213.3"
      y1="133.3"
      x2="122.7"
      y2="42.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="100"
      y1="156"
      x2="88"
      y2="168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M104.8,97.9,28.1,202.5a7.9,7.9,0,0,0,.8,10.4l14.2,14.2a7.9,7.9,0,0,0,10.4.8l104.6-76.7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const MicrophoneStage = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

MicrophoneStage.displayName = "MicrophoneStage";

export default MicrophoneStage;
