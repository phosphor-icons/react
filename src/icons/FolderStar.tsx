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
      d="M98.4,46.7,128,80H32V52a8,8,0,0,1,8-8H92.4A8,8,0,0,1,98.4,46.7Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M112.6,208H39.4a7.4,7.4,0,0,1-7.4-7.4V80H216a8,8,0,0,1,8,8v24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polygon
      points="188 198.5 217.7 216 209.6 183.4 236 161.6 201.3 158.9 188 128 174.7 158.9 140 161.6 166.4 183.4 158.3 216 188 198.5"
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
    <polygon
      points="188 198.5 217.7 216 209.6 183.4 236 161.6 201.3 158.9 188 128 174.7 158.9 140 161.6 166.4 183.4 158.3 216 188 198.5"
      opacity="0.2"
    />
    <path
      d="M32,80V56a8,8,0,0,1,8-8H92.7a7.9,7.9,0,0,1,5.6,2.3L128,80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M120.6,208H39.4a7.4,7.4,0,0,1-7.4-7.4V80H216a8,8,0,0,1,8,8v32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polygon
      points="188 198.5 217.7 216 209.6 183.4 236 161.6 201.3 158.9 188 128 174.7 158.9 140 161.6 166.4 183.4 158.3 216 188 198.5"
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
    <path d="M120.6,200H40V88H216v32a8,8,0,0,0,16,0V88a16,16,0,0,0-16-16H131.3L104,44.7A15.9,15.9,0,0,0,92.7,40H40A16,16,0,0,0,24,56V200.6A15.4,15.4,0,0,0,39.4,216h81.2a8,8,0,1,0,0-16ZM92.7,56l16,16H40V56ZM241.1,167.8l-22.5,18.6,6.8,27.7a7.9,7.9,0,0,1-3,8.3,7.4,7.4,0,0,1-4.7,1.6,8.7,8.7,0,0,1-4.1-1.1L188,207.8l-25.6,15.1a8,8,0,0,1-8.8-.5,7.9,7.9,0,0,1-3-8.3l6.8-27.7-22.5-18.6a8.1,8.1,0,0,1,4.5-14.2l29.8-2.3,11.5-26.5a8,8,0,0,1,14.6,0l11.5,26.5,29.8,2.3a8.1,8.1,0,0,1,4.5,14.2Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M32,80V56a8,8,0,0,1,8-8H92.7a7.9,7.9,0,0,1,5.6,2.3L128,80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M120.6,208H39.4a7.4,7.4,0,0,1-7.4-7.4V80H216a8,8,0,0,1,8,8v32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polygon
      points="188 198.5 217.7 216 209.6 183.4 236 161.6 201.3 158.9 188 128 174.7 158.9 140 161.6 166.4 183.4 158.3 216 188 198.5"
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
      d="M32,80V56a8,8,0,0,1,8-8H92.7a7.9,7.9,0,0,1,5.6,2.3L128,80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M120.6,208H39.4a7.4,7.4,0,0,1-7.4-7.4V80H216a8,8,0,0,1,8,8v32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polygon
      points="188 198.5 217.7 216 209.6 183.4 236 161.6 201.3 158.9 188 128 174.7 158.9 140 161.6 166.4 183.4 158.3 216 188 198.5"
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
      d="M32,80V56a8,8,0,0,1,8-8H92.7a7.9,7.9,0,0,1,5.6,2.3L128,80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M120.6,208H39.4a7.4,7.4,0,0,1-7.4-7.4V80H216a8,8,0,0,1,8,8v32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polygon
      points="188 198.5 217.7 216 209.6 183.4 236 161.6 201.3 158.9 188 128 174.7 158.9 140 161.6 166.4 183.4 158.3 216 188 198.5"
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

const FolderStar = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

FolderStar.displayName = "FolderStar";

export default FolderStar;
