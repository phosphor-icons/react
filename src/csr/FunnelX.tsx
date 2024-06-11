/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/FunnelX";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjcuODIsNjYuNzZBMTYsMTYsMCwwLDAsMjE2LDQwSDQwQTE2LDE2LDAsMCwwLDI4LjE5LDY2Ljc2bC4wOC4wOUw5NiwxMzkuMTdWMjE2YTE2LDE2LDAsMCwwLDI0Ljg3LDEzLjMybDMyLTIxLjM0QTE2LDE2LDAsMCwwLDE2MCwxOTQuNjZWMTM5LjE3bDY3LjczLTcyLjMyWk00MCw1NmgwWm0xMDYuMTksNzQuNTlBOCw4LDAsMCwwLDE0NCwxMzZ2NTguNjZMMTEyLDIxNlYxMzZhOCw4LDAsMCwwLTIuMTYtNS40Nkw0MCw1NkgyMTZabTk5LjQ5LDc5LjgxYTgsOCwwLDAsMS0xMS4zMiwxMS4zMkwyMTYsMjAzLjMybC0xOC4zNCwxOC4zNWE4LDgsMCwwLDEtMTEuMzEtMTEuMzJMMjA0LjY5LDE5MmwtMTguMzQtMTguMzVhOCw4LDAsMCwxLDExLjMxLTExLjMxTDIxNiwxODAuNjlsMTguMzQtMTguMzRhOCw4LDAsMCwxLDExLjMyLDExLjMxTDIyNy4zMSwxOTJaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjcsNTEuMTVBMTEuODYsMTEuODYsMCwwLDAsMjE2LDQ0SDQwYTEyLDEyLDAsMCwwLTguODgsMjAuMDdsLjA1LjA1TDEwMCwxMzcuNTlWMjE2YTEyLDEyLDAsMCwwLDE4LjY1LDEwbDMyLTIxLjMzYTEyLDEyLDAsMCwwLDUuMzQtMTBWMTM3LjU5bDY4Ljg2LTczLjUyQTExLjgzLDExLjgzLDAsMCwwLDIyNyw1MS4xNVptLTgsNy41LTY5LjkxLDc0LjYyQTQsNCwwLDAsMCwxNDgsMTM2djU4LjY1YTQsNCwwLDAsMS0xLjc4LDMuMzNsLTMyLDIxLjMzQTQsNCwwLDAsMSwxMDgsMjE2VjEzNmE0LDQsMCwwLDAtMS4wOS0yLjc0TDM3LjA1LDU4LjY3QTQsNCwwLDAsMSw0MCw1MkgyMTZhNCw0LDAsMCwxLDMsNi42NVptMjMuODQsMTU0LjUzYTQsNCwwLDAsMS01LjY2LDUuNjZMMjE2LDE5Ny42N2wtMjEuMTcsMjEuMTdhNCw0LDAsMCwxLTUuNjYtNS42NkwyMTAuMzQsMTkybC0yMS4xNy0yMS4xN2E0LDQsMCwxLDEsNS42Ni01LjY2TDIxNiwxODYuMzVsMjEuMTctMjEuMTdhNCw0LDAsMSwxLDUuNjYsNS42NkwyMjEuNjYsMTkyWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjguNzksNTAuMzRBMTMuODMsMTMuODMsMCwwLDAsMjE2LDQySDQwQTE0LDE0LDAsMCwwLDI5LjY3LDY1LjQybC4wNi4wNkw5OCwxMzguMzhWMjE2YTE0LDE0LDAsMCwwLDIxLjc2LDExLjY0bDMyLTIxLjMzQTE0LDE0LDAsMCwwLDE1OCwxOTQuNjZWMTM4LjM4bDY4LjM0LTczQTEzLjgzLDEzLjgzLDAsMCwwLDIyOC43OSw1MC4zNFptLTExLjI2LDYuOTQtNjkuOSw3NC42MkE2LDYsMCwwLDAsMTQ2LDEzNnY1OC42NmEyLDIsMCwwLDEtLjg5LDEuNjdsLTMyLDIxLjMzQTIsMiwwLDAsMSwxMTAsMjE2VjEzNmE2LDYsMCwwLDAtMS42Mi00LjFMMzguNTMsNTcuMzJhMS44OSwxLjg5LDAsMCwxLS4zMy0yLjEzQTEuOTEsMS45MSwwLDAsMSw0MCw1NEgyMTZhMS45LDEuOSwwLDAsMSwxLjgyLDEuMTlBMS44NywxLjg3LDAsMCwxLDIxNy41Myw1Ny4yOFptMjYuNzEsMTU0LjQ5YTYsNiwwLDEsMS04LjQ4LDguNDhMMjE2LDIwMC40OWwtMTkuNzUsMTkuNzZhNiw2LDAsMCwxLTguNDktOC40OEwyMDcuNTIsMTkybC0xOS43Ni0xOS43NmE2LDYsMCwwLDEsOC40OS04LjQ5TDIxNiwxODMuNTJsMTkuNzYtMTkuNzZhNiw2LDAsMCwxLDguNDgsOC40OUwyMjQuNDksMTkyWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAuNzgsNjkuNDVBMjAsMjAsMCwwLDAsMjE2LDM2SDQwQTIwLDIwLDAsMCwwLDI1LjIsNjkuNDVsLjEyLjE0TDkyLDE0MC43NVYyMTZhMjAsMjAsMCwwLDAsMzEuMDksMTYuNjVsMzItMjEuMzRhMjAsMjAsMCwwLDAsOC45LTE2LjY0VjE0MC43NWw2Ni42Ny03MS4xNlpNMTQzLjIzLDEyNy44QTEyLDEyLDAsMCwwLDE0MCwxMzZ2NTYuNTJsLTI0LDE2VjEzNmExMiwxMiwwLDAsMC0zLjI0LTguMkw0OS4yMyw2MEgyMDYuNzVabTEwNS4yNiw3OS43MmExMiwxMiwwLDEsMS0xNywxN0wyMTYsMjA5bC0xNS41MiwxNS41MWExMiwxMiwwLDAsMS0xNy0xN0wxOTksMTkybC0xNS41Mi0xNS41MmExMiwxMiwwLDAsMSwxNy0xN0wyMTYsMTc1bDE1LjUxLTE1LjUyYTEyLDEyLDAsMSwxLDE3LDE3TDIzMywxOTJaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjcuNzMsNjYuODUsMTYwLDEzOS4xN3Y1NS40OUExNiwxNiwwLDAsMSwxNTIuODcsMjA4bC0zMiwyMS4zNEExNiwxNiwwLDAsMSw5NiwyMTZWMTM5LjE3TDI4LjI3LDY2Ljg1bC0uMDgtLjA5QTE2LDE2LDAsMCwxLDQwLDQwSDIxNmExNiwxNiwwLDAsMSwxMS44NCwyNi43NlpNMjI3LjMxLDE5MmwxOC4zNS0xOC4zNGE4LDgsMCwwLDAtMTEuMzItMTEuMzJMMjE2LDE4MC42OWwtMTguMzQtMTguMzVhOCw4LDAsMCwwLTExLjMyLDExLjMyTDIwNC42OSwxOTJsLTE4LjM1LDE4LjM0YTgsOCwwLDAsMCwxMS4zMiwxMS4zMkwyMTYsMjAzLjMxbDE4LjM0LDE4LjM1YTgsOCwwLDAsMCwxMS4zMi0xMS4zMloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjEuOSw2MS4zOCwxNTIsMTM2djU4LjY1YTgsOCwwLDAsMS0zLjU2LDYuNjZsLTMyLDIxLjMzQTgsOCwwLDAsMSwxMDQsMjE2VjEzNkwzNC4xLDYxLjM4QTgsOCwwLDAsMSw0MCw0OEgyMTZBOCw4LDAsMCwxLDIyMS45LDYxLjM4WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIyNy44Miw2Ni43NkExNiwxNiwwLDAsMCwyMTYsNDBINDBBMTYsMTYsMCwwLDAsMjguMTksNjYuNzZsLjA4LjA5TDk2LDEzOS4xN1YyMTZhMTYsMTYsMCwwLDAsMjQuODcsMTMuMzJsMzItMjEuMzRBMTYsMTYsMCwwLDAsMTYwLDE5NC42NlYxMzkuMTdsNjcuNzMtNzIuMzJaTTQwLDU2aDBabTEwNi4xOSw3NC41OUE4LDgsMCwwLDAsMTQ0LDEzNnY1OC42NkwxMTIsMjE2VjEzNmE4LDgsMCwwLDAtMi4xNi01LjQ2TDQwLDU2SDIxNlptOTkuNDksNzkuODFhOCw4LDAsMCwxLTExLjMyLDExLjMyTDIxNiwyMDMuMzJsLTE4LjM0LDE4LjM1YTgsOCwwLDAsMS0xMS4zMS0xMS4zMkwyMDQuNjksMTkybC0xOC4zNC0xOC4zNWE4LDgsMCwwLDEsMTEuMzEtMTEuMzFMMjE2LDE4MC42OWwxOC4zNC0xOC4zNGE4LDgsMCwwLDEsMTEuMzIsMTEuMzFMMjI3LjMxLDE5MloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "FunnelX";
export { I as FunnelX };
