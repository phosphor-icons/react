/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<g>
  <rect width="256" height="256" fill="none"/>
  <g>
    <path d="M48,224a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
    <polyline points="48 224 48 232 192 232" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  </g>

</g>)
    case "duotone":
      return (<g>
  <rect width="256" height="256" fill="none"/>
  <g opacity="0.2">
    <path d="M48,224a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z"/>
  </g>
  <g>
    <path d="M48,224a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <polyline points="48 224 48 232 192 232" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </g>

</g>)
    case "fill":
      return (<g>
  <rect width="256" height="256" fill="none"/>
  <path d="M207.99414,23.9971h-136a32.03667,32.03667,0,0,0-32,32v176a7.9954,7.9954,0,0,0,8,8h144a8,8,0,0,0,0-16h-136a16.01583,16.01583,0,0,1,16-16h136a7.99539,7.99539,0,0,0,8-8v-168A7.9954,7.9954,0,0,0,207.99414,23.9971Z"/>

</g>)
    case "light":
      return (<g>
  <rect width="256" height="256" fill="none"/>
  <g>
    <path d="M48,224a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
    <polyline points="48 224 48 232 192 232" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  </g>

</g>)
    case "thin":
      return (<g>
  <rect width="256" height="256" fill="none"/>
  <g>
    <path d="M48,224a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
    <polyline points="48 224 48 232 192 232" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  </g>

</g>)
    case "regular":
      return (<g>
  <rect width="256" height="256" fill="none"/>
  <g>
    <path d="M48,224a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <polyline points="48 224 48 232 192 232" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </g>

</g>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Book = forwardRef<SVGSVGElement, IconProps>(
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

Book.displayName = "Book";

export default Book;
