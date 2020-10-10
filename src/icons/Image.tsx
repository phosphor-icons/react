/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle cx="155.99951" cy="100" r="16" />
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
          <polyline
            points="32 168 88 112 144 168 176 136 224 184"
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
            d="M32,167.99982,87.99981,112l56,56,32-32,48,48L224,56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8Z"
            opacity="0.2"
          />
          <circle cx="155.99951" cy="100" r="12" />
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
          <polyline
            points="32 168 88 112 144 168 176 136 224 184"
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
          <g>
            <circle cx="155.99951" cy="100" r="12" />
            <path d="M216.00049,40.00012h-176a16.01833,16.01833,0,0,0-16,16V199.99963a16.01833,16.01833,0,0,0,16,16h176a16.01833,16.01833,0,0,0,16-16V56.00012A16.01834,16.01834,0,0,0,216.00049,40.00012Zm-34.34375,90.34326a8.00121,8.00121,0,0,0-11.31445,0l-26.34278,26.34278L93.65674,106.34338a8.00121,8.00121,0,0,0-11.31445,0l-42.3418,42.34107V56.00012h176l.00732,108.69367Z" />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <circle cx="155.99951" cy="100" r="9" />
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
          <polyline
            points="32 168 88 112 144 168 176 136 224 184"
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
          <circle cx="155.99951" cy="100" r="6" />
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
          <polyline
            points="32 168 88 112 144 168 176 136 224 184"
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
          <circle cx="155.99951" cy="100" r="12" />
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
          <polyline
            points="32 168 88 112 144 168 176 136 224 184"
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

Image.displayName = "Image";

export default Image;
