/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/DiceFive";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMzJINjRBMzIsMzIsMCwwLDAsMzIsNjRWMTkyYTMyLDMyLDAsMCwwLDMyLDMySDE5MmEzMiwzMiwwLDAsMCwzMi0zMlY2NEEzMiwzMiwwLDAsMCwxOTIsMzJabTE2LDE2MGExNiwxNiwwLDAsMS0xNiwxNkg2NGExNiwxNiwwLDAsMS0xNi0xNlY2NEExNiwxNiwwLDAsMSw2NCw0OEgxOTJhMTYsMTYsMCwwLDEsMTYsMTZaTTEwNCw5MkExMiwxMiwwLDEsMSw5Miw4MCwxMiwxMiwwLDAsMSwxMDQsOTJabTcyLDBhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsMTc2LDkyWm0tNzIsNzJhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsMTA0LDE2NFptMzYtMzZhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsMTQwLDEyOFptMzYsMzZhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsMTc2LDE2NFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMzZINjRBMjgsMjgsMCwwLDAsMzYsNjRWMTkyYTI4LDI4LDAsMCwwLDI4LDI4SDE5MmEyOCwyOCwwLDAsMCwyOC0yOFY2NEEyOCwyOCwwLDAsMCwxOTIsMzZabTIwLDE1NmEyMCwyMCwwLDAsMS0yMCwyMEg2NGEyMCwyMCwwLDAsMS0yMC0yMFY2NEEyMCwyMCwwLDAsMSw2NCw0NEgxOTJhMjAsMjAsMCwwLDEsMjAsMjBaTTEwMCw5MmE4LDgsMCwxLDEtOC04QTgsOCwwLDAsMSwxMDAsOTJabTM2LDM2YTgsOCwwLDEsMS04LThBOCw4LDAsMCwxLDEzNiwxMjhabTM2LTM2YTgsOCwwLDEsMS04LThBOCw4LDAsMCwxLDE3Miw5MlptLTcyLDcyYTgsOCwwLDEsMS04LThBOCw4LDAsMCwxLDEwMCwxNjRabTcyLDBhOCw4LDAsMSwxLTgtOEE4LDgsMCwwLDEsMTcyLDE2NFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMzRINjRBMzAsMzAsMCwwLDAsMzQsNjRWMTkyYTMwLDMwLDAsMCwwLDMwLDMwSDE5MmEzMCwzMCwwLDAsMCwzMC0zMFY2NEEzMCwzMCwwLDAsMCwxOTIsMzRabTE4LDE1OGExOCwxOCwwLDAsMS0xOCwxOEg2NGExOCwxOCwwLDAsMS0xOC0xOFY2NEExOCwxOCwwLDAsMSw2NCw0NkgxOTJhMTgsMTgsMCwwLDEsMTgsMThaTTEwMiw5MkExMCwxMCwwLDEsMSw5Miw4MiwxMCwxMCwwLDAsMSwxMDIsOTJabTM2LDM2YTEwLDEwLDAsMSwxLTEwLTEwQTEwLDEwLDAsMCwxLDEzOCwxMjhabTM2LTM2YTEwLDEwLDAsMSwxLTEwLTEwQTEwLDEwLDAsMCwxLDE3NCw5MlptLTcyLDcyYTEwLDEwLDAsMSwxLTEwLTEwQTEwLDEwLDAsMCwxLDEwMiwxNjRabTcyLDBhMTAsMTAsMCwxLDEtMTAtMTBBMTAsMTAsMCwwLDEsMTc0LDE2NFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMjhINjRBMzYsMzYsMCwwLDAsMjgsNjRWMTkyYTM2LDM2LDAsMCwwLDM2LDM2SDE5MmEzNiwzNiwwLDAsMCwzNi0zNlY2NEEzNiwzNiwwLDAsMCwxOTIsMjhabTEyLDE2NGExMiwxMiwwLDAsMS0xMiwxMkg2NGExMiwxMiwwLDAsMS0xMi0xMlY2NEExMiwxMiwwLDAsMSw2NCw1MkgxOTJhMTIsMTIsMCwwLDEsMTIsMTJaTTEwNCw4OEExNiwxNiwwLDEsMSw4OCw3MiwxNiwxNiwwLDAsMSwxMDQsODhabTQwLDQwYTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDE0NCwxMjhabTQwLTQwYTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDE4NCw4OFptLTgwLDgwYTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDEwNCwxNjhabTgwLDBhMTYsMTYsMCwxLDEtMTYtMTZBMTYsMTYsMCwwLDEsMTg0LDE2OFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMzJINjRBMzIsMzIsMCwwLDAsMzIsNjRWMTkyYTMyLDMyLDAsMCwwLDMyLDMySDE5MmEzMiwzMiwwLDAsMCwzMi0zMlY2NEEzMiwzMiwwLDAsMCwxOTIsMzJaTTkyLDE3NmExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSw5MiwxNzZabTAtNzJhMTIsMTIsMCwxLDEsMTItMTJBMTIsMTIsMCwwLDEsOTIsMTA0Wm0zNiwzNmExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSwxMjgsMTQwWm0zNiwzNmExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSwxNjQsMTc2Wm0wLTcyYTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDE2NCwxMDRaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNjRWMTkyYTI0LDI0LDAsMCwxLTI0LDI0SDY0YTI0LDI0LDAsMCwxLTI0LTI0VjY0QTI0LDI0LDAsMCwxLDY0LDQwSDE5MkEyNCwyNCwwLDAsMSwyMTYsNjRaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTkyLDMySDY0QTMyLDMyLDAsMCwwLDMyLDY0VjE5MmEzMiwzMiwwLDAsMCwzMiwzMkgxOTJhMzIsMzIsMCwwLDAsMzItMzJWNjRBMzIsMzIsMCwwLDAsMTkyLDMyWm0xNiwxNjBhMTYsMTYsMCwwLDEtMTYsMTZINjRhMTYsMTYsMCwwLDEtMTYtMTZWNjRBMTYsMTYsMCwwLDEsNjQsNDhIMTkyYTE2LDE2LDAsMCwxLDE2LDE2Wk0xMDQsOTJBMTIsMTIsMCwxLDEsOTIsODAsMTIsMTIsMCwwLDEsMTA0LDkyWm03MiwwYTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDE3Niw5MlptLTcyLDcyYTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDEwNCwxNjRabTM2LTM2YTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDE0MCwxMjhabTM2LDM2YTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDE3NiwxNjRaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "DiceFive";
export { I as DiceFive };
