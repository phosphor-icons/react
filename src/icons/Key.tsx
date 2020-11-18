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
          <circle cx="180" cy="76" r="16" />
          <path
            d="M93.16866,122.8328a71.93648,71.93648,0,1,1,40.0009,40.001l.00062-.00149L120.00244,176h-24v24h-24v24h-40V184l61.168-61.168Z"
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
          <g opacity="0.2">
            <path d="M93.16866,122.8328a71.93648,71.93648,0,1,1,40.0009,40.001l.00062-.00149L120.00244,176h-24v24h-24v24h-40V184l61.168-61.168Z" />
          </g>
          <circle cx="180" cy="76" r="12" />
          <path
            d="M93.16866,122.8328a71.93648,71.93648,0,1,1,40.0009,40.001l.00062-.00149L120.00244,176h-24v24h-24v24h-40V184l61.168-61.168Z"
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
          <path d="M160.00244,16A80.05817,80.05817,0,0,0,83.91357,120.77539L26.34521,178.34277A8.00235,8.00235,0,0,0,24.00244,184v40a8.00039,8.00039,0,0,0,8,8h40a8.00039,8.00039,0,0,0,8-8V208h16a8.00039,8.00039,0,0,0,8-8V184h16a8.00235,8.00235,0,0,0,5.65723-2.34277l9.56738-9.56836A80.00922,80.00922,0,1,0,160.00244,16ZM180,92a16,16,0,1,1,16-16A16.00016,16.00016,0,0,1,180,92Z" />
        </>
      );
    case "light":
      return (
        <>
          <circle cx="180" cy="76" r="9" />
          <path
            d="M93.16866,122.8328a71.93648,71.93648,0,1,1,40.0009,40.001l.00062-.00149L120.00244,176h-24v24h-24v24h-40V184l61.168-61.168Z"
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
          <circle cx="180" cy="76" r="6" />
          <path
            d="M93.16866,122.8328a71.93648,71.93648,0,1,1,40.0009,40.001l.00062-.00149L120.00244,176h-24v24h-24v24h-40V184l61.168-61.168Z"
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
          <circle cx="180" cy="76" r="12" />
          <path
            d="M93.16866,122.8328a71.93648,71.93648,0,1,1,40.0009,40.001l.00062-.00149L120.00244,176h-24v24h-24v24h-40V184l61.168-61.168Z"
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

const Key = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Key.displayName = "Key";

export default Key;
