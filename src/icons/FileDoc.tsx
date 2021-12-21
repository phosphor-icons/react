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
    <polyline
      points="148 36 148 100 212 100"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M44,124V44a8,8,0,0,1,8-8H156l56,56v32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M28,220V164H44a28,28,0,0,1,0,56Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M228,215.6a24.2,24.2,0,0,1-14,4.4c-14.4,0-26-12.5-26-28s11.6-28,26-28a24.2,24.2,0,0,1,14,4.4"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <ellipse
      cx="130"
      cy="192"
      rx="26"
      ry="28"
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
      d="M58,216a24,24,0,0,0,0-48H44v48Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <ellipse
      cx="130"
      cy="192"
      rx="22"
      ry="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M212,210.5a21,21,0,0,1-14,5.5c-12.2,0-22-10.7-22-24s9.8-24,22-24a21,21,0,0,1,14,5.5"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polygon points="152 32 152 88 208 88 152 32" opacity="0.2" />
    <path
      d="M48,128V40a8,8,0,0,1,8-8h96l56,56v40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="152 32 152 88 208 88"
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
    <path d="M58,160H44a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8H58a32,32,0,0,0,0-64Zm0,48H52V176h6a16,16,0,0,1,0,32Zm72-48c-16.5,0-30,14.4-30,32s13.5,32,30,32,30-14.4,30-32S146.5,160,130,160Zm0,48c-7.7,0-14-7.2-14-16s6.3-16,14-16,14,7.2,14,16S137.7,208,130,208Zm87.9-2.8a8,8,0,0,1-.5,11.3A29.3,29.3,0,0,1,198,224c-16.5,0-30-14.4-30-32s13.5-32,30-32a29.3,29.3,0,0,1,19.4,7.5,8,8,0,0,1,.5,11.3,7.9,7.9,0,0,1-11.3.6A12.9,12.9,0,0,0,198,176c-7.7,0-14,7.2-14,16s6.3,16,14,16a12.9,12.9,0,0,0,8.6-3.4A7.9,7.9,0,0,1,217.9,205.2ZM48,136H208a8,8,0,0,0,8-8V88a8.1,8.1,0,0,0-2.3-5.7l-56-56A8.1,8.1,0,0,0,152,24H56A16,16,0,0,0,40,40v88A8,8,0,0,0,48,136ZM152,44l44,44H152Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M58,216a24,24,0,0,0,0-48H44v48Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <ellipse
      cx="130"
      cy="192"
      rx="22"
      ry="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M212,210.5a21,21,0,0,1-14,5.5c-12.2,0-22-10.7-22-24s9.8-24,22-24a21,21,0,0,1,14,5.5"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M48,128V40a8,8,0,0,1,8-8h96l56,56v40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="152 32 152 88 208 88"
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
      d="M58,216a24,24,0,0,0,0-48H44v48Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <ellipse
      cx="130"
      cy="192"
      rx="22"
      ry="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M212,210.5a21,21,0,0,1-14,5.5c-12.2,0-22-10.7-22-24s9.8-24,22-24a21,21,0,0,1,14,5.5"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M48,128V40a8,8,0,0,1,8-8h96l56,56v40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="152 32 152 88 208 88"
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
      d="M58,216a24,24,0,0,0,0-48H44v48Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <ellipse
      cx="130"
      cy="192"
      rx="22"
      ry="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M212,210.5a21,21,0,0,1-14,5.5c-12.2,0-22-10.7-22-24s9.8-24,22-24a21,21,0,0,1,14,5.5"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M48,128V40a8,8,0,0,1,8-8h96l56,56v40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="152 32 152 88 208 88"
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

const FileDoc = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

FileDoc.displayName = "FileDoc";

export default FileDoc;
