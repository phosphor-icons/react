/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <path
            d="M128.00019,223.99219H40a8,8,0,0,1-8-8V127.992a95.99981,95.99981,0,0,1,95.99981-95.99981H128a96,96,0,0,1,96,96v.00019A95.99981,95.99981,0,0,1,128.00019,223.99219Z"
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
          <rect width="256" height="256" fill="none" />
          <path
            d="M128.00019,223.99219H40a8,8,0,0,1-8-8V127.992a95.99981,95.99981,0,0,1,95.99981-95.99981H128a96,96,0,0,1,96,96v.00019A95.99981,95.99981,0,0,1,128.00019,223.99219Z"
            opacity="0.2"
          />
          <path
            d="M128.00019,223.99219H40a8,8,0,0,1-8-8V127.992a95.99981,95.99981,0,0,1,95.99981-95.99981H128a96,96,0,0,1,96,96v.00019A95.99981,95.99981,0,0,1,128.00019,223.99219Z"
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
          <rect width="256" height="256" fill="none" />
          <path d="M128,23.99219a104.12041,104.12041,0,0,0-104,104v88a16.01583,16.01583,0,0,0,16,16h88a104,104,0,0,0,0-208Z" />
        </>
      );
    case "light":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <path
            d="M128.00019,223.99219H40a8,8,0,0,1-8-8V127.992a95.99981,95.99981,0,0,1,95.99981-95.99981H128a96,96,0,0,1,96,96v.00019A95.99981,95.99981,0,0,1,128.00019,223.99219Z"
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
          <rect width="256" height="256" fill="none" />
          <path
            d="M128.00019,223.99219H40a8,8,0,0,1-8-8V127.992a95.99981,95.99981,0,0,1,95.99981-95.99981H128a96,96,0,0,1,96,96v.00019A95.99981,95.99981,0,0,1,128.00019,223.99219Z"
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
          <g>
            <rect width="256" height="256" fill="none" />
            <path
              d="M128.00019,223.99219H40a8,8,0,0,1-8-8V127.992a95.99981,95.99981,0,0,1,95.99981-95.99981H128a96,96,0,0,1,96,96v.00019A95.99981,95.99981,0,0,1,128.00019,223.99219Z"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
          </g>
        </>
      );
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const ChatTeardrop = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ChatTeardrop.displayName = "ChatTeardrop";

export default ChatTeardrop;
