/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path
            d="M215.98242,216V115.53887a8,8,0,0,0-2.6185-5.91942l-80.0055-72.73509a8,8,0,0,0-10.76339.00036l-79.9945,72.73477a8,8,0,0,0-2.61811,5.91906V216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="15.98242"
            y1="216"
            x2="239.98242"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="151.977 215.992 151.977 151.992 103.977 151.992 103.977 215.992"
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
            d="M151.96484,215.99158v-64h-48v64L39.9707,216V115.53855a8,8,0,0,1,2.61811-5.91906l79.9945-72.73477a8,8,0,0,1,10.76339-.00036l80.0055,72.73509a8,8,0,0,1,2.6185,5.91942V216Z"
            opacity="0.2"
          />
          <path
            d="M215.9707,216V115.53887a8,8,0,0,0-2.6185-5.91942L133.3467,36.88436a8,8,0,0,0-10.76339.00036l-79.9945,72.73477a8,8,0,0,0-2.61811,5.91906V216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="15.9707"
            y1="216"
            x2="239.9707"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="151.965 215.992 151.965 151.992 103.965 151.992 103.965 215.992"
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
          <path d="M239.97656,208h-16V115.53882A16.03729,16.03729,0,0,0,218.74023,103.7L138.7334,30.96484a15.93607,15.93607,0,0,0-21.52637.001L37.21289,103.7a16.034,16.034,0,0,0-5.23633,11.83862V208h-16a8,8,0,0,0,0,16h224a8,8,0,0,0,0-16ZM103.99414,144h48v64h-48Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M215.98828,216V115.53887a8,8,0,0,0-2.6185-5.91942l-80.0055-72.73509a8,8,0,0,0-10.76339.00036l-79.9945,72.73477a8,8,0,0,0-2.61811,5.91906V216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="15.98828"
            y1="216"
            x2="239.98828"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="151.982 215.992 151.982 151.992 103.982 151.992 103.982 215.992"
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
            d="M215.99414,216V115.53887a8,8,0,0,0-2.6185-5.91942l-80.0055-72.73509a8,8,0,0,0-10.76339.00036l-79.9945,72.73477a8,8,0,0,0-2.61811,5.91906V216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="15.99414"
            y1="216"
            x2="239.99414"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="151.988 215.992 151.988 151.992 103.988 151.992 103.988 215.992"
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
            d="M216,216V115.53887a8,8,0,0,0-2.6185-5.91942L133.376,36.88436a8,8,0,0,0-10.76339.00036l-79.9945,72.73477A8,8,0,0,0,40,115.53855V216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="16"
            y1="216"
            x2="240"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="151.994 215.992 151.994 151.992 103.994 151.992 103.994 215.992"
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

const HouseLine = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

HouseLine.displayName = "HouseLine";

export default HouseLine;
