/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path
            d="M124.06248,41.13316,47.936,124.581a8,8,0,0,0,5.91018,13.39164H206.09912A8,8,0,0,0,212.0093,124.581L135.88284,41.13316A8,8,0,0,0,124.06248,41.13316Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <rect
            x="109.97266"
            y="101.97266"
            width="40"
            height="176"
            rx="8"
            transform="translate(-60 319.94533) rotate(-90)"
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
          <path
            d="M124.06248,41.13316,47.936,124.581a8,8,0,0,0,5.91018,13.39164H206.09912A8,8,0,0,0,212.0093,124.581L135.88284,41.13316A8,8,0,0,0,124.06248,41.13316Z"
            opacity="0.2"
          />
          <rect
            x="109.97266"
            y="101.97266"
            width="40"
            height="176"
            rx="8"
            transform="translate(-60 319.94533) rotate(-90)"
            opacity="0.2"
          />
          <path
            d="M124.06248,41.13316,47.936,124.581a8,8,0,0,0,5.91018,13.39164H206.09912A8,8,0,0,0,212.0093,124.581L135.88284,41.13316A8,8,0,0,0,124.06248,41.13316Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="109.97266"
            y="101.97266"
            width="40"
            height="176"
            rx="8"
            transform="translate(-60 319.94533) rotate(-90)"
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
          <path d="M39.208,136.43311a15.805,15.805,0,0,1,2.81738-17.24341l76.12695-83.44824v-.00025a15.99974,15.99974,0,0,1,23.64063,0l76.12695,83.44824a15.99994,15.99994,0,0,1-11.82129,26.78321H53.84668A15.80678,15.80678,0,0,1,39.208,136.43311Zm170.76465,25.53955h-160a16.01833,16.01833,0,0,0-16,16v24a16.01833,16.01833,0,0,0,16,16h160a16.01834,16.01834,0,0,0,16-16v-24A16.01833,16.01833,0,0,0,209.97266,161.97266Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M124.06248,41.13316,47.936,124.581a8,8,0,0,0,5.91018,13.39164H206.09912A8,8,0,0,0,212.0093,124.581L135.88284,41.13316A8,8,0,0,0,124.06248,41.13316Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <rect
            x="109.97266"
            y="101.97266"
            width="40"
            height="176"
            rx="8"
            transform="translate(-60 319.94533) rotate(-90)"
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
          <path
            d="M124.06248,41.13316,47.936,124.581a8,8,0,0,0,5.91018,13.39164H206.09912A8,8,0,0,0,212.0093,124.581L135.88284,41.13316A8,8,0,0,0,124.06248,41.13316Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <rect
            x="109.97266"
            y="101.97266"
            width="40"
            height="176"
            rx="8"
            transform="translate(-60 319.94533) rotate(-90)"
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
          <path
            d="M124.06248,41.13316,47.936,124.581a8,8,0,0,0,5.91018,13.39164H206.09912A8,8,0,0,0,212.0093,124.581L135.88284,41.13316A8,8,0,0,0,124.06248,41.13316Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="109.97266"
            y="101.97266"
            width="40"
            height="176"
            rx="8"
            transform="translate(-60 319.94533) rotate(-90)"
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

const Eject = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Eject.displayName = "Eject";

export default Eject;
