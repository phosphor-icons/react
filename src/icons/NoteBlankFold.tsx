/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M156.68629,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.68629a8,8,0,0,1-2.34315,5.65686l-51.3137,51.3137A8,8,0,0,1,156.68629,216Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <polyline points="215.284 159.992 160 159.992 160 215.275" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polygon points="216 159.992 160 159.992 160 216 216 159.992" opacity="0.2"/>
  <path d="M156.68629,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.68629a8,8,0,0,1-2.34315,5.65686l-51.3137,51.3137A8,8,0,0,1,156.68629,216Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polyline points="215.279 159.992 160 159.992 160 215.275" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M208,32H48A16.01833,16.01833,0,0,0,32,48V208a16.01833,16.01833,0,0,0,16,16H156.68652A15.89354,15.89354,0,0,0,168,219.31348L219.31348,168A15.89557,15.89557,0,0,0,224,156.68652V48A16.01833,16.01833,0,0,0,208,32ZM160,204.68652V159.99219h44.69458Z"/>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M156.68629,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.68629a8,8,0,0,1-2.34315,5.65686l-51.3137,51.3137A8,8,0,0,1,156.68629,216Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <polyline points="215.279 159.992 160 159.992 160 215.278" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M156.68629,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.68629a8,8,0,0,1-2.34315,5.65686l-51.3137,51.3137A8,8,0,0,1,156.68629,216Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <polyline points="215.279 159.992 160 159.992 160 215.272" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M156.68629,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.68629a8,8,0,0,1-2.34315,5.65686l-51.3137,51.3137A8,8,0,0,1,156.68629,216Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polyline points="215.281 159.992 160 159.992 160 215.272" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const NoteBlankFold = forwardRef<SVGSVGElement, IconProps>(
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

NoteBlankFold.displayName = "NoteBlankFold";

export default NoteBlankFold;
