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
          <rect
            x="46"
            y="38.00452"
            width="144"
            height="180"
            rx="16"
            transform="translate(246.00452 10.00452) rotate(90)"
            strokeWidth="24"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <line
            x1="244"
            y1="96.00452"
            x2="244"
            y2="160.00452"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="116"
            y1="92"
            x2="116"
            y2="120"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <circle
            cx="116"
            cy="160"
            r="4"
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
          <rect
            x="44"
            y="36"
            width="144"
            height="184"
            rx="16"
            transform="translate(244 12) rotate(90)"
            opacity="0.2"
          />
          <line
            x1="116"
            y1="88"
            x2="116"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="240"
            y1="96"
            x2="240"
            y2="160"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="44"
            y="36"
            width="144"
            height="184"
            rx="16"
            transform="translate(244 12) rotate(90)"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle
            cx="116"
            cy="164"
            r="4"
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
          <path d="M248,96.00012v64a8,8,0,1,1-16,0v-64a8,8,0,1,1,16,0Zm-32-24v112a24.0275,24.0275,0,0,1-24,24H40a24.0275,24.0275,0,0,1-24-24v-112a24.0275,24.0275,0,0,1,24-24H192A24.0275,24.0275,0,0,1,216,72.00012Zm-108,56a8,8,0,0,0,16,0v-40a8,8,0,1,0-16,0Zm20,36a12,12,0,1,0-12,12A12.01375,12.01375,0,0,0,128,164.00012Z" />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="116"
            y1="88"
            x2="116"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="240"
            y1="96"
            x2="240"
            y2="160"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <rect
            x="44"
            y="36"
            width="144"
            height="184"
            rx="16"
            transform="translate(244 12) rotate(90)"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle
            cx="116"
            cy="164"
            r="4"
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
          <line
            x1="116"
            y1="88"
            x2="116"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="240"
            y1="96"
            x2="240"
            y2="160"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <rect
            x="44"
            y="36"
            width="144"
            height="184"
            rx="16"
            transform="translate(244 12) rotate(90)"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle
            cx="116"
            cy="164"
            r="4"
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
          <line
            x1="116"
            y1="88"
            x2="116"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="240"
            y1="96"
            x2="240"
            y2="160"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="44"
            y="36"
            width="144"
            height="184"
            rx="16"
            transform="translate(244 12) rotate(90)"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle
            cx="116"
            cy="164"
            r="4"
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

const BatteryWarning = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

BatteryWarning.displayName = "BatteryWarning";

export default BatteryWarning;
