/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <path d="M176,128h48a8,8,0,0,1,8,8v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8H80" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <circle cx="188.00054" cy="168" r="16"/>
  <line x1="128" y1="128" x2="128" y2="24" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <polyline points="80 72 128 24 176 72" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <path d="M176,128h48a8,8,0,0,1,8,8v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8H80" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="188.00054" cy="168" r="12"/>
  <line x1="128" y1="128" x2="128" y2="24" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polyline points="80 72 128 24 176 72" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <rect x="24" y="128" width="208" height="80" rx="8" opacity="0.2"/>

</>)
    case "fill":
      return (<>
  <path d="M128,136a8.00024,8.00024,0,0,1-8-8V24a8,8,0,0,1,16,0V128A8.00024,8.00024,0,0,1,128,136Z"/>
  <path d="M176,80a7.97661,7.97661,0,0,1-5.65674-2.34277L128,35.31348,85.65674,77.65723A8.00018,8.00018,0,0,1,74.34326,66.34277l48-48a8.00182,8.00182,0,0,1,11.31348,0l48,48A8,8,0,0,1,176,80Z"/>
  <path d="M224,120H152v8a24,24,0,0,1-48,0v-8H32a16.01833,16.01833,0,0,0-16,16v64a16.01833,16.01833,0,0,0,16,16H224a16.01833,16.01833,0,0,0,16-16V136A16.01833,16.01833,0,0,0,224,120Zm-35.99951,60a12,12,0,1,1,12-12A12,12,0,0,1,188.00049,180Z"/>

</>)
    case "light":
      return (<>
  <path d="M176,128h48a8,8,0,0,1,8,8v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8H80" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <circle cx="188.00054" cy="168" r="9"/>
  <line x1="128" y1="128" x2="128" y2="24" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <polyline points="80 72 128 24 176 72" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <path d="M176,128h48a8,8,0,0,1,8,8v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8H80" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <circle cx="188.00054" cy="168" r="6"/>
  <line x1="128" y1="128" x2="128" y2="24" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <polyline points="80 72 128 24 176 72" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <path d="M176,128h48a8,8,0,0,1,8,8v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8H80" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="188.00054" cy="168" r="12"/>
  <line x1="128" y1="128" x2="128" y2="24" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polyline points="80 72 128 24 176 72" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Upload = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Upload.displayName = "Upload";

export default Upload;
