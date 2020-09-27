/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line
            x1="42"
            y1="72"
            x2="214"
            y2="72"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="42"
            y1="120"
            x2="214"
            y2="120"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M214,192H42V64A24,24,0,0,1,66,40H190a24,24,0,0,1,24,24Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M214,192v24a8,8,0,0,1-8,8H182a8,8,0,0,1-8-8V192"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M82,192v24a8,8,0,0,1-8,8H50a8,8,0,0,1-8-8V192"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <circle cx="82" cy="156" r="16" />
          <circle cx="174" cy="156" r="16" />
          <path d="M214,192v24a8,8,0,0,1-8,8H182a8,8,0,0,1-8-8V192Z" />
          <path d="M82,192v24a8,8,0,0,1-8,8H50a8,8,0,0,1-8-8V192Z" />
        </>
      );
    case "duotone":
      return (
        <>
          <path
            d="M214,192v24a8,8,0,0,1-8,8H182a8,8,0,0,1-8-8V192Z"
            opacity="0.3"
          />
          <path
            d="M82,192v24a8,8,0,0,1-8,8H50a8,8,0,0,1-8-8V192Z"
            opacity="0.3"
          />
          <rect x="42" y="72" width="172" height="48" opacity="0.2" />
          <line
            x1="42"
            y1="72"
            x2="214"
            y2="72"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="42"
            y1="120"
            x2="214"
            y2="120"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M214,192H42V64A24,24,0,0,1,66,40H190a24,24,0,0,1,24,24Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M214,192v24a8,8,0,0,1-8,8H182a8,8,0,0,1-8-8V192"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M82,192v24a8,8,0,0,1-8,8H50a8,8,0,0,1-8-8V192"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle cx="82" cy="156" r="12" />
          <circle cx="174" cy="156" r="12" />
        </>
      );
    case "fill":
      return (
        <>
          <path d="M190,32H66A32.03667,32.03667,0,0,0,34,64V216a16.01833,16.01833,0,0,0,16,16H74a16.01833,16.01833,0,0,0,16-16V200h76v16a16.01833,16.01833,0,0,0,16,16h24a16.01833,16.01833,0,0,0,16-16V64A32.03667,32.03667,0,0,0,190,32ZM74,216H50V200H74Zm8-48a12,12,0,1,1,12-12A12,12,0,0,1,82,168Zm92,0a12,12,0,1,1,12-12A12,12,0,0,1,174,168Zm32,48H182V200h24Zm0-96H50V72H206Z" />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="42"
            y1="72"
            x2="214"
            y2="72"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="42"
            y1="120"
            x2="214"
            y2="120"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M214,192H42V64A24,24,0,0,1,66,40H190a24,24,0,0,1,24,24Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M214,192v24a8,8,0,0,1-8,8H182a8,8,0,0,1-8-8V192"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M82,192v24a8,8,0,0,1-8,8H50a8,8,0,0,1-8-8V192"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <circle cx="82" cy="156" r="9" />
          <circle cx="174" cy="156" r="9" />
        </>
      );
    case "thin":
      return (
        <>
          <line
            x1="42"
            y1="72"
            x2="214"
            y2="72"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="42"
            y1="120"
            x2="214"
            y2="120"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M214,192H42V64A24,24,0,0,1,66,40H190a24,24,0,0,1,24,24Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M214,192v24a8,8,0,0,1-8,8H182a8,8,0,0,1-8-8V192"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M82,192v24a8,8,0,0,1-8,8H50a8,8,0,0,1-8-8V192"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <circle cx="82" cy="156" r="6" />
          <circle cx="174" cy="156" r="6" />
        </>
      );
    case "regular":
      return (
        <>
          <line
            x1="42"
            y1="72"
            x2="214"
            y2="72"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="42"
            y1="120"
            x2="214"
            y2="120"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M214,192H42V64A24,24,0,0,1,66,40H190a24,24,0,0,1,24,24Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M214,192v24a8,8,0,0,1-8,8H182a8,8,0,0,1-8-8V192"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M82,192v24a8,8,0,0,1-8,8H50a8,8,0,0,1-8-8V192"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <circle cx="82" cy="156" r="12" />
          <circle cx="174" cy="156" r="12" />
        </>
      );
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Bus = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Bus.displayName = "Bus";

export default Bus;
