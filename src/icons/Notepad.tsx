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
            x1="96"
            y1="124.00586"
            x2="160"
            y2="124.00586"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="96"
            y1="164.00586"
            x2="160"
            y2="164.00586"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M56,40.00586H200a8,8,0,0,1,8,8v152a24,24,0,0,1-24,24H72a24,24,0,0,1-24-24v-152A8,8,0,0,1,56,40.00586Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="84"
            y1="24.00586"
            x2="84"
            y2="56.00586"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="128"
            y1="24.00586"
            x2="128"
            y2="56.00586"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="172"
            y1="24.00586"
            x2="172"
            y2="56.00586"
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
            d="M56,40.00586H200a8,8,0,0,1,8,8v152a24,24,0,0,1-24,24H72a24,24,0,0,1-24-24v-152A8,8,0,0,1,56,40.00586Z"
            opacity="0.2"
          />
          <line
            x1="96"
            y1="128.00586"
            x2="160"
            y2="128.00586"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="96"
            y1="160.00586"
            x2="160"
            y2="160.00586"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M56,40.00586H200a8,8,0,0,1,8,8v152a24,24,0,0,1-24,24H72a24,24,0,0,1-24-24v-152A8,8,0,0,1,56,40.00586Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="80"
            y1="24.00586"
            x2="80"
            y2="56.00586"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="128"
            y1="24.00586"
            x2="128"
            y2="56.00586"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="176"
            y1="24.00586"
            x2="176"
            y2="56.00586"
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
          <path d="M200,32.00586H184v-8a8,8,0,1,0-16,0v8H136v-8a8,8,0,1,0-16,0v8H88v-8a8,8,0,0,0-16,0v8H56a16.01833,16.01833,0,0,0-16,16v152a32.03667,32.03667,0,0,0,32,32H184a32.03667,32.03667,0,0,0,32-32v-152A16.01833,16.01833,0,0,0,200,32.00586Zm-40,136H96a8,8,0,1,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,1,1,0-16h64a8,8,0,0,1,0,16Z" />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="96"
            y1="128.00586"
            x2="160"
            y2="128.00586"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="96"
            y1="160.00586"
            x2="160"
            y2="160.00586"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M56,40.00586H200a8,8,0,0,1,8,8v152a24,24,0,0,1-24,24H72a24,24,0,0,1-24-24v-152A8,8,0,0,1,56,40.00586Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="80"
            y1="24.00586"
            x2="80"
            y2="56.00586"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="128"
            y1="24.00586"
            x2="128"
            y2="56.00586"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="176"
            y1="24.00586"
            x2="176"
            y2="56.00586"
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
            x1="96"
            y1="128.00586"
            x2="160"
            y2="128.00586"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="96"
            y1="160.00586"
            x2="160"
            y2="160.00586"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M56,40.00586H200a8,8,0,0,1,8,8v152a24,24,0,0,1-24,24H72a24,24,0,0,1-24-24v-152A8,8,0,0,1,56,40.00586Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="80"
            y1="24.00586"
            x2="80"
            y2="56.00586"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="128"
            y1="24.00586"
            x2="128"
            y2="56.00586"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="176"
            y1="24.00586"
            x2="176"
            y2="56.00586"
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
            x1="96"
            y1="128.00586"
            x2="160"
            y2="128.00586"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="96"
            y1="160.00586"
            x2="160"
            y2="160.00586"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M56,40.00586H200a8,8,0,0,1,8,8v152a24,24,0,0,1-24,24H72a24,24,0,0,1-24-24v-152A8,8,0,0,1,56,40.00586Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="80"
            y1="24.00586"
            x2="80"
            y2="56.00586"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="128"
            y1="24.00586"
            x2="128"
            y2="56.00586"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="176"
            y1="24.00586"
            x2="176"
            y2="56.00586"
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

const Notepad = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Notepad.displayName = "Notepad";

export default Notepad;
