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
          <path
            d="M101.28431,158.16615l-3.34318,3.775a48,48,0,1,1,0-67.88226l60.11774,67.88226a48,48,0,1,0,0-67.88226l-3.34318,3.775"
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
            d="M106.62747,152.1329l-8.68634,9.80823a48,48,0,1,1,0-67.88226l60.11774,67.88226a48,48,0,1,0,0-67.88226l-8.68634,9.80823"
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
          <path d="M248,128a55.99955,55.99955,0,0,1-95.59766,39.59766q-.17137-.17139-.332-.35254L92.11963,99.55225a40,40,0,1,0,0,56.8955l8.519-9.61914a8,8,0,1,1,11.97754,10.6084l-8.68652,9.80811q-.16041.1809-.332.35254a56,56,0,1,1,0-79.19532q.17137.17139.332.35254l59.95068,67.69287a40,40,0,1,0,0-56.8955l-8.519,9.61914A8,8,0,0,1,143.38379,98.563l8.68652-9.80811q.16041-.1809.332-.35254A56,56,0,0,1,248,128Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M106.62747,152.1329l-8.68634,9.80823a48,48,0,1,1,0-67.88226l60.11774,67.88226a48,48,0,1,0,0-67.88226l-8.68634,9.80823"
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
            d="M106.62747,152.1329l-8.68634,9.80823a48,48,0,1,1,0-67.88226l60.11774,67.88226a48,48,0,1,0,0-67.88226l-8.68634,9.80823"
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
            d="M106.62747,152.1329l-8.68634,9.80823a48,48,0,1,1,0-67.88226l60.11774,67.88226a48,48,0,1,0,0-67.88226l-8.68634,9.80823"
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

const Infinity = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Infinity.displayName = "Infinity";

export default Infinity;
