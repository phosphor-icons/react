/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polygon points="128 160 96 160 96 128 192 32 224 64 128 160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="168" y1="56" x2="200" y2="88" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M216,120v88a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h88" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polygon points="128 160 96 160 96 128 168 56 200 88 128 160" opacity="0.2"/>
  <line x1="168" y1="56" x2="200" y2="88"/>
  <polygon points="128 160 96 160 96 128 192 32 224 64 128 160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="168" y1="56" x2="200" y2="88" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M216,120v88a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h88" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M229.65723,58.34326l-32-32a8.00034,8.00034,0,0,0-11.31446,0l-96,96A8.00035,8.00035,0,0,0,88,128v32a8.00008,8.00008,0,0,0,8,8h32a8.00076,8.00076,0,0,0,5.65723-2.34326l96-96A8,8,0,0,0,229.65723,58.34326Zm-29.657,18.343L179.314,56,192,43.31372,212.68652,64Z"/>
  <path d="M217.61133,104.33008l-72.63867,72.63769a23.84434,23.84434,0,0,1-16.97071,7.03028h-32a24.02687,24.02687,0,0,1-24-24v-32a23.84117,23.84117,0,0,1,7.0293-16.96973l72.6582-72.6582a7.88176,7.88176,0,0,0-7.67187-6.37207H48.002a16.01582,16.01582,0,0,0-16,16v160a16.01583,16.01583,0,0,0,16,16h160a16.01582,16.01582,0,0,0,16-16V112.00586A7.88084,7.88084,0,0,0,217.61133,104.33008Z"/>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polygon points="128 160 96 160 96 128 192 32 224 64 128 160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="168" y1="56" x2="200" y2="88" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M216,120v88a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h88" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polygon points="128 160 96 160 96 128 192 32 224 64 128 160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="168" y1="56" x2="200" y2="88" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M216,120v88a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h88" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polygon points="128 160 96 160 96 128 192 32 224 64 128 160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="168" y1="56" x2="200" y2="88" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M216,120v88a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h88" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <g opacity="0.2">
    <rect x="255.99348" width="256" height="256" fill="none"/>
  </g>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const NotePen = forwardRef<SVGSVGElement, IconProps>(
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

NotePen.displayName = "NotePen";

export default NotePen;
