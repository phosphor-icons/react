/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <polyline
            points="152 176 104 224 56 176"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M200,32a96,96,0,0,0-96,96v96"
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
            points="152 176 104 224 56 176"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M200,32a96,96,0,0,0-96,96v96"
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
          <path d="M200,24A104.11791,104.11791,0,0,0,96,128v76.68652L61.65723,170.34277a8.00053,8.00053,0,0,0-11.31446,11.31446l48,48c.05445.0542.11377.10058.16919.15283.135.12744.26978.25537.41358.37353.10644.08789.2185.16455.32837.24561.10009.07422.19726.15185.30078.22119.12182.08154.248.15234.37329.22656.09936.05909.19629.12159.29858.17627.124.0669.25147.123.37842.18262.11035.05176.21875.10693.332.15381.1211.05029.24487.09082.36792.13476.12354.04444.24536.0918.37183.13038.12158.03662.24511.06347.36816.09472.13037.03272.259.06885.3916.09522.14087.02832.283.04492.42481.06494.11645.0166.231.03857.34912.05029.26245.02588.52588.04.78955.04s.5271-.01416.78955-.04c.11816-.01172.23267-.03369.34912-.05029.14185-.02.28394-.03662.42481-.06494.13256-.02637.26123-.0625.3916-.09522.123-.03125.24658-.0581.36816-.09472.12647-.03858.24829-.08594.37183-.13038.123-.04394.24682-.08447.36792-.13476.11328-.04688.22168-.102.332-.15381.12695-.05957.25439-.11572.37842-.18262.10229-.05468.19922-.11718.29858-.17627.12525-.07422.25147-.145.37329-.22656.10352-.06934.20069-.147.30078-.22119.10987-.08106.22193-.15772.32837-.24561.1438-.11816.27857-.24609.41358-.37353.05542-.05225.11474-.09863.16919-.15283l48-48a8.00053,8.00053,0,0,0-11.31446-11.31446L112,204.68652V128a88.09957,88.09957,0,0,1,88-88,8,8,0,0,0,0-16Z" />
        </>
      );
    case "light":
      return (
        <>
          <polyline
            points="152 176 104 224 56 176"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M200,32a96,96,0,0,0-96,96v96"
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
            points="152 176 104 224 56 176"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M200,32a96,96,0,0,0-96,96v96"
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
            points="152 176 104 224 56 176"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M200,32a96,96,0,0,0-96,96v96"
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

const ArrowBendLeftDown = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ArrowBendLeftDown.displayName = "ArrowBendLeftDown";

export default ArrowBendLeftDown;
