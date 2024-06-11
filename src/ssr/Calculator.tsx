/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Calculator";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04MCwxMjBoOTZhOCw4LDAsMCwwLDgtOFY2NGE4LDgsMCwwLDAtOC04SDgwYTgsOCwwLDAsMC04LDh2NDhBOCw4LDAsMCwwLDgwLDEyMFptOC00OGg4MHYzMkg4OFpNMjAwLDI0SDU2QTE2LDE2LDAsMCwwLDQwLDQwVjIxNmExNiwxNiwwLDAsMCwxNiwxNkgyMDBhMTYsMTYsMCwwLDAsMTYtMTZWNDBBMTYsMTYsMCwwLDAsMjAwLDI0Wm0wLDE5Mkg1NlY0MEgyMDBaTTEwMCwxNDhhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsMTAwLDE0OFptNDAsMGExMiwxMiwwLDEsMS0xMi0xMkExMiwxMiwwLDAsMSwxNDAsMTQ4Wm00MCwwYTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDE4MCwxNDhabS04MCw0MGExMiwxMiwwLDEsMS0xMi0xMkExMiwxMiwwLDAsMSwxMDAsMTg4Wm00MCwwYTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDE0MCwxODhabTQwLDBhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsMTgwLDE4OFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsNjBIODBhNCw0LDAsMCwwLTQsNHY0OGE0LDQsMCwwLDAsNCw0aDk2YTQsNCwwLDAsMCw0LTRWNjRBNCw0LDAsMCwwLDE3Niw2MFptLTQsNDhIODRWNjhoODhabTI4LTgwSDU2QTEyLDEyLDAsMCwwLDQ0LDQwVjIxNmExMiwxMiwwLDAsMCwxMiwxMkgyMDBhMTIsMTIsMCwwLDAsMTItMTJWNDBBMTIsMTIsMCwwLDAsMjAwLDI4Wm00LDE4OGE0LDQsMCwwLDEtNCw0SDU2YTQsNCwwLDAsMS00LTRWNDBhNCw0LDAsMCwxLDQtNEgyMDBhNCw0LDAsMCwxLDQsNFpNOTYsMTQ4YTgsOCwwLDEsMS04LThBOCw4LDAsMCwxLDk2LDE0OFptNDAsMGE4LDgsMCwxLDEtOC04QTgsOCwwLDAsMSwxMzYsMTQ4Wm00MCwwYTgsOCwwLDEsMS04LThBOCw4LDAsMCwxLDE3NiwxNDhaTTk2LDE4OGE4LDgsMCwxLDEtOC04QTgsOCwwLDAsMSw5NiwxODhabTQwLDBhOCw4LDAsMSwxLTgtOEE4LDgsMCwwLDEsMTM2LDE4OFptNDAsMGE4LDgsMCwxLDEtOC04QTgsOCwwLDAsMSwxNzYsMTg4WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsNThIODBhNiw2LDAsMCwwLTYsNnY0OGE2LDYsMCwwLDAsNiw2aDk2YTYsNiwwLDAsMCw2LTZWNjRBNiw2LDAsMCwwLDE3Niw1OFptLTYsNDhIODZWNzBoODRabTMwLTgwSDU2QTE0LDE0LDAsMCwwLDQyLDQwVjIxNmExNCwxNCwwLDAsMCwxNCwxNEgyMDBhMTQsMTQsMCwwLDAsMTQtMTRWNDBBMTQsMTQsMCwwLDAsMjAwLDI2Wm0yLDE5MGEyLDIsMCwwLDEtMiwySDU2YTIsMiwwLDAsMS0yLTJWNDBhMiwyLDAsMCwxLDItMkgyMDBhMiwyLDAsMCwxLDIsMlpNOTgsMTQ4YTEwLDEwLDAsMSwxLTEwLTEwQTEwLDEwLDAsMCwxLDk4LDE0OFptNDAsMGExMCwxMCwwLDEsMS0xMC0xMEExMCwxMCwwLDAsMSwxMzgsMTQ4Wm00MCwwYTEwLDEwLDAsMSwxLTEwLTEwQTEwLDEwLDAsMCwxLDE3OCwxNDhaTTk4LDE4OGExMCwxMCwwLDEsMS0xMC0xMEExMCwxMCwwLDAsMSw5OCwxODhabTQwLDBhMTAsMTAsMCwxLDEtMTAtMTBBMTAsMTAsMCwwLDEsMTM4LDE4OFptNDAsMGExMCwxMCwwLDEsMS0xMC0xMEExMCwxMCwwLDAsMSwxNzgsMTg4WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMjBINTZBMjAsMjAsMCwwLDAsMzYsNDBWMjE2YTIwLDIwLDAsMCwwLDIwLDIwSDIwMGEyMCwyMCwwLDAsMCwyMC0yMFY0MEEyMCwyMCwwLDAsMCwyMDAsMjBabS00LDE5Mkg2MFY0NEgxOTZaTTgwLDc2QTEyLDEyLDAsMCwxLDkyLDY0aDcyYTEyLDEyLDAsMCwxLDAsMjRIOTJBMTIsMTIsMCwwLDEsODAsNzZabTQwLDUyYTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDEyMCwxMjhabTQ4LDBhMTYsMTYsMCwxLDEtMTYtMTZBMTYsMTYsMCwwLDEsMTY4LDEyOFptLTQ4LDQ4YTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDEyMCwxNzZabTQ4LDBhMTYsMTYsMCwxLDEtMTYtMTZBMTYsMTYsMCwwLDEsMTY4LDE3NloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMjRINTZBMTYsMTYsMCwwLDAsNDAsNDBWMjE2YTE2LDE2LDAsMCwwLDE2LDE2SDIwMGExNiwxNiwwLDAsMCwxNi0xNlY0MEExNiwxNiwwLDAsMCwyMDAsMjRaTTg4LDIwMGExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSw4OCwyMDBabTAtNDBhMTIsMTIsMCwxLDEsMTItMTJBMTIsMTIsMCwwLDEsODgsMTYwWm00MCw0MGExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSwxMjgsMjAwWm0wLTQwYTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDEyOCwxNjBabTQwLDQwYTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDE2OCwyMDBabTAtNDBhMTIsMTIsMCwxLDEsMTItMTJBMTIsMTIsMCwwLDEsMTY4LDE2MFptMTYtNTZhOCw4LDAsMCwxLTgsOEg4MGE4LDgsMCwwLDEtOC04VjY0YTgsOCwwLDAsMSw4LThoOTZhOCw4LDAsMCwxLDgsOFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsNjR2NDhIODBWNjRaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNODAsMTIwaDk2YTgsOCwwLDAsMCw4LThWNjRhOCw4LDAsMCwwLTgtOEg4MGE4LDgsMCwwLDAtOCw4djQ4QTgsOCwwLDAsMCw4MCwxMjBabTgtNDhoODB2MzJIODhaTTIwMCwyNEg1NkExNiwxNiwwLDAsMCw0MCw0MFYyMTZhMTYsMTYsMCwwLDAsMTYsMTZIMjAwYTE2LDE2LDAsMCwwLDE2LTE2VjQwQTE2LDE2LDAsMCwwLDIwMCwyNFptMCwxOTJINTZWNDBIMjAwWk0xMDAsMTQ4YTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDEwMCwxNDhabTQwLDBhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsMTQwLDE0OFptNDAsMGExMiwxMiwwLDEsMS0xMi0xMkExMiwxMiwwLDAsMSwxODAsMTQ4Wm0tODAsNDBhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsMTAwLDE4OFptNDAsMGExMiwxMiwwLDEsMS0xMi0xMkExMiwxMiwwLDAsMSwxNDAsMTg4Wm00MCwwYTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDE4MCwxODhaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Calculator";
export { I as Calculator };
