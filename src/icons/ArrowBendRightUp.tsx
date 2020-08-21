/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <polyline points="104 80 152 32 200 80" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M152,128V32" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M56,224a96,96,0,0,0,96-96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <polyline points="104 80 152 32 200 80" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M152,128V32" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M56,224a96,96,0,0,0,96-96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <polyline points="104 80 152 32 200 80" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M152,128V32" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M56,224a96,96,0,0,0,96-96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "light":
      return (<>
  <polyline points="104 80 152 32 200 80" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M152,128V32" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M56,224a96,96,0,0,0,96-96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <polyline points="104 80 152 32 200 80" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M152,128V32" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M56,224a96,96,0,0,0,96-96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <polyline points="104 80 152 32 200 80" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M152,128V32" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M56,224a96,96,0,0,0,96-96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const ArrowBendRightUp = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
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
  }
);

ArrowBendRightUp.displayName = "ArrowBendRightUp";

export default ArrowBendRightUp;
