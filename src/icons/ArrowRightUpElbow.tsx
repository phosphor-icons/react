/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <polyline points="128 96 176 48 224 96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
    <polyline points="32 192 176 192 176 48" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  </g>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <polyline points="128 96 176 48 224 96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <polyline points="32 192 176 192 176 48" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </g>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <polyline points="128 96 176 48 224 96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <polyline points="32 192 176 192 176 48" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </g>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <polyline points="128 96 176 48 224 96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
    <polyline points="32 192 176 192 176 48" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  </g>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <polyline points="128 96 176 48 224 96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
    <polyline points="32 192 176 192 176 48" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  </g>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polyline points="128 96 176 48 224 96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polyline points="32 192 176 192 176 48" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const ArrowRightUpElbow = forwardRef<SVGSVGElement, IconProps>(
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

ArrowRightUpElbow.displayName = "ArrowRightUpElbow";

export default ArrowRightUpElbow;
