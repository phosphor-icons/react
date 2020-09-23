/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <ellipse cx="128" cy="128" rx="72" ry="104" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <ellipse cx="128" cy="128" rx="72" ry="104" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M128,240c-25.75977,0-46.99219-12.57129-61.40039-36.35474C54.60547,183.848,48,156.98334,48,128c0-28.98566,6.60547-55.8512,18.59961-75.64771C81.00781,28.57043,102.24023,16,128,16s46.99219,12.57043,61.40039,36.35229C201.39453,72.1488,208,99.01434,208,128c0,28.98334-6.60547,55.848-18.59961,75.64526C174.99219,227.42871,153.75977,240,128,240Zm0-208c-44.21094,0-64,48.2157-64,96s19.78906,96,64,96,64-48.2157,64-96S172.21094,32,128,32Z"/>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <ellipse cx="128" cy="128" rx="72" ry="104" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <ellipse cx="128" cy="128" rx="72" ry="104" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <ellipse cx="128" cy="128" rx="72" ry="104" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const NumberZero = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

NumberZero.displayName = "NumberZero";

export default NumberZero;
