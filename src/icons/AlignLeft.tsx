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
            x1="39.99414"
            y1="39.99512"
            x2="39.99414"
            y2="215.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <rect
            x="80"
            y="56"
            width="104"
            height="52"
            rx="8"
            strokeWidth="24"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="80"
            y="148"
            width="144"
            height="52"
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
          <rect x="72" y="56" width="112" height="56" rx="8" opacity="0.2" />
          <rect x="72" y="144" width="152" height="56" rx="8" opacity="0.2" />
          <rect
            x="72"
            y="144"
            width="152"
            height="56"
            rx="8"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <line
            x1="39.99414"
            y1="39.99512"
            x2="39.99414"
            y2="215.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="72"
            y="56"
            width="112"
            height="56"
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
          <path d="M47.99414,39.99512v176a8,8,0,0,1-16,0v-176a8,8,0,0,1,16,0ZM80,120h96a16.01833,16.01833,0,0,0,16-16V64a16.01833,16.01833,0,0,0-16-16H80A16.01833,16.01833,0,0,0,64,64v40A16.01833,16.01833,0,0,0,80,120Zm136,16H80a16.01833,16.01833,0,0,0-16,16v40a16.01833,16.01833,0,0,0,16,16H216a16.01833,16.01833,0,0,0,16-16V152A16.01833,16.01833,0,0,0,216,136Z" />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="39.99414"
            y1="39.99512"
            x2="39.99414"
            y2="215.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <rect
            x="72"
            y="56"
            width="112"
            height="56"
            rx="8"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="72"
            y="144"
            width="152"
            height="56"
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
            x1="39.99414"
            y1="39.99512"
            x2="39.99414"
            y2="215.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <rect
            x="72"
            y="56"
            width="112"
            height="56"
            rx="8"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="72"
            y="144"
            width="152"
            height="56"
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
            x1="39.99414"
            y1="39.99512"
            x2="39.99414"
            y2="215.99512"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="72"
            y="56"
            width="112"
            height="56"
            rx="8"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="72"
            y="144"
            width="152"
            height="56"
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

const AlignLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

AlignLeft.displayName = "AlignLeft";

export default AlignLeft;
