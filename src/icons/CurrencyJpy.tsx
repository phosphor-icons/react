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
            x1="80"
            y1="176"
            x2="176"
            y2="176"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="80"
            y1="136"
            x2="176"
            y2="136"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <g>
            <line
              x1="128"
              y1="136"
              x2="128"
              y2="216"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            />
            <polyline
              points="200 48 128 136 56 48"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            />
          </g>
        </>
      );
    case "duotone":
      return (
        <>
          <line
            x1="80"
            y1="168"
            x2="176"
            y2="168"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="80"
            y1="136"
            x2="176"
            y2="136"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <g>
            <line
              x1="128"
              y1="136"
              x2="128"
              y2="216"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <polyline
              points="200 48 128 136 56 48"
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
          <path d="M206.19141,53.06592,144.88184,128H176a8,8,0,0,1,0,16H136v16h40a8,8,0,0,1,0,16H136v40a8,8,0,0,1-16,0V176H80a8,8,0,0,1,0-16h40V144H80a8,8,0,0,1,0-16h31.11816L49.80859,53.06592A7.99982,7.99982,0,1,1,62.19141,42.93408L128,123.3667l65.80859-80.43262a7.99982,7.99982,0,1,1,12.38282,10.13184Z" />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="80"
            y1="168"
            x2="176"
            y2="168"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="80"
            y1="136"
            x2="176"
            y2="136"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <g>
            <line
              x1="128"
              y1="136"
              x2="128"
              y2="216"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="12"
            />
            <polyline
              points="200 48 128 136 56 48"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="12"
            />
          </g>
        </>
      );
    case "thin":
      return (
        <>
          <line
            x1="80"
            y1="168"
            x2="176"
            y2="168"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="80"
            y1="136"
            x2="176"
            y2="136"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <g>
            <line
              x1="128"
              y1="136"
              x2="128"
              y2="216"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="8"
            />
            <polyline
              points="200 48 128 136 56 48"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="8"
            />
          </g>
        </>
      );
    case "regular":
      return (
        <>
          <line
            x1="80"
            y1="168"
            x2="176"
            y2="168"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="80"
            y1="136"
            x2="176"
            y2="136"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <g>
            <line
              x1="128"
              y1="136"
              x2="128"
              y2="216"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <polyline
              points="200 48 128 136 56 48"
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

const CurrencyJpy = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

CurrencyJpy.displayName = "CurrencyJpy";

export default CurrencyJpy;
