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
          <circle cx="164" cy="156" r="16" />
          <circle cx="92.00001" cy="156.00002" r="16" />
          <path
            d="M24,192V169.12886C24,111.65,70.15361,64.19953,127.63214,64.00066A104,104,0,0,1,232,168v24a8,8,0,0,1-8,8H32A8,8,0,0,1,24,192Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="32"
            y1="56.00002"
            x2="63.07266"
            y2="87.07268"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="224"
            y1="56.00002"
            x2="193.10334"
            y2="86.89668"
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
            d="M24,192V169.12886C24,111.65,70.15361,64.19953,127.63214,64.00066A104,104,0,0,1,232,168v24a8,8,0,0,1-8,8H32A8,8,0,0,1,24,192Z"
            opacity="0.2"
          />
          <circle cx="164" cy="156" r="12" />
          <circle cx="92" cy="156" r="12" />
          <path
            d="M24,192V169.12886C24,111.65,70.15361,64.19953,127.63214,64.00066A104,104,0,0,1,232,168v24a8,8,0,0,1-8,8H32A8,8,0,0,1,24,192Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="32"
            y1="56.00002"
            x2="63.07266"
            y2="87.07268"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="224"
            y1="56.00002"
            x2="193.10334"
            y2="86.89668"
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
          <path d="M207.05811,88.666q-1.10724-1.103-2.24146-2.16895l24.84009-24.84033a7.99984,7.99984,0,0,0-11.31348-11.31348L192.3728,76.3135a111.42105,111.42105,0,0,0-128.55444.19092L37.65674,50.34328A7.99984,7.99984,0,0,0,26.34326,61.65676L51.40283,86.71633A113.38256,113.38256,0,0,0,16,169.12893V192a16.01833,16.01833,0,0,0,16,16H224a16.01833,16.01833,0,0,0,16-16V168A111.25215,111.25215,0,0,0,207.05811,88.666ZM92,168a12,12,0,1,1,12-12A12,12,0,0,1,92,168Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,168Z" />
        </>
      );
    case "light":
      return (
        <>
          <circle cx="164" cy="156" r="10" />
          <circle cx="92" cy="156" r="10" />
          <path
            d="M24,192V169.12886C24,111.65,70.15361,64.19953,127.63214,64.00066A104,104,0,0,1,232,168v24a8,8,0,0,1-8,8H32A8,8,0,0,1,24,192Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="32"
            y1="56.00002"
            x2="63.07266"
            y2="87.07268"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="224"
            y1="56.00002"
            x2="193.10334"
            y2="86.89668"
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
          <circle cx="164" cy="156" r="8" />
          <circle cx="92" cy="156" r="8" />
          <path
            d="M24,192V169.12886C24,111.65,70.15361,64.19953,127.63214,64.00066A104,104,0,0,1,232,168v24a8,8,0,0,1-8,8H32A8,8,0,0,1,24,192Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="32"
            y1="56.00002"
            x2="63.07266"
            y2="87.07268"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="224"
            y1="56.00002"
            x2="193.10334"
            y2="86.89668"
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
          <circle cx="164" cy="156" r="12" />
          <circle cx="92" cy="156" r="12" />
          <path
            d="M24,192V169.12886C24,111.65,70.15361,64.19953,127.63214,64.00066A104,104,0,0,1,232,168v24a8,8,0,0,1-8,8H32A8,8,0,0,1,24,192Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="32"
            y1="56.00002"
            x2="63.07266"
            y2="87.07268"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="224"
            y1="56.00002"
            x2="193.10334"
            y2="86.89668"
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

const AndroidLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

AndroidLogo.displayName = "AndroidLogo";

export default AndroidLogo;
