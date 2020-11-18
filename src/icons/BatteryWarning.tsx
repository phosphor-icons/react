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
            x1="116"
            y1="88"
            x2="116"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <circle cx="116" cy="164" r="16" />
          <line
            x1="240"
            y1="96.00452"
            x2="240"
            y2="160.00452"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <rect
            x="44"
            y="36.00452"
            width="144"
            height="184"
            rx="16"
            transform="translate(244.00452 12.00452) rotate(90)"
            strokeWidth="24"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      );
    case "duotone":
      return (
        <>
          <rect
            x="44"
            y="36.00452"
            width="144"
            height="184"
            rx="16"
            transform="translate(244.00452 12.00452) rotate(90)"
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
          <circle cx="116" cy="164" r="12" />
          <line
            x1="240"
            y1="96.00452"
            x2="240"
            y2="160.00452"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="44"
            y="36.00452"
            width="144"
            height="184"
            rx="16"
            transform="translate(244.00452 12.00452) rotate(90)"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      );
    case "fill":
      return (
        <>
          <g>
            <path d="M240,88.00452a7.99977,7.99977,0,0,0-8,8v64a8,8,0,0,0,16,0v-64A7.99977,7.99977,0,0,0,240,88.00452Z" />
            <path d="M192,48.00452H40a24.0275,24.0275,0,0,0-24,24v112a24.0275,24.0275,0,0,0,24,24H192a24.0275,24.0275,0,0,0,24-24v-112A24.0275,24.0275,0,0,0,192,48.00452Zm-84,39.9956a8,8,0,1,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,116,176.00012Z" />
          </g>
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
          <circle cx="116" cy="164.00452" r="9" />
          <line
            x1="240"
            y1="96.00452"
            x2="240"
            y2="160.00452"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <rect
            x="44"
            y="36.00452"
            width="144"
            height="184"
            rx="16"
            transform="translate(244.00452 12.00452) rotate(90)"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
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
          <circle cx="116" cy="164" r="6" />
          <line
            x1="240"
            y1="96.00452"
            x2="240"
            y2="160.00452"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <rect
            x="44"
            y="36.00452"
            width="144"
            height="184"
            rx="16"
            transform="translate(244.00452 12.00452) rotate(90)"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
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
          <circle cx="116" cy="164" r="12" />
          <line
            x1="240"
            y1="96.00452"
            x2="240"
            y2="160.00452"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="44"
            y="36.00452"
            width="144"
            height="184"
            rx="16"
            transform="translate(244.00452 12.00452) rotate(90)"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
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
