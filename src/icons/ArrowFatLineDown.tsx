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
            points="32 136 128 232 224 136 176 136 176 80 80 80 80 136 32 136"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="176"
            y1="40"
            x2="80"
            y2="40"
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
            points="32 136 128 232 224 136 176 136 176 72 80 72 80 136 32 136"
            opacity="0.2"
          />
          <polygon
            points="32 136 128 232 224 136 176 136 176 72 80 72 80 136 32 136"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="176"
            y1="40"
            x2="80"
            y2="40"
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
          <path d="M229.65723,141.65723l-96,96a8.003,8.003,0,0,1-11.31446,0l-96-96A8.00065,8.00065,0,0,1,32,128H72V72a8.00039,8.00039,0,0,1,8-8h96a8.00039,8.00039,0,0,1,8,8v56h40a8.00066,8.00066,0,0,1,5.65723,13.65723ZM184,40a8.00039,8.00039,0,0,0-8-8H80a8,8,0,0,0,0,16h96A8.00039,8.00039,0,0,0,184,40Z" />
        </>
      );
    case "light":
      return (
        <>
          <polygon
            points="32 136 128 232 224 136 176 136 176 72 80 72 80 136 32 136"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="176"
            y1="40"
            x2="80"
            y2="40"
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
            points="32 136 128 232 224 136 176 136 176 72 80 72 80 136 32 136"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="176"
            y1="40"
            x2="80"
            y2="40"
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
            points="32 136 128 232 224 136 176 136 176 72 80 72 80 136 32 136"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="176"
            y1="40"
            x2="80"
            y2="40"
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

const ArrowFatLineDown = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ArrowFatLineDown.displayName = "ArrowFatLineDown";

export default ArrowFatLineDown;
