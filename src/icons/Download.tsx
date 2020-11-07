/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle cx="188.00054" cy="168" r="16" />
          <path
            d="M176,128h48a8,8,0,0,1,8,8v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8H80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="128"
            y1="24"
            x2="128"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="80 80 128 128 176 80"
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
          <rect x="24" y="128" width="208" height="80" rx="8" opacity="0.2" />
          <circle cx="188.00054" cy="168" r="12" />
          <path
            d="M176,128h48a8,8,0,0,1,8,8v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8H80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="128"
            y1="24"
            x2="128"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="80 80 128 128 176 80"
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
            <path d="M122.34326,133.65723c.02588.02588.05469.04785.08106.07324.16211.15771.32861.31152.50341.45508.09766.08008.20118.15039.30176.22558.1084.08106.21485.165.32764.24073.11621.07812.2373.1455.35693.21679.10449.0625.20655.12793.31446.18555.12011.06445.24414.11914.36669.17676.11426.0542.22657.11084.34327.15967.11816.04882.23925.08837.35937.13134.126.04541.251.09375.37988.13282.11963.03613.24122.063.36231.09326.13184.0332.26269.07031.397.09716.13965.02735.28028.04395.42041.064.11817.01709.23389.03906.353.05078.26269.02588.52588.04.78955.04s.52686-.01416.78955-.04c.11914-.01172.23486-.03369.353-.05078.14013-.02.28076-.03662.42041-.064.13428-.02685.26513-.064.397-.09716.12109-.03028.24268-.05713.36231-.09326.1289-.03907.2539-.08741.37988-.13282.12012-.043.24121-.08252.35937-.13134.1167-.04883.229-.10547.34327-.15967.12255-.05762.24658-.11231.36669-.17676.10791-.05762.21-.12305.31446-.18555.11963-.07129.24072-.13867.35693-.21679.11279-.07569.21924-.15967.32764-.24073.10058-.07519.2041-.1455.30176-.22558.17822-.14649.34765-.30225.51269-.46338.023-.023.04883-.042.07178-.06494l48-48a8.00018,8.00018,0,1,0-11.31348-11.31446L136,108.68652V24a8,8,0,0,0-16,0v84.68652L85.65674,74.34277A8.00018,8.00018,0,0,0,74.34326,85.65723Z" />
            <path d="M224,120H169.94141L144.9707,144.9707a24.00066,24.00066,0,0,1-33.9414,0L86.05859,120H32a16.01833,16.01833,0,0,0-16,16v64a16.01833,16.01833,0,0,0,16,16H224a16.01833,16.01833,0,0,0,16-16V136A16.01833,16.01833,0,0,0,224,120Zm-35.99951,60a12,12,0,1,1,12-12A12,12,0,0,1,188.00049,180Z" />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <circle cx="188.00054" cy="168" r="9" />
          <path
            d="M176,128h48a8,8,0,0,1,8,8v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8H80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="128"
            y1="24"
            x2="128"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="80 80 128 128 176 80"
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
          <circle cx="188.00054" cy="168" r="6" />
          <path
            d="M176,128h48a8,8,0,0,1,8,8v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8H80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="128"
            y1="24"
            x2="128"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="80 80 128 128 176 80"
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
          <circle cx="188.00054" cy="168" r="12" />
          <path
            d="M176,128h48a8,8,0,0,1,8,8v64a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8H80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="128"
            y1="24"
            x2="128"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="80 80 128 128 176 80"
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

const Download = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Download.displayName = "Download";

export default Download;
