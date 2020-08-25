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
            d="M151.89873,79.9958h-39.997l-7.802,48.20365a28,28,0,1,1,0,39.598"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <rect
            x="40"
            y="40"
            width="176"
            height="176"
            rx="8"
            strokeWidth="24"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      );
    case "duotone":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <rect x="40" y="40" width="176" height="176" rx="8" opacity="0.2" />
          <path
            d="M151.89873,79.9958h-39.997l-7.802,48.20365a28,28,0,1,1,0,39.598"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="40"
            y="40"
            width="176"
            height="176"
            rx="8"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      );
    case "fill":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <path
            d="M123.89844,184A35.76955,35.76955,0,0,1,98.4375,173.45313a8.00467,8.00467,0,1,1,11.32813-11.3125c7.53125,7.5625,20.73437,7.5625,28.26562,0a19.97387,19.97387,0,0,0,.00781-28.27344c-7.54687-7.57813-20.74218-7.57031-28.27343-.00781a8.00314,8.00314,0,0,1-13.5625-6.92969L104,78.71875a8.00568,8.00568,0,0,1,7.89844-6.72656h40a8,8,0,0,1,0,16h-33.1875l-4.07813,25.20312a36.59927,36.59927,0,0,1,34.72657,9.35157A36.00391,36.00391,0,0,1,123.89844,184Z"
            fill="none"
          />
          <path d="M208,32H48A16.02085,16.02085,0,0,0,32,48V208a16.02085,16.02085,0,0,0,16,16H208a16.02085,16.02085,0,0,0,16-16V48A16.02085,16.02085,0,0,0,208,32Zm-58.64062,90.54688A36.00168,36.00168,0,0,1,98.4375,173.45313a8.00467,8.00467,0,1,1,11.32813-11.3125c7.53125,7.5625,20.73437,7.5625,28.26562,0a19.97387,19.97387,0,0,0,.00781-28.27344c-7.54687-7.57813-20.74218-7.57031-28.27343-.00781a8.00314,8.00314,0,0,1-13.5625-6.92969L104,78.71875a8.00568,8.00568,0,0,1,7.89844-6.72656h40a8,8,0,0,1,0,16h-33.1875l-4.07813,25.20312A36.59927,36.59927,0,0,1,149.35938,122.54688Z" />
        </>
      );
    case "light":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <path
            d="M151.89873,79.9958h-39.997l-7.802,48.20365a28,28,0,1,1,0,39.598"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <rect
            x="40"
            y="40"
            width="176"
            height="176"
            rx="8"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      );
    case "thin":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <path
            d="M151.89873,79.9958h-39.997l-7.802,48.20365a28,28,0,1,1,0,39.598"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <rect
            x="40"
            y="40"
            width="176"
            height="176"
            rx="8"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      );
    case "regular":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <path
            d="M151.89873,79.9958h-39.997l-7.802,48.20365a28,28,0,1,1,0,39.598"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="40"
            y="40"
            width="176"
            height="176"
            rx="8"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
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

const FiveSquare = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

FiveSquare.displayName = "FiveSquare";

export default FiveSquare;
