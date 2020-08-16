/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <g>
    <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
    <path d="M166.65625,118.01562l-48-32A12.00384,12.00384,0,0,0,100,96v64a11.99961,11.99961,0,0,0,18.65625,9.98437l48-32a11.99938,11.99938,0,0,0,0-19.96875Z"/>
  </g>

</>)
    case "duotone":
      return (<>
  <circle cx="128" cy="128" r="96" opacity="0.2"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="16"/>
  <polygon points="160 128 112 96 112 160 160 128" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <g>
    <rect width="256" height="256" fill="none"/>
    <rect width="256" height="256" fill="none"/>
    <path d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm36.4375,110.65625-48,32A7.99612,7.99612,0,0,1,104,160V96a7.99612,7.99612,0,0,1,12.4375-6.65625l48,32a7.99959,7.99959,0,0,1,0,13.3125Z"/>
  </g>

</>)
    case "light":
      return (<>
  <g>
    <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
    <path d="M163.32812,123.00781l-48-32A6.00193,6.00193,0,0,0,106,96v64a5.99981,5.99981,0,0,0,9.32812,4.99219l48-32a5.99969,5.99969,0,0,0,0-9.98438Z"/>
  </g>

</>)
    case "thin":
      return (<>
  <g>
    <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
    <path d="M162.21875,124.67187l-48-32A4.00114,4.00114,0,0,0,108,96v64a3.99987,3.99987,0,0,0,6.21875,3.32812l48-32a3.99979,3.99979,0,0,0,0-6.65625Z"/>
  </g>

</>)
    case "regular":
      return (<>
  <g>
    <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="16"/>
    <polygon points="160 128 112 96 112 160 160 128" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </g>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const PlayCircle = forwardRef<SVGSVGElement, IconProps>(
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

PlayCircle.displayName = "PlayCircle";

export default PlayCircle;
