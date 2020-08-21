/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <line x1="40" y1="68" x2="216" y2="68" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="88" y1="108" x2="216" y2="108" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="40.00614" y1="148" x2="216" y2="148" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="88.00614" y1="188" x2="216" y2="188" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <line x1="40" y1="68" x2="216" y2="68" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="88" y1="108" x2="216" y2="108" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="40.00614" y1="148" x2="216" y2="148" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="88.00614" y1="188" x2="216" y2="188" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <line x1="40" y1="68" x2="216" y2="68" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="88" y1="108" x2="216" y2="108" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="40.00614" y1="148" x2="216" y2="148" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="88.00614" y1="188" x2="216" y2="188" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <line x1="40" y1="68" x2="216" y2="68" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="88" y1="108" x2="216" y2="108" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="40.00614" y1="148" x2="216" y2="148" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="88.00614" y1="188" x2="216" y2="188" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <line x1="40" y1="68" x2="216" y2="68" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="88" y1="108" x2="216" y2="108" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="40.00614" y1="148" x2="216" y2="148" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="88.00614" y1="188" x2="216" y2="188" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <line x1="40" y1="68" x2="216" y2="68" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="88" y1="108" x2="216" y2="108" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="40.00614" y1="148" x2="216" y2="148" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="88.00614" y1="188" x2="216" y2="188" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const TextRight = forwardRef<SVGSVGElement, IconProps>(
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

TextRight.displayName = "TextRight";

export default TextRight;
