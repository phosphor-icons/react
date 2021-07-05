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
      x1="108"
      y1="128"
      x2="215.99902"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="108"
      y1="64"
      x2="215.99902"
      y2="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="107.99902"
      y1="192"
      x2="215.99902"
      y2="192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="40 60 56 52 56 107.994"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M41.10018,152.55059A14.00226,14.00226,0,1,1,65.609,165.82752L40,200H68"
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
      x1="104"
      y1="128"
      x2="215.99902"
      y2="128"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="104"
      y1="64"
      x2="215.99902"
      y2="64"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="103.99902"
      y1="192"
      x2="215.99902"
      y2="192"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="40 60 56 52 56 107.994"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M41.10018,152.55059A14.00226,14.00226,0,1,1,65.609,165.82752L40,200H68"
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
    <path d="M223.999,128a8.00039,8.00039,0,0,1-8,8H104a8,8,0,0,1,0-16H215.999A8.00039,8.00039,0,0,1,223.999,128ZM104,72H215.999a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16ZM215.999,184h-112a8,8,0,1,0,0,16h112a8,8,0,0,0,0-16ZM43.57764,67.15527,48,64.94434v43.0498a8,8,0,1,0,16,0V52a7.99928,7.99928,0,0,0-11.57764-7.15527l-16,8a7.99984,7.99984,0,1,0,7.15528,14.31054ZM72.23828,170.30566a22.00226,22.00226,0,1,0-38.50635-20.87109A8,8,0,1,0,48.46826,155.667a6.00233,6.00233,0,1,1,10.59717,5.55176l-25.46729,33.9834A8.00013,8.00013,0,0,0,40,208H68a8,8,0,0,0,0-16H55.99219l16.01855-21.375Q72.12867,170.46827,72.23828,170.30566Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="104"
      y1="128"
      x2="215.99902"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="104"
      y1="64"
      x2="215.99902"
      y2="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="103.99902"
      y1="192"
      x2="215.99902"
      y2="192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="40 60 56 52 56 107.994"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M41.10018,152.55059A14.00226,14.00226,0,1,1,65.609,165.82752L40,200H68"
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
      x1="104"
      y1="128"
      x2="215.99902"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="104"
      y1="64"
      x2="215.99902"
      y2="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="103.99902"
      y1="192"
      x2="215.99902"
      y2="192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="40 60 56 52 56 107.994"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M41.10018,152.55059A14.00226,14.00226,0,1,1,65.609,165.82752L40,200H68"
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
      x1="104"
      y1="128"
      x2="215.99902"
      y2="128"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="104"
      y1="64"
      x2="215.99902"
      y2="64"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="103.99902"
      y1="192"
      x2="215.99902"
      y2="192"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="40 60 56 52 56 107.994"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M41.10018,152.55059A14.00226,14.00226,0,1,1,65.609,165.82752L40,200H68"
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

const ListNumbers = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ListNumbers.displayName = "ListNumbers";

export default ListNumbers;
