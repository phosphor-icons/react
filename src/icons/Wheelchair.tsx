/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle
            cx="95.88745"
            cy="40"
            r="20"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="95.887 60 95.887 132 183.887 132 215.887 196 239.887 188"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M167.76447,164.00014A64.001,64.001,0,1,1,103.88745,96h56"
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
          <circle cx="95.88745" cy="40" r="20" opacity="0.2" />
          <circle
            cx="95.88745"
            cy="40"
            r="20"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="95.887 60 95.887 132 183.887 132 215.887 196 239.887 188"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M167.76447,164.00014A64.001,64.001,0,1,1,103.88745,96h56"
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
          <path d="M247.47729,185.47021a7.99737,7.99737,0,0,0-10.12012-5.05957l-17.417,5.80567-28.89746-57.79395A7.99979,7.99979,0,0,0,183.88745,124h-80V104h56a8,8,0,0,0,0-16h-56V62.629a24,24,0,1,0-16,0V89.81421a71.99395,71.99395,0,1,0,87.86133,74.678,7.99953,7.99953,0,1,0-15.96875-.98438,56.001,56.001,0,1,1-71.89258-57.16644V132a8.00008,8.00008,0,0,0,8,8h83.05566l29.78906,59.57764a7.9934,7.9934,0,0,0,9.68555,4.01172l24-8A8.00045,8.00045,0,0,0,247.47729,185.47021Z" />
        </>
      );
    case "light":
      return (
        <>
          <circle
            cx="95.88745"
            cy="40"
            r="20"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="95.887 60 95.887 132 183.887 132 215.887 196 239.887 188"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M167.76447,164.00014A64.001,64.001,0,1,1,103.88745,96h56"
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
            cx="95.88745"
            cy="40"
            r="20"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="95.887 60 95.887 132 183.887 132 215.887 196 239.887 188"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M167.76447,164.00014A64.001,64.001,0,1,1,103.88745,96h56"
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
            cx="95.88745"
            cy="40"
            r="20"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="95.887 60 95.887 132 183.887 132 215.887 196 239.887 188"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M167.76447,164.00014A64.001,64.001,0,1,1,103.88745,96h56"
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

const Wheelchair = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Wheelchair.displayName = "Wheelchair";

export default Wheelchair;
