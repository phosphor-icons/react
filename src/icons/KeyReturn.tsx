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
      points="176 104 176 136 80 136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="104 112 80 136 104 160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <rect
      x="32"
      y="48"
      width="192"
      height="160"
      rx="8"
      strokeWidth="24"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <rect x="32" y="48" width="192" height="160" rx="8" opacity="0.2" />
    <polyline
      points="176 104 176 136 80 136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="104 112 80 136 104 160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="32"
      y="48"
      width="192"
      height="160"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M216,40H40A16.01833,16.01833,0,0,0,24,56V200a16.01833,16.01833,0,0,0,16,16H216a16.01833,16.01833,0,0,0,16-16V56A16.01833,16.01833,0,0,0,216,40Zm-32,96a8.00039,8.00039,0,0,1-8,8H99.314l10.34327,10.34277a8.00053,8.00053,0,0,1-11.31446,11.31446l-24-24c-.05664-.05664-.10449-.11768-.15869-.17578-.12549-.13282-.251-.26514-.36719-.40625-.0913-.11084-.17138-.22706-.25537-.3418-.07031-.09522-.14453-.188-.21093-.28662-.085-.12647-.15918-.25782-.23584-.38819-.05567-.09423-.11524-.186-.167-.2832-.06933-.12891-.12841-.26172-.18994-.39355-.04931-.10547-.10205-.209-.147-.31641-.05225-.12695-.09522-.25586-.14063-.38477-.042-.11816-.0874-.23437-.124-.355-.03906-.1289-.06787-.25976-.10058-.39013-.03077-.12305-.06543-.24414-.09034-.36914-.02978-.15186-.04834-.30469-.06933-.45752-.01465-.106-.03516-.20948-.0459-.3169a8.02276,8.02276,0,0,1,0-1.584c.01074-.10742.03125-.21094.0459-.3169.021-.15283.03955-.30566.06933-.45752.02491-.125.05957-.24609.09034-.36914.03271-.13037.06152-.26123.10058-.39013.03662-.12061.082-.23682.124-.355.04541-.12891.08838-.25782.14063-.38477.04492-.10742.09766-.21094.147-.31641.06153-.13183.12061-.26464.18994-.39355.05176-.09717.11133-.189.167-.2832.07666-.13037.15087-.26172.23584-.38819.0664-.09863.14062-.1914.21093-.28662.084-.11474.16407-.231.25537-.3418.11622-.14111.2417-.27343.36719-.40625.0542-.0581.10205-.11914.15869-.17578l24-24a8.00053,8.00053,0,0,1,11.31446,11.31446L99.314,128H168V104a8,8,0,0,1,16,0Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="176 104 176 136 80 136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="104 112 80 136 104 160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <rect
      x="32"
      y="48"
      width="192"
      height="160"
      rx="8"
      strokeWidth="12"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <polyline
      points="176 104 176 136 80 136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="104 112 80 136 104 160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <rect
      x="32"
      y="48"
      width="192"
      height="160"
      rx="8"
      strokeWidth="8"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <polyline
      points="176 104 176 136 80 136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="104 112 80 136 104 160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="32"
      y="48"
      width="192"
      height="160"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const KeyReturn = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

KeyReturn.displayName = "KeyReturn";

export default KeyReturn;
