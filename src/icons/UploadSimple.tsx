/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <polyline points="86 81.971 128 39.971 170 81.971" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="128" y1="152" x2="128" y2="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M224,136v72a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V136" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <polyline points="86 81.971 128 39.971 170 81.971" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="128" y1="152" x2="128" y2="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M224,136v72a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V136" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <g>
    <path d="M91.65674,87.62793,120,59.2843V152a8,8,0,0,0,16,0V59.2843l28.34326,28.34363a8.00018,8.00018,0,1,0,11.31348-11.31445l-42-42a8.0018,8.0018,0,0,0-11.31348,0l-42,42A8.00018,8.00018,0,1,0,91.65674,87.62793Z"/>
    <path d="M224,128a8.00039,8.00039,0,0,0-8,8v72H40V136a8,8,0,0,0-16,0v72a16.01833,16.01833,0,0,0,16,16H216a16.01833,16.01833,0,0,0,16-16V136A8.00039,8.00039,0,0,0,224,128Z"/>
  </g>

</>)
    case "light":
      return (<>
  <polyline points="86 81.971 128 39.971 170 81.971" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="128" y1="152" x2="128" y2="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M224,136v72a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V136" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <polyline points="86 81.971 128 39.971 170 81.971" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="128" y1="152" x2="128" y2="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M224,136v72a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V136" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <polyline points="86 81.971 128 39.971 170 81.971" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="128" y1="152" x2="128" y2="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M224,136v72a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V136" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const UploadSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
});

UploadSimple.displayName = "UploadSimple";

export default UploadSimple;
