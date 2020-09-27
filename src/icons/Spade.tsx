/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path
            d="M147.30275,191.37116A52.0079,52.0079,0,0,0,228,148C228,80,128,24,128,24S28,80,28,148a52.0079,52.0079,0,0,0,80.69869,43.37021l-.00128-.00193L96,232h64l-12.69675-40.62959Z"
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
            d="M147.30275,191.37116A52.0079,52.0079,0,0,0,228,148C228,80,128,24,128,24S28,80,28,148a52.0079,52.0079,0,0,0,80.69869,43.37021l-.00128-.00193L96,232h64l-12.69675-40.62959Z"
            opacity="0.2"
          />
          <path
            d="M147.30275,191.37116A52.0079,52.0079,0,0,0,228,148C228,80,128,24,128,24S28,80,28,148a52.0079,52.0079,0,0,0,80.69869,43.37021l-.00128-.00193L96,232h64l-12.69675-40.62959Z"
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
          <path d="M131.90918,17.01953a8.00426,8.00426,0,0,0-7.81836,0A317.37283,317.37283,0,0,0,72.64844,54.55371C37.71338,85.99512,20,117.43457,20,148a60.04467,60.04467,0,0,0,75.77344,57.90332l-7.40918,23.71094A8.00032,8.00032,0,0,0,96,240h64a8.00068,8.00068,0,0,0,7.63574-10.38672l-7.41015-23.71A60.04552,60.04552,0,0,0,236,148C236,76.1377,136.15918,19.40039,131.90918,17.01953Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M147.30275,191.37116A52.0079,52.0079,0,0,0,228,148C228,80,128,24,128,24S28,80,28,148a52.0079,52.0079,0,0,0,80.69869,43.37021l-.00128-.00193L96,232h64l-12.69675-40.62959Z"
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
            d="M147.30275,191.37116A52.0079,52.0079,0,0,0,228,148C228,80,128,24,128,24S28,80,28,148a52.0079,52.0079,0,0,0,80.69869,43.37021l-.00128-.00193L96,232h64l-12.69675-40.62959Z"
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
            d="M147.30275,191.37116A52.0079,52.0079,0,0,0,228,148C228,80,128,24,128,24S28,80,28,148a52.0079,52.0079,0,0,0,80.69869,43.37021l-.00128-.00193L96,232h64l-12.69675-40.62959Z"
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

const Spade = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Spade.displayName = "Spade";

export default Spade;
