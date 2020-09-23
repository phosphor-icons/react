/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polyline points="224 96 128 32 32 96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M224,96V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="110.54541" y1="152.00008" x2="34.4668" y2="205.73921" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="221.53418" y1="205.73921" x2="145.45424" y2="151.99959" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <polyline points="224 96 145.455 152 110.545 152 32 96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polygon points="224 96 145.455 152 110.545 152 32 96 128 32 224 96" opacity="0.2"/>
  <polyline points="224 96 128 32 32 96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M224,96V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="110.54541" y1="152.00008" x2="34.4668" y2="205.73921" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="221.53418" y1="205.73921" x2="145.45424" y2="151.99959" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polyline points="224 96 145.455 152 110.545 152 32 96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M232,100.12134l-3.35547,2.39233-69.36719,49.45606,66.87207,47.23535.01221.00952.01709.011,5.50635,3.92578A16.00083,16.00083,0,0,0,232,200Z"/>
  <path d="M36.64453,89.48633,113.10547,144h29.78906l76.46094-54.51367,4.49219-3.20264L132.4375,25.34375a8.00131,8.00131,0,0,0-8.875,0L32.15234,86.28369Z"/>
  <path d="M27.35547,102.51367,24,100.12134V200a16.00213,16.00213,0,0,0,.31494,3.15186l5.50733-3.92627.01709-.011.0122-.00952,66.8711-47.23535Z"/>
  <path d="M216.88965,212.25293l-.00195-.00171L142.91406,160H113.08594L39.11328,212.25122l-.002.00171L34.99561,215.187A15.913,15.913,0,0,0,40,216H216a15.91377,15.91377,0,0,0,5.00488-.813Z"/>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polyline points="224 96 128 32 32 96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M224,96V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="110.54541" y1="152.00008" x2="34.4668" y2="205.73921" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="221.53418" y1="205.73921" x2="145.45424" y2="151.99959" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <polyline points="224 96 145.455 152 110.545 152 32 96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polyline points="224 96 128 32 32 96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M224,96V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="110.54541" y1="152.00008" x2="34.4668" y2="205.73921" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="221.53418" y1="205.73921" x2="145.45424" y2="151.99959" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <polyline points="224 96 145.455 152 110.545 152 32 96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polyline points="224 96 128 32 32 96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M224,96V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="110.54541" y1="152.00008" x2="34.4668" y2="205.73921" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="221.53418" y1="205.73921" x2="145.45424" y2="151.99959" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polyline points="224 96 145.455 152 110.545 152 32 96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const EnvelopeOpen = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

EnvelopeOpen.displayName = "EnvelopeOpen";

export default EnvelopeOpen;
