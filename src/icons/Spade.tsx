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
            d="M128,24S228,88,228,140a52.00142,52.00142,0,0,1-85.37486,39.87791L160,232H96l17.37486-52.12209A52.00142,52.00142,0,0,1,28,140C28,88,128,24,128,24Z"
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
            d="M128,24S228,88,228,140a52.00142,52.00142,0,0,1-85.37486,39.87791L160,232H96l17.37486-52.12209A52.00142,52.00142,0,0,1,28,140C28,88,128,24,128,24Z"
            opacity="0.2"
          />
          <path
            d="M128,24S228,88,228,140a52.00142,52.00142,0,0,1-85.37486,39.87791L160,232H96l17.37486-52.12209A52.00142,52.00142,0,0,1,28,140C28,88,128,24,128,24Z"
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
          <path d="M232,140a55.99915,55.99915,0,0,1-81.90137,49.64941l11.94092,35.82129A7.99929,7.99929,0,0,1,154.4502,236H101.5498a7.99966,7.99966,0,0,1-7.58935-10.53027l11.94092-35.82032A55.99915,55.99915,0,0,1,24,140C24,86.42676,121.68555,23.292,125.84375,20.63086a3.9978,3.9978,0,0,1,4.3125,0C134.31445,23.292,232,86.42676,232,140Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M128,24S228,88,228,140a52.00142,52.00142,0,0,1-85.37486,39.87791L160,232H96l17.37486-52.12209A52.00142,52.00142,0,0,1,28,140C28,88,128,24,128,24Z"
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
            d="M128,24S228,88,228,140a52.00142,52.00142,0,0,1-85.37486,39.87791L160,232H96l17.37486-52.12209A52.00142,52.00142,0,0,1,28,140C28,88,128,24,128,24Z"
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
            d="M128,24S228,88,228,140a52.00142,52.00142,0,0,1-85.37486,39.87791L160,232H96l17.37486-52.12209A52.00142,52.00142,0,0,1,28,140C28,88,128,24,128,24Z"
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

const Spade = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Spade.displayName = "Spade";

export default Spade;
