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
            x1="128"
            y1="116"
            x2="128"
            y2="172"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="156"
            y1="144"
            x2="100"
            y2="144"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <rect
            x="32.00781"
            y="72.00005"
            width="192"
            height="144"
            rx="8"
            strokeWidth="24"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M168,72V52a16,16,0,0,0-16-16H104A16,16,0,0,0,88,52V72"
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
          <rect
            x="32.00781"
            y="72.00005"
            width="192"
            height="144"
            rx="8"
            opacity="0.2"
          />
          <line
            x1="128"
            y1="116"
            x2="128"
            y2="172"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="156"
            y1="144"
            x2="100"
            y2="144"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="32.00781"
            y="72.00005"
            width="192"
            height="144"
            rx="8"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M168,72V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V72"
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
          <path d="M216.00781,64H176V56a24.0275,24.0275,0,0,0-24-24H104A24.0275,24.0275,0,0,0,80,56v8H40.00781a16.01833,16.01833,0,0,0-16,16V208a16.01833,16.01833,0,0,0,16,16h176a16.01833,16.01833,0,0,0,16-16V80A16.01833,16.01833,0,0,0,216.00781,64ZM96,56a8.00917,8.00917,0,0,1,8-8h48a8.00917,8.00917,0,0,1,8,8v8H96Zm60,96H136v20a8,8,0,0,1-16,0V152H100a8,8,0,0,1,0-16h20V116a8,8,0,0,1,16,0v20h20a8,8,0,0,1,0,16Z" />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="128"
            y1="116"
            x2="128"
            y2="172"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="156"
            y1="144"
            x2="100"
            y2="144"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <rect
            x="32.00781"
            y="72.00005"
            width="192"
            height="144"
            rx="8"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M168,72V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V72"
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
            x1="128"
            y1="116"
            x2="128"
            y2="172"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="156"
            y1="144"
            x2="100"
            y2="144"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <rect
            x="32.00781"
            y="72.00005"
            width="192"
            height="144"
            rx="8"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M168,72V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V72"
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
          <rect
            x="32"
            y="72"
            width="192"
            height="144"
            rx="8"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M168,72V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V72"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="128"
            y1="116"
            x2="128"
            y2="172"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="156"
            y1="144"
            x2="100"
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

const FirstAidKit = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

FirstAidKit.displayName = "FirstAidKit";

export default FirstAidKit;
