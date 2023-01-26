/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M228,196h-4V40a12,12,0,0,0-12-12H156a12,12,0,0,0-12,12V76H100A12,12,0,0,0,88,88v36H44a12,12,0,0,0-12,12v60H28a12,12,0,0,0,0,24H228a12,12,0,0,0,0-24ZM112,100h32v96H112ZM56,148H88v48H56Zm112,48V52h32V196Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <rect x="156" y="40" width="56" height="168" />
    </g>
    <path d="M228,200h-8V40a8,8,0,0,0-8-8H156a8,8,0,0,0-8,8V80H100a8,8,0,0,0-8,8v40H44a8,8,0,0,0-8,8v64H28a8,8,0,0,0,0,16H228a8,8,0,0,0,0-16ZM108,96h40V200H108ZM52,144H92v56H52Zm112,56V48h40V200Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M228,200h-8V40a8,8,0,0,0-8-8H156a8,8,0,0,0-8,8V80H100a8,8,0,0,0-8,8v40H44a8,8,0,0,0-8,8v64H28a8,8,0,0,0,0,16H228a8,8,0,0,0,0-16ZM108,96h40V200H108ZM52,144H92v56H52Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M228,202H218V40a6,6,0,0,0-6-6H156a6,6,0,0,0-6,6V82H100a6,6,0,0,0-6,6v42H44a6,6,0,0,0-6,6v66H28a6,6,0,0,0,0,12H228a6,6,0,0,0,0-12ZM106,94h44V202H106ZM50,142H94v60H50Zm112,60V46h44V202Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M228,200h-8V40a8,8,0,0,0-8-8H156a8,8,0,0,0-8,8V80H100a8,8,0,0,0-8,8v40H44a8,8,0,0,0-8,8v64H28a8,8,0,0,0,0,16H228a8,8,0,0,0,0-16ZM108,96h40V200H108ZM52,144H92v56H52Zm112,56V48h40V200Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M228,204H216V40a4,4,0,0,0-4-4H156a4,4,0,0,0-4,4V84H100a4,4,0,0,0-4,4v44H44a4,4,0,0,0-4,4v68H28a4,4,0,0,0,0,8H228a4,4,0,0,0,0-8ZM104,92h48V204H104ZM48,140H96v64H48Zm112,64V44h48V204Z" />
  </>
);

const ChartBar = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

ChartBar.displayName = "ChartBar";

export default ChartBar;
