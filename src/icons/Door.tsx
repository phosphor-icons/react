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
            x1="24"
            y1="224"
            x2="232"
            y2="224"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <circle cx="156" cy="128" r="16" />
        </>
      );
    case "duotone":
      return (
        <>
          <path
            d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224Z"
            opacity="0.2"
          />
          <line
            x1="24"
            y1="224"
            x2="232"
            y2="224"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle cx="156" cy="128" r="12" />
        </>
      );
    case "fill":
      return (
        <>
          <path d="M232,216H208V40a16.01833,16.01833,0,0,0-16-16H64A16.01833,16.01833,0,0,0,48,40V216H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm-68-76a12,12,0,1,1,12-12A12,12,0,0,1,164,140Z" />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="24"
            y1="224"
            x2="232"
            y2="224"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle cx="156" cy="128" r="10" />
        </>
      );
    case "thin":
      return (
        <>
          <line
            x1="24"
            y1="224"
            x2="232"
            y2="224"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <circle cx="156" cy="128" r="8" />
        </>
      );
    case "regular":
      return (
        <>
          <line
            x1="24"
            y1="224"
            x2="232"
            y2="224"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M56,224V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V224"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle cx="156" cy="128" r="12" />
        </>
      );
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Door = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Door.displayName = "Door";

export default Door;
