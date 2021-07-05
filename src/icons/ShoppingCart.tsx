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
      d="M184,184H69.81818L41.92162,30.56892A8,8,0,0,0,34.05066,24H16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle
      cx="80"
      cy="204"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle
      cx="184"
      cy="204"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M62.54543,144H188.10132a16,16,0,0,0,15.74192-13.13783L216,64H48"
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
      d="M62.54543,144H188.10132a16,16,0,0,0,15.74192-13.13783L216,64H48Z"
      opacity="0.2"
    />
    <path
      d="M184,184H69.81818L41.92162,30.56892A8,8,0,0,0,34.05066,24H16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="80"
      cy="204"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="184"
      cy="204"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M62.54543,144H188.10132a16,16,0,0,0,15.74192-13.13783L216,64H48"
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
    <path d="M223.87109,65.43115l-12.15722,66.86231A23.98711,23.98711,0,0,1,188.10156,152H72.13135l4.36377,24H184a24.01161,24.01161,0,1,1-22.624,16H102.624a24.00309,24.00309,0,1,1-40.85986-7.57666L34.05078,32H16a8,8,0,0,1,0-16H34.05078A15.9918,15.9918,0,0,1,49.793,29.13818L54.67676,56H216a8.00076,8.00076,0,0,1,7.87109,9.43115Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M184,184H69.81818L41.92162,30.56892A8,8,0,0,0,34.05066,24H16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle
      cx="80"
      cy="204"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle
      cx="184"
      cy="204"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M62.54543,144H188.10132a16,16,0,0,0,15.74192-13.13783L216,64H48"
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
      d="M184,184H69.81818L41.92162,30.56892A8,8,0,0,0,34.05066,24H16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle
      cx="80"
      cy="204"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle
      cx="184"
      cy="204"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M62.54543,144H188.10132a16,16,0,0,0,15.74192-13.13783L216,64H48"
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
      d="M184,184H69.81818L41.92162,30.56892A8,8,0,0,0,34.05066,24H16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="80"
      cy="204"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="184"
      cy="204"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M62.54543,144H188.10132a16,16,0,0,0,15.74192-13.13783L216,64H48"
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

const ShoppingCart = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ShoppingCart.displayName = "ShoppingCart";

export default ShoppingCart;
