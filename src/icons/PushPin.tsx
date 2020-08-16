/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <line x1="128" y1="200" x2="128" y2="232" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M208,200H48a8,8,0,0,1-8-8V164.94427a8,8,0,0,1,4.42229-7.15542l23.15542-11.5777A8,8,0,0,0,72,139.05573V48a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8v91.05573a8,8,0,0,0,4.42229,7.15542l23.15542,11.5777A8,8,0,0,1,216,164.94427V192A8,8,0,0,1,208,200Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M208,200H48a8,8,0,0,1-8-8V164.94427a8,8,0,0,1,4.42229-7.15542l23.15542-11.5777A8,8,0,0,0,72,139.05573V48a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8v91.05573a8,8,0,0,0,4.42229,7.15542l23.15542,11.5777A8,8,0,0,1,216,164.94427V192A8,8,0,0,1,208,200Z" opacity="0.2"/>
  <line x1="128" y1="200" x2="128" y2="232" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M208,200H48a8,8,0,0,1-8-8V164.94427a8,8,0,0,1,4.42229-7.15542l23.15542-11.5777A8,8,0,0,0,72,139.05573V48a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8v91.05573a8,8,0,0,0,4.42229,7.15542l23.15542,11.5777A8,8,0,0,1,216,164.94427V192A8,8,0,0,1,208,200Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M215.15625,150.63281,192,139.05469V48a16.01583,16.01583,0,0,0-16-16H80A16.01582,16.01582,0,0,0,64,48v91.05469L40.84375,150.63281A15.91514,15.91514,0,0,0,32,164.94531V192a16.01582,16.01582,0,0,0,16,16h72v24a8,8,0,0,0,16,0V208h72a16.01583,16.01583,0,0,0,16-16V164.94531A15.91516,15.91516,0,0,0,215.15625,150.63281Z"/>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <line x1="128" y1="200" x2="128" y2="232" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M208,200H48a8,8,0,0,1-8-8V164.94427a8,8,0,0,1,4.42229-7.15542l23.15542-11.5777A8,8,0,0,0,72,139.05573V48a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8v91.05573a8,8,0,0,0,4.42229,7.15542l23.15542,11.5777A8,8,0,0,1,216,164.94427V192A8,8,0,0,1,208,200Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <line x1="128" y1="200" x2="128" y2="232" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M208,200H48a8,8,0,0,1-8-8V164.94427a8,8,0,0,1,4.42229-7.15542l23.15542-11.5777A8,8,0,0,0,72,139.05573V48a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8v91.05573a8,8,0,0,0,4.42229,7.15542l23.15542,11.5777A8,8,0,0,1,216,164.94427V192A8,8,0,0,1,208,200Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <line x1="128" y1="200" x2="128" y2="232" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M208,200H48a8,8,0,0,1-8-8V164.94427a8,8,0,0,1,4.42229-7.15542l23.15542-11.5777A8,8,0,0,0,72,139.05573V48a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8v91.05573a8,8,0,0,0,4.42229,7.15542l23.15542,11.5777A8,8,0,0,1,216,164.94427V192A8,8,0,0,1,208,200Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const PushPin = forwardRef<SVGSVGElement, IconProps>(
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

PushPin.displayName = "PushPin";

export default PushPin;
