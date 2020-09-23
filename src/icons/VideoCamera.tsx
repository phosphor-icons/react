/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <path d="M24,56H152a32,32,0,0,1,32,32V192a8,8,0,0,1-8,8H48a32,32,0,0,1-32-32V64A8,8,0,0,1,24,56Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <polygon points="240 176 184 144 184 112 240 80 240 176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <path d="M24,56H152a32,32,0,0,1,32,32V192a8,8,0,0,1-8,8H48a32,32,0,0,1-32-32V64A8,8,0,0,1,24,56Z" opacity="0.2"/>
  <path d="M24,56H152a32,32,0,0,1,32,32V192a8,8,0,0,1-8,8H48a32,32,0,0,1-32-32V64A8,8,0,0,1,24,56Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polygon points="240 176 184 144 184 112 240 80 240 176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <path d="M192,98.21436V88a40.04584,40.04584,0,0,0-40-40H24A16.01833,16.01833,0,0,0,8,64V168a40.04584,40.04584,0,0,0,40,40H176a16.01833,16.01833,0,0,0,16-16V98.21436Z"/>
  <path d="M244.01562,73.08105a8.001,8.001,0,0,0-7.98437-.02734L208,89.07153v77.85694l28.03125,16.01782A8.0003,8.0003,0,0,0,248,176V80A7.99807,7.99807,0,0,0,244.01562,73.08105Z"/>

</>)
    case "light":
      return (<>
  <path d="M24,56H152a32,32,0,0,1,32,32V192a8,8,0,0,1-8,8H48a32,32,0,0,1-32-32V64A8,8,0,0,1,24,56Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <polygon points="240 176 184 144 184 112 240 80 240 176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <path d="M24,56H152a32,32,0,0,1,32,32V192a8,8,0,0,1-8,8H48a32,32,0,0,1-32-32V64A8,8,0,0,1,24,56Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <polygon points="240 176 184 144 184 112 240 80 240 176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <path d="M24,56H152a32,32,0,0,1,32,32V192a8,8,0,0,1-8,8H48a32,32,0,0,1-32-32V64A8,8,0,0,1,24,56Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polygon points="240 176 184 144 184 112 240 80 240 176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const VideoCamera = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
});

VideoCamera.displayName = "VideoCamera";

export default VideoCamera;
