/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <path d="M208.83966,216H47.16034a8,8,0,0,1-7.95107-7.11655l-14.22222-128A8,8,0,0,1,32.93812,72H223.06188a8,8,0,0,1,7.95107,8.88345l-14.22222,128A8,8,0,0,1,208.83966,216Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M88,72a40,40,0,0,1,80,0" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <path d="M208.83966,216H47.16034a8,8,0,0,1-7.95107-7.11655l-14.22222-128A8,8,0,0,1,32.93812,72H223.06188a8,8,0,0,1,7.95107,8.88345l-14.22222,128A8,8,0,0,1,208.83966,216Z" opacity="0.2"/>
  <path d="M208.83966,216H47.16034a8,8,0,0,1-7.95107-7.11655l-14.22222-128A8,8,0,0,1,32.93812,72H223.06188a8,8,0,0,1,7.95107,8.88345l-14.22222,128A8,8,0,0,1,208.83966,216Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M88,72a40,40,0,0,1,80,0" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <path d="M234.9834,69.3291A16.01892,16.01892,0,0,0,223.06152,64H175.3208a47.99073,47.99073,0,0,0-94.6416,0H32.93848A16.00031,16.00031,0,0,0,17.03613,81.7666L31.25781,209.76709A15.98372,15.98372,0,0,0,47.16016,224H208.83984a15.98375,15.98375,0,0,0,15.90235-14.2334l14.22168-128A16.01871,16.01871,0,0,0,234.9834,69.3291ZM128,40a32.05773,32.05773,0,0,1,30.9873,24H97.0127A32.05773,32.05773,0,0,1,128,40Z"/>

</>)
    case "light":
      return (<>
  <path d="M208.83966,216H47.16034a8,8,0,0,1-7.95107-7.11655l-14.22222-128A8,8,0,0,1,32.93812,72H223.06188a8,8,0,0,1,7.95107,8.88345l-14.22222,128A8,8,0,0,1,208.83966,216Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M88,72a40,40,0,0,1,80,0" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <path d="M208.83966,216H47.16034a8,8,0,0,1-7.95107-7.11655l-14.22222-128A8,8,0,0,1,32.93812,72H223.06188a8,8,0,0,1,7.95107,8.88345l-14.22222,128A8,8,0,0,1,208.83966,216Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M88,72a40,40,0,0,1,80,0" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <path d="M208.83966,216H47.16034a8,8,0,0,1-7.95107-7.11655l-14.22222-128A8,8,0,0,1,32.93812,72H223.06188a8,8,0,0,1,7.95107,8.88345l-14.22222,128A8,8,0,0,1,208.83966,216Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M88,72a40,40,0,0,1,80,0" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Tote = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Tote.displayName = "Tote";

export default Tote;
