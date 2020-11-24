/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (
  weight: string,
  color: string
): React.ReactNode | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path
            d="M67.17024,121.17374,187.8284,47.4382A8,8,0,0,1,200,54.26445v147.4711a8,8,0,0,1-12.1716,6.82625L67.17024,134.82625A8,8,0,0,1,67.17024,121.17374Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="56"
            y1="40"
            x2="56"
            y2="216"
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
          <path
            d="M67.17024,121.17374,187.8284,47.4382A8,8,0,0,1,200,54.26445v147.4711a8,8,0,0,1-12.1716,6.82625L67.17024,134.82625A8,8,0,0,1,67.17024,121.17374Z"
            opacity="0.2"
          />
          <path
            d="M67.17024,121.17374,187.8284,47.4382A8,8,0,0,1,200,54.26445v147.4711a8,8,0,0,1-12.1716,6.82625L67.17024,134.82625A8,8,0,0,1,67.17024,121.17374Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="56"
            y1="40"
            x2="56"
            y2="216"
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
          <path d="M56,32a8.00008,8.00008,0,0,1,8,8v73.73535l119.65723-73.124A16.0002,16.0002,0,0,1,208,54.26465v147.4707a16.004,16.004,0,0,1-24.34375,13.65283L64,142.26416V216a8,8,0,0,1-16,0V40A8.00008,8.00008,0,0,1,56,32Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M67.17024,121.17374,187.8284,47.4382A8,8,0,0,1,200,54.26445v147.4711a8,8,0,0,1-12.1716,6.82625L67.17024,134.82625A8,8,0,0,1,67.17024,121.17374Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="56"
            y1="40"
            x2="56"
            y2="216"
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
            d="M67.17024,121.17374,187.8284,47.4382A8,8,0,0,1,200,54.26445v147.4711a8,8,0,0,1-12.1716,6.82625L67.17024,134.82625A8,8,0,0,1,67.17024,121.17374Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="56"
            y1="40"
            x2="56"
            y2="216"
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
            d="M67.17024,121.17374,187.8284,47.4382A8,8,0,0,1,200,54.26445v147.4711a8,8,0,0,1-12.1716,6.82625L67.17024,134.82625A8,8,0,0,1,67.17024,121.17374Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="56"
            y1="40"
            x2="56"
            y2="216"
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

const SkipBack = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

SkipBack.displayName = "SkipBack";

export default SkipBack;
