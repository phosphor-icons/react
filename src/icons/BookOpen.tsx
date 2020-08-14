/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<g>
  <rect width="256" height="256" fill="none"/>
  <path d="M232,192a8,8,0,0,1-8,8H160a32,32,0,0,0-32,32V88a32,32,0,0,1,32-32h64a8,8,0,0,1,8,8Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <path d="M24,192a8,8,0,0,0,8,8H96a32,32,0,0,1,32,32V88A32,32,0,0,0,96,56H32a8,8,0,0,0-8,8Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</g>)
    case "duotone":
      return (<g>
  <rect width="256" height="256" fill="none"/>
  <path d="M232,192a8,8,0,0,1-8,8H160a32,32,0,0,0-32,32V88a32,32,0,0,1,32-32h64a8,8,0,0,1,8,8Z" opacity="0.2"/>
  <path d="M24,192a8,8,0,0,0,8,8H96a32,32,0,0,1,32,32V88A32,32,0,0,0,96,56H32a8,8,0,0,0-8,8Z" opacity="0.2"/>
  <path d="M232,192a8,8,0,0,1-8,8H160a32,32,0,0,0-32,32V88a32,32,0,0,1,32-32h64a8,8,0,0,1,8,8Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M24,192a8,8,0,0,0,8,8H96a32,32,0,0,1,32,32V88A32,32,0,0,0,96,56H32a8,8,0,0,0-8,8Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</g>)
    case "fill":
      return (<g>
  <rect width="256" height="256" fill="none"/>
  <path d="M224,48H160a39.96366,39.96366,0,0,0-32,16.02783A39.96366,39.96366,0,0,0,96,48H32A16.01833,16.01833,0,0,0,16,64V192a16.01833,16.01833,0,0,0,16,16H96a24.0275,24.0275,0,0,1,24,24,8,8,0,0,0,16,0,24.0275,24.0275,0,0,1,24-24h64a16.01833,16.01833,0,0,0,16-16V64A16.01833,16.01833,0,0,0,224,48ZM136,192a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"/>

</g>)
    case "light":
      return (<g>
  <rect width="256" height="256" fill="none"/>
  <path d="M232,192a8,8,0,0,1-8,8H160a32,32,0,0,0-32,32V88a32,32,0,0,1,32-32h64a8,8,0,0,1,8,8Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <path d="M24,192a8,8,0,0,0,8,8H96a32,32,0,0,1,32,32V88A32,32,0,0,0,96,56H32a8,8,0,0,0-8,8Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</g>)
    case "thin":
      return (<g>
  <rect width="256" height="256" fill="none"/>
  <path d="M232,192a8,8,0,0,1-8,8H160a32,32,0,0,0-32,32V88a32,32,0,0,1,32-32h64a8,8,0,0,1,8,8Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <path d="M24,192a8,8,0,0,0,8,8H96a32,32,0,0,1,32,32V88A32,32,0,0,0,96,56H32a8,8,0,0,0-8,8Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</g>)
    case "regular":
      return (<g>
  <rect width="256" height="256" fill="none"/>
  <path d="M232,192a8,8,0,0,1-8,8H160a32,32,0,0,0-32,32V88a32,32,0,0,1,32-32h64a8,8,0,0,1,8,8Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M24,192a8,8,0,0,0,8,8H96a32,32,0,0,1,32,32V88A32,32,0,0,0,96,56H32a8,8,0,0,0-8,8Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</g>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const BookOpen = forwardRef<SVGSVGElement, IconProps>(
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

BookOpen.displayName = "BookOpen";

export default BookOpen;
