/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <path
            d="M79.50573,139.97912A56.002,56.002,0,1,1,73.91167,182.473,55.82153,55.82153,0,0,1,79.50573,139.97912Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="79.50573"
            y1="139.97912"
            x2="141.85014"
            y2="31.98842"
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
          <rect width="256" height="256" fill="none" />
          <path
            d="M79.50573,139.97912A56.002,56.002,0,1,1,73.91167,182.473,55.82153,55.82153,0,0,1,79.50573,139.97912Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="79.50573"
            y1="139.97912"
            x2="141.85014"
            y2="31.98842"
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
          <g opacity="0.2">
            <rect x="256" width="256" height="256" fill="none" />
          </g>
          <rect width="256" height="256" fill="none" />
          <path
            d="M79.50573,139.97912A56.002,56.002,0,1,1,73.91167,182.473,55.82153,55.82153,0,0,1,79.50573,139.97912Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="79.50573"
            y1="139.97912"
            x2="141.85014"
            y2="31.98842"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
        </>
      );
    case "light":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <path
            d="M79.50573,139.97912A56.002,56.002,0,1,1,73.91167,182.473,55.82153,55.82153,0,0,1,79.50573,139.97912Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="79.50573"
            y1="139.97912"
            x2="141.85014"
            y2="31.98842"
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
          <rect width="256" height="256" fill="none" />
          <path
            d="M79.50573,139.97912A56.002,56.002,0,1,1,73.91167,182.473,55.82153,55.82153,0,0,1,79.50573,139.97912Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="79.50573"
            y1="139.97912"
            x2="141.85014"
            y2="31.98842"
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
          <rect width="256" height="256" fill="none" />
          <g>
            <path
              d="M79.50573,139.97912A56.002,56.002,0,1,1,73.91167,182.473,55.82153,55.82153,0,0,1,79.50573,139.97912Z"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <line
              x1="79.50573"
              y1="139.97912"
              x2="141.85014"
              y2="31.98842"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
          </g>
        </>
      );
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Six = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>
  );
});

Six.displayName = "Six";

export default Six;
