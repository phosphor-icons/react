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
          <path d="M191.99414,184H46c-21.62207,0-39.21289-17.94434-39.21289-40S24.37793,104,46,104H190a24,24,0,0,1,0,48H78a8,8,0,0,1,0-16H190a8,8,0,0,0,0-16H46c-12.7998,0-23.21289,10.7666-23.21289,24S33.2002,168,46,168H191.99414a40,40,0,1,0,0-80h-112a8,8,0,0,1,0-16h112a56,56,0,1,1,0,112Z" />
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

Paperclip.displayName = "Paperclip";

export default Paperclip;
