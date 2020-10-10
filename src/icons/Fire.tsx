/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path
            d="M104,112,69.58177,85.48233C57.3119,104.73352,48,127.43557,48,152a80,80,0,0,0,160,0c0-72-72-128-72-128Z"
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
            d="M104,112,69.58177,85.48233C57.3119,104.73352,48,127.43557,48,152a80,80,0,0,0,160,0c0-72-72-128-72-128Z"
            opacity="0.2"
          />
          <path
            d="M104,112,69.58177,85.48233C57.3119,104.73352,48,127.43557,48,152a80,80,0,0,0,160,0c0-72-72-128-72-128Z"
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
          <path d="M216,152a88,88,0,0,1-176,0c0-23.2168,7.68311-47.043,22.83545-70.81738a7.99928,7.99928,0,0,1,11.62842-2.03711l25.75537,19.84277,28.26221-77.72266a7.99985,7.99985,0,0,1,12.43017-3.58007C143.97754,20.06934,216,76.9502,216,152Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M104,112,69.58177,85.48233C57.3119,104.73352,48,127.43557,48,152a80,80,0,0,0,160,0c0-72-72-128-72-128Z"
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
            d="M104,112,69.58177,85.48233C57.3119,104.73352,48,127.43557,48,152a80,80,0,0,0,160,0c0-72-72-128-72-128Z"
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
            d="M104,112,69.58177,85.48233C57.3119,104.73352,48,127.43557,48,152a80,80,0,0,0,160,0c0-72-72-128-72-128Z"
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

const Fire = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Fire.displayName = "Fire";

export default Fire;
