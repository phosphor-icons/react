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
            y1="40"
            x2="128"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="88"
            y1="128"
            x2="12"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="44 96 12 128 44 160"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="168"
            y1="128"
            x2="244"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="212 160 244 128 212 96"
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
            y1="40"
            x2="128"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="96"
            y1="128"
            x2="16"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="48 160 16 128 48 96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="160"
            y1="128"
            x2="240"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="208 96 240 128 208 160"
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
          <path d="M136,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM96,120H35.314l18.34327-18.34277A8.00053,8.00053,0,0,0,42.34277,90.34277l-32,32c-.05664.0564-.10449.11792-.15869.17554-.12549.13281-.251.26538-.36719.40649-.0913.11084-.17138.22706-.25537.34156-.07031.0957-.14453.188-.21093.28686-.085.12647-.15918.25782-.23584.38819-.05567.09423-.11524.186-.167.283-.06933.12915-.12841.262-.18994.39379-.04931.10547-.102.20874-.147.31665-.05225.12647-.09522.25562-.14063.38428-.042.11817-.0874.23462-.124.35523-.03906.1289-.06787.25976-.10058.39013-.03077.12305-.06543.24414-.09034.36939-.02978.15137-.04834.30444-.06933.457-.01465.106-.03516.21-.0459.31714a8.02276,8.02276,0,0,0,0,1.584c.01074.10718.03125.21118.0459.31714.021.15259.03955.30566.06933.457.02491.12525.05957.24634.09034.36939.03271.13037.06152.26123.10058.39013.03662.12061.082.23706.124.35523.04541.12866.08838.25781.14063.38428.04492.10791.09766.21118.147.31665.06153.13183.12061.26464.18994.39379.05176.09693.11133.18873.167.283.07666.13037.15087.26172.23584.38819.0664.09887.14062.19116.21093.28686.084.1145.16407.23072.25537.34156.11622.14111.2417.27368.36719.40649.0542.05762.10205.11914.15869.17554l32,32a8.00053,8.00053,0,0,0,11.31446-11.31446L35.314,136H96a8,8,0,0,0,0-16Zm150.18311,13.0752c.0913-.11084.17138-.22706.25537-.34156.07031-.0957.14453-.188.21093-.28686.085-.12647.15918-.25782.23584-.38819.05567-.09423.11524-.186.167-.283.06933-.12915.12841-.262.18994-.39379.04931-.10547.10205-.20874.147-.31665.05225-.12647.09522-.25562.14063-.38428.042-.11817.0874-.23462.124-.35523.03906-.1289.06787-.25976.10058-.39013.03077-.12305.06543-.24414.09034-.36939.02978-.15137.04834-.30444.06933-.457.01465-.106.03516-.21.0459-.31714a8.02276,8.02276,0,0,0,0-1.584c-.01074-.10718-.03125-.21118-.0459-.31714-.021-.15259-.03955-.30566-.06933-.457-.02491-.12525-.05957-.24634-.09034-.36939-.03271-.13037-.06152-.26123-.10058-.39013-.03662-.12061-.082-.23706-.124-.35523-.04541-.12866-.08838-.25781-.14063-.38428-.04492-.10791-.09766-.21118-.147-.31665-.06153-.13183-.12061-.26464-.18994-.39379-.05176-.09693-.11133-.18873-.167-.283-.07666-.13037-.15087-.26172-.23584-.38819-.0664-.09887-.14062-.19116-.21093-.28686-.084-.1145-.16407-.23072-.25537-.34156-.11622-.14111-.2417-.27368-.36719-.40649-.0542-.05762-.10205-.11914-.15869-.17554l-32-32a8.00053,8.00053,0,0,0-11.31446,11.31446L220.686,120H160a8,8,0,0,0,0,16h60.686l-18.34327,18.34277a8.00053,8.00053,0,0,0,11.31446,11.31446l32-32c.05664-.0564.10449-.11792.15869-.17554C245.94141,133.34888,246.06689,133.21631,246.18311,133.0752Z" />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="128"
            y1="40"
            x2="128"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="96"
            y1="128"
            x2="16"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="48 160 16 128 48 96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="160"
            y1="128"
            x2="240"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="208 96 240 128 208 160"
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
            y1="40"
            x2="128"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="96"
            y1="128"
            x2="16"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="48 160 16 128 48 96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="160"
            y1="128"
            x2="240"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="208 96 240 128 208 160"
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
            y1="40"
            x2="128"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="96"
            y1="128"
            x2="16"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="48 160 16 128 48 96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="160"
            y1="128"
            x2="240"
            y2="128"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="208 96 240 128 208 160"
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

const ArrowsOutLineHorizontal = forwardRef<SVGSVGElement, IconProps>(
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

ArrowsOutLineHorizontal.displayName = "ArrowsOutLineHorizontal";

export default ArrowsOutLineHorizontal;
