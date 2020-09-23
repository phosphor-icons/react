/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M79.50573,139.97912A56.002,56.002,0,1,1,73.91167,182.473,55.82153,55.82153,0,0,1,79.50573,139.97912Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <line x1="79.50573" y1="139.97912" x2="141.85014" y2="31.98842" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M79.50573,139.97912A56.002,56.002,0,1,1,73.91167,182.473,55.82153,55.82153,0,0,1,79.50573,139.97912Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="79.50573" y1="139.97912" x2="141.85014" y2="31.98842" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M189.81543,151.415a63.99579,63.99579,0,0,0-78.37988-45.25513c-1.30127.34863-2.57886.74927-3.845,1.17359L148.7793,35.98828a8.00032,8.00032,0,0,0-13.85743-7.99951L72.57715,135.97925a64.04261,64.04261,0,0,0,55.31933,96.0271,64.36221,64.36221,0,0,0,16.667-2.208,63.999,63.999,0,0,0,45.25195-78.3833Zm-20.25,40.564a48.00237,48.00237,0,1,1,4.79492-36.42285A47.67844,47.67844,0,0,1,169.56543,191.979Z"/>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M79.50573,139.97912A56.002,56.002,0,1,1,73.91167,182.473,55.82153,55.82153,0,0,1,79.50573,139.97912Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <line x1="79.50573" y1="139.97912" x2="141.85014" y2="31.98842" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M79.50573,139.97912A56.002,56.002,0,1,1,73.91167,182.473,55.82153,55.82153,0,0,1,79.50573,139.97912Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <line x1="79.50573" y1="139.97912" x2="141.85014" y2="31.98842" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <path d="M79.50573,139.97912A56.002,56.002,0,1,1,73.91167,182.473,55.82153,55.82153,0,0,1,79.50573,139.97912Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="79.50573" y1="139.97912" x2="141.85014" y2="31.98842" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const NumberSix = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

NumberSix.displayName = "NumberSix";

export default NumberSix;
