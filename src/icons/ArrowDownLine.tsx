/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <line x1="128" y1="23.99627" x2="128" y2="183.99627" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
    <polyline points="56 111.996 128 183.996 200 111.996" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  </g>
  <line x1="48" y1="215.99627" x2="208" y2="215.99627" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <line x1="128" y1="23.99627" x2="128" y2="183.99627" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <polyline points="56 111.996 128 183.996 200 111.996" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </g>
  <line x1="48" y1="215.99627" x2="208" y2="215.99627" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M208,200H152.28125l61.85938-61.85938a19.99786,19.99786,0,0,0-28.28125-28.28125L148,147.71875V36a20,20,0,0,0-40,0V147.71875L70.14063,109.85937a19.99786,19.99786,0,0,0-28.28125,28.28125L103.71875,200H48a20,20,0,0,0,0,40H208a20,20,0,0,0,0-40Z"/>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <line x1="128" y1="23.99627" x2="128" y2="183.99627" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
    <polyline points="56 111.996 128 183.996 200 111.996" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  </g>
  <line x1="48" y1="215.99627" x2="208" y2="215.99627" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <line x1="128" y1="23.99627" x2="128" y2="183.99627" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
    <polyline points="56 111.996 128 183.996 200 111.996" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  </g>
  <line x1="48" y1="215.99627" x2="208" y2="215.99627" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <g>
    <rect width="256" height="256" fill="none"/>
    <g>
      <line x1="128" y1="23.99627" x2="128" y2="183.99627" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      <polyline points="56 111.996 128 183.996 200 111.996" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    </g>
    <line x1="48" y1="215.99627" x2="208" y2="215.99627" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </g>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const ArrowDownLine = forwardRef<SVGSVGElement, IconProps>(
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

ArrowDownLine.displayName = "ArrowDownLine";

export default ArrowDownLine;
