/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/FilmScript";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMjRINTZBMTYsMTYsMCwwLDAsNDAsNDBWMjE2YTE2LDE2LDAsMCwwLDE2LDE2SDIwMGExNiwxNiwwLDAsMCwxNi0xNlY0MEExNiwxNiwwLDAsMCwyMDAsMjRabTAsMTkySDU2VjQwSDIwMFYyMTZaTTk2LDc2QTEyLDEyLDAsMSwxLDg0LDY0LDEyLDEyLDAsMCwxLDk2LDc2Wm0wLDEwNGExMiwxMiwwLDEsMS0xMi0xMkExMiwxMiwwLDAsMSw5NiwxODBabTAtNTJhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsOTYsMTI4WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMjhINTZBMTIsMTIsMCwwLDAsNDQsNDBWMjE2YTEyLDEyLDAsMCwwLDEyLDEySDIwMGExMiwxMiwwLDAsMCwxMi0xMlY0MEExMiwxMiwwLDAsMCwyMDAsMjhabTQsMTg4YTQsNCwwLDAsMS00LDRINTZhNCw0LDAsMCwxLTQtNFY0MGE0LDQsMCwwLDEsNC00SDIwMGE0LDQsMCwwLDEsNCw0Wk05Miw4MGE4LDgsMCwxLDEtOC04QTgsOCwwLDAsMSw5Miw4MFptMCw5NmE4LDgsMCwxLDEtOC04QTgsOCwwLDAsMSw5MiwxNzZabTAtNDhhOCw4LDAsMSwxLTgtOEE4LDgsMCwwLDEsOTIsMTI4WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMjZINTZBMTQsMTQsMCwwLDAsNDIsNDBWMjE2YTE0LDE0LDAsMCwwLDE0LDE0SDIwMGExNCwxNCwwLDAsMCwxNC0xNFY0MEExNCwxNCwwLDAsMCwyMDAsMjZabTIsMTkwYTIsMiwwLDAsMS0yLDJINTZhMiwyLDAsMCwxLTItMlY0MGEyLDIsMCwwLDEsMi0ySDIwMGEyLDIsMCwwLDEsMiwyWk05NCw4MEExMCwxMCwwLDEsMSw4NCw3MCwxMCwxMCwwLDAsMSw5NCw4MFptMCw5NmExMCwxMCwwLDEsMS0xMC0xMEExMCwxMCwwLDAsMSw5NCwxNzZabTAtNDhhMTAsMTAsMCwxLDEtMTAtMTBBMTAsMTAsMCwwLDEsOTQsMTI4WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMjBINTZBMjAsMjAsMCwwLDAsMzYsNDBWMjE2YTIwLDIwLDAsMCwwLDIwLDIwSDIwMGEyMCwyMCwwLDAsMCwyMC0yMFY0MEEyMCwyMCwwLDAsMCwyMDAsMjBabS00LDE5Mkg2MFY0NEgxOTZaTTc2LDgwQTE2LDE2LDAsMSwxLDkyLDk2LDE2LDE2LDAsMCwxLDc2LDgwWm0wLDk2YTE2LDE2LDAsMSwxLDE2LDE2QTE2LDE2LDAsMCwxLDc2LDE3NlptMC00OGExNiwxNiwwLDEsMSwxNiwxNkExNiwxNiwwLDAsMSw3NiwxMjhaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMjRINTZBMTYsMTYsMCwwLDAsNDAsNDBWMjE2YTE2LDE2LDAsMCwwLDE2LDE2SDIwMGExNiwxNiwwLDAsMCwxNi0xNlY0MEExNiwxNiwwLDAsMCwyMDAsMjRaTTc2LDE4OGExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSw3NiwxODhabTAtNDhhMTIsMTIsMCwxLDEsMTItMTJBMTIsMTIsMCwwLDEsNzYsMTQwWm0wLTQ4QTEyLDEyLDAsMSwxLDg4LDgwLDEyLDEyLDAsMCwxLDc2LDkyWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNDBWMjE2YTgsOCwwLDAsMS04LDhINTZhOCw4LDAsMCwxLTgtOFY0MGE4LDgsMCwwLDEsOC04SDIwMEE4LDgsMCwwLDEsMjA4LDQwWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIwMCwyNEg1NkExNiwxNiwwLDAsMCw0MCw0MFYyMTZhMTYsMTYsMCwwLDAsMTYsMTZIMjAwYTE2LDE2LDAsMCwwLDE2LTE2VjQwQTE2LDE2LDAsMCwwLDIwMCwyNFptMCwxOTJINTZWNDBIMjAwVjIxNlpNOTYsODBBMTIsMTIsMCwxLDEsODQsNjgsMTIsMTIsMCwwLDEsOTYsODBabTAsOTZhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsOTYsMTc2Wm0wLTQ4YTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDk2LDEyOFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "FilmScript";
export { I as FilmScript };
