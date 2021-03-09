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
      x2="64"
      y2="200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="64 100 64 200 164 200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="216"
      y1="40.00373"
      x2="40"
      y2="40.00373"
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
      x1="176"
      y1="88"
      x2="64"
      y2="200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="64 100 64 200 164 200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="216"
      y1="40.00373"
      x2="40"
      y2="40.00373"
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
    <path d="M181.65723,82.34277a8.00122,8.00122,0,0,1,0,11.31446L83.31445,192H164a8,8,0,0,1,0,16H64c-.26367,0-.52686-.014-.78955-.03986-.11914-.01171-.23486-.03405-.353-.051-.14013-.02014-.28076-.0365-.42041-.06415-.13428-.02667-.26513-.06366-.397-.097-.12109-.03046-.24268-.057-.36231-.09308-.1289-.03913-.2539-.08759-.37988-.133-.12012-.043-.24121-.08246-.35937-.13141-.1167-.0484-.22852-.10522-.34229-.15893-.12353-.058-.24756-.11273-.36816-.17737-.10645-.057-.20752-.12207-.311-.18366-.1206-.07189-.24267-.14032-.36035-.21911-.11035-.07379-.21387-.15625-.32031-.23529-.10352-.07678-.209-.14874-.30908-.23114-.16163-.13288-.315-.27564-.46534-.4206-.03906-.03717-.08056-.06909-.11914-.10717-.03759-.038-.06933-.07953-.10644-.11805-.145-.15087-.28809-.304-.4209-.46594-.084-.10235-.15772-.21014-.23584-.31555-.07764-.10413-.1582-.20532-.23047-.31329-.08057-.11994-.1499-.24427-.22314-.36737-.06006-.10126-.124-.20008-.17969-.30414-.06592-.12256-.12158-.24872-.18018-.3739-.05273-.112-.10888-.222-.15625-.33686-.0498-.12-.08984-.24273-.1333-.36462-.04492-.12439-.09277-.24719-.13135-.37439-.03662-.12189-.064-.24567-.09472-.36877-.03272-.13-.06934-.25843-.09522-.39081-.02832-.14093-.04492-.28327-.06494-.4253-.0166-.11639-.03906-.23089-.05029-.34887-.02588-.26251-.04-.52588-.04-.78937V100a8,8,0,0,1,16,0v80.68579l98.34277-98.343A8.003,8.003,0,0,1,181.65723,82.34277ZM216,32.00391H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <line
      x1="176"
      y1="88"
      x2="64"
      y2="200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="64 100 64 200 164 200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="216"
      y1="40.00373"
      x2="40"
      y2="40.00373"
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
      x1="176"
      y1="88"
      x2="64"
      y2="200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="64 100 64 200 164 200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="216"
      y1="40.00373"
      x2="40"
      y2="40.00373"
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
      x1="176"
      y1="88"
      x2="64"
      y2="200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="64 100 64 200 164 200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="216"
      y1="40.00373"
      x2="40"
      y2="40.00373"
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

const ArrowLineDownLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ArrowLineDownLeft.displayName = "ArrowLineDownLeft";

export default ArrowLineDownLeft;
