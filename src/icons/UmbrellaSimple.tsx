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
            d="M176,200a24,24,0,0,1-48,0V136"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M32.33457,136a8.021,8.021,0,0,1-7.97506-8.70945,104.00633,104.00633,0,0,1,207.281,0A8.021,8.021,0,0,1,223.66543,136Z"
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
            d="M32.33457,136a8.021,8.021,0,0,1-7.97506-8.70945,104.00633,104.00633,0,0,1,207.281,0A8.021,8.021,0,0,1,223.66543,136Z"
            opacity="0.2"
          />
          <path
            d="M176,200a24,24,0,0,1-48,0V136"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M32.33457,136a8.021,8.021,0,0,1-7.97506-8.70945,104.00633,104.00633,0,0,1,207.281,0A8.021,8.021,0,0,1,223.66543,136Z"
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
          <path d="M235.42676,138.83984A16.02871,16.02871,0,0,1,223.66553,144H136v56a16,16,0,0,0,32,0,8,8,0,0,1,16,0,32,32,0,0,1-64,0V144H32.33447a16.02123,16.02123,0,0,1-15.94775-17.37012,112.00665,112.00665,0,0,1,223.22656,0A16.11107,16.11107,0,0,1,235.42676,138.83984Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M176,200a24,24,0,0,1-48,0V136"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M32.33457,136a8.021,8.021,0,0,1-7.97506-8.70945,104.00633,104.00633,0,0,1,207.281,0A8.021,8.021,0,0,1,223.66543,136Z"
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
            d="M176,200a24,24,0,0,1-48,0V136"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M32.33457,136a8.021,8.021,0,0,1-7.97506-8.70945,104.00633,104.00633,0,0,1,207.281,0A8.021,8.021,0,0,1,223.66543,136Z"
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
            d="M176,200a24,24,0,0,1-48,0V136"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M32.33457,136a8.021,8.021,0,0,1-7.97506-8.70945,104.00633,104.00633,0,0,1,207.281,0A8.021,8.021,0,0,1,223.66543,136Z"
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

const UmbrellaSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

UmbrellaSimple.displayName = "UmbrellaSimple";

export default UmbrellaSimple;
