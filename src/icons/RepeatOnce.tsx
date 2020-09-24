/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <polyline
            points="200 88 224 64 200 40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M32,128A64,64,0,0,1,96,64H224"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="56 168 32 192 56 216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M224,128a64,64,0,0,1-64,64H32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="116 111.993 132 104 132 152"
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
            points="200 88 224 64 200 40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M32,128A64,64,0,0,1,96,64H224"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="56 168 32 192 56 216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M224,128a64,64,0,0,1-64,64H32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="116 111.993 132 104 132 152"
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
          <path d="M32,136a8.00039,8.00039,0,0,0,8-8A56.06322,56.06322,0,0,1,96,72H204.68628L194.34277,82.34326a8.00018,8.00018,0,0,0,11.31446,11.31348l24-24c.0271-.02686.04956-.05713.07617-.08447.15649-.16065.30908-.32569.45166-.49952.08423-.10254.15771-.21045.23608-.31591.07715-.10352.15747-.20459.22949-.312.082-.12255.15333-.24951.22779-.375.05859-.09863.12036-.19433.17456-.29541.06811-.127.12573-.25732.18652-.38671.05029-.10743.10425-.2129.1499-.32325.052-.12549.094-.25341.13941-.38086.04248-.11914.08838-.23632.12524-.35791.03882-.12841.06763-.25927.09986-.38916.03076-.123.06567-.24511.09057-.3706.03-.15088.04859-.30371.06958-.45654.0149-.106.0354-.21.0459-.31739a8.02276,8.02276,0,0,0,0-1.584c-.0105-.10742-.031-.21143-.0459-.31739-.021-.15283-.03955-.30566-.06958-.45654-.0249-.12549-.05981-.24756-.09057-.3706-.03223-.12989-.061-.26075-.09986-.38916-.03686-.12159-.08276-.23877-.12524-.35791-.04541-.12745-.0874-.25537-.13941-.38086-.04565-.11035-.09961-.21582-.1499-.32325-.06079-.12939-.11841-.25976-.18652-.38671-.0542-.10108-.116-.19678-.17456-.29541-.07446-.12549-.14575-.25245-.22779-.375-.072-.10743-.15234-.2085-.22949-.312-.07837-.10546-.15185-.21337-.23608-.31591-.14527-.17725-.30054-.34522-.46021-.50928-.02368-.02393-.0437-.05078-.06762-.07471l-24-24a8.00018,8.00018,0,1,0-11.31446,11.31348L204.68628,56H96a72.08124,72.08124,0,0,0-72,72A8.00039,8.00039,0,0,0,32,136Z" />
          <path d="M224,120a8.00039,8.00039,0,0,0-8,8,56.06322,56.06322,0,0,1-56,56H51.31372l10.34351-10.34326a8.00018,8.00018,0,0,0-11.31446-11.31348l-24,24c-.02392.02393-.04394.05078-.06762.07471-.15967.16406-.31494.332-.46021.50928-.08423.10254-.15771.21045-.23608.31591-.07715.10352-.15747.20459-.22949.312-.082.12255-.15333.24951-.22779.375-.05859.09863-.12036.19433-.17456.29541-.06811.12695-.12573.25732-.18652.38671-.05029.10743-.10425.2129-.1499.32325-.052.12549-.094.25341-.13941.38086-.04248.11914-.08838.23632-.12524.35791-.03882.12841-.06763.25927-.09986.38916-.03076.123-.06567.24511-.09057.3706-.03.15088-.04859.30371-.06958.45654-.0149.106-.0354.21-.0459.31739a8.02276,8.02276,0,0,0,0,1.584c.0105.10742.031.21143.0459.31739.021.15283.03955.30566.06958.45654.0249.12549.05981.24756.09057.3706.03223.12989.061.26075.09986.38916.03686.12159.08276.23877.12524.35791.04541.12745.0874.25537.13941.38086.04565.11035.09961.21582.1499.32325.06079.12939.11841.25976.18652.38671.0542.10108.116.19678.17456.29541.07446.12549.14575.25245.22779.375.072.10743.15234.2085.22949.312.07837.10546.15185.21337.23608.31591.14258.17383.29517.33887.45166.49952.02661.02734.04907.05761.07617.08447l24,24a8.00018,8.00018,0,1,0,11.31446-11.31348L51.31372,200H160a72.08124,72.08124,0,0,0,72-72A8.00039,8.00039,0,0,0,224,120Z" />
          <path d="M132,160a8.00039,8.00039,0,0,0,8-8V104a7.99986,7.99986,0,0,0-11.5752-7.15674l-16,7.99268a8.00006,8.00006,0,0,0,7.1504,14.31347l4.4248-2.21V152A8.00039,8.00039,0,0,0,132,160Z" />
        </>
      );
    case "light":
      return (
        <>
          <polyline
            points="200 88 224 64 200 40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M32,128A64,64,0,0,1,96,64H224"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="56 168 32 192 56 216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M224,128a64,64,0,0,1-64,64H32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="116 111.993 132 104 132 152"
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
            points="200 88 224 64 200 40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M32,128A64,64,0,0,1,96,64H224"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="56 168 32 192 56 216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M224,128a64,64,0,0,1-64,64H32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="116 111.993 132 104 132 152"
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
            points="200 88 224 64 200 40"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M32,128A64,64,0,0,1,96,64H224"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="56 168 32 192 56 216"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M224,128a64,64,0,0,1-64,64H32"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="116 111.993 132 104 132 152"
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

const RepeatOnce = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

RepeatOnce.displayName = "RepeatOnce";

export default RepeatOnce;
