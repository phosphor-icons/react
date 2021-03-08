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
          <circle
            cx="104"
            cy="148"
            r="28"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="188 172 188 84 68 84"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M149.26463,207.99877,215.99985,208A8,8,0,0,0,224,200V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V200.00015a8,8,0,0,0,8.00059,8l18.73446-.00139-.00295-.001a48.01963,48.01963,0,0,1,90.53578-.00006Z"
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
          <circle
            cx="104"
            cy="144"
            r="32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path d="M72,144a32,32,0,1,1,32,32h88V80H64v64Z" opacity="0.2" />
          <path
            d="M53.38964,207.99876a56.02294,56.02294,0,0,1,101.22072,0L215.99984,208A8,8,0,0,0,224,200V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V200.00074A7.99926,7.99926,0,0,0,40,208Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="176 176 192 176 192 80 64 80 64 96"
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
          <path d="M216,40H40A16.01833,16.01833,0,0,0,24,56V200.001A15.99912,15.99912,0,0,0,40.001,216l13.38965-.00146a7.99978,7.99978,0,0,0,7.2246-4.5669,48.02362,48.02362,0,0,1,86.76954,0,7.99952,7.99952,0,0,0,7.22558,4.5669L216,216a16.01833,16.01833,0,0,0,16-16V56A16.01833,16.01833,0,0,0,216,40ZM104,168a32,32,0,1,1,32-32A32.03667,32.03667,0,0,1,104,168Zm112,32-56.56641-.00146A63.89863,63.89863,0,0,0,146.26563,184H192a8.00008,8.00008,0,0,0,8-8V80a8.00008,8.00008,0,0,0-8-8H64a8.00008,8.00008,0,0,0-8,8v96a7.99618,7.99618,0,0,0,6.02881,7.74518,63.91387,63.91387,0,0,0-13.4624,16.25433L40,200.001V56H216Z" />
        </>
      );
    case "light":
      return (
        <>
          <circle
            cx="104"
            cy="144"
            r="32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M53.38964,207.99876a56.02294,56.02294,0,0,1,101.22072,0L215.99984,208A8,8,0,0,0,224,200V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V200.00074A7.99926,7.99926,0,0,0,40,208Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="176 176 192 176 192 80 64 80 64 96"
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
          <circle
            cx="104"
            cy="144"
            r="32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M53.38964,207.99876a56.02294,56.02294,0,0,1,101.22072,0L215.99984,208A8,8,0,0,0,224,200V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V200.00074A7.99926,7.99926,0,0,0,40,208Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="176 176 192 176 192 80 64 80 64 96"
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
          <circle
            cx="104"
            cy="144"
            r="32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M53.38964,207.99876a56.02294,56.02294,0,0,1,101.22072,0L215.99984,208A8,8,0,0,0,224,200V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V200.00074A7.99926,7.99926,0,0,0,40,208Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="176 176 192 176 192 80 64 80 64 96"
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

const ChalkboardTeacher = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ChalkboardTeacher.displayName = "ChalkboardTeacher";

export default ChalkboardTeacher;
