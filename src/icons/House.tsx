/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <path d="M151.99414,207.99263v-48.001a8,8,0,0,0-8-8h-32a8,8,0,0,0-8,8v48.001a8,8,0,0,1-7.999,8l-47.99414.00632a8,8,0,0,1-8.001-8v-92.4604a8,8,0,0,1,2.61811-5.91906l79.9945-72.73477a8,8,0,0,1,10.76339-.00036l80.0055,72.73509A8,8,0,0,1,216,115.53887V207.999a8,8,0,0,1-8.001,8l-48.00586-.00632A8,8,0,0,1,151.99414,207.99263Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <path d="M151.99414,207.99263v-48.001a8,8,0,0,0-8-8h-32a8,8,0,0,0-8,8v48.001a8,8,0,0,1-7.999,8l-47.99414.00632a8,8,0,0,1-8.001-8v-92.4604a8,8,0,0,1,2.61811-5.91906l79.9945-72.73477a8,8,0,0,1,10.76339-.00036l80.0055,72.73509A8,8,0,0,1,216,115.53887V207.999a8,8,0,0,1-8.001,8l-48.00586-.00632A8,8,0,0,1,151.99414,207.99263Z" opacity="0.2"/>
  <path d="M151.99414,207.99263v-48.001a8,8,0,0,0-8-8h-32a8,8,0,0,0-8,8v48.001a8,8,0,0,1-7.999,8l-47.99414.00632a8,8,0,0,1-8.001-8v-92.4604a8,8,0,0,1,2.61811-5.91906l79.9945-72.73477a8,8,0,0,1,10.76339-.00036l80.0055,72.73509A8,8,0,0,1,216,115.53887V207.999a8,8,0,0,1-8.001,8l-48.00586-.00632A8,8,0,0,1,151.99414,207.99263Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <path d="M218.76367,103.7002,138.75684,30.96436a15.93657,15.93657,0,0,0-21.52637.00146L37.2373,103.69971A16.03108,16.03108,0,0,0,32,115.53857V207.999a15.99994,15.99994,0,0,0,16.002,16l47.99317-.00732a7.99987,7.99987,0,0,0,7.999-8v-64h48v64a7.99988,7.99988,0,0,0,7.999,8l48.00489.00732H208a15.99994,15.99994,0,0,0,16-16v-92.46A16.03567,16.03567,0,0,0,218.76367,103.7002Z"/>

</>)
    case "light":
      return (<>
  <path d="M151.99414,207.99263v-48.001a8,8,0,0,0-8-8h-32a8,8,0,0,0-8,8v48.001a8,8,0,0,1-7.999,8l-47.99414.00632a8,8,0,0,1-8.001-8v-92.4604a8,8,0,0,1,2.61811-5.91906l79.9945-72.73477a8,8,0,0,1,10.76339-.00036l80.0055,72.73509A8,8,0,0,1,216,115.53887V207.999a8,8,0,0,1-8.001,8l-48.00586-.00632A8,8,0,0,1,151.99414,207.99263Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <path d="M151.99414,207.99263v-48.001a8,8,0,0,0-8-8h-32a8,8,0,0,0-8,8v48.001a8,8,0,0,1-7.999,8l-47.99414.00632a8,8,0,0,1-8.001-8v-92.4604a8,8,0,0,1,2.61811-5.91906l79.9945-72.73477a8,8,0,0,1,10.76339-.00036l80.0055,72.73509A8,8,0,0,1,216,115.53887V207.999a8,8,0,0,1-8.001,8l-48.00586-.00632A8,8,0,0,1,151.99414,207.99263Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <path d="M151.99414,207.99263v-48.001a8,8,0,0,0-8-8h-32a8,8,0,0,0-8,8v48.001a8,8,0,0,1-7.999,8l-47.99414.00632a8,8,0,0,1-8.001-8v-92.4604a8,8,0,0,1,2.61811-5.91906l79.9945-72.73477a8,8,0,0,1,10.76339-.00036l80.0055,72.73509A8,8,0,0,1,216,115.53887V207.999a8,8,0,0,1-8.001,8l-48.00586-.00632A8,8,0,0,1,151.99414,207.99263Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const House = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

House.displayName = "House";

export default House;
