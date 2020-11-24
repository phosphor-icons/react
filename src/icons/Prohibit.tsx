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
          <circle
            cx="128.00049"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="60.11824"
            y1="60.11775"
            x2="195.88274"
            y2="195.88225"
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
          <circle cx="128.00049" cy="128" r="96" opacity="0.2" />
          <circle
            cx="128.00049"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeMiterlimit="10"
            strokeWidth="16"
          />
          <line
            x1="60.11824"
            y1="60.11775"
            x2="195.88274"
            y2="195.88225"
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
          <path d="M200,128.00012a71.6357,71.6357,0,0,1-15.78027,44.90527L83.09424,71.78039A71.94387,71.94387,0,0,1,200,128.00012Zm-144,0a71.94342,71.94342,0,0,0,116.90576,56.21924L71.78027,83.09436A71.63607,71.63607,0,0,0,56,128.00012Zm180,0a108,108,0,1,1-108-108A108.12249,108.12249,0,0,1,236,128.00012Zm-20,0a88,88,0,1,0-88,88A88.09957,88.09957,0,0,0,216,128.00012Z" />
        </>
      );
    case "light":
      return (
        <>
          <circle
            cx="128.00049"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="60.11824"
            y1="60.11775"
            x2="195.88274"
            y2="195.88225"
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
          <circle
            cx="128.00049"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="60.11824"
            y1="60.11775"
            x2="195.88274"
            y2="195.88225"
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
          <circle
            cx="128.00049"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeMiterlimit="10"
            strokeWidth="16"
          />
          <line
            x1="60.11824"
            y1="60.11775"
            x2="195.88274"
            y2="195.88225"
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

const Prohibit = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Prohibit.displayName = "Prohibit";

export default Prohibit;
