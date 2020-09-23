/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="95.99353" r="72" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M201.53911,169.53264A104,104,0,0,1,54.46089,22.45443" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="96" y1="231.99353" x2="160" y2="231.99353" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="128" y1="199.99353" x2="128" y2="231.99353" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="95.99353" r="72" opacity="0.2"/>
  <circle cx="128" cy="95.99353" r="72" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M201.53911,169.53264A104,104,0,0,1,54.46089,22.45443" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="96" y1="231.99353" x2="160" y2="231.99353" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="128" y1="199.99353" x2="128" y2="231.99353" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="95.99316" r="80"/>
  <path d="M207.19629,175.18945A8.00052,8.00052,0,0,0,195.88184,163.875,95.99942,95.99942,0,1,1,60.11816,28.11133,8.00052,8.00052,0,0,0,48.80371,16.79688,112.00314,112.00314,0,0,0,120,207.71v16.2832H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V207.71A111.16718,111.16718,0,0,0,207.19629,175.18945Z"/>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="95.99353" r="72" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M201.53911,169.53264A104,104,0,0,1,54.46089,22.45443" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="96" y1="231.99353" x2="160" y2="231.99353" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="128" y1="199.99353" x2="128" y2="231.99353" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="95.99353" r="72" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M201.53911,169.53264A104,104,0,0,1,54.46089,22.45443" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="96" y1="231.99353" x2="160" y2="231.99353" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="128" y1="199.99353" x2="128" y2="231.99353" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="95.99353" r="72" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M201.53911,169.53264A104,104,0,0,1,54.46089,22.45443" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="96" y1="231.99353" x2="160" y2="231.99353" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="128" y1="199.99353" x2="128" y2="231.99353" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const GlobeStand = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

GlobeStand.displayName = "GlobeStand";

export default GlobeStand;
