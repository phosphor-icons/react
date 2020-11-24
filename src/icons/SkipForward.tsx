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
            d="M188.82976,121.17374,68.1716,47.4382A8,8,0,0,0,56,54.26445v147.4711a8,8,0,0,0,12.1716,6.82625l120.65816-73.73555A8,8,0,0,0,188.82976,121.17374Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="200"
            y1="40"
            x2="200"
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
            d="M188.82976,121.17374,68.1716,47.4382A8,8,0,0,0,56,54.26445v147.4711a8,8,0,0,0,12.1716,6.82625l120.65816-73.73555A8,8,0,0,0,188.82976,121.17374Z"
            opacity="0.2"
          />
          <path
            d="M188.82976,121.17374,68.1716,47.4382A8,8,0,0,0,56,54.26445v147.4711a8,8,0,0,0,12.1716,6.82625l120.65816-73.73555A8,8,0,0,0,188.82976,121.17374Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="200"
            y1="40"
            x2="200"
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
          <path d="M208,40V216a8,8,0,0,1-16,0V142.26416l-119.65625,73.124A16.00029,16.00029,0,0,1,48,201.73535V54.26465A16.0002,16.0002,0,0,1,72.34277,40.61133L192,113.73535V40a8,8,0,0,1,16,0Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M188.82976,121.17374,68.1716,47.4382A8,8,0,0,0,56,54.26445v147.4711a8,8,0,0,0,12.1716,6.82625l120.65816-73.73555A8,8,0,0,0,188.82976,121.17374Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="200"
            y1="40"
            x2="200"
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
            d="M188.82976,121.17374,68.1716,47.4382A8,8,0,0,0,56,54.26445v147.4711a8,8,0,0,0,12.1716,6.82625l120.65816-73.73555A8,8,0,0,0,188.82976,121.17374Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="200"
            y1="40"
            x2="200"
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
            d="M188.82976,121.17374,68.1716,47.4382A8,8,0,0,0,56,54.26445v147.4711a8,8,0,0,0,12.1716,6.82625l120.65816-73.73555A8,8,0,0,0,188.82976,121.17374Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="200"
            y1="40"
            x2="200"
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

const SkipForward = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

SkipForward.displayName = "SkipForward";

export default SkipForward;
