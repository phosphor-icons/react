/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path
            d="M144.96473,178.9102l-28.28427,28.28427a48,48,0,0,1-67.88225-67.88225L77.08248,111.028"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M178.91069,144.96424,207.195,116.68a48,48,0,0,0-67.88225-67.88225L111.02844,77.082"
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
            d="M144.96473,178.9102l-28.28427,28.28427a48,48,0,0,1-67.88225-67.88225L77.08248,111.028"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M178.91069,144.96424,207.195,116.68a48,48,0,0,0-67.88225-67.88225L111.02844,77.082"
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
            <path d="M139.30713,173.25293,111.023,201.53711a39.99918,39.99918,0,0,1-56.56738-56.56738l28.28418-28.28418a8.00053,8.00053,0,0,0-11.31446-11.31446L43.14111,133.65527a56.00023,56.00023,0,0,0,79.19629,79.19629l28.28418-28.28418a8.00052,8.00052,0,1,0-11.31445-11.31445Z" />
            <path d="M212.85205,43.14062a56.002,56.002,0,0,0-79.19629,0L105.37158,71.4248A8.00053,8.00053,0,1,0,116.686,82.73926l28.28417-28.28418a39.99918,39.99918,0,0,1,56.56739,56.56738l-28.28418,28.28418a8.00052,8.00052,0,0,0,11.31445,11.31445l28.28418-28.28418A56.06457,56.06457,0,0,0,212.85205,43.14062Z" />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M144.96473,178.9102l-28.28427,28.28427a48,48,0,0,1-67.88225-67.88225L77.08248,111.028"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M178.91069,144.96424,207.195,116.68a48,48,0,0,0-67.88225-67.88225L111.02844,77.082"
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
            d="M144.96473,178.9102l-28.28427,28.28427a48,48,0,0,1-67.88225-67.88225L77.08248,111.028"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M178.91069,144.96424,207.195,116.68a48,48,0,0,0-67.88225-67.88225L111.02844,77.082"
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
            d="M144.96473,178.9102l-28.28427,28.28427a48,48,0,0,1-67.88225-67.88225L77.08248,111.028"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M178.91069,144.96424,207.195,116.68a48,48,0,0,0-67.88225-67.88225L111.02844,77.082"
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

const LinkSimpleBreak = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

LinkSimpleBreak.displayName = "LinkSimpleBreak";

export default LinkSimpleBreak;
