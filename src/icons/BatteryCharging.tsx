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
          <rect
            x="46"
            y="38"
            width="144"
            height="180"
            rx="16"
            transform="translate(246 10) rotate(90)"
            strokeWidth="24"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <line
            x1="244"
            y1="96"
            x2="244"
            y2="160"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="118 168 134 128 102 128 118 88"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="96"
            y1="268"
            x2="160"
            y2="268"
            fill="none"
            opacity="0.1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
            stroke={color}
          />
        </>
      );
    case "duotone":
      return (
        <>
          <rect
            x="52"
            y="36"
            width="144"
            height="184"
            rx="16"
            transform="translate(252 4) rotate(90)"
            opacity="0.2"
          />
          <line
            x1="248"
            y1="96"
            x2="248"
            y2="160"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="52"
            y="36"
            width="144"
            height="184"
            rx="16"
            transform="translate(252 4) rotate(90)"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <polyline
            points="124 168 140 128 108 128 124 88"
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
            <path d="M248,88a8.00008,8.00008,0,0,0-8,8v64a8,8,0,0,0,16,0V96A8.00008,8.00008,0,0,0,248,88Z" />
            <path d="M200,47.99805H48a24.02624,24.02624,0,0,0-24,24v112a24.02624,24.02624,0,0,0,24,24H200a24.02625,24.02625,0,0,0,24-24v-112A24.02624,24.02624,0,0,0,200,47.99805ZM147.42187,130.9668l-16,40a7.99361,7.99361,0,1,1-14.84375-5.9375l11.60938-29.03125H108a7.99271,7.99271,0,0,1-7.42188-10.96875l16-40a7.99361,7.99361,0,1,1,14.84375,5.9375L119.8125,119.99805H140a7.9927,7.9927,0,0,1,7.42187,10.96875Z" />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="248"
            y1="96"
            x2="248"
            y2="160"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <rect
            x="52"
            y="36"
            width="144"
            height="184"
            rx="16"
            transform="translate(252 4) rotate(90)"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <polyline
            points="124 168 140 128 108 128 124 88"
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
            x1="248"
            y1="96"
            x2="248"
            y2="160"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <rect
            x="52"
            y="36"
            width="144"
            height="184"
            rx="16"
            transform="translate(252 4) rotate(90)"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <polyline
            points="124 168 140 128 108 128 124 88"
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
            x1="248"
            y1="96"
            x2="248"
            y2="160"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="52"
            y="36"
            width="144"
            height="184"
            rx="16"
            transform="translate(252 4) rotate(90)"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <polyline
            points="124 168 140 128 108 128 124 88"
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

const BatteryCharging = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

BatteryCharging.displayName = "BatteryCharging";

export default BatteryCharging;
