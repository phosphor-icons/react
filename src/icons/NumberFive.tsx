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
            d="M176,32H95.66955L80,128.40465a55.99871,55.99871,0,1,1,0,79.19378"
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
            d="M176,32H95.66955L80,128.40465a55.99871,55.99871,0,1,1,0,79.19378"
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
          <path d="M165.17383,122.73535a64.11724,64.11724,0,0,1-90.81836,90.53174,7.99968,7.99968,0,1,1,11.28906-11.3374,47.99883,47.99883,0,1,0,0-67.85645,7.99971,7.99971,0,0,1-13.541-6.95215L87.77344,30.7168A8.00076,8.00076,0,0,1,95.66992,24H176a8,8,0,0,1,0,16H102.47461l-11.501,70.75537a64.53171,64.53171,0,0,1,74.2002,11.98Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M176,32H95.66955L80,128.40465a55.99871,55.99871,0,1,1,0,79.19378"
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
            d="M176,32H95.66955L80,128.40465a55.99871,55.99871,0,1,1,0,79.19378"
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
            d="M176,32H95.66955L80,128.40465a55.99871,55.99871,0,1,1,0,79.19378"
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

const NumberFive = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

NumberFive.displayName = "NumberFive";

export default NumberFive;
