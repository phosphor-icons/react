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
            cx="127.99414"
            cy="144"
            r="20"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="127.99414"
            y1="164"
            x2="127.99414"
            y2="180"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <rect
            x="39.99414"
            y="88"
            width="176"
            height="128"
            rx="8"
            strokeWidth="24"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M91.99414,88V52a36.00169,36.00169,0,0,1,71.78028-4"
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
            d="M207.99414,88h-160a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8h160a8,8,0,0,0,8-8V96A8,8,0,0,0,207.99414,88Zm-80,72a20,20,0,1,1,20-20A20.00006,20.00006,0,0,1,127.99414,160Z"
            opacity="0.2"
          />
          <circle
            cx="127.99414"
            cy="140"
            r="20"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="127.99414"
            y1="160"
            x2="127.99414"
            y2="184"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="39.99414"
            y="88"
            width="176"
            height="128"
            rx="8"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M91.99414,88V52a36,36,0,1,1,72,0"
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
            <circle cx="127.99414" cy="140" r="12" />
            <path d="M207.99414,80h-108V52a28,28,0,1,1,56,0,8,8,0,0,0,16,0,44,44,0,1,0-88,0V80h-36a16.01833,16.01833,0,0,0-16,16V208a16.01833,16.01833,0,0,0,16,16h160a16.01833,16.01833,0,0,0,16-16V96A16.01833,16.01833,0,0,0,207.99414,80Zm-72,86.82935V184a8,8,0,1,1-16,0V166.82935a28,28,0,1,1,16,0Z" />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <circle
            cx="127.99414"
            cy="140"
            r="20"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="127.99414"
            y1="160"
            x2="127.99414"
            y2="184"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <rect
            x="39.99414"
            y="88"
            width="176"
            height="128"
            rx="8"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M91.99414,88V52a36,36,0,1,1,72,0"
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
          <circle
            cx="127.99414"
            cy="140"
            r="20"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="127.99414"
            y1="160"
            x2="127.99414"
            y2="184"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <rect
            x="39.99414"
            y="88"
            width="176"
            height="128"
            rx="8"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M91.99414,88V52a36,36,0,1,1,72,0"
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
          <circle
            cx="127.99414"
            cy="140"
            r="20"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="127.99414"
            y1="160"
            x2="127.99414"
            y2="184"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <rect
            x="39.99414"
            y="88"
            width="176"
            height="128"
            rx="8"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M91.99414,88V52a36,36,0,1,1,72,0"
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

const LockKeyOpen = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

LockKeyOpen.displayName = "LockKeyOpen";

export default LockKeyOpen;
