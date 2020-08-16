/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="24" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <line x1="32" y1="96" x2="224" y2="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="63.99414" y1="176" x2="111.99414" y2="176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <path d="M224,96V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V96Z" opacity="0.2"/>
  <rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <line x1="32" y1="96" x2="224" y2="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="63.99414" y1="176" x2="111.99414" y2="176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <path d="M216,40H40A16.01833,16.01833,0,0,0,24,56V200a16.01833,16.01833,0,0,0,16,16H216a16.01833,16.01833,0,0,0,16-16V56A16.01833,16.01833,0,0,0,216,40ZM111.99414,184h-48a8,8,0,0,1,0-16h48a8,8,0,1,1,0,16ZM40,88V56H216l.0022,32Z"/>

</>)
    case "light":
      return (<>
  <rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="12" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <line x1="32" y1="96" x2="224" y2="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="63.99414" y1="176" x2="111.99414" y2="176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="8" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <line x1="32" y1="96" x2="224" y2="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="63.99414" y1="176" x2="111.99414" y2="176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <line x1="32" y1="96" x2="224" y2="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="63.99414" y1="176" x2="111.99414" y2="176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const CreditCard = forwardRef<SVGSVGElement, IconProps>(
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

CreditCard.displayName = "CreditCard";

export default CreditCard;
