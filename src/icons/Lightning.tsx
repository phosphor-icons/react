/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <polygon
            points="112 239.992 112 143.992 64 143.992 144 15.992 144 111.992 192 111.992 112 239.992"
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
          <rect width="256" height="256" fill="none" />
          <polygon
            points="112 239.992 112 143.992 64 143.992 144 15.992 144 111.992 192 111.992 112 239.992"
            opacity="0.2"
          />
          <polygon
            points="112 239.992 112 143.992 64 143.992 144 15.992 144 111.992 192 111.992 112 239.992"
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
          <rect width="256" height="256" fill="none" />
          <path d="M198.99805,108.11719a8.0083,8.0083,0,0,0-7-4.125h-40v-88a7.9975,7.9975,0,0,0-14.78125-4.23438l-80,128a7.99394,7.99394,0,0,0,6.78125,12.23438h40v88a8.00635,8.00635,0,0,0,5.79687,7.6875,7.62249,7.62249,0,0,0,2.20313.3125,7.97106,7.97106,0,0,0,6.78125-3.76563l80-128A7.97859,7.97859,0,0,0,198.99805,108.11719Z" />
        </>
      );
    case "light":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <polygon
            points="112 239.992 112 143.992 64 143.992 144 15.992 144 111.992 192 111.992 112 239.992"
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
          <rect width="256" height="256" fill="none" />
          <polygon
            points="112 239.992 112 143.992 64 143.992 144 15.992 144 111.992 192 111.992 112 239.992"
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
          <rect width="256" height="256" fill="none" />
          <polygon
            points="112 239.992 112 143.992 64 143.992 144 15.992 144 111.992 192 111.992 112 239.992"
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

const Lightning = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { color, size, weight, mirrored, ...rest } = props;
  const {
    color: contextColor,
    size: contextSize,
    weight: contextWeight,
    mirrored: contextMirrored,
    ...contextRest
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
      {...contextRest}
      {...rest}
    >
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>
  );
});

Lightning.displayName = "Lightning";

export default Lightning;
