/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <g>
    <path d="M152.24871,122.00466a28,28,0,1,1,2.79721-21.24693A27.91233,27.91233,0,0,1,152.24871,122.00466Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
    <line x1="152.24871" y1="122.00466" x2="121.07448" y2="176.00001" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  </g>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" opacity="0.2"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="16"/>
  <g>
    <path d="M152.24871,122.00466a28,28,0,1,1,2.79721-21.24693A27.91233,27.91233,0,0,1,152.24871,122.00466Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="152.24871" y1="122.00466" x2="121.07448" y2="176.00001" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </g>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <path d="M138,90.6875a19.87769,19.87769,0,0,0-9.96875-2.69531,20.099,20.099,0,0,0-5.20312.69531,20.0058,20.0058,0,1,0,15.17187,2Z"/>
    <path d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm31.17969,102.00781L128.00781,180a8.00128,8.00128,0,1,1-13.85937-8l16.34863-28.31738c-.85547.06152-1.70508.34082-2.55957.34082a36.01849,36.01849,0,1,1,31.24219-18.01563Z"/>
  </g>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <g>
    <path d="M152.24871,122.00466a28,28,0,1,1,2.79721-21.24693A27.91233,27.91233,0,0,1,152.24871,122.00466Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
    <line x1="152.24871" y1="122.00466" x2="121.07448" y2="176.00001" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  </g>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <g>
    <path d="M152.24871,122.00466a28,28,0,1,1,2.79721-21.24693A27.91233,27.91233,0,0,1,152.24871,122.00466Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
    <line x1="152.24871" y1="122.00466" x2="121.07448" y2="176.00001" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  </g>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="16"/>
  <g>
    <path d="M152.24871,122.00466a28,28,0,1,1,2.79721-21.24693A27.91233,27.91233,0,0,1,152.24871,122.00466Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="152.24871" y1="122.00466" x2="121.07448" y2="176.00001" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </g>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const NineCircle = forwardRef<SVGSVGElement, IconProps>(
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

NineCircle.displayName = "NineCircle";

export default NineCircle;
