/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (
  weight: string,
  color: string
): React.ReactNode | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <line
            x1="120"
            y1="88.00002"
            x2="88"
            y2="224.00002"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M61.54451,156.55327A80.00347,80.00347,0,1,1,208,112c0,44.18278-32,72-64,72s-41.63152-21.06651-41.63152-21.06651"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
        </>
      );
    case "duotone":
      return (
        <>
          <line
            x1="120"
            y1="88.00002"
            x2="88"
            y2="224.00002"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M61.54451,156.55327A80.00347,80.00347,0,1,1,208,112c0,44.18278-32,72-64,72s-41.63152-21.06651-41.63152-21.06651"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
        </>
      );
    case "fill":
      return (
        <>
          <path d="M232,128a104.02405,104.02405,0,0,1-132.74316,99.957l9.8164-39.26513A50.31473,50.31473,0,0,0,136,196c35.29,0,64-30.50488,64-68A72,72,0,1,0,61.2373,155.00393,8.00011,8.00011,0,0,0,76.06836,149,56.00735,56.00735,0,1,1,184,128c0,28.67285-21.53271,52-48,52-10.49072,0-17.78076-3.66064-22.75049-8.01269l14.51172-58.04688a8.00012,8.00012,0,0,0-15.52246-3.88086L84.17822,222.30178A103.99416,103.99416,0,1,1,232,128Z" />
        </>
      );
    case "light":
      return (
        <>
          <line
            x1="120"
            y1="88.00002"
            x2="88"
            y2="224.00002"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M61.54451,156.55327A80.00347,80.00347,0,1,1,208,112c0,44.18278-32,72-64,72s-41.63152-21.06651-41.63152-21.06651"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
        </>
      );
    case "thin":
      return (
        <>
          <line
            x1="120"
            y1="88.00002"
            x2="88"
            y2="224.00002"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M61.54451,156.55327A80.00347,80.00347,0,1,1,208,112c0,44.18278-32,72-64,72s-41.63152-21.06651-41.63152-21.06651"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
        </>
      );
    case "regular":
      return (
        <>
          <line
            x1="120"
            y1="88.00002"
            x2="88"
            y2="224.00002"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M61.54451,156.55327A80.00347,80.00347,0,1,1,208,112c0,44.18278-32,72-64,72s-41.63152-21.06651-41.63152-21.06651"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
        </>
      );
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const PinterestLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { color, size, weight, mirrored, children, ...restProps } = props;
  const {
    color: contextColor,
    size: contextSize,
    weight: contextWeight,
    mirrored: contextMirrored,
    ...restContext
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
      {...restContext}
      {...restProps}
    >
      {children}
      <rect width="256" height="256" fill="none" />
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>
  );
});

PinterestLogo.displayName = "PinterestLogo";

export default PinterestLogo;
