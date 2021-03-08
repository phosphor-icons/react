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
          <ellipse
            cx="70"
            cy="128"
            rx="54"
            ry="60"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <ellipse
            cx="182"
            cy="128"
            rx="22"
            ry="56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="240"
            y1="72.00003"
            x2="240"
            y2="184.00001"
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
          <ellipse cx="72" cy="128" rx="56" ry="60" opacity="0.2" />
          <ellipse cx="184" cy="128" rx="24" ry="55.99999" opacity="0.2" />
          <ellipse
            cx="72"
            cy="128"
            rx="56"
            ry="60"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <ellipse
            cx="184"
            cy="128"
            rx="24"
            ry="55.99999"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="240"
            y1="72.00003"
            x2="240"
            y2="184.00001"
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
          <path d="M136,128c0,37.49512-28.71,68-64,68S8,165.49514,8,128,36.71,60,72,60,136,90.5049,136,128Zm48-64c-5.68262,0-16.39941,2.76074-24.32373,21.251C154.72607,96.8008,152,111.98342,152,128s2.72607,31.19922,7.67627,42.749C167.60059,189.23928,178.31738,192,184,192s16.39941-2.76074,24.32373-21.251C213.27393,159.19924,216,144.01662,216,128s-2.72607-31.19922-7.67627-42.749C200.39941,66.76076,189.68262,64,184,64Zm56,0a8.00039,8.00039,0,0,0-8,8V184a8,8,0,0,0,16,0V72A8.00039,8.00039,0,0,0,240,64Z" />
        </>
      );
    case "light":
      return (
        <>
          <ellipse
            cx="72"
            cy="128"
            rx="56"
            ry="60"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <ellipse
            cx="184"
            cy="128"
            rx="24"
            ry="55.99999"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="240"
            y1="72.00003"
            x2="240"
            y2="184.00001"
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
          <ellipse
            cx="72"
            cy="128"
            rx="56"
            ry="60"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <ellipse
            cx="184"
            cy="128"
            rx="24"
            ry="55.99999"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="240"
            y1="72.00003"
            x2="240"
            y2="184.00001"
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
          <ellipse
            cx="72"
            cy="128"
            rx="56"
            ry="60"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <ellipse
            cx="184"
            cy="128"
            rx="24"
            ry="55.99999"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="240"
            y1="72.00003"
            x2="240"
            y2="184.00001"
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

const MediumLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

MediumLogo.displayName = "MediumLogo";

export default MediumLogo;
