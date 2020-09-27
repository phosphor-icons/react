/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <polygon
            points="72 40 184 40 240 104 128 224 16 104 72 40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polygon
            points="177.091 104 128 224 78.909 104 128 40 177.091 104"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="16"
            y1="104"
            x2="240"
            y2="104"
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
            points="184 40 128 40 78.909 104 128 224 240 104 184 40"
            opacity="0.2"
          />
          <polygon
            points="72 40 184 40 240 104 128 224 16 104 72 40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polygon
            points="177.091 104 128 224 78.909 104 128 40 177.091 104"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="16"
            y1="104"
            x2="240"
            y2="104"
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
          <g>
            <polygon points="90.825 112 128 202.872 165.175 112 90.825 112" />
            <polygon points="12.523 112 121.151 228.387 73.538 112 12.523 112" />
            <polygon points="134.849 228.387 243.477 112 182.462 112 134.849 228.387" />
            <path d="M243.62988,96,190.02051,34.73193A8.001,8.001,0,0,0,184,32H131.94629l49.09033,64Z" />
            <path d="M124.05371,32H72a8.001,8.001,0,0,0-6.02051,2.73193L12.37012,96H74.96338Z" />
            <polygon points="160.872 96 128 53.145 95.128 96 160.872 96" />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <polygon
            points="72 40 184 40 240 104 128 224 16 104 72 40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polygon
            points="177.091 104 128 224 78.909 104 128 40 177.091 104"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="16"
            y1="104"
            x2="240"
            y2="104"
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
            points="72 40 184 40 240 104 128 224 16 104 72 40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polygon
            points="177.091 104 128 224 78.909 104 128 40 177.091 104"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="16"
            y1="104"
            x2="240"
            y2="104"
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
            points="72 40 184 40 240 104 128 224 16 104 72 40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polygon
            points="177.091 104 128 224 78.909 104 128 40 177.091 104"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="16"
            y1="104"
            x2="240"
            y2="104"
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

const Sketch = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Sketch.displayName = "Sketch";

export default Sketch;
