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
            x="56"
            y="48"
            width="144"
            height="180"
            rx="16"
            strokeWidth="24"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <line
            x1="96"
            y1="12"
            x2="160"
            y2="12"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="128"
            y1="96"
            x2="128"
            y2="136"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <circle
            cx="128"
            cy="176"
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
          <rect x="56" y="48" width="144" height="184" rx="16" opacity="0.2" />
          <line
            x1="128"
            y1="100"
            x2="128"
            y2="140"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="96"
            y1="16"
            x2="160"
            y2="16"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="56"
            y="48"
            width="144"
            height="184"
            rx="16"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle
            cx="128"
            cy="176"
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
          <path d="M88,16a7.99977,7.99977,0,0,1,8-8h64a8,8,0,0,1,0,16H96A7.99977,7.99977,0,0,1,88,16ZM208,64V216a24.0275,24.0275,0,0,1-24,24H72a24.0275,24.0275,0,0,1-24-24V64A24.0275,24.0275,0,0,1,72,40H184A24.0275,24.0275,0,0,1,208,64Zm-88,76a8,8,0,0,0,16,0V100a8,8,0,0,0-16,0Zm20,36a12,12,0,1,0-12,12A12.01375,12.01375,0,0,0,140,176Z" />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="128"
            y1="100"
            x2="128"
            y2="140"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="96"
            y1="16"
            x2="160"
            y2="16"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <rect
            x="56"
            y="48"
            width="144"
            height="184"
            rx="16"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle
            cx="128"
            cy="176"
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
            x1="128"
            y1="100"
            x2="128"
            y2="140"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="96"
            y1="16"
            x2="160"
            y2="16"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <rect
            x="56"
            y="48"
            width="144"
            height="184"
            rx="16"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle
            cx="128"
            cy="176"
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
            x1="128"
            y1="100"
            x2="128"
            y2="140"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="96"
            y1="16"
            x2="160"
            y2="16"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="56"
            y="48"
            width="144"
            height="184"
            rx="16"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle
            cx="128"
            cy="176"
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

const BatteryWarningVertical = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
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
  }
);

BatteryWarningVertical.displayName = "BatteryWarningVertical";

export default BatteryWarningVertical;
