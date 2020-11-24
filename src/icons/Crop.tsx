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
            x1="55.99414"
            y1="56"
            x2="16.00244"
            y2="56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="56.002 16 56.002 200.001 240.002 200.001"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="200.002 160.001 200.002 56 95.994 56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="200.00244"
            y1="240.00098"
            x2="200.00244"
            y2="200.00098"
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
          <line
            x1="55.99414"
            y1="56"
            x2="16.00244"
            y2="56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="56.002 16 56.002 200.001 240.002 200.001"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="200.002 168.001 200.002 56 87.994 56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="200.00244"
            y1="240.00098"
            x2="200.00244"
            y2="200.00098"
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
          <g>
            <path d="M240.00244,192.001h-176V16a8,8,0,0,0-16,0V48h-32a8,8,0,0,0,0,16h32V200.001a8.00039,8.00039,0,0,0,8,8h136v32a8,8,0,0,0,16,0v-32h32a8,8,0,0,0,0-16Z" />
            <path d="M87.99365,64H192.00244V168.001a8,8,0,0,0,16,0V56a8.00008,8.00008,0,0,0-8-8H87.99365a8,8,0,0,0,0,16Z" />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="55.99414"
            y1="56"
            x2="16.00244"
            y2="56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="56.002 16 56.002 200.001 240.002 200.001"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="200.002 168.001 200.002 56 87.994 56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="200.00244"
            y1="240.00098"
            x2="200.00244"
            y2="200.00098"
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
            x1="55.99414"
            y1="56"
            x2="16.00244"
            y2="56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="56.002 16 56.002 200.001 240.002 200.001"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="200.002 168.001 200.002 56 87.994 56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="200.00244"
            y1="240.00098"
            x2="200.00244"
            y2="200.00098"
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
          <line
            x1="55.99414"
            y1="56"
            x2="16.00244"
            y2="56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="56.002 16 56.002 200.001 240.002 200.001"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="200.002 168.001 200.002 56 87.994 56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="200.00244"
            y1="240.00098"
            x2="200.00244"
            y2="200.00098"
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

const Crop = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Crop.displayName = "Crop";

export default Crop;
