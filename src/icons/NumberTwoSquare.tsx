/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M105.886,94.65812a24.00621,24.00621,0,1,1,42.01514,22.76051L104,176v-.00575h48" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="24" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <rect x="40" y="40" width="176" height="176" rx="8" opacity="0.2"/>
  <path d="M105.886,94.65812a24.00621,24.00621,0,1,1,42.01514,22.76051L104,176v-.00575h48" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M208,32H48A16.02085,16.02085,0,0,0,32,48V208a16.02085,16.02085,0,0,0,16,16H208a16.02085,16.02085,0,0,0,16-16V48A16.02085,16.02085,0,0,0,208,32ZM152,167.99219V168a8,8,0,0,1,0,16c-.01367,0-.02539-.00781-.03906-.00781H104a8.00208,8.00208,0,0,1-6.40625-12.79688L141.5,112.625a17.79616,17.79616,0,0,0,1.25-2.40625,16.36714,16.36714,0,0,0,.9375-3.02344,16.45292,16.45292,0,0,0-.01562-6.46093,16.10319,16.10319,0,0,0-.92188-2.95313,17.56075,17.56075,0,0,0-1.48437-2.75,16.40541,16.40541,0,0,0-1.9375-2.32031,15.46322,15.46322,0,0,0-2.35938-1.96875,16.80205,16.80205,0,0,0-2.75-1.49219,16.21532,16.21532,0,0,0-2.98437-.92969,16.68965,16.68965,0,0,0-6.46875,0,16.0421,16.0421,0,0,0-5.70313,2.40625,15.90613,15.90613,0,0,0-2.35937,1.9375,17.25442,17.25442,0,0,0-2.01563,2.44532,16.93288,16.93288,0,0,0-1.4375,2.67187,7.99538,7.99538,0,1,1-14.71875-6.25,31.33478,31.33478,0,0,1,2.92188-5.40625,32.82792,32.82792,0,0,1,3.9375-4.77344,32.53956,32.53956,0,0,1,10.14062-6.83593A32.09894,32.09894,0,0,1,140.4375,74.5a31.76916,31.76916,0,0,1,5.46875,2.97656,30.64373,30.64373,0,0,1,4.73438,3.92188,31.24973,31.24973,0,0,1,6.82812,10.13281A31.66568,31.66568,0,0,1,160,104a32.04561,32.04561,0,0,1-.64062,6.40625,32.632,32.632,0,0,1-1.89063,6.0625,31.33474,31.33474,0,0,1-2.92187,5.40625L120,168Z"/>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M105.886,94.65812a24.00621,24.00621,0,1,1,42.01514,22.76051L104,176v-.00575h48" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="12" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M105.886,94.65812a24.00621,24.00621,0,1,1,42.01514,22.76051L104,176v-.00575h48" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="8" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M105.886,94.65812a24.00621,24.00621,0,1,1,42.01514,22.76051L104,176v-.00575h48" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const NumberTwoSquare = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

NumberTwoSquare.displayName = "NumberTwoSquare";

export default NumberTwoSquare;
