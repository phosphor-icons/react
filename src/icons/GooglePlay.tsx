/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M39.8134,224.14386a8.01831,8.01831,0,0,0,12.06378,6.771L219.71391,134.8442a7.763,7.763,0,0,0,0-13.6884L51.87718,25.08518a8.01831,8.01831,0,0,0-12.06378,6.771Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="42.23444" y1="26.23444" x2="175.91527" y2="159.91527" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="42.23498" y1="229.76502" x2="175.91497" y2="96.08503" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M39.8134,224.14386a8.01831,8.01831,0,0,0,12.06378,6.771L219.71391,134.8442a7.763,7.763,0,0,0,0-13.6884L51.87718,25.08518a8.01831,8.01831,0,0,0-12.06378,6.771Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="42.23444" y1="26.23444" x2="175.91527" y2="159.91527" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="42.23498" y1="229.76502" x2="175.91497" y2="96.08503" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <g opacity="0.2">
    <path d="M42.23345,26.2334a7.65514,7.65514,0,0,0-2.42,5.62274V224.14386a7.65467,7.65467,0,0,0,2.40789,5.61122l.01369.00994L144,128,42.23444,26.23444Z"/>
  </g>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M39.8134,224.14386a8.01831,8.01831,0,0,0,12.06378,6.771L219.71391,134.8442a7.763,7.763,0,0,0,0-13.6884L51.87718,25.08518a8.01831,8.01831,0,0,0-12.06378,6.771Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="42.23444" y1="26.23444" x2="175.91527" y2="159.91527" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="42.23498" y1="229.76502" x2="175.91497" y2="96.08503" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M42.23345,26.2334a7.65514,7.65514,0,0,0-2.42,5.62274V224.14386a7.65467,7.65467,0,0,0,2.40789,5.61122l.01369.00994L144,128,42.23444,26.23444Z"/>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M39.8134,224.14386a8.01831,8.01831,0,0,0,12.06378,6.771L219.71391,134.8442a7.763,7.763,0,0,0,0-13.6884L51.87718,25.08518a8.01831,8.01831,0,0,0-12.06378,6.771Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="42.23444" y1="26.23444" x2="175.91527" y2="159.91527" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="42.23498" y1="229.76502" x2="175.91497" y2="96.08503" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M39.8134,224.14386a8.01831,8.01831,0,0,0,12.06378,6.771L219.71391,134.8442a7.763,7.763,0,0,0,0-13.6884L51.87718,25.08518a8.01831,8.01831,0,0,0-12.06378,6.771Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="42.23444" y1="26.23444" x2="175.91527" y2="159.91527" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="42.23498" y1="229.76502" x2="175.91497" y2="96.08503" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M39.8134,224.14386a8.01831,8.01831,0,0,0,12.06378,6.771L219.71391,134.8442a7.763,7.763,0,0,0,0-13.6884L51.87718,25.08518a8.01831,8.01831,0,0,0-12.06378,6.771Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="42.23444" y1="26.23444" x2="175.91527" y2="159.91527" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="42.23498" y1="229.76502" x2="175.91497" y2="96.08503" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const GooglePlay = forwardRef<SVGSVGElement, IconProps>(
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

GooglePlay.displayName = "GooglePlay";

export default GooglePlay;
