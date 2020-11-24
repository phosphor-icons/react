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
          <path
            d="M136,32l96,96-96,96V176H48a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h88Z"
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
            d="M136,32l96,96-96,96V176H48a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h88Z"
            opacity="0.2"
          />
          <path
            d="M136,32l96,96-96,96V176H48a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h88Z"
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
          <path d="M132.93848,231.39062A8,8,0,0,1,128,224V184H48a16.01833,16.01833,0,0,1-16-16V88A16.01833,16.01833,0,0,1,48,72h80V32a8.00065,8.00065,0,0,1,13.65723-5.65723l96,96a8.003,8.003,0,0,1,0,11.31446l-96,96A8.002,8.002,0,0,1,132.93848,231.39062Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M136,32l96,96-96,96V176H48a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h88Z"
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
          <path
            d="M136,32l96,96-96,96V176H48a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h88Z"
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
          <path
            d="M136,32l96,96-96,96V176H48a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h88Z"
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

const ArrowFatRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ArrowFatRight.displayName = "ArrowFatRight";

export default ArrowFatRight;
