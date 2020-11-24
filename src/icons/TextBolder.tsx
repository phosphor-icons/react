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
            d="M64,120h88a40,40,0,0,1,0,80l-88.00586-.00488v-152L140,48a36,36,0,0,1,0,72"
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
            d="M64,120h88a40,40,0,0,1,0,80l-88.00586-.00488v-152L140,48a36,36,0,0,1,0,72"
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
          <path d="M170.4834,115.70117A43.98012,43.98012,0,0,0,140.00049,40l-76.00586-.00488h-.00049a7.99955,7.99955,0,0,0-8,8v152a8,8,0,0,0,7.99951,8L152,208a48.00015,48.00015,0,0,0,18.4834-92.29883ZM71.99414,55.99561,140,56a28,28,0,0,1,0,56H71.99414ZM152.00049,192l-80.00635-.00439V128H152a32,32,0,0,1,.00049,64Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M64,120h88a40,40,0,0,1,0,80l-88.00586-.00488v-152L140,48a36,36,0,0,1,0,72"
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
            d="M64,120h88a40,40,0,0,1,0,80l-88.00586-.00488v-152L140,48a36,36,0,0,1,0,72"
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
            d="M64,120h88a40,40,0,0,1,0,80l-88.00586-.00488v-152L140,48a36,36,0,0,1,0,72"
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

const TextBolder = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

TextBolder.displayName = "TextBolder";

export default TextBolder;
