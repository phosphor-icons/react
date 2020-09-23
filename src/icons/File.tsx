/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M200,224.00005H55.99219a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8L152,32l56,56v128A8,8,0,0,1,200,224.00005Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <polyline points="152 32 152 88 208.008 88" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <polygon points="152 32 152 88 208.008 88 152 32"/>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polygon points="152 32 152 88 208.008 88 152 32" opacity="0.2"/>
  <path d="M200,224.00005H55.99219a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8L152,32l56,56v128A8,8,0,0,1,200,224.00005Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polyline points="152 32 152 88 208.008 88" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M151.99414,95.9971a7.9954,7.9954,0,0,1-8-8v-64h-88a16.01583,16.01583,0,0,0-16,16v176a16.01582,16.01582,0,0,0,16,16h144a16.01581,16.01581,0,0,0,16-16v-120Z"/>
  <polygon points="159.994 28.685 159.994 79.997 211.307 79.997 159.994 28.685"/>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M200,224.00005H55.99219a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8L152,32l56,56v128A8,8,0,0,1,200,224.00005Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <polyline points="152 32 152 88 208.008 88" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M200,224.00005H55.99219a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8L152,32l56,56v128A8,8,0,0,1,200,224.00005Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <polyline points="152 32 152 88 208.008 88" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M200,224.00005H55.99219a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8L152,32l56,56v128A8,8,0,0,1,200,224.00005Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polyline points="152 32 152 88 208.008 88" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const File = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

File.displayName = "File";

export default File;
