/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="88" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="65.7746" y1="65.7746" x2="190.2254" y2="190.2254" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="88" opacity="0.2"/>
  <circle cx="128" cy="128" r="88" fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="16"/>
  <line x1="65.7746" y1="65.7746" x2="190.2254" y2="190.2254" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <path d="M173.25488,82.74475a64.05782,64.05782,0,0,0-84.48681-5.29053l89.77783,89.77686A64.083,64.083,0,0,0,173.25488,82.74475Z"/>
    <path d="M82.74512,173.255a64.08243,64.08243,0,0,0,84.48681,5.29053L77.4541,88.76868A64.083,64.083,0,0,0,82.74512,173.255Z"/>
    <path d="M128,32.00012a96,96,0,1,0,96,96A96.10874,96.10874,0,0,0,128,32.00012Zm56.56934,152.56836v.00049a80.00078,80.00078,0,1,1,0-113.1377A80.09361,80.09361,0,0,1,184.56934,184.56848Z"/>
  </g>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="88" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="65.7746" y1="65.7746" x2="190.2254" y2="190.2254" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="88" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="65.7746" y1="65.7746" x2="190.2254" y2="190.2254" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="88" fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="16"/>
  <line x1="65.7746" y1="65.7746" x2="190.2254" y2="190.2254" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Prohibit = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Prohibit.displayName = "Prohibit";

export default Prohibit;
