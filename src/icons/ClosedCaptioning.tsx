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
            x="32"
            y="48"
            width="192"
            height="160"
            rx="8"
            strokeWidth="24"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M113.00272,152.80413a28,28,0,1,1-.00014-49.60833"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M185.00272,152.80413a28,28,0,1,1-.00014-49.60833"
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
          <rect x="32" y="48" width="192" height="160" rx="8" opacity="0.2" />
          <rect
            x="32"
            y="48"
            width="192"
            height="160"
            rx="8"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M116,147.59582a28,28,0,1,1,.00011-39.19153"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M188,147.59582a28,28,0,1,1,.00011-39.19153"
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
          <path d="M216,40H40A16.01833,16.01833,0,0,0,24,56V200a16.01833,16.01833,0,0,0,16,16H216a16.01833,16.01833,0,0,0,16-16V56A16.01833,16.01833,0,0,0,216,40ZM96,148a19.85259,19.85259,0,0,0,14.28613-6.00293,7.99956,7.99956,0,0,1,11.42774,11.19727,36,36,0,1,1,0-50.38868,7.99956,7.99956,0,0,1-11.42774,11.19727A20.00012,20.00012,0,1,0,96,148Zm72,0a19.85259,19.85259,0,0,0,14.28613-6.00293,7.99956,7.99956,0,0,1,11.42774,11.19727,36,36,0,1,1,0-50.38868,7.99956,7.99956,0,0,1-11.42774,11.19727A20.00012,20.00012,0,1,0,168,148Z" />
        </>
      );
    case "light":
      return (
        <>
          <rect
            x="32"
            y="48"
            width="192"
            height="160"
            rx="8"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M116,147.59582a28,28,0,1,1,.00011-39.19153"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M188,147.59582a28,28,0,1,1,.00011-39.19153"
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
            x="32"
            y="48"
            width="192"
            height="160"
            rx="8"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M116,147.59582a28,28,0,1,1,.00011-39.19153"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M188,147.59582a28,28,0,1,1,.00011-39.19153"
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
            x="32"
            y="48"
            width="192"
            height="160"
            rx="8"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M116,147.59582a28,28,0,1,1,.00011-39.19153"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M188,147.59582a28,28,0,1,1,.00011-39.19153"
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

const ClosedCaptioning = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ClosedCaptioning.displayName = "ClosedCaptioning";

export default ClosedCaptioning;
