/* GENERATED FILE */
import * as React from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/NumberEight";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTUuNTUsMTE5LjI3YTQ4LDQ4LDAsMSwwLTU1LjEsMCw1Niw1NiwwLDEsMCw1NS4xLDBaTTk2LDgwYTMyLDMyLDAsMSwxLDMyLDMyQTMyLDMyLDAsMCwxLDk2LDgwWm0zMiwxMjhhNDAsNDAsMCwxLDEsNDAtNDBBNDAsNDAsMCwwLDEsMTI4LDIwOFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDcuMDgsMTE5LjY0YTQ0LDQ0LDAsMSwwLTM4LjE2LDAsNTIsNTIsMCwxLDAsMzguMTYsMFpNOTIsODBhMzYsMzYsMCwxLDEsMzYsMzZBMzYsMzYsMCwwLDEsOTIsODBabTM2LDEzMmE0NCw0NCwwLDEsMSw0NC00NEE0NC4wNSw0NC4wNSwwLDAsMSwxMjgsMjEyWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTEuNjIsMTE5LjQ1YTQ2LDQ2LDAsMSwwLTQ3LjI0LDAsNTQsNTQsMCwxLDAsNDcuMjQsMFpNOTQsODBhMzQsMzQsMCwxLDEsMzQsMzRBMzQsMzQsMCwwLDEsOTQsODBabTM0LDEzMGE0Miw0MiwwLDEsMSw0Mi00MkE0Miw0MiwwLDAsMSwxMjgsMjEwWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjIuNDQsMTE4LjkxYTUyLDUyLDAsMSwwLTY4Ljg4LDAsNjAsNjAsMCwxLDAsNjguODgsMFpNMTAwLDgwYTI4LDI4LDAsMSwxLDI4LDI4QTI4LDI4LDAsMCwxLDEwMCw4MFptMjgsMTI0YTM2LDM2LDAsMSwxLDM2LTM2QTM2LDM2LDAsMCwxLDEyOCwyMDRaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDgsOTJhMjAsMjAsMCwxLDEsMjAsMjBBMjAsMjAsMCwwLDEsMTA4LDkyWm0yMCwzNmEyOCwyOCwwLDEsMCwyOCwyOEEyOCwyOCwwLDAsMCwxMjgsMTI4Wm04OC04OFYyMTZhMTYsMTYsMCwwLDEtMTYsMTZINTZhMTYsMTYsMCwwLDEtMTYtMTZWNDBBMTYsMTYsMCwwLDEsNTYsMjRIMjAwQTE2LDE2LDAsMCwxLDIxNiw0MFpNMTcyLDE1NmE0NCw0NCwwLDAsMC0yMC4yMy0zNywzNiwzNiwwLDEsMC00Ny41NCwwQTQ0LDQ0LDAsMSwwLDE3MiwxNTZaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDBWMjE2YTE2LDE2LDAsMCwxLTE2LDE2SDU2YTE2LDE2LDAsMCwxLTE2LTE2VjQwQTE2LDE2LDAsMCwxLDU2LDI0SDIwMEExNiwxNiwwLDAsMSwyMTYsNDBaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTU1LjU1LDExOS4yN2E0OCw0OCwwLDEsMC01NS4xLDAsNTYsNTYsMCwxLDAsNTUuMSwwWk05Niw4MGEzMiwzMiwwLDEsMSwzMiwzMkEzMiwzMiwwLDAsMSw5Niw4MFptMzIsMTI4YTQwLDQwLDAsMSwxLDQwLTQwQTQwLDQwLDAsMCwxLDEyOCwyMDhaIi8+PC9zdmc+)
 */
const I: Icon = React.forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "NumberEightIcon";

/** @deprecated Use NumberEightIcon */
export const NumberEight = I;
export { I as NumberEightIcon };
