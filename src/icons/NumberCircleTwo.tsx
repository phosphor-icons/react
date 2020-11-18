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
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M105.886,94.65812a24.00621,24.00621,0,1,1,42.01514,22.76051L104,176v-.00575h48"
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
          <circle cx="128" cy="128" r="96" opacity="0.2" />
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeMiterlimit="10"
            strokeWidth="16"
          />
          <path
            d="M105.886,94.65812a24.00621,24.00621,0,1,1,42.01514,22.76051L104,176v-.00575h48"
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
          <path d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm24,143.99219V168a8,8,0,0,1,0,16c-.01367,0-.02539-.00781-.03906-.00781H104a8.00208,8.00208,0,0,1-6.40625-12.79688L141.5,112.625a17.79731,17.79731,0,0,0,1.25-2.40625,16.36714,16.36714,0,0,0,.9375-3.02344,16.453,16.453,0,0,0-.01562-6.46094,16.10333,16.10333,0,0,0-.92188-2.95312,17.5608,17.5608,0,0,0-1.48438-2.75,16.40474,16.40474,0,0,0-1.9375-2.32031,15.46257,15.46257,0,0,0-2.35937-1.96875,16.80246,16.80246,0,0,0-2.75-1.49219,16.21455,16.21455,0,0,0-2.98437-.92969,16.6897,16.6897,0,0,0-6.46876,0,16.04167,16.04167,0,0,0-5.70312,2.40625,15.90611,15.90611,0,0,0-2.35938,1.9375,17.25551,17.25551,0,0,0-2.01562,2.44531,16.93344,16.93344,0,0,0-1.4375,2.67188,7.99538,7.99538,0,1,1-14.71875-6.25,31.33474,31.33474,0,0,1,2.92187-5.40625,32.828,32.828,0,0,1,3.9375-4.77344,32.54,32.54,0,0,1,10.14063-6.83594A32.099,32.099,0,0,1,140.4375,74.5a31.76923,31.76923,0,0,1,5.46875,2.97656,30.64309,30.64309,0,0,1,4.73437,3.92188,31.24926,31.24926,0,0,1,6.82813,10.13281A31.66568,31.66568,0,0,1,160,104a32.04561,32.04561,0,0,1-.64062,6.40625,32.632,32.632,0,0,1-1.89063,6.0625,31.33474,31.33474,0,0,1-2.92187,5.40625L120,168Z" />
        </>
      );
    case "light":
      return (
        <>
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M105.886,94.65812a24.00621,24.00621,0,1,1,42.01514,22.76051L104,176v-.00575h48"
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
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M105.886,94.65812a24.00621,24.00621,0,1,1,42.01514,22.76051L104,176v-.00575h48"
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
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeMiterlimit="10"
            strokeWidth="16"
          />
          <path
            d="M105.886,94.65812a24.00621,24.00621,0,1,1,42.01514,22.76051L104,176v-.00575h48"
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

const NumberCircleTwo = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

NumberCircleTwo.displayName = "NumberCircleTwo";

export default NumberCircleTwo;
