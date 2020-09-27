/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <rect
            x="40"
            y="144"
            width="176"
            height="64"
            rx="8"
            strokeWidth="24"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="40"
            y="48"
            width="176"
            height="64"
            rx="8"
            strokeWidth="24"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="180.00054" cy="80" r="16" />
          <circle cx="180.00054" cy="176" r="16" />
        </>
      );
    case "duotone":
      return (
        <>
          <rect x="40" y="144" width="176" height="64" rx="8" opacity="0.2" />
          <rect x="40" y="48" width="176" height="64" rx="8" opacity="0.2" />
          <rect
            x="40"
            y="144"
            width="176"
            height="64"
            rx="8"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="40"
            y="48"
            width="176"
            height="64"
            rx="8"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="180.00054" cy="80" r="12" />
          <circle cx="180.00054" cy="176" r="12" />
        </>
      );
    case "fill":
      return (
        <>
          <g>
            <path d="M208,40H48A16.01833,16.01833,0,0,0,32,56v48a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V56A16.01833,16.01833,0,0,0,208,40ZM180.00049,92a12,12,0,1,1,12-12A12,12,0,0,1,180.00049,92Z" />
            <path d="M208,136H48a16.01833,16.01833,0,0,0-16,16v48a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V152A16.01833,16.01833,0,0,0,208,136Zm-27.99951,52a12,12,0,1,1,12-12A12,12,0,0,1,180.00049,188Z" />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <rect
            x="40"
            y="144"
            width="176"
            height="64"
            rx="8"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="40"
            y="48"
            width="176"
            height="64"
            rx="8"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="180.00054" cy="80" r="9" />
          <circle cx="180.00054" cy="176" r="9" />
        </>
      );
    case "thin":
      return (
        <>
          <rect
            x="40"
            y="144"
            width="176"
            height="64"
            rx="8"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="40"
            y="48"
            width="176"
            height="64"
            rx="8"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="180.00054" cy="80" r="6" />
          <circle cx="180.00054" cy="176" r="6" />
        </>
      );
    case "regular":
      return (
        <>
          <rect
            x="40"
            y="144"
            width="176"
            height="64"
            rx="8"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="40"
            y="48"
            width="176"
            height="64"
            rx="8"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="180.00054" cy="80" r="12" />
          <circle cx="180.00054" cy="176" r="12" />
        </>
      );
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const HardDrives = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <rect width="256" height="256" fill="none" />
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>
  );
});

HardDrives.displayName = "HardDrives";

export default HardDrives;
