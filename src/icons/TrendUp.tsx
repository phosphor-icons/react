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
    <polyline
      points="232.002 56 136.002 152 96.002 112 24.002 184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="232.002 120 232.002 56 168.002 56"
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
    <polyline
      points="232.002 56 136.002 152 96.002 112 24.002 184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="232.002 120 232.002 56 168.002 56"
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
    <path d="M24.00244,192a7.97619,7.97619,0,0,0,5.65723-2.34326L96.00244,123.314l34.34277,34.34278a8.00122,8.00122,0,0,0,11.31446,0L224.00244,75.314V120a8,8,0,0,0,16,0V56.00513q0-.39918-.04-.79712c-.01074-.10767-.03125-.21216-.0459-.31861-.02148-.1521-.03955-.30444-.06933-.45532-.02539-.12646-.06006-.24853-.09131-.37256-.03174-.12915-.06055-.259-.09912-.38672-.03711-.12255-.0835-.24072-.126-.36059-.04541-.12647-.0874-.25366-.13867-.37842-.0459-.11108-.10059-.21728-.15137-.32568-.06006-.12866-.11718-.25806-.18506-.384-.05517-.10278-.11767-.20019-.17724-.30029-.07373-.124-.144-.24927-.22461-.36987-.07373-.10962-.15576-.21265-.23438-.31836-.07666-.10352-.14892-.20947-.23193-.31006-.14844-.18091-.30664-.35327-.47021-.52026-.02-.02076-.03711-.04346-.05762-.064-.01612-.01611-.03418-.0293-.05029-.04541-.17139-.1687-.34913-.331-.53565-.48389-.09375-.07714-.19287-.14453-.28955-.21679-.11279-.084-.22266-.17139-.33984-.24951-.1128-.07569-.23047-.14136-.34668-.2107-.10791-.06469-.21387-.13257-.3252-.19214-.1167-.0625-.23682-.11523-.356-.17138-.11767-.05591-.23339-.1145-.35449-.16455-.11377-.04712-.22949-.085-.34472-.12647-.13135-.04736-.26075-.09741-.395-.13794-.11377-.03442-.2295-.05932-.34424-.08862-.1377-.03516-.27442-.07324-.41455-.10107-.13037-.02588-.26221-.04078-.39356-.06006-.12695-.01856-.25195-.04248-.38086-.05494-.23193-.02294-.46484-.03271-.69824-.0354C232.061,48.00415,232.03223,48,232.00244,48h-64a8,8,0,0,0,0,16h44.686l-76.686,76.686-34.34277-34.34278a8.00122,8.00122,0,0,0-11.31446,0l-72,72A8,8,0,0,0,24.00244,192Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="232.002 56 136.002 152 96.002 112 24.002 184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="232.002 120 232.002 56 168.002 56"
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
    <polyline
      points="232.002 56 136.002 152 96.002 112 24.002 184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="232.002 120 232.002 56 168.002 56"
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
    <polyline
      points="232.002 56 136.002 152 96.002 112 24.002 184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="232.002 120 232.002 56 168.002 56"
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

const TrendUp = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

TrendUp.displayName = "TrendUp";

export default TrendUp;
