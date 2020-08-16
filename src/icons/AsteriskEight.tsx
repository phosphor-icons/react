/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
    <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  </g>
  <g>
    <line x1="65.7746" y1="65.7746" x2="190.2254" y2="190.2254" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
    <line x1="190.2254" y1="65.7746" x2="65.7746" y2="190.2254" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  </g>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </g>
  <g>
    <line x1="65.7746" y1="65.7746" x2="190.2254" y2="190.2254" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="190.2254" y1="65.7746" x2="65.7746" y2="190.2254" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </g>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </g>
  <g>
    <line x1="65.7746" y1="65.7746" x2="190.2254" y2="190.2254" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="190.2254" y1="65.7746" x2="65.7746" y2="190.2254" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </g>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
    <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  </g>
  <g>
    <line x1="65.7746" y1="65.7746" x2="190.2254" y2="190.2254" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
    <line x1="190.2254" y1="65.7746" x2="65.7746" y2="190.2254" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  </g>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
    <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  </g>
  <g>
    <line x1="65.7746" y1="65.7746" x2="190.2254" y2="190.2254" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
    <line x1="190.2254" y1="65.7746" x2="65.7746" y2="190.2254" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  </g>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </g>
  <g>
    <line x1="65.7746" y1="65.7746" x2="190.2254" y2="190.2254" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="190.2254" y1="65.7746" x2="65.7746" y2="190.2254" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </g>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const AsteriskEight = forwardRef<SVGSVGElement, IconProps>(
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

AsteriskEight.displayName = "AsteriskEight";

export default AsteriskEight;
