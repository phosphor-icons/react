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
            x1="16"
            y1="136"
            x2="240"
            y2="136"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="24 72 76 200 128 72 180 200 232 72"
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
            points="24 72 76 200 128 72 180 200 232 72"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="16"
            y1="136"
            x2="240"
            y2="136"
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
          <path d="M240,128H217.88525l21.52686-52.98926a8.00025,8.00025,0,0,0-14.82422-6.02148L200.61523,128H159.38477L135.41211,68.98926a8.00039,8.00039,0,0,0-14.82422,0L96.61523,128H55.38477L31.41211,68.98926a8.00025,8.00025,0,0,0-14.82422,6.02148L38.11475,128H16a8,8,0,0,0,0,16H44.61475l23.97314,59.01074a8.00039,8.00039,0,0,0,14.82422,0L107.38477,144h41.23046l23.97266,59.01074a8.00039,8.00039,0,0,0,14.82422,0L211.38525,144H240a8,8,0,0,0,0-16ZM76,178.74512,61.88477,144H90.11523ZM113.88477,128,128,93.25488,142.11523,128ZM180,178.74512,165.88477,144h28.23046Z" />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="16"
            y1="136"
            x2="240"
            y2="136"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="24 72 76 200 128 72 180 200 232 72"
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
          <line
            x1="16"
            y1="136"
            x2="240"
            y2="136"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="24 72 76 200 128 72 180 200 232 72"
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
            points="24 72 76 200 128 72 180 200 232 72"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="16"
            y1="136"
            x2="240"
            y2="136"
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

const CurrencyKrw = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

CurrencyKrw.displayName = "CurrencyKrw";

export default CurrencyKrw;
