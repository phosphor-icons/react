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
            d="M35.99414,68V60a8,8,0,0,1,8-8h168a8,8,0,0,1,8,8V196a8,8,0,0,1-8,8h-40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M35.99414,188a16,16,0,0,1,16,16"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M35.99414,148a56,56,0,0,1,56,56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M35.99414,108a96,96,0,0,1,96,96"
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
            d="M215.99463,47.99561h-176a7.99988,7.99988,0,0,0-8,8V192A15.99986,15.99986,0,0,1,47.9939,207.99561H215.99463a8,8,0,0,0,8-8v-144A7.99989,7.99989,0,0,0,215.99463,47.99561Z"
            opacity="0.2"
          />
          <path
            d="M31.99414,96V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8h-72"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M31.99414,192a16,16,0,0,1,16,16"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M31.99414,160a48,48,0,0,1,48,48"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M31.99414,128a80,80,0,0,1,80,80"
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
            <path d="M31.99414,184a8,8,0,0,0,0,16,8.00917,8.00917,0,0,1,8,8,8,8,0,0,0,16,0A24.02718,24.02718,0,0,0,31.99414,184Z" />
            <path d="M31.99414,152a8,8,0,0,0,0,16,40.04552,40.04552,0,0,1,40,40,8,8,0,0,0,16,0A56.06322,56.06322,0,0,0,31.99414,152Z" />
            <path d="M31.99414,120a8,8,0,0,0,0,16,72.08124,72.08124,0,0,1,72,72,8,8,0,0,0,16,0A88.09957,88.09957,0,0,0,31.99414,120Z" />
            <path d="M215.99414,40h-176a16.01833,16.01833,0,0,0-16,16V96a8.00008,8.00008,0,0,0,8,8,104.11791,104.11791,0,0,1,104,104,8.00008,8.00008,0,0,0,8,8h72a16.01833,16.01833,0,0,0,16-16V56A16.01833,16.01833,0,0,0,215.99414,40Z" />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M31.99414,96V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8h-72"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M31.99414,192a16,16,0,0,1,16,16"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M31.99414,160a48,48,0,0,1,48,48"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M31.99414,128a80,80,0,0,1,80,80"
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
            d="M31.99414,96V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8h-72"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M31.99414,192a16,16,0,0,1,16,16"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M31.99414,160a48,48,0,0,1,48,48"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M31.99414,128a80,80,0,0,1,80,80"
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
            d="M31.99414,96V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8h-72"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M31.99414,192a16,16,0,0,1,16,16"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M31.99414,160a48,48,0,0,1,48,48"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M31.99414,128a80,80,0,0,1,80,80"
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
