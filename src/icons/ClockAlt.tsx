/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<g>
  <g>
    
    
    <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
    <line x1="128" y1="128" x2="184" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
    <line x1="167.59798" y1="167.59798" x2="128" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  </g>

</g>)
    case "duotone":
      return (<g>
  <g>
    
    
    <g opacity="0.2">
      <circle cx="128" cy="128" r="96"/>
    </g>
    <circle cx="128" cy="128" r="96" fill="none" stroke={color} stroke-miterlimit="10" strokeWidth="16"/>
    <line x1="128" y1="128" x2="184" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="167.59798" y1="167.59798" x2="128" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </g>

</g>)
    case "fill":
      return (<g>
  <g>
    
    
    <circle cx="128" cy="128" r="96" stroke={color} stroke-miterlimit="10" strokeWidth="16"/>
    <line x1="128" y1="128" x2="184" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="167.59798" y1="167.59798" x2="128" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </g>

</g>)
    case "light":
      return (<g>
  
  
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="128" y1="128" x2="184" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="167.59798" y1="167.59798" x2="128" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</g>)
    case "thin":
      return (<g>
  
  
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="128" y1="128" x2="184" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="167.59798" y1="167.59798" x2="128" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</g>)
    case "regular":
      return (<g>
  
  
  <circle cx="128" cy="128" r="96" fill="none" stroke={color} stroke-miterlimit="10" strokeWidth="16"/>
  <line x1="128" y1="128" x2="184" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="167.59798" y1="167.59798" x2="128" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</g>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const ClockAlt = forwardRef<SVGSVGElement, IconProps>(
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

ClockAlt.displayName = "ClockAlt";

export default ClockAlt;
