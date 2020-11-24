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
            x1="128"
            y1="232.00373"
            x2="128"
            y2="80.00373"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="56 152.004 128 80.004 200 152.004"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="48"
            y1="40.00373"
            x2="208"
            y2="40.00373"
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
            x1="128"
            y1="232.00373"
            x2="128"
            y2="72.00373"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="56 144.004 128 72.004 200 144.004"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="48"
            y1="40.00373"
            x2="208"
            y2="40.00373"
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
            <path d="M133.66016,66.35034c-.188-.188-.38575-.366-.59131-.53442-.08545-.07031-.17578-.13111-.26367-.19727-.12061-.09082-.23926-.18432-.36524-.26855-.10889-.07276-.22168-.13574-.33349-.20239-.11182-.06739-.22168-.1377-.33741-.19971-.11474-.061-.23242-.11279-.34912-.168-.11963-.05689-.23779-.11646-.36133-.16773-.1123-.04638-.22705-.08374-.3413-.125-.13184-.0476-.26221-.09814-.39747-.13891-.11377-.03443-.22851-.05933-.34326-.08838-.13818-.03516-.2749-.07349-.416-.10132-.12989-.02588-.26123-.04077-.39258-.06006-.12695-.01855-.25244-.04248-.38135-.05493-.23193-.02295-.46484-.03271-.69824-.0354-.02979-.00024-.05859-.00439-.08838-.00439s-.05859.00415-.08838.00439c-.2334.00269-.46631.01245-.69824.0354-.12891.01245-.2544.03638-.38135.05493-.13135.01929-.26269.03418-.39258.06006-.14111.02783-.27783.06616-.416.10132-.11475.02905-.22949.054-.34326.08838-.13526.04077-.26563.09131-.39747.13891-.11425.04126-.229.07862-.3413.125-.12354.05127-.2417.11084-.36133.16773-.1167.05518-.23438.10693-.34912.168-.11573.062-.22559.13232-.33741.19971-.11181.06665-.2246.12963-.33349.20239-.126.08423-.24463.17773-.36524.26855-.08789.06616-.17822.127-.26367.19727q-.30834.25267-.59033.53369L50.34326,138.34717a7.99983,7.99983,0,0,0,11.31348,11.31347L120,91.31738V232.00391a8,8,0,1,0,16,0V91.31738l58.34326,58.34326a7.99983,7.99983,0,1,0,11.31348-11.31347Z" />
            <path d="M208,32.00391H48a8,8,0,0,0,0,16H208a8,8,0,0,0,0-16Z" />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="128"
            y1="232.00373"
            x2="128"
            y2="72.00373"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="56 144.004 128 72.004 200 144.004"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="48"
            y1="40.00373"
            x2="208"
            y2="40.00373"
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
            x1="128"
            y1="232.00373"
            x2="128"
            y2="72.00373"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="56 144.004 128 72.004 200 144.004"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="48"
            y1="40.00373"
            x2="208"
            y2="40.00373"
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
            x1="128"
            y1="232.00373"
            x2="128"
            y2="72.00373"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="56 144.004 128 72.004 200 144.004"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="48"
            y1="40.00373"
            x2="208"
            y2="40.00373"
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

const ArrowLineUp = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ArrowLineUp.displayName = "ArrowLineUp";

export default ArrowLineUp;
