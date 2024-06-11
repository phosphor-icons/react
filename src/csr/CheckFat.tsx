/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/CheckFat";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDYuMTUsNjUuNDZsLS4wNy0uMDhMMjIyLjE1LDQxLjg1YTIwLDIwLDAsMCwwLTI4LjIzLS4wNWwtOTAsODguODNMNzAuMDYsOTcuNzhhMjAsMjAsMCwwLDAtMjguMjEuMDhsLTI0LDI0YTIwLDIwLDAsMCwwLDAsMjguMjZsNzEuNjIsNzJhMjAsMjAsMCwwLDAsMjguMjksMEwyNDYuMTUsOTMuNzRBMjAsMjAsMCwwLDAsMjQ2LjE1LDY1LjQ2Wk0xMDMuNjEsMjAyLjMzLDM3LjY0LDEzNiw1NiwxMTcuNjEsOTUuNjUsMTU2YTEyLDEyLDAsMCwwLDE2Ljc4LS4wOEwyMDgsNjEuNjFsMTguMzIsMThaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzcuNjYsODUuMjZsLTEyOC40LDEyOC40YTgsOCwwLDAsMS0xMS4zMiwwbC03MS42LTcyYTgsOCwwLDAsMSwwLTExLjMxbDI0LTI0YTgsOCwwLDAsMSwxMS4zMiwwTDEwNCwxNDcuNDNsOTguMzQtOTcuMDlhOCw4LDAsMCwxLDExLjMyLDBsMjQsMjMuNkE4LDgsMCwwLDEsMjM3LjY2LDg1LjI2WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTI0My4yOCw2OC4yNGwtMjQtMjMuNTZhMTYsMTYsMCwwLDAtMjIuNTksMEwxMDQsMTM2LjIzbC0zNi42OS0zNS42YTE2LDE2LDAsMCwwLTIyLjU4LjA1bC0yNCwyNGExNiwxNiwwLDAsMCwwLDIyLjYxbDcxLjYyLDcyYTE2LDE2LDAsMCwwLDIyLjYzLDBMMjQzLjMzLDkwLjkxQTE2LDE2LDAsMCwwLDI0My4yOCw2OC4yNFpNMTAzLjYyLDIwOCwzMiwxMzZsMjQtMjRhLjYuNiwwLDAsMSwuMDguMDhsNDIuMzUsNDEuMDlhOCw4LDAsMCwwLDExLjE5LDBMMjA4LjA2LDU2LDIzMiw3OS42WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDMuMzEsOTAuOTFsLTEyOC40LDEyOC40YTE2LDE2LDAsMCwxLTIyLjYyLDBsLTcxLjYyLTcyYTE2LDE2LDAsMCwxLDAtMjIuNjFsMjAtMjBhMTYsMTYsMCwwLDEsMjIuNTgsMEwxMDQsMTQ0LjIybDk2Ljc2LTk1LjU3YTE2LDE2LDAsMCwxLDIyLjU5LDBsMTkuOTUsMTkuNTRBMTYsMTYsMCwwLDEsMjQzLjMxLDkwLjkxWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDEuODcsNjkuNjZsLTI0LTIzLjU2YTE0LDE0LDAsMCwwLTE5Ljc3LDBMMTA0LDEzOSw2NS45LDEwMi4xYTE0LDE0LDAsMCwwLTE5LjgsMGwtMjQsMjRhMTQsMTQsMCwwLDAsMCwxOS43OWw3MS42Miw3MmExNCwxNCwwLDAsMCwxOS44LDBMMjQxLjkxLDg5LjVBMTQsMTQsMCwwLDAsMjQxLjg3LDY5LjY2Wk0yMzMuNDIsODEsMTA1LDIwOS40MWEyLDIsMCwwLDEtMi44MSwwbC03MS42Mi03MmEyLDIsMCwwLDEsMC0yLjgybDI0LTI0QTIsMiwwLDAsMSw1NiwxMTBhMi4xMiwyLjEyLDAsMCwxLDEuNS42NGw0Mi4zNSw0MS4wOGE2LDYsMCwwLDAsOC4zOSwwbDk4LjM3LTk3LjExYTIsMiwwLDAsMSwyLjg3LDBsMjQsMjMuNTZBMiwyLDAsMCwxLDIzMy40Miw4MVoiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDMuMjgsNjguMjRsLTI0LTIzLjU2YTE2LDE2LDAsMCwwLTIyLjU5LDBMMTA0LDEzNi4yM2wtMzYuNjktMzUuNmExNiwxNiwwLDAsMC0yMi41OC4wNWwtMjQsMjRhMTYsMTYsMCwwLDAsMCwyMi42MWw3MS42Miw3MmExNiwxNiwwLDAsMCwyMi42MywwTDI0My4zMyw5MC45MUExNiwxNiwwLDAsMCwyNDMuMjgsNjguMjRaTTEwMy42MiwyMDgsMzIsMTM2bDI0LTI0YS42LjYsMCwwLDEsLjA4LjA4bDQyLjM1LDQxLjA5YTgsOCwwLDAsMCwxMS4xOSwwTDIwOC4wNiw1NiwyMzIsNzkuNloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAuNDcsNzEuMDlsLTI0LTIzLjU4YTEyLDEyLDAsMCwwLTE3LDBMMTA0LDE0MS44M2wtMzkuNS0zOC4zMmExMiwxMiwwLDAsMC0xNywwbC0yNCwyNGExMiwxMiwwLDAsMCwwLDE3bDcxLjYxLDcyYTEyLDEyLDAsMCwwLDE3LDBMMjQwLjQ5LDg4LjA4QTEyLDEyLDAsMCwwLDI0MC40Nyw3MS4wOVptLTUuNjMsMTEuMzRMMTA2LjQzLDIxMC44M2E0LDQsMCwwLDEtNS42NSwwbC03MS42MS03MmE0LDQsMCwwLDEsMC01LjY2bDI0LTI0QTMuOTQsMy45NCwwLDAsMSw1NiwxMDhhNC4xMSw0LjExLDAsMCwxLDIuODksMS4yMWw0Mi4zNSw0MS4wOGE0LDQsMCwwLDAsNS41OSwwbDk4LjM3LTk3LjFhNCw0LDAsMCwxLDUuNjgsMGwyNCwyMy41OEE0LDQsMCwwLDEsMjM0Ljg0LDgyLjQzWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "CheckFat";
export { I as CheckFat };
