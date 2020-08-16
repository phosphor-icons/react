/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <g>
    <rect width="256.00098" height="256.00098" fill="none"/>
    <g>
      <circle cx="136.00098" cy="120" r="79.98664" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
      <line x1="79.43455" y1="176.56594" x2="40" y2="216.00049" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
    </g>
  </g>

</>)
    case "duotone":
      return (<>
  <g>
    <rect width="256.00098" height="256.00098" fill="none"/>
    <g>
      <circle cx="136.00098" cy="120" r="79.98664" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      <circle cx="136.00098" cy="120" r="79.98664" opacity="0.2"/>
      <line x1="79.43455" y1="176.56594" x2="40" y2="216.00049" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    </g>
  </g>

</>)
    case "fill":
      return (<>
  <g>
    <rect width="256.00098" height="256.00098" fill="none"/>
    <path d="M28.69238,227.3125a15.99417,15.99417,0,0,0,22.625,0l35.11426-35.12793c1.89746,1.30469,3.5459,2.84766,5.57324,4.01856A87.98994,87.98994,0,1,0,59.80176,76.00781C42.33691,106.26855,45.21,142.55469,63.72852,169.6377L28.69238,204.6875A15.99417,15.99417,0,0,0,28.69238,227.3125ZM135.92578,168a47.99642,47.99642,0,1,1,41.63281-24.00684A47.91421,47.91421,0,0,1,135.92578,168Z"/>
  </g>

</>)
    case "light":
      return (<>
  <g>
    <rect width="256.00098" height="256.00098" fill="none"/>
    <g>
      <circle cx="136.00098" cy="120" r="79.98664" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
      <line x1="79.43455" y1="176.56594" x2="40" y2="216.00049" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
    </g>
  </g>

</>)
    case "thin":
      return (<>
  <g>
    <rect width="256.00098" height="256.00098" fill="none"/>
    <g>
      <circle cx="136.00098" cy="120" r="79.98664" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
      <line x1="79.43455" y1="176.56594" x2="40" y2="216.00049" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
    </g>
  </g>

</>)
    case "regular":
      return (<>
  <g>
    <rect width="256.00098" height="256.00098" fill="none"/>
    <g>
      <circle cx="136.00098" cy="120" r="79.98664" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      <line x1="79.43455" y1="176.56594" x2="40" y2="216.00049" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
    </g>
  </g>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const MagnifyingGlassFacingRight = forwardRef<SVGSVGElement, IconProps>(
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

MagnifyingGlassFacingRight.displayName = "MagnifyingGlassFacingRight";

export default MagnifyingGlassFacingRight;
