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
      d="M200,224.00005H55.99219a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8L152,32l56,56v128A8,8,0,0,1,200,224.00005Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="148 32 148 92 208.008 92"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle
      cx="123.9941"
      cy="148"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="140.96467"
      y1="164.97053"
      x2="159.79313"
      y2="183.79899"
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
    <polygon points="152 32 152 88 208.008 88 152 32" opacity="0.2" />
    <path
      d="M200,224.00005H55.99219a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8L152,32l56,56v128A8,8,0,0,1,200,224.00005Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="152 32 152 88 208.008 88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="143.79313"
      y1="167.79899"
      x2="159.79313"
      y2="183.79899"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="123.99414"
      cy="148"
      r="28"
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
    <path d="M213.58936,82.2749,157.65723,26.34277c-.08008-.08007-.167-.15039-.25-.22656-.10791-.09912-.21289-.20166-.32618-.29492-.07519-.06152-.15576-.11524-.23291-.17432-.13085-.10009-.26025-.20166-.397-.29394-.062-.04151-.12793-.07617-.19043-.11573-.15869-.10009-.31738-.1997-.4834-.28906-.04492-.02392-.09179-.04248-.13672-.06543-.1875-.09668-.377-.18945-.57275-.271-.03027-.0127-.0625-.022-.09326-.03418-.21045-.08448-.42383-.16358-.64258-.23-.03174-.00977-.06445-.01563-.09619-.02491-.2168-.063-.436-.12109-.66064-.166-.07129-.01416-.145-.02051-.2168-.03272-.18555-.03222-.37012-.06494-.55908-.08349A7.91349,7.91349,0,0,0,152,24H55.99219a16.01833,16.01833,0,0,0-16,16V216a16.01833,16.01833,0,0,0,16,16H200a16.01833,16.01833,0,0,0,16-16V88.15479c.001-.05225.00781-.10254.00781-.15479A7.97147,7.97147,0,0,0,213.58936,82.2749ZM165.44971,189.45605a8.00061,8.00061,0,0,1-11.31348,0l-10.98511-10.9851a35.95132,35.95132,0,1,1,11.32093-11.307l10.97766,10.97766A8.00032,8.00032,0,0,1,165.44971,189.45605ZM152,88V43.31348L196.68555,88Z" />
    <path d="M123.99414,128.00977a19.98432,19.98432,0,1,0,14.14209,5.84863A19.93593,19.93593,0,0,0,123.99414,128.00977Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M200,224.00005H55.99219a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8L152,32l56,56v128A8,8,0,0,1,200,224.00005Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="152 32 152 88 208.008 88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="143.79313"
      y1="167.79899"
      x2="159.79313"
      y2="183.79899"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle
      cx="123.99414"
      cy="148"
      r="28"
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
      d="M200,224.00005H55.99219a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8L152,32l56,56v128A8,8,0,0,1,200,224.00005Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="152 32 152 88 208.008 88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="143.79313"
      y1="167.79899"
      x2="159.79313"
      y2="183.79899"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle
      cx="123.99414"
      cy="148"
      r="28"
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
      d="M200,224.00005H55.99219a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8L152,32l56,56v128A8,8,0,0,1,200,224.00005Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="152 32 152 88 208.008 88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="143.79313"
      y1="167.79899"
      x2="159.79313"
      y2="183.79899"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="123.99414"
      cy="148"
      r="28"
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

const FileSearch = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

FileSearch.displayName = "FileSearch";

export default FileSearch;
