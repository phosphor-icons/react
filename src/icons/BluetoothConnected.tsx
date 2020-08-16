/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polygon points="120 32.003 184 80.003 120 128.003 120 32.003" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <polygon points="120 128.003 184 176.003 120 224.003 120 128.003" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="56" y1="80.00256" x2="120" y2="128.00256" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="56" y1="176.00256" x2="120" y2="128.00256" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <circle cx="196" cy="128.00647" r="16"/>
  <circle cx="52" cy="128.00647" r="16"/>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polygon points="120 32.003 184 80.003 120 128.003 120 32.003" opacity="0.2"/>
  <polygon points="120 128.003 184 176.003 120 224.003 120 128.003" opacity="0.2"/>
  <polygon points="120 32.003 184 80.003 120 128.003 120 32.003" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polygon points="120 128.003 184 176.003 120 224.003 120 128.003" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="56" y1="80.00256" x2="120" y2="128.00256" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="56" y1="176.00256" x2="120" y2="128.00256" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="196" cy="128.00647" r="12"/>
  <circle cx="52" cy="128.00647" r="12"/>

</>)
    case "fill":
      return (<>
  <rect x="-0.00098" width="256" height="256" fill="none"/>
  <polygon points="119.999 32.003 183.999 80.003 119.999 128.003 119.999 32.003" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polygon points="119.999 128.003 183.999 176.003 119.999 224.003 119.999 128.003" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="55.99902" y1="80.00256" x2="119.99902" y2="128.00256" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="55.99902" y1="176.00256" x2="119.99902" y2="128.00256" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="195.99902" cy="128.00647" r="12"/>
  <circle cx="51.99902" cy="128.00647" r="12"/>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polygon points="120 32.003 184 80.003 120 128.003 120 32.003" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <polygon points="120 128.003 184 176.003 120 224.003 120 128.003" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="56" y1="80.00256" x2="120" y2="128.00256" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="56" y1="176.00256" x2="120" y2="128.00256" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <circle cx="196" cy="128.00647" r="9"/>
  <circle cx="52" cy="128.00647" r="9"/>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polygon points="120 32.003 184 80.003 120 128.003 120 32.003" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <polygon points="120 128.003 184 176.003 120 224.003 120 128.003" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="56" y1="80.00256" x2="120" y2="128.00256" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="56" y1="176.00256" x2="120" y2="128.00256" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <circle cx="196" cy="128.00647" r="6"/>
  <circle cx="52" cy="128.00647" r="6"/>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <polygon points="120 32.003 184 80.003 120 128.003 120 32.003" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polygon points="120 128.003 184 176.003 120 224.003 120 128.003" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="56" y1="80.00256" x2="120" y2="128.00256" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="56" y1="176.00256" x2="120" y2="128.00256" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="196" cy="128.00647" r="12"/>
  <circle cx="52" cy="128.00647" r="12"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const BluetoothConnected = forwardRef<SVGSVGElement, IconProps>(
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

BluetoothConnected.displayName = "BluetoothConnected";

export default BluetoothConnected;
