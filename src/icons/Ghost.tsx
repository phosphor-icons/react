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
          <circle cx="100" cy="116" r="16" />
          <circle cx="156" cy="116" r="16" />
          <path
            d="M216,216l-29.33333-24-29.33334,24L128,192,98.66667,216,69.33333,192,40,216V120a88,88,0,0,1,176,0Z"
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
            d="M216,216l-29.33333-24-29.33334,24L128,192,98.66667,216,69.33333,192,40,216V120a88,88,0,0,1,176,0Z"
            opacity="0.2"
          />
          <circle cx="100" cy="116" r="12" />
          <circle cx="156" cy="116" r="12" />
          <path
            d="M216,216l-29.33333-24-29.33334,24L128,192,98.66667,216,69.33333,192,40,216V120a88,88,0,0,1,176,0Z"
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
          <path d="M128,24.00006A96.10871,96.10871,0,0,0,32,120v95.99994a7.9995,7.9995,0,0,0,13.06543,6.19141l24.26758-19.855,24.26855,19.855a8,8,0,0,0,10.13184,0L128,202.33638l24.2666,19.855a7.99878,7.99878,0,0,0,10.13184,0l24.26855-19.855,24.26758,19.855A7.9995,7.9995,0,0,0,224,215.99994V120A96.10871,96.10871,0,0,0,128,24.00006ZM100,128a12,12,0,1,1,12-12A12,12,0,0,1,100,128Zm56,0a12,12,0,1,1,12-12A12,12,0,0,1,156,128Z" />
        </>
      );
    case "light":
      return (
        <>
          <circle cx="100" cy="116" r="10" />
          <circle cx="156" cy="116" r="10" />
          <path
            d="M216,216l-29.33333-24-29.33334,24L128,192,98.66667,216,69.33333,192,40,216V120a88,88,0,0,1,176,0Z"
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
          <circle cx="100" cy="116" r="8" />
          <circle cx="156" cy="116" r="8" />
          <path
            d="M216,216l-29.33333-24-29.33334,24L128,192,98.66667,216,69.33333,192,40,216V120a88,88,0,0,1,176,0Z"
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
          <circle cx="100" cy="116" r="12" />
          <circle cx="156" cy="116" r="12" />
          <path
            d="M216,216l-29.33333-24-29.33334,24L128,192,98.66667,216,69.33333,192,40,216V120a88,88,0,0,1,176,0Z"
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

const Ghost = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Ghost.displayName = "Ghost";

export default Ghost;
