/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line
            x1="47.99463"
            y1="40.00842"
            x2="207.99463"
            y2="216.00842"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M135.40815,88.59185l50.935-50.935A8,8,0,0,1,200,43.31371V159.64292"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M207.99463,216.00842,27.31371,216a8,8,0,0,1-5.65686-13.65685l91.09823-91.09823"
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
            d="M199.99414,43.32213V208.00842a8,8,0,0,1-8,8H27.30785A8,8,0,0,1,21.651,202.35157L186.33729,37.66528A8,8,0,0,1,199.99414,43.32213Z"
            opacity="0.2"
          />
          <path
            d="M135.40815,88.59185l50.935-50.935A8,8,0,0,1,200,43.31371V159.64292"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <g>
            <line
              x1="47.99463"
              y1="40.00842"
              x2="207.99463"
              y2="216.00842"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <path
              d="M207.99463,216H27.31371a8,8,0,0,1-5.65686-13.65685l91.09823-91.09823"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
          </g>
        </>
      );
    case "fill":
      return (
        <>
          <line
            x1="47.99463"
            y1="40.00842"
            x2="207.99463"
            y2="216.00842"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M135.40815,88.59185l50.935-50.935A8,8,0,0,1,200,43.31371V159.64292Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M207.99463,216H27.31371a8,8,0,0,1-5.65686-13.65685l91.09823-91.09823"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path d="M135.40815,88.59185l50.935-50.935A8,8,0,0,1,200,43.31371V159.64292Z" />
          <path d="M207.99463,216.00842,27.31371,216a8,8,0,0,1-5.65686-13.65685l91.09823-91.09823" />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="47.99463"
            y1="40.00842"
            x2="207.99463"
            y2="216.00842"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M135.40815,88.59185l50.935-50.935A8,8,0,0,1,200,43.31371V159.64292"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M207.99463,216.00842,27.31371,216a8,8,0,0,1-5.65686-13.65685l91.09823-91.09823"
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
            x1="47.99463"
            y1="40.00842"
            x2="207.99463"
            y2="216.00842"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M135.40815,88.59185l50.935-50.935A8,8,0,0,1,200,43.31371V159.64292"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M207.99463,216.00842,27.31371,216a8,8,0,0,1-5.65686-13.65685l91.09823-91.09823"
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
            x1="47.99463"
            y1="40.00842"
            x2="207.99463"
            y2="216.00842"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M135.40815,88.59185l50.935-50.935A8,8,0,0,1,200,43.31371V159.64292"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M207.99463,216.00842,27.31371,216a8,8,0,0,1-5.65686-13.65685l91.09823-91.09823"
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

const CellSignalSlash = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

CellSignalSlash.displayName = "CellSignalSlash";

export default CellSignalSlash;
