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
            x="32"
            y="48"
            width="192"
            height="140"
            rx="16"
            transform="translate(256 236) rotate(180)"
            strokeWidth="24"
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
            strokeWidth="24"
          />
          <line
            x1="32"
            y1="148"
            x2="224"
            y2="148"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="128"
            y1="192"
            x2="128"
            y2="224"
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
            d="M32,152V64A16,16,0,0,1,48,48H208a16,16,0,0,1,16,16v88Z"
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
          <line
            x1="32"
            y1="152"
            x2="224"
            y2="152"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="128"
            y1="192"
            x2="128"
            y2="224"
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
          <path d="M208,40H48A24.0275,24.0275,0,0,0,24,64V176a24.0275,24.0275,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24.0275,24.0275,0,0,0,24-24V64A24.0275,24.0275,0,0,0,208,40Zm0,144H48a8.00917,8.00917,0,0,1-8-8V160H216v16A8.00917,8.00917,0,0,1,208,184Z" />
        </>
      );
    case "light":
      return (
        <>
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
          <line
            x1="32"
            y1="152"
            x2="224"
            y2="152"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="128"
            y1="192"
            x2="128"
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
          <line
            x1="32"
            y1="152"
            x2="224"
            y2="152"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="128"
            y1="192"
            x2="128"
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
          <line
            x1="32"
            y1="152"
            x2="224"
            y2="152"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="128"
            y1="192"
            x2="128"
            y2="224"
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

const Desktop = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Desktop.displayName = "Desktop";

export default Desktop;
