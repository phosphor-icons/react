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
          <line
            x1="100"
            y1="12"
            x2="156"
            y2="12"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <rect
            x="56.00586"
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
          <circle cx="128" cy="176" r="16" />
        </>
      );
    case "duotone":
      return (
        <>
          <rect x="56" y="40" width="144" height="184" rx="16" opacity="0.2" />
          <line
            x1="128"
            y1="92"
            x2="128"
            y2="132"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="96"
            y1="8"
            x2="160"
            y2="8"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="56"
            y="40"
            width="144"
            height="184"
            rx="16"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="128" cy="168" r="12" />
        </>
      );
    case "fill":
      return (
        <>
          <path d="M88,8a7.99977,7.99977,0,0,1,8-8h64a8,8,0,0,1,0,16H96A7.99977,7.99977,0,0,1,88,8ZM208,56V208a24.0275,24.0275,0,0,1-24,24H72a24.0275,24.0275,0,0,1-24-24V56A24.0275,24.0275,0,0,1,72,32H184A24.0275,24.0275,0,0,1,208,56Zm-88,76a8,8,0,0,0,16,0V92a8,8,0,0,0-16,0Zm20,36a12,12,0,1,0-12,12A12.01375,12.01375,0,0,0,140,168Z" />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="128"
            y1="92"
            x2="128"
            y2="132"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="96"
            y1="8"
            x2="160"
            y2="8"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <rect
            x="56"
            y="40"
            width="144"
            height="184"
            rx="16"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="128" cy="168" r="10" />
        </>
      );
    case "thin":
      return (
        <>
          <line
            x1="128"
            y1="92"
            x2="128"
            y2="132"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="96"
            y1="8"
            x2="160"
            y2="8"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <rect
            x="56"
            y="40"
            width="144"
            height="184"
            rx="16"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="128" cy="168" r="8" />
        </>
      );
    case "regular":
      return (
        <>
          <line
            x1="128"
            y1="92"
            x2="128"
            y2="132"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="96"
            y1="8"
            x2="160"
            y2="8"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="56"
            y="40"
            width="144"
            height="184"
            rx="16"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="128" cy="168" r="12" />
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
