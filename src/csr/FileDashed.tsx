/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/FileDashed";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04NCwyMjRhMTIsMTIsMCwwLDEtMTIsMTJINTZhMjAsMjAsMCwwLDEtMjAtMjBWMTg0YTEyLDEyLDAsMCwxLDI0LDB2MjhINzJBMTIsMTIsMCwwLDEsODQsMjI0Wk0yMjAsODh2NDhhMTIsMTIsMCwwLDEtMjQsMFYxMDRIMTQ4YTEyLDEyLDAsMCwxLTEyLTEyVjQ0SDEyMGExMiwxMiwwLDAsMSwwLTI0aDMyYTEyLDEyLDAsMCwxLDguNDksMy41MWw1Niw1NkExMiwxMiwwLDAsMSwyMjAsODhabS02MC04aDIzTDE2MCw1N1pNODAsMjBINTZBMjAsMjAsMCwwLDAsMzYsNDBWNjRhMTIsMTIsMCwwLDAsMjQsMFY0NEg4MGExMiwxMiwwLDAsMCwwLTI0Wk0yMDgsMTY0YTEyLDEyLDAsMCwwLTEyLDEydjM2aC00YTEyLDEyLDAsMCwwLDAsMjRoOGEyMCwyMCwwLDAsMCwyMC0yMFYxNzZBMTIsMTIsMCwwLDAsMjA4LDE2NFpNNDgsMTU2YTEyLDEyLDAsMCwwLDEyLTEyVjEwNGExMiwxMiwwLDAsMC0yNCwwdjQwQTEyLDEyLDAsMCwwLDQ4LDE1NlptMTA0LDU2SDExMmExMiwxMiwwLDAsMCwwLDI0aDQwYTEyLDEyLDAsMCwwLDAtMjRaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsODhIMTUyVjMyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTgwLDIyNGE4LDgsMCwwLDEtOCw4SDU2YTE2LDE2LDAsMCwxLTE2LTE2VjE4NGE4LDgsMCwwLDEsMTYsMHYzMkg3MkE4LDgsMCwwLDEsODAsMjI0Wk0yMTYsODh2NDhhOCw4LDAsMCwxLTE2LDBWOTZIMTUyYTgsOCwwLDAsMS04LThWNDBIMTIwYTgsOCwwLDAsMSwwLTE2aDMyYTgsOCwwLDAsMSw1LjY2LDIuMzRsNTYsNTZBOCw4LDAsMCwxLDIxNiw4OFptLTU2LThoMjguNjlMMTYwLDUxLjMxWk04MCwyNEg1NkExNiwxNiwwLDAsMCw0MCw0MFY2NGE4LDgsMCwwLDAsMTYsMFY0MEg4MGE4LDgsMCwwLDAsMC0xNlpNMjA4LDE2OGE4LDgsMCwwLDAtOCw4djQwaC04YTgsOCwwLDAsMCwwLDE2aDhhMTYsMTYsMCwwLDAsMTYtMTZWMTc2QTgsOCwwLDAsMCwyMDgsMTY4Wk00OCwxNTJhOCw4LDAsMCwwLDgtOFYxMDRhOCw4LDAsMCwwLTE2LDB2NDBBOCw4LDAsMCwwLDQ4LDE1MlptMTA0LDY0SDExMmE4LDgsMCwwLDAsMCwxNmg0MGE4LDgsMCwwLDAsMC0xNloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04MCwyMjRhOCw4LDAsMCwxLTgsOEg1NmExNiwxNiwwLDAsMS0xNi0xNlYxODRhOCw4LDAsMCwxLDE2LDB2MzJINzJBOCw4LDAsMCwxLDgwLDIyNFpNMjEzLjY2LDgyLjM0bC01Ni01NkE4LDgsMCwwLDAsMTUyLDI0SDEyMGE4LDgsMCwwLDAsMCwxNmgyNFY4OGE4LDgsMCwwLDAsOCw4aDQ4djQwYTgsOCwwLDAsMCwxNiwwVjg4QTgsOCwwLDAsMCwyMTMuNjYsODIuMzRaTTgwLDI0SDU2QTE2LDE2LDAsMCwwLDQwLDQwVjY0YTgsOCwwLDAsMCwxNiwwVjQwSDgwYTgsOCwwLDAsMCwwLTE2Wk0yMDgsMTY4YTgsOCwwLDAsMC04LDh2NDBoLThhOCw4LDAsMCwwLDAsMTZoOGExNiwxNiwwLDAsMCwxNi0xNlYxNzZBOCw4LDAsMCwwLDIwOCwxNjhaTTQ4LDE1MmE4LDgsMCwwLDAsOC04VjEwNGE4LDgsMCwwLDAtMTYsMHY0MEE4LDgsMCwwLDAsNDgsMTUyWm0xMDQsNjRIMTEyYTgsOCwwLDAsMCwwLDE2aDQwYTgsOCwwLDAsMCwwLTE2WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03OCwyMjRhNiw2LDAsMCwxLTYsNkg1NmExNCwxNCwwLDAsMS0xNC0xNFYxODRhNiw2LDAsMCwxLDEyLDB2MzJhMiwyLDAsMCwwLDIsMkg3MkE2LDYsMCwwLDEsNzgsMjI0Wk0yMTQsODh2NDhhNiw2LDAsMCwxLTEyLDBWOTRIMTUyYTYsNiwwLDAsMS02LTZWMzhIMTIwYTYsNiwwLDAsMSwwLTEyaDMyYTYsNiwwLDAsMSw0LjI0LDEuNzZsNTYsNTZBNiw2LDAsMCwxLDIxNCw4OFptLTU2LTZoMzUuNTFMMTU4LDQ2LjQ5Wk04MCwyNkg1NkExNCwxNCwwLDAsMCw0Miw0MFY2NGE2LDYsMCwwLDAsMTIsMFY0MGEyLDIsMCwwLDEsMi0ySDgwYTYsNiwwLDAsMCwwLTEyWk0yMDgsMTcwYTYsNiwwLDAsMC02LDZ2NDBhMiwyLDAsMCwxLTIsMmgtOGE2LDYsMCwwLDAsMCwxMmg4YTE0LDE0LDAsMCwwLDE0LTE0VjE3NkE2LDYsMCwwLDAsMjA4LDE3MFpNNDgsMTUwYTYsNiwwLDAsMCw2LTZWMTA0YTYsNiwwLDAsMC0xMiwwdjQwQTYsNiwwLDAsMCw0OCwxNTBabTEwNCw2OEgxMTJhNiw2LDAsMCwwLDAsMTJoNDBhNiw2LDAsMCwwLDAtMTJaIi8+PC9zdmc+)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04MCwyMjRhOCw4LDAsMCwxLTgsOEg1NmExNiwxNiwwLDAsMS0xNi0xNlYxODRhOCw4LDAsMCwxLDE2LDB2MzJINzJBOCw4LDAsMCwxLDgwLDIyNFpNMjE2LDg4djQ4YTgsOCwwLDAsMS0xNiwwVjk2SDE1MmE4LDgsMCwwLDEtOC04VjQwSDEyMGE4LDgsMCwwLDEsMC0xNmgzMmE4LDgsMCwwLDEsNS42NiwyLjM0bDU2LDU2QTgsOCwwLDAsMSwyMTYsODhabS01Ni04aDI4LjY5TDE2MCw1MS4zMVpNODAsMjRINTZBMTYsMTYsMCwwLDAsNDAsNDBWNjRhOCw4LDAsMCwwLDE2LDBWNDBIODBhOCw4LDAsMCwwLDAtMTZaTTIwOCwxNjhhOCw4LDAsMCwwLTgsOHY0MGgtOGE4LDgsMCwwLDAsMCwxNmg4YTE2LDE2LDAsMCwwLDE2LTE2VjE3NkE4LDgsMCwwLDAsMjA4LDE2OFpNNDgsMTUyYTgsOCwwLDAsMCw4LThWMTA0YTgsOCwwLDAsMC0xNiwwdjQwQTgsOCwwLDAsMCw0OCwxNTJabTEwNCw2NEgxMTJhOCw4LDAsMCwwLDAsMTZoNDBhOCw4LDAsMCwwLDAtMTZaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03NiwyMjRhNCw0LDAsMCwxLTQsNEg1NmExMiwxMiwwLDAsMS0xMi0xMlYxODRhNCw0LDAsMCwxLDgsMHYzMmE0LDQsMCwwLDAsNCw0SDcyQTQsNCwwLDAsMSw3NiwyMjRaTTIxMiw4OHY0OGE0LDQsMCwwLDEtOCwwVjkySDE1MmE0LDQsMCwwLDEtNC00VjM2SDEyMGE0LDQsMCwwLDEsMC04aDMyYTQsNCwwLDAsMSwyLjgzLDEuMTdsNTYsNTZBNCw0LDAsMCwxLDIxMiw4OFptLTU2LTRoNDIuMzRMMTU2LDQxLjY2Wk04MCwyOEg1NkExMiwxMiwwLDAsMCw0NCw0MFY2NGE0LDQsMCwwLDAsOCwwVjQwYTQsNCwwLDAsMSw0LTRIODBhNCw0LDAsMCwwLDAtOFpNMjA4LDE3MmE0LDQsMCwwLDAtNCw0djQwYTQsNCwwLDAsMS00LDRoLThhNCw0LDAsMCwwLDAsOGg4YTEyLDEyLDAsMCwwLDEyLTEyVjE3NkE0LDQsMCwwLDAsMjA4LDE3MlpNNDgsMTQ4YTQsNCwwLDAsMCw0LTRWMTA0YTQsNCwwLDAsMC04LDB2NDBBNCw0LDAsMCwwLDQ4LDE0OFptMTA0LDcySDExMmE0LDQsMCwwLDAsMCw4aDQwYTQsNCwwLDAsMCwwLThaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "FileDashed";
export { I as FileDashed, I as FileDotted };
