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
            x1="128"
            y1="176"
            x2="128"
            y2="240"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="48"
            y1="40"
            x2="208"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="171.63638"
            y1="176"
            x2="40"
            y2="176"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="56"
            y1="176"
            x2="74.79803"
            y2="69.47783"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="102.05828"
            y1="40"
            x2="192"
            y2="40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="176"
            y1="40"
            x2="193.81077"
            y2="140.92769"
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
          <polygon
            points="56 176 74.798 69.478 171.636 176 56 176"
            opacity="0.2"
          />
          <polyline
            points="91.246 40 176 40 196.415 155.686 138.867 92.383 91.246 40"
            opacity="0.2"
          />
          <line
            x1="91.24627"
            y1="40"
            x2="192"
            y2="40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="128"
            y1="176"
            x2="128"
            y2="240"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="48"
            y1="40"
            x2="208"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="176"
            y1="40"
            x2="196.41513"
            y2="155.68575"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="171.63638"
            y1="176"
            x2="40"
            y2="176"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="56"
            y1="176"
            x2="74.79803"
            y2="69.47783"
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
          <path d="M213.38184,221.91943a8.00088,8.00088,0,0,1-11.30176-.53808L168.09717,184H136v56a8,8,0,0,1-16,0V184H56.1543c-.04883.001-.09668.00146-.14453.00146-.04883,0-.09668-.00048-.14551-.00146H40a8,8,0,0,1,0-16h9.28809L66.2373,71.95459,42.08008,45.38135a8.00027,8.00027,0,0,1,11.83984-10.7627l75.21729,82.739,48.41943,53.261.002.00293,36.36133,39.99707A8.00084,8.00084,0,0,1,213.38184,221.91943Zm-22.88672-60.85254a8,8,0,0,0,13.79785-6.77148L185.53516,48H192a8,8,0,0,0,0-16H91.19922a8.00042,8.00042,0,0,0-7.94043,7.54443c-.01367.24073-.0166.48194-.00879.72217a7.97263,7.97263,0,0,0,2.09863,5.13916Z" />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="91.24627"
            y1="40"
            x2="192"
            y2="40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="128"
            y1="176"
            x2="128"
            y2="240"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="48"
            y1="40"
            x2="208"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="176"
            y1="40"
            x2="196.41513"
            y2="155.68575"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="171.63638"
            y1="176"
            x2="40"
            y2="176"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="56"
            y1="176"
            x2="74.79803"
            y2="69.47783"
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
            x1="91.24627"
            y1="40"
            x2="192"
            y2="40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="128"
            y1="176"
            x2="128"
            y2="240"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="48"
            y1="40"
            x2="208"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="176"
            y1="40"
            x2="196.41513"
            y2="155.68575"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="171.63638"
            y1="176"
            x2="40"
            y2="176"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="56"
            y1="176"
            x2="74.79803"
            y2="69.47783"
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
            x1="91.24627"
            y1="40"
            x2="192"
            y2="40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="128"
            y1="176"
            x2="128"
            y2="240"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="48"
            y1="40"
            x2="208"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="176"
            y1="40"
            x2="196.41513"
            y2="155.68575"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="171.63638"
            y1="176"
            x2="40"
            y2="176"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="56"
            y1="176"
            x2="74.79803"
            y2="69.47783"
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

const PushPinSimpleSlash = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
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
  }
);

PushPinSimpleSlash.displayName = "PushPinSimpleSlash";

export default PushPinSimpleSlash;
