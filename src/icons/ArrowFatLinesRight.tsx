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
            points="136 32 232 128 136 224 136 176 116 176 116 80 136 80 136 32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="44"
            y1="176"
            x2="44"
            y2="80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="80"
            y1="176"
            x2="80"
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
            points="136 32 232 128 136 224 136 176 104 176 104 80 136 80 136 32"
            opacity="0.2"
          />
          <polygon
            points="136 32 232 128 136 224 136 176 104 176 104 80 136 80 136 32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="40"
            y1="176"
            x2="40"
            y2="80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="72"
            y1="176"
            x2="72"
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
          <path d="M132.93848,231.39111A8.00015,8.00015,0,0,1,128,224V184H104a8.00008,8.00008,0,0,1-8-8V80a8.00008,8.00008,0,0,1,8-8h24V32a8.0001,8.0001,0,0,1,13.65723-5.65674l96,96a8.00182,8.00182,0,0,1,0,11.31348l-96,96A8.00061,8.00061,0,0,1,132.93848,231.39111ZM48,176V80a8,8,0,0,0-16,0v96a8,8,0,0,0,16,0Zm32,0V80a8,8,0,0,0-16,0v96a8,8,0,0,0,16,0Z" />
        </>
      );
    case "light":
      return (
        <>
          <polygon
            points="136 32 232 128 136 224 136 176 104 176 104 80 136 80 136 32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="40"
            y1="176"
            x2="40"
            y2="80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="72"
            y1="176"
            x2="72"
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
            points="136 32 232 128 136 224 136 176 104 176 104 80 136 80 136 32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="40"
            y1="176"
            x2="40"
            y2="80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="72"
            y1="176"
            x2="72"
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
            points="136 32 232 128 136 224 136 176 104 176 104 80 136 80 136 32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="40"
            y1="176"
            x2="40"
            y2="80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="72"
            y1="176"
            x2="72"
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

const ArrowFatLinesRight = forwardRef<SVGSVGElement, IconProps>(
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

ArrowFatLinesRight.displayName = "ArrowFatLinesRight";

export default ArrowFatLinesRight;
