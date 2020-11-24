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
            x1="120"
            y1="200"
            x2="72"
            y2="200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="184"
            y1="200"
            x2="160"
            y2="200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="160"
            y1="240"
            x2="104"
            y2="240"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792"
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
            d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792"
            opacity="0.2"
          />
          <line
            x1="120"
            y1="192"
            x2="72"
            y2="192"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="184"
            y1="192"
            x2="160"
            y2="192"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="160"
            y1="224"
            x2="104"
            y2="224"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792"
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
          <path d="M120,200H72a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm64-16H160a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Zm-24,32H104a8,8,0,0,0,0,16h56a8,8,0,0,0,0-16ZM156,16A76.13113,76.13113,0,0,0,85.03711,64.7832,52.0037,52.0037,0,1,0,76,168h80a76,76,0,0,0,0-152Z" />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="120"
            y1="192"
            x2="72"
            y2="192"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="184"
            y1="192"
            x2="160"
            y2="192"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="160"
            y1="224"
            x2="104"
            y2="224"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792"
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
            x1="120"
            y1="192"
            x2="72"
            y2="192"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="184"
            y1="192"
            x2="160"
            y2="192"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="160"
            y1="224"
            x2="104"
            y2="224"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792"
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
            x1="120"
            y1="192"
            x2="72"
            y2="192"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="184"
            y1="192"
            x2="160"
            y2="192"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="160"
            y1="224"
            x2="104"
            y2="224"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792"
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

const CloudFog = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

CloudFog.displayName = "CloudFog";

export default CloudFog;
