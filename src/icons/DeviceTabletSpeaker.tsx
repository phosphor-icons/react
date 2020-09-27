/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <rect
            x="32"
            y="48"
            width="192"
            height="160"
            rx="16"
            transform="translate(256) rotate(90)"
            strokeWidth="24"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <line
            x1="96"
            y1="64"
            x2="160"
            y2="64"
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
          <rect
            x="32"
            y="48"
            width="192"
            height="160"
            rx="16"
            transform="translate(256) rotate(90)"
            opacity="0.2"
          />
          <rect
            x="32"
            y="48"
            width="192"
            height="160"
            rx="16"
            transform="translate(256) rotate(90)"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <line
            x1="96"
            y1="64"
            x2="160"
            y2="64"
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
          <path d="M192,24H64A24.0275,24.0275,0,0,0,40,48V208a24.0275,24.0275,0,0,0,24,24H192a24.0275,24.0275,0,0,0,24-24V48A24.0275,24.0275,0,0,0,192,24ZM160,72H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z" />
        </>
      );
    case "light":
      return (
        <>
          <rect
            x="32"
            y="48"
            width="192"
            height="160"
            rx="16"
            transform="translate(256) rotate(90)"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <line
            x1="96"
            y1="64"
            x2="160"
            y2="64"
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
          <rect
            x="32"
            y="48"
            width="192"
            height="160"
            rx="16"
            transform="translate(256) rotate(90)"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <line
            x1="96"
            y1="64"
            x2="160"
            y2="64"
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
          <rect
            x="32"
            y="48"
            width="192"
            height="160"
            rx="16"
            transform="translate(256) rotate(90)"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <line
            x1="96"
            y1="64"
            x2="160"
            y2="64"
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

const DeviceTabletSpeaker = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
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
        <rect width="256" height="256" fill="none" />
        {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
      </svg>
    );
  }
);

DeviceTabletSpeaker.displayName = "DeviceTabletSpeaker";

export default DeviceTabletSpeaker;
