/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect x="16" y="56" width="168" height="144" rx="8" strokeWidth="24" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <polygon points="240 176 184 152 184 104 240 80 240 176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <rect x="16" y="56" width="168" height="144" rx="8" opacity="0.2"/>
  <rect x="16" y="56" width="168" height="144" rx="8" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <polygon points="240 176 184 152 184 104 240 80 240 176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <path d="M244.4043,73.32129a8.005,8.005,0,0,0-7.55567-.67481L192,91.86731V64a16.01833,16.01833,0,0,0-16-16H24A16.01833,16.01833,0,0,0,8,64V192a16.01833,16.01833,0,0,0,16,16H176a16.01833,16.01833,0,0,0,16-16V164.13269l44.84863,19.22083A8.00014,8.00014,0,0,0,248,176V80A7.99913,7.99913,0,0,0,244.4043,73.32129Z"/>

</>)
    case "light":
      return (<>
  <rect x="16" y="56" width="168" height="144" rx="8" strokeWidth="12" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <polygon points="240 176 184 152 184 104 240 80 240 176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <rect x="16" y="56" width="168" height="144" rx="8" strokeWidth="8" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <polygon points="240 176 184 152 184 104 240 80 240 176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <rect x="16" y="56" width="168" height="144" rx="8" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <polygon points="240 176 184 152 184 104 240 80 240 176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const VideoCamera = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
    const { color, size, weight, mirrored, ...rest } = props;
    const {
      color: contextColor,
      size: contextSize,
      weight: contextWeight,
      mirrored: contextMirrored,
      ...contextRest
    } = useContext(IconContext);

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size ?? contextSize}
        height={size ?? contextSize}
        fill={color ?? contextColor}
        viewBox="0 0 256 256"
        transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined}
        {...contextRest}
        {...rest}
      >
        {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
      </svg>
    );
  }
);

VideoCamera.displayName = "VideoCamera";

export default VideoCamera;
