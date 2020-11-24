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
          <polygon
            points="120 32 24 128 120 224 120 176 140 176 140 80 120 80 120 32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="212"
            y1="176"
            x2="212"
            y2="80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="176"
            y1="176"
            x2="176"
            y2="80"
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
          <polygon
            points="120 32 24 128 120 224 120 176 152 176 152 80 120 80 120 32"
            opacity="0.2"
          />
          <polygon
            points="120 32 24 128 120 224 120 176 152 176 152 80 120 80 120 32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="216"
            y1="176"
            x2="216"
            y2="80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="184"
            y1="176"
            x2="184"
            y2="80"
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
          <path d="M114.34277,229.65674l-96-96a8.00182,8.00182,0,0,1,0-11.31348l96-96A8.0001,8.0001,0,0,1,128,32V72h24a8.00008,8.00008,0,0,1,8,8v96a8.00008,8.00008,0,0,1-8,8H128v40a8.0001,8.0001,0,0,1-13.65723,5.65674ZM216,184a8.00008,8.00008,0,0,0,8-8V80a8,8,0,0,0-16,0v96A8.00008,8.00008,0,0,0,216,184Zm-32,0a8.00008,8.00008,0,0,0,8-8V80a8,8,0,0,0-16,0v96A8.00008,8.00008,0,0,0,184,184Z" />
        </>
      );
    case "light":
      return (
        <>
          <polygon
            points="120 32 24 128 120 224 120 176 152 176 152 80 120 80 120 32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="216"
            y1="176"
            x2="216"
            y2="80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="184"
            y1="176"
            x2="184"
            y2="80"
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
          <polygon
            points="120 32 24 128 120 224 120 176 152 176 152 80 120 80 120 32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="216"
            y1="176"
            x2="216"
            y2="80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="184"
            y1="176"
            x2="184"
            y2="80"
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
          <polygon
            points="120 32 24 128 120 224 120 176 152 176 152 80 120 80 120 32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="216"
            y1="176"
            x2="216"
            y2="80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="184"
            y1="176"
            x2="184"
            y2="80"
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

const ArrowFatLinesLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ArrowFatLinesLeft.displayName = "ArrowFatLinesLeft";

export default ArrowFatLinesLeft;
