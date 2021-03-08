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
            x="51.63247"
            y="51.63247"
            width="152.73506"
            height="152.73506"
            rx="8"
            transform="translate(-53.01934 128) rotate(-45)"
            strokeWidth="24"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      );
    case "duotone":
      return (
        <>
          <rect
            x="51.63247"
            y="51.63247"
            width="152.73506"
            height="152.73506"
            rx="8"
            transform="translate(-53.01934 128) rotate(-45)"
            opacity="0.2"
          />
          <rect
            x="51.63247"
            y="51.63247"
            width="152.73506"
            height="152.73506"
            rx="8"
            transform="translate(-53.01934 128) rotate(-45)"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      );
    case "fill":
      return (
        <>
          <path d="M236,139.31348,139.31348,236a16.01779,16.01779,0,0,1-22.627,0L20,139.31348a16.01779,16.01779,0,0,1,0-22.627L116.68652,20a16.01779,16.01779,0,0,1,22.627,0L236,116.68652A16.01779,16.01779,0,0,1,236,139.31348Z" />
        </>
      );
    case "light":
      return (
        <>
          <rect
            x="51.63247"
            y="51.63247"
            width="152.73506"
            height="152.73506"
            rx="8"
            transform="translate(-53.01934 128) rotate(-45)"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      );
    case "thin":
      return (
        <>
          <rect
            x="51.63247"
            y="51.63247"
            width="152.73506"
            height="152.73506"
            rx="8"
            transform="translate(-53.01934 128) rotate(-45)"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </>
      );
    case "regular":
      return (
        <>
          <rect
            x="51.63247"
            y="51.63247"
            width="152.73506"
            height="152.73506"
            rx="8"
            transform="translate(-53.01934 128) rotate(-45)"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
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

const Diamond = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Diamond.displayName = "Diamond";

export default Diamond;
