/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <path
            d="M128,182.85771l100.29985,32.65553c7.59856,2.47393,14.49683-4.967,10.55448-11.38472L135.6179,36.07042c-3.33389-5.42723-11.90191-5.42723-15.2358,0L17.14567,204.12852c-3.94235,6.41773,2.95592,13.85865,10.55448,11.38472Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="128"
            y1="182.85771"
            x2="128.00028"
            y2="32.00004"
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
          <rect width="256" height="256" fill="none" />
          <path
            d="M128,182.85771,27.70015,215.51324c-7.59856,2.47393-14.49683-4.967-10.55448-11.38472L120.3821,36.07042c3.33389-5.42723,11.90191-5.42723,15.2358,0l103.23643,168.0581c3.94235,6.41773-2.95592,13.85865-10.55448,11.38472Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="128"
            y1="182.85771"
            x2="127.99972"
            y2="32.00004"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M128,182.85771,27.70015,215.51324c-7.59856,2.47393-14.49683-4.967-10.55448-11.38472L120.3821,36.07042A8.82479,8.82479,0,0,1,127.99973,32L128,182.85771"
            opacity="0.2"
          />
        </>
      );
    case "fill":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <path d="M245.67065,199.94141,142.43432,31.88281a17.1564,17.1564,0,0,0-28.86816,0L10.32885,199.94141a15.314,15.314,0,0,0,1.043,17.65185,17.19546,17.19546,0,0,0,18.80469,5.52686L127.99975,191.271,225.823,223.12012a17.51894,17.51894,0,0,0,5.42675.8623,17.00818,17.00818,0,0,0,13.37793-6.38916A15.314,15.314,0,0,0,245.67065,199.94141Zm-14.89453,7.96484-94.77637-30.85742V51.97607L231.78,207.89893A1.32873,1.32873,0,0,1,230.77612,207.90625Z" />
        </>
      );
    case "light":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <path
            d="M128,182.85771l100.29985,32.65553c7.59856,2.47393,14.49683-4.967,10.55448-11.38472L135.6179,36.07042c-3.33389-5.42723-11.90191-5.42723-15.2358,0L17.14567,204.12852c-3.94235,6.41773,2.95592,13.85865,10.55448,11.38472Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="128"
            y1="182.85771"
            x2="128.00028"
            y2="32.00004"
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
          <rect width="256" height="256" fill="none" />
          <path
            d="M128,182.85771l100.29985,32.65553c7.59856,2.47393,14.49683-4.967,10.55448-11.38472L135.6179,36.07042c-3.33389-5.42723-11.90191-5.42723-15.2358,0L17.14567,204.12852c-3.94235,6.41773,2.95592,13.85865,10.55448,11.38472Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="128"
            y1="182.85771"
            x2="128.00028"
            y2="32.00004"
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
          <rect width="256" height="256" fill="none" />
          <g>
            <path
              d="M128,182.85771l100.29985,32.65553c7.59856,2.47393,14.49683-4.967,10.55448-11.38472L135.6179,36.07042c-3.33389-5.42723-11.90191-5.42723-15.2358,0L17.14567,204.12852c-3.94235,6.41773,2.95592,13.85865,10.55448,11.38472Z"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <line
              x1="128"
              y1="182.85771"
              x2="128.00028"
              y2="32.00004"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
          </g>
        </>
      );
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const PaperPlane = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

PaperPlane.displayName = "PaperPlane";

export default PaperPlane;
