/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<g>
  <g opacity="0.2">
    <rect x="255.99414" width="256" height="256" fill="red"/>
  </g>
  <path d="M200,43.31371V208a8,8,0,0,1-8,8H27.31371a8,8,0,0,1-5.65686-13.65685l164.6863-164.6863A8,8,0,0,1,200,43.31371Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="160" y1="64" x2="160" y2="216" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</g>)
    case "duotone":
      return (<g>
  <g opacity="0.2">
    <path d="M160,216H27.31371a8,8,0,0,1-5.65686-13.65685L160,64Z"/>
  </g>
  <path d="M200,43.31371V208a8,8,0,0,1-8,8H27.31371a8,8,0,0,1-5.65686-13.65685l164.6863-164.6863A8,8,0,0,1,200,43.31371Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M160,216H27.31371a8,8,0,0,1-5.65686-13.65685L160,64Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</g>)
    case "fill":
      return (<g>
  <g opacity="0.2">
    <rect x="255.99414" width="256" height="256" fill="red"/>
  </g>
  <g>
    <path d="M200,43.31371V208a8,8,0,0,1-8,8H27.31371a8,8,0,0,1-5.65686-13.65685l164.6863-164.6863A8,8,0,0,1,200,43.31371Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <path d="M160,216H27.31371a8,8,0,0,1-5.65686-13.65685L160,64Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <path d="M160,216H27.31371a8,8,0,0,1-5.65686-13.65685L160,64Z"/>
  </g>

</g>)
    case "light":
      return (<g>
  <path d="M200,43.31371V208a8,8,0,0,1-8,8H27.31371a8,8,0,0,1-5.65686-13.65685l164.6863-164.6863A8,8,0,0,1,200,43.31371Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="160" y1="64" x2="160" y2="216" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</g>)
    case "thin":
      return (<g>
  <path d="M200,43.31371V208a8,8,0,0,1-8,8H27.31371a8,8,0,0,1-5.65686-13.65685l164.6863-164.6863A8,8,0,0,1,200,43.31371Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="160" y1="64" x2="160" y2="216" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</g>)
    case "regular":
      return (<g>
  <g>
    <path d="M200,43.31371V208a8,8,0,0,1-8,8H27.31371a8,8,0,0,1-5.65686-13.65685l164.6863-164.6863A8,8,0,0,1,200,43.31371Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    <line x1="160" y1="64" x2="160" y2="216" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </g>

</g>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const CellSignalHigh = forwardRef<SVGSVGElement, IconProps>(
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

CellSignalHigh.displayName = "CellSignalHigh";

export default CellSignalHigh;
