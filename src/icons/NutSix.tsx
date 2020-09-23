/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M224,179.405V76.595a8,8,0,0,0-3.969-6.91023l-88-51.33333a8,8,0,0,0-8.06194,0l-88,51.33333A8,8,0,0,0,32,76.595V179.405a8,8,0,0,0,3.969,6.91023l88,51.33333a8,8,0,0,0,8.06194,0l88-51.33333A8,8,0,0,0,224,179.405Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <circle cx="128" cy="128" r="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M220.03125,69.68457l-88-51.333a7.99878,7.99878,0,0,0-8.06152,0l-88,51.333A8.00059,8.00059,0,0,0,32,76.59473V179.40527a8.00059,8.00059,0,0,0,3.96973,6.91016l88,51.333a7.99878,7.99878,0,0,0,8.06152,0l88-51.333A7.99968,7.99968,0,0,0,224,179.40527V76.59473A7.99968,7.99968,0,0,0,220.03125,69.68457ZM128,168a40,40,0,1,1,40-40A40.0001,40.0001,0,0,1,128,168Z" opacity="0.2"/>
  <path d="M224,179.405V76.595a8,8,0,0,0-3.969-6.91023l-88-51.33333a8,8,0,0,0-8.06194,0l-88,51.33333A8,8,0,0,0,32,76.595V179.405a8,8,0,0,0,3.969,6.91023l88,51.33333a8,8,0,0,0,8.06194,0l88-51.33333A8,8,0,0,0,224,179.405Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="128" cy="128" r="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M224.062,62.77441l-88-51.333a16.02491,16.02491,0,0,0-16.124,0L31.9375,62.7749A16.05337,16.05337,0,0,0,24,76.59473V179.40527a16.05419,16.05419,0,0,0,7.938,13.82032l88,51.333a16.02408,16.02408,0,0,0,16.124,0L224.0625,193.2251A16.05337,16.05337,0,0,0,232,179.40527V76.59473A16.05419,16.05419,0,0,0,224.062,62.77441ZM160,128a32,32,0,1,1-32-32A32.03635,32.03635,0,0,1,160,128Z"/>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M224,179.405V76.595a8,8,0,0,0-3.969-6.91023l-88-51.33333a8,8,0,0,0-8.06194,0l-88,51.33333A8,8,0,0,0,32,76.595V179.405a8,8,0,0,0,3.969,6.91023l88,51.33333a8,8,0,0,0,8.06194,0l88-51.33333A8,8,0,0,0,224,179.405Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <circle cx="128" cy="128" r="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M224,179.405V76.595a8,8,0,0,0-3.969-6.91023l-88-51.33333a8,8,0,0,0-8.06194,0l-88,51.33333A8,8,0,0,0,32,76.595V179.405a8,8,0,0,0,3.969,6.91023l88,51.33333a8,8,0,0,0,8.06194,0l88-51.33333A8,8,0,0,0,224,179.405Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <circle cx="128" cy="128" r="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M224,179.405V76.595a8,8,0,0,0-3.969-6.91023l-88-51.33333a8,8,0,0,0-8.06194,0l-88,51.33333A8,8,0,0,0,32,76.595V179.405a8,8,0,0,0,3.969,6.91023l88,51.33333a8,8,0,0,0,8.06194,0l88-51.33333A8,8,0,0,0,224,179.405Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="128" cy="128" r="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const NutSix = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

NutSix.displayName = "NutSix";

export default NutSix;
