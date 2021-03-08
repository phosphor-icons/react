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
          <path
            d="M146.49075,90.49075,200,144s-72,96-176,72L197.85786,37.85786a20,20,0,1,1,28.28427,28.28427l-50.3665,53.64542"
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
          <g opacity="0.2">
            <path d="M146.49075,90.49075l51.36711-52.63289a20,20,0,1,1,28.28427,28.28427l-50.3665,53.64542Z" />
          </g>
          <path
            d="M146.49075,90.49075,200,144s-72,96-176,72L197.85786,37.85786a20,20,0,1,1,28.28427,28.28427l-50.3665,53.64542"
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
          <path d="M231.79883,32.2002a28.05536,28.05536,0,0,0-39.667.06933L18.27441,210.41211a8,8,0,0,0,3.92676,13.38281,155.06019,155.06019,0,0,0,34.957,4.00293c33.4209-.001,66.877-10.86914,98.32813-32.1748,31.74512-21.50391,50.14551-45.79981,50.91406-46.82325a8.00114,8.00114,0,0,0-.74316-10.457L186.919,119.60547l44.97753-47.90332A28.03445,28.03445,0,0,0,231.79883,32.2002ZM189.207,144.52148a225.51045,225.51045,0,0,1-43.10351,38.13184c-34.46973,23.23145-69.999,32.665-105.83887,28.13477l106.29492-108.915,23.30176,23.30175q.208.22852.43847.44434l.082.07617Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M146.49075,90.49075,200,144s-72,96-176,72L197.85786,37.85786a20,20,0,1,1,28.28427,28.28427l-50.3665,53.64542"
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
          <path
            d="M146.49075,90.49075,200,144s-72,96-176,72L197.85786,37.85786a20,20,0,1,1,28.28427,28.28427l-50.3665,53.64542"
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
          <path
            d="M146.49075,90.49075,200,144s-72,96-176,72L197.85786,37.85786a20,20,0,1,1,28.28427,28.28427l-50.3665,53.64542"
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

const Knife = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

Knife.displayName = "Knife";

export default Knife;
