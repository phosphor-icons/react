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
          <polyline
            points="112 204 111.992 144.008 52 144"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="39.9714"
            y1="216.0286"
            x2="111.9714"
            y2="144.0286"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M160,192h48a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8V96"
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
          <polyline
            points="112 204 111.992 144.008 52 144"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="39.9714"
            y1="216.0286"
            x2="111.9714"
            y2="144.0286"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M160,192h48a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8V96"
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
          <path d="M119.99219,144.00684,120,203.999a8,8,0,1,1-16,.002l-.00537-40.68213-58.3667,58.3667a8.00018,8.00018,0,0,1-11.31348-11.31446l58.36573-58.36572L51.999,152A8,8,0,0,1,52,136h.001l59.99218.00781A8,8,0,0,1,119.99219,144.00684ZM208,32H72A16.01833,16.01833,0,0,0,56,48V96a8,8,0,0,0,16,0V48H208V184H160a8,8,0,0,0,0,16h48a16.01833,16.01833,0,0,0,16-16V48A16.01833,16.01833,0,0,0,208,32Z" />
        </>
      );
    case "light":
      return (
        <>
          <polyline
            points="112 204 111.992 144.008 52 144"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="39.9714"
            y1="216.0286"
            x2="111.9714"
            y2="144.0286"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M160,192h48a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8V96"
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
          <polyline
            points="112 204 111.992 144.008 52 144"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="39.9714"
            y1="216.0286"
            x2="111.9714"
            y2="144.0286"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M160,192h48a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8V96"
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
          <polyline
            points="112 204 111.992 144.008 52 144"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="39.9714"
            y1="216.0286"
            x2="111.9714"
            y2="144.0286"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M160,192h48a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8V96"
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

const ArrowSquareIn = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ArrowSquareIn.displayName = "ArrowSquareIn";

export default ArrowSquareIn;
