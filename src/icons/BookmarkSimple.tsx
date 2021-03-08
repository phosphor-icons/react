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
            d="M191.98242,224,127.975,184l-63.9926,40V48a8,8,0,0,1,8-8h112a8,8,0,0,1,8,8Z"
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
            d="M191.9707,224l-64.0074-40L63.9707,224V48a8,8,0,0,1,8-8h112a8,8,0,0,1,8,8Z"
            opacity="0.2"
          />
          <path
            d="M191.9707,224l-64.0074-40L63.9707,224V48a8,8,0,0,1,8-8h112a8,8,0,0,1,8,8Z"
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
          <path d="M183.97656,32h-112a16.01833,16.01833,0,0,0-16,16V224a8.00043,8.00043,0,0,0,12.24024,6.78418l59.75293-37.35059,59.76709,37.35059A8,8,0,0,0,199.97656,224V48A16.01833,16.01833,0,0,0,183.97656,32Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M191.98828,224l-64.0074-40-63.9926,40V48a8,8,0,0,1,8-8h112a8,8,0,0,1,8,8Z"
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
            d="M191.99414,224l-64.0074-40-63.9926,40V48a8,8,0,0,1,8-8h112a8,8,0,0,1,8,8Z"
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
            d="M192,224l-64.0074-40L64,224V48a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8Z"
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

const BookmarkSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

BookmarkSimple.displayName = "BookmarkSimple";

export default BookmarkSimple;
