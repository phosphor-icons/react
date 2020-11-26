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
          <line
            x1="88"
            y1="64"
            x2="216"
            y2="64"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="88.00614"
            y1="128"
            x2="216"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="88.00614"
            y1="192"
            x2="216"
            y2="192"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <circle cx="44" cy="128" r="16" />
          <circle cx="44" cy="64" r="16" />
          <circle cx="44" cy="192" r="16" />
        </>
      );
    case "duotone":
      return (
        <>
          <line
            x1="88"
            y1="64"
            x2="216"
            y2="64"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="88.00614"
            y1="128"
            x2="216"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="88.00614"
            y1="192"
            x2="216"
            y2="192"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle cx="44" cy="64" r="12" />
          <circle cx="44" cy="128" r="12" />
          <circle cx="44" cy="192" r="12" />
        </>
      );
    case "fill":
      return (
        <>
          <path d="M80,64a8.00008,8.00008,0,0,1,8-8H216a8,8,0,0,1,0,16H88A8.00008,8.00008,0,0,1,80,64Zm136,56H88.00586a8,8,0,1,0,0,16H216a8,8,0,0,0,0-16Zm0,64H88.00586a8,8,0,1,0,0,16H216a8,8,0,0,0,0-16ZM44,116a12,12,0,1,0,12,12A12.01343,12.01343,0,0,0,44,116Zm0-64A12,12,0,1,0,56,64,12.01343,12.01343,0,0,0,44,52Zm0,128a12,12,0,1,0,12,12A12.01343,12.01343,0,0,0,44,180Z" />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="88"
            y1="64"
            x2="216"
            y2="64"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="88.00614"
            y1="128"
            x2="216"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="88.00614"
            y1="192"
            x2="216"
            y2="192"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle cx="44" cy="64" r="10" />
          <circle cx="44" cy="192" r="10" />
          <circle cx="44" cy="128" r="10" />
        </>
      );
    case "thin":
      return (
        <>
          <line
            x1="88"
            y1="64"
            x2="216"
            y2="64"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="88.00614"
            y1="128"
            x2="216"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="88.00614"
            y1="192"
            x2="216"
            y2="192"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <circle cx="44" cy="128" r="8" />
          <circle cx="44" cy="64" r="8" />
          <circle cx="44" cy="192" r="8" />
        </>
      );
    case "regular":
      return (
        <>
          <line
            x1="88"
            y1="64"
            x2="216"
            y2="64"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="88.00614"
            y1="128"
            x2="216"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="88.00614"
            y1="192"
            x2="216"
            y2="192"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle cx="44" cy="64" r="12" />
          <circle cx="44" cy="128" r="12" />
          <circle cx="44" cy="192" r="12" />
        </>
      );
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const ListBullets = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ListBullets.displayName = "ListBullets";

export default ListBullets;
