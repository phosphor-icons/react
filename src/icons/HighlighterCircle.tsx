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
          <polyline
            points="104 148 104 104 152 80 152 148"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M168,215.29789V156a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8v59.29789"
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
            d="M195.88232,60.11774A96.00007,96.00007,0,1,0,88,215.28711V152a8,8,0,0,1,8-8h8V96l48-24v72h8a8,8,0,0,1,8,8v63.28711A96.03847,96.03847,0,0,0,195.88232,60.11774Z"
            opacity="0.2"
          />
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="104 144 104 96 152 72 152 144"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M168,215.29789V152a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8v63.29789"
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
          <path d="M201.53906,54.46094A103.99994,103.99994,0,1,0,54.46094,201.53906,103.99994,103.99994,0,1,0,201.53906,54.46094ZM96,209.9989V152h64v57.9989a88.31824,88.31824,0,0,1-64,0Zm94.22461-19.77429A88.78305,88.78305,0,0,1,176,201.76886V152a16.01833,16.01833,0,0,0-16-16V72a8,8,0,0,0-11.57812-7.15527l-48,24A7.99967,7.99967,0,0,0,96,96v40a16.01833,16.01833,0,0,0-16,16v49.76886a88.78631,88.78631,0,0,1-14.22461-11.54425,88,88,0,1,1,124.44922,0Z" />
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
          <polyline
            points="104 144 104 96 152 72 152 144"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M168,215.29789V152a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8v63.29789"
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
          <polyline
            points="104 144 104 96 152 72 152 144"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M168,215.29789V152a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8v63.29789"
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
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="104 144 104 96 152 72 152 144"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M168,215.29789V152a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8v63.29789"
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

const HighlighterCircle = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

HighlighterCircle.displayName = "HighlighterCircle";

export default HighlighterCircle;
