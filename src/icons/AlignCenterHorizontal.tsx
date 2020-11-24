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
            x1="128"
            y1="31.99512"
            x2="128"
            y2="51.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="128"
            y1="203.99512"
            x2="128"
            y2="223.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="128"
            y1="107.99512"
            x2="128"
            y2="147.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <rect
            x="64"
            y="52"
            width="128"
            height="56"
            rx="8"
            strokeWidth="24"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="40"
            y="148"
            width="176"
            height="56"
            rx="8"
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
          <rect x="64" y="56" width="128" height="56" rx="8" opacity="0.2" />
          <rect x="40" y="144" width="176" height="56" rx="8" opacity="0.2" />
          <line
            x1="128"
            y1="31.99512"
            x2="128"
            y2="55.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="128"
            y1="199.99512"
            x2="128"
            y2="223.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="128"
            y1="111.99512"
            x2="128"
            y2="143.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="64"
            y="56"
            width="128"
            height="56"
            rx="8"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="40"
            y="144"
            width="176"
            height="56"
            rx="8"
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
          <path d="M224,152v40a16.01833,16.01833,0,0,1-16,16H136v15.99512a8,8,0,0,1-16,0V208H48a16.01833,16.01833,0,0,1-16-16V152a16.01833,16.01833,0,0,1,16-16h72V120H72a16.01833,16.01833,0,0,1-16-16V64A16.01833,16.01833,0,0,1,72,48h48V31.99512a8,8,0,1,1,16,0V48h48a16.01833,16.01833,0,0,1,16,16v40a16.01833,16.01833,0,0,1-16,16H136v16h72A16.01833,16.01833,0,0,1,224,152Z" />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="128"
            y1="31.99512"
            x2="128"
            y2="55.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="128"
            y1="199.99512"
            x2="128"
            y2="223.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="128"
            y1="111.99512"
            x2="128"
            y2="143.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <rect
            x="64"
            y="56"
            width="128"
            height="56"
            rx="8"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="40"
            y="144"
            width="176"
            height="56"
            rx="8"
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
            x1="128"
            y1="31.99512"
            x2="128"
            y2="55.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="128"
            y1="199.99512"
            x2="128"
            y2="223.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="128"
            y1="111.99512"
            x2="128"
            y2="143.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <rect
            x="64"
            y="56"
            width="128"
            height="56"
            rx="8"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="40"
            y="144"
            width="176"
            height="56"
            rx="8"
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
            x1="128"
            y1="31.99512"
            x2="128"
            y2="55.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="128"
            y1="199.99512"
            x2="128"
            y2="223.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="128"
            y1="111.99512"
            x2="128"
            y2="143.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="64"
            y="56"
            width="128"
            height="56"
            rx="8"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="40"
            y="144"
            width="176"
            height="56"
            rx="8"
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

const AlignCenterHorizontal = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
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
  }
);

AlignCenterHorizontal.displayName = "AlignCenterHorizontal";

export default AlignCenterHorizontal;
