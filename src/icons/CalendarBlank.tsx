/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<g>
  <rect width="256" height="256" fill="none"/>
  <rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="24" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <line x1="176" y1="24" x2="176" y2="56" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="80" y1="24" x2="80" y2="56" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="40" y1="88" x2="216" y2="88" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</g>)
    case "duotone":
      return (<g>
  <g>
    <rect width="256" height="256" fill="none"/>
    <rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <line x1="176" y1="24" x2="176" y2="56" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="80" y1="24" x2="80" y2="56" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="40" y1="88" x2="216" y2="88" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <path d="M40,88H216V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8Z" opacity="0.2"/>
  </g>

</g>)
    case "fill":
      return (<g>
  <g>
    <rect width="256" height="256" fill="none"/>
    <path d="M207.99414,31.9971h-24v-8a8,8,0,1,0-16,0v8h-80v-8a8,8,0,0,0-16,0v8h-24a16.01583,16.01583,0,0,0-16,16v160a16.01582,16.01582,0,0,0,16,16h160a16.01581,16.01581,0,0,0,16-16v-160A16.01582,16.01582,0,0,0,207.99414,31.9971Zm0,48h-160v-32h24v8a8,8,0,0,0,16,0v-8h80v8a8,8,0,1,0,16,0v-8h24Z"/>
  </g>

</g>)
    case "light":
      return (<g>
  <rect width="256" height="256" fill="none"/>
  <rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="12" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <line x1="176" y1="24" x2="176" y2="56" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="80" y1="24" x2="80" y2="56" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="40" y1="88" x2="216" y2="88" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</g>)
    case "thin":
      return (<g>
  <rect width="256" height="256" fill="none"/>
  <rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="8" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <line x1="176" y1="24" x2="176" y2="56" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="80" y1="24" x2="80" y2="56" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="40" y1="88" x2="216" y2="88" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</g>)
    case "regular":
      return (<g>
  <g>
    <rect width="256" height="256" fill="none"/>
    <rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <line x1="176" y1="24" x2="176" y2="56" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="80" y1="24" x2="80" y2="56" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="40" y1="88" x2="216" y2="88" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </g>

</g>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const CalendarBlank = forwardRef<SVGSVGElement, IconProps>(
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
        viewBox="0 0 256 256"
        fill="none"
        stroke="none"
        transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined}
        {...contextRest}
        {...rest}
      >
        {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
      </svg>
    );
  }
);

CalendarBlank.displayName = "CalendarBlank";

export default CalendarBlank;
