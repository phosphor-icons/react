/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <line x1="40" y1="67.99414" x2="216" y2="67.99414" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="40.00614" y1="127.99414" x2="216" y2="127.99414" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="40.00614" y1="187.99414" x2="144" y2="187.99414" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <rect width="256" height="256" fill="none"/>
  <line x1="184" y1="188" x2="232" y2="188" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="208" y1="164" x2="208" y2="212" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <line x1="40" y1="68" x2="216" y2="68" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="40.00614" y1="128" x2="216" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="40.00614" y1="188" x2="144" y2="188" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <rect y="0.00586" width="256" height="256" fill="none"/>
  <line x1="184" y1="188.00586" x2="232" y2="188.00586" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="208" y1="164.00586" x2="208" y2="212.00586" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <rect y="0.00586" width="256" height="256" fill="none"/>
  <g>
    <path d="M40,76H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Z"/>
    <path d="M216,120H40.00586a8,8,0,1,0,0,16H216a8,8,0,0,0,0-16Z"/>
    <path d="M144,180H40.00586a8,8,0,1,0,0,16H144a8,8,0,0,0,0-16Z"/>
    <path d="M232,180.00586H216v-16a8,8,0,1,0-16,0v16H184a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0v-16h16a8,8,0,0,0,0-16Z"/>
  </g>

</>)
    case "light":
      return (<>
  <line x1="40" y1="68" x2="216" y2="68" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="40.00614" y1="128" x2="216" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="40.00614" y1="188" x2="144" y2="188" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <rect y="0.00586" width="256" height="256" fill="none"/>
  <line x1="184" y1="188.00586" x2="232" y2="188.00586" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="208" y1="164.00586" x2="208" y2="212.00586" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <line x1="40" y1="67.99414" x2="216" y2="67.99414" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="40.00614" y1="127.99414" x2="216" y2="127.99414" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="40.00614" y1="187.99414" x2="144" y2="187.99414" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <rect width="256" height="256" fill="none"/>
  <line x1="184" y1="188" x2="232" y2="188" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="208" y1="164" x2="208" y2="212" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <line x1="40" y1="67.99414" x2="216" y2="67.99414" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="40.00614" y1="127.99414" x2="216" y2="127.99414" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="40.00614" y1="187.99414" x2="144" y2="187.99414" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <rect width="256" height="256" fill="none"/>
  <line x1="184" y1="188" x2="232" y2="188" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="208" y1="164" x2="208" y2="212" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const ListPlus = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ListPlus.displayName = "ListPlus";

export default ListPlus;
