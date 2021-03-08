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
            x1="160"
            y1="96"
            x2="40"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M64,192C16,112,80,32,216,40,224,176,144,240,64,192Z"
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
            d="M64,192C16,112,80,32,216,40,224,176,144,240,64,192Z"
            opacity="0.2"
          />
          <line
            x1="160"
            y1="96"
            x2="40"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M64,192C16,112,80,32,216,40,224,176,144,240,64,192Z"
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
            <path d="M223.98633,39.53027a8.00074,8.00074,0,0,0-7.5166-7.5166C140.15625,27.521,79.05371,50.53076,52.99756,93.55322A87.32048,87.32048,0,0,0,40.21191,142.687c.56861,15.95679,5.22315,32.06415,13.824,47.96326l100.30737-100.307a7.99984,7.99984,0,0,1,11.31348,11.31348L65.34961,201.96429c15.89893,8.60053,32.00647,13.25525,47.96338,13.8238,1.11719.04,2.22705.05957,3.33545.05957a87.1861,87.1861,0,0,0,45.79834-12.84473C205.46924,176.94629,228.47461,115.83447,223.98633,39.53027Z" />
            <path d="M57.14014,196.11621c-1.09119-1.8186-2.11719-3.64123-3.10425-5.46594l-19.69263,19.6925a8.00018,8.00018,0,0,0,11.31348,11.31446l19.69287-19.69294c-1.82446-.98693-3.647-2.01287-5.46533-3.10394A7.99592,7.99592,0,0,1,57.14014,196.11621Z" />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="160"
            y1="96"
            x2="40"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M64,192C16,112,80,32,216,40,224,176,144,240,64,192Z"
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
            x1="160"
            y1="96"
            x2="40"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M64,192C16,112,80,32,216,40,224,176,144,240,64,192Z"
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
            x1="160"
            y1="96"
            x2="40"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M64,192C16,112,80,32,216,40,224,176,144,240,64,192Z"
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

const Leaf = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Leaf.displayName = "Leaf";

export default Leaf;
