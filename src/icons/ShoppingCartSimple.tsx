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
          <circle cx="80" cy="216" r="20" />
          <circle cx="184" cy="216" r="20" />
          <path
            d="M42.28575,72H221.71429l-24.113,84.39554A16,16,0,0,1,182.21689,168H81.78311a16,16,0,0,1-15.38439-11.60446L32.51492,37.80223A8,8,0,0,0,24.82273,32H12"
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
            d="M42.28575,72H221.71429l-26.39873,92.39554A16,16,0,0,1,179.93118,176H84.06882a16,16,0,0,1-15.38438-11.60446Z"
            opacity="0.2"
          />
          <circle cx="80" cy="216" r="16" />
          <circle cx="184" cy="216" r="16" />
          <path
            d="M42.28575,72H221.71429l-26.39873,92.39554A16,16,0,0,1,179.93118,176H84.06882a16,16,0,0,1-15.38438-11.60446L32.51492,37.80223A8,8,0,0,0,24.82273,32H8"
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
          <path d="M96,216a16,16,0,1,1-16-16A16.00016,16.00016,0,0,1,96,216Zm88-16a16,16,0,1,0,16,16A16.00016,16.00016,0,0,0,184,200ZM228.10059,67.18262A7.99866,7.99866,0,0,0,221.71387,64H48.32031L40.207,35.604A16.06984,16.06984,0,0,0,24.82227,24H8A8,8,0,0,0,8,40H24.82227l9.73046,34.05469c.02637.09863.05372.19677.084.29443l26.35547,92.24365A24.10087,24.10087,0,0,0,84.06836,184h95.86328a24.101,24.101,0,0,0,23.07617-17.40674l26.39844-92.39551A8.00023,8.00023,0,0,0,228.10059,67.18262Z" />
        </>
      );
    case "light":
      return (
        <>
          <circle cx="80" cy="216" r="14" />
          <circle cx="184" cy="216" r="14" />
          <path
            d="M42.28575,72H221.71429l-26.39873,92.39554A16,16,0,0,1,179.93118,176H84.06882a16,16,0,0,1-15.38438-11.60446L32.51492,37.80223A8,8,0,0,0,24.82273,32H8"
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
          <circle cx="80" cy="216" r="12" />
          <circle cx="184" cy="216" r="12" />
          <path
            d="M42.28575,72H221.71429l-26.39873,92.39554A16,16,0,0,1,179.93118,176H84.06882a16,16,0,0,1-15.38438-11.60446L32.51492,37.80223A8,8,0,0,0,24.82273,32H8"
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
          <circle cx="80" cy="216" r="16" />
          <circle cx="184" cy="216" r="16" />
          <path
            d="M42.28575,72H221.71429l-26.39873,92.39554A16,16,0,0,1,179.93118,176H84.06882a16,16,0,0,1-15.38438-11.60446L32.51492,37.80223A8,8,0,0,0,24.82273,32H8"
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

const ShoppingCartSimple = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
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
  }
);

ShoppingCartSimple.displayName = "ShoppingCartSimple";

export default ShoppingCartSimple;
