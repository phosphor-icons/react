/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <polyline
            points="160 128 208 176 160 224"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <polyline
            points="64 32 64 176 208 176"
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
          <rect width="256" height="256" fill="none" />
          <polyline
            points="160 128 208 176 160 224"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="64 32 64 176 208 176"
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
          <rect width="256" height="256" fill="none" />
          <path d="M214.1853,181.07251c.08277-.10059.15479-.20654.23194-.31006.07861-.10571.1604-.20874.23388-.31836.08081-.1206.15113-.24585.22486-.36987.05932-.1001.12231-.19751.17749-.30029.06738-.126.12475-.25538.18481-.384.05078-.1084.10523-.2146.15137-.32568.05151-.12476.09326-.25195.13843-.37842.04272-.11987.08911-.238.12622-.36059.03857-.12769.06714-.25757.09936-.38672.03076-.124.06568-.2461.09082-.37256.03-.15088.04834-.30322.06958-.45532.01465-.10645.0354-.21094.0459-.31861a8.02276,8.02276,0,0,0,0-1.584c-.0105-.10767-.03125-.21216-.0459-.31861-.02124-.1521-.03955-.30444-.06958-.45532-.02514-.12646-.06006-.24853-.09082-.37256-.03222-.12915-.06079-.259-.09936-.38672-.03711-.12255-.0835-.24072-.12622-.36059-.04517-.12647-.08692-.25366-.13843-.37842-.04614-.11108-.10059-.21728-.15137-.32568-.06006-.12866-.11743-.25806-.18481-.384-.05518-.10278-.11817-.20019-.17749-.30029-.07373-.124-.144-.24927-.22486-.36987-.07348-.10962-.15527-.21265-.23388-.31836-.07715-.10352-.14917-.20947-.23194-.31006-.14868-.18091-.30688-.35327-.47046-.52026-.02-.02076-.03711-.04346-.05761-.064l-48-48a8.00018,8.00018,0,1,0-11.31446,11.31348L188.68652,168H72V32a8,8,0,0,0-16,0V176a8.00008,8.00008,0,0,0,8,8H188.68652l-34.34375,34.34326a8.00018,8.00018,0,0,0,11.31446,11.31348l48-48c.0205-.02051.03759-.04321.05761-.064C213.87842,181.42578,214.03662,181.25342,214.1853,181.07251Z" />
        </>
      );
    case "light":
      return (
        <>
          <rect width="256" height="256" fill="none" />
          <polyline
            points="160 128 208 176 160 224"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <polyline
            points="64 32 64 176 208 176"
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
          <rect width="256" height="256" fill="none" />
          <polyline
            points="160 128 208 176 160 224"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <polyline
            points="64 32 64 176 208 176"
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
          <rect width="256" height="256" fill="none" />
          <polyline
            points="160 128 208 176 160 224"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="64 32 64 176 208 176"
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

const ArrowElbowDownRight = forwardRef<SVGSVGElement, IconProps>(
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

ArrowElbowDownRight.displayName = "ArrowElbowDownRight";

export default ArrowElbowDownRight;
