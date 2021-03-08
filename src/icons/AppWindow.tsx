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
            x="32"
            y="48.00586"
            width="192"
            height="160"
            rx="8"
            strokeWidth="24"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="76" cy="92.00586" r="16" />
          <circle cx="124" cy="92.00586" r="16" />
        </>
      );
    case "duotone":
      return (
        <>
          <rect
            x="32"
            y="48.00586"
            width="192"
            height="160"
            rx="8"
            opacity="0.2"
          />
          <rect
            x="32"
            y="48.00586"
            width="192"
            height="160"
            rx="8"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="68" cy="84.00586" r="12" />
          <circle cx="108" cy="84.00586" r="12" />
        </>
      );
    case "fill":
      return (
        <>
          <path d="M216,40.00586H40a16.01833,16.01833,0,0,0-16,16v144a16.01833,16.01833,0,0,0,16,16H216a16.01833,16.01833,0,0,0,16-16v-144A16.01833,16.01833,0,0,0,216,40.00586Zm-148,56a12,12,0,1,1,12-12A12,12,0,0,1,68,96.00586Zm40,0a12,12,0,1,1,12-12A12,12,0,0,1,108,96.00586Z" />
        </>
      );
    case "light":
      return (
        <>
          <rect
            x="32"
            y="48.00586"
            width="192"
            height="160"
            rx="8"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="68" cy="84.00586" r="10" />
          <circle cx="108" cy="84.00586" r="10" />
        </>
      );
    case "thin":
      return (
        <>
          <rect
            x="32"
            y="48.00586"
            width="192"
            height="160"
            rx="8"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="68" cy="84.00586" r="8" />
          <circle cx="108" cy="84.00586" r="8" />
        </>
      );
    case "regular":
      return (
        <>
          <rect
            x="32"
            y="48.00586"
            width="192"
            height="160"
            rx="8"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="68" cy="84.00586" r="12" />
          <circle cx="108" cy="84.00586" r="12" />
        </>
      );
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const AppWindow = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

AppWindow.displayName = "AppWindow";

export default AppWindow;
