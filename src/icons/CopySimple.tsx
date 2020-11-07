/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <polyline
            points="215.993 183.995 215.993 39.994 71.986 39.994"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <rect
            x="39.98633"
            y="71.99512"
            width="144.00586"
            height="144"
            strokeWidth="24"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      );
    case "duotone":
      return (
        <>
          <rect
            x="39.98633"
            y="71.99512"
            width="144.00586"
            height="144"
            opacity="0.2"
          />
          <polyline
            points="215.993 183.995 215.993 39.994 71.986 39.994"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="39.98633"
            y="71.99512"
            width="144.00586"
            height="144"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      );
    case "fill":
      return (
        <>
          <g>
            <path d="M215.99365,31.99414H71.98682a8,8,0,1,0,0,16H207.99365v136.001a8,8,0,0,0,16,0V39.99414A8.00008,8.00008,0,0,0,215.99365,31.99414Z" />
            <rect
              x="31.98682"
              y="63.99512"
              width="160.00586"
              height="160"
              rx="8"
            />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <polyline
            points="215.993 183.995 215.993 39.994 71.986 39.994"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <rect
            x="39.98633"
            y="71.99512"
            width="144.00586"
            height="144"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      );
    case "thin":
      return (
        <>
          <polyline
            points="215.993 183.995 215.993 39.994 71.986 39.994"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <rect
            x="39.98633"
            y="71.99512"
            width="144.00586"
            height="144"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      );
    case "regular":
      return (
        <>
          <polyline
            points="215.993 183.995 215.993 39.994 71.986 39.994"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="39.98633"
            y="71.99512"
            width="144.00586"
            height="144"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
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

const CopySimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

CopySimple.displayName = "CopySimple";

export default CopySimple;
