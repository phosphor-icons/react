/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/ListBullets";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03Niw2NEExMiwxMiwwLDAsMSw4OCw1MkgyMTZhMTIsMTIsMCwwLDEsMCwyNEg4OEExMiwxMiwwLDAsMSw3Niw2NFptMTQwLDUySDg4YTEyLDEyLDAsMCwwLDAsMjRIMjE2YTEyLDEyLDAsMCwwLDAtMjRabTAsNjRIODhhMTIsMTIsMCwwLDAsMCwyNEgyMTZhMTIsMTIsMCwwLDAsMC0yNFpNNDQsMTEyYTE2LDE2LDAsMSwwLDE2LDE2QTE2LDE2LDAsMCwwLDQ0LDExMlptMC02NEExNiwxNiwwLDEsMCw2MCw2NCwxNiwxNiwwLDAsMCw0NCw0OFptMCwxMjhhMTYsMTYsMCwxLDAsMTYsMTZBMTYsMTYsMCwwLDAsNDQsMTc2WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNjRWMTkySDg4VjY0WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTgwLDY0YTgsOCwwLDAsMSw4LThIMjE2YTgsOCwwLDAsMSwwLDE2SDg4QTgsOCwwLDAsMSw4MCw2NFptMTM2LDU2SDg4YTgsOCwwLDEsMCwwLDE2SDIxNmE4LDgsMCwwLDAsMC0xNlptMCw2NEg4OGE4LDgsMCwxLDAsMCwxNkgyMTZhOCw4LDAsMCwwLDAtMTZaTTQ0LDUyQTEyLDEyLDAsMSwwLDU2LDY0LDEyLDEyLDAsMCwwLDQ0LDUyWm0wLDY0YTEyLDEyLDAsMSwwLDEyLDEyQTEyLDEyLDAsMCwwLDQ0LDExNlptMCw2NGExMiwxMiwwLDEsMCwxMiwxMkExMiwxMiwwLDAsMCw0NCwxODBaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTY4LDE4OGExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSw2OCwxODhabTAtNDhhMTIsMTIsMCwxLDEsMTItMTJBMTIsMTIsMCwwLDEsNjgsMTQwWm0wLTQ4QTEyLDEyLDAsMSwxLDgwLDgwLDEyLDEyLDAsMCwxLDY4LDkyWm0xMjQsOTJIMTA0YTgsOCwwLDAsMSwwLTE2aDg4YTgsOCwwLDAsMSwwLDE2Wm0wLTQ4SDEwNGE4LDgsMCwwLDEsMC0xNmg4OGE4LDgsMCwwLDEsMCwxNlptMC00OEgxMDRhOCw4LDAsMCwxLDAtMTZoODhhOCw4LDAsMCwxLDAsMTZaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04Miw2NGE2LDYsMCwwLDEsNi02SDIxNmE2LDYsMCwwLDEsMCwxMkg4OEE2LDYsMCwwLDEsODIsNjRabTEzNCw1OEg4OGE2LDYsMCwwLDAsMCwxMkgyMTZhNiw2LDAsMCwwLDAtMTJabTAsNjRIODhhNiw2LDAsMCwwLDAsMTJIMjE2YTYsNiwwLDAsMCwwLTEyWk00NCw1NEExMCwxMCwwLDEsMCw1NCw2NCwxMCwxMCwwLDAsMCw0NCw1NFptMCwxMjhhMTAsMTAsMCwxLDAsMTAsMTBBMTAsMTAsMCwwLDAsNDQsMTgyWm0wLTY0YTEwLDEwLDAsMSwwLDEwLDEwQTEwLDEwLDAsMCwwLDQ0LDExOFoiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04MCw2NGE4LDgsMCwwLDEsOC04SDIxNmE4LDgsMCwwLDEsMCwxNkg4OEE4LDgsMCwwLDEsODAsNjRabTEzNiw1Nkg4OGE4LDgsMCwwLDAsMCwxNkgyMTZhOCw4LDAsMCwwLDAtMTZabTAsNjRIODhhOCw4LDAsMCwwLDAsMTZIMjE2YTgsOCwwLDAsMCwwLTE2Wk00NCw1MkExMiwxMiwwLDEsMCw1Niw2NCwxMiwxMiwwLDAsMCw0NCw1MlptMCw2NGExMiwxMiwwLDEsMCwxMiwxMkExMiwxMiwwLDAsMCw0NCwxMTZabTAsNjRhMTIsMTIsMCwxLDAsMTIsMTJBMTIsMTIsMCwwLDAsNDQsMTgwWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04NCw2NGE0LDQsMCwwLDEsNC00SDIxNmE0LDQsMCwwLDEsMCw4SDg4QTQsNCwwLDAsMSw4NCw2NFptMTMyLDYwSDg4YTQsNCwwLDAsMCwwLDhIMjE2YTQsNCwwLDAsMCwwLThabTAsNjRIODhhNCw0LDAsMCwwLDAsOEgyMTZhNCw0LDAsMCwwLDAtOFpNNDQsMTIwYTgsOCwwLDEsMCw4LDhBOCw4LDAsMCwwLDQ0LDEyMFptMC02NGE4LDgsMCwxLDAsOCw4QTgsOCwwLDAsMCw0NCw1NlptMCwxMjhhOCw4LDAsMSwwLDgsOEE4LDgsMCwwLDAsNDQsMTg0WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ListBullets";
export { I as ListBullets };
