/* GENERATED FILE */
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
    <circle
      cx="44"
      cy="176"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="200 40 240 80 200 120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M72,176h8.00005a48,48,0,0,0,48-48V128A48,48,0,0,1,176,80h64"
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
    <circle cx="44" cy="176" r="28" opacity="0.2" />
    <circle
      cx="44"
      cy="176"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="200 40 240 80 200 120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M72,176h8.00005a48,48,0,0,0,48-48V128A48,48,0,0,1,176,80h64"
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
    <path d="M245.81592,85.48145c-.0542.0581-.10205.11914-.15869.17578l-40,40a8.00053,8.00053,0,0,1-11.31446-11.31446L220.68652,88H176a40.04584,40.04584,0,0,0-40,40,56.0629,56.0629,0,0,1-56,56h-.90723a36,36,0,1,1,0-16H80a40.04584,40.04584,0,0,0,40-40,56.0629,56.0629,0,0,1,56-56h44.68652L194.34277,45.65723a8.00053,8.00053,0,0,1,11.31446-11.31446l40,40c.05664.05664.10449.11768.15869.17578.12549.13282.251.26514.36719.40625.0913.11084.17138.22706.25537.3418.07031.09522.14453.188.21093.28662.085.12647.15918.25782.23584.38819.05567.09423.11524.186.167.2832.06933.12891.12841.26172.18994.39355.04931.10547.10205.209.147.31641.05225.127.09522.25586.14063.38477.042.11816.0874.23437.124.355.03906.1289.06787.25976.10058.39013.03077.12305.06543.24414.09034.36914.02978.15186.04834.30469.06933.45752.01465.106.03516.20948.0459.3169a8.02276,8.02276,0,0,1,0,1.584c-.01074.10742-.03125.21094-.0459.3169-.021.15283-.03955.30566-.06933.45752-.02491.125-.05957.24609-.09034.36914-.03271.13037-.06152.26123-.10058.39013-.03662.12061-.082.23682-.124.355-.04541.12891-.08838.25782-.14063.38477-.04492.10742-.09766.21094-.147.31641-.06153.13183-.12061.26464-.18994.39355-.05176.09717-.11133.189-.167.2832-.07666.13037-.15087.26172-.23584.38819-.0664.09863-.14062.1914-.21093.28662-.084.11474-.16407.231-.25537.3418C246.06689,85.21631,245.94141,85.34863,245.81592,85.48145Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="44"
      cy="176"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="200 40 240 80 200 120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M72,176h8.00005a48,48,0,0,0,48-48V128A48,48,0,0,1,176,80h64"
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
    <circle
      cx="44"
      cy="176"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="200 40 240 80 200 120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M72,176h8.00005a48,48,0,0,0,48-48V128A48,48,0,0,1,176,80h64"
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
    <circle
      cx="44"
      cy="176"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="200 40 240 80 200 120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M72,176h8.00005a48,48,0,0,0,48-48V128A48,48,0,0,1,176,80h64"
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

const FlowArrow = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

FlowArrow.displayName = "FlowArrow";

export default FlowArrow;
