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
            d="M176,211.16115V176a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v35.16442"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M96,168V136a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M147.83843,128,135.70664,84.4441a8,8,0,0,0-15.41328,0L108.16157,128Z"
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
            d="M175.99816,211.158a96,96,0,1,0-95.99492.00082L80,211.16442V176a8,8,0,0,1,8-8h8V144a8,8,0,0,1,8-8h4.1616l12.00656-57.63163c1.769-8.49116,13.89469-8.49116,15.66368,0L147.83843,136H152a8,8,0,0,1,8,8v24h8a8,8,0,0,1,8,8v35.16115Z"
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
          <path
            d="M176,211.16115V176a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v35.16442"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M96,168V144a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v24"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M147.83843,136,135.83184,78.36837c-1.769-8.49116-13.89469-8.49116-15.66368,0L108.16157,136"
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
          <path d="M201.53906,54.46094A103.99994,103.99994,0,1,0,54.46094,201.53906,103.99994,103.99994,0,1,0,201.53906,54.46094ZM88,206.37012V176h80v30.37012A88.38031,88.38031,0,0,1,88,206.37012ZM104,136h43.78662c.01514.00006.03027.00195.04541.00195.01148,0,.02344-.00189.03491-.00195H152v24H104Zm86.22461,54.22559c-2.0022,2.00225-4.08447,3.87616-6.22461,5.64471V176a16.01833,16.01833,0,0,0-16-16V136a16.01128,16.01128,0,0,0-13.7356-15.82068L143.60156,73.2998a15.99991,15.99991,0,0,0-31.20312-.00048l-10.66284,46.88A16.01132,16.01132,0,0,0,88,136v24a16.01833,16.01833,0,0,0-16,16v19.8703c-2.14014-1.76855-4.22241-3.64246-6.22461-5.64471a88,88,0,1,1,124.44922,0Z" />
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
            d="M176,211.16115V176a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v35.16442"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M96,168V144a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v24"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M147.83843,136,135.83184,78.36837c-1.769-8.49116-13.89469-8.49116-15.66368,0L108.16157,136"
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
            d="M176,211.16115V176a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v35.16442"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M96,168V144a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v24"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M147.83843,136,135.83184,78.36837c-1.769-8.49116-13.89469-8.49116-15.66368,0L108.16157,136"
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
          <path
            d="M176,211.16115V176a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v35.16442"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M96,168V144a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v24"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M147.83843,136,135.83184,78.36837c-1.769-8.49116-13.89469-8.49116-15.66368,0L108.16157,136"
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

const MarkerCircle = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

MarkerCircle.displayName = "MarkerCircle";

export default MarkerCircle;
