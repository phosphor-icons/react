/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line
            x1="96.00244"
            y1="200"
            x2="160.00244"
            y2="200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="104.00244"
            y1="232"
            x2="152.00244"
            y2="232"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M79.99554,168.00067a80,80,0,1,1,96.014-.00013"
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
            d="M79.99554,168.00067a80,80,0,1,1,96.014-.00013"
            opacity="0.2"
          />
          <line
            x1="96.00244"
            y1="200"
            x2="160.00244"
            y2="200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="104.00244"
            y1="232"
            x2="152.00244"
            y2="232"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M79.99554,168.00067a80,80,0,1,1,96.014-.00013"
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
            <path d="M160.00244,192h-64a8,8,0,1,0,0,16h64a8,8,0,0,0,0-16Z" />
            <path d="M152.00244,224h-48a8,8,0,1,0,0,16h48a8,8,0,0,0,0-16Z" />
            <path d="M128.00244,16a88.00456,88.00456,0,0,0-52.8125,158.39746,8.00073,8.00073,0,0,0,4.80567,1.60352h96.01367a8.0007,8.0007,0,0,0,4.80566-1.60352A88.00456,88.00456,0,0,0,128.00244,16Z" />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="96.00244"
            y1="200"
            x2="160.00244"
            y2="200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="104.00244"
            y1="232"
            x2="152.00244"
            y2="232"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M79.99554,168.00067a80,80,0,1,1,96.014-.00013"
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
            x1="96.00244"
            y1="200"
            x2="160.00244"
            y2="200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="104.00244"
            y1="232"
            x2="152.00244"
            y2="232"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M79.99554,168.00067a80,80,0,1,1,96.014-.00013"
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
            x1="96.00244"
            y1="200"
            x2="160.00244"
            y2="200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="104.00244"
            y1="232"
            x2="152.00244"
            y2="232"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M79.99554,168.00067a80,80,0,1,1,96.014-.00013"
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

const Lightbulb = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Lightbulb.displayName = "Lightbulb";

export default Lightbulb;
