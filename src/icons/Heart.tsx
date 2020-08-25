/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path
            d="M127.99414,223.9971s-104-64-104-129.9971A54.00912,54.00912,0,0,1,127.75052,72.98069l.4142.17353A54.00914,54.00914,0,0,1,231.99414,94C231.99414,159.9971,127.99414,223.9971,127.99414,223.9971Z"
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
            d="M127.99414,223.9971s-104-64-104-129.9971A54.00912,54.00912,0,0,1,127.75052,72.98069l.4142.17353A54.00914,54.00914,0,0,1,231.99414,94C231.99414,159.9971,127.99414,223.9971,127.99414,223.9971Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M127.99414,223.9971s-104-64-104-129.9971A54.00912,54.00912,0,0,1,127.75052,72.98069l.4142.17353A54.00914,54.00914,0,0,1,231.99414,94C231.99414,159.9971,127.99414,223.9971,127.99414,223.9971Z"
            opacity="0.2"
          />
        </>
      );
    case "fill":
      return (
        <>
          <path d="M177.98633,32a61.873,61.873,0,0,0-50,25.29688A62.02071,62.02071,0,0,0,15.98633,94c0,69.67188,103.40625,134.10156,107.8125,136.8125a7.977,7.977,0,0,0,8.375,0c4.40625-2.71094,107.8125-67.14062,107.8125-136.8125A62.06947,62.06947,0,0,0,177.98633,32Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M127.99414,223.9971s-104-64-104-129.9971A54.00912,54.00912,0,0,1,127.75052,72.98069l.4142.17353A54.00914,54.00914,0,0,1,231.99414,94C231.99414,159.9971,127.99414,223.9971,127.99414,223.9971Z"
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
            d="M127.99414,223.9971s-104-64-104-129.9971A54.00912,54.00912,0,0,1,127.75052,72.98069l.4142.17353A54.00914,54.00914,0,0,1,231.99414,94C231.99414,159.9971,127.99414,223.9971,127.99414,223.9971Z"
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
            d="M127.99414,223.9971s-104-64-104-129.9971A54.00912,54.00912,0,0,1,127.75052,72.98069l.4142.17353A54.00914,54.00914,0,0,1,231.99414,94C231.99414,159.9971,127.99414,223.9971,127.99414,223.9971Z"
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

const Heart = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>
  );
});

Heart.displayName = "Heart";

export default Heart;
