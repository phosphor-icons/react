/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <path d="M151.99951,80V203.71853a8,8,0,0,0,3.5624,6.6564L166.554,217.703a8,8,0,0,0,12.19875-4.71612L191.99951,160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M151.99951,160v43.71853a8,8,0,0,0,3.5624,6.6564L166.554,217.703a8,8,0,0,0,12.19875-4.71612L191.99951,160Z"/>
  <path d="M191.99951,160a40,40,0,0,0,0-80h-40S97.54779,80,45.14845,36.05237a7.99844,7.99844,0,0,0-13.14894,6.11524V197.83239a7.99844,7.99844,0,0,0,13.14894,6.11524C97.54779,160,151.99951,160,151.99951,160Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <path d="M151.99951,160h40a40,40,0,0,0,0-80h-40Z" opacity="0.2"/>
  <path d="M151.99951,80V203.71853a8,8,0,0,0,3.5624,6.6564L166.554,217.703a8,8,0,0,0,12.19875-4.71612L191.99951,160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M191.99951,160a40,40,0,0,0,0-80h-40S97.54779,80,45.14845,36.05237a7.99844,7.99844,0,0,0-13.14894,6.11524V197.83239a7.99844,7.99844,0,0,0,13.14894,6.11524C97.54779,160,151.99951,160,151.99951,160Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <path d="M240,120a48.05375,48.05375,0,0,0-48-48H152a8.00039,8.00039,0,0,0-8,8V203.71875a15.965,15.965,0,0,0,7.124,13.3125l10.99317,7.3291a16.00058,16.00058,0,0,0,24.39648-9.43262L198.354,167.56641A48.06211,48.06211,0,0,0,240,120Z"/>
  <path d="M122.02441,67.24121A185.42017,185.42017,0,0,1,50.29,29.92383,15.99837,15.99837,0,0,0,23.999,42.168V197.832a15.84176,15.84176,0,0,0,9.2295,14.49219,16.08621,16.08621,0,0,0,6.80664,1.52441,15.91249,15.91249,0,0,0,10.2539-3.77148,185.42038,185.42038,0,0,1,71.73535-37.31836,7.99948,7.99948,0,0,0,5.97461-7.73926V74.98047A7.99948,7.99948,0,0,0,122.02441,67.24121Z"/>

</>)
    case "light":
      return (<>
  <path d="M151.99951,80V203.71853a8,8,0,0,0,3.5624,6.6564L166.554,217.703a8,8,0,0,0,12.19875-4.71612L191.99951,160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M191.99951,160a40,40,0,0,0,0-80h-40S97.54779,80,45.14845,36.05237a7.99844,7.99844,0,0,0-13.14894,6.11524V197.83239a7.99844,7.99844,0,0,0,13.14894,6.11524C97.54779,160,151.99951,160,151.99951,160Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <path d="M151.99951,80V203.71853a8,8,0,0,0,3.5624,6.6564L166.554,217.703a8,8,0,0,0,12.19875-4.71612L191.99951,160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M191.99951,160a40,40,0,0,0,0-80h-40S97.54779,80,45.14845,36.05237a7.99844,7.99844,0,0,0-13.14894,6.11524V197.83239a7.99844,7.99844,0,0,0,13.14894,6.11524C97.54779,160,151.99951,160,151.99951,160Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <path d="M152,80V203.71853a8,8,0,0,0,3.5624,6.6564l10.99213,7.32809a8,8,0,0,0,12.19874-4.71612L192,160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M192,160a40,40,0,0,0,0-80H152S97.54828,80,45.14894,36.05237A7.99844,7.99844,0,0,0,32,42.16761V197.83239a7.99844,7.99844,0,0,0,13.14894,6.11524C97.54828,160,152,160,152,160Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Megaphone = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Megaphone.displayName = "Megaphone";

export default Megaphone;
