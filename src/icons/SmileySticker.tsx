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
            d="M169.57812,151.99627a48.02731,48.02731,0,0,1-83.15624.00073"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M156.21732,219.78606a95.898,95.898,0,1,1,63.57-63.573Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <circle cx="92" cy="108" r="16" />
          <circle cx="164" cy="108" r="16" />
        </>
      );
    case "duotone":
      return (
        <>
          <path
            d="M156.21732,219.78606a95.898,95.898,0,1,1,63.57-63.573Z"
            opacity="0.2"
          />
          <path
            d="M169.57812,151.99627a48.02731,48.02731,0,0,1-83.15624.00073"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M156.21732,219.78606a95.898,95.898,0,1,1,63.57-63.573Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle cx="92" cy="108" r="12" />
          <circle cx="164" cy="108" r="12" />
        </>
      );
    case "fill":
      return (
        <>
          <path d="M128,24a104,104,0,1,0,30.56543,203.43359,7.99683,7.99683,0,0,0,3.30859-1.99072l63.57032-63.57324a7.99548,7.99548,0,0,0,1.99072-3.30859A104.07559,104.07559,0,0,0,128,24Zm36,72a12,12,0,1,1-12,12A12,12,0,0,1,164,96ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96Zm84.50293,60.00244a56.19607,56.19607,0,0,1-26.70264,23.58936,56.05693,56.05693,0,0,1-70.30322-23.58863,8.00011,8.00011,0,0,1,13.84961-8.0122,40.19352,40.19352,0,0,0,19.08594,16.86548,39.95953,39.95953,0,0,0,43.85156-8.57618,40.18715,40.18715,0,0,0,6.36914-8.28979,8.00005,8.00005,0,1,1,13.84961,8.012Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M169.57812,151.99627a48.02731,48.02731,0,0,1-83.15624.00073"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M156.21732,219.78606a95.898,95.898,0,1,1,63.57-63.573Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle cx="92" cy="108" r="10" />
          <circle cx="164" cy="108" r="10" />
        </>
      );
    case "thin":
      return (
        <>
          <path
            d="M169.57812,151.99627a48.02731,48.02731,0,0,1-83.15624.00073"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M156.21732,219.78606a95.898,95.898,0,1,1,63.57-63.573Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <circle cx="92" cy="108" r="8" />
          <circle cx="164" cy="108" r="8" />
        </>
      );
    case "regular":
      return (
        <>
          <path
            d="M169.57812,151.99627a48.02731,48.02731,0,0,1-83.15624.00073"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M156.21732,219.78606a95.898,95.898,0,1,1,63.57-63.573Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle cx="92" cy="108" r="12" />
          <circle cx="164" cy="108" r="12" />
        </>
      );
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const SmileySticker = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

SmileySticker.displayName = "SmileySticker";

export default SmileySticker;
