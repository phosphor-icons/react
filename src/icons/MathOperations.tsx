/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <line x1="40" y1="184" x2="104" y2="184" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="72" y1="152" x2="72" y2="216" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="104" y1="72" x2="40" y2="72" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="216" y1="168.0664" x2="152" y2="168.0664" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="216" y1="199.9336" x2="152" y2="199.9336" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="208" y1="48" x2="160" y2="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="208" y1="96" x2="160" y2="48" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <line x1="40" y1="184" x2="104" y2="184" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="72" y1="152" x2="72" y2="216" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="104" y1="72" x2="40" y2="72" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="216" y1="168.0664" x2="152" y2="168.0664" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="216" y1="199.9336" x2="152" y2="199.9336" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="208" y1="48" x2="160" y2="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="208" y1="96" x2="160" y2="48" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M104,176H80V152a8,8,0,0,0-16,0v24H40a8,8,0,0,0,0,16H64v24a8,8,0,0,0,16,0V192h24a8,8,0,0,0,0-16Z"/>
  <path d="M104,64H40a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Z"/>
  <path d="M152,176.06641h64a8,8,0,0,0,0-16H152a8,8,0,0,0,0,16Z"/>
  <path d="M216,191.93359H152a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Z"/>
  <path d="M154.34326,101.65674a7.99945,7.99945,0,0,0,11.31348,0L184,83.31348l18.34326,18.34326a7.99984,7.99984,0,1,0,11.31348-11.31348L195.3136,72l18.34314-18.34326a7.99984,7.99984,0,0,0-11.31348-11.31348L184,60.68652,165.65674,42.34326a7.99984,7.99984,0,0,0-11.31348,11.31348L172.6864,72,154.34326,90.34326A7.99915,7.99915,0,0,0,154.34326,101.65674Z"/>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <line x1="40" y1="184" x2="104" y2="184" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="72" y1="152" x2="72" y2="216" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="104" y1="72" x2="40" y2="72" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="216" y1="168.0664" x2="152" y2="168.0664" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="216" y1="199.9336" x2="152" y2="199.9336" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="208" y1="48" x2="160" y2="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="208" y1="96" x2="160" y2="48" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <line x1="40" y1="184" x2="104" y2="184" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="72" y1="152" x2="72" y2="216" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="104" y1="72" x2="40" y2="72" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="216" y1="168.0664" x2="152" y2="168.0664" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="216" y1="199.9336" x2="152" y2="199.9336" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="208" y1="48" x2="160" y2="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="208" y1="96" x2="160" y2="48" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <line x1="40" y1="184" x2="104" y2="184" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="72" y1="152" x2="72" y2="216" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="104" y1="72" x2="40" y2="72" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="216" y1="168.0664" x2="152" y2="168.0664" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="216" y1="199.9336" x2="152" y2="199.9336" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="208" y1="48" x2="160" y2="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="208" y1="96" x2="160" y2="48" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const MathOperations = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

MathOperations.displayName = "MathOperations";

export default MathOperations;
