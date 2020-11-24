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
            x="-10"
            y="98"
            width="176"
            height="60"
            rx="8"
            transform="translate(206 50) rotate(90)"
            strokeWidth="24"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="90"
            y="98"
            width="176"
            height="60"
            rx="8"
            transform="translate(306 -50) rotate(90)"
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
            x="-8"
            y="96"
            width="176"
            height="64"
            rx="8"
            transform="translate(208 48) rotate(90)"
            opacity="0.2"
          />
          <rect
            x="88"
            y="96"
            width="176"
            height="64"
            rx="8"
            transform="translate(304 -48) rotate(90)"
            opacity="0.2"
          />
          <rect
            x="-8"
            y="96"
            width="176"
            height="64"
            rx="8"
            transform="translate(208 48) rotate(90)"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="88"
            y="96"
            width="176"
            height="64"
            rx="8"
            transform="translate(304 -48) rotate(90)"
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
            <rect x="40" y="32" width="80" height="192" rx="16" />
            <rect x="136" y="32" width="80" height="192" rx="16" />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <rect
            x="-8"
            y="96"
            width="176"
            height="64"
            rx="8"
            transform="translate(208 48) rotate(90)"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="88"
            y="96"
            width="176"
            height="64"
            rx="8"
            transform="translate(304 -48) rotate(90)"
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
          <rect
            x="-8"
            y="96"
            width="176"
            height="64"
            rx="8"
            transform="translate(208 48) rotate(90)"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="88"
            y="96"
            width="176"
            height="64"
            rx="8"
            transform="translate(304 -48) rotate(90)"
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
          <rect
            x="-8"
            y="96"
            width="176"
            height="64"
            rx="8"
            transform="translate(208 48) rotate(90)"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="88"
            y="96"
            width="176"
            height="64"
            rx="8"
            transform="translate(304 -48) rotate(90)"
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

const Columns = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Columns.displayName = "Columns";

export default Columns;
