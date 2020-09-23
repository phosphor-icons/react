/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <path d="M40,106.66667V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.306,218.51683,40,190.682,40,106.66667Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="128" y1="80" x2="128" y2="136" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <circle cx="128" cy="172" r="16"/>

</>)
    case "duotone":
      return (<>
  <path d="M40,106.66667V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.306,218.51683,40,190.682,40,106.66667Z" opacity="0.2"/>
  <path d="M40,106.66667V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.306,218.51683,40,190.682,40,106.66667Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="128" y1="80" x2="128" y2="136" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="128" cy="172" r="12"/>

</>)
    case "fill":
      return (<>
  <path d="M207.99951,32h-160a16.01833,16.01833,0,0,0-16,16v58.667c0,89.45117,75.82617,119.124,91.02637,124.16406a15.49078,15.49078,0,0,0,9.94824,0c15.2002-5.04,91.02539-34.71289,91.02539-124.16406V48A16.01833,16.01833,0,0,0,207.99951,32Zm-87.999,48a8,8,0,1,1,16,0v56a8,8,0,1,1-16,0ZM128,184a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z"/>

</>)
    case "light":
      return (<>
  <path d="M40,106.66667V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.306,218.51683,40,190.682,40,106.66667Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="128" y1="80" x2="128" y2="136" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <circle cx="128" cy="172" r="9"/>

</>)
    case "thin":
      return (<>
  <path d="M40,106.66667V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.306,218.51683,40,190.682,40,106.66667Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="128" y1="80" x2="128" y2="136" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <circle cx="128" cy="172" r="6"/>

</>)
    case "regular":
      return (<>
  <path d="M40,106.66667V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.306,218.51683,40,190.682,40,106.66667Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="128" y1="80" x2="128" y2="136" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="128" cy="172" r="12"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const ShieldWarning = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ShieldWarning.displayName = "ShieldWarning";

export default ShieldWarning;
