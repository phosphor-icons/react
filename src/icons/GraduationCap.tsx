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
          <polygon
            points="12 96 128 32 244 96 128 160 12 96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="186 240 186 128 128 96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M224,107.03448v58.15691a7.956,7.956,0,0,1-1.86924,5.13972C214.4464,179.42273,183.06948,212,128,212s-86.4464-32.57727-94.13076-41.66889A7.956,7.956,0,0,1,32,165.19139V107.03448"
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
            d="M36,110.93333v54.5208a7.95694,7.95694,0,0,0,1.58951,4.78692C44.32618,179.20536,72.7471,212,128,212s83.67382-32.79464,90.41049-41.75895A7.95694,7.95694,0,0,0,220,165.45413v-54.5208L128,160Z"
            opacity="0.2"
          />
          <polygon
            points="8 96 128 32 248 96 128 160 8 96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="188 240 188 128 128 96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M220,110.93333v54.5208a7.95694,7.95694,0,0,1-1.58951,4.78692C211.67382,179.20536,183.2529,212,128,212s-83.67382-32.79464-90.41049-41.75895A7.95694,7.95694,0,0,1,36,165.45413v-54.5208"
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
          <path d="M180,209.59229a118.30523,118.30523,0,0,0,16-8.4668V240a8,8,0,0,1-16,0ZM120.94141,92.23535a7.99969,7.99969,0,0,0,3.29394,10.82324L171.00049,128,188,118.93359,131.76465,88.94141A7.99776,7.99776,0,0,0,120.94141,92.23535Zm130.82324-3.29394-120-64a7.99984,7.99984,0,0,0-7.5293,0l-120,64a7.99956,7.99956,0,0,0,0,14.11718L28,115.73315v49.721a16.05975,16.05975,0,0,0,3.19434,9.59326C39.11914,185.59277,69.51953,220,128,220a128.69017,128.69017,0,0,0,52-10.45557V132.7998L171.00049,128,128,150.93359,39.83643,103.91284l-.05713-.03052L25,96,128,41.06641,231,96l-14.7793,7.88232-.05713.03052L188,118.93359l3.76465,2.00782A8.10305,8.10305,0,0,1,196,128v73.06665a110.42518,110.42518,0,0,0,28.80469-26.01831A16.05929,16.05929,0,0,0,228,165.4541v-49.721l23.76465-12.67456a7.99956,7.99956,0,0,0,0-14.11718Z" />
        </>
      );
    case "light":
      return (
        <>
          <polygon
            points="8 96 128 32 248 96 128 160 8 96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="188 240 188 128 128 96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M220,110.93333v54.5208a7.95694,7.95694,0,0,1-1.58951,4.78692C211.67382,179.20536,183.2529,212,128,212s-83.67382-32.79464-90.41049-41.75895A7.95694,7.95694,0,0,1,36,165.45413v-54.5208"
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
          <polygon
            points="8 96 128 32 248 96 128 160 8 96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="188 240 188 128 128 96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M220,110.93333v54.5208a7.95694,7.95694,0,0,1-1.58951,4.78692C211.67382,179.20536,183.2529,212,128,212s-83.67382-32.79464-90.41049-41.75895A7.95694,7.95694,0,0,1,36,165.45413v-54.5208"
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
          <polygon
            points="8 96 128 32 248 96 128 160 8 96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="188 240 188 128 128 96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M220,110.93333v54.5208a7.95694,7.95694,0,0,1-1.58951,4.78692C211.67382,179.20536,183.2529,212,128,212s-83.67382-32.79464-90.41049-41.75895A7.95694,7.95694,0,0,1,36,165.45413v-54.5208"
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

const GraduationCap = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

GraduationCap.displayName = "GraduationCap";

export default GraduationCap;
