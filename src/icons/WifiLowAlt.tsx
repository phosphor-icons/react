/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <path d="M48,144a64,64,0,0,1,64,64" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <circle cx="52" cy="204" r="18"/>

</>)
    case "duotone":
      return (<>
  <g opacity="0.2">
    <path d="M112,208H56a8,8,0,0,1-8-8V144a64,64,0,0,1,64,64"/>
  </g>
  <g>
    <path d="M48,200V56.32988a8.09741,8.09741,0,0,1,8.3548-8.1155A160.01519,160.01519,0,0,1,207.78562,199.6452,8.09741,8.09741,0,0,1,199.67012,208H56A8,8,0,0,1,48,200Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <path d="M48,144a64,64,0,0,1,64,64" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </g>
  <path d="M112,208H56a8,8,0,0,1-8-8V144a64,64,0,0,1,64,64" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <path d="M166.794,89.20569A167.544,167.544,0,0,0,56.76562,40.22522a15.84867,15.84867,0,0,0-11.70947,4.36719A16.26655,16.26655,0,0,0,40,56.32971V199.99963a16.01833,16.01833,0,0,0,16,16H199.66992a16.26536,16.26536,0,0,0,11.73779-5.05664,15.903,15.903,0,0,0,4.36719-11.709A167.55129,167.55129,0,0,0,166.794,89.20569Zm32.876,110.79394-80.1217.006A71.96886,71.96886,0,0,0,56,136.45215V56.32971a.218.218,0,0,1,.05908-.12012A152.016,152.016,0,0,1,199.79,199.94006.21241.21241,0,0,1,199.66992,199.99963Z"/>

</>)
    case "light":
      return (<>
  <path d="M48,144a64,64,0,0,1,64,64" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <circle cx="52" cy="204" r="9"/>

</>)
    case "thin":
      return (<>
  <path d="M48,144a64,64,0,0,1,64,64" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <circle cx="52" cy="204" r="6"/>

</>)
    case "regular":
      return (<>
  <path d="M48,144a64,64,0,0,1,64,64" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="52" cy="204" r="12"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const WifiLowAlt = forwardRef<SVGSVGElement, IconProps>(
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

WifiLowAlt.displayName = "WifiLowAlt";

export default WifiLowAlt;
