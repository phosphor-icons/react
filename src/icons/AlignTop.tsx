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
            x1="216.00488"
            y1="39.99414"
            x2="40.00488"
            y2="39.99414"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <rect
            x="122"
            y="106"
            width="104"
            height="52"
            rx="8"
            transform="translate(306 -42) rotate(90)"
            strokeWidth="24"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="56"
            y="80"
            width="52"
            height="144"
            rx="8"
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
            x="116"
            y="100"
            width="112"
            height="56"
            rx="8"
            transform="translate(300 -44) rotate(90)"
            opacity="0.2"
          />
          <rect x="56" y="72" width="56" height="152" rx="8" opacity="0.2" />
          <line
            x1="216.00488"
            y1="39.99414"
            x2="40.00488"
            y2="39.99414"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="116"
            y="100"
            width="112"
            height="56"
            rx="8"
            transform="translate(300 -44) rotate(90)"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="56"
            y="72"
            width="56"
            height="152"
            rx="8"
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
          <path d="M224.00488,39.99414a7.99977,7.99977,0,0,1-8,8h-176a8,8,0,0,1,0-16h176A7.99977,7.99977,0,0,1,224.00488,39.99414ZM192,64H152a16.01833,16.01833,0,0,0-16,16v96a16.01833,16.01833,0,0,0,16,16h40a16.01833,16.01833,0,0,0,16-16V80A16.01833,16.01833,0,0,0,192,64Zm-88,0H64A16.01833,16.01833,0,0,0,48,80V216a16.01833,16.01833,0,0,0,16,16h40a16.01833,16.01833,0,0,0,16-16V80A16.01833,16.01833,0,0,0,104,64Z" />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="216.00488"
            y1="39.99414"
            x2="40.00488"
            y2="39.99414"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <rect
            x="116"
            y="100"
            width="112"
            height="56"
            rx="8"
            transform="translate(300 -44) rotate(90)"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="56"
            y="72"
            width="56"
            height="152"
            rx="8"
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
          <line
            x1="216.00488"
            y1="39.99414"
            x2="40.00488"
            y2="39.99414"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <rect
            x="116"
            y="100"
            width="112"
            height="56"
            rx="8"
            transform="translate(300 -44) rotate(90)"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="56"
            y="72"
            width="56"
            height="152"
            rx="8"
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
          <line
            x1="216.00488"
            y1="39.99414"
            x2="40.00488"
            y2="39.99414"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="116"
            y="100"
            width="112"
            height="56"
            rx="8"
            transform="translate(300 -44) rotate(90)"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="56"
            y="72"
            width="56"
            height="152"
            rx="8"
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

const AlignTop = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

AlignTop.displayName = "AlignTop";

export default AlignTop;
