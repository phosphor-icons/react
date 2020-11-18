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
            x1="83.99707"
            y1="116"
            x2="147.99707"
            y2="116"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="115.99707"
            y1="84"
            x2="115.99707"
            y2="148"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <circle
            cx="115.99707"
            cy="115.99609"
            r="84"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="175.39063"
            y1="175.39649"
            x2="223.99121"
            y2="223.99707"
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
          <circle cx="115.99512" cy="115.99609" r="84" opacity="0.2" />
          <line
            x1="83.99512"
            y1="116"
            x2="147.99512"
            y2="116"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="115.99512"
            y1="84"
            x2="115.99512"
            y2="148"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="115.99512"
            cy="115.99609"
            r="84"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="175.38868"
            y1="175.39649"
            x2="223.98926"
            y2="223.99707"
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
          <path d="M229.64746,218.34033l-43.2229-43.22284a92.11133,92.11133,0,1,0-11.31445,11.31342l43.2229,43.2229a8.00018,8.00018,0,1,0,11.31445-11.31348ZM147.99609,124h-24v24a8,8,0,0,1-16,0V124h-24a8,8,0,1,1,0-16h24V84a8,8,0,0,1,16,0v24h24a8,8,0,0,1,0,16Z" />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="83.99805"
            y1="116"
            x2="147.99805"
            y2="116"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="115.99805"
            y1="84"
            x2="115.99805"
            y2="148"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle
            cx="115.99805"
            cy="115.99609"
            r="84"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="175.39161"
            y1="175.39649"
            x2="223.99219"
            y2="223.99707"
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
            x1="83.99902"
            y1="116"
            x2="147.99902"
            y2="116"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="115.99902"
            y1="84"
            x2="115.99902"
            y2="148"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <circle
            cx="115.99902"
            cy="115.99609"
            r="84"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="175.39258"
            y1="175.39649"
            x2="223.99316"
            y2="223.99707"
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
            x1="84"
            y1="116"
            x2="148"
            y2="116"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="116"
            y1="84"
            x2="116"
            y2="148"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="116"
            cy="115.99609"
            r="84"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="175.39356"
            y1="175.39649"
            x2="223.99414"
            y2="223.99707"
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

const MagnifyingGlassPlus = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
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
  }
);

MagnifyingGlassPlus.displayName = "MagnifyingGlassPlus";

export default MagnifyingGlassPlus;
