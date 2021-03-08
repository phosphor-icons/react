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
          <rect
            x="32"
            y="68"
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
            d="M168,68V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V68"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="32"
            y1="160"
            x2="224"
            y2="160"
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
            d="M224,160v48a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V160"
            opacity="0.2"
          />
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
            x1="32"
            y1="160"
            x2="224"
            y2="160"
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
          <path d="M216.0006,64H175.99429V56a24.027,24.027,0,0,0-23.9991-24H103.997A24.027,24.027,0,0,0,79.9979,56v8H40.00721a16.018,16.018,0,0,0-15.9994,16v79.84521c-.001.05225-.00781.10254-.00781.15479s.00684.10254.00781.15479V208a16.018,16.018,0,0,0,15.9994,16H216.0006A16.018,16.018,0,0,0,232,208V80A16.018,16.018,0,0,0,216.0006,64ZM95.9973,56a8.009,8.009,0,0,1,7.9997-8h47.99819a8.009,8.009,0,0,1,7.9997,8v8H95.9973ZM216.0006,80l.00586,72H40.00721V80Z" />
        </>
      );
    case "light":
      return (
        <>
          <rect
            x="32"
            y="72"
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
          <line
            x1="32"
            y1="160"
            x2="224"
            y2="160"
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
          <rect
            x="32"
            y="72"
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
          <line
            x1="32"
            y1="160"
            x2="224"
            y2="160"
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
            x1="32"
            y1="160"
            x2="224"
            y2="160"
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

const SuitcaseSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

SuitcaseSimple.displayName = "SuitcaseSimple";

export default SuitcaseSimple;
