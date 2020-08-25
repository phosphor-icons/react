/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <rect
            x="63.99414"
            y="40"
            width="128"
            height="40"
            strokeWidth="24"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="63.99414"
            y="152"
            width="128"
            height="72"
            strokeWidth="24"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M63.99414,176h-40V96c0-8.83656,7.7604-16,17.33333-16H214.66081c9.57293,0,17.33333,7.16344,17.33333,16v80h-40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <circle cx="187.99414" cy="116" r="18" />
        </>
      );
    case "duotone":
      return (
        <>
          <path
            d="M214.66089,80H41.32751c-9.57287,0-17.33337,7.16357-17.33337,16v80h40V152h128v24h40V96C231.99414,87.16357,224.23376,80,214.66089,80Zm-26.66675,48a12,12,0,1,1,12-12A12,12,0,0,1,187.99414,128Z"
            opacity="0.2"
          />
          <rect
            x="63.99414"
            y="40"
            width="128"
            height="40"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="63.99414"
            y="152"
            width="128"
            height="72"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M63.99414,176h-40V96c0-8.83656,7.7604-16,17.33333-16H214.66081c9.57293,0,17.33333,7.16344,17.33333,16v80h-40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle cx="187.99414" cy="116" r="12" />
        </>
      );
    case "fill":
      return (
        <>
          <path d="M214.66064,72h-14.6665V40a8.00008,8.00008,0,0,0-8-8h-128a8.00008,8.00008,0,0,0-8,8V72H41.32764c-13.96875,0-25.3335,10.7666-25.3335,24v80a8.00008,8.00008,0,0,0,8,8h32v40a8.00008,8.00008,0,0,0,8,8h128a8.00008,8.00008,0,0,0,8-8V184h32a8.00008,8.00008,0,0,0,8-8V96C239.99414,82.7666,228.62939,72,214.66064,72Zm-26.6665,56a12,12,0,1,1,12-12A12,12,0,0,1,187.99414,128Zm-116-80h112V72h-112Zm112,168h-112V160h112Z" />
        </>
      );
    case "light":
      return (
        <>
          <rect
            x="63.99414"
            y="40"
            width="128"
            height="40"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="63.99414"
            y="152"
            width="128"
            height="72"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M63.99414,176h-40V96c0-8.83656,7.7604-16,17.33333-16H214.66081c9.57293,0,17.33333,7.16344,17.33333,16v80h-40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle cx="187.99414" cy="116" r="9" />
        </>
      );
    case "thin":
      return (
        <>
          <rect
            x="63.99414"
            y="40"
            width="128"
            height="40"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="63.99414"
            y="152"
            width="128"
            height="72"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M63.99414,176h-40V96c0-8.83656,7.7604-16,17.33333-16H214.66081c9.57293,0,17.33333,7.16344,17.33333,16v80h-40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <circle cx="187.99414" cy="116" r="6" />
        </>
      );
    case "regular":
      return (
        <>
          <rect
            x="63.99414"
            y="40"
            width="128"
            height="40"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="63.99414"
            y="152"
            width="128"
            height="72"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M63.99414,176h-40V96c0-8.83656,7.7604-16,17.33333-16H214.66081c9.57293,0,17.33333,7.16344,17.33333,16v80h-40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle cx="187.99414" cy="116" r="12" />
        </>
      );
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Printer = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { color, size, weight, mirrored, ...rest } = props;
  const {
    color: contextColor,
    size: contextSize,
    weight: contextWeight,
    mirrored: contextMirrored,
    ...contextRest
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
      {...contextRest}
      {...rest}
    >
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>
  );
});

Printer.displayName = "Printer";

export default Printer;
