/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <line x1="95.92521" y1="232.01233" x2="159.92521" y2="232.01233" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M48,112a80,80,0,0,1,160,0l-.68782,80.081a8,8,0,0,1-7.99971,7.93129H56.66982a8,8,0,0,1-7.99972-7.93306Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <path d="M48,112a80,80,0,0,1,160,0l-.68782,80.081a8,8,0,0,1-7.99971,7.93129H56.66982a8,8,0,0,1-7.99972-7.93306Z" opacity="0.2"/>
  <line x1="95.92521" y1="232.01233" x2="159.92521" y2="232.01233" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M48,112a80,80,0,0,1,160,0l-.68782,80.081a8,8,0,0,1-7.99971,7.93129H56.66982a8,8,0,0,1-7.99972-7.93306Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <g>
    <path d="M159.9248,224.012h-64a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Z"/>
    <path d="M128,24.00024a88.09957,88.09957,0,0,0-88,88v.06739l.66992,80.0791a16.04734,16.04734,0,0,0,16,15.86523H199.3125a16.048,16.048,0,0,0,16-15.8623L216,112.00024A88.09957,88.09957,0,0,0,128,24.00024Z"/>
  </g>

</>)
    case "light":
      return (<>
  <line x1="95.92521" y1="232.01233" x2="159.92521" y2="232.01233" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M48,112a80,80,0,0,1,160,0l-.68782,80.081a8,8,0,0,1-7.99971,7.93129H56.66982a8,8,0,0,1-7.99972-7.93306Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <line x1="95.92521" y1="232.01233" x2="159.92521" y2="232.01233" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M48,112a80,80,0,0,1,160,0l-.68782,80.081a8,8,0,0,1-7.99971,7.93129H56.66982a8,8,0,0,1-7.99972-7.93306Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <line x1="95.92521" y1="232.01233" x2="159.92521" y2="232.01233" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M48,112a80,80,0,0,1,160,0l-.68782,80.081a8,8,0,0,1-7.99971,7.93129H56.66982a8,8,0,0,1-7.99972-7.93306Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const BellSimple = forwardRef<SVGSVGElement, IconProps>(
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

BellSimple.displayName = "BellSimple";

export default BellSimple;
