/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <circle cx="60" cy="76" r="28" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <circle cx="60" cy="180" r="28" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="136" y1="128" x2="83.10669" y2="164.19016" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="232" y1="62.31579" x2="164.33455" y2="108.6132" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="232" y1="193.68421" x2="83.10611" y2="91.80944" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <circle cx="60" cy="76" r="28" opacity="0.2"/>
  <circle cx="60" cy="180" r="28" opacity="0.2"/>
  <circle cx="60" cy="76" r="28" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="60" cy="180" r="28" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="136" y1="128" x2="83.10669" y2="164.19016" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="232" y1="62.31579" x2="164.33455" y2="108.6132" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="232" y1="193.68421" x2="83.10611" y2="91.80944" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <path d="M164.3418,116.61426a7.96217,7.96217,0,0,0,4.51025-1.39844L236.51758,68.918a8.00013,8.00013,0,0,0-9.03516-13.20508l-67.66553,46.29785a8.00081,8.00081,0,0,0,4.52491,14.60352Z"/>
  <path d="M236.51758,187.082,93.4939,89.22363a36.03965,36.03965,0,1,0-9.05054,13.19458l37.389,25.582-37.38867,25.582a35.84552,35.84552,0,1,0,9.05041,13.19458l42.50562-29.08326,91.48266,62.59351a8.00013,8.00013,0,1,0,9.03516-13.20508Z"/>

</>)
    case "light":
      return (<>
  <circle cx="60" cy="76" r="28" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <circle cx="60" cy="180" r="28" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="136" y1="128" x2="83.10669" y2="164.19016" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="232" y1="62.31579" x2="164.33455" y2="108.6132" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="232" y1="193.68421" x2="83.10611" y2="91.80944" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <circle cx="60" cy="76" r="28" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <circle cx="60" cy="180" r="28" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="136" y1="128" x2="83.10669" y2="164.19016" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="232" y1="62.31579" x2="164.33455" y2="108.6132" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="232" y1="193.68421" x2="83.10611" y2="91.80944" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <circle cx="60" cy="76" r="28" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="60" cy="180" r="28" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="136" y1="128" x2="83.10669" y2="164.19016" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="232" y1="62.31579" x2="164.33455" y2="108.6132" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="232" y1="193.68421" x2="83.10611" y2="91.80944" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Scissors = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Scissors.displayName = "Scissors";

export default Scissors;
