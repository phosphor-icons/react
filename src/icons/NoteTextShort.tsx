/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <line x1="96" y1="112" x2="160" y2="112" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="96" y1="144" x2="160" y2="144" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="24" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <rect x="40" y="40" width="176" height="176" rx="8" opacity="0.2"/>
  <rect x="40" y="40" width="176" height="176" rx="8" fill="none" opacity="0.2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" stroke={color}/>
  <line x1="96" y1="112" x2="160" y2="112" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="96" y1="144" x2="160" y2="144" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M208.00391,32h-160a16.01081,16.01081,0,0,0-16,16V208a16.01081,16.01081,0,0,0,16,16h160a16.01081,16.01081,0,0,0,16-16V48A16.01081,16.01081,0,0,0,208.00391,32Zm-48,120h-64a8,8,0,0,1,0-16h64a8,8,0,1,1,0,16Zm0-32h-64a8,8,0,0,1,0-16h64a8,8,0,1,1,0,16Z"/>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <line x1="96" y1="112" x2="160" y2="112" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="96" y1="144" x2="160" y2="144" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="12" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <line x1="96" y1="112" x2="160" y2="112" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="96" y1="144" x2="160" y2="144" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="8" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <line x1="96" y1="112" x2="160" y2="112" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="96" y1="144" x2="160" y2="144" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const NoteTextShort = forwardRef<SVGSVGElement, IconProps>(
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

NoteTextShort.displayName = "NoteTextShort";

export default NoteTextShort;
