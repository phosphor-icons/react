/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <polyline
            points="24.002 128 56.002 128 96.002 40 160.002 208 200.002 128 232.002 128"
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
          <polyline
            points="24.002 128 56.002 128 96.002 40 160.002 208 200.002 128 232.002 128"
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
          <path d="M160.00439,216c-.13378,0-.2666-.00342-.40039-.00977a7.99906,7.99906,0,0,1-7.07714-5.14209L95.35205,60.7644,63.28564,131.3103A8.00165,8.00165,0,0,1,56.00244,136h-32a8,8,0,0,1,0-16H50.85107L88.71924,36.6897a7.99988,7.99988,0,0,1,14.75879.4624l57.51562,150.97729,31.85352-63.707A7.99979,7.99979,0,0,1,200.00244,120h32a8,8,0,0,1,0,16H204.94678l-37.78907,75.57764A7.99952,7.99952,0,0,1,160.00439,216Z" />
        </>
      );
    case "light":
      return (
        <>
          <polyline
            points="24.002 128 56.002 128 96.002 40 160.002 208 200.002 128 232.002 128"
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
          <polyline
            points="24.002 128 56.002 128 96.002 40 160.002 208 200.002 128 232.002 128"
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
          <polyline
            points="24.002 128 56.002 128 96.002 40 160.002 208 200.002 128 232.002 128"
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

const Activity = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Activity.displayName = "Activity";

export default Activity;
