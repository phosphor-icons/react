/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <line x1="96" y1="16" x2="160" y2="16" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <rect x="56" y="48" width="144" height="184" rx="16" strokeWidth="24" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <polyline points="128 180 144 140 112 140 128 100" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <rect x="56" y="48" width="144" height="184" rx="16" opacity="0.2"/>
  <line x1="96" y1="16" x2="160" y2="16" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <rect x="56" y="48" width="144" height="184" rx="16" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <polyline points="128 180 144 140 112 140 128 100" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M160,24H96A8,8,0,0,1,96,8h64a8,8,0,0,1,0,16Z"/>
  <path d="M184,40.00781H72a24.02625,24.02625,0,0,0-24,24v152a24.02624,24.02624,0,0,0,24,24H184a24.02624,24.02624,0,0,0,24-24v-152A24.02624,24.02624,0,0,0,184,40.00781ZM151.42969,142.97656l-16,40a8.00086,8.00086,0,0,1-14.85938-5.9375l11.61719-29.03125L112,147.99219a8.001,8.001,0,0,1-7.42969-10.96875l16-39.98438a8.00086,8.00086,0,0,1,14.85938,5.9375L123.8125,131.99219,144,132.00781a8.001,8.001,0,0,1,7.42969,10.96875Z"/>

</>)
    case "light":
      return (<>
  <line x1="96" y1="16" x2="160" y2="16" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <rect x="56" y="48" width="144" height="184" rx="16" strokeWidth="12" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <polyline points="128 180 144 140 112 140 128 100" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <line x1="96" y1="16" x2="160" y2="16" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <rect x="56" y="48" width="144" height="184" rx="16" strokeWidth="8" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <polyline points="128 180 144 140 112 140 128 100" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <line x1="96" y1="16" x2="160" y2="16" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <rect x="56" y="48" width="144" height="184" rx="16" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <polyline points="128 180 144 140 112 140 128 100" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const BatteryChargingVertical = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

BatteryChargingVertical.displayName = "BatteryChargingVertical";

export default BatteryChargingVertical;
