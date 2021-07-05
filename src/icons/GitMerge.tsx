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
      cx="67.99512"
      cy="188"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle
      cx="67.99512"
      cy="68"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle
      cx="187.99756"
      cy="140"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M159.99756,144H130.47711a48,48,0,0,1-36.87462-17.27115L67.99512,96v64"
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
    <circle cx="67.99023" cy="68" r="28" opacity="0.2" />
    <circle
      cx="67.99023"
      cy="188"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="67.99023"
      cy="68"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="187.99268"
      cy="140"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M159.99268,144H130.47223a48,48,0,0,1-36.87462-17.27115L67.99023,96v64"
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
    <path d="M187.99268,104a36.04766,36.04766,0,0,0-35.77247,32h-21.748a39.89636,39.89636,0,0,1-30.72949-14.39258L82.51123,100.93005a35.99422,35.99422,0,1,0-22.52148,2.16285v49.8142a36,36,0,1,0,16,0V118.09668l11.46191,13.75293A55.84986,55.84986,0,0,0,130.47217,152h23.585a35.99769,35.99769,0,1,0,33.93555-48ZM87.98975,188a20,20,0,1,1-20-20A20.02229,20.02229,0,0,1,87.98975,188Zm100.00293-28a20,20,0,1,1,20-20A20.02229,20.02229,0,0,1,187.99268,160Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="67.99756"
      cy="188"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle
      cx="67.99756"
      cy="68"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle
      cx="188"
      cy="140"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M160,144H130.47956a48,48,0,0,1-36.87463-17.27115L67.99756,96v64"
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
      cx="68"
      cy="188"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle
      cx="68"
      cy="68"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle
      cx="188.00244"
      cy="140"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M160.00244,144H130.482a48,48,0,0,1-36.87462-17.27115L68,96v64"
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
      cx="68"
      cy="188"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="68"
      cy="68"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="188.00244"
      cy="140"
      r="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M160.00244,144H130.482a48,48,0,0,1-36.87462-17.27115L68,96v64"
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

const GitMerge = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

GitMerge.displayName = "GitMerge";

export default GitMerge;
