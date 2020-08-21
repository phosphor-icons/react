/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <polyline points="176.167 99.716 224.167 99.716 224.167 51.716" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M65.7746,65.7746a88,88,0,0,1,124.4508,0l33.94112,33.94113" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <polyline points="79.833 156.284 31.833 156.284 31.833 204.284" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M190.2254,190.2254a88,88,0,0,1-124.4508,0L31.83348,156.28427" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <polyline points="176.167 99.716 224.167 99.716 224.167 51.716" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M65.7746,65.7746a88,88,0,0,1,124.4508,0l33.94112,33.94113" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polyline points="79.833 156.284 31.833 156.284 31.833 204.284" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M190.2254,190.2254a88,88,0,0,1-124.4508,0L31.83348,156.28427" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <polyline points="176.167 99.716 224.167 99.716 224.167 51.716" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M65.7746,65.7746a88,88,0,0,1,124.4508,0l33.94112,33.94113" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polyline points="79.833 156.284 31.833 156.284 31.833 204.284" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M190.2254,190.2254a88,88,0,0,1-124.4508,0L31.83348,156.28427" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "light":
      return (<>
  <polyline points="176.167 99.716 224.167 99.716 224.167 51.716" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M65.7746,65.7746a88,88,0,0,1,124.4508,0l33.94112,33.94113" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <polyline points="79.833 156.284 31.833 156.284 31.833 204.284" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M190.2254,190.2254a88,88,0,0,1-124.4508,0L31.83348,156.28427" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <polyline points="176.167 99.716 224.167 99.716 224.167 51.716" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M65.7746,65.7746a88,88,0,0,1,124.4508,0l33.94112,33.94113" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <polyline points="79.833 156.284 31.833 156.284 31.833 204.284" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M190.2254,190.2254a88,88,0,0,1-124.4508,0L31.83348,156.28427" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <polyline points="176.167 99.716 224.167 99.716 224.167 51.716" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M65.7746,65.7746a88,88,0,0,1,124.4508,0l33.94112,33.94113" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polyline points="79.833 156.284 31.833 156.284 31.833 204.284" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M190.2254,190.2254a88,88,0,0,1-124.4508,0L31.83348,156.28427" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const ArrowsClockwise = forwardRef<SVGSVGElement, IconProps>(
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

ArrowsClockwise.displayName = "ArrowsClockwise";

export default ArrowsClockwise;
