import { forwardRef } from "react";

import { IconBaseProps } from "./types";
import { isClient } from "./utils";
import ClientBase from "./ClientBase";
import ServerBase from "./ServerBase";

const IconBase = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
  const Base = isClient() ? ClientBase : ServerBase;
  return <Base ref={ref} {...props} />;
});

IconBase.displayName = "IconBase";

export default IconBase;
