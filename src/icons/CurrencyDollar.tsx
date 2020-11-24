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
            y1="24"
            x2="128"
            y2="232"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M184,88a40,40,0,0,0-40-40H108a40,40,0,0,0,0,80h44a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40"
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
            x1="128"
            y1="24"
            x2="128"
            y2="232"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M184,88a40,40,0,0,0-40-40H108a40,40,0,0,0,0,80h44a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40"
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
          <path d="M152,120H136V56h8a32.03635,32.03635,0,0,1,32,32,8,8,0,0,0,16,0,48.054,48.054,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40H108a48,48,0,0,0,0,96h12v64H104a32.03635,32.03635,0,0,1-32-32,8,8,0,0,0-16,0,48.054,48.054,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-32,0H108a32,32,0,0,1,0-64h12Zm32,80H136V136h16a32,32,0,0,1,0,64Z" />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="128"
            y1="24"
            x2="128"
            y2="232"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M184,88a40,40,0,0,0-40-40H108a40,40,0,0,0,0,80h44a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40"
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
            y1="24"
            x2="128"
            y2="232"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M184,88a40,40,0,0,0-40-40H108a40,40,0,0,0,0,80h44a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40"
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
            x1="128"
            y1="24"
            x2="128"
            y2="232"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M184,88a40,40,0,0,0-40-40H108a40,40,0,0,0,0,80h44a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40"
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

const CurrencyDollar = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

CurrencyDollar.displayName = "CurrencyDollar";

export default CurrencyDollar;
