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
            d="M71.91751,65.35733C56.47932,88.63059,43.88159,115.21513,43.88159,140a84,84,0,0,0,168,0c0-52-36-92-65.17642-121.12849l-.00087.00081L111.88159,92l-39.963-26.642Z"
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
            d="M71.91751,65.35733C56.47932,88.63059,43.88159,115.21513,43.88159,140a84,84,0,0,0,168,0c0-52-36-92-65.17642-121.12849l-.00087.00081L111.88159,92l-39.963-26.642Z"
            opacity="0.2"
          />
          <path
            d="M71.91751,65.35733C56.47932,88.63059,43.88159,115.21513,43.88159,140a84,84,0,0,0,168,0c0-52-36-92-65.17642-121.12849l-.00087.00081L111.88159,92l-39.963-26.642Z"
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
          <path d="M219.88159,140a92,92,0,0,1-184,0c0-23.085,9.88135-49.68652,29.36963-79.06445a7.99925,7.99925,0,0,1,11.104-2.23438L108.6311,80.21875l30.85059-64.78613a7.99863,7.99863,0,0,1,12.87451-2.22168c14.74365,14.71777,31.57861,32.57226,44.65332,53.39355C212.40014,91.11426,219.88159,115.12207,219.88159,140Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M71.91751,65.35733C56.47932,88.63059,43.88159,115.21513,43.88159,140a84,84,0,0,0,168,0c0-52-36-92-65.17642-121.12849l-.00087.00081L111.88159,92l-39.963-26.642Z"
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
            d="M71.91751,65.35733C56.47932,88.63059,43.88159,115.21513,43.88159,140a84,84,0,0,0,168,0c0-52-36-92-65.17642-121.12849l-.00087.00081L111.88159,92l-39.963-26.642Z"
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
            d="M71.91751,65.35733C56.47932,88.63059,43.88159,115.21513,43.88159,140a84,84,0,0,0,168,0c0-52-36-92-65.17642-121.12849l-.00087.00081L111.88159,92l-39.963-26.642Z"
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

const FireSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

FireSimple.displayName = "FireSimple";

export default FireSimple;
