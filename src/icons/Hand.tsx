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
          <path
            d="M168,120V68a20,20,0,0,1,40,0v84a80,80,0,0,1-80,80c-44.18278,0-64-24-96.56854-92.71349a20,20,0,1,1,34.641-20L88,157.26608V52a20,20,0,0,1,40,0v68"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M168,120V36a20,20,0,0,0-40,0v84"
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
          <g opacity="0.2">
            <path d="M128,52V36a20,20,0,0,1,40,0V68a20,20,0,0,1,40,0v84a80,80,0,0,1-80,80c-44.18278,0-64-24-96.56854-92.71349a20,20,0,1,1,34.641-20L88,157.26608V52a20,20,0,0,1,40,0Z" />
          </g>
          <path
            d="M168,120V68a20,20,0,0,1,40,0v84a80,80,0,0,1-80,80c-44.18278,0-64-24-96.56854-92.71349a20,20,0,1,1,34.641-20L88,157.26608V52a20,20,0,0,1,40,0v68"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M168,120V36a20,20,0,0,0-40,0v84"
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
          <path d="M188,40a27.82979,27.82979,0,0,0-12,2.707V36a27.99792,27.99792,0,0,0-54.64209-8.60278A27.992,27.992,0,0,0,80,52v75.41016l-6.999-12.12354a28.00028,28.00028,0,0,0-48.6709,27.69629C56.77832,211.39941,78.39355,240,128,240a88.09957,88.09957,0,0,0,88-88V68A28.03146,28.03146,0,0,0,188,40Zm12,112a72.08124,72.08124,0,0,1-72,72c-20.17871,0-34.22656-5.45459-46.97461-18.23828-12.499-12.53369-24.77246-32.78565-42.36426-69.90137q-.13916-.293-.30175-.57422a12.00011,12.00011,0,0,1,20.78515-11.99951l21.92774,37.97949a7.9997,7.9997,0,0,0,14.92773-4V52a12,12,0,0,1,24,0v68a8,8,0,0,0,16,0V36a12,12,0,0,1,24,0v84a8,8,0,0,0,16,0V68a12,12,0,0,1,24,0Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M168,120V68a20,20,0,0,1,40,0v84a80,80,0,0,1-80,80c-44.18278,0-64-24-96.56854-92.71349a20,20,0,1,1,34.641-20L88,157.26608V52a20,20,0,0,1,40,0v68"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M168,120V36a20,20,0,0,0-40,0v84"
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
            d="M168,120V68a20,20,0,0,1,40,0v84a80,80,0,0,1-80,80c-44.18278,0-64-24-96.56854-92.71349a20,20,0,1,1,34.641-20L88,157.26608V52a20,20,0,0,1,40,0v68"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M168,120V36a20,20,0,0,0-40,0v84"
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
            d="M168,120V68a20,20,0,0,1,40,0v84a80,80,0,0,1-80,80c-44.18278,0-64-24-96.56854-92.71349a20,20,0,1,1,34.641-20L88,157.26608V52a20,20,0,0,1,40,0v68"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M168,120V36a20,20,0,0,0-40,0v84"
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

const Hand = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Hand.displayName = "Hand";

export default Hand;
