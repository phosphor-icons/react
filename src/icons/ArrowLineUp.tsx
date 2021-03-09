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
      x1="128"
      y1="224.00373"
      x2="128"
      y2="80.00373"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="56 152.004 128 80.004 200 152.004"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="40"
      y1="40"
      x2="216"
      y2="40"
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
      x1="128"
      y1="224.00373"
      x2="128"
      y2="72.00373"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="56 144.004 128 72.004 200 144.004"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="40"
      y1="40"
      x2="216"
      y2="40"
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
    <path d="M122.34082,66.3457q.28125-.28125.59033-.53369c.08545-.07031.17578-.1311.26367-.19726.12061-.09082.23926-.18433.36524-.26856.10937-.073.22265-.13623.335-.20337.11133-.06689.2207-.137.33545-.19848.11621-.062.23584-.11475.35449-.17066.11816-.05591.23389-.1145.355-.16479.11524-.04761.23291-.08594.3501-.12818.12939-.04663.25684-.09594.38916-.136.11768-.03565.23682-.06153.35547-.09156.13379-.03369.26611-.071.40283-.09814.13916-.02759.27979-.04419.41992-.06421.11817-.01685.23389-.03931.353-.051C127.47314,64.01392,127.73633,64,128,64s.52686.01392.78955.03979c.11914.01172.23486.03418.353.051.14013.02.28076.03662.41992.06421.13672.0271.269.06445.40283.09814.11865.03.23779.05591.35547.09156.13232.04.25977.08935.38916.136.11719.04224.23486.08057.3501.12818.12109.05029.23682.10888.355.16479.11865.05591.23828.10864.35449.17066.11475.06152.22412.13159.33545.19848.11231.06714.22559.13037.335.20337.126.08423.24463.17774.36524.26856.08789.06616.17822.12695.26367.19726.20556.16846.40332.34644.59131.53443l71.99658,71.99682a7.99984,7.99984,0,0,1-11.31348,11.31348L136,91.31348V224a8,8,0,0,1-16,0V91.31348L61.65674,149.65674a7.99984,7.99984,0,0,1-11.31348-11.31348ZM224,40a8.00008,8.00008,0,0,0-8-8H40a8,8,0,0,0,0,16H216A8.00008,8.00008,0,0,0,224,40Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="128"
      y1="224.00373"
      x2="128"
      y2="72.00373"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="56 144.004 128 72.004 200 144.004"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="40"
      y1="40"
      x2="216"
      y2="40"
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
      x1="128"
      y1="224.00373"
      x2="128"
      y2="72.00373"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="56 144.004 128 72.004 200 144.004"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="40"
      y1="40"
      x2="216"
      y2="40"
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
      x1="128"
      y1="224.00373"
      x2="128"
      y2="72.00373"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="56 144.004 128 72.004 200 144.004"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="40"
      y1="40"
      x2="216"
      y2="40"
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

const ArrowLineUp = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ArrowLineUp.displayName = "ArrowLineUp";

export default ArrowLineUp;
