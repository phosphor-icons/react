/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path
            d="M208,152c0-72-80-128-80-128S48,80,48,152a80,80,0,0,0,160,0Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M176,152a48,48,0,0,1-48,48"
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
            d="M208,152c0-72-80-128-80-128S48,80,48,152a80,80,0,0,0,160,0Z"
            opacity="0.2"
          />
          <path
            d="M208,152c0-72-80-128-80-128S48,80,48,152a80,80,0,0,0,160,0Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M176,152a48,48,0,0,1-48,48"
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
          <path d="M174.03662,55.75049a254.574,254.574,0,0,0-41.44873-38.3042,7.99885,7.99885,0,0,0-9.17578,0,254.574,254.574,0,0,0-41.44873,38.3042C54.51074,87.3208,40,120.60352,40,152a88,88,0,0,0,176,0C216,120.60352,201.48926,87.3208,174.03662,55.75049ZM128,208a8,8,0,0,1,0-16,40.04521,40.04521,0,0,0,40-40,8,8,0,0,1,16,0A56.06353,56.06353,0,0,1,128,208Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M208,152c0-72-80-128-80-128S48,80,48,152a80,80,0,0,0,160,0Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M176,152a48,48,0,0,1-48,48"
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
            d="M208,152c0-72-80-128-80-128S48,80,48,152a80,80,0,0,0,160,0Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M176,152a48,48,0,0,1-48,48"
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
            d="M208,152c0-72-80-128-80-128S48,80,48,152a80,80,0,0,0,160,0Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M176,152a48,48,0,0,1-48,48"
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

const Drop = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Drop.displayName = "Drop";

export default Drop;
