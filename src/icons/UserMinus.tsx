/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line
            x1="176"
            y1="56"
            x2="224"
            y2="56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M192,96a63.929,63.929,0,1,1-49.22128-62.2852"
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
          <circle cx="128" cy="96" r="64" opacity="0.2" />
          <line
            x1="176"
            y1="56"
            x2="224"
            y2="56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M192,96a63.929,63.929,0,1,1-49.22128-62.2852"
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
            <path d="M176,64h48a8,8,0,0,0,0-16H176a8,8,0,0,0,0,16Z" />
            <path d="M231.93652,211.98633a120.48718,120.48718,0,0,0-67.12-54.14258A71.86434,71.86434,0,0,0,198.18579,80H176a23.99523,23.99523,0,0,1-10.62024-45.51459A71.97718,71.97718,0,1,0,91.18359,157.84375a120.48811,120.48811,0,0,0-67.11865,54.14063,7.99981,7.99981,0,0,0,6.92432,12.00634l194.023.002a7.99957,7.99957,0,0,0,6.92431-12.00635Z" />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="176"
            y1="56"
            x2="224"
            y2="56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M192,96a63.929,63.929,0,1,1-49.22128-62.2852"
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
            x1="176"
            y1="56"
            x2="224"
            y2="56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M192,96a63.929,63.929,0,1,1-49.22128-62.2852"
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
            x1="176"
            y1="56"
            x2="224"
            y2="56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M192,96a63.929,63.929,0,1,1-49.22128-62.2852"
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

const UserMinus = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

UserMinus.displayName = "UserMinus";

export default UserMinus;
