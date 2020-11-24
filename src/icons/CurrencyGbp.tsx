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
          <g>
            <line
              x1="56"
              y1="132"
              x2="136"
              y2="132"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            />
            <path
              d="M184,208H56a36,36,0,0,0,36-36V84a44,44,0,0,1,75.11269-31.11271"
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
          <g>
            <line
              x1="56"
              y1="132"
              x2="136"
              y2="132"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <path
              d="M184,208H56a36,36,0,0,0,36-36V84a44,44,0,0,1,75.11269-31.11271"
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
          <path d="M192,208a8.00008,8.00008,0,0,1-8,8H56a8,8,0,0,1,0-16,28.03146,28.03146,0,0,0,28-28V140H56a8,8,0,0,1,0-16H84V84a52,52,0,0,1,88.76953-36.76953A8.00018,8.00018,0,0,1,161.45508,58.544,35.99961,35.99961,0,0,0,100,84v40h36a8,8,0,0,1,0,16H100v32a43.79772,43.79772,0,0,1-10.083,28H184A8.00008,8.00008,0,0,1,192,208Z" />
        </>
      );
    case "light":
      return (
        <>
          <g>
            <line
              x1="56"
              y1="132"
              x2="136"
              y2="132"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="12"
            />
            <path
              d="M184,208H56a36,36,0,0,0,36-36V84a44,44,0,0,1,75.11269-31.11271"
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
          <g>
            <line
              x1="56"
              y1="132"
              x2="136"
              y2="132"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="8"
            />
            <path
              d="M184,208H56a36,36,0,0,0,36-36V84a44,44,0,0,1,75.11269-31.11271"
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
          <g>
            <line
              x1="56"
              y1="132"
              x2="136"
              y2="132"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <path
              d="M184,208H56a36,36,0,0,0,36-36V84a44,44,0,0,1,75.11269-31.11271"
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

const CurrencyGbp = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

CurrencyGbp.displayName = "CurrencyGbp";

export default CurrencyGbp;
