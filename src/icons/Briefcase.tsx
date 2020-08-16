/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect x="32.00781" y="72.00005" width="192" height="144" rx="8" strokeWidth="24" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <path d="M168,216V48a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8V216" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <path d="M88,72V216l-47.99219,0a8,8,0,0,1-8-8v-128a8,8,0,0,1,8-8Z" opacity="0.2"/>
  <path d="M168.00781,72V216l47.99219,0a8,8,0,0,0,8-8v-128a8,8,0,0,0-8-8Z" opacity="0.2"/>
  <rect x="32.00781" y="72.00005" width="192" height="144" rx="8" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <path d="M168,216V48a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8V216" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <path d="M216.01562,64H176V224h40.01562a16.01582,16.01582,0,0,0,16-16V80A16.01582,16.01582,0,0,0,216.01562,64Z"/>
  <rect x="96" y="64" width="64" height="160"/>
  <path d="M160,32H96A16.01582,16.01582,0,0,0,80,48V64H96V48h64V64h16V48A16.01583,16.01583,0,0,0,160,32Z"/>
  <path d="M24.01562,80V208a16.01583,16.01583,0,0,0,16,16H80V64H40.01562A16.01583,16.01583,0,0,0,24.01562,80Z"/>

</>)
    case "light":
      return (<>
  <rect x="32.00781" y="72.00005" width="192" height="144" rx="8" strokeWidth="12" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <path d="M168,216V48a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8V216" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <rect x="32.00781" y="72.00005" width="192" height="144" rx="8" strokeWidth="8" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <path d="M168,216V48a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8V216" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <rect x="32.00781" y="72.00005" width="192" height="144" rx="8" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <path d="M168,216V48a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8V216" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Briefcase = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
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
  }
);

Briefcase.displayName = "Briefcase";

export default Briefcase;
