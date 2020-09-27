/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path
            d="M136,208H72A56,56,0,1,1,85.91924,97.74352"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M80,128a80,80,0,1,1,128.00118,64.005"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <circle cx="148" cy="132" r="16" />
          <circle cx="140" cy="172" r="16" />
          <circle cx="180" cy="164" r="16" />
          <circle cx="172" cy="204" r="16" />
        </>
      );
    case "duotone":
      return (
        <>
          <path
            d="M80.00586,128a80,80,0,1,1,80,80h-88A56,56,0,1,1,85.9251,97.74352"
            opacity="0.2"
          />
          <path
            d="M136,208H72A56,56,0,1,1,85.91924,97.74352"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M80,128a80,80,0,1,1,128.00118,64.005"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle cx="148" cy="132" r="12" />
          <circle cx="140" cy="172" r="12" />
          <circle cx="180" cy="164" r="12" />
          <circle cx="172" cy="204" r="12" />
        </>
      );
    case "fill":
      return (
        <>
          <path d="M160,40A88.102,88.102,0,0,0,81.28711,88.6709l-.00537-.00049A87.46324,87.46324,0,0,0,71.98828,128a8,8,0,0,1-16,0,103.43674,103.43674,0,0,1,7.78-39.45264A63.99161,63.99161,0,0,0,72,216h88a88,88,0,0,0,0-176ZM140,168a12,12,0,1,1,12-12A12,12,0,0,1,140,168Zm8-40a12,12,0,1,1,12-12A12,12,0,0,1,148,128Zm24,72a12,12,0,1,1,12-12A12,12,0,0,1,172,200Zm8-40a12,12,0,1,1,12-12A12,12,0,0,1,180,160Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M136,208H72A56,56,0,1,1,85.91924,97.74352"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M80,128a80,80,0,1,1,128.00118,64.005"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle cx="148" cy="132" r="9" />
          <circle cx="140" cy="172" r="9" />
          <circle cx="180" cy="164" r="9" />
          <circle cx="172" cy="204" r="9" />
        </>
      );
    case "thin":
      return (
        <>
          <path
            d="M136,208H72A56,56,0,1,1,85.91924,97.74352"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M80,128a80,80,0,1,1,128.00118,64.005"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <circle cx="148" cy="132" r="6" />
          <circle cx="140" cy="172" r="6" />
          <circle cx="180" cy="164" r="6" />
          <circle cx="172" cy="204" r="6" />
        </>
      );
    case "regular":
      return (
        <>
          <path
            d="M136,208H72A56,56,0,1,1,85.91924,97.74352"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M80,128a80,80,0,1,1,128.00118,64.005"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle cx="148" cy="132" r="12" />
          <circle cx="140" cy="172" r="12" />
          <circle cx="180" cy="164" r="12" />
          <circle cx="172" cy="204" r="12" />
        </>
      );
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const CloudSnow = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { color, size, weight, mirrored, ...rest } = props;
  const {
    color: contextColor,
    size: contextSize,
    weight: contextWeight,
    mirrored: contextMirrored,
    ...contextRest
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
      {...contextRest}
      {...rest}
    >
      <rect width="256" height="256" fill="none" />
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>
  );
});

CloudSnow.displayName = "CloudSnow";

export default CloudSnow;
