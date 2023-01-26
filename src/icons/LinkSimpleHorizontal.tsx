/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M80,116h96a12,12,0,0,1,0,24H80a12,12,0,0,1,0-24Zm24,48H64a36,36,0,0,1,0-72h40a12,12,0,0,0,0-24H64a60,60,0,0,0,0,120h40a12,12,0,0,0,0-24Zm88-96H152a12,12,0,0,0,0,24h40a36,36,0,0,1,0,72H152a12,12,0,0,0,0,24h40a60,60,0,0,0,0-120Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M80,120h96a8,8,0,0,1,0,16H80a8,8,0,0,1,0-16Zm24,48H64a40,40,0,0,1,0-80h40a8,8,0,0,0,0-16H64a56,56,0,0,0,0,112h40a8,8,0,0,0,0-16Zm88-96H152a8,8,0,0,0,0,16h40a40,40,0,0,1,0,80H152a8,8,0,0,0,0,16h40a56,56,0,0,0,0-112Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M80,120h96a8,8,0,0,1,0,16H80a8,8,0,0,1,0-16Zm24,48H64a40,40,0,0,1,0-80h40a8,8,0,0,0,0-16H64a56,56,0,0,0,0,112h40a8,8,0,0,0,0-16Zm88-96H152a8,8,0,0,0,0,16h40a40,40,0,0,1,0,80H152a8,8,0,0,0,0,16h40a56,56,0,0,0,0-112Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M80,122h96a6,6,0,0,1,0,12H80a6,6,0,0,1,0-12Zm24,48H64a42,42,0,0,1,0-84h40a6,6,0,0,0,0-12H64a54,54,0,0,0,0,108h40a6,6,0,0,0,0-12Zm88-96H152a6,6,0,0,0,0,12h40a42,42,0,0,1,0,84H152a6,6,0,0,0,0,12h40a54,54,0,0,0,0-108Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M80,120h96a8,8,0,0,1,0,16H80a8,8,0,0,1,0-16Zm24,48H64a40,40,0,0,1,0-80h40a8,8,0,0,0,0-16H64a56,56,0,0,0,0,112h40a8,8,0,0,0,0-16Zm88-96H152a8,8,0,0,0,0,16h40a40,40,0,0,1,0,80H152a8,8,0,0,0,0,16h40a56,56,0,0,0,0-112Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M80,124h96a4,4,0,0,1,0,8H80a4,4,0,0,1,0-8Zm24,48H64a44,44,0,0,1,0-88h40a4,4,0,0,0,0-8H64a52,52,0,0,0,0,104h40a4,4,0,0,0,0-8Zm88-96H152a4,4,0,0,0,0,8h40a44,44,0,0,1,0,88H152a4,4,0,0,0,0,8h40a52,52,0,0,0,0-104Z" />
  </>
);

const LinkSimpleHorizontal = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => <IconBase ref={ref} {...props} weightsMap={weightsMap} />
);

LinkSimpleHorizontal.displayName = "LinkSimpleHorizontal";

export default LinkSimpleHorizontal;
