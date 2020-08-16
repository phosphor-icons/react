/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polyline points="104 79.997 152 79.997 120 175.997" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="24" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <rect x="40" y="40" width="176" height="176" rx="8" opacity="0.2"/>
  <polyline points="104 79.997 152 79.997 120 175.997" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M120,184a8.005,8.005,0,0,1-7.58594-10.53125L140.89844,88H104a8,8,0,0,1,0-16h48a7.99231,7.99231,0,0,1,7.58594,10.53125l-32,96A7.99581,7.99581,0,0,1,120,184Z" fill="none"/>
  <path d="M208,32H48A16.02085,16.02085,0,0,0,32,48V208a16.02085,16.02085,0,0,0,16,16H208a16.02085,16.02085,0,0,0,16-16V48A16.02085,16.02085,0,0,0,208,32ZM159.58594,82.53125l-32,96a7.99711,7.99711,0,1,1-15.17188-5.0625L140.89844,88H104a8,8,0,0,1,0-16h48a7.99231,7.99231,0,0,1,7.58594,10.53125Z"/>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polyline points="104 79.997 152 79.997 120 175.997" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="12" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polyline points="104 79.997 152 79.997 120 175.997" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="8" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polyline points="104 79.997 152 79.997 120 175.997" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const SevenSquare = forwardRef<SVGSVGElement, IconProps>(
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

SevenSquare.displayName = "SevenSquare";

export default SevenSquare;
