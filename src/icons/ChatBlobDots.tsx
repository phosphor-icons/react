/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path
            d="M128.00019,223.99219H40a8,8,0,0,1-8-8V127.992a95.99981,95.99981,0,0,1,95.99981-95.99981H128a96,96,0,0,1,96,96v.00019A95.99981,95.99981,0,0,1,128.00019,223.99219Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <circle cx="127.99902" cy="127.99316" r="16" />
          <circle cx="79.99902" cy="127.99316" r="16" />
          <circle cx="175.99902" cy="127.99316" r="16" />
        </>
      );
    case "duotone":
      return (
        <>
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
          <circle cx="127.99805" cy="127.99316" r="12" />
          <circle cx="79.99805" cy="127.99316" r="12" />
          <circle cx="175.99805" cy="127.99316" r="12" />
        </>
      );
    case "fill":
      return (
        <>
          <path d="M128,23.99219a104.12041,104.12041,0,0,0-104,104v88a16.01583,16.01583,0,0,0,16,16h88a104,104,0,0,0,0-208Zm-48.00195,116.001a12,12,0,1,1,12-12A12.00059,12.00059,0,0,1,79.99805,139.99316Zm48,0a12,12,0,1,1,12-12A12.00059,12.00059,0,0,1,127.99805,139.99316Zm48,0a12,12,0,1,1,12-12A12.00059,12.00059,0,0,1,175.99805,139.99316Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M128.00019,223.99219H40a8,8,0,0,1-8-8V127.992a95.99981,95.99981,0,0,1,95.99981-95.99981H128a96,96,0,0,1,96,96v.00019A95.99981,95.99981,0,0,1,128.00019,223.99219Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle cx="127.99951" cy="127.99316" r="9" />
          <circle cx="79.99951" cy="127.99316" r="9" />
          <circle cx="175.99951" cy="127.99316" r="9" />
        </>
      );
    case "thin":
      return (
        <>
          <path
            d="M128.00019,223.99219H40a8,8,0,0,1-8-8V127.992a95.99981,95.99981,0,0,1,95.99981-95.99981H128a96,96,0,0,1,96,96v.00019A95.99981,95.99981,0,0,1,128.00019,223.99219Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <circle cx="128" cy="127.99316" r="6" />
          <circle cx="80" cy="127.99316" r="6" />
          <circle cx="176" cy="127.99316" r="6" />
        </>
      );
    case "regular":
      return (
        <>
          <g>
            <path
              d="M128.00019,223.99219H40a8,8,0,0,1-8-8V127.992a95.99981,95.99981,0,0,1,95.99981-95.99981H128a96,96,0,0,1,96,96v.00019A95.99981,95.99981,0,0,1,128.00019,223.99219Z"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
          </g>
          <g>
            <circle cx="128.00049" cy="127.99316" r="12" />
            <circle cx="80.00049" cy="127.99316" r="12" />
            <circle cx="176.00049" cy="127.99316" r="12" />
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

const ChatBlobDots = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ChatBlobDots.displayName = "ChatBlobDots";

export default ChatBlobDots;
