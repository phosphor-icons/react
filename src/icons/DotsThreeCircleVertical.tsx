/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
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
          <circle cx="128" cy="128" r="16" />
          <circle cx="128" cy="80" r="16" />
          <circle cx="128" cy="176" r="16" />
        </>
      );
    case "duotone":
      return (
        <>
          <circle cx="128" cy="128" r="96" opacity="0.2" />
          <circle cx="128" cy="128" r="12" />
          <circle cx="128" cy="80" r="12" />
          <circle cx="128" cy="176" r="12" />
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeMiterlimit="10"
            strokeWidth="16"
          />
        </>
      );
    case "fill":
      return (
        <>
          <path d="M232,128A104,104,0,1,0,128,232,104.12041,104.12041,0,0,0,232,128ZM116,80a12,12,0,1,1,12,12A12.0006,12.0006,0,0,1,116,80Zm0,48a12,12,0,1,1,12,12A12.0006,12.0006,0,0,1,116,128Zm0,48a12,12,0,1,1,12,12A12.0006,12.0006,0,0,1,116,176Z" />
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
          <circle cx="128" cy="128" r="9" />
          <circle cx="128" cy="80" r="9" />
          <circle cx="128" cy="176" r="9" />
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
          <circle cx="128" cy="128" r="6" />
          <circle cx="128" cy="80" r="6" />
          <circle cx="128" cy="176" r="6" />
        </>
      );
    case "regular":
      return (
        <>
          <circle cx="128" cy="128" r="12" />
          <circle cx="128" cy="80" r="12" />
          <circle cx="128" cy="176" r="12" />
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeMiterlimit="10"
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

const DotsThreeCircleVertical = forwardRef<SVGSVGElement, IconProps>(
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

DotsThreeCircleVertical.displayName = "DotsThreeCircleVertical";

export default DotsThreeCircleVertical;
