/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <path
            d="M176.49427,116.00932a56.002,56.002,0,1,1,5.59406-42.49386A55.82155,55.82155,0,0,1,176.49427,116.00932Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <line
            x1="176.49427"
            y1="116.00932"
            x2="114.14986"
            y2="224.00003"
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
            d="M176.49427,116.00932a56.002,56.002,0,1,1,5.59406-42.49386A55.82155,55.82155,0,0,1,176.49427,116.00932Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="176.49427"
            y1="116.00932"
            x2="114.14986"
            y2="224.00003"
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
          <path d="M189.81543,71.44531a63.97085,63.97085,0,1,0-61.91895,80.59131,64.36221,64.36221,0,0,0,16.667-2.208c1.30151-.34863,2.57934-.74926,3.8457-1.17382L107.2207,220a8.00044,8.00044,0,1,0,13.85742,8l62.34473-107.99072A63.58244,63.58244,0,0,0,189.81543,71.44531Zm-49.39258,62.92823A47.99971,47.99971,0,0,1,115.57715,41.645a48.25383,48.25383,0,0,1,12.501-1.65625,48.01153,48.01153,0,0,1,12.34473,94.38477Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M176.49427,116.00932a56.002,56.002,0,1,1,5.59406-42.49386A55.82155,55.82155,0,0,1,176.49427,116.00932Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <line
            x1="176.49427"
            y1="116.00932"
            x2="114.14986"
            y2="224.00003"
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
            d="M176.49427,116.00932a56.002,56.002,0,1,1,5.59406-42.49386A55.82155,55.82155,0,0,1,176.49427,116.00932Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <line
            x1="176.49427"
            y1="116.00932"
            x2="114.14986"
            y2="224.00003"
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
            d="M176.49427,116.00932a56.002,56.002,0,1,1,5.59406-42.49386A55.82155,55.82155,0,0,1,176.49427,116.00932Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="176.49427"
            y1="116.00932"
            x2="114.14986"
            y2="224.00003"
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

const NumberNine = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

NumberNine.displayName = "NumberNine";

export default NumberNine;
