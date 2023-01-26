/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M177.1,114.5A48,48,0,0,0,140,36H64A12,12,0,0,0,52,48V200a12,12,0,0,0,12,12h88a52,52,0,0,0,25.1-97.5ZM76,60h64a24,24,0,0,1,0,48H76Zm76,128H76V132h76a28,28,0,0,1,0,56Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M170.5,115.7A44,44,0,0,0,140,40H64a7.9,7.9,0,0,0-8,8V200a8,8,0,0,0,8,8h88a48,48,0,0,0,18.5-92.3ZM72,56h68a28,28,0,0,1,0,56H72Zm80,136H72V128h80a32,32,0,0,1,0,64Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M170.5,115.7A44,44,0,0,0,140,40H64a7.9,7.9,0,0,0-8,8V200a8,8,0,0,0,8,8h88a48,48,0,0,0,18.5-92.3ZM72,56h68a28,28,0,0,1,0,56H72Zm80,136H72V128h80a32,32,0,0,1,0,64Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M166.7,116.4A42,42,0,0,0,140,42H64a6.2,6.2,0,0,0-6,6V200a6,6,0,0,0,6,6h88a46,46,0,0,0,14.7-89.6ZM70,54h70a30,30,0,0,1,0,60H70Zm82,140H70V126h82a34,34,0,0,1,0,68Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M170.5,115.7A44,44,0,0,0,140,40H64a7.9,7.9,0,0,0-8,8V200a8,8,0,0,0,8,8h88a48,48,0,0,0,18.5-92.3ZM72,56h68a28,28,0,0,1,0,56H72Zm80,136H72V128h80a32,32,0,0,1,0,64Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M162.3,117.2A40,40,0,0,0,140,44H64a4.1,4.1,0,0,0-4,4V200a4,4,0,0,0,4,4h88a44,44,0,0,0,10.3-86.8ZM68,52h72a32,32,0,0,1,0,64H68Zm84,144H68V124h84a36,36,0,0,1,0,72Z" />
  </>
);

const TextBolder = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

TextBolder.displayName = "TextBolder";

export default TextBolder;
