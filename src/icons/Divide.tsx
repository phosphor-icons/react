/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <g opacity="0.2">
    <rect width="256" height="256" fill="none"/>
  </g>
  <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <circle cx="128" cy="56" r="24"/>
  <circle cx="128" cy="200" r="24"/>

</>)
    case "duotone":
      return (<>
  <g opacity="0.2">
    <rect width="256" height="256" fill="none"/>
  </g>
  <line x1="40" y1="128" x2="216" y2="128" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="128" cy="64" r="18"/>
  <circle cx="128" cy="192" r="18"/>

</>)
    case "fill":
      return (<>
  <g opacity="0.2">
    <rect width="256" height="256" fill="none"/>
  </g>
  <g>
    <path d="M216,120H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"/>
    <circle cx="128" cy="64" r="18"/>
    <circle cx="128" cy="192" r="18"/>
  </g>

</>)
    case "light":
      return (<>
  <g opacity="0.2">
    <rect width="256" height="256" fill="none"/>
  </g>
  <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <circle cx="128" cy="68" r="16"/>
  <circle cx="128" cy="188" r="16"/>

</>)
    case "thin":
      return (<>
  <g opacity="0.2">
    <rect width="256" height="256" fill="none"/>
  </g>
  <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <circle cx="128" cy="72" r="12"/>
  <circle cx="128" cy="184" r="12"/>

</>)
    case "regular":
      return (<>
  <g opacity="0.2">
    <rect width="256" height="256" fill="none"/>
  </g>
  <line x1="40" y1="128" x2="216" y2="128" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="128" cy="64" r="18"/>
  <circle cx="128" cy="192" r="18"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Divide = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Divide.displayName = "Divide";

export default Divide;
