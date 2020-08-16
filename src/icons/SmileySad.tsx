/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <circle cx="92" cy="108" r="16"/>
  <circle cx="164" cy="108" r="16"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M169.57833,175.99927a48.0273,48.0273,0,0,0-83.15623-.00074" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <circle cx="128" cy="128" r="96" opacity="0.2"/>
  <circle cx="92" cy="108" r="12"/>
  <circle cx="164" cy="108" r="12"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="16"/>
  <path d="M169.57833,175.99927a48.0273,48.0273,0,0,0-83.15623-.00074" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm36,72a12,12,0,1,1-12,12A12.0006,12.0006,0,0,1,164,96ZM92,96a12,12,0,1,1-12,12A12.0006,12.0006,0,0,1,92,96Zm81.58594,86.92188a7.9139,7.9139,0,0,1-4,1.07812,7.99834,7.99834,0,0,1-6.92969-3.99219,40.42846,40.42846,0,0,0-6.375-8.29687,39.8432,39.8432,0,0,0-12.71094-8.57031,40.30551,40.30551,0,0,0-31.14062,0,40.11288,40.11288,0,0,0-19.07813,16.86718A8.00181,8.00181,0,0,1,79.5,171.99219a56.02208,56.02208,0,0,1,97,0A7.98921,7.98921,0,0,1,173.58594,182.92188Z"/>

</>)
    case "light":
      return (<>
  <circle cx="92" cy="108" r="9"/>
  <circle cx="164" cy="108" r="9"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M169.57833,175.99927a48.0273,48.0273,0,0,0-83.15623-.00074" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <circle cx="92" cy="108" r="6"/>
  <circle cx="164" cy="108" r="6"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M169.57833,175.99927a48.0273,48.0273,0,0,0-83.15623-.00074" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <circle cx="92" cy="108" r="12"/>
  <circle cx="164" cy="108" r="12"/>
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="16"/>
  <path d="M169.57833,175.99927a48.0273,48.0273,0,0,0-83.15623-.00074" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const SmileySad = forwardRef<SVGSVGElement, IconProps>(
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

SmileySad.displayName = "SmileySad";

export default SmileySad;
