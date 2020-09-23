/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <path d="M113.85786,142.14214a40,40,0,0,0,56.56855,0L204.36753,108.201a40,40,0,0,0,0-56.56854h0a40,40,0,0,0-56.56854,0L130.80123,68.63023" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M142.14214,113.85786a40,40,0,0,0-56.56855,0L51.63247,147.799a40,40,0,0,0,0,56.56854h0a40,40,0,0,0,56.56854,0l16.99776-16.99776" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <path d="M113.85786,142.14214a40,40,0,0,0,56.56855,0L204.36753,108.201a40,40,0,0,0,0-56.56854h0a40,40,0,0,0-56.56854,0L130.80123,68.63023" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M142.14214,113.85786a40,40,0,0,0-56.56855,0L51.63247,147.799a40,40,0,0,0,0,56.56854h0a40,40,0,0,0,56.56854,0l16.99776-16.99776" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <g>
    <path d="M210.0249,45.97559a48.00015,48.00015,0,0,0-67.88183,0L125.145,62.97266a7.99983,7.99983,0,1,0,11.3125,11.31445L153.45654,57.29A31.99935,31.99935,0,1,1,198.71045,102.544L164.77,136.48535a32.03792,32.03792,0,0,1-45.25586,0,7.99983,7.99983,0,1,0-11.3125,11.31445,48.05687,48.05687,0,0,0,67.88184,0l33.9414-33.9414a48.00134,48.00134,0,0,0,0-67.88281Z"/>
    <path d="M119.54248,181.71289,102.54346,198.71a31.99935,31.99935,0,1,1-45.25391-45.25391L91.23,119.51465a32.03792,32.03792,0,0,1,45.25586,0,7.99983,7.99983,0,1,0,11.3125-11.31445,48.058,48.058,0,0,0-67.88184,0L45.9751,142.1416a48,48,0,0,0,67.88183,67.88281L130.855,193.02734a7.99983,7.99983,0,1,0-11.3125-11.31445Z"/>
  </g>

</>)
    case "light":
      return (<>
  <path d="M113.85786,142.14214a40,40,0,0,0,56.56855,0L204.36753,108.201a40,40,0,0,0,0-56.56854h0a40,40,0,0,0-56.56854,0L130.80123,68.63023" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M142.14214,113.85786a40,40,0,0,0-56.56855,0L51.63247,147.799a40,40,0,0,0,0,56.56854h0a40,40,0,0,0,56.56854,0l16.99776-16.99776" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <path d="M113.85786,142.14214a40,40,0,0,0,56.56855,0L204.36753,108.201a40,40,0,0,0,0-56.56854h0a40,40,0,0,0-56.56854,0L130.80123,68.63023" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M142.14214,113.85786a40,40,0,0,0-56.56855,0L51.63247,147.799a40,40,0,0,0,0,56.56854h0a40,40,0,0,0,56.56854,0l16.99776-16.99776" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <path d="M113.85786,142.14214a40,40,0,0,0,56.56855,0L204.36753,108.201a40,40,0,0,0,0-56.56854h0a40,40,0,0,0-56.56854,0L130.80123,68.63023" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M142.14214,113.85786a40,40,0,0,0-56.56855,0L51.63247,147.799a40,40,0,0,0,0,56.56854h0a40,40,0,0,0,56.56854,0l16.99776-16.99776" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Link = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Link.displayName = "Link";

export default Link;
