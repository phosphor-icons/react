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
            d="M80,32h95.98733l-55.97994,80.0091a55.99545,55.99545,0,1,1-39.59275,95.59021"
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
            d="M80,32h95.98733l-55.97994,80.0091a55.99545,55.99545,0,1,1-39.59275,95.59021"
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
          <path d="M184,168.00488a63.99178,63.99178,0,0,1-109.24219,45.251,8,8,0,0,1,11.31446-11.313,47.994,47.994,0,1,0,33.93554-81.93408,7.99947,7.99947,0,0,1-6.55469-12.58594L160.626,40H80a8,8,0,0,1,0-16h95.9873A7.99946,7.99946,0,0,1,182.542,36.58594l-48.28125,69.00683A64.055,64.055,0,0,1,184,168.00488Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M80,32h95.98733l-55.97994,80.0091a55.99545,55.99545,0,1,1-39.59275,95.59021"
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
            d="M80,32h95.98733l-55.97994,80.0091a55.99545,55.99545,0,1,1-39.59275,95.59021"
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
            d="M80,32h95.98733l-55.97994,80.0091a55.99545,55.99545,0,1,1-39.59275,95.59021"
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

const NumberThree = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

NumberThree.displayName = "NumberThree";

export default NumberThree;
