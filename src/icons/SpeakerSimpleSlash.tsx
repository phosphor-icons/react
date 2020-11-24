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
            x1="227.97656"
            y1="88"
            x2="227.97656"
            y2="168"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="48"
            y1="40"
            x2="208"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M152,154.4V224L80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H91.63636"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="118.484 58.068 152 32 152 94.935"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="191.97656"
            y1="104"
            x2="191.97656"
            y2="138.9095"
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
            d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z"
            opacity="0.2"
          />
          <line
            x1="191.97656"
            y1="104"
            x2="191.97656"
            y2="152"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="223.97656"
            y1="88"
            x2="223.97656"
            y2="168"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="48"
            y1="40"
            x2="208"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="112.15 62.994 152 32 152 106.829"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M152,154.4V224L80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H91.63636"
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
            <path d="M191.97656,160a8.00039,8.00039,0,0,0,8-8V104a8,8,0,0,0-16,0v48A8.00039,8.00039,0,0,0,191.97656,160Z" />
            <path d="M223.97656,80a8.00039,8.00039,0,0,0-8,8v80a8,8,0,1,0,16,0V88A8.00039,8.00039,0,0,0,223.97656,80Z" />
            <path d="M53.91992,34.61813A8.0006,8.0006,0,1,0,42.08008,45.3818L73.55127,80H32A16.01833,16.01833,0,0,0,16,96v64a16.01833,16.01833,0,0,0,16,16H77.25488l69.834,54.31445A7.99958,7.99958,0,0,0,160,224V175.09372l42.08008,46.28808a8.0006,8.0006,0,1,0,11.83984-10.76367Z" />
            <path d="M146.08008,112.2109A8.0004,8.0004,0,0,0,160,106.82907V32a7.99958,7.99958,0,0,0-12.91113-6.31446L107.23926,56.67965a7.99966,7.99966,0,0,0-1.00879,11.69629Z" />
          </g>
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="191.97656"
            y1="104"
            x2="191.97656"
            y2="152"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="223.97656"
            y1="88"
            x2="223.97656"
            y2="168"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="48"
            y1="40"
            x2="208"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="112.15 62.994 152 32 152 106.829"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M152,154.4V224L80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H91.63636"
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
            x1="191.97656"
            y1="104"
            x2="191.97656"
            y2="152"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="223.97656"
            y1="88"
            x2="223.97656"
            y2="168"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="48"
            y1="40"
            x2="208"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="112.15 62.994 152 32 152 106.829"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M152,154.4V224L80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H91.63636"
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
            x1="191.97656"
            y1="104"
            x2="191.97656"
            y2="152"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="223.97656"
            y1="88"
            x2="223.97656"
            y2="168"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="48"
            y1="40"
            x2="208"
            y2="216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="112.15 62.994 152 32 152 106.829"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M152,154.4V224L80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H91.63636"
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

const SpeakerSimpleSlash = forwardRef<SVGSVGElement, IconProps>(
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

SpeakerSimpleSlash.displayName = "SpeakerSimpleSlash";

export default SpeakerSimpleSlash;
