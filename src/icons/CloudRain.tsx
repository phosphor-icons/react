/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M136,208H72A56,56,0,1,1,85.91924,97.74352" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M80,128a80,80,0,1,1,128.00118,64.005" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="160" y1="136" x2="144" y2="176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="184" y1="168" x2="168" y2="208" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M136,208H72A56,56,0,1,1,85.91924,97.74352" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M80,128a80,80,0,1,1,128.00118,64.005" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M80.00586,128a80,80,0,1,1,80,80h-88A56,56,0,1,1,85.9251,97.74352" opacity="0.2"/>
  <path d="M136,208H72A56,56,0,1,1,85.91924,97.74352" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M80,128a80,80,0,1,1,128.00118,64.005" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="160" y1="136" x2="144" y2="176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="184" y1="168" x2="168" y2="208" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <rect x="-0.00488" width="256" height="256" fill="none"/>
  <path d="M160,40A88.102,88.102,0,0,0,81.28711,88.6709l-.00537-.00049A87.46324,87.46324,0,0,0,71.98828,128a8,8,0,0,1-16,0,103.43674,103.43674,0,0,1,7.78-39.45264A63.99161,63.99161,0,0,0,72,216h88a88,88,0,0,0,0-176ZM143.99268,168.002a8.00449,8.00449,0,0,1-7.4253-10.97314l16-40a8,8,0,0,1,14.85547,5.94238l-16,40A8.00314,8.00314,0,0,1,143.99268,168.002Zm47.43017-13.03076-16,40a8,8,0,0,1-14.85547-5.94238l16-40a8,8,0,0,1,14.85547,5.94238Z"/>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M136,208H72A56,56,0,1,1,85.91924,97.74352" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M80,128a80,80,0,1,1,128.00118,64.005" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="160" y1="136" x2="144" y2="176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="184" y1="168" x2="168" y2="208" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M136,208H72A56,56,0,1,1,85.91924,97.74352" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M80,128a80,80,0,1,1,128.00118,64.005" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="160" y1="136" x2="144" y2="176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="184" y1="168" x2="168" y2="208" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M136,208H72A56,56,0,1,1,85.91924,97.74352" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M80,128a80,80,0,1,1,128.00118,64.005" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="160" y1="136" x2="144" y2="176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="184" y1="168" x2="168" y2="208" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const CloudRain = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

CloudRain.displayName = "CloudRain";

export default CloudRain;
