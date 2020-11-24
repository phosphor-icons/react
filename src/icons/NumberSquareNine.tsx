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
            x1="152.24871"
            y1="126.00466"
            x2="120"
            y2="180.00001"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <rect
            x="40"
            y="40"
            width="176"
            height="176"
            rx="8"
            strokeWidth="24"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle
            cx="128"
            cy="112"
            r="28"
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
          <rect x="40" y="40" width="176" height="176" rx="8" opacity="0.2" />
          <line
            x1="152.24871"
            y1="126.00466"
            x2="120"
            y2="180.00001"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="40"
            y="40"
            width="176"
            height="176"
            rx="8"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle
            cx="128"
            cy="112"
            r="28"
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
          <path d="M148,112a20,20,0,1,1-20-20A20.02229,20.02229,0,0,1,148,112Zm76-64V208a16.01833,16.01833,0,0,1-16,16H48a16.01833,16.01833,0,0,1-16-16V48A16.01833,16.01833,0,0,1,48,32H208A16.01833,16.01833,0,0,1,224,48Zm-60,64a36,36,0,1,0-36,36q.91626,0,1.82129-.04614l-16.68945,27.9436a8.00015,8.00015,0,1,0,13.73632,8.20508l32.249-53.99512c.09668-.16162.178-.32812.262-.49341A35.76746,35.76746,0,0,0,164,112Z" />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="152.24871"
            y1="126.00466"
            x2="120"
            y2="180.00001"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <rect
            x="40"
            y="40"
            width="176"
            height="176"
            rx="8"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle
            cx="128"
            cy="112"
            r="28"
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
            x1="152.24871"
            y1="126.00466"
            x2="120"
            y2="180.00001"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <rect
            x="40"
            y="40"
            width="176"
            height="176"
            rx="8"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle
            cx="128"
            cy="112"
            r="28"
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
            x1="152.24871"
            y1="126.00466"
            x2="120"
            y2="180.00001"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="40"
            y="40"
            width="176"
            height="176"
            rx="8"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle
            cx="128"
            cy="112"
            r="28"
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

const NumberSquareNine = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

NumberSquareNine.displayName = "NumberSquareNine";

export default NumberSquareNine;
