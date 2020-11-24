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
            d="M32,136l96,96,96-96H176V48a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v88Z"
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
            d="M32,136l96,96,96-96H176V48a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v88Z"
            opacity="0.2"
          />
          <path
            d="M32,136l96,96,96-96H176V48a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v88Z"
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
          <path d="M229.65723,141.65723l-96,96a8.003,8.003,0,0,1-11.31446,0l-96-96A8.00065,8.00065,0,0,1,32,128H72V48A16.01833,16.01833,0,0,1,88,32h80a16.01833,16.01833,0,0,1,16,16v80h40a8.00066,8.00066,0,0,1,5.65723,13.65723Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M32,136l96,96,96-96H176V48a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v88Z"
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
            d="M32,136l96,96,96-96H176V48a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v88Z"
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
            d="M32,136l96,96,96-96H176V48a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v88Z"
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

const ArrowFatDown = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ArrowFatDown.displayName = "ArrowFatDown";

export default ArrowFatDown;
