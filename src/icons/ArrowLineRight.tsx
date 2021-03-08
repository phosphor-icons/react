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
            x1="31.99627"
            y1="128"
            x2="175.99627"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="103.996 56 175.996 128 103.996 200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="216"
            y1="40"
            x2="216"
            y2="216"
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
          <line
            x1="31.99627"
            y1="128"
            x2="183.99627"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="111.996 56 183.996 128 111.996 200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="216"
            y1="40"
            x2="216"
            y2="216"
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
          <path d="M189.6543,122.34082q.28125.28125.53369.59033c.07031.08545.1311.17578.19726.26367.09082.12061.18433.23926.26856.36524.073.10937.13623.22265.20337.335.06689.11133.137.2207.19848.33545.062.11621.11475.23584.17066.35449.05591.11817.1145.23389.16479.355.04761.11524.08594.23291.12818.3501.04663.12939.09594.25684.136.38916.03565.11768.06153.23682.09156.35547.03369.13379.071.26611.09814.40283.02759.13916.04419.27979.06421.41992.01685.11817.03931.23389.051.353.02587.26269.03979.52588.03979.78955s-.01392.52686-.03979.78955c-.01172.11914-.03418.23486-.051.353-.02.14013-.03662.28076-.06421.41992-.0271.13672-.06445.269-.09814.40283-.03.11865-.05591.2378-.09156.35547-.04.13233-.08935.25977-.136.38916-.04224.11719-.08057.23486-.12818.3501-.05029.12109-.10888.23682-.16479.355-.05591.11865-.10864.23828-.17066.35449-.06152.11475-.13159.22412-.19848.33545-.06714.11231-.13037.22559-.20337.335-.08423.126-.17774.24463-.26856.36524-.06616.08789-.127.17822-.19726.26367-.16846.20556-.34644.40332-.53443.59131l-71.99682,71.99658a7.99984,7.99984,0,0,1-11.31348-11.31348L164.68652,136H32a8,8,0,0,1,0-16H164.68652L106.34326,61.65674a7.99984,7.99984,0,0,1,11.31348-11.31348ZM216,224a8.00008,8.00008,0,0,0,8-8V40a8,8,0,0,0-16,0V216A8.00008,8.00008,0,0,0,216,224Z" />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="31.99627"
            y1="128"
            x2="183.99627"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="111.996 56 183.996 128 111.996 200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="216"
            y1="40"
            x2="216"
            y2="216"
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
            x1="31.99627"
            y1="128"
            x2="183.99627"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="111.996 56 183.996 128 111.996 200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="216"
            y1="40"
            x2="216"
            y2="216"
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
            x1="31.99627"
            y1="128"
            x2="183.99627"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="111.996 56 183.996 128 111.996 200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="216"
            y1="40"
            x2="216"
            y2="216"
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

const ArrowLineRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ArrowLineRight.displayName = "ArrowLineRight";

export default ArrowLineRight;
