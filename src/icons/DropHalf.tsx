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
          <path
            d="M208,152c0-72-80-128-80-128S48,80,48,152a80,80,0,0,0,160,0Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="128"
            y1="232"
            x2="128"
            y2="24"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="127.99999"
            y1="87.99999"
            x2="206.65864"
            y2="166.65864"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="127.99999"
            y1="147.99999"
            x2="186.53165"
            y2="206.53165"
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
            d="M128,232a80,80,0,0,0,80-80c0-72-80-128-80-128Z"
            opacity="0.2"
          />
          <path
            d="M208,152c0-72-80-128-80-128S48,80,48,152a80,80,0,0,0,160,0Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="128"
            y1="232"
            x2="128"
            y2="24"
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
          <path
            d="M208,152c0-72-80-128-80-128S48,80,48,152a80,80,0,0,0,160,0Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path d="M128,232a80,80,0,0,0,80-80c0-72-80-128-80-128Z" />
          <line
            x1="128"
            y1="232"
            x2="128"
            y2="24"
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
          <path
            d="M208,152c0-72-80-128-80-128S48,80,48,152a80,80,0,0,0,160,0Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="128"
            y1="232"
            x2="128"
            y2="24"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="127.99999"
            y1="71.99999"
            x2="208"
            y2="152"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="127.99999"
            y1="119.99999"
            x2="198.26945"
            y2="190.26945"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <g>
            <line
              x1="127.99999"
              y1="167.99999"
              x2="176.00281"
              y2="216.00281"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="12"
            />
            <line
              x1="127.99999"
              y1="167.99999"
              x2="176.00281"
              y2="216.00281"
              fill="#231f20"
            />
          </g>
        </>
      );
    case "thin":
      return (
        <>
          <path
            d="M208,152c0-72-80-128-80-128S48,80,48,152a80,80,0,0,0,160,0Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="128"
            y1="232"
            x2="128"
            y2="24"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="127.99999"
            y1="71.99999"
            x2="208"
            y2="152"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="127.99999"
            y1="119.99999"
            x2="198.26945"
            y2="190.26945"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <g>
            <line
              x1="127.99999"
              y1="167.99999"
              x2="176.00281"
              y2="216.00281"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="8"
            />
            <line
              x1="127.99999"
              y1="167.99999"
              x2="176.00281"
              y2="216.00281"
              fill="#231f20"
            />
          </g>
        </>
      );
    case "regular":
      return (
        <>
          <path
            d="M208,152c0-72-80-128-80-128S48,80,48,152a80,80,0,0,0,160,0Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="128"
            y1="232"
            x2="128"
            y2="24"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="127.99999"
            y1="71.99999"
            x2="208"
            y2="152"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="127.99999"
            y1="119.99999"
            x2="198.26945"
            y2="190.26945"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <g>
            <line
              x1="127.99999"
              y1="167.99999"
              x2="176.00281"
              y2="216.00281"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <line
              x1="127.99999"
              y1="167.99999"
              x2="176.00281"
              y2="216.00281"
              fill="#231f20"
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

const DropHalf = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

DropHalf.displayName = "DropHalf";

export default DropHalf;
