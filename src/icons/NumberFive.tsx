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
            d="M175.79745,31.991H95.8034L80.19947,128.39468a55.99791,55.99791,0,1,1,0,79.193"
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
            d="M175.79745,31.991H95.8034L80.19947,128.39468a55.99791,55.99791,0,1,1,0,79.193"
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
          <path d="M119.79785,231.989A63.5838,63.5838,0,0,1,74.542,213.24463a8.00036,8.00036,0,0,1,11.31446-11.314,47.99793,47.99793,0,1,0,0-67.87915,8.00042,8.00042,0,0,1-13.55469-6.93505L87.90625,30.71265A8.00028,8.00028,0,0,1,95.80371,23.991h79.99414a8,8,0,1,1,0,16H102.61328L91.16406,110.71875A64.01436,64.01436,0,1,1,119.79785,231.989Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M175.79745,31.991H95.8034L80.19947,128.39468a55.99791,55.99791,0,1,1,0,79.193"
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
            d="M175.79745,31.991H95.8034L80.19947,128.39468a55.99791,55.99791,0,1,1,0,79.193"
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
            d="M175.79745,31.991H95.8034L80.19947,128.39468a55.99791,55.99791,0,1,1,0,79.193"
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
