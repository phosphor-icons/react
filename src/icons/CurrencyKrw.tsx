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
            points="24 72 76 200 128 72 180 200 232 72"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
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
            y1="152"
            x2="240"
            y2="152"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="16"
            y1="120"
            x2="240"
            y2="120"
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
          <path d="M240,144H211.38525l6.5-16H240a8,8,0,0,0,0-16H224.38525l15.02686-36.98926a8.00025,8.00025,0,0,0-14.82422-6.02148L207.11475,112h-54.2295L135.41211,68.98926a8.00039,8.00039,0,0,0-14.82422,0L103.11475,112H48.88525L31.41211,68.98926a8.00025,8.00025,0,0,0-14.82422,6.02148L31.61475,112H16a8,8,0,0,0,0,16H38.11475l6.5,16H16a8,8,0,0,0,0,16H51.11475l17.47314,43.01074a8.00039,8.00039,0,0,0,14.82422,0L100.88525,160h54.2295l17.47314,43.01074a8.00039,8.00039,0,0,0,14.82422,0L204.88525,160H240a8,8,0,0,0,0-16Zm-39.38477-16-6.5,16H165.88477l-6.5-16ZM128,93.25488,135.61523,112H120.38477ZM55.38477,128H96.61523l-6.5,16H61.88477ZM76,178.74512,68.38477,160H83.61523ZM107.38477,144l6.5-16h28.23046l6.5,16ZM180,178.74512,172.38477,160h15.23046Z" />
        </>
      );
    case "light":
      return (
        <>
          <polyline
            points="24 72 76 200 128 72 180 200 232 72"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="16"
            y1="152"
            x2="240"
            y2="152"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="16"
            y1="120"
            x2="240"
            y2="120"
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
            points="24 72 76 200 128 72 180 200 232 72"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="16"
            y1="152"
            x2="240"
            y2="152"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="16"
            y1="120"
            x2="240"
            y2="120"
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
            y1="152"
            x2="240"
            y2="152"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="16"
            y1="120"
            x2="240"
            y2="120"
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
