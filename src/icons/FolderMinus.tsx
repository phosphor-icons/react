/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path
            d="M216.88889,208H39.38462A7.40633,7.40633,0,0,1,32,200.61538V80H216a8,8,0,0,1,8,8V200.88889A7.11111,7.11111,0,0,1,216.88889,208Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M32,80V56a8,8,0,0,1,8-8H92.68629a8,8,0,0,1,5.65686,2.34315L128,80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="104"
            y1="144"
            x2="152"
            y2="144"
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
            d="M98.34315,50.34315,128,80H32V56a8,8,0,0,1,8-8H92.68629A8,8,0,0,1,98.34315,50.34315Z"
            opacity="0.2"
          />
          <path
            d="M216.88889,208H39.38462A7.40633,7.40633,0,0,1,32,200.61538V80H216a8,8,0,0,1,8,8V200.88889A7.11111,7.11111,0,0,1,216.88889,208Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M32,80V56a8,8,0,0,1,8-8H92.68629a8,8,0,0,1,5.65686,2.34315L128,80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="104"
            y1="144"
            x2="152"
            y2="144"
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
          <path d="M215.99512,71.99805h-84.6875l-27.3125-27.3125a15.8907,15.8907,0,0,0-11.3125-4.6875H39.99512a16.01581,16.01581,0,0,0-16,16V200.61523a15.404,15.404,0,0,0,15.39062,15.38282h177.5a15.13062,15.13062,0,0,0,15.10938-15.10938V87.99805A16.01582,16.01582,0,0,0,215.99512,71.99805Zm-176-16h52.6875l16,16H39.99512Zm112,96.00195h-48a8,8,0,1,1,0-16h48a8,8,0,0,1,0,16Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M216.88889,208H39.38462A7.40633,7.40633,0,0,1,32,200.61538V80H216a8,8,0,0,1,8,8V200.88889A7.11111,7.11111,0,0,1,216.88889,208Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M32,80V56a8,8,0,0,1,8-8H92.68629a8,8,0,0,1,5.65686,2.34315L128,80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="104"
            y1="144"
            x2="152"
            y2="144"
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
            d="M216.88889,208H39.38462A7.40633,7.40633,0,0,1,32,200.61538V80H216a8,8,0,0,1,8,8V200.88889A7.11111,7.11111,0,0,1,216.88889,208Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M32,80V56a8,8,0,0,1,8-8H92.68629a8,8,0,0,1,5.65686,2.34315L128,80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="104"
            y1="144"
            x2="152"
            y2="144"
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
            d="M216.88889,208H39.38462A7.40633,7.40633,0,0,1,32,200.61538V80H216a8,8,0,0,1,8,8V200.88889A7.11111,7.11111,0,0,1,216.88889,208Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M32,80V56a8,8,0,0,1,8-8H92.68629a8,8,0,0,1,5.65686,2.34315L128,80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="104"
            y1="144"
            x2="152"
            y2="144"
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

const FolderMinus = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

FolderMinus.displayName = "FolderMinus";

export default FolderMinus;
