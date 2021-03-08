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
          <line
            x1="200"
            y1="56"
            x2="56"
            y2="200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <circle
            cx="76"
            cy="76"
            r="28"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <circle
            cx="180"
            cy="180"
            r="28"
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
          <circle cx="76" cy="76" r="28" opacity="0.2" />
          <circle cx="180" cy="180" r="28" opacity="0.2" />
          <line
            x1="200"
            y1="56"
            x2="56"
            y2="200"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="76"
            cy="76"
            r="28"
            fill="none"
            stroke={color}
            strokeMiterlimit="10"
            strokeWidth="16"
          />
          <circle
            cx="180"
            cy="180"
            r="28"
            fill="none"
            stroke={color}
            strokeMiterlimit="10"
            strokeWidth="16"
          />
        </>
      );
    case "fill":
      return (
        <>
          <path d="M205.65674,61.65674l-144,144a7.99984,7.99984,0,0,1-11.31348-11.31348l144-144a7.99984,7.99984,0,0,1,11.31348,11.31348ZM50.54443,101.45581A36.0403,36.0403,0,1,1,76,111.98315,35.76294,35.76294,0,0,1,50.54443,101.45581ZM56,76A20,20,0,1,0,90.14209,61.85791v-.00024A20,20,0,0,0,56,76ZM216,180a36.00012,36.00012,0,1,1-10.54443-25.45581A35.76281,35.76281,0,0,1,216,180Zm-16,0a20.00016,20.00016,0,1,0-5.85791,14.14209A19.86721,19.86721,0,0,0,200,180Z" />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="200"
            y1="56"
            x2="56"
            y2="200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle
            cx="76"
            cy="76"
            r="28"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle
            cx="180"
            cy="180"
            r="28"
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
          <line
            x1="200"
            y1="56"
            x2="56"
            y2="200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <circle
            cx="76"
            cy="76"
            r="28"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <circle
            cx="180"
            cy="180"
            r="28"
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
          <line
            x1="200"
            y1="56"
            x2="56"
            y2="200"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="76"
            cy="76"
            r="28"
            fill="none"
            stroke={color}
            strokeMiterlimit="10"
            strokeWidth="16"
          />
          <circle
            cx="180"
            cy="180"
            r="28"
            fill="none"
            stroke={color}
            strokeMiterlimit="10"
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

const Percent = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Percent.displayName = "Percent";

export default Percent;
