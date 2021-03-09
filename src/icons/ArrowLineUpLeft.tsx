import React, { forwardRef } from "react";

import {
  IconWeight,
  IconProps,
  PaintFunction,
  renderPathForWeight,
} from "../lib";
import IconBase, { RenderFunction } from "../lib/IconBase";

const pathsByWeight = new Map<IconWeight, PaintFunction>();
pathsByWeight.set("bold", (color: string) => (
  <>
    <line
      x1="176"
      y1="168"
      x2="64"
      y2="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="64 156 64 56 164 56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="216"
      y1="215.99627"
      x2="40"
      y2="215.99627"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <line
      x1="176"
      y1="168"
      x2="64"
      y2="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="64 156 64 56 164 56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="216"
      y1="215.99627"
      x2="40"
      y2="215.99627"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M176,176a7.977,7.977,0,0,1-5.65723-2.34326L72,75.31372V156a8,8,0,0,1-16,0V56c0-.26349.01416-.52686.04-.78931.01123-.11853.03369-.23358.05029-.35052.02051-.14136.03711-.28314.06494-.42352.02637-.13349.063-.26294.09571-.39393.03076-.12194.05761-.24462.09423-.36535.03907-.129.08741-.25354.13282-.37976.043-.11994.08252-.2406.13135-.35877.04882-.11792.10644-.231.16064-.346.05713-.12182.11133-.24462.17529-.364.0586-.11011.126-.2146.18994-.32153.06983-.11688.13575-.23517.21192-.34912.07959-.11878.168-.23053.25342-.34473.07129-.09466.13671-.19189.21289-.28406a8.04368,8.04368,0,0,1,1.1167-1.11694c.08837-.07233.18115-.135.27148-.203.11816-.08893.23438-.18048.35791-.26282.10986-.07367.22412-.13739.33691-.205.11133-.06653.21973-.13611.33448-.19732.11474-.06147.2334-.11353.35058-.169.11914-.05658.23682-.116.35938-.16675.11279-.04663.228-.0841.34228-.12536.13184-.04767.26221-.098.397-.1388.11377-.0343.229-.05914.34326-.08826.13818-.03515.2749-.0736.416-.1015.12989-.02575.26172-.04065.39258-.05993.12695-.01868.25244-.04236.38135-.055.23193-.02282.46484-.03271.69824-.03527C63.94141,48.00415,63.97021,48,64,48H164a8,8,0,0,1,0,16H83.31348l98.34375,98.34326A8,8,0,0,1,176,176ZM32,215.99609a8.00008,8.00008,0,0,0,8,8H216a8,8,0,0,0,0-16H40A8.00009,8.00009,0,0,0,32,215.99609Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="176"
      y1="168"
      x2="64"
      y2="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="64 156 64 56 164 56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="216"
      y1="215.99627"
      x2="40"
      y2="215.99627"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <line
      x1="176"
      y1="168"
      x2="64"
      y2="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="64 156 64 56 164 56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="216"
      y1="215.99627"
      x2="40"
      y2="215.99627"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line
      x1="176"
      y1="168"
      x2="64"
      y2="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="64 156 64 56 164 56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="216"
      y1="215.99627"
      x2="40"
      y2="215.99627"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const ArrowLineUpLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ArrowLineUpLeft.displayName = "ArrowLineUpLeft";

export default ArrowLineUpLeft;
