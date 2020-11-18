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
          <polyline
            points="128 160 80 208 32 160"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="224 64 80 64 80 208"
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
          <polyline
            points="128 160 80 208 32 160"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="224 64 80 64 80 208"
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
          <path d="M224,56H80a8.00008,8.00008,0,0,0-8,8V188.6864L37.65723,154.34326a8.00018,8.00018,0,0,0-11.31446,11.31348l48,48c.01612.01611.03394.0293.05.04529.17163.16882.34961.33117.53589.48413.09448.07751.19385.145.291.21765.11206.08374.22143.17053.33789.24853.11474.07679.23388.14331.3518.21363.1062.06347.21.13012.31934.18872.11987.06421.24341.11865.366.17627.11425.05395.22656.11084.34375.15942.11816.04907.23877.0885.35888.13147.12647.04553.25122.09387.38062.13318.11963.03613.24121.06262.3623.093.13184.03332.262.07031.39624.09692.14087.02783.283.04443.42481.0647.11645.01672.231.03882.34912.05041C79.4729,215.986,79.73633,216,80,216s.5271-.014.78955-.03992c.11816-.01159.23267-.03369.34912-.05041.14185-.02027.28394-.03687.42481-.0647.13427-.02661.2644-.0636.39624-.09692.12109-.0304.24267-.05689.3623-.093.1294-.03931.25415-.08765.38062-.13318.12011-.043.24072-.0824.35888-.13147.11719-.04858.2295-.10547.34375-.15942.12256-.05762.2461-.11206.366-.17627.10938-.0586.21313-.12525.31934-.18872.11792-.07032.23706-.13684.3518-.21363.11646-.078.22583-.16479.33789-.24853.09717-.07263.19654-.14014.291-.21765.18628-.153.36426-.31531.53589-.48413.01611-.016.03393-.02918.05-.04529l48-48a8.00018,8.00018,0,0,0-11.31446-11.31348L88,188.6864V72H224a8,8,0,0,0,0-16Z" />
        </>
      );
    case "light":
      return (
        <>
          <polyline
            points="128 160 80 208 32 160"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="224 64 80 64 80 208"
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
          <polyline
            points="128 160 80 208 32 160"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="224 64 80 64 80 208"
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
          <polyline
            points="128 160 80 208 32 160"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="224 64 80 64 80 208"
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

const ArrowElbowLeftDown = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
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
  }
);

ArrowElbowLeftDown.displayName = "ArrowElbowLeftDown";

export default ArrowElbowLeftDown;
