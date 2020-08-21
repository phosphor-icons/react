/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <circle cx="52" cy="204" r="18"/>

</>)
    case "duotone":
      return (<>
  <path d="M48,200V56.32988a8.09741,8.09741,0,0,1,8.3548-8.1155A160.01519,160.01519,0,0,1,207.78562,199.6452,8.09741,8.09741,0,0,1,199.67012,208H56A8,8,0,0,1,48,200Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <path d="M199.66992,215.99963H56a16.01833,16.01833,0,0,1-16-16V56.32971a16.26655,16.26655,0,0,1,5.05615-11.7373,15.86032,15.86032,0,0,1,11.70947-4.36719A168.01354,168.01354,0,0,1,215.7749,199.234a15.903,15.903,0,0,1-4.36719,11.709A16.26536,16.26536,0,0,1,199.66992,215.99963ZM56.05908,56.20959A.218.218,0,0,0,56,56.32971V199.99963l.00049.01075,143.66943-.01075a.21241.21241,0,0,0,.12012-.05957A152.016,152.016,0,0,0,56.05908,56.20959Z"/>

</>)
    case "light":
      return (<>
  <circle cx="52" cy="204" r="9"/>

</>)
    case "thin":
      return (<>
  <circle cx="52" cy="204" r="6"/>

</>)
    case "regular":
      return (<>
  <circle cx="52" cy="204" r="12"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const WifiNoneAlt = forwardRef<SVGSVGElement, IconProps>(
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

WifiNoneAlt.displayName = "WifiNoneAlt";

export default WifiNoneAlt;
