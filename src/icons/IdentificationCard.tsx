/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect x="24" y="40" width="208" height="176" rx="8" strokeWidth="24" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <line x1="152" y1="112" x2="192" y2="112" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="152" y1="144" x2="192" y2="144" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <circle cx="92.10043" cy="120" r="24" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M61.10869,167.99952a32.01032,32.01032,0,0,1,61.98292-.00215" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <path d="M224,40H32a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V48A8,8,0,0,0,224,40ZM92.10046,144a24,24,0,1,1,24-24A23.99994,23.99994,0,0,1,92.10046,144Z" opacity="0.2"/>
  <rect x="24" y="40" width="208" height="176" rx="8" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <line x1="152" y1="112" x2="192" y2="112" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="152" y1="144" x2="192" y2="144" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="92.10043" cy="120" r="24" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M61.10869,167.99952a32.01032,32.01032,0,0,1,61.98292-.00215" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <path d="M224,32H32A16.01833,16.01833,0,0,0,16,48V208a16.01833,16.01833,0,0,0,16,16H224a16.01833,16.01833,0,0,0,16-16V48A16.01833,16.01833,0,0,0,224,32ZM125.08643,175.74512a8.00256,8.00256,0,0,1-9.74219-5.75293,24.01011,24.01011,0,0,0-46.48779.00146,8.00008,8.00008,0,1,1-15.49512-3.98828,39.896,39.896,0,0,1,16.36023-23.16162,32.00008,32.00008,0,1,1,44.75793,0,39.89755,39.89755,0,0,1,16.35987,23.15918A8.00051,8.00051,0,0,1,125.08643,175.74512ZM192,152H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm0-32H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z"/>
  <circle cx="92.10059" cy="120" r="16"/>

</>)
    case "light":
      return (<>
  <rect x="24" y="40" width="208" height="176" rx="8" strokeWidth="12" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <line x1="152" y1="112" x2="192" y2="112" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="152" y1="144" x2="192" y2="144" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <circle cx="92.10043" cy="120" r="24" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M61.10869,167.99952a32.01032,32.01032,0,0,1,61.98292-.00215" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <rect x="24" y="40" width="208" height="176" rx="8" strokeWidth="8" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <line x1="152" y1="112" x2="192" y2="112" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="152" y1="144" x2="192" y2="144" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <circle cx="92.10043" cy="120" r="24" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M61.10869,167.99952a32.01032,32.01032,0,0,1,61.98292-.00215" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <rect x="24" y="40" width="208" height="176" rx="8" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <line x1="152" y1="112" x2="192" y2="112" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="152" y1="144" x2="192" y2="144" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="92.10043" cy="120" r="24" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M61.10869,167.99952a32.01032,32.01032,0,0,1,61.98292-.00215" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const IdentificationCard = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

IdentificationCard.displayName = "IdentificationCard";

export default IdentificationCard;
