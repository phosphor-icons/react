/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <circle cx="127.99707" cy="127.99121" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <circle cx="127.99707" cy="127.99121" r="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="167.99707" y1="87.99121" x2="167.99707" y2="127.99121" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M215.98,166.45547a44.098,44.098,0,0,1-11.983,1.53574c-25.71429,0-36-17.90861-36-40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <circle cx="128" cy="127.99121" r="96" opacity="0.2"/>
  <circle cx="128" cy="127.99121" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="128" cy="127.99121" r="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="168" y1="87.99121" x2="168" y2="127.99121" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M215.983,166.45547A44.098,44.098,0,0,1,204,167.99121c-25.71429,0-36-17.90861-36-40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <g>
    <path d="M204,175.99121c-18.28711,0-28.52441-8.00488-33.8916-14.7207a39.57375,39.57375,0,0,1-3.37793-4.96948A48.00646,48.00646,0,1,1,160,92.2522v-4.261a8,8,0,0,1,16,0v40c0,14.59863,4.85742,32,28,32,22.3457,0,27.64258-16.22314,27.98047-30.4823.00732-.50574.01953-1.01037.01953-1.5177a104.02588,104.02588,0,1,0-10.21875,44.9364A49.2519,49.2519,0,0,1,204,175.99121Z"/>
    <circle cx="128" cy="127.99121" r="32"/>
  </g>

</>)
    case "light":
      return (<>
  <circle cx="127.99805" cy="127.99121" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <circle cx="127.99805" cy="127.99121" r="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="167.99805" y1="87.99121" x2="167.99805" y2="127.99121" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M215.981,166.45547a44.09784,44.09784,0,0,1-11.983,1.53574c-25.71429,0-36-17.90861-36-40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <circle cx="127.99902" cy="127.99121" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <circle cx="127.99902" cy="127.99121" r="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="167.99902" y1="87.99121" x2="167.99902" y2="127.99121" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M215.982,166.45547a44.09791,44.09791,0,0,1-11.983,1.53574c-25.71428,0-36-17.90861-36-40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <circle cx="128" cy="127.99121" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="128" cy="127.99121" r="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="168" y1="87.99121" x2="168" y2="127.99121" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M215.983,166.45547A44.098,44.098,0,0,1,204,167.99121c-25.71429,0-36-17.90861-36-40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const At = forwardRef<SVGSVGElement, IconProps>(
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

At.displayName = "At";

export default At;
