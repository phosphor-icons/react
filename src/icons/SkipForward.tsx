/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <polygon points="148 128 100 96 100 160 148 128" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="156" y1="96" x2="156" y2="160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" opacity="0.2"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="16"/>
  <polygon points="148 128 100 96 100 160 148 128" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="156" y1="96" x2="156" y2="160" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm36,136a8,8,0,0,1-16,0V137.61426l-43.5625,29.042A7.99612,7.99612,0,0,1,92,160V96a7.99612,7.99612,0,0,1,12.4375-6.65625L148,118.38574V96a8,8,0,0,1,16,0Z"/>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <polygon points="148 128 100 96 100 160 148 128" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="156" y1="96" x2="156" y2="160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <polygon points="148 128 100 96 100 160 148 128" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="156" y1="96" x2="156" y2="160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="16"/>
  <polygon points="148 128 100 96 100 160 148 128" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="156" y1="96" x2="156" y2="160" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <g opacity="0.2">
    <rect x="255.99934" width="256" height="256" fill="none"/>
    <rect x="255.99934" width="256" height="256" fill="none"/>
  </g>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const SkipForward = forwardRef<SVGSVGElement, IconProps>(
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

SkipForward.displayName = "SkipForward";

export default SkipForward;
