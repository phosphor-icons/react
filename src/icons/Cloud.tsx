/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <path
            d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.91924,97.74352"
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
          <rect width="256" height="256" fill="none" />
          <path
            d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.91924,97.74352"
            opacity="0.2"
          />
          <path
            d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.91924,97.74352"
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
          <rect width="256" height="256" fill="none" />
          <path d="M159.99512,39.99805a88.01064,88.01064,0,0,0-11.30957.81152c-1.02344.13281-2.03418.29883-3.0459.46582a87.04662,87.04662,0,0,0-8.86231,1.93262c-.69531.19043-1.40918.333-2.09765.541a87.1629,87.1629,0,0,0-10.09082,3.749c-.80371.35547-1.57617.76465-2.36719,1.14257q-3.85841,1.84425-7.502,4.042c-.81446.49121-1.64063.96484-2.4375,1.48242a88.58481,88.58481,0,0,0-8.53614,6.2334c-.41211.34375-.78418.73144-1.19043,1.082a88.95671,88.95671,0,0,0-6.583,6.333q-1.05909,1.12645-2.08106,2.28808a88.48441,88.48441,0,0,0-5.73535,7.2461c-.292.41308-.624.79687-.90918,1.21484a89.4815,89.4815,0,0,0-15.25195,49.43555,8,8,0,0,1-16,0,103.347,103.347,0,0,1,7.71679-39.16211c-31.35351,4.1123-55.71679,30.709-55.71679,63.16211a64.06831,64.06831,0,0,0,64,64h88a88,88,0,0,0,0-176Z" />
        </>
      );
    case "light":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <path
            d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.91924,97.74352"
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
          <rect width="256" height="256" fill="none" />
          <path
            d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.91924,97.74352"
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
          <rect width="256" height="256" fill="none" />
          <path
            d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.91924,97.74352"
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

const Cloud = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>
  );
});

Cloud.displayName = "Cloud";

export default Cloud;
