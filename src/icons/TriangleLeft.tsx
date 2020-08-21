/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polygon points="168 16 48 128 168 240 168 16" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polygon points="168 16 48 128 168 240 168 16" opacity="0.2"/>
  <polygon points="168 16 48 128 168 240 168 16" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M171.18848,8.6626a7.99868,7.99868,0,0,0-8.64746,1.48877l-120,112a8.00136,8.00136,0,0,0,0,11.69726l120,112A8.0002,8.0002,0,0,0,176,240V16A8.00032,8.00032,0,0,0,171.18848,8.6626Z"/>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polygon points="168 16 48 128 168 240 168 16" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polygon points="168 16 48 128 168 240 168 16" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polygon points="168 16 48 128 168 240 168 16" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const TriangleLeft = forwardRef<SVGSVGElement, IconProps>(
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

TriangleLeft.displayName = "TriangleLeft";

export default TriangleLeft;
