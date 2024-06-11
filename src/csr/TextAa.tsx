/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/TextAa";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04Ny4yNCw1Mi41OWE4LDgsMCwwLDAtMTQuNDgsMGwtNjQsMTM2YTgsOCwwLDEsMCwxNC40OCw2LjgxTDM5LjksMTYwaDgwLjJsMTYuNjYsMzUuNGE4LDgsMCwxLDAsMTQuNDgtNi44MVpNNDcuNDMsMTQ0LDgwLDc0Ljc5LDExMi41NywxNDRaTTIwMCw5NmMtMTIuNzYsMC0yMi43MywzLjQ3LTI5LjYzLDEwLjMyYTgsOCwwLDAsMCwxMS4yNiwxMS4zNmMzLjgtMy43NywxMC01LjY4LDE4LjM3LTUuNjgsMTMuMjMsMCwyNCw5LDI0LDIwdjMuMjJBNDIuNzYsNDIuNzYsMCwwLDAsMjAwLDEyOGMtMjIuMDYsMC00MCwxNi4xNS00MCwzNnMxNy45NCwzNiw0MCwzNmE0Mi43Myw0Mi43MywwLDAsMCwyNC03LjI1LDgsOCwwLDAsMCwxNi0uNzVWMTMyQzI0MCwxMTIuMTUsMjIyLjA2LDk2LDIwMCw5NlptMCw4OGMtMTMuMjMsMC0yNC05LTI0LTIwczEwLjc3LTIwLDI0LTIwLDI0LDksMjQsMjBTMjEzLjIzLDE4NCwyMDAsMTg0WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04My42Miw1NC4zYTQsNCwwLDAsMC03LjI0LDBsLTY0LDEzNmE0LDQsMCwwLDAsNy4yNCwzLjRMMzcuMzYsMTU2aDg1LjI4bDE3Ljc0LDM3LjdhNCw0LDAsMSwwLDcuMjQtMy40Wk00MS4xMywxNDgsODAsNjUuMzksMTE4Ljg3LDE0OFpNMjAwLDEwMGMtMTEuNjcsMC0yMC42OSwzLjA4LTI2LjgyLDkuMTZhNCw0LDAsMSwwLDUuNjQsNS42OGM0LjU3LTQuNTQsMTEuNy02Ljg0LDIxLjE4LTYuODQsMTUuNDQsMCwyOCwxMC43NywyOCwyNHYxMS45MkEzNy43OCwzNy43OCwwLDAsMCwyMDAsMTMyYy0xOS44NSwwLTM2LDE0LjM1LTM2LDMyczE2LjE1LDMyLDM2LDMyYTM3Ljc4LDM3Ljc4LDAsMCwwLDI4LTExLjkyVjE5MmE0LDQsMCwwLDAsOCwwVjEzMkMyMzYsMTE0LjM2LDIxOS44NSwxMDAsMjAwLDEwMFptMCw4OGMtMTUuNDQsMC0yOC0xMC43Ny0yOC0yNHMxMi41Ni0yNCwyOC0yNCwyOCwxMC43NywyOCwyNFMyMTUuNDQsMTg4LDIwMCwxODhaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04NS40Myw1My40NWE2LDYsMCwwLDAtMTAuODYsMGwtNjQsMTM2YTYsNiwwLDEsMCwxMC44Niw1LjExTDM4LjYzLDE1OGg4Mi43NGwxNy4yLDM2LjU1YTYsNiwwLDEsMCwxMC44Ni01LjExWk00NC4yOCwxNDYsODAsNzAuMDksMTE1LjcyLDE0NlpNMjAwLDk4Yy0xMi4yMSwwLTIxLjcxLDMuMjgtMjguMjMsOS43NGE2LDYsMCwwLDAsOC40Niw4LjUyYzQuMTgtNC4xNSwxMC44NC02LjI2LDE5Ljc3LTYuMjYsMTQuMzQsMCwyNiw5Ljg3LDI2LDIydjcuMjRBNDAuMzYsNDAuMzYsMCwwLDAsMjAwLDEzMGMtMjAuOTUsMC0zOCwxNS4yNS0zOCwzNHMxNy4wNSwzNCwzOCwzNGE0MC4zNiw0MC4zNiwwLDAsMCwyNi05LjI0VjE5MmE2LDYsMCwwLDAsMTIsMFYxMzJDMjM4LDExMy4yNSwyMjEsOTgsMjAwLDk4Wm0wLDg4Yy0xNC4zNCwwLTI2LTkuODctMjYtMjJzMTEuNjYtMjIsMjYtMjIsMjYsOS44NywyNiwyMlMyMTQuMzQsMTg2LDIwMCwxODZaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05MC44Niw1MC44OWExMiwxMiwwLDAsMC0yMS43MiwwbC02NCwxMzZhMTIsMTIsMCwwLDAsMjEuNzEsMTAuMjJMNDIuNDQsMTY0aDc1LjEybDE1LjU4LDMzLjExYTEyLDEyLDAsMCwwLDIxLjcyLTEwLjIyWk01My43NCwxNDAsODAsODQuMTgsMTA2LjI3LDE0MFpNMjAwLDg0Yy0xMy44NSwwLTI0Ljc3LDMuODYtMzIuNDUsMTEuNDhhMTIsMTIsMCwxLDAsMTYuOSwxN2MzLTMsOC4yNi00LjUyLDE1LjU1LTQuNTIsMTEsMCwyMCw3LjE4LDIwLDE2djQuMzlBNDcuMjgsNDcuMjgsMCwwLDAsMjAwLDEyNGMtMjQuMjYsMC00NCwxNy45NC00NCw0MHMxOS43NCw0MCw0NCw0MGE0Ny4xOCw0Ny4xOCwwLDAsMCwyMi01LjM4QTEyLDEyLDAsMCwwLDI0NCwxOTJWMTI0QzI0NCwxMDEuOTQsMjI0LjI2LDg0LDIwMCw4NFptMCw5NmMtMTEsMC0yMC03LjE4LTIwLTE2czktMTYsMjAtMTYsMjAsNy4xOCwyMCwxNlMyMTEsMTgwLDIwMCwxODBaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMTU2YzAsNi41LTcuMzMsMTItMTYsMTJzLTE2LTUuNS0xNi0xMiw3LjMzLTEyLDE2LTEyUzIwMCwxNDkuNSwyMDAsMTU2Wk0yMzIsNTZWMjAwYTE2LDE2LDAsMCwxLTE2LDE2SDQwYTE2LDE2LDAsMCwxLTE2LTE2VjU2QTE2LDE2LDAsMCwxLDQwLDQwSDIxNkExNiwxNiwwLDAsMSwyMzIsNTZaTTE0My4zNywxNzIuODhsLTQ0LTEwNGE4LDgsMCwwLDAtMTQuNzQsMGwtNDQsMTA0YTgsOCwwLDAsMCwxNC43NCw2LjI0TDY2Ljg0LDE1Mmg1MC4zMmwxMS40NywyNy4xMmE4LDgsMCwwLDAsMTQuNzQtNi4yNFpNMjE2LDEyNGMwLTE1LjQ0LTE0LjM2LTI4LTMyLTI4YTM0Ljg2LDM0Ljg2LDAsMCwwLTIwLjc4LDYuNjgsOCw4LDAsMCwwLDkuNTYsMTIuODNBMTguODQsMTguODQsMCwwLDEsMTg0LDExMmM4LjU2LDAsMTUuOCw1LjM2LDE2LDExLjc2djhBMzUuMjQsMzUuMjQsMCwwLDAsMTg0LDEyOGMtMTcuNjQsMC0zMiwxMi41Ni0zMiwyOHMxNC4zNiwyOCwzMiwyOGEzNS4xMywzNS4xMywwLDAsMCwxNi45My00LjI2QTgsOCwwLDAsMCwyMTYsMTc2Wk03My42MSwxMzZoMzYuNzhMOTIsOTIuNTNaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTY0YzAsMTUuNDYtMTQuMzMsMjgtMzIsMjhzLTMyLTEyLjU0LTMyLTI4LDE0LjMzLTI4LDMyLTI4UzIzMiwxNDguNTQsMjMyLDE2NFpNMzQuODIsMTUyaDkwLjM2TDgwLDU2WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTg3LjI0LDUyLjU5YTgsOCwwLDAsMC0xNC40OCwwbC02NCwxMzZhOCw4LDAsMSwwLDE0LjQ4LDYuODFMMzkuOSwxNjBoODAuMmwxNi42NiwzNS40YTgsOCwwLDEsMCwxNC40OC02LjgxWk00Ny40MywxNDQsODAsNzQuNzksMTEyLjU3LDE0NFpNMjAwLDk2Yy0xMi43NiwwLTIyLjczLDMuNDctMjkuNjMsMTAuMzJhOCw4LDAsMCwwLDExLjI2LDExLjM2YzMuOC0zLjc3LDEwLTUuNjgsMTguMzctNS42OCwxMy4yMywwLDI0LDksMjQsMjB2My4yMkE0Mi43Niw0Mi43NiwwLDAsMCwyMDAsMTI4Yy0yMi4wNiwwLTQwLDE2LjE1LTQwLDM2czE3Ljk0LDM2LDQwLDM2YTQyLjczLDQyLjczLDAsMCwwLDI0LTcuMjUsOCw4LDAsMCwwLDE2LS43NVYxMzJDMjQwLDExMi4xNSwyMjIuMDYsOTYsMjAwLDk2Wm0wLDg4Yy0xMy4yMywwLTI0LTktMjQtMjBzMTAuNzctMjAsMjQtMjAsMjQsOSwyNCwyMFMyMTMuMjMsMTg0LDIwMCwxODRaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "TextAa";
export { I as TextAa };
