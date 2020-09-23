/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <polygon points="240 176 184 144 184 112 240 80 240 176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M105.79173,56H152a32,32,0,0,1,32,32v56" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M193.45455,200H48a32,32,0,0,1-32-32V64a8,8,0,0,1,8-8H62.54545" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="33.45455" y1="24" x2="222.54545" y2="232" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <path d="M24,56H152a32,32,0,0,1,32,32V192a8,8,0,0,1-8,8H48a32,32,0,0,1-32-32V64A8,8,0,0,1,24,56Z" opacity="0.2"/>
  <polygon points="240 176 184 144 184 112 240 80 240 176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M105.79173,56H152a32,32,0,0,1,32,32v56" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M193.45455,200H48a32,32,0,0,1-32-32V64a8,8,0,0,1,8-8H62.54545" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="33.45455" y1="24" x2="222.54545" y2="232" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <path d="M244.01562,73.08105a8.001,8.001,0,0,0-7.98437-.02734L192,98.21436V88a40.04584,40.04584,0,0,0-40-40H105.792A7.9999,7.9999,0,0,0,99.8125,61.31445l78.208,88c.06274.07032.13281.13184.19751.19971.08325.0874.16723.17334.25464.25732.16357.15625.33325.30274.50732.44336.07666.06153.14941.12647.22827.18555a8.04435,8.04435,0,0,0,.81226.53906l.01074.00684,56,32A8.0003,8.0003,0,0,0,248,176V80A7.99807,7.99807,0,0,0,244.01562,73.08105Z"/>
  <path d="M39.374,18.61816A8.0006,8.0006,0,0,0,27.53418,29.38184L44.46,48H24A16.01833,16.01833,0,0,0,8,64V168a40.04584,40.04584,0,0,0,40,40H189.915L216.626,237.38184a8.0006,8.0006,0,0,0,11.83984-10.76368Z"/>

</>)
    case "light":
      return (<>
  <polygon points="240 176 184 144 184 112 240 80 240 176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M105.79173,56H152a32,32,0,0,1,32,32v56" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M193.45455,200H48a32,32,0,0,1-32-32V64a8,8,0,0,1,8-8H62.54545" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="33.45455" y1="24" x2="222.54545" y2="232" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <polygon points="240 176 184 144 184 112 240 80 240 176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M105.79173,56H152a32,32,0,0,1,32,32v56" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M193.45455,200H48a32,32,0,0,1-32-32V64a8,8,0,0,1,8-8H62.54545" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="33.45455" y1="24" x2="222.54545" y2="232" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <polygon points="240 176 184 144 184 112 240 80 240 176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M105.79173,56H152a32,32,0,0,1,32,32v56" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M193.45455,200H48a32,32,0,0,1-32-32V64a8,8,0,0,1,8-8H62.54545" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="33.45455" y1="24" x2="222.54545" y2="232" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const VideoCameraSlash = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

VideoCameraSlash.displayName = "VideoCameraSlash";

export default VideoCameraSlash;
