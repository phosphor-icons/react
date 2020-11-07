/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path
            d="M43.99951,143.27273V52a8,8,0,0,1,8-8h152a8,8,0,0,1,8,8V204a8,8,0,0,1-8,8h-68.3641"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="128 152 64 216 32 184"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
        </>
      );
    case "duotone":
      return (
        <>
          <polygon
            points="44 44 44 196 60 212 212 212 212 44 44 44"
            opacity="0.2"
          />
          <path
            d="M43.99951,143.27273V52a8,8,0,0,1,8-8h152a8,8,0,0,1,8,8V204a8,8,0,0,1-8,8h-68.3641"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="128 152 64 216 32 184"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
        </>
      );
    case "fill":
      return (
        <>
          <g>
            <path d="M203.99951,36.00012h-152a16.01834,16.01834,0,0,0-16,16v91.27246a8,8,0,0,0,16,0V52.00012h152v152H135.63525a8,8,0,0,0,0,16h68.36426a16.01833,16.01833,0,0,0,16-16v-152A16.01833,16.01833,0,0,0,203.99951,36.00012Z" />
            <path d="M133.65674,146.34338a8.00121,8.00121,0,0,0-11.31445,0L63.99951,204.68664,37.65674,178.34338a8.00018,8.00018,0,1,0-11.31445,11.31348l32,32a8.00062,8.00062,0,0,0,11.31445,0l64-64A8,8,0,0,0,133.65674,146.34338Z" />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M43.99951,143.27273V52a8,8,0,0,1,8-8h152a8,8,0,0,1,8,8V204a8,8,0,0,1-8,8h-68.3641"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="128 152 64 216 32 184"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
        </>
      );
    case "thin":
      return (
        <>
          <path
            d="M43.99951,143.27273V52a8,8,0,0,1,8-8h152a8,8,0,0,1,8,8V204a8,8,0,0,1-8,8h-68.3641"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="128 152 64 216 32 184"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
        </>
      );
    case "regular":
      return (
        <>
          <path
            d="M43.99951,143.27273V52a8,8,0,0,1,8-8h152a8,8,0,0,1,8,8V204a8,8,0,0,1-8,8h-68.3641"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="128 152 64 216 32 184"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
        </>
      );
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const CheckSquareOffset = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { color, size, weight, mirrored, children, ...restProps } = props;
  const {
    color: contextColor,
    size: contextSize,
    weight: contextWeight,
    mirrored: contextMirrored,
    ...restContext
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
      {...restContext}
      {...restProps}
    >
      {children}
      <rect width="256" height="256" fill="none" />
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>
  );
});

CheckSquareOffset.displayName = "CheckSquareOffset";

export default CheckSquareOffset;
