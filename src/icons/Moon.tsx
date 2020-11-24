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
            d="M221.567,149.56784A96.0849,96.0849,0,0,1,106.43219,34.43294l-.00127-.00029A96.01213,96.01213,0,1,0,221.56729,149.56932Z"
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
            d="M221.567,149.56784A96.0849,96.0849,0,0,1,106.43219,34.43294l-.00127-.00029A96.01213,96.01213,0,1,0,221.56729,149.56932Z"
            opacity="0.2"
          />
          <path
            d="M221.567,149.56784A96.0849,96.0849,0,0,1,106.43219,34.43294l-.00127-.00029A96.01213,96.01213,0,1,0,221.56729,149.56932Z"
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
          <path d="M229.36426,151.35791A104.00619,104.00619,0,1,1,104.64111,26.63574a7.99975,7.99975,0,0,1,9.58741,9.58545A88.0856,88.0856,0,0,0,219.77734,141.77051a8.00049,8.00049,0,0,1,9.58692,9.5874Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M221.567,149.56784A96.0849,96.0849,0,0,1,106.43219,34.43294l-.00127-.00029A96.01213,96.01213,0,1,0,221.56729,149.56932Z"
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
            d="M221.567,149.56784A96.0849,96.0849,0,0,1,106.43219,34.43294l-.00127-.00029A96.01213,96.01213,0,1,0,221.56729,149.56932Z"
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
            d="M221.567,149.56784A96.0849,96.0849,0,0,1,106.43219,34.43294l-.00127-.00029A96.01213,96.01213,0,1,0,221.56729,149.56932Z"
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

const Moon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Moon.displayName = "Moon";

export default Moon;
