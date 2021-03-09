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
      points="160 128 208 80 160 32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="64 224 64 80 208 80"
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
    <polyline
      points="160 128 208 80 160 32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="64 224 64 80 208 80"
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
    <path d="M214.18506,85.07251c.083-.10059.15527-.20654.23193-.31006.07862-.10571.16065-.20862.23438-.31836.08056-.1206.15088-.24585.22461-.36987.05957-.1001.12207-.19751.17724-.30029.06787-.126.125-.25538.18506-.384.05078-.1084.10547-.2146.15137-.32568.05127-.12463.09326-.252.13867-.37842.04248-.11987.08887-.238.126-.36059.03857-.12769.06738-.25757.09912-.38672.03125-.124.06592-.24622.09131-.37244.02978-.15088.04785-.30334.06933-.45544.01465-.10645.03516-.21094.0459-.31861a8.02276,8.02276,0,0,0,0-1.584c-.01074-.10767-.03125-.21216-.0459-.31861-.02148-.1521-.03955-.30456-.06933-.45544-.02539-.12622-.06006-.24841-.09131-.37244-.03174-.12915-.06055-.259-.09912-.38672-.03711-.12255-.0835-.24072-.126-.36059-.04541-.12647-.0874-.25379-.13867-.37842-.0459-.11108-.10059-.21728-.15137-.32568-.06006-.12866-.11719-.25806-.18506-.384-.05517-.10278-.11767-.20019-.17724-.30029-.07373-.124-.144-.24927-.22461-.36987-.07373-.10974-.15576-.21265-.23438-.31836-.07666-.10352-.14892-.20947-.23193-.31006-.14844-.18091-.30664-.35327-.47022-.52026-.02-.02076-.03711-.04346-.05761-.064l-48-48a8.00018,8.00018,0,1,0-11.31446,11.31348L188.68652,72H64a8.00008,8.00008,0,0,0-8,8V224a8,8,0,0,0,16,0V88H188.68652l-34.34375,34.34326a8.00018,8.00018,0,0,0,11.31446,11.31348l48-48c.0205-.02051.03759-.04321.05761-.064C213.87842,85.42578,214.03662,85.25342,214.18506,85.07251Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="160 128 208 80 160 32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="64 224 64 80 208 80"
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
    <polyline
      points="160 128 208 80 160 32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="64 224 64 80 208 80"
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
    <polyline
      points="160 128 208 80 160 32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="64 224 64 80 208 80"
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

const ArrowElbowUpRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ArrowElbowUpRight.displayName = "ArrowElbowUpRight";

export default ArrowElbowUpRight;
