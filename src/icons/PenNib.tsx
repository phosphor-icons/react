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
            y1="144"
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
            cy="120"
            r="24"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M213.54294,107.79559A111.59855,111.59855,0,0,1,184,32H72a111.59857,111.59857,0,0,1-29.54333,75.796L128,240Z"
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
            d="M184,32H72a111.5987,111.5987,0,0,1-29.54346,75.7959L128,240l85.543-132.20459A111.59817,111.59817,0,0,1,184,32ZM128,144a24,24,0,1,1,24-24A23.99994,23.99994,0,0,1,128,144Z"
            opacity="0.2"
          />
          <line
            x1="128.00001"
            y1="144"
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
            cy="120"
            r="24"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M213.54294,107.79559A111.59855,111.59855,0,0,1,184,32H72a111.59857,111.59857,0,0,1-29.54333,75.796L128,240Z"
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
            <path d="M219.43164,102.37988A103.69573,103.69573,0,0,1,192,32.0937,8.04,8.04,0,0,0,184,24H72a8.03995,8.03995,0,0,0-8,8.09369,103.69821,103.69821,0,0,1-27.4316,70.28717,8,8,0,0,0-.82813,9.76123l76.90148,118.84827A4,4,0,0,0,120,228.81736V150.9873a32,32,0,1,1,16,0v77.83a4,4,0,0,0,7.35829,2.173L220.25977,112.1416A8.00061,8.00061,0,0,0,219.43164,102.37988Z" />
            <circle cx="128" cy="120" r="16" />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="128.00001"
            y1="144"
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
            cy="120"
            r="24"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M213.54294,107.79559A111.59855,111.59855,0,0,1,184,32H72a111.59857,111.59857,0,0,1-29.54333,75.796L128,240Z"
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
            y1="144"
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
            cy="120"
            r="24"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M213.54294,107.79559A111.59855,111.59855,0,0,1,184,32H72a111.59857,111.59857,0,0,1-29.54333,75.796L128,240Z"
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
            y1="144"
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
            cy="120"
            r="24"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M213.54294,107.79559A111.59855,111.59855,0,0,1,184,32H72a111.59857,111.59857,0,0,1-29.54333,75.796L128,240Z"
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
