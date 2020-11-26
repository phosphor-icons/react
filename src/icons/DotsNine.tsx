/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (
  weight: string
): React.ReactNode | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle cx="60" cy="60" r="16" />
          <circle cx="128" cy="60" r="16" />
          <circle cx="196" cy="60" r="16" />
          <circle cx="60" cy="128" r="16" />
          <circle cx="128" cy="128" r="16" />
          <circle cx="196" cy="128" r="16" />
          <circle cx="60" cy="196" r="16" />
          <circle cx="128" cy="196" r="16" />
          <circle cx="196" cy="196" r="16" />
        </>
      );
    case "duotone":
      return (
        <>
          <circle cx="60" cy="60" r="12" />
          <circle cx="128" cy="60" r="12" />
          <circle cx="196" cy="60" r="12" />
          <circle cx="60" cy="128" r="12" />
          <circle cx="128" cy="128" r="12" />
          <circle cx="196" cy="128" r="12" />
          <circle cx="60" cy="196" r="12" />
          <circle cx="128" cy="196" r="12" />
          <circle cx="196" cy="196" r="12" />
        </>
      );
    case "fill":
      return (
        <>
          <path d="M60,48A12,12,0,1,0,72,60,12.01375,12.01375,0,0,0,60,48Zm68,0a12,12,0,1,0,12,12A12.01375,12.01375,0,0,0,128,48Zm68,24a12,12,0,1,0-12-12A12.01375,12.01375,0,0,0,196,72ZM60,184a12,12,0,1,0,12,12A12.01375,12.01375,0,0,0,60,184Zm68,0a12,12,0,1,0,12,12A12.01375,12.01375,0,0,0,128,184Zm68,0a12,12,0,1,0,12,12A12.01375,12.01375,0,0,0,196,184ZM60,116a12,12,0,1,0,12,12A12.01375,12.01375,0,0,0,60,116Zm68,0a12,12,0,1,0,12,12A12.01375,12.01375,0,0,0,128,116Zm68,0a12,12,0,1,0,12,12A12.01375,12.01375,0,0,0,196,116Z" />
        </>
      );
    case "light":
      return (
        <>
          <circle cx="60" cy="60" r="10" />
          <circle cx="128" cy="60" r="10" />
          <circle cx="196" cy="60" r="10" />
          <circle cx="60" cy="128" r="10" />
          <circle cx="128" cy="128" r="10" />
          <circle cx="196" cy="128" r="10" />
          <circle cx="60" cy="196" r="10" />
          <circle cx="128" cy="196" r="10" />
          <circle cx="196" cy="196" r="10" />
        </>
      );
    case "thin":
      return (
        <>
          <circle cx="60" cy="60" r="8" />
          <circle cx="128" cy="60" r="8" />
          <circle cx="196" cy="60" r="8" />
          <circle cx="60" cy="128" r="8" />
          <circle cx="128" cy="128" r="8" />
          <circle cx="196" cy="128" r="8" />
          <circle cx="60" cy="196" r="8" />
          <circle cx="128" cy="196" r="8" />
          <circle cx="196" cy="196" r="8" />
        </>
      );
    case "regular":
      return (
        <>
          <circle cx="60" cy="60" r="12" />
          <circle cx="128" cy="60" r="12" />
          <circle cx="196" cy="60" r="12" />
          <circle cx="60" cy="128" r="12" />
          <circle cx="128" cy="128" r="12" />
          <circle cx="196" cy="128" r="12" />
          <circle cx="60" cy="196" r="12" />
          <circle cx="128" cy="196" r="12" />
          <circle cx="196" cy="196" r="12" />
        </>
      );
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const DotsNine = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

DotsNine.displayName = "DotsNine";

export default DotsNine;
