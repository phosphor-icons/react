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
      d="M83.77207,61.31625a48.00774,48.00774,0,1,1,84.03029,45.521v0L80,224v-.01149h96"
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
      d="M83.77207,61.31625a48.00774,48.00774,0,1,1,84.03029,45.521v0L80,224v-.01149h96"
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
    <path d="M184,223.98828a8.00008,8.00008,0,0,1-8,8H80.43555q-.21827.01245-.43653.01221a8.00346,8.00346,0,0,1-6.26757-12.9751l87.54687-116.82178a40.00778,40.00778,0,1,0-70.1377-37.771A8,8,0,1,1,76.4043,58.2002a56.00758,56.00758,0,1,1,98.02734,53.11523c-.07324.1084-.14844.21484-.22754.31934L96.001,215.98828H176A8.00039,8.00039,0,0,1,184,223.98828Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M83.77207,61.31625a48.00774,48.00774,0,1,1,84.03029,45.521v0L80,224v-.01149h96"
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
      d="M83.77207,61.31625a48.00774,48.00774,0,1,1,84.03029,45.521v0L80,224v-.01149h96"
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
      d="M83.77207,61.31625a48.00774,48.00774,0,1,1,84.03029,45.521v0L80,224v-.01149h96"
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

const NumberTwo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

NumberTwo.displayName = "NumberTwo";

export default NumberTwo;
