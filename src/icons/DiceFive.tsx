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
          <rect
            x="40"
            y="40"
            width="176"
            height="176"
            rx="24"
            strokeWidth="24"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle
            cx="88"
            cy="88"
            r="4"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <circle
            cx="168"
            cy="88"
            r="4"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <circle
            cx="88"
            cy="168"
            r="4"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <circle
            cx="168"
            cy="168"
            r="4"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <circle
            cx="128"
            cy="128"
            r="4"
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
          <rect x="40" y="40" width="176" height="176" rx="24" opacity="0.2" />
          <rect
            x="40"
            y="40"
            width="176"
            height="176"
            rx="24"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle
            cx="92"
            cy="92"
            r="4"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="164"
            cy="92"
            r="4"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="92"
            cy="164"
            r="4"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="164"
            cy="164"
            r="4"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="128"
            cy="128"
            r="4"
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
          <path d="M192,32H64A32.03667,32.03667,0,0,0,32,64V192a32.03667,32.03667,0,0,0,32,32H192a32.03667,32.03667,0,0,0,32-32V64A32.03667,32.03667,0,0,0,192,32ZM92,176a12,12,0,1,1,12-12A12,12,0,0,1,92,176Zm0-72a12,12,0,1,1,12-12A12,12,0,0,1,92,104Zm36,36a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm36,36a12,12,0,1,1,12-12A12,12,0,0,1,164,176Zm0-72a12,12,0,1,1,12-12A12,12,0,0,1,164,104Z" />
        </>
      );
    case "light":
      return (
        <>
          <rect
            x="40"
            y="40"
            width="176"
            height="176"
            rx="24"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle
            cx="92"
            cy="92"
            r="4"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle
            cx="164"
            cy="92"
            r="4"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle
            cx="92"
            cy="164"
            r="4"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle
            cx="164"
            cy="164"
            r="4"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle
            cx="128"
            cy="128"
            r="4"
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
          <rect
            x="40"
            y="40"
            width="176"
            height="176"
            rx="24"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle
            cx="92"
            cy="92"
            r="4"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <circle
            cx="164"
            cy="92"
            r="4"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <circle
            cx="92"
            cy="164"
            r="4"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <circle
            cx="164"
            cy="164"
            r="4"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <circle
            cx="128"
            cy="128"
            r="4"
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
          <rect
            x="40"
            y="40"
            width="176"
            height="176"
            rx="24"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle
            cx="92"
            cy="92"
            r="4"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="164"
            cy="92"
            r="4"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="92"
            cy="164"
            r="4"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="164"
            cy="164"
            r="4"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="128"
            cy="128"
            r="4"
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

const DiceFive = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

DiceFive.displayName = "DiceFive";

export default DiceFive;
