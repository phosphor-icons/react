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
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M179.1333,116.32931a112.19069,112.19069,0,0,0-102.3584.04859"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M158.73682,155.34884a67.9512,67.9512,0,0,0-61.56592.04737"
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
          <circle cx="128" cy="128" r="96" opacity="0.2" />
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <g>
            <path
              d="M179.1333,108.32931a112.19069,112.19069,0,0,0-102.3584.04859"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <path
              d="M164.29541,136.71457a79.94058,79.94058,0,0,0-72.68359.04736"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <path
              d="M149.47217,165.07248a47.97816,47.97816,0,0,0-43.03662.04736"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
          </g>
        </>
      );
    case "fill":
      return (
        <>
          <path d="M128,24A104,104,0,1,0,232,128,104.1179,104.1179,0,0,0,128,24Zm28.624,144.65722a8.00058,8.00058,0,0,1-10.73633,3.56641,39.98258,39.98258,0,0,0-35.85156.04,7.99966,7.99966,0,1,1-7.20117-14.28711,55.97479,55.97479,0,0,1,50.22217-.05566A7.99977,7.99977,0,0,1,156.624,168.65719Zm14.79737-28.30664a8.00153,8.00153,0,0,1-10.76221,3.49024,71.9412,71.9412,0,0,0-65.40234.042,7.99976,7.99976,0,1,1-7.29-14.24219,87.94,87.94,0,0,1,79.96484-.05176A7.9994,7.9994,0,0,1,171.42139,140.35055Zm14.82666-28.36426a8.00037,8.00037,0,0,1-10.77246,3.458,104.1903,104.1903,0,0,0-95.03614.04492,8,8,0,1,1-7.3291-14.22265,120.19311,120.19311,0,0,1,109.68066-.05274A7.99973,7.99973,0,0,1,186.24805,111.98629Z" />
        </>
      );
    case "light":
      return (
        <>
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <g>
            <path
              d="M179.1333,108.32931a112.19069,112.19069,0,0,0-102.3584.04859"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="12"
            />
            <path
              d="M164.29541,136.71457a79.94058,79.94058,0,0,0-72.68359.04736"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="12"
            />
            <path
              d="M149.47217,165.07248a47.97816,47.97816,0,0,0-43.03662.04736"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="12"
            />
          </g>
        </>
      );
    case "thin":
      return (
        <>
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <g>
            <path
              d="M179.1333,108.32931a112.19069,112.19069,0,0,0-102.3584.04859"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="8"
            />
            <path
              d="M164.29541,136.71457a79.94058,79.94058,0,0,0-72.68359.04736"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="8"
            />
            <path
              d="M149.47217,165.07248a47.97816,47.97816,0,0,0-43.03662.04736"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="8"
            />
          </g>
        </>
      );
    case "regular":
      return (
        <>
          <circle
            cx="128"
            cy="128"
            r="96"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <g>
            <path
              d="M179.1333,108.32931a112.19069,112.19069,0,0,0-102.3584.04859"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <path
              d="M164.29541,136.71457a79.94058,79.94058,0,0,0-72.68359.04736"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <path
              d="M149.47217,165.07248a47.97816,47.97816,0,0,0-43.03662.04736"
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
          </g>
        </>
      );
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const SpotifyLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

SpotifyLogo.displayName = "SpotifyLogo";

export default SpotifyLogo;
