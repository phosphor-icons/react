/* GENERATED FILE */
import * as React from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/ListDashes";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04OCw2NGE4LDgsMCwwLDEsOC04SDIxNmE4LDgsMCwwLDEsMCwxNkg5NkE4LDgsMCwwLDEsODgsNjRabTEyOCw1Nkg5NmE4LDgsMCwwLDAsMCwxNkgyMTZhOCw4LDAsMCwwLDAtMTZabTAsNjRIOTZhOCw4LDAsMCwwLDAsMTZIMjE2YTgsOCwwLDAsMCwwLTE2Wk01Niw1Nkg0MGE4LDgsMCwwLDAsMCwxNkg1NmE4LDgsMCwwLDAsMC0xNlptMCw2NEg0MGE4LDgsMCwwLDAsMCwxNkg1NmE4LDgsMCwwLDAsMC0xNlptMCw2NEg0MGE4LDgsMCwwLDAsMCwxNkg1NmE4LDgsMCwwLDAsMC0xNloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05Miw2NGE0LDQsMCwwLDEsNC00SDIxNmE0LDQsMCwwLDEsMCw4SDk2QTQsNCwwLDAsMSw5Miw2NFptMTI0LDYwSDk2YTQsNCwwLDAsMCwwLDhIMjE2YTQsNCwwLDAsMCwwLThabTAsNjRIOTZhNCw0LDAsMCwwLDAsOEgyMTZhNCw0LDAsMCwwLDAtOFpNNTYsNjBINDBhNCw0LDAsMCwwLDAsOEg1NmE0LDQsMCwwLDAsMC04Wm0wLDY0SDQwYTQsNCwwLDAsMCwwLDhINTZhNCw0LDAsMCwwLDAtOFptMCw2NEg0MGE0LDQsMCwwLDAsMCw4SDU2YTQsNCwwLDAsMCwwLThaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05MCw2NGE2LDYsMCwwLDEsNi02SDIxNmE2LDYsMCwwLDEsMCwxMkg5NkE2LDYsMCwwLDEsOTAsNjRabTEyNiw1OEg5NmE2LDYsMCwwLDAsMCwxMkgyMTZhNiw2LDAsMCwwLDAtMTJabTAsNjRIOTZhNiw2LDAsMCwwLDAsMTJIMjE2YTYsNiwwLDAsMCwwLTEyWk01Niw1OEg0MGE2LDYsMCwwLDAsMCwxMkg1NmE2LDYsMCwwLDAsMC0xMlptMCw2NEg0MGE2LDYsMCwwLDAsMCwxMkg1NmE2LDYsMCwwLDAsMC0xMlptMCw2NEg0MGE2LDYsMCwwLDAsMCwxMkg1NmE2LDYsMCwwLDAsMC0xMloiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04NCw2NEExMiwxMiwwLDAsMSw5Niw1MkgyMTZhMTIsMTIsMCwwLDEsMCwyNEg5NkExMiwxMiwwLDAsMSw4NCw2NFptMTMyLDUySDk2YTEyLDEyLDAsMCwwLDAsMjRIMjE2YTEyLDEyLDAsMCwwLDAtMjRabTAsNjRIOTZhMTIsMTIsMCwwLDAsMCwyNEgyMTZhMTIsMTIsMCwwLDAsMC0yNFpNNTYsNTJINDBhMTIsMTIsMCwwLDAsMCwyNEg1NmExMiwxMiwwLDAsMCwwLTI0Wm0wLDY0SDQwYTEyLDEyLDAsMCwwLDAsMjRINTZhMTIsMTIsMCwwLDAsMC0yNFptMCw2NEg0MGExMiwxMiwwLDAsMCwwLDI0SDU2YTEyLDEyLDAsMCwwLDAtMjRaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTcyLDE4NEg2NGE4LDgsMCwwLDEsMC0xNmg4YTgsOCwwLDAsMSwwLDE2Wm0wLTQ4SDY0YTgsOCwwLDAsMSwwLTE2aDhhOCw4LDAsMCwxLDAsMTZabTAtNDhINjRhOCw4LDAsMCwxLDAtMTZoOGE4LDgsMCwwLDEsMCwxNlptMTIwLDk2SDEwNGE4LDgsMCwwLDEsMC0xNmg4OGE4LDgsMCwwLDEsMCwxNlptMC00OEgxMDRhOCw4LDAsMCwxLDAtMTZoODhhOCw4LDAsMCwxLDAsMTZabTAtNDhIMTA0YTgsOCwwLDAsMSwwLTE2aDg4YTgsOCwwLDAsMSwwLDE2WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNjRWMTkySDk2VjY0WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTg4LDY0YTgsOCwwLDAsMSw4LThIMjE2YTgsOCwwLDAsMSwwLDE2SDk2QTgsOCwwLDAsMSw4OCw2NFptMTI4LDU2SDk2YTgsOCwwLDEsMCwwLDE2SDIxNmE4LDgsMCwwLDAsMC0xNlptMCw2NEg5NmE4LDgsMCwxLDAsMCwxNkgyMTZhOCw4LDAsMCwwLDAtMTZaTTU2LDU2SDQwYTgsOCwwLDAsMCwwLDE2SDU2YTgsOCwwLDAsMCwwLTE2Wm0wLDY0SDQwYTgsOCwwLDEsMCwwLDE2SDU2YTgsOCwwLDAsMCwwLTE2Wm0wLDY0SDQwYTgsOCwwLDEsMCwwLDE2SDU2YTgsOCwwLDAsMCwwLTE2WiIvPjwvc3ZnPg==)
 */
const I: Icon = React.forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ListDashesIcon";

/** @deprecated Use ListDashesIcon */
export const ListDashes = I;
export { I as ListDashesIcon };
