/* GENERATED FILE */
import * as React from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/HandGrabbing";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODgsODBhMjcuNzksMjcuNzksMCwwLDAtMTMuMzYsMy40LDI4LDI4LDAsMCwwLTQ2LjY0LTExQTI4LDI4LDAsMCwwLDgwLDkydjIwSDY4YTI4LDI4LDAsMCwwLTI4LDI4djEyYTg4LDg4LDAsMCwwLDE3NiwwVjEwOEEyOCwyOCwwLDAsMCwxODgsODBabTEyLDcyYTcyLDcyLDAsMCwxLTE0NCwwVjE0MGExMiwxMiwwLDAsMSwxMi0xMkg4MHYyNGE4LDgsMCwwLDAsMTYsMFY5MmExMiwxMiwwLDAsMSwyNCwwdjI4YTgsOCwwLDAsMCwxNiwwVjkyYTEyLDEyLDAsMCwxLDI0LDB2MjhhOCw4LDAsMCwwLDE2LDBWMTA4YTEyLDEyLDAsMCwxLDI0LDBaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODgsODRhMjMuODcsMjMuODcsMCwwLDAtMTYuMDcsNi4yQTI0LDI0LDAsMCwwLDEyOCw3OC43NSwyNCwyNCwwLDAsMCw4NCw5MnYyNEg2OGEyNCwyNCwwLDAsMC0yNCwyNHYxMmE4NCw4NCwwLDAsMCwxNjgsMFYxMDhBMjQsMjQsMCwwLDAsMTg4LDg0Wm0xNiw2OGE3Niw3NiwwLDAsMS0xNTIsMFYxNDBhMTYsMTYsMCwwLDEsMTYtMTZIODR2MjhhNCw0LDAsMCwwLDgsMFY5MmExNiwxNiwwLDAsMSwzMiwwdjI4YTQsNCwwLDAsMCw4LDBWOTJhMTYsMTYsMCwwLDEsMzIsMHYyOGE0LDQsMCwwLDAsOCwwVjEwOGExNiwxNiwwLDAsMSwzMiwwWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODgsODJhMjUuODUsMjUuODUsMCwwLDAtMTQuNTksNC40OUEyNiwyNiwwLDAsMCwxMjgsNzUuNDEsMjYsMjYsMCwwLDAsODIsOTJ2MjJINjhhMjYsMjYsMCwwLDAtMjYsMjZ2MTJhODYsODYsMCwwLDAsMTcyLDBWMTA4QTI2LDI2LDAsMCwwLDE4OCw4MlptMTQsNzBhNzQsNzQsMCwwLDEtMTQ4LDBWMTQwYTE0LDE0LDAsMCwxLDE0LTE0SDgydjI2YTYsNiwwLDAsMCwxMiwwVjkyYTE0LDE0LDAsMCwxLDI4LDB2MjhhNiw2LDAsMCwwLDEyLDBWOTJhMTQsMTQsMCwwLDEsMjgsMHYyOGE2LDYsMCwwLDAsMTIsMFYxMDhhMTQsMTQsMCwwLDEsMjgsMFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODgsNzZhMzEuODUsMzEuODUsMCwwLDAtMTEuMjEsMiwzMiwzMiwwLDAsMC00OC43OS0xMUEzMiwzMiwwLDAsMCw3Niw5MnYxNkg2OGEzMiwzMiwwLDAsMC0zMiwzMnYxMmE5Miw5MiwwLDAsMCwxODQsMFYxMDhBMzIsMzIsMCwwLDAsMTg4LDc2Wm04LDc2YTY4LDY4LDAsMCwxLTEzNiwwVjE0MGE4LDgsMCwwLDEsOC04aDh2MjBhMTIsMTIsMCwwLDAsMjQsMFY5MmE4LDgsMCwwLDEsMTYsMHYyOGExMiwxMiwwLDAsMCwyNCwwVjkyYTgsOCwwLDAsMSwxNiwwdjI4YTEyLDEyLDAsMCwwLDI0LDBWMTA4YTgsOCwwLDAsMSwxNiwwWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTA0djQ4YTg4LDg4LDAsMCwxLTE3NiwwVjEzNmExNiwxNiwwLDAsMSwzMiwwdjhhOCw4LDAsMCwwLDE2LDBWODhhMTYsMTYsMCwwLDEsMzIsMHYxNmE4LDgsMCwwLDAsMTYsMFY4OGExNiwxNiwwLDAsMSwzMiwwdjE2YTgsOCwwLDAsMCwxNiwwLDE2LDE2LDAsMCwxLDMyLDBaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTA4djQ0YTgwLDgwLDAsMCwxLTE2MCwwVjE0MGEyMCwyMCwwLDAsMSwyMC0yMEg4OFY5MmEyMCwyMCwwLDAsMSw0MCwwLDIwLDIwLDAsMCwxLDQwLDB2MTZhMjAsMjAsMCwwLDEsNDAsMFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xODgsODBhMjcuNzksMjcuNzksMCwwLDAtMTMuMzYsMy40LDI4LDI4LDAsMCwwLTQ2LjY0LTExQTI4LDI4LDAsMCwwLDgwLDkydjIwSDY4YTI4LDI4LDAsMCwwLTI4LDI4djEyYTg4LDg4LDAsMCwwLDE3NiwwVjEwOEEyOCwyOCwwLDAsMCwxODgsODBabTEyLDcyYTcyLDcyLDAsMCwxLTE0NCwwVjE0MGExMiwxMiwwLDAsMSwxMi0xMkg4MHYyNGE4LDgsMCwwLDAsMTYsMFY5MmExMiwxMiwwLDAsMSwyNCwwdjI4YTgsOCwwLDAsMCwxNiwwVjkyYTEyLDEyLDAsMCwxLDI0LDB2MjhhOCw4LDAsMCwwLDE2LDBWMTA4YTEyLDEyLDAsMCwxLDI0LDBaIi8+PC9zdmc+)
 */
const I: Icon = React.forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "HandGrabbingIcon";

/** @deprecated Use HandGrabbingIcon */
export const HandGrabbing = I;
export { I as HandGrabbingIcon };
