/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle
            cx="68"
            cy="188"
            r="28"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <circle
            cx="188"
            cy="67.99756"
            r="28"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <circle
            cx="68"
            cy="67.99756"
            r="28"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M68,95.99756v56.00195a24,24,0,0,1,23.99951-24l72.001-.00146a24,24,0,0,0,23.99951-24V95.99756"
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
          <circle cx="188" cy="67.99756" r="28" opacity="0.2" />
          <circle
            cx="68"
            cy="188"
            r="28"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="188"
            cy="67.99756"
            r="28"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="68"
            cy="67.99756"
            r="28"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M68,95.99756v56.00195a24,24,0,0,1,23.99951-24l72.001-.00146a24,24,0,0,0,23.99951-24V95.99756"
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
          <path d="M224.00049,67.99756a36,36,0,1,0-44,35.09289v.9076a16.01865,16.01865,0,0,1-16,16l-72.001.00146a31.80375,31.80375,0,0,0-15.999,4.29444v-21.2035a36,36,0,1,0-16,0V152.9071a36,36,0,1,0,16,0v-.90759a16.01844,16.01844,0,0,1,15.999-16l72.001-.00146a32.0373,32.0373,0,0,0,32-32v-.9076A36.05514,36.05514,0,0,0,224.00049,67.99756Zm-176,0a20,20,0,1,1,20,20A20.0226,20.0226,0,0,1,48.00049,67.99756ZM88.00049,188a20,20,0,1,1-20-20A20.0226,20.0226,0,0,1,88.00049,188Z" />
        </>
      );
    case "light":
      return (
        <>
          <circle
            cx="68"
            cy="188"
            r="28"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle
            cx="188"
            cy="67.99756"
            r="28"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle
            cx="68"
            cy="67.99756"
            r="28"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M68,95.99756v56.00195a24,24,0,0,1,23.99951-24l72.001-.00146a24,24,0,0,0,23.99951-24V95.99756"
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
            cx="68"
            cy="188"
            r="28"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <circle
            cx="188"
            cy="67.99756"
            r="28"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <circle
            cx="68"
            cy="67.99756"
            r="28"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M68,95.99756v56.00195a24,24,0,0,1,23.99951-24l72.001-.00146a24,24,0,0,0,23.99951-24V95.99756"
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
            cx="68"
            cy="188"
            r="28"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="188"
            cy="67.99756"
            r="28"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="68"
            cy="67.99756"
            r="28"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M68,95.99756v56.00195a24,24,0,0,1,23.99951-24l72.001-.00146a24,24,0,0,0,23.99951-24V95.99756"
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

const GitBranch = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
});

GitBranch.displayName = "GitBranch";

export default GitBranch;
