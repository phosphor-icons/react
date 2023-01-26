/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M20,160V56A20.1,20.1,0,0,1,40,36H216a20.1,20.1,0,0,1,20,20V160a12,12,0,0,1-24,0V60H44V160a12,12,0,0,1-24,0Zm232,40a12,12,0,0,1-12,12H16a12,12,0,0,1,0-24h92V160a12,12,0,0,1,12-12h64a12,12,0,0,1,12,12v28h44A12,12,0,0,1,252,200ZM132,188h40V172H132Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M184,168v32H120V168Z" opacity="0.2" />
    <path d="M24,168V56A16,16,0,0,1,40,40H216a16,16,0,0,1,16,16V168a8,8,0,0,1-16,0V56H40V168a8,8,0,0,1-16,0Zm224,32a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16h96V168a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v24h48A8,8,0,0,1,248,200Zm-120-8h48V176H128Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M240,192h-8V56a16,16,0,0,0-16-16H40A16,16,0,0,0,24,56V192H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16Zm-40,0H128V176a8,8,0,0,1,8-8h56a8,8,0,0,1,8,8Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M26,168V56A14,14,0,0,1,40,42H216a14,14,0,0,1,14,14V168a6,6,0,0,1-12,0V56a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V168a6,6,0,0,1-12,0Zm220,32a6,6,0,0,1-6,6H16a6,6,0,0,1,0-12h98V168a6,6,0,0,1,6-6h64a6,6,0,0,1,6,6v26h50A6,6,0,0,1,246,200Zm-120-6h52V174H126Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M24,168V56A16,16,0,0,1,40,40H216a16,16,0,0,1,16,16V168a8,8,0,0,1-16,0V56H40V168a8,8,0,0,1-16,0Zm224,32a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16h96V168a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v24h48A8,8,0,0,1,248,200Zm-120-8h48V176H128Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M28,168V56A12,12,0,0,1,40,44H216a12,12,0,0,1,12,12V168a4,4,0,0,1-8,0V56a4,4,0,0,0-4-4H40a4,4,0,0,0-4,4V168a4,4,0,0,1-8,0Zm216,32a4,4,0,0,1-4,4H16a4,4,0,0,1,0-8H116V168a4,4,0,0,1,4-4h64a4,4,0,0,1,4,4v28h52A4,4,0,0,1,244,200Zm-120-4h56V172H124Z" />
  </>
);

const ChalkboardSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

ChalkboardSimple.displayName = "ChalkboardSimple";

export default ChalkboardSimple;
