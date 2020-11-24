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
            x1="16"
            y1="120"
            x2="240"
            y2="120"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M224,176v32a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V176"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M72,176v32a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V176"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M224,120,194.11151,52.75089A8,8,0,0,0,186.801,48H69.199a8,8,0,0,0-7.31049,4.75089L32,120v56H224Z"
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
            d="M224,184v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V184Z"
            opacity="0.2"
          />
          <path
            d="M72,184v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V184Z"
            opacity="0.2"
          />
          <path
            d="M224,120,194.11151,52.75089A8,8,0,0,0,186.801,48H69.199a8,8,0,0,0-7.31049,4.75089L32,120Z"
            opacity="0.2"
          />
          <line
            x1="16"
            y1="120"
            x2="240"
            y2="120"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M224,184v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V184"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M72,184v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V184"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="64"
            y1="152"
            x2="80"
            y2="152"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="176"
            y1="152"
            x2="192"
            y2="152"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M224,120,194.11151,52.75089A8,8,0,0,0,186.801,48H69.199a8,8,0,0,0-7.31049,4.75089L32,120v64H224Z"
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
          <path d="M240,112H229.199L201.42188,49.501A16.01649,16.01649,0,0,0,186.80078,40H69.19922a16.0158,16.0158,0,0,0-14.6211,9.502L26.801,112H16a8,8,0,0,0,0,16h8v80a16.01833,16.01833,0,0,0,16,16H64a16.01833,16.01833,0,0,0,16-16V192h96v16a16.01833,16.01833,0,0,0,16,16h24a16.01833,16.01833,0,0,0,16-16V128h8a8,8,0,0,0,0-16ZM64,208H40V192H64Zm16-48H64a8,8,0,0,1,0-16H80a8,8,0,0,1,0,16Zm96,0a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm40,48H192V192h24Z" />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="16"
            y1="120"
            x2="240"
            y2="120"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M224,184v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V184"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M72,184v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V184"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="64"
            y1="152"
            x2="80"
            y2="152"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="176"
            y1="152"
            x2="192"
            y2="152"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M224,120,194.11151,52.75089A8,8,0,0,0,186.801,48H69.199a8,8,0,0,0-7.31049,4.75089L32,120v64H224Z"
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
            x1="16"
            y1="120"
            x2="240"
            y2="120"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M224,184v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V184"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M72,184v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V184"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="64"
            y1="152"
            x2="80"
            y2="152"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="176"
            y1="152"
            x2="192"
            y2="152"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M224,120,194.11151,52.75089A8,8,0,0,0,186.801,48H69.199a8,8,0,0,0-7.31049,4.75089L32,120v64H224Z"
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
            x1="16"
            y1="120"
            x2="240"
            y2="120"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M224,184v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V184"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M72,184v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V184"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="64"
            y1="152"
            x2="80"
            y2="152"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="176"
            y1="152"
            x2="192"
            y2="152"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M224,120,194.11151,52.75089A8,8,0,0,0,186.801,48H69.199a8,8,0,0,0-7.31049,4.75089L32,120v64H224Z"
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

const Car = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Car.displayName = "Car";

export default Car;
