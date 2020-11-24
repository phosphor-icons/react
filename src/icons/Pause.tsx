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
            x="156"
            y="40"
            width="52"
            height="176"
            rx="8"
            strokeWidth="24"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="48"
            y="40"
            width="52"
            height="176"
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
          <rect x="156" y="40" width="52" height="176" rx="8" opacity="0.2" />
          <rect x="48" y="40" width="52" height="176" rx="8" opacity="0.2" />
          <rect
            x="156"
            y="40"
            width="52"
            height="176"
            rx="8"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="48"
            y="40"
            width="52"
            height="176"
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
          <path d="M216,48V208a16.01833,16.01833,0,0,1-16,16H164a16.01833,16.01833,0,0,1-16-16V48a16.01833,16.01833,0,0,1,16-16h36A16.01833,16.01833,0,0,1,216,48ZM92,32H56A16.01833,16.01833,0,0,0,40,48V208a16.01833,16.01833,0,0,0,16,16H92a16.01833,16.01833,0,0,0,16-16V48A16.01833,16.01833,0,0,0,92,32Z" />
        </>
      );
    case "light":
      return (
        <>
          <rect
            x="156"
            y="40"
            width="52"
            height="176"
            rx="8"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="48"
            y="40"
            width="52"
            height="176"
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
          <rect
            x="156"
            y="40"
            width="52"
            height="176"
            rx="8"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="48"
            y="40"
            width="52"
            height="176"
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
          <rect
            x="156"
            y="40"
            width="52"
            height="176"
            rx="8"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="48"
            y="40"
            width="52"
            height="176"
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

const Pause = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Pause.displayName = "Pause";

export default Pause;
