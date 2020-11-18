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
            d="M77.35142,201.87677l-32.2031,27.07116a8,8,0,0,1-13.14783-6.12372V64.00049a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8v128a8,8,0,0,1-8,8H82.49925A8,8,0,0,0,77.35142,201.87677Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <circle cx="128.00049" cy="128.00098" r="16" />
          <circle cx="80.00049" cy="128.00098" r="16" />
          <circle cx="176.00049" cy="128.00098" r="16" />
        </>
      );
    case "duotone":
      return (
        <>
          <path
            d="M77.98509,201.34409,45.14832,228.94793a8,8,0,0,1-13.14783-6.12372V64.00049a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8v128a8,8,0,0,1-8,8H81.67142Z"
            opacity="0.2"
          />
          <path
            d="M77.35142,201.87677l-32.2031,27.07116a8,8,0,0,1-13.14783-6.12372V64.00049a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8v128a8,8,0,0,1-8,8H82.49925A8,8,0,0,0,77.35142,201.87677Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle cx="128.00049" cy="128.00098" r="12" />
          <circle cx="80.00049" cy="128.00098" r="12" />
          <circle cx="176.00049" cy="128.00098" r="12" />
        </>
      );
    case "fill":
      return (
        <>
          <path d="M216.002,47.99316h-176a16.01583,16.01583,0,0,0-16,16V222.82129a15.97593,15.97593,0,0,0,26.29688,12.25l31.75781-26.70313,133.94531-.375a16.01581,16.01581,0,0,0,16-16v-128A16.01582,16.01582,0,0,0,216.002,47.99316ZM80.001,140.001a12,12,0,1,1,12-12A12,12,0,0,1,80.001,140.001Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,128.001,140.001Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,176.001,140.001Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M77.35142,201.87677l-32.2031,27.07116a8,8,0,0,1-13.14783-6.12372V64.00049a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8v128a8,8,0,0,1-8,8H82.49925A8,8,0,0,0,77.35142,201.87677Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle cx="128.00049" cy="128.00098" r="9" />
          <circle cx="80.00049" cy="128.00098" r="9" />
          <circle cx="176.00049" cy="128.00098" r="9" />
        </>
      );
    case "thin":
      return (
        <>
          <path
            d="M77.35142,201.87677l-32.2031,27.07116a8,8,0,0,1-13.14783-6.12372V64.00049a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8v128a8,8,0,0,1-8,8H82.49925A8,8,0,0,0,77.35142,201.87677Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <circle cx="128.00049" cy="128.00098" r="6" />
          <circle cx="80.00049" cy="128.00098" r="6" />
          <circle cx="176.00049" cy="128.00098" r="6" />
        </>
      );
    case "regular":
      return (
        <>
          <path
            d="M77.35142,201.87677l-32.2031,27.07116a8,8,0,0,1-13.14783-6.12372V64.00049a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8v128a8,8,0,0,1-8,8H82.49925A8,8,0,0,0,77.35142,201.87677Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle cx="128.00049" cy="128.00098" r="12" />
          <circle cx="80.00049" cy="128.00098" r="12" />
          <circle cx="176.00049" cy="128.00098" r="12" />
        </>
      );
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const ChatDots = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ChatDots.displayName = "ChatDots";

export default ChatDots;
