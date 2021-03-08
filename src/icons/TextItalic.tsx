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
            x1="151.99414"
            y1="55.99512"
            x2="103.99414"
            y2="199.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="63.99414"
            y1="199.99512"
            x2="143.99414"
            y2="199.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="111.99414"
            y1="55.99512"
            x2="191.99414"
            y2="55.99512"
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
          <line
            x1="151.99414"
            y1="55.99512"
            x2="103.99414"
            y2="199.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="63.99414"
            y1="199.99512"
            x2="143.99414"
            y2="199.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="111.99414"
            y1="55.99512"
            x2="191.99414"
            y2="55.99512"
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
          <path d="M199.99414,55.99512a8.00008,8.00008,0,0,1-8,8H157.76l-42.6665,128h28.90063a8,8,0,0,1,0,16H104.02307l-.028.002-.02735-.002H63.99414a8,8,0,0,1,0-16H98.22827l42.66651-128H111.99414a8,8,0,0,1,0-16h80A8.00008,8.00008,0,0,1,199.99414,55.99512Z" />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="151.99414"
            y1="55.99512"
            x2="103.99414"
            y2="199.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="63.99414"
            y1="199.99512"
            x2="143.99414"
            y2="199.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="111.99414"
            y1="55.99512"
            x2="191.99414"
            y2="55.99512"
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
            x1="151.99414"
            y1="55.99512"
            x2="103.99414"
            y2="199.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="63.99414"
            y1="199.99512"
            x2="143.99414"
            y2="199.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="111.99414"
            y1="55.99512"
            x2="191.99414"
            y2="55.99512"
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
            x1="151.99414"
            y1="55.99512"
            x2="103.99414"
            y2="199.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="63.99414"
            y1="199.99512"
            x2="143.99414"
            y2="199.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="111.99414"
            y1="55.99512"
            x2="191.99414"
            y2="55.99512"
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

const TextItalic = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

TextItalic.displayName = "TextItalic";

export default TextItalic;
