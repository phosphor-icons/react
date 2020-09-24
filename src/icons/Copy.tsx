/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <rect width="255.99316" height="255.99316" fill="none" />
          <polyline
            points="168 167.993 216 167.993 216 39.993 88 39.993 88 87.993"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <rect
            x="39.99902"
            y="87.99414"
            width="128"
            height="128"
            strokeWidth="24"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      );
    case "duotone":
      return (
        <>
          <rect width="255.99316" height="255.99316" fill="none" />
          <polygon
            points="168 87.993 168 167.993 216 167.993 216 39.993 88 39.993 88 87.993 168 87.993"
            opacity="0.2"
          />
          <polyline
            points="168 167.993 216 167.993 216 39.993 88 39.993 88 87.993"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="39.99902"
            y="87.99414"
            width="128"
            height="128"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      );
    case "fill":
      return (
        <>
          <rect width="255.99316" height="255.99316" fill="none" />
          <rect x="32.00684" y="79.99414" width="144" height="144" rx="8" />
          <path d="M192.00684,79.99414v96h24a7.9954,7.9954,0,0,0,8-8v-128a7.99541,7.99541,0,0,0-8-8h-128a7.9954,7.9954,0,0,0-8,8v24h96A16.0008,16.0008,0,0,1,192.00684,79.99414Z" />
        </>
      );
    case "light":
      return (
        <>
          <rect width="255.99316" height="255.99316" fill="none" />
          <polyline
            points="168 167.993 216 167.993 216 39.993 88 39.993 88 87.993"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <rect
            x="39.99902"
            y="87.99414"
            width="128"
            height="128"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      );
    case "thin":
      return (
        <>
          <rect width="255.99316" height="255.99316" fill="none" />
          <polyline
            points="168 167.993 216 167.993 216 39.993 88 39.993 88 87.993"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <rect
            x="39.99902"
            y="87.99414"
            width="128"
            height="128"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      );
    case "regular":
      return (
        <>
          <rect width="255.99316" height="255.99316" fill="none" />
          <polyline
            points="168 167.993 216 167.993 216 39.993 88 39.993 88 87.993"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="39.99902"
            y="87.99414"
            width="128"
            height="128"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
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

const Copy = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Copy.displayName = "Copy";

export default Copy;
