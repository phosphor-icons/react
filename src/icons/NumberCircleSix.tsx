/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
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
            d="M103.75129,133.98956a28,28,0,1,1-2.79721,21.24694A27.91236,27.91236,0,0,1,103.75129,133.98956Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="103.75129"
            y1="133.98956"
            x2="134.92552"
            y2="79.99421"
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
            d="M103.75129,133.98956a28,28,0,1,1-2.79721,21.24694A27.91236,27.91236,0,0,1,103.75129,133.98956Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="103.75129"
            y1="133.98956"
            x2="134.92552"
            y2="79.99421"
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
          <g>
            <path d="M138,130.67188a19.8777,19.8777,0,0,0-9.96875-2.69532,20.09907,20.09907,0,0,0-5.20312.69532,20.0058,20.0058,0,1,0,15.17187,2Z" />
            <path d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm31.17969,141.99219a35.79746,35.79746,0,0,1-21.85156,16.77344,36.33051,36.33051,0,0,1-9.375,1.24218,36.01571,36.01571,0,0,1-31.13282-54.01562l31.17188-54a8.00128,8.00128,0,1,1,13.85937,8l-16.19824,28.05957a36.014,36.014,0,0,1,33.52637,53.94043Z" />
          </g>
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
            d="M103.75129,133.98956a28,28,0,1,1-2.79721,21.24694A27.91236,27.91236,0,0,1,103.75129,133.98956Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="103.75129"
            y1="133.98956"
            x2="134.92552"
            y2="79.99421"
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
            d="M103.75129,133.98956a28,28,0,1,1-2.79721,21.24694A27.91236,27.91236,0,0,1,103.75129,133.98956Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="103.75129"
            y1="133.98956"
            x2="134.92552"
            y2="79.99421"
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
            d="M103.75129,133.98956a28,28,0,1,1-2.79721,21.24694A27.91236,27.91236,0,0,1,103.75129,133.98956Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="103.75129"
            y1="133.98956"
            x2="134.92552"
            y2="79.99421"
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

const NumberCircleSix = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

NumberCircleSix.displayName = "NumberCircleSix";

export default NumberCircleSix;
