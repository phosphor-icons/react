/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M204,32H52A20.1,20.1,0,0,0,32,52V204a20.1,20.1,0,0,0,20,20H204a20.1,20.1,0,0,0,20-20V52A20.1,20.1,0,0,0,204,32Zm-4,24v60H56V56Zm-84,84v60H96V140Zm24,0h20v60H140Zm-84,0H72v60H56Zm128,60V140h16v60Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M212,128v76a8,8,0,0,1-8,8H52a8,8,0,0,1-8-8V128Z" opacity="0.2" />
    <path d="M204,36H52A16,16,0,0,0,36,52V204a16,16,0,0,0,16,16H204a16,16,0,0,0,16-16V52A16,16,0,0,0,204,36Zm0,16v68H52V52Zm0,152H52V136H204v68Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M204,36H52A16,16,0,0,0,36,52V204a16,16,0,0,0,16,16H204a16,16,0,0,0,16-16V52A16,16,0,0,0,204,36Zm0,16v76H52V52Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M204,38H52A14,14,0,0,0,38,52V204a14,14,0,0,0,14,14H204a14,14,0,0,0,14-14V52A14,14,0,0,0,204,38ZM52,50H204a2,2,0,0,1,2,2v70H50V52A2,2,0,0,1,52,50Zm54,84v72H86V134Zm12,0h20v72H118Zm32,0h20v72H150ZM50,204V134H74v72H52A2,2,0,0,1,50,204Zm154,2H182V134h24v70A2,2,0,0,1,204,206Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M204,36H52A16,16,0,0,0,36,52V204a16,16,0,0,0,16,16H204a16,16,0,0,0,16-16V52A16,16,0,0,0,204,36Zm0,16v68H52V52ZM104,136v68H88V136Zm16,0h16v68H120Zm32,0h16v68H152ZM52,136H72v68H52Zm152,68H184V136h20v68Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M204,40H52A12,12,0,0,0,40,52V204a12,12,0,0,0,12,12H204a12,12,0,0,0,12-12V52A12,12,0,0,0,204,40ZM52,48H204a4,4,0,0,1,4,4v72H48V52A4,4,0,0,1,52,48Zm56,84v76H84V132Zm8,0h24v76H116Zm32,0h24v76H148ZM48,204V132H76v76H52A4,4,0,0,1,48,204Zm156,4H180V132h28v72A4,4,0,0,1,204,208Z" />
  </>
);

const SquareHalfBottom = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

SquareHalfBottom.displayName = "SquareHalfBottom";

export default SquareHalfBottom;
