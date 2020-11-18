/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string): React.ReactNode | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <g>
            <circle cx="128" cy="64" r="16" />
            <circle cx="128" cy="192" r="16" />
            <circle cx="128" cy="128" r="16" />
          </g>
        </>
      );
    case "duotone":
      return (
        <>
          <g>
            <circle cx="128" cy="128" r="12" />
            <circle cx="128" cy="64" r="12" />
            <circle cx="128" cy="192" r="12" />
          </g>
        </>
      );
    case "fill":
      return (
        <>
          <g>
            <circle cx="128" cy="128" r="32" />
            <circle cx="128" cy="48" r="32" />
            <circle cx="128" cy="208" r="32" />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <g>
            <circle cx="128" cy="128" r="9" />
            <circle cx="128" cy="64" r="9" />
            <circle cx="128" cy="192" r="9" />
          </g>
        </>
      );
    case "thin":
      return (
        <>
          <g>
            <circle cx="128" cy="128" r="6" />
            <circle cx="128" cy="64" r="6" />
            <circle cx="128" cy="192" r="6" />
          </g>
        </>
      );
    case "regular":
      return (
        <>
          <g>
            <circle cx="128" cy="128" r="12" />
            <circle cx="128" cy="64" r="12" />
            <circle cx="128" cy="192" r="12" />
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

const DotsThreeVertical = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      {renderPathFor(weight ?? contextWeight)}
    </svg>
  );
});

DotsThreeVertical.displayName = "DotsThreeVertical";

export default DotsThreeVertical;
