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
            d="M184,184H69.81818L41.92162,30.56892A8,8,0,0,0,34.05066,24H16"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <circle
            cx="80"
            cy="204"
            r="20"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <circle
            cx="184"
            cy="204"
            r="20"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M62.54543,144H188.10132a16,16,0,0,0,15.74192-13.13783L216,64H48"
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
            d="M62.54543,144H188.10132a16,16,0,0,0,15.74192-13.13783L216,64H48Z"
            opacity="0.2"
          />
          <path
            d="M184,184H69.81818L41.92162,30.56892A8,8,0,0,0,34.05066,24H16"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="80"
            cy="204"
            r="20"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="184"
            cy="204"
            r="20"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M62.54543,144H188.10132a16,16,0,0,0,15.74192-13.13783L216,64H48"
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
          <path d="M223.87109,65.43115l-12.15722,66.86231A23.98711,23.98711,0,0,1,188.10156,152H72.13135l4.36377,24H184a24.01161,24.01161,0,1,1-22.624,16H102.624a24.00309,24.00309,0,1,1-40.85986-7.57666L34.05078,32H16a8,8,0,0,1,0-16H34.05078A15.9918,15.9918,0,0,1,49.793,29.13818L54.67676,56H216a8.00076,8.00076,0,0,1,7.87109,9.43115Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M184,184H69.81818L41.92162,30.56892A8,8,0,0,0,34.05066,24H16"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle
            cx="80"
            cy="204"
            r="20"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle
            cx="184"
            cy="204"
            r="20"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M62.54543,144H188.10132a16,16,0,0,0,15.74192-13.13783L216,64H48"
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
            d="M184,184H69.81818L41.92162,30.56892A8,8,0,0,0,34.05066,24H16"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <circle
            cx="80"
            cy="204"
            r="20"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <circle
            cx="184"
            cy="204"
            r="20"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M62.54543,144H188.10132a16,16,0,0,0,15.74192-13.13783L216,64H48"
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
            d="M184,184H69.81818L41.92162,30.56892A8,8,0,0,0,34.05066,24H16"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="80"
            cy="204"
            r="20"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="184"
            cy="204"
            r="20"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M62.54543,144H188.10132a16,16,0,0,0,15.74192-13.13783L216,64H48"
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

const ShoppingCart = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ShoppingCart.displayName = "ShoppingCart";

export default ShoppingCart;
