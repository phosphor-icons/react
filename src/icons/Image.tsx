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
            x="32"
            y="48"
            width="192"
            height="160"
            rx="8"
            strokeWidth="24"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M32,167.99982l50.343-50.343a8,8,0,0,1,11.31371,0l44.68629,44.6863a8,8,0,0,0,11.31371,0l20.68629-20.6863a8,8,0,0,1,11.31371,0L223.99982,184"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <circle
            cx="156"
            cy="100"
            r="4"
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
            d="M32,167.99982l50.343-50.343a8,8,0,0,1,11.31371,0l44.68629,44.6863a8,8,0,0,0,11.31371,0l20.68629-20.6863a8,8,0,0,1,11.31371,0L223.99982,184,224,56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8Z"
            opacity="0.2"
          />
          <rect
            x="32"
            y="48"
            width="192"
            height="160"
            rx="8"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M32,167.99982l50.343-50.343a8,8,0,0,1,11.31371,0l44.68629,44.6863a8,8,0,0,0,11.31371,0l20.68629-20.6863a8,8,0,0,1,11.31371,0L223.99982,184"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="156"
            cy="100"
            r="4"
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
          <path d="M168.00049,100.00012v.00342a12.00171,12.00171,0,1,1,0-.00342Zm63.999-44V199.99963a16.01833,16.01833,0,0,1-16,16h-176a16.01833,16.01833,0,0,1-16-16V56.00012a16.01834,16.01834,0,0,1,16-16h176A16.01833,16.01833,0,0,1,231.99951,56.00012Zm-15.9917,108.6933-.0083-108.6933h-176v92.68549L76.686,112.00012a16.019,16.019,0,0,1,22.62792,0l44.68653,44.68652L164.686,136.00012a16.019,16.019,0,0,1,22.62792,0Z" />
        </>
      );
    case "light":
      return (
        <>
          <rect
            x="32"
            y="48"
            width="192"
            height="160"
            rx="8"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M32,167.99982l50.343-50.343a8,8,0,0,1,11.31371,0l44.68629,44.6863a8,8,0,0,0,11.31371,0l20.68629-20.6863a8,8,0,0,1,11.31371,0L223.99982,184"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle
            cx="156"
            cy="100"
            r="4"
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
          <rect
            x="32"
            y="48"
            width="192"
            height="160"
            rx="8"
            strokeWidth="8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M32,167.99982l50.343-50.343a8,8,0,0,1,11.31371,0l44.68629,44.6863a8,8,0,0,0,11.31371,0l20.68629-20.6863a8,8,0,0,1,11.31371,0L223.99982,184"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <circle
            cx="156"
            cy="100"
            r="4"
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
          <rect
            x="32"
            y="48"
            width="192"
            height="160"
            rx="8"
            strokeWidth="16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M32,167.99982l50.343-50.343a8,8,0,0,1,11.31371,0l44.68629,44.6863a8,8,0,0,0,11.31371,0l20.68629-20.6863a8,8,0,0,1,11.31371,0L223.99982,184"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle
            cx="156"
            cy="100"
            r="4"
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

const Image = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Image.displayName = "Image";

export default Image;
