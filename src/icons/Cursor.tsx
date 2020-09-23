/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <polygon points="40.002 40 104.002 216 136.002 136 216.002 104 40.002 40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="136.00244" y1="136" x2="200.00244" y2="200" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <polygon points="40.002 40 104.002 216 136.002 136 216.002 104 40.002 40" opacity="0.2"/>
  <polygon points="40.002 40 104.002 216 136.002 136 216.002 104 40.002 40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="136.00244" y1="136" x2="200.00244" y2="200" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <path d="M218.73682,96.48145l-176-64A8.00005,8.00005,0,0,0,32.48389,42.73389l64,176a8.00052,8.00052,0,0,0,7.3916,5.26513c.043.001.085.001.12793.001a7.99926,7.99926,0,0,0,7.42676-5.02881l27.49414-68.73535,55.42089,55.42139a8.00053,8.00053,0,0,0,11.31446-11.31446l-55.42139-55.42089,68.73486-27.49415a8.00007,8.00007,0,0,0-.23632-14.94628Z"/>

</>)
    case "light":
      return (<>
  <polygon points="40.002 40 104.002 216 136.002 136 216.002 104 40.002 40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="136.00244" y1="136" x2="200.00244" y2="200" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <polygon points="40.002 40 104.002 216 136.002 136 216.002 104 40.002 40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="136.00244" y1="136" x2="200.00244" y2="200" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <polygon points="40.002 40 104.002 216 136.002 136 216.002 104 40.002 40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="136.00244" y1="136" x2="200.00244" y2="200" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Cursor = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Cursor.displayName = "Cursor";

export default Cursor;
