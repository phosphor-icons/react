/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line
            x1="176"
            y1="168"
            x2="64"
            y2="56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="64 152 64 56 160 56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="208"
            y1="216"
            x2="48"
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
            x1="176"
            y1="168"
            x2="64"
            y2="56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="64 152 64 56 160 56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="208"
            y1="216"
            x2="48"
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
          <g>
            <path d="M64,160a8.00008,8.00008,0,0,0,8-8V75.31372l98.34277,98.343a8.00018,8.00018,0,1,0,11.31446-11.31348L83.31348,64H160a8,8,0,0,0,0-16H64c-.02979,0-.05859.00415-.08838.00446-.2334.00256-.46631.01245-.69824.03527-.12891.01264-.2544.03632-.38135.055-.13086.01928-.26269.03418-.39258.05993-.14111.0279-.27783.06635-.416.1015-.11426.02912-.22949.054-.34326.08826-.13526.04089-.26563.09137-.39747.1391-.11425.04114-.229.07855-.3413.125-.123.05084-.24073.11047-.36036.16718-.11718.05542-.23535.1073-.35009.16864s-.22315.13079-.33448.19732c-.11279.06763-.227.13135-.33691.205-.12353.08234-.23975.17389-.35791.26282-.09033.068-.18311.13067-.27148.203-.20411.16747-.40039.34411-.58692.53069l-.00049.00006-.00293.0033c-.18505.1853-.36035.38025-.52636.58288-.07618.09217-.14161.1894-.21289.28406-.08545.1142-.17383.22595-.25342.34473-.07617.11395-.14209.23224-.21192.34912-.064.10693-.13134.21142-.18994.32153-.064.11933-.11816.24213-.17529.364-.0542.115-.11182.22809-.16065.346-.04882.11817-.08837.23883-.13134.35877-.04541.12622-.09375.25073-.13282.37976-.03662.12073-.06347.24341-.09423.36535-.03272.131-.06934.26044-.09571.39393-.02783.14038-.04443.28216-.06494.42352-.0166.11694-.03906.232-.05029.35052-.02588.26245-.04.52582-.04.78931v96A8.00008,8.00008,0,0,0,64,160Z" />
            <path d="M208,208H48a8,8,0,0,0,0,16H208a8,8,0,0,0,0-16Z" />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="176"
            y1="168"
            x2="64"
            y2="56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="64 152 64 56 160 56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="208"
            y1="216"
            x2="48"
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
            x1="176"
            y1="168"
            x2="64"
            y2="56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="64 152 64 56 160 56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="208"
            y1="216"
            x2="48"
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
            x1="176"
            y1="168"
            x2="64"
            y2="56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="64 152 64 56 160 56"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="208"
            y1="216"
            x2="48"
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

const ArrowLineUpLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ArrowLineUpLeft.displayName = "ArrowLineUpLeft";

export default ArrowLineUpLeft;
