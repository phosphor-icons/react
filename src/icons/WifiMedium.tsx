/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <circle cx="127.99219" cy="200.0029" r="16" />
          <path
            d="M92.91969,166.06177a50.7769,50.7769,0,0,1,70.145,0"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M58.97857,132.12064a98.75415,98.75415,0,0,1,138.02724,0"
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
            d="M134.04032,208.88089a7.93583,7.93583,0,0,1-12.14044-.0705L50.36222,124.49611a120.01033,120.01033,0,0,1,155.27524-.00029Z"
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
            d="M50.36222,124.49611a120.01033,120.01033,0,0,1,155.27524-.00029"
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
          <path d="M240.60352,69.55179C174.33789,19.52054,81.71289,19.50492,15.416,69.53617a15.67919,15.67919,0,0,0-6.23438,10.9375,16.20384,16.20384,0,0,0,3.76563,12.28125L115.791,213.98148a16.04165,16.04165,0,0,0,12.21875,5.6875h.01562a15.846,15.846,0,0,0,12.10938-5.60938v-.00781L243.10352,92.708a16.264,16.264,0,0,0,3.73437-12.22656A15.76645,15.76645,0,0,0,240.60352,69.55179ZM25.00977,82.333h0l.01562-.01562C25.02539,82.32523,25.02539,82.32523,25.00977,82.333ZM204.48242,113.4971A127.38716,127.38716,0,0,0,187.502,102.81156c-.2539-.13575-.50781-.26953-.76562-.40235a127.88589,127.88589,0,0,0-17.78711-7.57129c-.50195-.17089-1.00781-.3164-1.51367-.48144a127.931,127.931,0,0,0-18.42188-4.5625c-.53125-.08985-1.0664-.13086-1.60156-.21387a119.8284,119.8284,0,0,0-38.80859-.00293c-.53711.083-1.07813.126-1.61524.21582a127.94763,127.94763,0,0,0-18.40039,4.55567c-.50781.165-1.01562.3125-1.51953.48437a128.124,128.124,0,0,0-17.76563,7.55762c-.26367.13672-.52343.27441-.78515.41308a127.2435,127.2435,0,0,0-16.96094,10.666l-.002.001L25.10352,82.27054c60.625-45.71875,145.26562-45.6875,205.79687.09375Z" />
        </>
      );
    case "light":
      return (
        <>
          <circle cx="127.99219" cy="200.0029" r="9" />
          <path
            d="M92.91969,166.06177a50.7769,50.7769,0,0,1,70.145,0"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M58.97857,132.12064a98.75415,98.75415,0,0,1,138.02724,0"
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
          <circle cx="127.99219" cy="200.0029" r="6" />
          <path
            d="M92.91969,166.06177a50.7769,50.7769,0,0,1,70.145,0"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M58.97857,132.12064a98.75415,98.75415,0,0,1,138.02724,0"
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
          <circle cx="127.99219" cy="200.0029" r="12" />
          <path
            d="M92.91969,166.06177a50.7769,50.7769,0,0,1,70.145,0"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M58.97857,132.12064a98.75415,98.75415,0,0,1,138.02724,0"
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

const WifiMedium = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

WifiMedium.displayName = "WifiMedium";

export default WifiMedium;
