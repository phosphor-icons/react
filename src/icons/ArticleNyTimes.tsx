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
    <line
      x1="176"
      y1="88"
      x2="240"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="176"
      y1="128"
      x2="240"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="176"
      y1="168"
      x2="240"
      y2="168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="72"
      y1="208"
      x2="240"
      y2="208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M126.5,131.6A48,48,0,1,1,79.9,72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="79.9"
      y1="114.5"
      x2="79.9"
      y2="167.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M111.9,52a20,20,0,0,1,0,40l-64-40a20,20,0,0,0-6.2,39"
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
      x1="160"
      y1="104"
      x2="240"
      y2="104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="160"
      y1="136"
      x2="240"
      y2="136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="160"
      y1="168"
      x2="240"
      y2="168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="72"
      y1="200"
      x2="240"
      y2="200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M126.5,131.6A48,48,0,1,1,79.9,72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="79.9"
      y1="114.5"
      x2="79.9"
      y2="167.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M111.9,52a20,20,0,0,1,0,40l-64-40a20,20,0,0,0-6.2,39"
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
    <path d="M152,104a8,8,0,0,1,8-8h80a8,8,0,0,1,0,16H160A8,8,0,0,1,152,104Zm88,24H160a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16Zm0,32H160a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16Zm0,32H72a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM79.9,176A55.9,55.9,0,0,1,30.4,93.9,28,28,0,0,1,47.9,44a8.2,8.2,0,0,1,4.3,1.2L114,83.8A12,12,0,0,0,111.9,60a8,8,0,0,1,0-16,28,28,0,0,1,0,56,7.9,7.9,0,0,1-4.2-1.2l-30-18.7a40,40,0,0,0-5.8,79.1V114.5a8,8,0,0,1,8-8h0a8,8,0,0,1,8,8v44.7a40,40,0,0,0,30.9-29.5,7.9,7.9,0,0,1,9.6-5.8,8,8,0,0,1,5.9,9.6A56,56,0,0,1,79.9,176Zm-40-95.1A56.3,56.3,0,0,1,58.7,68.2l-12.8-8A12,12,0,0,0,35.9,72,11.8,11.8,0,0,0,39.9,80.9Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="160"
      y1="104"
      x2="240"
      y2="104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="160"
      y1="136"
      x2="240"
      y2="136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="160"
      y1="168"
      x2="240"
      y2="168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="72"
      y1="200"
      x2="240"
      y2="200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M126.5,131.6A48,48,0,1,1,79.9,72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="79.9"
      y1="114.5"
      x2="79.9"
      y2="167.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M111.9,52a20,20,0,0,1,0,40l-64-40a20,20,0,0,0-6.2,39"
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
      x1="160"
      y1="104"
      x2="240"
      y2="104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="160"
      y1="136"
      x2="240"
      y2="136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="160"
      y1="168"
      x2="240"
      y2="168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="72"
      y1="200"
      x2="240"
      y2="200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M126.5,131.6A48,48,0,1,1,79.9,72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="79.9"
      y1="114.5"
      x2="79.9"
      y2="167.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M111.9,52a20,20,0,0,1,0,40l-64-40a20,20,0,0,0-6.2,39"
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
      x1="160"
      y1="104"
      x2="240"
      y2="104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="160"
      y1="136"
      x2="240"
      y2="136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="160"
      y1="168"
      x2="240"
      y2="168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="72"
      y1="200"
      x2="240"
      y2="200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M126.5,131.6A48,48,0,1,1,79.9,72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="79.9"
      y1="114.5"
      x2="79.9"
      y2="167.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M111.9,52a20,20,0,0,1,0,40l-64-40a20,20,0,0,0-6.2,39"
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

const ArticleNyTimes = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ArticleNyTimes.displayName = "ArticleNyTimes";

export default ArticleNyTimes;
