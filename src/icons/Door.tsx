/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M232,212H212V40a20.1,20.1,0,0,0-20-20H64A20.1,20.1,0,0,0,44,40V212H24a12,12,0,0,0,0,24H232a12,12,0,0,0,0-24ZM68,44H188V212H68Zm104,84a16,16,0,1,1-16-16A16,16,0,0,1,172,128Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path
      d="M200,40V224H56V40a8,8,0,0,1,8-8H192A8,8,0,0,1,200,40Z"
      opacity="0.2"
    />
    <path d="M232,216H208V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V216H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM64,40H192V216H64Zm104,88a12,12,0,1,1-12-12A12,12,0,0,1,168,128Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M232,216H208V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V216H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm-68-76a12,12,0,1,1,12-12A12,12,0,0,1,164,140Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M232,218H206V40a14,14,0,0,0-14-14H64A14,14,0,0,0,50,40V218H24a6,6,0,0,0,0,12H232a6,6,0,0,0,0-12ZM62,40a2,2,0,0,1,2-2H192a2,2,0,0,1,2,2V218H62Zm104,88a10,10,0,1,1-10-10A10,10,0,0,1,166,128Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M232,216H208V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V216H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM64,40H192V216H64Zm104,88a12,12,0,1,1-12-12A12,12,0,0,1,168,128Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M232,220H204V40a12,12,0,0,0-12-12H64A12,12,0,0,0,52,40V220H24a4,4,0,0,0,0,8H232a4,4,0,0,0,0-8ZM60,40a4,4,0,0,1,4-4H192a4,4,0,0,1,4,4V220H60Zm104,88a8,8,0,1,1-8-8A8,8,0,0,1,164,128Z" />
  </>
);

const Door = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

Door.displayName = "Door";

export default Door;
