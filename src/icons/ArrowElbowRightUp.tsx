/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <polyline
            points="128 96 176 48 224 96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="32 192 176 192 176 48"
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
          <polyline
            points="128 96 176 48 224 96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="32 192 176 192 176 48"
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
          <path d="M229.65723,90.34326l-48-48c-.01612-.01611-.03394-.0293-.05-.04529-.17163-.16882-.34961-.33117-.53589-.48413-.094-.07715-.19312-.14428-.28955-.21655-.11255-.08423-.22266-.17151-.33985-.24976-.113-.07568-.23046-.14123-.34643-.21057-.10816-.06457-.21411-.13244-.32544-.19214-.1167-.06237-.23682-.11523-.356-.17138-.11767-.05591-.23364-.1145-.35449-.16455-.11377-.04712-.22974-.08484-.345-.12635-.1311-.04736-.2605-.09753-.39478-.13806-.11377-.03442-.22949-.05932-.34448-.08862-.13769-.035-.27392-.07336-.4143-.10107-.13038-.02588-.26221-.04078-.39356-.06006-.127-.01868-.252-.04248-.38086-.05494-.23193-.02294-.46509-.03271-.69824-.0354C176.05859,40.00415,176.02979,40,176,40s-.05859.00415-.08838.00439c-.23315.00269-.46631.01246-.69824.0354-.12891.01246-.25391.03626-.38086.05494-.13135.01928-.26318.03418-.39356.06006-.14038.02771-.27661.066-.4143.10107-.115.0293-.23071.0542-.34448.08862-.13428.04053-.26368.0907-.39478.13806-.11523.04151-.2312.07923-.345.12635-.12085.05-.23682.10864-.35449.16455-.11914.05615-.23926.109-.356.17138-.11133.0597-.21728.12757-.32544.19214-.116.06934-.2334.13489-.34643.21057-.11719.07825-.2273.16553-.33985.24976-.09643.07227-.19555.1394-.28955.21655-.18628.153-.36426.31531-.53589.48413-.01611.016-.03393.02918-.05.04529l-48,48a8.00018,8.00018,0,0,0,11.31446,11.31348L168,67.3136V184H32a8,8,0,0,0,0,16H176a8.00008,8.00008,0,0,0,8-8V67.3136l34.34277,34.34314a8.00018,8.00018,0,0,0,11.31446-11.31348Z" />
        </>
      );
    case "light":
      return (
        <>
          <polyline
            points="128 96 176 48 224 96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="32 192 176 192 176 48"
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
          <polyline
            points="128 96 176 48 224 96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="32 192 176 192 176 48"
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
          <polyline
            points="128 96 176 48 224 96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="32 192 176 192 176 48"
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

const ArrowElbowRightUp = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ArrowElbowRightUp.displayName = "ArrowElbowRightUp";

export default ArrowElbowRightUp;
