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
            d="M48,200s40-8,48-32c0,0-64-24-48-112,0,0,32,40,80,48V88.00288a40.00668,40.00668,0,0,1,76.67148-16.00327L240,72l-32,32c0,56-40,112-112,112C64,216,48,200,48,200Z"
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
          <g opacity="0.2">
            <path d="M48,200s40-8,48-32c0,0-64-24-48-112,0,0,32,40,80,48V88.00288a40.00668,40.00668,0,0,1,76.67148-16.00327L240,72l-32,32c0,56-40,112-112,112C64,216,48,200,48,200Z" />
          </g>
          <path
            d="M48,200s40-8,48-32c0,0-64-24-48-112,0,0,32,40,80,48V88.00288a40.00668,40.00668,0,0,1,76.67148-16.00327L240,72l-32,32c0,56-40,112-112,112C64,216,48,200,48,200Z"
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
          <path d="M245.65723,77.65674,215.9541,107.35938c-.79785,29.35644-12.00293,57.9873-31.02148,79.00781C162.65723,210.98682,131.90527,224,96,224c-34.91211,0-52.9082-17.59424-53.65723-18.34326a8.00012,8.00012,0,0,1,4.07911-13.49951c8.53808-1.7295,29.73144-8.46534,38.75-20.60547a92.9624,92.9624,0,0,1-25.34766-21.46631c-25.0918-30.46924-24.56006-68.75977-19.69531-95.5166a8.00018,8.00018,0,0,1,14.11816-3.56641C54.522,51.34424,80.81543,83.55713,120,94.08105V88.00293a48.31855,48.31855,0,0,1,48.6084-47.99951,48.11329,48.11329,0,0,1,40.96875,23.99609L240,64a8.0001,8.0001,0,0,1,5.65723,13.65674Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M48,200s40-8,48-32c0,0-64-24-48-112,0,0,32,40,80,48V88.00288a40.00668,40.00668,0,0,1,76.67148-16.00327L240,72l-32,32c0,56-40,112-112,112C64,216,48,200,48,200Z"
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
            d="M48,200s40-8,48-32c0,0-64-24-48-112,0,0,32,40,80,48V88.00288a40.00668,40.00668,0,0,1,76.67148-16.00327L240,72l-32,32c0,56-40,112-112,112C64,216,48,200,48,200Z"
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
            d="M48,200s40-8,48-32c0,0-64-24-48-112,0,0,32,40,80,48V88.00288a40.00668,40.00668,0,0,1,76.67148-16.00327L240,72l-32,32c0,56-40,112-112,112C64,216,48,200,48,200Z"
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

const TwitterLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

TwitterLogo.displayName = "TwitterLogo";

export default TwitterLogo;
