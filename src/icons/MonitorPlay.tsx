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
          <polygon
            points="156 120 116 92 116 148 156 120"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <rect
            x="32"
            y="48"
            width="192"
            height="144"
            rx="16"
            transform="translate(256 240) rotate(180)"
            strokeWidth="24"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <line
            x1="160"
            y1="228"
            x2="96"
            y2="228"
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
            d="M208,48H48A16.00016,16.00016,0,0,0,32,64V176a16.00016,16.00016,0,0,0,16,16H208a16.00016,16.00016,0,0,0,16-16V64A16.00016,16.00016,0,0,0,208,48ZM112,152V88l48,32Z"
            opacity="0.2"
          />
          <rect
            x="32"
            y="48"
            width="192"
            height="144"
            rx="16"
            transform="translate(256 240) rotate(180)"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <line
            x1="160"
            y1="224"
            x2="96"
            y2="224"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polygon
            points="160 120 112 88 112 152 160 120"
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
          <path d="M168,224.00024a8.00039,8.00039,0,0,1-8,8H96a8,8,0,1,1,0-16h64A8.0004,8.0004,0,0,1,168,224.00024Zm64-160v112a24.0275,24.0275,0,0,1-24,24H48a24.0275,24.0275,0,0,1-24-24v-112a24.0275,24.0275,0,0,1,24-24H208A24.0275,24.0275,0,0,1,232,64.00024ZM168,120a8.02148,8.02148,0,0,0-3.5625-6.65625l-48-32A7.99612,7.99612,0,0,0,104,88v64a7.99975,7.99975,0,0,0,12.4375,6.65625l48-32A8.02151,8.02151,0,0,0,168,120Z" />
        </>
      );
    case "light":
      return (
        <>
          <polygon
            points="160 120 112 88 112 152 160 120"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <rect
            x="32"
            y="48"
            width="192"
            height="144"
            rx="16"
            transform="translate(256 240) rotate(180)"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <line
            x1="160"
            y1="224"
            x2="96"
            y2="224"
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
          <polygon
            points="160 120 112 88 112 152 160 120"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <rect
            x="32"
            y="48"
            width="192"
            height="144"
            rx="16"
            transform="translate(256 240) rotate(180)"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <line
            x1="160"
            y1="224"
            x2="96"
            y2="224"
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
          <rect
            x="32"
            y="48"
            width="192"
            height="144"
            rx="16"
            transform="translate(256 240) rotate(180)"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <line
            x1="160"
            y1="224"
            x2="96"
            y2="224"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polygon
            points="160 120 112 88 112 152 160 120"
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

const MonitorPlay = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

MonitorPlay.displayName = "MonitorPlay";

export default MonitorPlay;
