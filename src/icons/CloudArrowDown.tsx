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
      points="118.059 174.059 152 208 185.941 174.059"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="152"
      y1="128"
      x2="152"
      y2="208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M96,208H72A56,56,0,1,1,85.91924,97.74352"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M80,128a80,80,0,1,1,144.00241,48.00459"
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
    <path
      d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.91924,97.74352"
      opacity="0.2"
    />
    <polyline
      points="118.053 174.059 151.994 208 185.935 174.059"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="151.99414"
      y1="128"
      x2="151.99414"
      y2="208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M95.99414,208h-24A56,56,0,1,1,85.91338,97.74352"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M79.99414,128a80,80,0,1,1,144.00241,48.00459"
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
    <path d="M160.001,40A88.102,88.102,0,0,0,81.28809,88.6709l-.00538-.00049A87.46336,87.46336,0,0,0,71.98926,128a8,8,0,0,1-16,0,103.43674,103.43674,0,0,1,7.78-39.45264A63.99161,63.99161,0,0,0,72.001,216h88a88,88,0,0,0,0-176ZM191.5918,163.71582l-33.937,33.937a7.95865,7.95865,0,0,1-.59205.5354c-.08374.06885-.17224.12818-.258.19312-.12256.09253-.24317.18725-.3711.273-.10766.07177-.2196.134-.32983.20019-.11316.06812-.22412.13892-.34082.20142-.11523.06152-.23377.11377-.35132.16919-.11877.05639-.23584.11548-.35766.166-.11451.04737-.23169.08545-.34778.12744-.13.04688-.25843.09668-.39136.13672-.11694.0354-.23572.06128-.35376.09107-.1344.03393-.26721.07153-.40418.09863-.13891.02759-.27929.044-.41931.064-.11816.01684-.23437.03955-.35412.05127-.26245.02587-.52588.03979-.78931.03979s-.52685-.01392-.78931-.03979c-.11975-.01172-.236-.03443-.35412-.05127-.14-.02-.2804-.03638-.41931-.064-.137-.0271-.26978-.0647-.40418-.09863-.118-.02979-.23681-.05567-.35376-.09107-.13293-.04-.26135-.08984-.39136-.13672-.11608-.042-.23327-.08007-.34777-.12744-.12183-.05053-.2389-.10962-.35767-.166-.11755-.05542-.23608-.10767-.35132-.16919-.1167-.0625-.22766-.1333-.34082-.20142-.11023-.06616-.22217-.12842-.32983-.20019-.12793-.0857-.24854-.18042-.3711-.273-.08581-.06494-.17431-.12427-.258-.19312a7.95651,7.95651,0,0,1-.592-.5354l-33.937-33.937A7.99984,7.99984,0,1,1,123.71,152.40234l20.28418,20.28418V112a8,8,0,0,1,16,0v60.68652l20.28418-20.28418a7.99984,7.99984,0,1,1,11.31348,11.31348Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="118.059 174.059 152 208 185.941 174.059"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="152"
      y1="128"
      x2="152"
      y2="208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M96,208H72A56,56,0,1,1,85.91924,97.74352"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M80,128a80,80,0,1,1,144.00241,48.00459"
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
      points="118.059 174.059 152 208 185.941 174.059"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="152"
      y1="128"
      x2="152"
      y2="208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M96,208H72A56,56,0,1,1,85.91924,97.74352"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M80,128a80,80,0,1,1,144.00241,48.00459"
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
      points="118.059 174.059 152 208 185.941 174.059"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="152"
      y1="128"
      x2="152"
      y2="208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M96,208H72A56,56,0,1,1,85.91924,97.74352"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M80,128a80,80,0,1,1,144.00241,48.00459"
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

const CloudArrowDown = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

CloudArrowDown.displayName = "CloudArrowDown";

export default CloudArrowDown;
