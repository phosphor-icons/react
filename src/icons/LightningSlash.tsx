/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line
            x1="48"
            y1="40.00391"
            x2="208"
            y2="216.00391"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="163.777 167.359 96 239.977 112 159.977 48 135.976 92.198 88.622"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="114.106 65.149 160 15.977 144 95.976 208 119.977 185.685 143.886"
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
          <polygon
            points="96 239.969 112 159.969 48 135.969 160 15.969 144 95.969 208 119.969 96 239.969"
            opacity="0.2"
          />
          <line
            x1="48"
            y1="39.99609"
            x2="208"
            y2="215.99609"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="163.777 167.351 96 239.969 112 159.969 48 135.969 92.198 88.614"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="114.106 65.141 160 15.969 144 95.969 208 119.969 185.685 143.878"
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
            <path d="M53.91943,34.61475A7.99991,7.99991,0,1,0,42.08057,45.37744l39.24072,43.1648-39.16992,41.968a8.00053,8.00053,0,0,0,3.03955,12.94922l57.63037,21.61133-14.666,73.3291a7.99991,7.99991,0,0,0,13.69336,7.02735l61.85083-66.26892,38.38111,42.21911a7.99991,7.99991,0,1,0,11.83886-10.76269Z" />
            <path d="M179.76562,149.25928a8.00013,8.00013,0,0,0,5.86719,2.61865h.05225a8.00073,8.00073,0,0,0,5.84863-2.5415l22.31494-23.90918a7.99994,7.99994,0,0,0-3.03955-12.94922L153.17871,90.8667l14.666-73.3291a8.00018,8.00018,0,0,0-13.69336-7.02735l-45.894,49.17237a8.00006,8.00006,0,0,0-.0708,10.83984Z" />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="48"
            y1="39.99609"
            x2="208"
            y2="215.99609"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="163.777 167.351 96 239.969 112 159.969 48 135.969 92.198 88.614"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="114.106 65.141 160 15.969 144 95.969 208 119.969 185.685 143.878"
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
            x1="48"
            y1="39.99609"
            x2="208"
            y2="215.99609"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="163.777 167.351 96 239.969 112 159.969 48 135.969 92.198 88.614"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="114.106 65.141 160 15.969 144 95.969 208 119.969 185.685 143.878"
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
            x1="48"
            y1="39.99609"
            x2="208"
            y2="215.99609"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="163.777 167.351 96 239.969 112 159.969 48 135.969 92.198 88.614"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="114.106 65.141 160 15.969 144 95.969 208 119.969 185.685 143.878"
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

const LightningSlash = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

LightningSlash.displayName = "LightningSlash";

export default LightningSlash;
