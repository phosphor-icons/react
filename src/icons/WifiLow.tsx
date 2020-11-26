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
            d="M92.91969,166.06177a50.7769,50.7769,0,0,1,70.145,0"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <circle cx="128" cy="200" r="16" />
        </>
      );
    case "duotone":
      return (
        <>
          <path
            d="M71.06558,148.89719a88.00756,88.00756,0,0,1,113.86856-.00025l-50.89382,59.98395a7.93583,7.93583,0,0,1-12.14044-.0705Z"
            opacity="0.2"
          />
          <path
            d="M20.20855,75.93124c63.48474-47.90809,152.098-47.90812,215.58263.00015a8.015,8.015,0,0,1,1.201,11.61025c-19.04723,22.44929-82.94714,97.76169-102.95188,121.33925a7.93583,7.93583,0,0,1-12.14044-.0705L19.03968,87.57941A8.055,8.055,0,0,1,20.20855,75.93124Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M71.06558,148.89719a88.00756,88.00756,0,0,1,113.86856-.00025"
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
          <path d="M246.84081,80.49756a15.76545,15.76545,0,0,0-6.231-10.95215c-66.30273-50.03516-158.9165-50.03516-225.22021,0l-.00049.00049a15.73787,15.73787,0,0,0-6.21045,10.936,16.28081,16.28081,0,0,0,3.76074,12.27344l102.86035,121.231a16.15644,16.15644,0,0,0,3.97534,3.38556,15.97543,15.97543,0,0,0,8.25709,2.29852h.00048a15.84564,15.84564,0,0,0,10.90992-4.34833,16.03046,16.03046,0,0,0,1.198-1.26544L243.09227,92.71729A16.20974,16.20974,0,0,0,246.84081,80.49756Zm-15.94873,1.86816-47.10327,55.516a95.96888,95.96888,0,0,0-111.57813-.00012L25.14013,82.4043a.23245.23245,0,0,1-.05958-.12744c60.625-45.71192,145.28174-45.69922,205.85694-.01954A.138.138,0,0,1,230.89208,82.36572Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M92.91969,166.06177a50.7769,50.7769,0,0,1,70.145,0"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle cx="128" cy="200" r="10" />
        </>
      );
    case "thin":
      return (
        <>
          <path
            d="M92.91969,166.06177a50.7769,50.7769,0,0,1,70.145,0"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <circle cx="128" cy="200" r="8" />
        </>
      );
    case "regular":
      return (
        <>
          <path
            d="M92.91969,166.06177a50.7769,50.7769,0,0,1,70.145,0"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle cx="128" cy="200" r="12" />
        </>
      );
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const WifiLow = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

WifiLow.displayName = "WifiLow";

export default WifiLow;
