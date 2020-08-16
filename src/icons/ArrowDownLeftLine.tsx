/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <rect width="256" height="256" fill="none"/>
  <line x1="176" y1="88" x2="64" y2="200" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <polyline points="64 104 64 200 160 200" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="208" y1="40" x2="48" y2="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <rect width="256" height="256" fill="none"/>
  <line x1="176" y1="88" x2="64" y2="200" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polyline points="64 104 64 200 160 200" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="208" y1="40" x2="48" y2="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <rect width="256" height="256" fill="none"/>
  <path d="M176,72a19.93518,19.93518,0,0,0-14.14062,5.85938L84,155.71875V108a20,20,0,0,0-40,0v96a20.0758,20.0758,0,0,0,20,20h96a20,20,0,0,0,0-40H112.28125l77.85938-77.85937A20,20,0,0,0,176,72Z"/>
  <path d="M48,56H208a20,20,0,0,0,0-40H48a20,20,0,0,0,0,40Z"/>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <rect width="256" height="256" fill="none"/>
  <line x1="176" y1="88" x2="64" y2="200" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <polyline points="64 104 64 200 160 200" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="208" y1="40" x2="48" y2="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <rect width="256" height="256" fill="none"/>
  <line x1="176" y1="88" x2="64" y2="200" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <polyline points="64 104 64 200 160 200" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="208" y1="40" x2="48" y2="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <rect width="256" height="256" fill="none"/>
  <line x1="176" y1="88" x2="64" y2="200" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polyline points="64 104 64 200 160 200" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="208" y1="40" x2="48" y2="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const ArrowDownLeftLine = forwardRef<SVGSVGElement, IconProps>(
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

ArrowDownLeftLine.displayName = "ArrowDownLeftLine";

export default ArrowDownLeftLine;
