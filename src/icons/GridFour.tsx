/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M204,32H52A20.1,20.1,0,0,0,32,52V204a20.1,20.1,0,0,0,20,20H204a20.1,20.1,0,0,0,20-20V52A20.1,20.1,0,0,0,204,32Zm-4,84H140V56h60ZM116,56v60H56V56ZM56,140h60v60H56Zm84,60V140h60v60Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <path d="M128,128H44V52a8,8,0,0,1,8-8h76Z" />
    </g>
    <path d="M204,36H52A16,16,0,0,0,36,52V204a16,16,0,0,0,16,16H204a16,16,0,0,0,16-16V52A16,16,0,0,0,204,36Zm0,84H136V52h68ZM120,52v68H52V52ZM52,136h68v68H52Zm152,68H136V136h68v68Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M204,36H52A16,16,0,0,0,36,52V204a16,16,0,0,0,16,16H204a16,16,0,0,0,16-16V52A16,16,0,0,0,204,36Zm0,92H128V52h76ZM52,128h76v76H52Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M204,38H52A14,14,0,0,0,38,52V204a14,14,0,0,0,14,14H204a14,14,0,0,0,14-14V52A14,14,0,0,0,204,38Zm2,14v70H134V50h70A2,2,0,0,1,206,52ZM52,50h70v72H50V52A2,2,0,0,1,52,50ZM50,204V134h72v72H52A2,2,0,0,1,50,204Zm154,2H134V134h72v70A2,2,0,0,1,204,206Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M204,36H52A16,16,0,0,0,36,52V204a16,16,0,0,0,16,16H204a16,16,0,0,0,16-16V52A16,16,0,0,0,204,36Zm0,84H136V52h68ZM120,52v68H52V52ZM52,136h68v68H52Zm152,68H136V136h68v68Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M204,40H52A12,12,0,0,0,40,52V204a12,12,0,0,0,12,12H204a12,12,0,0,0,12-12V52A12,12,0,0,0,204,40Zm4,12v72H132V48h72A4,4,0,0,1,208,52ZM52,48h72v76H48V52A4,4,0,0,1,52,48ZM48,204V132h76v76H52A4,4,0,0,1,48,204Zm156,4H132V132h76v72A4,4,0,0,1,204,208Z" />
  </>
);

const GridFour = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

GridFour.displayName = "GridFour";

export default GridFour;
