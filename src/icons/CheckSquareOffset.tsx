/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <path d="M43.99951,143.27273V52a8,8,0,0,1,8-8h152a8,8,0,0,1,8,8V204a8,8,0,0,1-8,8h-68.3641" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <polyline points="128 152 64 216 32 184" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <path d="M43.99951,143.27273V52a8,8,0,0,1,8-8h152a8,8,0,0,1,8,8V204a8,8,0,0,1-8,8h-68.3641" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polyline points="128 152 64 216 32 184" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polygon points="44 44 44 196 60 212 212 212 212 44 44 44" opacity="0.2"/>

</>)
    case "fill":
      return (<>
  <path d="M204.00146,36h-152a16,16,0,0,0-16,16V204a16,16,0,0,0,16,16h152a16,16,0,0,0,16-16V52A16,16,0,0,0,204.00146,36Zm-38.34375,97.65625-64,64a7.99708,7.99708,0,0,1-11.3125,0l-32-32a7.99915,7.99915,0,1,1,11.3125-11.3125L96.00146,180.6875l58.34375-58.34375a7.99915,7.99915,0,0,1,11.3125,11.3125Z"/>

</>)
    case "light":
      return (<>
  <path d="M43.99951,143.27273V52a8,8,0,0,1,8-8h152a8,8,0,0,1,8,8V204a8,8,0,0,1-8,8h-68.3641" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <polyline points="128 152 64 216 32 184" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <path d="M43.99951,143.27273V52a8,8,0,0,1,8-8h152a8,8,0,0,1,8,8V204a8,8,0,0,1-8,8h-68.3641" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <polyline points="128 152 64 216 32 184" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <path d="M43.99951,143.27273V52a8,8,0,0,1,8-8h152a8,8,0,0,1,8,8V204a8,8,0,0,1-8,8h-68.3641" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polyline points="128 152 64 216 32 184" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const CheckSquareOffset = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

CheckSquareOffset.displayName = "CheckSquareOffset";

export default CheckSquareOffset;
