/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M48,144a64,64,0,0,1,64,64" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M48,96A112,112,0,0,1,160,208" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M48,48A160,160,0,0,1,208,208" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <circle cx="51.99414" cy="204" r="16"/>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M47.99414,200V56.32988a8.09741,8.09741,0,0,1,8.3548-8.1155A160.01517,160.01517,0,0,1,207.77976,199.6452,8.09741,8.09741,0,0,1,199.66426,208H55.99414A8,8,0,0,1,47.99414,200Z" opacity="0.2"/>
  <path d="M47.99414,200V56.32988a8.09741,8.09741,0,0,1,8.3548-8.1155A160.01517,160.01517,0,0,1,207.77976,199.6452,8.09741,8.09741,0,0,1,199.66426,208H55.99414A8,8,0,0,1,47.99414,200Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M166.78809,89.20569A167.544,167.544,0,0,0,56.75977,40.22522a15.876,15.876,0,0,0-11.70948,4.36719,16.26655,16.26655,0,0,0-5.05615,11.7373V199.99963a16.01833,16.01833,0,0,0,16,16H199.66406a16.2654,16.2654,0,0,0,11.7378-5.05664,15.903,15.903,0,0,0,4.36718-11.709A167.55129,167.55129,0,0,0,166.78809,89.20569Z"/>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M48,144a64,64,0,0,1,64,64" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M48,96A112,112,0,0,1,160,208" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M48,48A160,160,0,0,1,208,208" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <circle cx="51.99414" cy="204" r="9"/>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M48,144a64,64,0,0,1,64,64" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M48,96A112,112,0,0,1,160,208" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M48,48A160,160,0,0,1,208,208" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <circle cx="51.99414" cy="204" r="6"/>

</>)
    case "regular":
      return (<>
  <path d="M48,144a64,64,0,0,1,64,64" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M48,96A112,112,0,0,1,160,208" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M48,48A160,160,0,0,1,208,208" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="52" cy="204" r="12"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Rss = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Rss.displayName = "Rss";

export default Rss;
