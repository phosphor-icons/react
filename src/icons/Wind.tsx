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
            d="M102.11138,51.99974A24.0001,24.0001,0,1,1,120,92H24"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M190.11128,91.99985A24.0001,24.0001,0,1,1,208,132H32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M134.11121,212.00007A24.0001,24.0001,0,1,0,152,172H40"
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
            d="M129.48449,192.32854A24.00285,24.00285,0,1,0,152,160H40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M97.48449,63.67146A24.00285,24.00285,0,1,1,120,96H24"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M185.48449,95.67146A24.00285,24.00285,0,1,1,208,128H32"
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
          <path d="M184,184a32.00415,32.00415,0,0,1-62.01855,11.10449,8.00013,8.00013,0,1,1,15.00585-5.55273A16.00278,16.00278,0,1,0,152,168H40a8,8,0,0,1,0-16H152A32.03635,32.03635,0,0,1,184,184Zm-64-80A32,32,0,1,0,89.98145,60.89551a8.00013,8.00013,0,1,0,15.00585,5.55273A16.00278,16.00278,0,1,1,120,88H24a8,8,0,0,0,0,16Zm88-32a32.13165,32.13165,0,0,0-30.01855,20.89551,8.00013,8.00013,0,1,0,15.00585,5.55273A16.00278,16.00278,0,1,1,208,120H32a8,8,0,0,0,0,16H208a32,32,0,0,0,0-64Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M129.48449,192.32854A24.00285,24.00285,0,1,0,152,160H40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M97.48449,63.67146A24.00285,24.00285,0,1,1,120,96H24"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M185.48449,95.67146A24.00285,24.00285,0,1,1,208,128H32"
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
            d="M129.48449,192.32854A24.00285,24.00285,0,1,0,152,160H40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M97.48449,63.67146A24.00285,24.00285,0,1,1,120,96H24"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M185.48449,95.67146A24.00285,24.00285,0,1,1,208,128H32"
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
            d="M129.48449,192.32854A24.00285,24.00285,0,1,0,152,160H40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M97.48449,63.67146A24.00285,24.00285,0,1,1,120,96H24"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M185.48449,95.67146A24.00285,24.00285,0,1,1,208,128H32"
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

const Wind = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Wind.displayName = "Wind";

export default Wind;
