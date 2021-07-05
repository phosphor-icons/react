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
    <path
      d="M186.38079,196.42923l42.66667-64a8,8,0,0,0,0-8.87521l-42.66667-64a8,8,0,0,0-6.6564-3.5624H24.00586L69.0477,123.56221a8,8,0,0,1-.00048,8.8752L24.00586,199.99162H179.72439A8,8,0,0,0,186.38079,196.42923Z"
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
      d="M186.38079,196.42923l42.66667-64a8,8,0,0,0,0-8.87521l-42.66667-64a8,8,0,0,0-6.6564-3.5624H24.00586L69.0477,123.56221a8,8,0,0,1-.00048,8.8752L24.00586,199.99162H179.72439A8,8,0,0,0,186.38079,196.42923Z"
      opacity="0.2"
    />
    <path
      d="M186.38079,196.42923l42.66667-64a8,8,0,0,0,0-8.87521l-42.66667-64a8,8,0,0,0-6.6564-3.5624H24.00586L69.0477,123.56221a8,8,0,0,1-.00048,8.8752L24.00586,199.99162H179.72439A8,8,0,0,0,186.38079,196.42923Z"
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
    <path d="M235.7041,136.86719l-42.667,64h0a15.96753,15.96753,0,0,1-13.3125,7.124H24.00586a7.99977,7.99977,0,0,1-6.65625-12.4375L62.39062,128,17.34912,60.42871a8.00013,8.00013,0,0,1,6.65674-12.4375H179.72461a15.96734,15.96734,0,0,1,13.3125,7.125l42.667,64A15.96086,15.96086,0,0,1,235.7041,136.86719Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M186.38079,196.42923l42.66667-64a8,8,0,0,0,0-8.87521l-42.66667-64a8,8,0,0,0-6.6564-3.5624H24.00586L69.0477,123.56221a8,8,0,0,1-.00048,8.8752L24.00586,199.99162H179.72439A8,8,0,0,0,186.38079,196.42923Z"
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
    <path
      d="M186.38079,196.42923l42.66667-64a8,8,0,0,0,0-8.87521l-42.66667-64a8,8,0,0,0-6.6564-3.5624H24.00586L69.0477,123.56221a8,8,0,0,1-.00048,8.8752L24.00586,199.99162H179.72439A8,8,0,0,0,186.38079,196.42923Z"
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
    <path
      d="M186.38079,196.42923l42.66667-64a8,8,0,0,0,0-8.87521l-42.66667-64a8,8,0,0,0-6.6564-3.5624H24.00586L69.0477,123.56221a8,8,0,0,1-.00048,8.8752L24.00586,199.99162H179.72439A8,8,0,0,0,186.38079,196.42923Z"
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

const TagChevron = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

TagChevron.displayName = "TagChevron";

export default TagChevron;
