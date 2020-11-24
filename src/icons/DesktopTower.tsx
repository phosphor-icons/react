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
            d="M108,180H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80h76"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="108"
            y1="216"
            x2="68"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="204"
            y1="76"
            x2="180"
            y2="76"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="204"
            y1="112"
            x2="180"
            y2="112"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <rect
            x="144"
            y="40"
            width="96"
            height="176"
            rx="8"
            strokeWidth="24"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <line
            x1="88"
            y1="180"
            x2="88"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <circle
            cx="192"
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
          <rect x="144" y="40" width="96" height="176" rx="8" opacity="0.2" />
          <path
            d="M112,184H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80h80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="112"
            y1="216"
            x2="64"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="208"
            y1="72"
            x2="176"
            y2="72"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="208"
            y1="104"
            x2="176"
            y2="104"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="144"
            y="40"
            width="96"
            height="176"
            rx="8"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <line
            x1="88"
            y1="184"
            x2="88"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="192"
            cy="180"
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
          <path d="M120,80V184a8.00008,8.00008,0,0,1-8,8H96v16h16a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16H80V192H32A24.0275,24.0275,0,0,1,8,168V96A24.0275,24.0275,0,0,1,32,72h80A8.00008,8.00008,0,0,1,120,80ZM248,48V208a16.01833,16.01833,0,0,1-16,16H152a16.01833,16.01833,0,0,1-16-16V48a16.01833,16.01833,0,0,1,16-16h80A16.01833,16.01833,0,0,1,248,48ZM204,180a12,12,0,1,0-12,12A12.01343,12.01343,0,0,0,204,180Zm20-76a8.00008,8.00008,0,0,0-8-8H168a8,8,0,0,0,0,16h48A8.00008,8.00008,0,0,0,224,104Zm0-32a8.00008,8.00008,0,0,0-8-8H168a8,8,0,0,0,0,16h48A8.00008,8.00008,0,0,0,224,72Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M112,184H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80h80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="112"
            y1="216"
            x2="64"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="208"
            y1="72"
            x2="176"
            y2="72"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="208"
            y1="104"
            x2="176"
            y2="104"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <rect
            x="144"
            y="40"
            width="96"
            height="176"
            rx="8"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <line
            x1="88"
            y1="184"
            x2="88"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle
            cx="192"
            cy="180"
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
          <path
            d="M112,184H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80h80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="112"
            y1="216"
            x2="64"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="208"
            y1="72"
            x2="176"
            y2="72"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="208"
            y1="104"
            x2="176"
            y2="104"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <rect
            x="144"
            y="40"
            width="96"
            height="176"
            rx="8"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <line
            x1="88"
            y1="184"
            x2="88"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <circle
            cx="192"
            cy="180"
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
          <path
            d="M112,184H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80h80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="112"
            y1="216"
            x2="64"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="208"
            y1="72"
            x2="176"
            y2="72"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="208"
            y1="104"
            x2="176"
            y2="104"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="144"
            y="40"
            width="96"
            height="176"
            rx="8"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <line
            x1="88"
            y1="184"
            x2="88"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="192"
            cy="180"
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

const DesktopTower = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

DesktopTower.displayName = "DesktopTower";

export default DesktopTower;
