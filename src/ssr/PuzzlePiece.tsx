
/* GENERATED FILE */
import { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/PuzzlePiece";

const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "PuzzlePiece";
export { I as PuzzlePiece }
