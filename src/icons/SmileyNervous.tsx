/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle cx="92" cy="108" r="16" />
          <circle cx="164" cy="108" r="16" />
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="80 168 96 152 112 168 128 152 144 168 160 152 176 168"
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
          <circle cx="128" cy="128" r="96" opacity="0.2" />
          <circle cx="92" cy="108" r="12" />
          <circle cx="164" cy="108" r="12" />
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeMiterlimit="10"
            strokeWidth="16"
          />
          <polyline
            points="80 168 96 152 112 168 128 152 144 168 160 152 176 168"
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
          <path d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm36,72a12,12,0,1,1-12,12A12.0006,12.0006,0,0,1,164,96ZM92,96a12,12,0,1,1-12,12A12.0006,12.0006,0,0,1,92,96Zm89.65625,77.65625a7.99708,7.99708,0,0,1-11.3125,0L160,163.3125l-10.34375,10.34375a7.99708,7.99708,0,0,1-11.3125,0L128,163.3125l-10.34375,10.34375a7.99708,7.99708,0,0,1-11.3125,0L96,163.3125,85.65625,173.65625a7.99915,7.99915,0,0,1-11.3125-11.3125l16-16a7.99708,7.99708,0,0,1,11.3125,0L112,156.6875l10.34375-10.34375a7.99708,7.99708,0,0,1,11.3125,0L144,156.6875l10.34375-10.34375a7.99708,7.99708,0,0,1,11.3125,0l16,16A7.99708,7.99708,0,0,1,181.65625,173.65625Z" />
        </>
      );
    case "light":
      return (
        <>
          <circle cx="92" cy="108" r="9" />
          <circle cx="164" cy="108" r="9" />
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="80 168 96 152 112 168 128 152 144 168 160 152 176 168"
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
          <circle cx="92" cy="108" r="6" />
          <circle cx="164" cy="108" r="6" />
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="80 168 96 152 112 168 128 152 144 168 160 152 176 168"
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
          <circle cx="92" cy="108" r="12" />
          <circle cx="164" cy="108" r="12" />
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeMiterlimit="10"
            strokeWidth="16"
          />
          <polyline
            points="80 168 96 152 112 168 128 152 144 168 160 152 176 168"
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

const SmileyNervous = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <rect width="256" height="256" fill="none" />
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>
  );
});

SmileyNervous.displayName = "SmileyNervous";

export default SmileyNervous;
