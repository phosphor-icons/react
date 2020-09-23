/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polygon points="96 239.992 112 159.992 48 135.992 160 15.992 144 95.992 208 119.992 96 239.992" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polygon points="96 239.992 112 159.992 48 135.992 160 15.992 144 95.992 208 119.992 96 239.992" opacity="0.2"/>
  <polygon points="96 239.992 112 159.992 48 135.992 160 15.992 144 95.992 208 119.992 96 239.992" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polygon points="128 503.992 128 415.992 40 415.992 128 263.992 128 351.992 216 351.992 128 503.992" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M215.78857,118.16406a8.00125,8.00125,0,0,0-4.97949-5.6626L153.17871,90.89014l14.666-73.3291a8.00018,8.00018,0,0,0-13.69336-7.02735l-112,120a7.99995,7.99995,0,0,0,3.03955,12.94922l57.63037,21.61133-14.666,73.3291a7.99991,7.99991,0,0,0,13.69336,7.02734l112-120A8.00057,8.00057,0,0,0,215.78857,118.16406Z"/>
  <path d="M222.93066,347.99609A8.00019,8.00019,0,0,0,216,343.99219H136v-80a8,8,0,0,0-14.92334-4.0083l-88,152A7.99977,7.99977,0,0,0,40,423.99219h80v80a7.99978,7.99978,0,0,0,14.92334,4.0083l88-152A8.00042,8.00042,0,0,0,222.93066,347.99609Z"/>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polygon points="96 239.992 112 159.992 48 135.992 160 15.992 144 95.992 208 119.992 96 239.992" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polygon points="96 239.992 112 159.992 48 135.992 160 15.992 144 95.992 208 119.992 96 239.992" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polygon points="96 239.992 112 159.992 48 135.992 160 15.992 144 95.992 208 119.992 96 239.992" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polygon points="128 503.992 128 415.992 40 415.992 128 263.992 128 351.992 216 351.992 128 503.992" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" opacity="0.2"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Lightning = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Lightning.displayName = "Lightning";

export default Lightning;
