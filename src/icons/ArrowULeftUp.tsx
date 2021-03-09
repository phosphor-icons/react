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
      points="136 80 88 32 40 80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M200,80v88a56,56,0,0,1-56,56h-.00011A55.99988,55.99988,0,0,1,88,168.00011V32"
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
      points="136 80 88 32 40 80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M200,80v88a56,56,0,0,1-56,56h-.00011A55.99988,55.99988,0,0,1,88,168.00011V32"
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
    <path d="M200,72a8.00008,8.00008,0,0,0-8,8v88a48,48,0,0,1-96,0V51.31348l34.34277,34.34326a8.00018,8.00018,0,0,0,11.31446-11.31348l-48-48c-.01612-.01611-.03394-.0293-.05-.04541-.17163-.1687-.34961-.33105-.53589-.48389-.094-.07714-.19312-.14453-.28955-.21679-.11255-.084-.22266-.17139-.33985-.24951-.113-.07569-.23046-.14136-.34643-.2107-.10816-.06469-.21411-.13257-.32544-.19214-.1167-.0625-.23682-.11523-.356-.17138-.11767-.05591-.23364-.1145-.35449-.16455-.11377-.04712-.22974-.085-.345-.12647-.1311-.04736-.2605-.09741-.39478-.13794-.11377-.03442-.22949-.05932-.34448-.08862-.13769-.03516-.27392-.07324-.41431-.10107-.13037-.02588-.2622-.04078-.39355-.06006-.12695-.01856-.25195-.04248-.38086-.05494-.23193-.02294-.46509-.03271-.69824-.0354C88.05859,24.00415,88.02978,24,88,24s-.05859.00415-.08838.00439c-.23315.00269-.46631.01246-.69824.0354-.12891.01246-.25391.03638-.38086.05494-.13135.01928-.26318.03418-.39356.06006-.14038.02783-.27661.06591-.4143.10107-.115.0293-.23071.0542-.34448.08862-.13428.04053-.26368.09058-.39478.13794-.11523.04151-.2312.07935-.345.12647-.12085.05005-.23682.10864-.35449.16455-.11914.05615-.23926.10888-.356.17138-.11133.05957-.21728.12745-.32544.19214-.116.06934-.2334.135-.34643.2107-.11719.07812-.2273.16552-.33985.24951-.09643.07226-.19556.13965-.28955.21679-.18628.15284-.36426.31519-.53589.48389-.01611.01611-.03393.0293-.05.04541l-48,48A8.00018,8.00018,0,0,0,45.65723,85.65674L80,51.31348V168a64,64,0,0,0,128,0V80A8.00008,8.00008,0,0,0,200,72Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <polyline
      points="136 80 88 32 40 80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M200,80v88a56,56,0,0,1-56,56h-.00011A55.99988,55.99988,0,0,1,88,168.00011V32"
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
      points="136 80 88 32 40 80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M200,80v88a56,56,0,0,1-56,56h-.00011A55.99988,55.99988,0,0,1,88,168.00011V32"
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
      points="136 80 88 32 40 80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M200,80v88a56,56,0,0,1-56,56h-.00011A55.99988,55.99988,0,0,1,88,168.00011V32"
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

const ArrowULeftUp = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

ArrowULeftUp.displayName = "ArrowULeftUp";

export default ArrowULeftUp;
