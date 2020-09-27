/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <rect x="0.00049" width="255.99951" height="256" fill="none" />
          <circle
            cx="119.99707"
            cy="120.00293"
            r="87.98531"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="182.22428"
            y1="182.22965"
            x2="223.99805"
            y2="224.00342"
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
          <rect x="0.00049" width="255.99951" height="256" fill="none" />
          <circle cx="119.99512" cy="120.00293" r="87.98531" opacity="0.2" />
          <circle
            cx="119.99512"
            cy="120.00293"
            r="87.98531"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="182.22232"
            y1="182.22965"
            x2="223.99609"
            y2="224.00342"
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
          <rect x="0.00049" width="255.99951" height="256" fill="none" />
          <g>
            <circle cx="119.99023" cy="120.00098" r="64" />
            <path d="M229.6543,218.34668l-36.33106-36.3313a96.49933,96.49933,0,1,0-25.335,21.11353,97.03552,97.03552,0,0,0,13.9856-9.83509l36.366,36.36634a8.00018,8.00018,0,1,0,11.31446-11.31348ZM119.99023,200.001a80,80,0,1,1,80-80A80.09041,80.09041,0,0,1,119.99023,200.001Z" />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <rect x="0.00049" width="255.99951" height="256" fill="none" />
          <circle
            cx="119.99805"
            cy="120.00293"
            r="87.98531"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="182.22525"
            y1="182.22965"
            x2="223.99902"
            y2="224.00342"
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
          <rect x="0.00049" width="255.99951" height="256" fill="none" />
          <circle
            cx="119.99902"
            cy="120.00293"
            r="87.98531"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="182.22623"
            y1="182.22965"
            x2="224"
            y2="224.00342"
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
          <rect x="0.00049" width="255.99951" height="256" fill="none" />
          <circle
            cx="120"
            cy="120.00293"
            r="87.98531"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="182.22721"
            y1="182.22965"
            x2="224.00098"
            y2="224.00342"
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

const MagnifyingGlass = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

MagnifyingGlass.displayName = "MagnifyingGlass";

export default MagnifyingGlass;
