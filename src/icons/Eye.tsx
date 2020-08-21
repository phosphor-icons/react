/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M128,55.99219C48,55.99219,16,128,16,128s32,71.99219,112,71.99219S240,128,240,128,208,55.99219,128,55.99219Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <circle cx="128" cy="128.00061" r="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <rect x="-0.00586" width="256" height="256" fill="none"/>
  <path d="M127.99414,55.99231c-80,0-112,72.00781-112,72.00781s32,71.99219,112,71.99219,112-71.99219,112-71.99219S207.99414,55.99231,127.99414,55.99231Zm0,112.0083a40,40,0,1,1,40-40A40.0001,40.0001,0,0,1,127.99414,168.00061Z" opacity="0.2"/>
  <path d="M127.99414,55.99219c-80,0-112,72.00781-112,72.00781s32,71.99219,112,71.99219,112-71.99219,112-71.99219S207.99414,55.99219,127.99414,55.99219Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="127.99414" cy="128.00061" r="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M247.31055,124.75061c-.35157-.79-8.81934-19.57617-27.65332-38.41113C194.57324,61.25256,162.87793,47.99182,128,47.99182S61.42676,61.25256,36.34277,86.33948c-18.834,18.835-27.30175,37.62109-27.65332,38.41113a8.00282,8.00282,0,0,0,0,6.49805c.35157.791,8.82032,19.57226,27.6543,38.40429C61.42773,194.734,93.12207,207.99182,128,207.99182S194.57227,194.734,219.65625,169.653c18.834-18.832,27.30273-37.61328,27.6543-38.40429A8.00282,8.00282,0,0,0,247.31055,124.75061ZM128,92.00061a36,36,0,1,1-36,36A36.04061,36.04061,0,0,1,128,92.00061Z"/>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M128,55.99219C48,55.99219,16,128,16,128s32,71.99219,112,71.99219S240,128,240,128,208,55.99219,128,55.99219Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <circle cx="128" cy="128.00061" r="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M128,55.99219C48,55.99219,16,128,16,128s32,71.99219,112,71.99219S240,128,240,128,208,55.99219,128,55.99219Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <circle cx="128" cy="128.00061" r="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M128,55.99219C48,55.99219,16,128,16,128s32,71.99219,112,71.99219S240,128,240,128,208,55.99219,128,55.99219Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="128" cy="128.00061" r="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Eye = forwardRef<SVGSVGElement, IconProps>(
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

Eye.displayName = "Eye";

export default Eye;
