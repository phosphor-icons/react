/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <line x1="128" y1="128" x2="224" y2="32" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M195.88225,60.11775a95.90539,95.90539,0,1,0,18.76606,26.49271" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M161.94113,94.05887a47.99886,47.99886,0,1,0,13.98107,31.20092" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <circle cx="128" cy="128" r="48" opacity="0.2"/>
  <line x1="128" y1="128" x2="224" y2="32" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M195.88225,60.11775a95.90539,95.90539,0,1,0,18.76606,26.49271" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M161.94113,94.05887a47.99886,47.99886,0,1,0,13.98107,31.20092" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <path d="M211.2002,79.3916a8.00051,8.00051,0,0,0-3.77051,10.667,88.0876,88.0876,0,1,1-23.13037-29.67187l-22.769,22.76855a55.99686,55.99686,0,0,0-73.1333,84.438l.0044.00488.00537.00489a56.00035,56.00035,0,0,0,95.50244-42.79737,8.0002,8.0002,0,1,0-15.97461.90821,40.01415,40.01415,0,0,1-61.99805,35.66357l23.94922-23.94922,37.71289-37.7124.00489-.00537,62.05371-62.05371a8.00036,8.00036,0,0,0-11.31446-11.314L195.667,49.01855a104.00214,104.00214,0,0,0-141.206,152.52051A104.01636,104.01636,0,0,0,221.86719,83.16211,7.99983,7.99983,0,0,0,211.2002,79.3916Z"/>

</>)
    case "light":
      return (<>
  <line x1="128" y1="128" x2="224" y2="32" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M195.88225,60.11775a95.90539,95.90539,0,1,0,18.76606,26.49271" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M161.94113,94.05887a47.99886,47.99886,0,1,0,13.98107,31.20092" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <line x1="128" y1="128" x2="224" y2="32" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M195.88225,60.11775a95.90539,95.90539,0,1,0,18.76606,26.49271" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M161.94113,94.05887a47.99886,47.99886,0,1,0,13.98107,31.20092" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <line x1="128" y1="128" x2="224" y2="32" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M195.88225,60.11775a95.90539,95.90539,0,1,0,18.76606,26.49271" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M161.94113,94.05887a47.99886,47.99886,0,1,0,13.98107,31.20092" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Target = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Target.displayName = "Target";

export default Target;
