/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256.00098" height="256.00098" transform="translate(256.00098 256.00098) rotate(180)" fill="none"/>
  <circle cx="120" cy="120" r="79.98664" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="176.56643" y1="176.56594" x2="216.00098" y2="216.00049" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="87.97656" y1="119.98767" x2="151.97656" y2="119.98767" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="119.97656" y1="87.98767" x2="119.97656" y2="151.98767" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <rect width="256.00098" height="256.00098" transform="translate(256.00098 256.00098) rotate(180)" fill="none"/>
  <circle cx="120" cy="120" r="79.98664" opacity="0.2"/>
  <circle cx="120" cy="120" r="79.98664" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="176.56643" y1="176.56594" x2="216.00098" y2="216.00049" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="87.96094" y1="119.98767" x2="151.96094" y2="119.98767" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="119.96094" y1="87.98767" x2="119.96094" y2="151.98767" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <rect width="256.00098" height="256.00098" transform="translate(256.00098 256.00098) rotate(180)" fill="none"/>
  <path d="M227.30859,204.68787l-35.03613-35.05078c18.51856-27.082,21.3916-63.36915,3.92676-93.62891a87.95128,87.95128,0,1,0-32.20313,120.19531c2.02735-1.17187,3.67578-2.71484,5.57325-4.01953l35.11425,35.12891a15.99829,15.99829,0,0,0,22.625-22.625ZM151.9668,127.98865h-24v24a8,8,0,0,1-16,0v-24h-24a8,8,0,0,1,0-16h24v-24a8,8,0,0,1,16,0v24h24a8,8,0,1,1,0,16Z"/>

</>)
    case "light":
      return (<>
  <rect width="256.00098" height="256.00098" transform="translate(256.00098 256.00098) rotate(180)" fill="none"/>
  <circle cx="120" cy="120" r="79.98664" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="176.56643" y1="176.56594" x2="216.00098" y2="216.00049" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="87.98437" y1="119.98767" x2="151.98437" y2="119.98767" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="119.98437" y1="87.98767" x2="119.98437" y2="151.98767" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <rect width="256.00098" height="256.00098" transform="translate(256.00098 256.00098) rotate(180)" fill="none"/>
  <circle cx="120" cy="120" r="79.98664" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="176.56643" y1="176.56594" x2="216.00098" y2="216.00049" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="87.99219" y1="119.98767" x2="151.99219" y2="119.98767" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="119.99219" y1="87.98767" x2="119.99219" y2="151.98767" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <rect width="256.00098" height="256.00098" transform="translate(256.00098 256.00098) rotate(180)" fill="none"/>
  <circle cx="120" cy="120" r="79.98664" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="176.56643" y1="176.56594" x2="216.00098" y2="216.00049" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="88" y1="119.98767" x2="152" y2="119.98767" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="120" y1="87.98767" x2="120" y2="151.98767" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const MagnifyingGlassPlus = forwardRef<SVGSVGElement, IconProps>(
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

MagnifyingGlassPlus.displayName = "MagnifyingGlassPlus";

export default MagnifyingGlassPlus;
