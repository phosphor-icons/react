/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path
            d="M149.66907,195.88358l-14.80961,24.68269a8,8,0,0,1-13.71989,0l-14.80964-24.68272a8,8,0,0,0-6.85994-3.884H39.99951a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8l-59.47039-.00041A8,8,0,0,0,149.66907,195.88358Z"
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
            d="M149.66907,195.88358l-14.80961,24.68269a8,8,0,0,1-13.71989,0l-14.80964-24.68272a8,8,0,0,0-6.85994-3.884H39.99951a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8l-59.47039-.00041A8,8,0,0,0,149.66907,195.88358Z"
            opacity="0.2"
          />
          <path
            d="M149.66907,195.88358l-14.80961,24.68269a8,8,0,0,1-13.71989,0l-14.80964-24.68272a8,8,0,0,0-6.85994-3.884H39.99951a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8l-59.47039-.00041A8,8,0,0,0,149.66907,195.88358Z"
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
          <path d="M216,40H40A16.01833,16.01833,0,0,0,24,56V183.999a16.01833,16.01833,0,0,0,16,16L99.46973,200l14.81054,24.68262a16.00024,16.00024,0,0,0,27.43946,0L156.5293,200H215.999A16.01853,16.01853,0,0,0,232,184V56A16.01833,16.01833,0,0,0,216,40Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M149.66907,195.88358l-14.80961,24.68269a8,8,0,0,1-13.71989,0l-14.80964-24.68272a8,8,0,0,0-6.85994-3.884H39.99951a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8l-59.47039-.00041A8,8,0,0,0,149.66907,195.88358Z"
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
            d="M149.66907,195.88358l-14.80961,24.68269a8,8,0,0,1-13.71989,0l-14.80964-24.68272a8,8,0,0,0-6.85994-3.884H39.99951a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8l-59.47039-.00041A8,8,0,0,0,149.66907,195.88358Z"
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
            d="M149.66907,195.88358l-14.80961,24.68269a8,8,0,0,1-13.71989,0l-14.80964-24.68272a8,8,0,0,0-6.85994-3.884H39.99951a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8l-59.47039-.00041A8,8,0,0,0,149.66907,195.88358Z"
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

const ChatCentered = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ChatCentered.displayName = "ChatCentered";

export default ChatCentered;
