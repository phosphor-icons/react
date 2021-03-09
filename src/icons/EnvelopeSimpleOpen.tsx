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
      d="M224,96V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V96l96-64Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polyline
      points="224 96 145.455 152 110.545 152 32 96"
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
      points="224 96 145.455 152 110.545 152 32 96 128 32 224 96"
      opacity="0.2"
    />
    <path
      d="M32,96V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96L128,32Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="224 96 145.455 152 110.545 152 32 96"
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
    <path d="M231.99512,95.92334a7.928,7.928,0,0,0-.22608-1.81494c-.0166-.06885-.03759-.13672-.05615-.20508q-.09154-.33618-.2124-.666c-.03028-.08154-.061-.16162-.09326-.24218-.0835-.20459-.17725-.40625-.27832-.606-.03955-.07764-.07618-.15625-.11768-.23242-.11914-.21729-.25146-.4292-.39307-.6377-.03125-.04638-.05761-.09521-.08984-.14062l-.01465-.023a8.1872,8.1872,0,0,0-.55469-.68945c-.04345-.04883-.0913-.09278-.13574-.13965-.16845-.17969-.34228-.35108-.52344-.51172-.061-.0542-.124-.105-.18652-.15723q-.27686-.23-.56933-.4331c-.03711-.02539-.06934-.05567-.10645-.08057l-96-64a8.00131,8.00131,0,0,0-8.875,0l-96,64c-.03613.02393-.06689.05322-.102.07764q-.29736.20508-.57666.43847c-.061.05078-.12256.10059-.18164.15284-.18311.1621-.35889.335-.52832.5166-.04346.0459-.08985.08886-.13233.13574a8.114,8.114,0,0,0-.55517.69043l-.01465.023c-.03223.04541-.05859.09424-.08984.14062-.14161.2085-.27393.42041-.39307.6377-.0415.07617-.07813.15478-.11768.23242-.10107.19971-.19482.40137-.27832.606-.03222.08056-.063.16064-.09326.24218q-.12157.33033-.2124.666c-.01856.06836-.03955.13623-.05615.20508a7.928,7.928,0,0,0-.22608,1.81494C24.00439,95.94922,24,95.97412,24,96V200a16.01833,16.01833,0,0,0,16,16H216a16.01833,16.01833,0,0,0,16-16V96C232,95.97412,231.99561,95.94922,231.99512,95.92334ZM40,200V111.52881l65.90137,46.98486A8.00118,8.00118,0,0,0,110.5459,160h34.9082a8.00118,8.00118,0,0,0,4.64453-1.48633L216,111.52881V200Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M32,96V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96L128,32Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polyline
      points="224 96 145.455 152 110.545 152 32 96"
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
      d="M32,96V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96L128,32Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polyline
      points="224 96 145.455 152 110.545 152 32 96"
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
      d="M32,96V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96L128,32Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="224 96 145.455 152 110.545 152 32 96"
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

const EnvelopeSimpleOpen = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => <IconBase ref={ref} {...props} renderPath={renderPath} />
);

EnvelopeSimpleOpen.displayName = "EnvelopeSimpleOpen";

export default EnvelopeSimpleOpen;
