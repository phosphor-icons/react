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
            d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="224 56 128 144 32 56"
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
          <polygon points="224 56 128 144 32 56 224 56" opacity="0.2" />
          <path
            d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="224 56 128 144 32 56"
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
          <path d="M231.99121,55.80933q-.00513-.22192-.02246-.44312-.01392-.18054-.03564-.35864c-.01709-.13819-.03858-.27564-.063-.41284-.022-.12427-.0459-.24756-.07325-.36963-.02978-.12989-.064-.25855-.0996-.38721-.03467-.12353-.07081-.24634-.11133-.36743-.04151-.12549-.08789-.24927-.13623-.3728-.04639-.1189-.09375-.23682-.14551-.35279-.0542-.12133-.11279-.24072-.17334-.35986-.05811-.11426-.11719-.2273-.18066-.33814-.06446-.11328-.13282-.2246-.20362-.33544-.07178-.11329-.146-.22461-.22363-.334-.07227-.10156-.147-.20117-.22461-.30029-.08838-.11255-.1792-.22193-.273-.32959-.04394-.05029-.08154-.10376-.12695-.15332-.03858-.042-.08106-.07764-.12012-.11841-.09668-.10107-.19678-.19849-.29834-.29443-.09424-.08887-.189-.17676-.28662-.26026-.09619-.08227-.19531-.15991-.29541-.23755-.10938-.085-.21826-.16919-.33106-.24755-.09765-.06812-.19873-.13135-.29931-.19507-.11914-.0752-.23779-.15015-.35938-.21851-.10693-.05981-.21679-.11377-.32666-.16894-.11963-.05982-.23877-.12012-.36084-.17383-.12109-.05347-.2456-.1001-.37011-.14771-.11475-.0437-.2295-.08838-.3462-.12671-.1333-.04394-.269-.08081-.40527-.11767-.11426-.031-.228-.0625-.34326-.08838-.13574-.03027-.27344-.0542-.41162-.07764-.12256-.02075-.24414-.041-.36719-.05615-.13135-.01611-.26318-.02661-.396-.03613-.13476-.00977-.26953-.01758-.40429-.02051-.05908-.00122-.1167-.00879-.17578-.00879h-192c-.05469,0-.10743.00708-.16211.0083-.14551.00293-.29.011-.43506.022-.12354.009-.2461.0188-.36768.03345-.13281.01611-.26465.03784-.39648.06055-.12891.02221-.25781.04443-.38477.07251-.124.02783-.24609.06152-.36914.09521-.12793.03491-.25586.06958-.38135.11084-.124.04053-.24511.08765-.36718.13428-.11768.04541-.23584.0896-.35108.14014-.127.05566-.25146.11865-.37646.18139-.105.05274-.21.10449-.312.16187-.12549.07007-.24756.147-.36963.22436-.09766.06177-.1958.123-.29053.18921-.11475.07984-.22607.16553-.33691.2522-.09864.07642-.19629.15283-.29053.23364-.09863.08423-.19385.17285-.28906.2627-.10157.09546-.20069.19238-.29737.293-.03906.041-.08154.07666-.12011.11865-.04541.04956-.083.103-.127.15332-.09375.10766-.18457.217-.27295.32959-.07763.09912-.15234.19873-.22461.30029-.07763.10938-.15185.2207-.22363.334-.0708.11084-.13916.22216-.20361.33544-.06348.11084-.12256.22388-.18067.33814-.06054.11914-.11914.23853-.17334.35986-.05175.116-.09912.23389-.1455.35279-.04834.12353-.09473.24731-.13623.3728-.04053.12109-.07666.2439-.11133.36743-.03565.12866-.06983.25732-.09961.38721-.02735.12207-.05127.24536-.07324.36963-.02442.1372-.0459.27465-.063.41284q-.022.17834-.03565.35864-.01758.22156-.02246.44312c-.00146.064-.00976.12622-.00976.19067V192a16.01833,16.01833,0,0,0,16,16h176a16.01833,16.01833,0,0,0,16-16V56C232.001,55.93555,231.99268,55.87329,231.99121,55.80933ZM216.001,192h-176V74.18652l82.59375,75.71094a8.0018,8.0018,0,0,0,10.8125,0l82.59521-75.7124.0083,117.81445Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="224 56 128 144 32 56"
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
            d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="224 56 128 144 32 56"
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
            d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="224 56 128 144 32 56"
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

const EnvelopeSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

EnvelopeSimple.displayName = "EnvelopeSimple";

export default EnvelopeSimple;
