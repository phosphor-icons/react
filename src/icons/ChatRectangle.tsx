/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<g>
  
  <path d="M77.98509,201.34409,45.14832,228.94793a8,8,0,0,1-13.14783-6.12372V64.00049a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8v128a8,8,0,0,1-8,8H81.67142Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</g>)
    case "duotone":
      return (<g>
  
  <path d="M77.98509,201.34409,45.14832,228.94793a8,8,0,0,1-13.14783-6.12372V64.00049a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8v128a8,8,0,0,1-8,8H81.67142Z" opacity="0.2"/>
  <path d="M77.98509,201.34409,45.14832,228.94793a8,8,0,0,1-13.14783-6.12372V64.00049a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8v128a8,8,0,0,1-8,8H81.67142Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</g>)
    case "fill":
      return (<g>
  
  <path d="M216.002,48.00293h-176a16.02085,16.02085,0,0,0-16,16V222.82324a15.8614,15.8614,0,0,0,9.25,14.50781,16.11258,16.11258,0,0,0,6.79688,1.51563,15.86968,15.86968,0,0,0,10.25-3.77344l31.75-26.69531,133.95312-.375a16.02084,16.02084,0,0,0,16-16v-128A16.02084,16.02084,0,0,0,216.002,48.00293Z"/>

</g>)
    case "light":
      return (<g>
  
  <path d="M77.98509,201.34409,45.14832,228.94793a8,8,0,0,1-13.14783-6.12372V64.00049a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8v128a8,8,0,0,1-8,8H81.67142Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</g>)
    case "thin":
      return (<g>
  
  <path d="M77.98509,201.34409,45.14832,228.94793a8,8,0,0,1-13.14783-6.12372V64.00049a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8v128a8,8,0,0,1-8,8H81.67142Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</g>)
    case "regular":
      return (<g>
  
  <path d="M77.98509,201.34409,45.14832,228.94793a8,8,0,0,1-13.14783-6.12372V64.00049a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8v128a8,8,0,0,1-8,8H81.67142Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</g>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const ChatRectangle = forwardRef<SVGSVGElement, IconProps>(
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
        viewBox="0 0 256 256"
        fill="none"
        stroke="none"
        transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined}
        {...contextRest}
        {...rest}
      >
        {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
      </svg>
    );
  }
);

ChatRectangle.displayName = "ChatRectangle";

export default ChatRectangle;
