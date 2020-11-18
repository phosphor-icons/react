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
            d="M83.77208,61.31623a48.01243,48.01243,0,1,1,84.03027,45.521L80,223.99991v-.01149h96"
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
            d="M83.77208,61.31623a48.01243,48.01243,0,1,1,84.03027,45.521L80,223.99991v-.01149h96"
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
          <path d="M79.999,232.00049a8.00363,8.00363,0,0,1-6.26757-12.97534l87.54687-116.82141a39.99539,39.99539,0,0,0-25.208-61.39087,40.65956,40.65956,0,0,0-16.14062,0,39.72508,39.72508,0,0,0-14.28809,6.01379,40.13954,40.13954,0,0,0-14.501,17.60474A7.99961,7.99961,0,1,1,76.4043,58.20117a55.984,55.984,0,0,1,40.31836-33.0636,56.72449,56.72449,0,0,1,22.55468,0,55.7479,55.7479,0,0,1,20.03809,8.431A56.10872,56.10872,0,0,1,179.5957,58.20117a55.65429,55.65429,0,0,1,3.2666,10.52307,56.45745,56.45745,0,0,1,0,22.55384,55.79161,55.79161,0,0,1-8.42968,20.03662q-.10987.16278-.22852.32019L96.001,215.98853H176a8,8,0,0,1,0,16H80.43555Q80.21729,232.00061,79.999,232.00049Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M83.77208,61.31623a48.01243,48.01243,0,1,1,84.03027,45.521L80,223.99991v-.01149h96"
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
            d="M83.77208,61.31623a48.01243,48.01243,0,1,1,84.03027,45.521L80,223.99991v-.01149h96"
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
            d="M83.77208,61.31623a48.01243,48.01243,0,1,1,84.03027,45.521L80,223.99991v-.01149h96"
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

const NumberTwo = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

NumberTwo.displayName = "NumberTwo";

export default NumberTwo;
