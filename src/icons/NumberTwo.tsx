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
            d="M83.77207,61.31625a48.00774,48.00774,0,1,1,84.03029,45.521v0L80,224v-.01149h96"
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
            d="M83.77207,61.31625a48.00774,48.00774,0,1,1,84.03029,45.521v0L80,224v-.01149h96"
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
          <path d="M184,223.98828a8.00008,8.00008,0,0,1-8,8H80.43555q-.21827.01245-.43653.01221a8.00346,8.00346,0,0,1-6.26757-12.9751l87.54687-116.82178a40.00778,40.00778,0,1,0-70.1377-37.771A8,8,0,1,1,76.4043,58.2002a56.00758,56.00758,0,1,1,98.02734,53.11523c-.07324.1084-.14844.21484-.22754.31934L96.001,215.98828H176A8.00039,8.00039,0,0,1,184,223.98828Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M83.77207,61.31625a48.00774,48.00774,0,1,1,84.03029,45.521v0L80,224v-.01149h96"
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
            d="M83.77207,61.31625a48.00774,48.00774,0,1,1,84.03029,45.521v0L80,224v-.01149h96"
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
            d="M83.77207,61.31625a48.00774,48.00774,0,1,1,84.03029,45.521v0L80,224v-.01149h96"
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

const NumberTwo = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

NumberTwo.displayName = "NumberTwo";

export default NumberTwo;
