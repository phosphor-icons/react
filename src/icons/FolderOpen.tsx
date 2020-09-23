/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <path d="M32,208V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H200a8,8,0,0,1,8,8v24" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M32,208l30.17661-90.52982A8,8,0,0,1,69.76607,112H228.90059a8,8,0,0,1,7.58947,10.52982L208,208Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <path d="M32,208l30.17661-90.52982A8,8,0,0,1,69.76607,112H208V88a8,8,0,0,0-8-8H130.66667a8,8,0,0,1-4.8-1.6L98.13333,57.6a8,8,0,0,0-4.8-1.6H40a8,8,0,0,0-8,8Z" opacity="0.2"/>
  <path d="M32,208V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H200a8,8,0,0,1,8,8v24" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M32,208l30.17661-90.52982A8,8,0,0,1,69.76607,112H228.90059a8,8,0,0,1,7.58947,10.52982L208,208Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <path d="M46.99609,112.38574A24.01793,24.01793,0,0,1,69.76562,96H216V88a16.01583,16.01583,0,0,0-16-16H130.65625L102.92187,51.19531A16.08488,16.08488,0,0,0,93.32812,48H40A16.01582,16.01582,0,0,0,24,64V181.38477Z"/>
  <path d="M239.20312,118.64062A16.03432,16.03432,0,0,0,226.23437,112H77.17187a18.83411,18.83411,0,0,0-17.90625,12.90625l-26.85937,80.5625A8.01014,8.01014,0,0,0,40,216H208a8.01572,8.01572,0,0,0,7.59375-5.46875l25.82812-77.46875v-.01562A16.06312,16.06312,0,0,0,239.20312,118.64062Zm-5.3789,11.88868h0l.0039.00195Z"/>

</>)
    case "light":
      return (<>
  <path d="M32,208V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H200a8,8,0,0,1,8,8v24" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M32,208l30.17661-90.52982A8,8,0,0,1,69.76607,112H228.90059a8,8,0,0,1,7.58947,10.52982L208,208Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <path d="M32,208V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H200a8,8,0,0,1,8,8v24" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M32,208l30.17661-90.52982A8,8,0,0,1,69.76607,112H228.90059a8,8,0,0,1,7.58947,10.52982L208,208Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <path d="M32,208V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H200a8,8,0,0,1,8,8v24" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M32,208l30.17661-90.52982A8,8,0,0,1,69.76607,112H228.90059a8,8,0,0,1,7.58947,10.52982L208,208Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const FolderOpen = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

FolderOpen.displayName = "FolderOpen";

export default FolderOpen;
