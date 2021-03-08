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
          <circle cx="180" cy="144" r="16" />
          <path
            d="M40,68V192a16,16,0,0,0,16,16H216a8,8,0,0,0,8-8V96a8,8,0,0,0-8-8H60.47932c-10.84468,0-20.081-8.43286-20.46634-19.27069A20.00049,20.00049,0,0,1,60,48H192"
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
            d="M40,192a16,16,0,0,0,16,16H216a8,8,0,0,0,8-8V88a8,8,0,0,0-8-8H56A16,16,0,0,1,40,64Z"
            opacity="0.2"
          />
          <path
            d="M40,64V192a16,16,0,0,0,16,16H216a8,8,0,0,0,8-8V88a8,8,0,0,0-8-8H56A16,16,0,0,1,40,64v0A16,16,0,0,1,56,48H192"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle cx="180" cy="144" r="12" />
        </>
      );
    case "fill":
      return (
        <>
          <path d="M216,72H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24.0275,24.0275,0,0,0,32,64V192a24.0275,24.0275,0,0,0,24,24H216a16.01833,16.01833,0,0,0,16-16V88A16.01833,16.01833,0,0,0,216,72Zm-36,84a12,12,0,1,1,12-12A12,12,0,0,1,180,156Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M40,64V192a16,16,0,0,0,16,16H216a8,8,0,0,0,8-8V88a8,8,0,0,0-8-8H56A16,16,0,0,1,40,64v0A16,16,0,0,1,56,48H192"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle cx="180" cy="144" r="10" />
        </>
      );
    case "thin":
      return (
        <>
          <path
            d="M40,64V192a16,16,0,0,0,16,16H216a8,8,0,0,0,8-8V88a8,8,0,0,0-8-8H56A16,16,0,0,1,40,64v0A16,16,0,0,1,56,48H192"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <circle cx="180" cy="144" r="8" />
        </>
      );
    case "regular":
      return (
        <>
          <path
            d="M40,64V192a16,16,0,0,0,16,16H216a8,8,0,0,0,8-8V88a8,8,0,0,0-8-8H56A16,16,0,0,1,40,64v0A16,16,0,0,1,56,48H192"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle cx="180" cy="144" r="12" />
        </>
      );
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Wallet = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Wallet.displayName = "Wallet";

export default Wallet;
