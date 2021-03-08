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
            x1="48"
            y1="96"
            x2="104"
            y2="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="152"
            y1="96"
            x2="208"
            y2="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M104,144a24,24,0,0,0,48,0V56a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8v86.9957c0,44.11169-35.28293,80.675-79.39341,81.00205A80.00008,80.00008,0,0,1,48,144V56a8,8,0,0,1,8-8H96a8,8,0,0,1,8,8Z"
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
            d="M48,56a8,8,0,0,1,8-8H96a8,8,0,0,1,8,8V96H48Z"
            opacity="0.2"
          />
          <path
            d="M152,56a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8V96H152Z"
            opacity="0.2"
          />
          <line
            x1="48"
            y1="96"
            x2="104"
            y2="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="152"
            y1="96"
            x2="208"
            y2="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M104,144a24,24,0,0,0,48,0V56a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8v86.9957c0,44.11169-35.28293,80.675-79.39341,81.00205A80.00008,80.00008,0,0,1,48,144V56a8,8,0,0,1,8-8H96a8,8,0,0,1,8,8Z"
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
          <path d="M200,40H160a16.01833,16.01833,0,0,0-16,16v88a16,16,0,0,1-32,0V56A16.01833,16.01833,0,0,0,96,40H56A16.01833,16.01833,0,0,0,40,56v88a87.99955,87.99955,0,0,0,87.99512,88c.22265,0,.44726-.001.6709-.00195,48.15625-.35743,87.334-40.28321,87.334-89.002V56A16.01833,16.01833,0,0,0,200,40Zm0,16V96H160V56ZM96,56V96H56V56Z" />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="48"
            y1="96"
            x2="104"
            y2="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="152"
            y1="96"
            x2="208"
            y2="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M104,144a24,24,0,0,0,48,0V56a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8v86.9957c0,44.11169-35.28293,80.675-79.39341,81.00205A80.00008,80.00008,0,0,1,48,144V56a8,8,0,0,1,8-8H96a8,8,0,0,1,8,8Z"
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
            x1="48"
            y1="96"
            x2="104"
            y2="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="152"
            y1="96"
            x2="208"
            y2="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M104,144a24,24,0,0,0,48,0V56a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8v86.9957c0,44.11169-35.28293,80.675-79.39341,81.00205A80.00008,80.00008,0,0,1,48,144V56a8,8,0,0,1,8-8H96a8,8,0,0,1,8,8Z"
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
            x1="48"
            y1="96"
            x2="104"
            y2="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="152"
            y1="96"
            x2="208"
            y2="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M104,144a24,24,0,0,0,48,0V56a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8v86.9957c0,44.11169-35.28293,80.675-79.39341,81.00205A80.00008,80.00008,0,0,1,48,144V56a8,8,0,0,1,8-8H96a8,8,0,0,1,8,8Z"
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

const MagnetStraight = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

MagnetStraight.displayName = "MagnetStraight";

export default MagnetStraight;
