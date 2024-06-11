/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/EnvelopeOpen";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAuNjYsODZsLTk2LTY0YTEyLDEyLDAsMCwwLTEzLjMyLDBsLTk2LDY0QTEyLDEyLDAsMCwwLDIwLDk2VjIwMGEyMCwyMCwwLDAsMCwyMCwyMEgyMTZhMjAsMjAsMCwwLDAsMjAtMjBWOTZBMTIsMTIsMCwwLDAsMjMwLjY2LDg2Wk04OS44MSwxNTIsNDQsMTg0LjMxdi02NVpNMTE0LjM2LDE2NGgyNy4yOEwxODcsMTk2SDY5LjA1Wk0xNjYuMTksMTUyLDIxMiwxMTkuMjl2NjVaTTEyOCw0Ni40Mmw3NC44Niw0OS45MUwxNDEuNjEsMTQwSDExNC4zOUw1My4xNCw5Ni4zM1oiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsOTZsLTc4LjU1LDU2aC0zNC45TDMyLDk2bDk2LTY0WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIyOC40NCw4OS4zNGwtOTYtNjRhOCw4LDAsMCwwLTguODgsMGwtOTYsNjRBOCw4LDAsMCwwLDI0LDk2VjIwMGExNiwxNiwwLDAsMCwxNiwxNkgyMTZhMTYsMTYsMCwwLDAsMTYtMTZWOTZBOCw4LDAsMCwwLDIyOC40NCw4OS4zNFpNOTYuNzIsMTUyLDQwLDE5MlYxMTEuNTNabTE2LjM3LDhoMjkuODJsNTYuNjMsNDBINTYuNDZabTQ2LjE5LThMMjE2LDExMS41M1YxOTJaTTEyOCw0MS42MWw4MS45MSw1NC42MS02Nyw0Ny43OEgxMTMuMTFsLTY3LTQ3Ljc4WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjguNDQsODkuMzRsLTk2LTY0YTgsOCwwLDAsMC04Ljg4LDBsLTk2LDY0QTgsOCwwLDAsMCwyNCw5NlYyMDBhMTYsMTYsMCwwLDAsMTYsMTZIMjE2YTE2LDE2LDAsMCwwLDE2LTE2Vjk2QTgsOCwwLDAsMCwyMjguNDQsODkuMzRaTTk2LjcyLDE1Miw0MCwxOTJWMTExLjUzWm0xNi4zNyw4aDI5LjgybDU2LjYzLDQwSDU2LjQ2Wm00Ni4xOS04TDIxNiwxMTEuNTNWMTkyWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjcuMzMsOTFsLTk2LTY0YTYsNiwwLDAsMC02LjY2LDBsLTk2LDY0QTYsNiwwLDAsMCwyNiw5NlYyMDBhMTQsMTQsMCwwLDAsMTQsMTRIMjE2YTE0LDE0LDAsMCwwLDE0LTE0Vjk2QTYsNiwwLDAsMCwyMjcuMzMsOTFaTTEwMC4xOCwxNTIsMzgsMTk1LjlWMTA3LjY1Wm0xMi4yNyw2aDMxLjFsNjIuMjksNDRINTAuMTZabTQzLjM3LTZMMjE4LDEwNy42NVYxOTUuOVpNMTI4LDM5LjIxbDg1LjQzLDU3TDE0My41MywxNDZIMTEyLjQ3TDQyLjU3LDk2LjE3WiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjguNDQsODkuMzRsLTk2LTY0YTgsOCwwLDAsMC04Ljg4LDBsLTk2LDY0QTgsOCwwLDAsMCwyNCw5NlYyMDBhMTYsMTYsMCwwLDAsMTYsMTZIMjE2YTE2LDE2LDAsMCwwLDE2LTE2Vjk2QTgsOCwwLDAsMCwyMjguNDQsODkuMzRaTTk2LjcyLDE1Miw0MCwxOTJWMTExLjUzWm0xNi4zNyw4aDI5LjgybDU2LjYzLDQwSDU2LjQ2Wm00Ni4xOS04TDIxNiwxMTEuNTNWMTkyWk0xMjgsNDEuNjFsODEuOTEsNTQuNjEtNjcsNDcuNzhIMTEzLjExbC02Ny00Ny43OFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjYuMjIsOTIuNjdsLTk2LTY0YTQsNCwwLDAsMC00LjQ0LDBsLTk2LDY0QTQsNCwwLDAsMCwyOCw5NlYyMDBhMTIsMTIsMCwwLDAsMTIsMTJIMjE2YTEyLDEyLDAsMCwwLDEyLTEyVjk2QTQsNCwwLDAsMCwyMjYuMjIsOTIuNjdaTTEwMy42MywxNTIsMzYsMTk5Ljc2di05NlptOC4xOSw0aDMyLjM2bDY4LDQ4SDQzLjg2Wm00MC41NS00TDIyMCwxMDMuNzZ2OTZaTTEyOCwzNi44MSwyMTcsOTYuMTEsMTQ0LjE3LDE0OEgxMTEuODNMMzkuMDUsOTYuMTFaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "EnvelopeOpen";
export { I as EnvelopeOpen };
