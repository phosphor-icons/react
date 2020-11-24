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
          <circle
            cx="128"
            cy="188"
            r="12"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="128"
            y1="168"
            x2="128"
            y2="92"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M88,154.77579V56a40,40,0,0,1,80,0v98.77485l.0017-.0014a52,52,0,1,1-80.00385.00054Z"
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
            d="M160.00787,147.01562,160,147.02539V48a32,32,0,0,0-64,0v99.02539l-.00787-.00977a52,52,0,1,0,64.01574,0ZM128,208a20,20,0,1,1,20-20A19.9999,19.9999,0,0,1,128,208Z"
            opacity="0.2"
          />
          <path
            d="M96,147.02548V48a32,32,0,0,1,64,0v99.02548l.00787-.01006a52,52,0,1,1-64.01574,0Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="128"
            cy="188"
            r="20"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="128"
            y1="168"
            x2="128"
            y2="88"
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
          <path d="M168,143.27441V48a40,40,0,0,0-80,0v95.27441a60,60,0,1,0,80,0ZM128,24a24.02718,24.02718,0,0,1,24,24V80H104V48A24.02718,24.02718,0,0,1,128,24Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M96,147.02548V48a32,32,0,0,1,64,0v99.02548l.00787-.01006a52,52,0,1,1-64.01574,0Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle
            cx="128"
            cy="188"
            r="20"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="128"
            y1="168"
            x2="128"
            y2="88"
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
            d="M96,147.02548V48a32,32,0,0,1,64,0v99.02548l.00787-.01006a52,52,0,1,1-64.01574,0Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <circle
            cx="128"
            cy="188"
            r="20"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="128"
            y1="168"
            x2="128"
            y2="88"
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
            d="M96,147.02548V48a32,32,0,0,1,64,0v99.02548l.00787-.01006a52,52,0,1,1-64.01574,0Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="128"
            cy="188"
            r="20"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="128"
            y1="168"
            x2="128"
            y2="88"
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

const ThermometerSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ThermometerSimple.displayName = "ThermometerSimple";

export default ThermometerSimple;
