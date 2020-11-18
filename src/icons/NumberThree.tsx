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
            d="M79.99366,31.98432h96l-55.98732,80.01559a56,56,0,1,1-39.598,95.598"
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
            d="M79.99366,31.98432h96l-55.98732,80.01559a56,56,0,1,1-39.598,95.598"
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
          <path d="M120.00586,232A63.58111,63.58111,0,0,1,74.751,213.25464a8.00018,8.00018,0,1,1,11.31445-11.31348A48,48,0,1,0,120.00586,120a7.99983,7.99983,0,0,1-6.55469-12.58643l47.18164-67.42919H79.99414a8,8,0,0,1,0-16h96a7.99982,7.99982,0,0,1,6.55469,12.58642l-48.28906,69.0127A64.01232,64.01232,0,0,1,120.00586,232Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M79.99366,31.98432h96l-55.98732,80.01559a56,56,0,1,1-39.598,95.598"
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
            d="M79.99366,31.98432h96l-55.98732,80.01559a56,56,0,1,1-39.598,95.598"
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
            d="M79.99366,31.98432h96l-55.98732,80.01559a56,56,0,1,1-39.598,95.598"
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
