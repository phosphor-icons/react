/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <polyline
            points="224 208 32 208 32 48"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="208.002 64 128.002 144 96.002 112 32.002 176"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="208.002 104 208.002 64 168.002 64"
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
            points="224 208 32 208 32 48"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="208.002 64 128.002 144 96.002 112 32.002 176"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="208.002 104 208.002 64 168.002 64"
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
          <path d="M223.99951,200h-184V179.31738l56.00293-56.0039,26.34277,26.34375a8.00122,8.00122,0,0,0,11.31446,0l66.34277-66.34278V104a8,8,0,0,0,16,0V64.00488c0-.26562-.01367-.53174-.04-.79687-.01074-.10694-.03076-.21094-.04541-.31641-.02148-.15283-.04-.30615-.06982-.458-.0249-.125-.05957-.24609-.09033-.36914-.03272-.13037-.06153-.26123-.10059-.39013-.03662-.1211-.082-.23731-.12451-.356-.04541-.12793-.08789-.25684-.14014-.3833-.04541-.10889-.09814-.21338-.148-.31934-.06152-.13086-.11963-.26269-.18847-.39062-.05323-.09912-.11377-.19287-.1709-.28955-.07569-.12793-.14844-.25684-.23194-.38135-.06933-.10352-.147-.20068-.2207-.30029-.081-.10987-.15771-.22168-.24512-.32764-.13281-.16211-.27588-.31543-.42138-.46631-.03662-.03808-.06787-.07959-.10547-.11719-.03516-.03466-.07324-.064-.10889-.09814-.15381-.148-.31006-.29346-.4751-.4292-.10254-.084-.21-.15772-.31543-.23584-.10449-.07764-.20556-.1582-.31347-.23047-.12012-.08057-.24414-.1499-.36719-.22314-.10156-.06006-.2002-.124-.3042-.17969-.12256-.06592-.24853-.12158-.374-.18018-.11182-.05273-.22217-.10888-.33692-.15625-.12011-.0498-.24267-.08984-.36474-.1333-.124-.04492-.24707-.09277-.374-.13135-.12207-.03662-.2456-.064-.36914-.09472-.12988-.03272-.2583-.06934-.39062-.09522-.14063-.02832-.28321-.04492-.42529-.06494-.11622-.0166-.231-.03906-.34864-.05029-.26269-.02588-.52588-.04-.78955-.04h-40a8,8,0,0,0,0,16h20.686l-60.686,60.68652-26.34277-26.34375a8.00122,8.00122,0,0,0-11.31446,0l-50.3457,50.34571V48a8,8,0,0,0-16,0V208a8.00039,8.00039,0,0,0,8,8h192a8,8,0,0,0,0-16Z" />
        </>
      );
    case "light":
      return (
        <>
          <polyline
            points="224 208 32 208 32 48"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="208.002 64 128.002 144 96.002 112 32.002 176"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="208.002 104 208.002 64 168.002 64"
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
            points="224 208 32 208 32 48"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="208.002 64 128.002 144 96.002 112 32.002 176"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="208.002 104 208.002 64 168.002 64"
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
            points="224 208 32 208 32 48"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="208.002 64 128.002 144 96.002 112 32.002 176"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="208.002 104 208.002 64 168.002 64"
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

const ChartLineUp = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ChartLineUp.displayName = "ChartLineUp";

export default ChartLineUp;
