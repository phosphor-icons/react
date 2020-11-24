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
          <path
            d="M36,68V60a8,8,0,0,1,8-8H212a8,8,0,0,1,8,8V196a8,8,0,0,1-8,8H172"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M36,188a16,16,0,0,1,16,16"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M36,148a56,56,0,0,1,56,56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M36,108a96,96,0,0,1,96,96"
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
            d="M216.00049,47.99561h-176a7.99988,7.99988,0,0,0-8,8V192a15.99986,15.99986,0,0,1,15.99927,15.99561H216.00049a8,8,0,0,0,8-8v-144A7.99989,7.99989,0,0,0,216.00049,47.99561Z"
            opacity="0.2"
          />
          <path
            d="M32,96V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H144"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M32,192a16,16,0,0,1,16,16"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M32,160a48,48,0,0,1,48,48"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M32,128a80,80,0,0,1,80,80"
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
          <g>
            <path d="M32,184a8,8,0,0,0,0,16,8.00917,8.00917,0,0,1,8,8,8,8,0,0,0,16,0A24.02718,24.02718,0,0,0,32,184Z" />
            <path d="M32,152a8,8,0,0,0,0,16,40.04552,40.04552,0,0,1,40,40,8,8,0,0,0,16,0A56.06322,56.06322,0,0,0,32,152Z" />
            <path d="M32,120a8,8,0,0,0,0,16,72.08124,72.08124,0,0,1,72,72,8,8,0,0,0,16,0A88.09957,88.09957,0,0,0,32,120Z" />
            <path d="M216,40H40A16.01833,16.01833,0,0,0,24,56V96a8.00008,8.00008,0,0,0,8,8A104.11791,104.11791,0,0,1,136,208a8.00008,8.00008,0,0,0,8,8h72a16.01833,16.01833,0,0,0,16-16V56A16.01833,16.01833,0,0,0,216,40Z" />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M32,96V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H144"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M32,192a16,16,0,0,1,16,16"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M32,160a48,48,0,0,1,48,48"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M32,128a80,80,0,0,1,80,80"
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
            d="M32,96V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H144"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M32,192a16,16,0,0,1,16,16"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M32,160a48,48,0,0,1,48,48"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M32,128a80,80,0,0,1,80,80"
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
            d="M32,96V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H144"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M32,192a16,16,0,0,1,16,16"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M32,160a48,48,0,0,1,48,48"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M32,128a80,80,0,0,1,80,80"
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

const Screencast = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Screencast.displayName = "Screencast";

export default Screencast;
