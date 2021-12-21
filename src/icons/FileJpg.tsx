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
      d="M100,204h16a20,20,0,0,0,0-40H100v56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M60,164v36a20,20,0,0,1-40,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M212,198.9h8v8c-4.6,7.9-12.7,13.1-22,13.1-14.4,0-26-12.5-26-28s11.6-28,26-28a24.2,24.2,0,0,1,14,4.4"
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
    <path
      d="M104,200h16a16,16,0,0,0,0-32H104v48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M72,168v32a16,16,0,0,1-32,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M188,194h12v11.8A21.5,21.5,0,0,1,182,216c-12.2,0-22-10.7-22-24s9.8-24,22-24a20.3,20.3,0,0,1,12,3.9"
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
    <path d="M120,160H104a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0v-8h8a24,24,0,0,0,0-48Zm0,32h-8V176h8a8,8,0,0,1,0,16ZM80,168v32a24,24,0,0,1-48,0,8,8,0,0,1,16,0,8,8,0,0,0,16,0V168a8,8,0,0,1,16,0Zm128,26v11.8a7.5,7.5,0,0,1-1.3,4.3A29.4,29.4,0,0,1,182,224c-16.5,0-30-14.4-30-32s13.5-32,30-32a28.4,28.4,0,0,1,16.6,5.4,8,8,0,0,1-9.2,13A12.6,12.6,0,0,0,182,176c-7.7,0-14,7.2-14,16s6.3,16,14,16a13.3,13.3,0,0,0,10-4.8V202h-4a8,8,0,0,1,0-16h12A8,8,0,0,1,208,194Zm5.7-111.7-56-56A8.1,8.1,0,0,0,152,24H56A16,16,0,0,0,40,40v88a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V88A8.1,8.1,0,0,0,213.7,82.3ZM152,88V44l44,44Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M104,200h16a16,16,0,0,0,0-32H104v48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M72,168v32a16,16,0,0,1-32,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M188,194h12v11.8A21.5,21.5,0,0,1,182,216c-12.2,0-22-10.7-22-24s9.8-24,22-24a20.3,20.3,0,0,1,12,3.9"
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
      d="M104,200h16a16,16,0,0,0,0-32H104v48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M72,168v32a16,16,0,0,1-32,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M188,194h12v11.8A21.5,21.5,0,0,1,182,216c-12.2,0-22-10.7-22-24s9.8-24,22-24a20.3,20.3,0,0,1,12,3.9"
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
      d="M104,200h16a16,16,0,0,0,0-32H104v48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M72,168v32a16,16,0,0,1-32,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M188,194h12v11.8A21.5,21.5,0,0,1,182,216c-12.2,0-22-10.7-22-24s9.8-24,22-24a20.3,20.3,0,0,1,12,3.9"
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

const FileJpg = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

FileJpg.displayName = "FileJpg";

export default FileJpg;
