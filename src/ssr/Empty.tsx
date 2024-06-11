/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Empty";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTguMjQsNjIuNjNsMTUuNjgtMTcuMjVhOCw4LDAsMCwwLTExLjg0LTEwLjc2TDE4Ni40LDUxLjg2QTk1Ljk1LDk1Ljk1LDAsMCwwLDU3Ljc2LDE5My4zN0w0Mi4wOCwyMTAuNjJhOCw4LDAsMSwwLDExLjg0LDEwLjc2TDY5LjYsMjA0LjE0QTk1Ljk1LDk1Ljk1LDAsMCwwLDE5OC4yNCw2Mi42M1pNNDgsMTI4QTgwLDgwLDAsMCwxLDE3NS42LDYzLjc1bC0xMDcsMTE3LjczQTc5LjYzLDc5LjYzLDAsMCwxLDQ4LDEyOFptODAsODBhNzkuNTUsNzkuNTUsMCwwLDEtNDcuNi0xNS43NWwxMDctMTE3LjczQTc5Ljk1LDc5Ljk1LDAsMCwxLDEyOCwyMDhaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIuNzYsNjIuNzJsMTguMi0yMEE0LDQsMCwwLDAsMjA1LDM3LjMxbC0xOC4yLDIwYTkyLDkyLDAsMCwwLTEyMy42LDEzNmwtMTguMiwyMEE0LDQsMCwxLDAsNTEsMjE4LjY5bDE4LjItMjBBOTIsOTIsMCwwLDAsMTkyLjc2LDYyLjcyWk00NCwxMjhBODQsODQsMCwwLDEsMTgxLjQ2LDYzLjI1TDY4LjYzLDE4Ny4zNkE4My43Miw4My43MiwwLDAsMSw0NCwxMjhabTg0LDg0YTgzLjY0LDgzLjY0LDAsMCwxLTUzLjQ2LTE5LjI1TDE4Ny4zNyw2OC42NEE4NCw4NCwwLDAsMSwxMjgsMjEyWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTUuNTEsNjIuNjYsMjEyLjQ0LDQ0QTYsNiwwLDEsMCwyMDMuNTYsMzZMMTg2LjYzLDU0LjU4QTk0LDk0LDAsMCwwLDYwLjQ5LDE5My4zNEw0My41NiwyMTJBNiw2LDAsMCwwLDUyLjQ0LDIyMGwxNi45My0xOC42MkE5NCw5NCwwLDAsMCwxOTUuNTEsNjIuNjZaTTQ2LDEyOEE4MS45Myw4MS45MywwLDAsMSwxNzguNTMsNjMuNDlMNjguNTksMTg0LjQzQTgxLjY5LDgxLjY5LDAsMCwxLDQ2LDEyOFptODIsODJhODEuNTcsODEuNTcsMCwwLDEtNTAuNTMtMTcuNDlMMTg3LjQxLDcxLjU3QTgxLjk0LDgxLjk0LDAsMCwxLDEyOCwyMTBaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDMuNjMsNjIuNjVsMTMuMjUtMTQuNThhMTIsMTIsMCwwLDAtMTcuNzYtMTYuMTRMMTg1Ljg4LDQ2LjQ5QTEwMCwxMDAsMCwwLDAsNTIuMzcsMTkzLjM1TDM5LjEyLDIwNy45M2ExMiwxMiwwLDEsMCwxNy43NiwxNi4xNGwxMy4yNC0xNC41NkExMDAsMTAwLDAsMCwwLDIwMy42Myw2Mi42NVpNNTIsMTI4QTc1Ljk0LDc1Ljk0LDAsMCwxLDE2OS41OCw2NC40M2wtMTAwLjkxLDExMUE3NS42LDc1LjYsMCwwLDEsNTIsMTI4Wm03Niw3NmE3NS41Miw3NS41MiwwLDAsMS00MS41OC0xMi40M2wxMDAuOTEtMTExQTc1Ljk0LDc1Ljk0LDAsMCwxLDEyOCwyMDRaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzAuNDksOTEuNTlBNTYsNTYsMCwwLDEsOTcuNTQsMTc1Wk0xMjgsNzJhNTYsNTYsMCwwLDAtNDIuNDksOTIuNDFsNzMtODMuMzdBNTUuNjcsNTUuNjcsMCwwLDAsMTI4LDcyWm0xMDQsNTZBMTA0LDEwNCwwLDEsMSwxMjgsMjQsMTA0LjEzLDEwNC4xMywwLDAsMSwyMzIsMTI4Wm0tMzIsMGE3MS42OCw3MS42OCwwLDAsMC0xOC44OS00OC41NUwxODYsNzMuMjdhOCw4LDAsMSwwLTEyLTEwLjU0bC00LjkxLDYuMThBNzIsNzIsMCwwLDAsNzQuODksMTc2LjU1TDcwLDE4Mi43M2E4LDgsMCwwLDAsMTIsMTAuNTRsNC45MS02LjE4QTcxLjk1LDcxLjk1LDAsMCwwLDIwMCwxMjhaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTI4YTg4LDg4LDAsMSwxLTg4LTg4QTg4LDg4LDAsMCwxLDIxNiwxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTk4LjI0LDYyLjYzbDE1LjY4LTE3LjI1YTgsOCwwLDAsMC0xMS44NC0xMC43NkwxODYuNCw1MS44NkE5NS45NSw5NS45NSwwLDAsMCw1Ny43NiwxOTMuMzdMNDIuMDgsMjEwLjYyYTgsOCwwLDEsMCwxMS44NCwxMC43Nkw2OS42LDIwNC4xNEE5NS45NSw5NS45NSwwLDAsMCwxOTguMjQsNjIuNjNaTTQ4LDEyOEE4MCw4MCwwLDAsMSwxNzUuNiw2My43NWwtMTA3LDExNy43M0E3OS42Myw3OS42MywwLDAsMSw0OCwxMjhabTgwLDgwYTc5LjU1LDc5LjU1LDAsMCwxLTQ3LjYtMTUuNzVsMTA3LTExNy43M0E3OS45NSw3OS45NSwwLDAsMSwxMjgsMjA4WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Empty";
export { I as Empty };
