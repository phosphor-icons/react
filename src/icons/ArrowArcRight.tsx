/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (
        <>
          <polyline
            points="163.882 148.118 227.882 148.118 227.882 84.118"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
          <path
            d="M32,184a96,96,0,0,1,163.88225-67.88229l32,32"
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
            points="163.882 148.118 227.882 148.118 227.882 84.118"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M32,184a96,96,0,0,1,163.88225-67.88229l32,32"
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
          <path d="M229.07861,156.019c.12061-.01806.2417-.03174.36133-.05517.146-.02881.28784-.06836.43091-.105.11011-.02832.2207-.05225.32959-.085.1355-.041.2666-.09131.39917-.13965.11426-.041.22925-.07862.3418-.125.11963-.04981.23462-.10791.35131-.16309.12061-.05664.24219-.11035.36036-.17334.10717-.05762.20874-.12305.313-.18506.12037-.07177.24244-.14013.35962-.21826.10718-.07178.20752-.15185.31079-.22851.10669-.07911.21582-.15381.31958-.23877.14478-.11914.28077-.248.417-.377.05444-.05127.11255-.09668.166-.1499.0564-.05664.10425-.11768.15869-.17578.12525-.13281.25122-.26514.36719-.40625.09107-.11084.17114-.22705.25537-.3418.07056-.09521.14478-.188.21094-.28662.085-.12646.15894-.25781.23584-.38818.05566-.09424.11523-.186.16724-.28321.06909-.1289.12817-.26171.18969-.39355.04932-.10547.102-.209.147-.31641.05224-.127.095-.25586.14062-.38476.042-.11817.08765-.23438.12427-.355.03906-.12891.06787-.25977.10034-.39014.03052-.12305.06519-.24414.09009-.36914.03-.15186.04858-.30469.06982-.45752.01465-.106.03516-.20947.04566-.31689.02636-.26514.04028-.53125.04-.79688V84.11816a8,8,0,1,0-16,0v44.68555l-18.34278-18.34277A104,104,0,0,0,24,184a8,8,0,0,0,16,0,87.99889,87.99889,0,0,1,150.22461-62.22461l18.34277,18.34277H163.88184a8,8,0,0,0,0,16h64c.05981,0,.11743-.00781.177-.00879.20263-.00439.40527-.01123.60718-.03076C228.80542,156.06494,228.94116,156.03955,229.07861,156.019Z" />
        </>
      );
    case "light":
      return (
        <>
          <polyline
            points="163.882 148.118 227.882 148.118 227.882 84.118"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
          <path
            d="M32,184a96,96,0,0,1,163.88225-67.88229l32,32"
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
            points="163.882 148.118 227.882 148.118 227.882 84.118"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
          <path
            d="M32,184a96,96,0,0,1,163.88225-67.88229l32,32"
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
            points="163.882 148.118 227.882 148.118 227.882 84.118"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <path
            d="M32,184a96,96,0,0,1,163.88225-67.88229l32,32"
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

const ArrowArcRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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

ArrowArcRight.displayName = "ArrowArcRight";

export default ArrowArcRight;
