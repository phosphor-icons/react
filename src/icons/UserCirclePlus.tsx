/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <circle cx="128" cy="120" r="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M63.79905,199.37405a72.02812,72.02812,0,0,1,128.40177-.00026" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="176" y1="56" x2="224" y2="56" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="200" y1="32" x2="200" y2="80" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M222.67244,111.99863a95.90075,95.90075,0,1,1-78.6712-78.67109" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <path d="M128,32A96.00088,96.00088,0,0,0,63.79883,199.375v-.001A71.99731,71.99731,0,0,1,128,160a40,40,0,1,1,40-40,40.0001,40.0001,0,0,1-40,40,71.99731,71.99731,0,0,1,64.20117,39.374A96.0002,96.0002,0,0,0,128,32Z" opacity="0.2"/>
  <circle cx="128" cy="120" r="40" fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="16"/>
  <path d="M63.79905,199.37405a72.02812,72.02812,0,0,1,128.40177-.00026" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="176" y1="56" x2="224" y2="56" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="200" y1="32" x2="200" y2="80" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M222.67244,111.99863a95.90075,95.90075,0,1,1-78.6712-78.67109" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <path d="M176,64h16V80a8,8,0,0,0,16,0V64h16a8,8,0,0,0,0-16H208V32a8,8,0,0,0-16,0V48H176a8,8,0,0,0,0,16Z"/>
  <circle cx="128" cy="120" r="44"/>
  <path d="M221.34863,104.10889a7.99984,7.99984,0,0,0-6.56592,9.21338A88.98692,88.98692,0,0,1,216,128a87.63623,87.63623,0,0,1-22.24194,58.41016,79.70266,79.70266,0,0,0-24.43091-22.97461,59.83641,59.83641,0,0,1-82.6543,0A79.7048,79.7048,0,0,0,62.2417,186.41016,87.9498,87.9498,0,0,1,128,40a88.91608,88.91608,0,0,1,14.67773,1.21729A7.99993,7.99993,0,0,0,145.3252,25.438,103.90159,103.90159,0,1,0,230.562,110.6748,8.00035,8.00035,0,0,0,221.34863,104.10889Z"/>

</>)
    case "light":
      return (<>
  <circle cx="128" cy="120" r="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M63.79905,199.37405a72.02812,72.02812,0,0,1,128.40177-.00026" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="176" y1="56" x2="224" y2="56" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="200" y1="32" x2="200" y2="80" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M222.67244,111.99863a95.90075,95.90075,0,1,1-78.6712-78.67109" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <circle cx="128" cy="120" r="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M63.79905,199.37405a72.02812,72.02812,0,0,1,128.40177-.00026" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="176" y1="56" x2="224" y2="56" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="200" y1="32" x2="200" y2="80" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M222.67244,111.99863a95.90075,95.90075,0,1,1-78.6712-78.67109" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <circle cx="128" cy="120" r="40" fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="16"/>
  <path d="M63.79905,199.37405a72.02812,72.02812,0,0,1,128.40177-.00026" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="176" y1="56" x2="224" y2="56" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="200" y1="32" x2="200" y2="80" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M222.67244,111.99863a95.90075,95.90075,0,1,1-78.6712-78.67109" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const UserCirclePlus = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

UserCirclePlus.displayName = "UserCirclePlus";

export default UserCirclePlus;
