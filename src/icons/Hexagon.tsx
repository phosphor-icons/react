/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <path
            d="M224,179.405V76.595a8,8,0,0,0-3.969-6.91023l-88-51.33333a8,8,0,0,0-8.06194,0l-88,51.33333A8,8,0,0,0,32,76.595V179.405a8,8,0,0,0,3.969,6.91023l88,51.33333a8,8,0,0,0,8.06194,0l88-51.33333A8,8,0,0,0,224,179.405Z"
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
          <rect width="256" height="256" fill="none" />
          <g opacity="0.2">
            <path d="M224,179.405V76.595a8,8,0,0,0-3.969-6.91023l-88-51.33333a8,8,0,0,0-8.06194,0l-88,51.33333A8,8,0,0,0,32,76.595V179.405a8,8,0,0,0,3.969,6.91023l88,51.33333a8,8,0,0,0,8.06194,0l88-51.33333A8,8,0,0,0,224,179.405Z" />
          </g>
          <path
            d="M224,179.405V76.595a8,8,0,0,0-3.969-6.91023l-88-51.33333a8,8,0,0,0-8.06194,0l-88,51.33333A8,8,0,0,0,32,76.595V179.405a8,8,0,0,0,3.969,6.91023l88,51.33333a8,8,0,0,0,8.06194,0l88-51.33333A8,8,0,0,0,224,179.405Z"
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
          <rect width="256" height="256" fill="none" />
          <path d="M224.0625,62.77344l-88-51.33594a16.03841,16.03841,0,0,0-16.125.00781L31.95312,62.77344A16.018,16.018,0,0,0,24,76.59375v102.8125a16.03667,16.03667,0,0,0,7.9375,13.82031l88,51.33594a16.02593,16.02593,0,0,0,16.125-.00781l87.98437-51.32813A16.018,16.018,0,0,0,232,179.40625V76.59375A16.03669,16.03669,0,0,0,224.0625,62.77344Z" />
        </>
      );
    case "light":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <path
            d="M224,179.405V76.595a8,8,0,0,0-3.969-6.91023l-88-51.33333a8,8,0,0,0-8.06194,0l-88,51.33333A8,8,0,0,0,32,76.595V179.405a8,8,0,0,0,3.969,6.91023l88,51.33333a8,8,0,0,0,8.06194,0l88-51.33333A8,8,0,0,0,224,179.405Z"
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
          <rect width="256" height="256" fill="none" />
          <path
            d="M224,179.405V76.595a8,8,0,0,0-3.969-6.91023l-88-51.33333a8,8,0,0,0-8.06194,0l-88,51.33333A8,8,0,0,0,32,76.595V179.405a8,8,0,0,0,3.969,6.91023l88,51.33333a8,8,0,0,0,8.06194,0l88-51.33333A8,8,0,0,0,224,179.405Z"
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
          <rect width="256" height="256" fill="none" />
          <path
            d="M224,179.405V76.595a8,8,0,0,0-3.969-6.91023l-88-51.33333a8,8,0,0,0-8.06194,0l-88,51.33333A8,8,0,0,0,32,76.595V179.405a8,8,0,0,0,3.969,6.91023l88,51.33333a8,8,0,0,0,8.06194,0l88-51.33333A8,8,0,0,0,224,179.405Z"
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

const Hexagon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Hexagon.displayName = "Hexagon";

export default Hexagon;
