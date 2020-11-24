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
          <polygon
            points="164 128 108 92 108 164 164 128"
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
            d="M128,32a96,96,0,1,0,96,96A95.99975,95.99975,0,0,0,128,32ZM112,160V96l48,32Z"
            opacity="0.2"
          />
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeMiterlimit="10"
            strokeWidth="16"
          />
          <polygon
            points="160 128 112 96 112 160 160 128"
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
          <path d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm36.4375,110.65625-48,32A7.99612,7.99612,0,0,1,104,160V96a7.99612,7.99612,0,0,1,12.4375-6.65625l48,32a7.99959,7.99959,0,0,1,0,13.3125Z" />
        </>
      );
    case "light":
      return (
        <>
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
          <polygon
            points="160 128 112 96 112 160 160 128"
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
          <polygon
            points="160 128 112 96 112 160 160 128"
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
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeMiterlimit="10"
            strokeWidth="16"
          />
          <polygon
            points="160 128 112 96 112 160 160 128"
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

const PlayCircle = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

PlayCircle.displayName = "PlayCircle";

export default PlayCircle;
