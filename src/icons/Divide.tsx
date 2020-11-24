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
            x1="40"
            y1="128"
            x2="216"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <circle
            cx="128"
            cy="64"
            r="8"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <circle
            cx="128"
            cy="192"
            r="8"
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
          <line
            x1="40"
            y1="128"
            x2="216"
            y2="128"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="128"
            cy="64"
            r="8"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="128"
            cy="192"
            r="8"
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
          <path d="M224,128a8.00008,8.00008,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8.00008,8.00008,0,0,1,224,128ZM128,80a16,16,0,1,0-16-16A16.01833,16.01833,0,0,0,128,80Zm0,96a16,16,0,1,0,16,16A16.01833,16.01833,0,0,0,128,176Z" />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="40"
            y1="128"
            x2="216"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle
            cx="128"
            cy="64"
            r="8"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle
            cx="128"
            cy="192"
            r="8"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle cx="128" cy="64" r="8" />
          <circle cx="128" cy="192" r="8" />
        </>
      );
    case "thin":
      return (
        <>
          <line
            x1="40"
            y1="128"
            x2="216"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <circle
            cx="128"
            cy="64"
            r="8"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <circle
            cx="128"
            cy="192"
            r="8"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <circle cx="128" cy="64" r="8" />
          <circle cx="128" cy="192" r="8" />
        </>
      );
    case "regular":
      return (
        <>
          <line
            x1="40"
            y1="128"
            x2="216"
            y2="128"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="128"
            cy="64"
            r="8"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="128"
            cy="192"
            r="8"
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

const Divide = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Divide.displayName = "Divide";

export default Divide;
