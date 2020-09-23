/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M31.99414,104h48a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0h-48a8,8,0,0,1-8-8V112A8,8,0,0,1,31.99414,104Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M79.99414,104l40-80a32,32,0,0,1,32,32V80h61.87549a16,16,0,0,1,15.87644,17.98456l-12,96A16,16,0,0,1,201.86963,208H79.99414" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M31.99414,104h48a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0h-48a8,8,0,0,1-8-8V112A8,8,0,0,1,31.99414,104Z" opacity="0.2"/>
  <path d="M31.99414,104h48a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0h-48a8,8,0,0,1-8-8V112A8,8,0,0,1,31.99414,104Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M79.99414,104l40-80a32,32,0,0,1,32,32V80h61.87549a16,16,0,0,1,15.87644,17.98456l-12,96A16,16,0,0,1,201.86963,208H79.99414" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M64,96H31.99414a16.01833,16.01833,0,0,0-16,16v88a16.01833,16.01833,0,0,0,16,16H64Z"/>
  <path d="M231.86133,80.11621A24.01156,24.01156,0,0,0,213.86914,72h-53.875V56a40.04552,40.04552,0,0,0-40-40,7.99869,7.99869,0,0,0-7.15527,4.42236L80,86.09961V216H201.86914a24.03945,24.03945,0,0,0,23.81543-21.02344l12-96A24.01444,24.01444,0,0,0,231.86133,80.11621Z"/>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M31.99414,104h48a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0h-48a8,8,0,0,1-8-8V112A8,8,0,0,1,31.99414,104Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M79.99414,104l40-80a32,32,0,0,1,32,32V80h61.87549a16,16,0,0,1,15.87644,17.98456l-12,96A16,16,0,0,1,201.86963,208H79.99414" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M31.99414,104h48a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0h-48a8,8,0,0,1-8-8V112A8,8,0,0,1,31.99414,104Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M79.99414,104l40-80a32,32,0,0,1,32,32V80h61.87549a16,16,0,0,1,15.87644,17.98456l-12,96A16,16,0,0,1,201.86963,208H79.99414" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M31.99414,104h48a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0h-48a8,8,0,0,1-8-8V112A8,8,0,0,1,31.99414,104Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M79.99414,104l40-80a32,32,0,0,1,32,32V80h61.87549a16,16,0,0,1,15.87644,17.98456l-12,96A16,16,0,0,1,201.86963,208H79.99414" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const ThumbsUp = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ThumbsUp.displayName = "ThumbsUp";

export default ThumbsUp;
