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
          <polyline
            points="168 207.992 184 167.992 152 167.992 168 127.992"
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
          <polyline
            points="168 207.992 184 167.992 152 167.992 168 127.992"
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
          <path d="M160,40A88.102,88.102,0,0,0,81.28711,88.6709l-.00537-.00049A87.46324,87.46324,0,0,0,71.98828,128a8,8,0,0,1-16,0,103.43674,103.43674,0,0,1,7.78-39.45264A63.99161,63.99161,0,0,0,72,216h88a88,88,0,0,0,0-176Zm31.42285,114.96338-16,40a8,8,0,0,1-14.85547-5.94238l11.61133-29.02881H151.99512a7.99975,7.99975,0,0,1-7.42774-10.97119l16-40a8,8,0,1,1,14.85547,5.94238l-11.61133,29.02881h20.1836a7.99974,7.99974,0,0,1,7.42773,10.97119Z" />
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
          <polyline
            points="168 207.992 184 167.992 152 167.992 168 127.992"
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
          <polyline
            points="168 207.992 184 167.992 152 167.992 168 127.992"
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
          <polyline
            points="168 207.992 184 167.992 152 167.992 168 127.992"
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

const CloudLightning = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

CloudLightning.displayName = "CloudLightning";

export default CloudLightning;
