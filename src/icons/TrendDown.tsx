/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <polyline
            points="232.002 200 136.002 104 96.002 144 24.002 72"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="232.002 136 232.002 200 168.002 200"
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
            points="232.002 200 136.002 104 96.002 144 24.002 72"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="232.002 136 232.002 200 168.002 200"
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
          <path d="M238.41943,204.76245c.07862-.10571.16065-.20862.23438-.31836.08057-.1206.15088-.24585.22461-.36987.05957-.1001.12207-.19751.17724-.30029.06788-.126.125-.25538.18506-.384.05078-.1084.10547-.2146.15137-.32568.05127-.12463.09326-.25195.13867-.37842.04248-.11987.08887-.238.126-.36059.03857-.12769.06738-.25757.09912-.38672.03125-.124.06592-.24622.09131-.37244.02978-.15088.04785-.30334.06933-.45544.01465-.10645.03516-.21094.0459-.31861q.03955-.39769.04-.79712V136a8,8,0,0,0-16,0v44.686L141.65967,98.34326a8.00122,8.00122,0,0,0-11.31446,0L96.00244,132.686,29.65967,66.34326A8.00018,8.00018,0,1,0,18.34521,77.65674l72,72a8.00122,8.00122,0,0,0,11.31446,0L136.00244,115.314,212.68848,192h-44.686a8,8,0,1,0,0,16h64c.26367,0,.52735-.014.78955-.03992.11817-.01159.23242-.03369.34912-.05041.1416-.02027.28418-.03687.42481-.0647.13428-.02661.26465-.0636.39648-.09692.12061-.0304.24219-.05689.36231-.093.1289-.03931.2539-.08765.38037-.13318.12012-.043.24072-.0824.35888-.13147.11719-.04858.2295-.10547.34375-.15942.12256-.05762.2461-.11206.36622-.17627.10888-.0586.21289-.12525.31933-.18872.11768-.07032.23682-.13684.35156-.21363.11622-.078.22608-.16479.33789-.24853.09717-.07263.19678-.14014.291-.21765.18652-.153.36426-.31531.53565-.48413.01611-.016.03417-.02918.05029-.04529.02051-.02051.0376-.04321.05762-.064.16357-.167.32177-.33935.47021-.52026C238.27051,204.97192,238.34277,204.866,238.41943,204.76245Z" />
        </>
      );
    case "light":
      return (
        <>
          <polyline
            points="232.002 200 136.002 104 96.002 144 24.002 72"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="232.002 136 232.002 200 168.002 200"
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
            points="232.002 200 136.002 104 96.002 144 24.002 72"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="232.002 136 232.002 200 168.002 200"
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
            points="232.002 200 136.002 104 96.002 144 24.002 72"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="232.002 136 232.002 200 168.002 200"
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

const TrendDown = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <rect width="256" height="256" fill="none" />
      {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
    </svg>
  );
});

TrendDown.displayName = "TrendDown";

export default TrendDown;
