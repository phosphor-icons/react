/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line
            x1="240"
            y1="96"
            x2="240"
            y2="160"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <rect
            x="44"
            y="36"
            width="144"
            height="184"
            rx="16"
            transform="translate(244 12) rotate(90)"
            strokeWidth="24"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      );
    case "duotone":
      return (
        <>
          <rect
            x="44"
            y="36"
            width="144"
            height="184"
            rx="16"
            transform="translate(244 12) rotate(90)"
            opacity="0.2"
          />
          <line
            x1="240"
            y1="96"
            x2="240"
            y2="160"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="44"
            y="36"
            width="144"
            height="184"
            rx="16"
            transform="translate(244 12) rotate(90)"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      );
    case "fill":
      return (
        <>
          <g>
            <path d="M240,88a8.00008,8.00008,0,0,0-8,8v64a8,8,0,0,0,16,0V96A8.00008,8.00008,0,0,0,240,88Z" />
            <path d="M192,48H40A24.0275,24.0275,0,0,0,16,72V184a24.0275,24.0275,0,0,0,24,24H192a24.0275,24.0275,0,0,0,24-24V72A24.0275,24.0275,0,0,0,192,48Zm8,136a8.00917,8.00917,0,0,1-8,8H40a8.00917,8.00917,0,0,1-8-8V72a8.00917,8.00917,0,0,1,8-8H192a8.00917,8.00917,0,0,1,8,8Z" />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="240"
            y1="96"
            x2="240"
            y2="160"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <rect
            x="44"
            y="36"
            width="144"
            height="184"
            rx="16"
            transform="translate(244 12) rotate(90)"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      );
    case "thin":
      return (
        <>
          <line
            x1="240"
            y1="96"
            x2="240"
            y2="160"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <rect
            x="44"
            y="36"
            width="144"
            height="184"
            rx="16"
            transform="translate(244 12) rotate(90)"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      );
    case "regular":
      return (
        <>
          <line
            x1="240"
            y1="96"
            x2="240"
            y2="160"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="44"
            y="36"
            width="144"
            height="184"
            rx="16"
            transform="translate(244 12) rotate(90)"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
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

const BatteryEmpty = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

BatteryEmpty.displayName = "BatteryEmpty";

export default BatteryEmpty;
