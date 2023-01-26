/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M216,44H40A20.1,20.1,0,0,0,20,64V192a20.1,20.1,0,0,0,20,20H216a20.1,20.1,0,0,0,20-20V64A20.1,20.1,0,0,0,216,44ZM44,68H212v48H144a20.1,20.1,0,0,0-20,20v52H44ZM148,188V140h64v48Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path
      d="M216,56H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8h96V136a8,8,0,0,1,8-8h80V64A8,8,0,0,0,216,56Z"
      opacity="0.2"
    />
    <path d="M216,48H40A16,16,0,0,0,24,64V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM40,64H216v56H144a16,16,0,0,0-16,16v56H40ZM216,192H144V136h72v56Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M216,48H40A16,16,0,0,0,24,64V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48Zm-72,72a16,16,0,0,0-16,16v56H40V64H216v56Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M216,50H40A14,14,0,0,0,26,64V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V64A14,14,0,0,0,216,50ZM38,192V64a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2v58H144a14,14,0,0,0-14,14v58H40A2,2,0,0,1,38,192Zm178,2H142V136a2,2,0,0,1,2-2h74v58A2,2,0,0,1,216,194Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M216,48H40A16,16,0,0,0,24,64V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM40,64H216v56H144a16,16,0,0,0-16,16v56H40ZM216,192H144V136h72v56Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M216,52H40A12,12,0,0,0,28,64V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V64A12,12,0,0,0,216,52ZM36,192V64a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4v60H144a12,12,0,0,0-12,12v60H40A4,4,0,0,1,36,192Zm180,4H140V136a4,4,0,0,1,4-4h76v60A4,4,0,0,1,216,196Z" />
  </>
);

const PictureInPicture = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

PictureInPicture.displayName = "PictureInPicture";

export default PictureInPicture;
