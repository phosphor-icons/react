/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path
            d="M78,143.99968H190A15.99984,15.99984,0,0,0,190,112H46c-17.23852,0-31.2131,14.32689-31.2131,32S28.76146,176,46,176H191.99414a48,48,0,1,0,0-96h-112"
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
            d="M78,143.99968H190A15.99984,15.99984,0,0,0,190,112H46c-17.23852,0-31.2131,14.32689-31.2131,32S28.76146,176,46,176H191.99414a48,48,0,1,0,0-96h-112"
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
          <path
            d="M78,143.99968H190A15.99984,15.99984,0,0,0,190,112H46c-17.23852,0-31.2131,14.32689-31.2131,32S28.76146,176,46,176H191.99414a48,48,0,1,0,0-96h-112"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M78,143.99968H190A15.99984,15.99984,0,0,0,190,112H46c-17.23852,0-31.2131,14.32689-31.2131,32S28.76146,176,46,176H191.99414a48,48,0,1,0,0-96h-112"
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
          <path
            d="M78,143.99968H190A15.99984,15.99984,0,0,0,190,112H46c-17.23852,0-31.2131,14.32689-31.2131,32S28.76146,176,46,176H191.99414a48,48,0,1,0,0-96h-112"
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
          <path
            d="M78,143.99968H190A15.99984,15.99984,0,0,0,190,112H46c-17.23852,0-31.2131,14.32689-31.2131,32S28.76146,176,46,176H191.99414a48,48,0,1,0,0-96h-112"
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

const Paperclip = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Paperclip.displayName = "Paperclip";

export default Paperclip;
