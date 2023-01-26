/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M204,32H52A20.1,20.1,0,0,0,32,52V204a20.1,20.1,0,0,0,20,20H204a20.1,20.1,0,0,0,20-20V52A20.1,20.1,0,0,0,204,32ZM140,96h60v20H140Zm0,44h60v20H140Zm60-68H140V56h60ZM56,56h60V200H56Zm84,144V184h60v16Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path
      d="M212,52V204a8,8,0,0,1-8,8H128V44h76A8,8,0,0,1,212,52Z"
      opacity="0.2"
    />
    <path d="M204,36H52A16,16,0,0,0,36,52V204a16,16,0,0,0,16,16H204a16,16,0,0,0,16-16V52A16,16,0,0,0,204,36ZM52,52h68V204H52ZM204,204H136V52h68V204Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M204,36H52A16,16,0,0,0,36,52V204a16,16,0,0,0,16,16H204a16,16,0,0,0,16-16V52A16,16,0,0,0,204,36ZM52,52h76V204H52Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M204,38H52A14,14,0,0,0,38,52V204a14,14,0,0,0,14,14H204a14,14,0,0,0,14-14V52A14,14,0,0,0,204,38Zm-70,80h72v20H134Zm0-12V86h72v20Zm0,44h72v20H134Zm72-98V74H134V50h70A2,2,0,0,1,206,52ZM50,204V52a2,2,0,0,1,2-2h70V206H52A2,2,0,0,1,50,204Zm154,2H134V182h72v22A2,2,0,0,1,204,206Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M204,36H52A16,16,0,0,0,36,52V204a16,16,0,0,0,16,16H204a16,16,0,0,0,16-16V52A16,16,0,0,0,204,36Zm-68,84h68v16H136Zm0-16V88h68v16Zm0,48h68v16H136Zm68-80H136V52h68ZM52,52h68V204H52ZM204,204H136V184h68v20Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M204,40H52A12,12,0,0,0,40,52V204a12,12,0,0,0,12,12H204a12,12,0,0,0,12-12V52A12,12,0,0,0,204,40Zm-72,76h76v24H132Zm0-8V84h76v24Zm0,40h76v24H132Zm76-96V76H132V48h72A4,4,0,0,1,208,52ZM48,204V52a4,4,0,0,1,4-4h72V208H52A4,4,0,0,1,48,204Zm156,4H132V180h76v24A4,4,0,0,1,204,208Z" />
  </>
);

const SquareHalf = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

SquareHalf.displayName = "SquareHalf";

export default SquareHalf;
