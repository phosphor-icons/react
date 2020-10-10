/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path
            d="M194.37493,196.43765,240,128,194.37493,59.56244a8,8,0,0,0-6.6564-3.56239H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.71853A8,8,0,0,0,194.37493,196.43765Z"
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
            d="M194.37493,196.43765,240,128,194.37493,59.56244a8,8,0,0,0-6.6564-3.56239H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.71853A8,8,0,0,0,194.37493,196.43765Z"
            opacity="0.2"
          />
          <path
            d="M194.37493,196.43765,240,128,194.37493,59.56244a8,8,0,0,0-6.6564-3.56239H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.71853A8,8,0,0,0,194.37493,196.43765Z"
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
          <path d="M246.65625,123.56213l-45.624-68.43652a15.9687,15.9687,0,0,0-13.31348-7.126H40a16.01833,16.01833,0,0,0-16,16v128a16.01833,16.01833,0,0,0,16,16H187.71875a15.96649,15.96649,0,0,0,13.31348-7.125l-.001.001,45.625-68.43848A7.99771,7.99771,0,0,0,246.65625,123.56213Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M194.37493,196.43765,240,128,194.37493,59.56244a8,8,0,0,0-6.6564-3.56239H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.71853A8,8,0,0,0,194.37493,196.43765Z"
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
            d="M194.37493,196.43765,240,128,194.37493,59.56244a8,8,0,0,0-6.6564-3.56239H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.71853A8,8,0,0,0,194.37493,196.43765Z"
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
            d="M194.37493,196.43765,240,128,194.37493,59.56244a8,8,0,0,0-6.6564-3.56239H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.71853A8,8,0,0,0,194.37493,196.43765Z"
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

const TagSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

TagSimple.displayName = "TagSimple";

export default TagSimple;
