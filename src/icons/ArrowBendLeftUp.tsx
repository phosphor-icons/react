/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <polyline
            points="152 80 104 32 56 80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M200,224a96,96,0,0,1-96-96V32"
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
            points="152 80 104 32 56 80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M200,224a96,96,0,0,1-96-96V32"
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
          <path d="M200,216a88.09957,88.09957,0,0,1-88-88V51.31372l34.34277,34.34351a8.00053,8.00053,0,0,0,11.31446-11.31446l-48-48c-.05347-.05322-.11158-.09863-.166-.1499-.13623-.12891-.27222-.25781-.417-.377-.10449-.0857-.21411-.16065-.32178-.24024-.10229-.07617-.2019-.15551-.3081-.22656-.11817-.0791-.24073-.14795-.36206-.22-.10352-.06177-.20459-.12671-.311-.18359-.11816-.06324-.23975-.11695-.36035-.17383-.1167-.05518-.23169-.11328-.35132-.16284-.11255-.04663-.22754-.084-.3418-.12525-.13256-.04785-.26367-.09839-.39917-.1394-.10962-.0332-.22094-.05713-.3313-.08521-.14233-.03637-.2832-.07592-.42846-.10473-.12134-.02393-.24414-.0376-.36621-.05567-.136-.02051-.27027-.04565-.40845-.05908-.2019-.01977-.40454-.02612-.60718-.03076C104.11743,24.00757,104.05981,24,104,24s-.11743.00757-.177.00879c-.20264.00464-.40528.011-.60718.03076-.13818.01343-.27246.03857-.40845.05908-.12207.01807-.24487.03174-.36621.05567-.14526.02881-.28613.06836-.42846.10473-.11036.02808-.22168.052-.3313.08521-.1355.041-.26661.09155-.39917.1394-.11426.04126-.22925.07862-.3418.12525-.11963.04956-.23462.10766-.35132.16284-.1206.05688-.24219.11059-.36035.17383-.10645.05688-.20752.12182-.311.18359-.12133.072-.24389.14087-.36206.22-.1062.071-.20581.15039-.3081.22656-.10767.07959-.21729.15454-.32178.24024-.14477.11914-.28076.248-.417.377-.05444.05127-.11255.09668-.166.1499l-48,48A8.00053,8.00053,0,0,0,61.65723,85.65723L96,51.31372V128A104.11791,104.11791,0,0,0,200,232a8,8,0,0,0,0-16Z" />
        </>
      );
    case "light":
      return (
        <>
          <polyline
            points="152 80 104 32 56 80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M200,224a96,96,0,0,1-96-96V32"
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
            points="152 80 104 32 56 80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M200,224a96,96,0,0,1-96-96V32"
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
            points="152 80 104 32 56 80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M200,224a96,96,0,0,1-96-96V32"
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

const ArrowBendLeftUp = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ArrowBendLeftUp.displayName = "ArrowBendLeftUp";

export default ArrowBendLeftUp;
