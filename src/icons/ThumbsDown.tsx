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
            d="M31.99414,48h48a0,0,0,0,1,0,0V152a0,0,0,0,1,0,0h-48a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M79.99414,152l40,80a32,32,0,0,0,32-32V176h61.87549a16,16,0,0,0,15.87644-17.98456l-12-96A16,16,0,0,0,201.86963,48H79.99414"
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
            d="M31.99414,48h48a0,0,0,0,1,0,0V152a0,0,0,0,1,0,0h-48a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8Z"
            opacity="0.2"
          />
          <path
            d="M31.99414,48h48a0,0,0,0,1,0,0V152a0,0,0,0,1,0,0h-48a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M79.99414,152l40,80a32,32,0,0,0,32-32V176h61.87549a16,16,0,0,0,15.87644-17.98456l-12-96A16,16,0,0,0,201.86963,48H79.99414"
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
          <path d="M237.68457,157.02344l-12-96.00049A24.03944,24.03944,0,0,0,201.86914,40H31.99414a16.01833,16.01833,0,0,0-16,16v88a16.01833,16.01833,0,0,0,16,16H75.0498l37.78907,75.57764A7.99869,7.99869,0,0,0,119.99414,240a40.04552,40.04552,0,0,0,40-40V184h53.875a24.00051,24.00051,0,0,0,23.81543-26.97656ZM71.99414,144h-40V56h40Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M31.99414,48h48a0,0,0,0,1,0,0V152a0,0,0,0,1,0,0h-48a8,8,0,0,1-8-8V56A8,8,0,0,1,31.99414,48Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M79.99414,152l40,80a32,32,0,0,0,32-32V176h61.87549a16,16,0,0,0,15.87644-17.98456l-12-96A16,16,0,0,0,201.86963,48H79.99414"
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
            d="M31.99414,48h48a0,0,0,0,1,0,0V152a0,0,0,0,1,0,0h-48a8,8,0,0,1-8-8V56A8,8,0,0,1,31.99414,48Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M79.99414,152l40,80a32,32,0,0,0,32-32V176h61.87549a16,16,0,0,0,15.87644-17.98456l-12-96A16,16,0,0,0,201.86963,48H79.99414"
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
            d="M31.99414,48h48a0,0,0,0,1,0,0V152a0,0,0,0,1,0,0h-48a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M79.99414,152l40,80a32,32,0,0,0,32-32V176h61.87549a16,16,0,0,0,15.87644-17.98456l-12-96A16,16,0,0,0,201.86963,48H79.99414"
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

const ThumbsDown = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ThumbsDown.displayName = "ThumbsDown";

export default ThumbsDown;
