/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <line x1="42" y1="120" x2="214" y2="120" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M66,32H190a24,24,0,0,1,24,24V192a0,0,0,0,1,0,0H42a0,0,0,0,1,0,0V56A24,24,0,0,1,66,32Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <circle cx="82" cy="156" r="16"/>
  <circle cx="174" cy="156" r="16"/>
  <path d="M214,192v24a8,8,0,0,1-8,8H182a8,8,0,0,1-8-8V192" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M82,192v24a8,8,0,0,1-8,8H50a8,8,0,0,1-8-8V192" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="80" y1="64" x2="176" y2="64" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <path d="M66,32H190a24,24,0,0,1,24,24v64a0,0,0,0,1,0,0H42a0,0,0,0,1,0,0V56A24,24,0,0,1,66,32Z" opacity="0.2"/>
  <line x1="42" y1="120" x2="214" y2="120" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M66,32H190a24,24,0,0,1,24,24V192a0,0,0,0,1,0,0H42a0,0,0,0,1,0,0V56A24,24,0,0,1,66,32Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="82" cy="156" r="12"/>
  <circle cx="174" cy="156" r="12"/>
  <path d="M214,192v24a8,8,0,0,1-8,8H182a8,8,0,0,1-8-8V192" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M82,192v24a8,8,0,0,1-8,8H50a8,8,0,0,1-8-8V192" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="80" y1="64" x2="176" y2="64" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <path d="M222,112V56a32.03667,32.03667,0,0,0-32-32H66A32.03667,32.03667,0,0,0,34,56v56ZM80,56h96a8,8,0,0,1,0,16H80a8,8,0,0,1,0-16Z"/>
  <path d="M34,128v88a16.01833,16.01833,0,0,0,16,16H74a16.01833,16.01833,0,0,0,16-16V200h76v16a16.01833,16.01833,0,0,0,16,16h24a16.01833,16.01833,0,0,0,16-16V128Zm48,40a12,12,0,1,1,12-12A12,12,0,0,1,82,168Zm92,0a12,12,0,1,1,12-12A12,12,0,0,1,174,168Z"/>

</>)
    case "light":
      return (<>
  <line x1="42" y1="120" x2="214" y2="120" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M66,32H190a24,24,0,0,1,24,24V192a0,0,0,0,1,0,0H42a0,0,0,0,1,0,0V56A24,24,0,0,1,66,32Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <circle cx="82" cy="156" r="9"/>
  <circle cx="174" cy="156" r="9"/>
  <path d="M214,192v24a8,8,0,0,1-8,8H182a8,8,0,0,1-8-8V192" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M82,192v24a8,8,0,0,1-8,8H50a8,8,0,0,1-8-8V192" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="80" y1="64" x2="176" y2="64" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <line x1="42" y1="120" x2="214" y2="120" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M66,32H190a24,24,0,0,1,24,24V192a0,0,0,0,1,0,0H42a0,0,0,0,1,0,0V56A24,24,0,0,1,66,32Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <circle cx="82" cy="156" r="6"/>
  <circle cx="174" cy="156" r="6"/>
  <path d="M214,192v24a8,8,0,0,1-8,8H182a8,8,0,0,1-8-8V192" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M82,192v24a8,8,0,0,1-8,8H50a8,8,0,0,1-8-8V192" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="80" y1="64" x2="176" y2="64" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <line x1="42" y1="120" x2="214" y2="120" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M66,32H190a24,24,0,0,1,24,24V192a0,0,0,0,1,0,0H42a0,0,0,0,1,0,0V56A24,24,0,0,1,66,32Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="82" cy="156" r="12"/>
  <circle cx="174" cy="156" r="12"/>
  <path d="M214,192v24a8,8,0,0,1-8,8H182a8,8,0,0,1-8-8V192" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M82,192v24a8,8,0,0,1-8,8H50a8,8,0,0,1-8-8V192" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="80" y1="64" x2="176" y2="64" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Bus = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Bus.displayName = "Bus";

export default Bus;
