/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <polyline points="256 0 256 256 0 256 0 0" fill="none" />
          <path
            d="M223.532,137.53892A96.00374,96.00374,0,1,1,118.449,32.46915l.00005.00075a80.03385,80.03385,0,0,0,105.08326,105.069Z"
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
          <polyline points="256 0 256 256 0 256 0 0" fill="none" />
          <path
            d="M223.532,137.53892A96.00374,96.00374,0,1,1,118.449,32.46915l.00005.00075a80.03385,80.03385,0,0,0,105.08326,105.069Z"
            opacity="0.2"
          />
          <path
            d="M223.532,137.53892A96.00374,96.00374,0,1,1,118.449,32.46915l.00005.00075a80.03385,80.03385,0,0,0,105.08326,105.069Z"
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
          <polyline points="256 0 256 256 0 256 0 0" fill="none" />
          <path d="M228.25781,131.08594a7.97081,7.97081,0,0,0-7.875-.89844,72.03888,72.03888,0,0,1-94.58594-94.57031,7.99837,7.99837,0,0,0-8.14062-11.10938A104.00405,104.00405,0,1,0,231.49219,138.32813,7.99431,7.99431,0,0,0,228.25781,131.08594Z" />
        </>
      );
    case "light":
      return (
        <>
          <polyline points="256 0 256 256 0 256 0 0" fill="none" />
          <path
            d="M223.532,137.53892A96.00374,96.00374,0,1,1,118.449,32.46915l.00005.00075a80.03385,80.03385,0,0,0,105.08326,105.069Z"
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
          <polyline points="256 0 256 256 0 256 0 0" fill="none" />
          <path
            d="M223.532,137.53892A96.00374,96.00374,0,1,1,118.449,32.46915l.00005.00075a80.03385,80.03385,0,0,0,105.08326,105.069Z"
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
          <polyline points="256 0 256 256 0 256 0 0" fill="none" />
          <path
            d="M223.532,137.53892A96.00374,96.00374,0,1,1,118.449,32.46915l.00005.00075a80.03385,80.03385,0,0,0,105.08326,105.069Z"
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

Moon.displayName = "Moon";

export default Moon;
