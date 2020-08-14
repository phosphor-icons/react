/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<g>
  <rect width="256" height="256" fill="none"/>
  <line x1="40" y1="216" x2="40" y2="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <rect x="40" y="56" width="128" height="48" strokeWidth="24" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <rect x="40" y="104" width="176" height="48" strokeWidth="24" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <rect x="40" y="152" width="96" height="48" strokeWidth="24" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>

</g>)
    case "duotone":
      return (<g>
  <g>
    <rect width="256" height="256" fill="none"/>
    <rect x="40" y="56" width="128" height="48" opacity="0.2"/>
    <rect x="40" y="104" width="176" height="48" opacity="0.2"/>
    <rect x="40" y="152" width="96" height="48" opacity="0.2"/>
    <line x1="40" y1="216" x2="40" y2="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <rect x="40" y="56" width="128" height="48" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <rect x="40" y="104" width="176" height="48" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <rect x="40" y="152" width="96" height="48" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </g>

</g>)
    case "fill":
      return (<g>
  <rect width="256" height="256" fill="none"/>
  <path d="M216,104H48V96H168a7.99977,7.99977,0,0,0,8-8V56a7.99977,7.99977,0,0,0-8-8H48V40a8,8,0,0,0-16,0V216a8,8,0,0,0,16,0v-8h88a7.99977,7.99977,0,0,0,8-8V168a7.99977,7.99977,0,0,0-8-8H48v-8H216a7.99977,7.99977,0,0,0,8-8V112A7.99977,7.99977,0,0,0,216,104Z"/>

</g>)
    case "light":
      return (<g>
  <rect width="256" height="256" fill="none"/>
  <line x1="40" y1="216" x2="40" y2="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <rect x="40" y="56" width="128" height="48" strokeWidth="12" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <rect x="40" y="104" width="176" height="48" strokeWidth="12" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <rect x="40" y="152" width="96" height="48" strokeWidth="12" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>

</g>)
    case "thin":
      return (<g>
  <rect width="256" height="256" fill="none"/>
  <line x1="40" y1="216" x2="40" y2="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <rect x="40" y="56" width="128" height="48" strokeWidth="8" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <rect x="40" y="104" width="176" height="48" strokeWidth="8" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <rect x="40" y="152" width="96" height="48" strokeWidth="8" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>

</g>)
    case "regular":
      return (<g>
  <rect width="256" height="256" fill="none"/>
  <line x1="40" y1="216" x2="40" y2="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <rect x="40" y="56" width="128" height="48" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <rect x="40" y="104" width="176" height="48" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <rect x="40" y="152" width="96" height="48" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>

</g>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const ChartBarHorizontal = forwardRef<SVGSVGElement, IconProps>(
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
        viewBox="0 0 256 256"
        fill="none"
        stroke="none"
        transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined}
        {...contextRest}
        {...rest}
      >
        {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
      </svg>
    );
  }
);

ChartBarHorizontal.displayName = "ChartBarHorizontal";

export default ChartBarHorizontal;
