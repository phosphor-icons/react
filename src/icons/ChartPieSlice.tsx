/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <line x1="144" y1="136" x2="211.88225" y2="68.11775" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M112,112,28.86156,160l-.01368.00827A96.02522,96.02522,0,0,1,112,16Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M144,40A96,96,0,1,1,60.84788,184.00827L60.86156,184,144,136Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M112,112,28.86156,160l-.01368.00827A96.02522,96.02522,0,0,1,112,16Z" opacity="0.2"/>
  <line x1="144" y1="136" x2="211.88225" y2="68.11775" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M112,112,28.86156,160l-.01368.00827A96.02522,96.02522,0,0,1,112,16Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M144,40A96,96,0,1,1,60.84788,184.00827L60.86156,184,144,136Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <path d="M120,112V16a8.00008,8.00008,0,0,0-8-8A104.02524,104.02524,0,0,0,21.92334,164.01465a8.01231,8.01231,0,0,0,10.938,2.91357l83.13867-48A8.00009,8.00009,0,0,0,120,112Zm-16-4.6189L32.08887,148.89917A88.04353,88.04353,0,0,1,104,24.36035Z"/>
    <path d="M218.16211,63.1687a7.40465,7.40465,0,0,0-1.33069-1.33081A103.65464,103.65464,0,0,0,144,32a7.99993,7.99993,0,0,0-8,8v91.3811L56.86133,177.07178c-.05078.02929-.11524.06787-.16553.09814a8.00015,8.00015,0,0,0-2.77246,10.84473A103.98855,103.98855,0,1,0,218.16211,63.1687Z"/>
  </g>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <line x1="144" y1="136" x2="211.88225" y2="68.11775" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M112,112,28.86156,160l-.01368.00827A96.02522,96.02522,0,0,1,112,16Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M144,40A96,96,0,1,1,60.84788,184.00827L60.86156,184,144,136Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <line x1="144" y1="136" x2="211.88225" y2="68.11775" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M112,112,28.86156,160l-.01368.00827A96.02522,96.02522,0,0,1,112,16Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M144,40A96,96,0,1,1,60.84788,184.00827L60.86156,184,144,136Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <line x1="144" y1="136" x2="211.88225" y2="68.11775" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M112,112,28.86156,160l-.01368.00827A96.02522,96.02522,0,0,1,112,16Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M144,40A96,96,0,1,1,60.84788,184.00827L60.86156,184,144,136Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const ChartPieSlice = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ChartPieSlice.displayName = "ChartPieSlice";

export default ChartPieSlice;
