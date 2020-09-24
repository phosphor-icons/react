/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path
            d="M59.31371,40H196.68629a8,8,0,0,1,5.65686,13.65685L53.65685,202.34315A8,8,0,0,0,59.31371,216H196.68629a8,8,0,0,0,5.65686-13.65685L53.65685,53.65685A8,8,0,0,1,59.31371,40Z"
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
            d="M59.31371,40H196.68629a8,8,0,0,1,5.65686,13.65685L53.65685,202.34315A8,8,0,0,0,59.31371,216H196.68629a8,8,0,0,0,5.65686-13.65685L53.65685,53.65685A8,8,0,0,1,59.31371,40Z"
            opacity="0.2"
          />
          <path
            d="M59.31371,40H196.68629a8,8,0,0,1,5.65686,13.65685L53.65685,202.34315A8,8,0,0,0,59.31371,216H196.68629a8,8,0,0,0,5.65686-13.65685L53.65685,53.65685A8,8,0,0,1,59.31371,40Z"
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
          <path d="M139.31543,127.99854,208,59.31348A15.9999,15.9999,0,0,0,196.68652,32H59.31348A15.9999,15.9999,0,0,0,48,59.31348l68.68457,68.688L48,196.68652A15.9999,15.9999,0,0,0,59.31348,224h137.373A15.9999,15.9999,0,0,0,208,196.68652Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M59.31371,40H196.68629a8,8,0,0,1,5.65686,13.65685L53.65685,202.34315A8,8,0,0,0,59.31371,216H196.68629a8,8,0,0,0,5.65686-13.65685L53.65685,53.65685A8,8,0,0,1,59.31371,40Z"
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
            d="M59.31371,40H196.68629a8,8,0,0,1,5.65686,13.65685L53.65685,202.34315A8,8,0,0,0,59.31371,216H196.68629a8,8,0,0,0,5.65686-13.65685L53.65685,53.65685A8,8,0,0,1,59.31371,40Z"
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
            d="M59.31371,40H196.68629a8,8,0,0,1,5.65686,13.65685L53.65685,202.34315A8,8,0,0,0,59.31371,216H196.68629a8,8,0,0,0,5.65686-13.65685L53.65685,53.65685A8,8,0,0,1,59.31371,40Z"
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

const HourglassSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

HourglassSimple.displayName = "HourglassSimple";

export default HourglassSimple;
