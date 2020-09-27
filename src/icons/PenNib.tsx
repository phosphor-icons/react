/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line
            x1="128.00001"
            y1="136"
            x2="128.00001"
            y2="240"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <circle
            cx="128.00001"
            cy="112"
            r="24"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M41.56652,100.75177A111.60148,111.60148,0,0,0,71.99863,24.00022H184.0013a111.59962,111.59962,0,0,0,30.28917,76.59937L128,240Z"
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
            d="M184.00122,24H71.99854a111.60071,111.60071,0,0,1-30.43213,76.75195L128,240l86.29053-139.40039A111.6,111.6,0,0,1,184.00122,24ZM128,136a24,24,0,1,1,24-24A23.99994,23.99994,0,0,1,128,136Z"
            opacity="0.2"
          />
          <line
            x1="128"
            y1="136"
            x2="128"
            y2="240"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="128"
            cy="112"
            r="24"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M41.56651,100.75177A111.60148,111.60148,0,0,0,71.99862,24.00022H184.00129a111.59962,111.59962,0,0,0,30.28917,76.59937L128,240Z"
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
            <circle cx="128" cy="112" r="16" />
            <path d="M220.125,95.12695a103.60446,103.60446,0,0,1-28.124-71.12646,8.00041,8.00041,0,0,0-8-8.00049H71.999a8.00041,8.00041,0,0,0-8,8.00049A103.58423,103.58423,0,0,1,35.74121,95.26855a7.99965,7.99965,0,0,0-.97168,9.70215l86.43359,139.24805A7.99775,7.99775,0,0,0,128,248h.00488a8.00024,8.00024,0,0,0,6.79688-3.78906l86.29-139.40039A7.99875,7.99875,0,0,0,220.125,95.12695ZM136,142.9873V192a8,8,0,0,1-16,0V142.9873a32,32,0,1,1,16,0Z" />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="128.00001"
            y1="136"
            x2="128.00001"
            y2="240"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle
            cx="128.00001"
            cy="112"
            r="24"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M41.56652,100.75177A111.60148,111.60148,0,0,0,71.99863,24.00022H184.0013a111.59962,111.59962,0,0,0,30.28917,76.59937L128,240Z"
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
            x1="128.00001"
            y1="136"
            x2="128.00001"
            y2="240"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <circle
            cx="128.00001"
            cy="112"
            r="24"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M41.56652,100.75177A111.60148,111.60148,0,0,0,71.99863,24.00022H184.0013a111.59962,111.59962,0,0,0,30.28917,76.59937L128,240Z"
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
            x1="128.00001"
            y1="136"
            x2="128.00001"
            y2="240"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="128.00001"
            cy="112"
            r="24"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M41.56652,100.75177A111.60148,111.60148,0,0,0,71.99863,24.00022H184.0013a111.59962,111.59962,0,0,0,30.28917,76.59937L128,240Z"
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

const PenNib = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

PenNib.displayName = "PenNib";

export default PenNib;
