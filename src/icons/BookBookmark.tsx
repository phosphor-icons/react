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
            points="172.002 32 172.002 128 139.995 104 108.002 128 108.002 32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M48.00244,208a24,24,0,0,1,24-24h136V32h-136a24,24,0,0,0-24,24Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="48.002 208 48.002 224 192.002 224"
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
            d="M176.00244,32v96l-32.00732-24-31.99268,24V32h-40a23.99994,23.99994,0,0,0-24,24V216a23.99994,23.99994,0,0,1,24-24h136V32Z"
            opacity="0.2"
          />
          <polyline
            points="48.002 216 48.002 224 192.002 224"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="176.002 32 176.002 128 143.995 104 112.002 128 112.002 32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M48.00244,216a24,24,0,0,1,24-24h136V32h-136a24,24,0,0,0-24,24Z"
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
          <path d="M208.00244,24h-136a32.03667,32.03667,0,0,0-32,32V224a8.00039,8.00039,0,0,0,8,8h144a8,8,0,0,0,0-16h-136a16.01833,16.01833,0,0,1,16-16h136a8.00039,8.00039,0,0,0,8-8V32A8.00039,8.00039,0,0,0,208.00244,24Zm-24,96.001L158.394,100.7998a4.0005,4.0005,0,0,0-4.7998,0L128.00244,119.999V40h56Z" />
        </>
      );
    case "light":
      return (
        <>
          <polyline
            points="176.002 32 176.002 128 143.995 104 112.002 128 112.002 32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M48.00244,216a24,24,0,0,1,24-24h136V32h-136a24,24,0,0,0-24,24Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="48.002 216 48.002 224 192.002 224"
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
            points="176.002 32 176.002 128 143.995 104 112.002 128 112.002 32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M48.00244,216a24,24,0,0,1,24-24h136V32h-136a24,24,0,0,0-24,24Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="48.002 216 48.002 224 192.002 224"
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
            points="176.002 32 176.002 128 143.995 104 112.002 128 112.002 32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M48.00244,216a24,24,0,0,1,24-24h136V32h-136a24,24,0,0,0-24,24Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="48.002 216 48.002 224 192.002 224"
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

const BookBookmark = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

BookBookmark.displayName = "BookBookmark";

export default BookBookmark;
