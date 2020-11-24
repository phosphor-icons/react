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
            y="156"
            width="128"
            height="64"
            strokeWidth="24"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M63.99414,176h-36V96c0-8.83656,7.7604-16,17.33333-16H210.66081c9.57293,0,17.33333,7.16344,17.33333,16v80h-36"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <circle
            cx="188"
            cy="116"
            r="4"
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
            d="M210.66083,80H45.32751c-9.57293,0-17.33337,7.16357-17.33337,16v80h36V152h128v24h36V96C227.99414,87.16357,220.23376,80,210.66083,80Z"
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
            height="68"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M63.99414,176h-36V96c0-8.83656,7.7604-16,17.33333-16H210.66081c9.57293,0,17.33333,7.16344,17.33333,16v80h-36"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="188"
            cy="116"
            r="4"
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
          <path d="M210.66064,72h-10.6665V40a8.00008,8.00008,0,0,0-8-8h-128a8.00008,8.00008,0,0,0-8,8V72H45.32764c-13.96875,0-25.3335,10.7666-25.3335,24v80a8.00008,8.00008,0,0,0,8,8h28v36a8.00008,8.00008,0,0,0,8,8h128a8.00008,8.00008,0,0,0,8-8V184h28a8.00008,8.00008,0,0,0,8-8V96C235.99414,82.7666,224.62939,72,210.66064,72ZM71.99414,48h112V72h-112Zm112,164h-112V160h112Zm4-84a12,12,0,1,1,12-12A12,12,0,0,1,187.99414,128Z" />
        </>
      );
    case "light":
      return (
        <>
          <polyline
            points="63.994 80 63.994 40 191.994 40 191.994 80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <rect
            x="63.99414"
            y="152"
            width="128"
            height="68"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M63.99414,176h-36V96c0-8.83656,7.7604-16,17.33333-16H210.66081c9.57293,0,17.33333,7.16344,17.33333,16v80h-36"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle
            cx="188"
            cy="116"
            r="4"
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
          <polyline
            points="63.994 80 63.994 40 191.994 40 191.994 80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <rect
            x="63.99414"
            y="152"
            width="128"
            height="68"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M63.99414,176h-36V96c0-8.83656,7.7604-16,17.33333-16H210.66081c9.57293,0,17.33333,7.16344,17.33333,16v80h-36"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <circle
            cx="188"
            cy="116"
            r="4"
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
          <polyline
            points="63.994 80 63.994 40 191.994 40 191.994 80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="63.99414"
            y="152"
            width="128"
            height="68"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M63.99414,176h-36V96c0-8.83656,7.7604-16,17.33333-16H210.66081c9.57293,0,17.33333,7.16344,17.33333,16v80h-36"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="188"
            cy="116"
            r="4"
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

const Printer = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Printer.displayName = "Printer";

export default Printer;
