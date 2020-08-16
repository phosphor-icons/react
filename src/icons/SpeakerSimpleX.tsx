/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <g>
    <line x1="239.99997" y1="104" x2="191.99997" y2="152" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
    <line x1="239.99997" y1="152" x2="191.99997" y2="104" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  </g>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" opacity="0.2"/>
  <path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <g>
    <line x1="239.99997" y1="104" x2="191.99997" y2="152" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="239.99997" y1="152" x2="191.99997" y2="104" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </g>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <path d="M155.50977,24.8096a7.993,7.993,0,0,0-8.42188.875L77.24414,79.9971h-45.25a16.01583,16.01583,0,0,0-16,16v64a16.01582,16.01582,0,0,0,16,16h45.25l69.84375,54.3125a7.99451,7.99451,0,0,0,12.90625-6.3125v-192A7.99375,7.99375,0,0,0,155.50977,24.8096Z"/>
    <path d="M227.30664,127.9971l18.34375-18.34375a7.99915,7.99915,0,0,0-11.3125-11.3125L215.99414,116.6846,197.65039,98.34085a7.99915,7.99915,0,0,0-11.3125,11.3125l18.34375,18.34375-18.34375,18.34375a7.99915,7.99915,0,1,0,11.3125,11.3125l18.34375-18.34375,18.34375,18.34375a7.99915,7.99915,0,0,0,11.3125-11.3125Z"/>
  </g>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <g>
    <line x1="239.99997" y1="104" x2="191.99997" y2="152" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
    <line x1="239.99997" y1="152" x2="191.99997" y2="104" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  </g>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <g>
    <line x1="239.99997" y1="104" x2="191.99997" y2="152" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
    <line x1="239.99997" y1="152" x2="191.99997" y2="104" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  </g>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <g>
    <line x1="239.99997" y1="104" x2="191.99997" y2="152" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="239.99997" y1="152" x2="191.99997" y2="104" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </g>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const SpeakerSimpleX = forwardRef<SVGSVGElement, IconProps>(
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

SpeakerSimpleX.displayName = "SpeakerSimpleX";

export default SpeakerSimpleX;
