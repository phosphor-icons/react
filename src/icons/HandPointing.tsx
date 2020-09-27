/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path
            d="M128,104V36a20,20,0,0,0-40,0V157.26608L66.07247,119.28651a20,20,0,1,0-34.641,20C64,208,83.81722,232,128,232a80,80,0,0,0,80-80V112a20,20,0,0,0-40,0"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M168,112V100a20,20,0,0,0-40,0v4"
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
            d="M168,112V100a20,20,0,0,0-40,0V36a20,20,0,0,0-40,0V157.26608L66.07247,119.28651a20,20,0,1,0-34.641,20C64,208,83.81722,232,128,232a80,80,0,0,0,80-80V112a20,20,0,0,0-40,0Z"
            opacity="0.2"
          />
          <path
            d="M128,104V36a20,20,0,0,0-40,0V157.26608L66.07247,119.28651a20,20,0,1,0-34.641,20C64,208,83.81722,232,128,232a80,80,0,0,0,80-80V112a20,20,0,0,0-40,0"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M168,112V100a20,20,0,0,0-40,0v4"
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
          <path d="M188,84a27.82842,27.82842,0,0,0-14.6416,4.145A27.97776,27.97776,0,0,0,136,74.707V36a28,28,0,0,0-56,0v91.41016l-6.999-12.12354a28.00028,28.00028,0,0,0-48.6709,27.69629C56.77832,211.39941,78.39355,240,128,240a88.09957,88.09957,0,0,0,88-88V112A28.03146,28.03146,0,0,0,188,84Zm12,68a72.08124,72.08124,0,0,1-72,72c-20.17871,0-34.22656-5.45459-46.97461-18.23828-12.499-12.53369-24.77246-32.78565-42.36426-69.90137q-.13916-.293-.30175-.57422a12.00011,12.00011,0,0,1,20.78515-11.99951l21.92774,37.97949a7.9997,7.9997,0,0,0,14.92773-4V36a12,12,0,0,1,24,0v68a8,8,0,0,0,16,0v-4a12,12,0,0,1,24,0v12a8,8,0,0,0,16,0,12,12,0,0,1,24,0Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M128,104V36a20,20,0,0,0-40,0V157.26608L66.07247,119.28651a20,20,0,1,0-34.641,20C64,208,83.81722,232,128,232a80,80,0,0,0,80-80V112a20,20,0,0,0-40,0"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M168,112V100a20,20,0,0,0-40,0v4"
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
            d="M128,104V36a20,20,0,0,0-40,0V157.26608L66.07247,119.28651a20,20,0,1,0-34.641,20C64,208,83.81722,232,128,232a80,80,0,0,0,80-80V112a20,20,0,0,0-40,0"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M168,112V100a20,20,0,0,0-40,0v4"
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
            d="M128,104V36a20,20,0,0,0-40,0V157.26608L66.07247,119.28651a20,20,0,1,0-34.641,20C64,208,83.81722,232,128,232a80,80,0,0,0,80-80V112a20,20,0,0,0-40,0"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M168,112V100a20,20,0,0,0-40,0v4"
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

const HandPointing = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

HandPointing.displayName = "HandPointing";

export default HandPointing;
