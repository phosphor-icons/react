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
      d="M124,216c13.25483,0,24-12,24-28s-10.74517-28-24-28H112v56Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="216 160 184 160 184 216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="212"
      y1="196"
      x2="184"
      y2="196"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M47.99219,124.00005V48a8,8,0,0,1,8-8L152,40l56,56v28.00005"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="148 40 148 100 208.008 100"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M40,200H56a20,20,0,0,0,0-40H40v56"
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
    <polygon points="152 40 152 96 208.008 96 152 40" opacity="0.2" />
    <path
      d="M47.99219,136V48a8,8,0,0,1,8-8L152,40l56,56v40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="152 40 152 96 208.008 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M48,200H64a16,16,0,0,0,0-32H48v48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M124,216a24,24,0,0,0,0-48H112v48Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="208 168 180 168 180 216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="204"
      y1="196"
      x2="180"
      y2="196"
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
    <path d="M213.58936,90.2749,157.65723,34.34277c-.08008-.08007-.167-.15039-.25-.22656-.10791-.09912-.21289-.20166-.32618-.29492-.07519-.06152-.15576-.11524-.23291-.17432-.13085-.10009-.26025-.20166-.397-.29394-.062-.04151-.12793-.07617-.19043-.11573-.15869-.10009-.31738-.1997-.4834-.28906-.04492-.02392-.09179-.04248-.13672-.06543-.1875-.09668-.377-.18945-.57275-.271-.03027-.0127-.0625-.022-.09326-.03418-.21045-.08448-.42383-.16358-.64258-.23-.03174-.00977-.06445-.01563-.09619-.02491-.2168-.063-.436-.12109-.66064-.166-.07129-.01416-.145-.02051-.2168-.03272-.18555-.03222-.37012-.06494-.55908-.08349A7.91349,7.91349,0,0,0,152,32H55.99219a16.00008,16.00008,0,0,0-16,16v88a7.99989,7.99989,0,0,0,8,8H208a7.99989,7.99989,0,0,0,8-8V96.15479c.001-.05225.00781-.10254.00781-.15479A7.97147,7.97147,0,0,0,213.58936,90.2749ZM152,96V51.31348L196.68555,96ZM64,160H48a8.00039,8.00039,0,0,0-8,8v48a8,8,0,0,0,16,0v-8h8a24,24,0,0,0,0-48Zm0,32H56V176h8a8,8,0,0,1,0,16Zm60-32H112a8.00039,8.00039,0,0,0-8,8v48a8.00039,8.00039,0,0,0,8,8h12a32,32,0,0,0,0-64Zm0,48h-4V176h4a16,16,0,0,1,0,32Zm92-40a8.00039,8.00039,0,0,1-8,8H188v12h16a8,8,0,0,1,0,16H188v12a8,8,0,0,1-16,0V168a8.00039,8.00039,0,0,1,8-8h28A8.00039,8.00039,0,0,1,216,168Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M47.99219,136V48a8,8,0,0,1,8-8L152,40l56,56v40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="152 40 152 96 208.008 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M48,200H64a16,16,0,0,0,0-32H48v48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M124,216a24,24,0,0,0,0-48H112v48Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="208 168 180 168 180 216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="204"
      y1="196"
      x2="180"
      y2="196"
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
      d="M47.99219,136V48a8,8,0,0,1,8-8L152,40l56,56v40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="152 40 152 96 208.008 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M48,200H64a16,16,0,0,0,0-32H48v48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M124,216a24,24,0,0,0,0-48H112v48Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="208 168 180 168 180 216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="204"
      y1="196"
      x2="180"
      y2="196"
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
      d="M47.99219,136V48a8,8,0,0,1,8-8L152,40l56,56v40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="152 40 152 96 208.008 96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M48,200H64a16,16,0,0,0,0-32H48v48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M124,216a24,24,0,0,0,0-48H112v48Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="208 168 180 168 180 216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="204"
      y1="196"
      x2="180"
      y2="196"
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

const FilePdf = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

FilePdf.displayName = "FilePdf";

export default FilePdf;
