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
      x1="224.00373"
      y1="128"
      x2="80.00373"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="152.004 56 80.004 128 152.004 200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="40"
      y1="40"
      x2="40"
      y2="216"
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
      x1="224.00373"
      y1="128"
      x2="72.00373"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="144.004 56 72.004 128 144.004 200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="40"
      y1="40"
      x2="40"
      y2="216"
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
    <path d="M138.34326,50.34326a7.99984,7.99984,0,0,1,11.31348,11.31348L91.31348,120H224a8,8,0,0,1,0,16H91.31348l58.34326,58.34326a7.99984,7.99984,0,0,1-11.31348,11.31348L66.34644,133.66016c-.188-.188-.366-.38575-.53443-.59131-.07031-.08545-.1311-.17578-.19726-.26367-.09082-.12061-.18433-.23926-.26856-.36524-.073-.10937-.13623-.22265-.20337-.335-.06689-.11133-.137-.2207-.19848-.33545-.062-.11621-.11475-.23584-.17066-.35449-.05591-.11816-.1145-.23389-.16479-.355-.04761-.11524-.08594-.23291-.12818-.3501-.04663-.12939-.09594-.25683-.136-.38916-.03565-.11767-.06153-.23682-.09156-.35547-.03369-.13379-.071-.26611-.09814-.40283-.02759-.13916-.04419-.27979-.06421-.41992-.01685-.11817-.03931-.23389-.051-.353C64.01392,128.52686,64,128.26367,64,128s.01392-.52686.03979-.78955c.01172-.11914.03418-.23486.051-.353.02-.14013.03662-.28076.06421-.41992.0271-.13672.06445-.269.09814-.40283.03-.11865.05591-.23779.09156-.35547.04-.13232.08935-.25977.136-.38916.04224-.11719.08057-.23486.12818-.3501.05029-.12109.10888-.23681.16479-.355.05591-.11865.10864-.23828.17066-.35449.06152-.11475.13159-.22412.19848-.33545.06714-.11231.13037-.22559.20337-.335.08423-.126.17774-.24463.26856-.36524.06616-.08789.12695-.17822.19726-.26367q.25269-.30834.53369-.59033ZM48,216V40a8,8,0,0,0-16,0V216a8,8,0,0,0,16,0Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="224.00373"
      y1="128"
      x2="72.00373"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="144.004 56 72.004 128 144.004 200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="40"
      y1="40"
      x2="40"
      y2="216"
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
      x1="224.00373"
      y1="128"
      x2="72.00373"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="144.004 56 72.004 128 144.004 200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="40"
      y1="40"
      x2="40"
      y2="216"
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
      x1="224.00373"
      y1="128"
      x2="72.00373"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="144.004 56 72.004 128 144.004 200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="40"
      y1="40"
      x2="40"
      y2="216"
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

const ArrowLineLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ArrowLineLeft.displayName = "ArrowLineLeft";

export default ArrowLineLeft;
