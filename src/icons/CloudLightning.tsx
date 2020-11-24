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
          <polyline
            points="128 240 154.25 200 104 200 130.25 160"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792"
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
            d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792"
            opacity="0.2"
          />
          <polyline
            points="128 240 154.25 200 104 200 130.25 160"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792"
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
          <path d="M134.564,168l-15.75,24h35.43116a8.00016,8.00016,0,0,1,6.68847,12.38916l-26.25,40a8,8,0,1,1-13.377-8.77832L139.42627,208H103.99512a8.00017,8.00017,0,0,1-6.68848-12.38916L115.42627,168H75.99512A52.0014,52.0014,0,0,1,68.16479,64.59033,91.68713,91.68713,0,0,0,63.99512,92a8,8,0,0,0,16,0,75.62312,75.62312,0,0,1,5.03723-27.2168l.007-.01758A76.00126,76.00126,0,1,1,155.99512,168Z" />
        </>
      );
    case "light":
      return (
        <>
          <polyline
            points="128 240 154.25 200 104 200 130.25 160"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792"
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
          <polyline
            points="128 240 154.25 200 104 200 130.25 160"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792"
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
          <polyline
            points="128 240 154.25 200 104 200 130.25 160"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792"
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

const CloudLightning = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

CloudLightning.displayName = "CloudLightning";

export default CloudLightning;
