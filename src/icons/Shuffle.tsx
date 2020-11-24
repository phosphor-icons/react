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
            d="M32,72H55.06445a64,64,0,0,1,52.079,26.80076l41.7132,58.39848A64,64,0,0,0,200.93555,184H232"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="208 48 232 72 208 96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="208 160 232 184 208 208"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M152.76794,93.858A64.00219,64.00219,0,0,1,200.93555,72H232"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M32,184H55.06445a64.00212,64.00212,0,0,0,48.16769-21.85814"
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
            d="M32,72H55.06445a64,64,0,0,1,52.079,26.80076l41.7132,58.39848A64,64,0,0,0,200.93555,184H232"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="208 48 232 72 208 96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="208 160 232 184 208 208"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M147.66275,100.47214l1.19385-1.67138A64,64,0,0,1,200.93555,72H232"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M32,184H55.06445a64,64,0,0,0,52.079-26.80076l1.19384-1.67138"
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
            <path d="M239.91406,182.89087c-.021-.15259-.03955-.30566-.06933-.457-.02491-.12525-.05957-.24634-.09034-.36939-.03271-.13037-.06152-.26123-.10058-.39013-.03662-.12061-.082-.23706-.124-.35523-.04542-.12866-.08838-.25781-.14063-.38428-.04492-.10791-.09766-.21118-.147-.31665-.06153-.13183-.12061-.26464-.18994-.39379-.05176-.09693-.11133-.18873-.167-.283-.07666-.13037-.15088-.26172-.23584-.38819-.0664-.09887-.14062-.19116-.21093-.28686-.084-.1145-.16407-.23072-.25537-.34156-.11622-.14111-.2417-.27368-.36719-.40649-.0542-.05762-.10205-.11914-.15869-.17554l-24-24a8.00053,8.00053,0,0,0-11.31446,11.31446L212.686,176H200.93555a56.11029,56.11029,0,0,1-45.56934-23.4502L113.65332,94.15137A72.14126,72.14126,0,0,0,55.06445,64H32a8,8,0,0,0,0,16H55.06445a56.11029,56.11029,0,0,1,45.56934,23.4502l41.71289,58.39843A72.14125,72.14125,0,0,0,200.93555,192H212.686l-10.34327,10.34277a8.00053,8.00053,0,0,0,11.31446,11.31446l24-24c.05664-.0564.10449-.11792.15869-.17554.12549-.13281.251-.26538.36719-.40649.0913-.11084.17138-.22706.25537-.34156.07031-.0957.14453-.188.21093-.28686.085-.12647.15918-.25782.23584-.38819.05567-.09423.11524-.186.167-.283.06933-.12915.12841-.262.18994-.39379.04931-.10547.10205-.20874.147-.31665.05225-.12647.09521-.25562.14063-.38428.042-.11817.0874-.23462.124-.35523.03906-.1289.06787-.25976.10058-.39013.03077-.12305.06543-.24414.09034-.36939.02978-.15137.04834-.30444.06933-.457.01465-.106.03516-.21.0459-.31714a8.02276,8.02276,0,0,0,0-1.584C239.94922,183.10083,239.92871,182.99683,239.91406,182.89087Z" />
            <path d="M143.01367,106.98145a7.99621,7.99621,0,0,0,11.15918-1.86036l1.19336-1.67089A56.11029,56.11029,0,0,1,200.93555,80H212.686L202.34277,90.34277a8.00053,8.00053,0,0,0,11.31446,11.31446l24-24c.05664-.0564.10449-.11792.15869-.17554.12549-.13281.251-.26538.36719-.40649.0913-.11084.17138-.22706.25537-.34156.07031-.0957.14453-.188.21093-.28686.085-.12647.15918-.25782.23584-.38819.05567-.09423.11524-.186.167-.283.06933-.12915.12841-.262.18994-.39379.04931-.10547.10205-.20874.147-.31665.05225-.12647.09521-.25562.14063-.38428.042-.11817.0874-.23462.124-.35523.03906-.1289.06787-.25976.10058-.39013.03077-.12305.06543-.24414.09034-.36939.02978-.15137.04834-.30444.06933-.457.01465-.106.03516-.21.0459-.31714a8.02276,8.02276,0,0,0,0-1.584c-.01074-.10718-.03125-.21118-.0459-.31714-.021-.15259-.03955-.30566-.06933-.457-.02491-.12525-.05957-.24634-.09034-.36939-.03271-.13037-.06152-.26123-.10058-.39013-.03662-.12061-.082-.23706-.124-.35523-.04542-.12866-.08838-.25781-.14063-.38428-.04492-.10791-.09766-.21118-.147-.31665-.06153-.13183-.12061-.26464-.18994-.39379-.05176-.09693-.11133-.18873-.167-.283-.07666-.13037-.15088-.26172-.23584-.38819-.0664-.09887-.14062-.19116-.21093-.28686-.084-.1145-.16407-.23072-.25537-.34156-.11622-.14111-.2417-.27368-.36719-.40649-.0542-.05762-.10205-.11914-.15869-.17554l-24-24a8.00053,8.00053,0,0,0-11.31446,11.31446L212.686,64H200.93555a72.14125,72.14125,0,0,0-58.58887,30.15137l-1.19336,1.6709A7.9986,7.9986,0,0,0,143.01367,106.98145Z" />
            <path d="M112.98633,149.01855a7.99642,7.99642,0,0,0-11.15918,1.86036l-1.19336,1.67089A56.11029,56.11029,0,0,1,55.06445,176H32a8,8,0,0,0,0,16H55.06445a72.14126,72.14126,0,0,0,58.58887-30.15137l1.19336-1.6709A7.9986,7.9986,0,0,0,112.98633,149.01855Z" />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M32,72H55.06445a64,64,0,0,1,52.079,26.80076l41.7132,58.39848A64,64,0,0,0,200.93555,184H232"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="208 48 232 72 208 96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="208 160 232 184 208 208"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M147.66275,100.47214l1.19385-1.67138A64,64,0,0,1,200.93555,72H232"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M32,184H55.06445a64,64,0,0,0,52.079-26.80076l1.19384-1.67138"
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
            d="M32,72H55.06445a64,64,0,0,1,52.079,26.80076l41.7132,58.39848A64,64,0,0,0,200.93555,184H232"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="208 48 232 72 208 96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="208 160 232 184 208 208"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M147.66275,100.47214l1.19385-1.67138A64,64,0,0,1,200.93555,72H232"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M32,184H55.06445a64,64,0,0,0,52.079-26.80076l1.19384-1.67138"
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
            d="M32,72H55.06445a64,64,0,0,1,52.079,26.80076l41.7132,58.39848A64,64,0,0,0,200.93555,184H232"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="208 48 232 72 208 96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="208 160 232 184 208 208"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M147.66275,100.47214l1.19385-1.67138A64,64,0,0,1,200.93555,72H232"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M32,184H55.06445a64,64,0,0,0,52.079-26.80076l1.19384-1.67138"
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

const Shuffle = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Shuffle.displayName = "Shuffle";

export default Shuffle;
