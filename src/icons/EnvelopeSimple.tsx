/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M224,44H32A12,12,0,0,0,20,56V192a20.1,20.1,0,0,0,20,20H216a20.1,20.1,0,0,0,20-20V56A12,12,0,0,0,224,44ZM193.2,68,128,127.7,62.8,68ZM44,188V83.3l75.9,69.5a11.9,11.9,0,0,0,16.2,0L212,83.3V188Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M224,56l-96,88L32,56Z" opacity="0.2" />
    <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.4,64,128,133.1,52.6,64ZM216,192H40V74.2l82.6,75.7a8,8,0,0,0,10.8,0L216,74.2V192Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.2l82.6,75.7a8,8,0,0,0,10.8,0L216,74.2V192Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50ZM208.6,62,128,135.9,47.4,62ZM216,194H40a2,2,0,0,1-2-2V69.6l85.9,78.8a6.1,6.1,0,0,0,8.2,0L218,69.6V192A2,2,0,0,1,216,194Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.4,64,128,133.1,52.6,64ZM216,192H40V74.2l82.6,75.7a8,8,0,0,0,10.8,0L216,74.2V192Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M224,52H32a4,4,0,0,0-4,4V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A4,4,0,0,0,224,52Zm-10.3,8L128,138.6,42.3,60ZM216,196H40a4,4,0,0,1-4-4V65.1l89.3,81.8a3.9,3.9,0,0,0,5.4,0L220,65.1V192A4,4,0,0,1,216,196Z" />
  </>
);

const EnvelopeSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

EnvelopeSimple.displayName = "EnvelopeSimple";

export default EnvelopeSimple;
