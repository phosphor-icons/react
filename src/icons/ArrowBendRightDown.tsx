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
      points="104 176 152 224 200 176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M56,32a96,96,0,0,1,96,96v96"
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
      points="104 176 152 224 200 176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M56,32a96,96,0,0,1,96,96v96"
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
    <path d="M205.65723,170.34277a8.003,8.003,0,0,0-11.31446,0L160,204.68628V128A104.11791,104.11791,0,0,0,56,24a8,8,0,0,0,0,16,88.09957,88.09957,0,0,1,88,88v76.68628l-34.34277-34.34351a8.00053,8.00053,0,0,0-11.31446,11.31446l48,48c.05445.0542.11377.10034.16919.15283.135.12744.26978.25561.41358.37353.10644.08765.2185.16431.32837.24561.10009.074.19726.15185.30078.22119.12182.08154.248.15259.37329.22681.09936.05884.19629.12134.29858.17627.124.0664.25147.1228.37842.18237.11035.05176.21875.10693.332.15405.1211.05.24487.09058.36792.13452.12354.04444.24536.0918.37183.13013.12158.03687.24511.064.36816.09473.13037.033.259.06933.3916.0957.14087.02783.283.04443.42481.0647.11645.0166.231.03882.34912.05029.26245.02588.52588.04.78955.04s.5271-.01416.78955-.04c.11816-.01147.23267-.03369.34912-.05029.14185-.02027.28394-.03687.42481-.0647.13256-.02637.26123-.06274.3916-.0957.123-.03076.24658-.05786.36816-.09473.12647-.03833.24829-.08569.37183-.13013.12305-.04394.24682-.08447.36792-.13452.11328-.04712.22168-.10229.332-.15405.127-.05957.25439-.116.37842-.18237.10229-.05493.19922-.11743.29858-.17627.12525-.07422.25147-.14527.37329-.22681.10352-.06934.20069-.14722.30078-.22119.10987-.0813.22193-.158.32837-.24561.1438-.11792.27857-.24609.41358-.37353.05542-.05249.11474-.09863.16919-.15283l48-48A8.00122,8.00122,0,0,0,205.65723,170.34277Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="104 176 152 224 200 176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M56,32a96,96,0,0,1,96,96v96"
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
      points="104 176 152 224 200 176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M56,32a96,96,0,0,1,96,96v96"
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
      points="104 176 152 224 200 176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M56,32a96,96,0,0,1,96,96v96"
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

const ArrowBendRightDown = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => <IconBase ref={ref} {...props} renderPath={renderPath} />
);

ArrowBendRightDown.displayName = "ArrowBendRightDown";

export default ArrowBendRightDown;
