/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <polyline
            points="120 80 168 32 216 80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M56,80v88a56,56,0,0,0,56,56h.00011A55.99988,55.99988,0,0,0,168,168.00011V32"
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
            points="120 80 168 32 216 80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M56,80v88a56,56,0,0,0,56,56h.00011A55.99988,55.99988,0,0,0,168,168.00011V32"
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
          <path d="M221.65723,74.34326l-48-48c-.02076-.02051-.04346-.0376-.06446-.0581-.167-.16358-.33935-.32178-.52026-.47022-.09912-.08154-.20337-.15234-.30518-.22851-.10766-.08008-.2124-.16358-.324-.2378-.11768-.0791-.23975-.14746-.36084-.21924-.10327-.06152-.2041-.12646-.3103-.18359-.12232-.06543-.24805-.12109-.37281-.17969-.11206-.05273-.22192-.1084-.33667-.15625-.12158-.05029-.2456-.09082-.36889-.13476-.12305-.04444-.24439-.09131-.37012-.1294-.12353-.03759-.249-.06494-.374-.09619-.12842-.03222-.25489-.06836-.3855-.09424-.14478-.02881-.29126-.0459-.437-.06689-.11231-.01563-.2229-.03711-.33667-.04834a8.06858,8.06858,0,0,0-1.58106,0c-.11377.01123-.22436.03271-.33667.04834-.14575.021-.29223.03808-.437.06689-.13061.02588-.25708.062-.3855.09424-.125.03125-.25049.0586-.374.09619-.12573.03809-.24707.085-.37012.1294-.12329.04394-.24731.08447-.36889.13476-.11475.04785-.22461.10352-.33667.15625-.12476.0586-.25049.11426-.37281.17969-.1062.05713-.207.12207-.3103.18359-.12109.07178-.24316.14014-.36084.21924-.11157.07422-.21631.15772-.324.2378-.10181.07617-.20606.147-.30518.22851-.18091.14844-.35327.30664-.52026.47022-.021.0205-.0437.03759-.06446.0581l-48,48a8.00018,8.00018,0,0,0,11.31446,11.31348L160,51.314V168a48,48,0,0,1-96,0V80a8,8,0,0,0-16,0v88a64,64,0,0,0,128,0V51.314l34.34277,34.34278a8.00018,8.00018,0,0,0,11.31446-11.31348Z" />
        </>
      );
    case "light":
      return (
        <>
          <polyline
            points="120 80 168 32 216 80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M56,80v88a56,56,0,0,0,56,56h.00011A55.99988,55.99988,0,0,0,168,168.00011V32"
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
            points="120 80 168 32 216 80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M56,80v88a56,56,0,0,0,56,56h.00011A55.99988,55.99988,0,0,0,168,168.00011V32"
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
            points="120 80 168 32 216 80"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M56,80v88a56,56,0,0,0,56,56h.00011A55.99988,55.99988,0,0,0,168,168.00011V32"
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

const ArrowURightUp = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ArrowURightUp.displayName = "ArrowURightUp";

export default ArrowURightUp;
