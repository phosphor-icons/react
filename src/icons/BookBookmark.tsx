/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path
            d="M48,224a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="48 224 48 232 192 232"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="176.002 32 176.002 128 143.995 104 112.002 128 112.002 32"
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
            d="M176.00244,32v96l-32.00732-24-31.99268,24V32H72A23.99994,23.99994,0,0,0,48,56V224a23.99994,23.99994,0,0,1,24-24H208V32Z"
            opacity="0.2"
          />
          <path
            d="M48,224a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="48 224 48 232 192 232"
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
        </>
      );
    case "fill":
      return (
        <>
          <path d="M207.99951,24h-136a32.03667,32.03667,0,0,0-32,32V232a8.00039,8.00039,0,0,0,8,8h144a8,8,0,0,0,0-16h-136a16.01833,16.01833,0,0,1,16-16h136a8.00039,8.00039,0,0,0,8-8V32A8.00039,8.00039,0,0,0,207.99951,24ZM128.00244,40h56v80.001L158.394,100.7998a4.0005,4.0005,0,0,0-4.7998,0L128.00244,119.999Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M48,224a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="48 224 48 232 192 232"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="176.002 32 176.002 128 143.995 104 112.002 128 112.002 32"
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
            d="M48,224a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="48 224 48 232 192 232"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="176.002 32 176.002 128 143.995 104 112.002 128 112.002 32"
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
            d="M48,224a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="48 224 48 232 192 232"
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
