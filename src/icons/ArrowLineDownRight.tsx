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
            x1="80"
            y1="88"
            x2="192"
            y2="200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="192 100 192 200 92 200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="40"
            y1="40.00373"
            x2="216"
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
            x1="80"
            y1="88"
            x2="192"
            y2="200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="192 100 192 200 92 200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="40"
            y1="40.00373"
            x2="216"
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
          <path d="M200,100V200c0,.26349-.01416.52686-.04.78937-.01123.118-.03369.23248-.05029.34887-.02.142-.03662.28437-.06494.4253-.02588.13238-.0625.2608-.09522.39081-.03076.1231-.0581.24688-.09472.36877-.03858.1272-.08643.25-.13135.37439-.04346.12189-.0835.24457-.1333.36462-.04737.11481-.10352.22486-.15625.33686-.0586.12518-.11426.25134-.18018.3739-.05566.10406-.11963.20288-.17969.30414-.07324.1231-.14257.24743-.22314.36737-.07227.108-.15283.20916-.23047.31329-.07812.10541-.15186.2132-.23584.31555-.13574.16516-.28125.32147-.4292.47522-.03418.0354-.06348.07379-.09814.10877-.03565.03552-.07471.06512-.11084.09985-.15332.14764-.30909.29279-.47364.42792-.10009.0824-.20556.15436-.30908.23114-.10644.079-.21.1615-.32031.23529-.11768.07879-.23975.14722-.36035.21911-.10352.06159-.20459.12665-.311.18366-.12109.06476-.24511.11969-.36865.17773-.11377.05353-.2251.11023-.3418.15851-.11816.04907-.23974.08869-.35986.13178-.126.04528-.25049.09369-.37939.13269-.11963.03613-.24122.06262-.36231.09308-.13184.03338-.26269.07037-.397.097-.13965.02765-.28028.044-.42041.06415-.11817.01691-.23389.03925-.353.051C192.52686,207.986,192.26367,208,192,208H92a8,8,0,0,1,0-16h80.686L74.34277,93.65674A8.00018,8.00018,0,1,1,85.65723,82.34326L184,180.68585V100a8,8,0,0,1,16,0Zm16-67.99609H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="80"
            y1="88"
            x2="192"
            y2="200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="192 100 192 200 92 200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="40"
            y1="40.00373"
            x2="216"
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
            x1="80"
            y1="88"
            x2="192"
            y2="200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="192 100 192 200 92 200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="40"
            y1="40.00373"
            x2="216"
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
            x1="80"
            y1="88"
            x2="192"
            y2="200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="192 100 192 200 92 200"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="40"
            y1="40.00373"
            x2="216"
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

const ArrowLineDownRight = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
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
  }
);

ArrowLineDownRight.displayName = "ArrowLineDownRight";

export default ArrowLineDownRight;
