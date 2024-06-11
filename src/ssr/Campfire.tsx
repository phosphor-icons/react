/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Campfire";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjcuNTEsMjI3LjRBMTIsMTIsMCwwLDEsMjE2LDIzNmExMi4xNSwxMi4xNSwwLDAsMS0zLjQtLjQ5bC04NC42LTI1LTg0LjYsMjVBMTIuMTUsMTIuMTUsMCwwLDEsNDAsMjM2YTEyLDEyLDAsMCwxLTMuNC0yMy41MUw4NS42NSwxOTgsMzYuNiwxODMuNTFhMTIsMTIsMCwwLDEsNi44LTIzbDg0LjYsMjUsODQuNi0yNWExMiwxMiwwLDEsMSw2LjgsMjNMMTcwLjM1LDE5OGw0OS4wNSwxNC40OUExMiwxMiwwLDAsMSwyMjcuNTEsMjI3LjRaTTY0LDEwNGMwLTUwLjU5LDU1LjkzLTgxLjI4LDU4LjMxLTgyLjU3YTEyLDEyLDAsMCwxLDExLjM4LDBDMTM2LjA3LDIyLjcyLDE5Miw1My40MSwxOTIsMTA0YTY0LDY0LDAsMCwxLTEyOCwwWm02NCw0MGExMiwxMiwwLDAsMCwxMi0xMmMwLTYuNDctMi43MS0xMi41NS04LTE4LjA3YTQxLjI2LDQxLjI2LDAsMCwwLTQtMy41Nyw0Mi40OSw0Mi40OSwwLDAsMC00LDMuNTdjLTUuMzMsNS41Mi04LDExLjYtOCwxOC4wN0ExMiwxMiwwLDAsMCwxMjgsMTQ0Wk04OCwxMDRhMzkuNzgsMzkuNzgsMCwwLDAsNC44NSwxOS4wOGM0LjgxLTI1LDI4LjY2LTM3LjI1LDI5Ljc4LTM3LjgxYTEyLDEyLDAsMCwxLDEwLjc0LDBjMS4xMi41NiwyNSwxMi43OCwyOS43OCwzNy44MUEzOS43OCwzOS43OCwwLDAsMCwxNjgsMTA0YzAtMjguMzQtMjcuNzQtNDkuODEtNDAtNTcuOTJDMTE1Ljc1LDU0LjE4LDg4LDc1LjY2LDg4LDEwNFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODAsMTA4YTUyLDUyLDAsMCwxLTUyLDUyLDI0LDI0LDAsMCwwLDI0LTI0YzAtMjQtMjQtNDAtMjQtNDBzLTI0LDE2LTI0LDQwYTI0LDI0LDAsMCwwLDI0LDI0LDUyLDUyLDAsMCwxLTUyLTUyYzAtNDQsNTItNzYsNTItNzZTMTgwLDY0LDE4MCwxMDhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTI4LDE2OGE2MC4wNyw2MC4wNywwLDAsMCw2MC02MGMwLTQ3LjkyLTUzLjUzLTgxLjQxLTU1LjgxLTgyLjgxYTgsOCwwLDAsMC04LjM4LDBBMTU2LDE1NiwwLDAsMCw5Ni4yNCw0OEM3Ny43Nyw2Ny4xMyw2OCw4Ny45LDY4LDEwOEE2MC4wNyw2MC4wNywwLDAsMCwxMjgsMTY4Wm0tMTYtMzJjMC0xMy41NywxMC0yNC40NiwxNi0yOS43OSw2LDUuMzMsMTYsMTYuMjIsMTYsMjkuNzlhMTYsMTYsMCwwLDEtMzIsMFptMTYtOTQuMzRDMTM5Ljc0LDUwLDE3Miw3NiwxNzIsMTA4YTQzLjgzLDQzLjgzLDAsMCwxLTEyLjA5LDMwLjI0Yy4wNS0uNzQuMDktMS40OS4wOS0yLjI0LDAtMjgtMjYuNDQtNDUuOTEtMjcuNTYtNDYuNjZhOCw4LDAsMCwwLTguODgsMEMxMjIuNDQsOTAuMDksOTYsMTA4LDk2LDEzNmMwLC43NSwwLDEuNS4wOSwyLjI0QTQzLjgzLDQzLjgzLDAsMCwxLDg0LDEwOEM4NCw3NiwxMTYuMjcsNTAsMTI4LDQxLjY2Wm05NS42MiwxODQuNzZhOCw4LDAsMCwxLTEwLjA1LDUuMkwxMjgsMjA0LjM5LDQyLjQzLDIzMS42MmE4LDgsMCwxLDEtNC44NS0xNS4yNWw2NC0yMC4zNy02NC0yMC4zOGE4LDgsMCwxLDEsNC44NS0xNS4yNEwxMjgsMTg3LjZsODUuNTctMjcuMjJhOCw4LDAsMSwxLDQuODUsMTUuMjRsLTY0LDIwLjM4LDY0LDIwLjM3QTgsOCwwLDAsMSwyMjMuNjIsMjI2LjQyWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzIuMTksMjUuMTlhOCw4LDAsMCwwLTguMzgsMEExNTYsMTU2LDAsMCwwLDk2LjI0LDQ4Qzc3Ljc3LDY3LjEzLDY4LDg3LjksNjgsMTA4YTYwLDYwLDAsMCwwLDEyMCwwQzE4OCw2MC4wOCwxMzQuNDcsMjYuNTksMTMyLjE5LDI1LjE5Wk0xMjgsMTUyYTI0LDI0LDAsMCwxLTI0LTI0YzAtMjQsMjQtNDAsMjQtNDBzMjQsMTYsMjQsNDBBMjQsMjQsMCwwLDEsMTI4LDE1MlptOTUuNjIsNzQuNDJhOCw4LDAsMCwxLTEwLjA1LDUuMkwxMjgsMjA0LjM5LDQyLjQzLDIzMS42MmE4LDgsMCwxLDEtNC44NS0xNS4yNWw2NC0yMC4zNy02NC0yMC4zOGE4LDgsMCwxLDEsNC44NS0xNS4yNEwxMjgsMTg3LjZsODUuNTctMjcuMjJhOCw4LDAsMSwxLDQuODUsMTUuMjRsLTY0LDIwLjM4LDY0LDIwLjM3QTgsOCwwLDAsMSwyMjMuNjIsMjI2LjQyWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjEuNzIsMjI1LjgyYTYsNiwwLDAsMS03LjU0LDMuOUwxMjgsMjAyLjMsNDEuODIsMjI5LjcyYTYsNiwwLDEsMS0zLjY0LTExLjQ0bDcwLTIyLjI4LTcwLTIyLjI4YTYsNiwwLDEsMSwzLjY0LTExLjQ0TDEyOCwxODkuN2w4Ni4xOC0yNy40MmE2LDYsMCwxLDEsMy42NCwxMS40NGwtNzAsMjIuMjgsNzAsMjIuMjhBNiw2LDAsMCwxLDIyMS43MiwyMjUuODJaTTcwLDEwOGMwLTQ2LjgxLDUyLjYyLTc5LjczLDU0Ljg2LTgxLjExYTYsNiwwLDAsMSw2LjI4LDBDMTMzLjM4LDI4LjI3LDE4Niw2MS4xOSwxODYsMTA4YTU4LDU4LDAsMCwxLTExNiwwWm01OCw0NmExOCwxOCwwLDAsMCwxOC0xOGMwLTE1LjQ4LTEyLTI3LjQzLTE4LTMyLjQ0LTYsNS0xOCwxNy0xOCwzMi40NEExOCwxOCwwLDAsMCwxMjgsMTU0Wk04MiwxMDhhNDUuOTMsNDUuOTMsMCwwLDAsMTcsMzUuNjdBMjkuODcsMjkuODcsMCwwLDEsOTgsMTM2YzAtMjYuOSwyNS41OC00NC4yNywyNi42Ny00NWE2LDYsMCwwLDEsNi42NiwwYzEuMDkuNzIsMjYuNjcsMTguMDksMjYuNjcsNDVhMjkuODcsMjkuODcsMCwwLDEtMSw3LjY3QTQ1LjkzLDQ1LjkzLDAsMCwwLDE3NCwxMDhjMC0zNC4wNi0zNS4xNS02MS4yMi00Ni02OC43OEMxMTcuMTUsNDYuNzgsODIsNzMuOTMsODIsMTA4WiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjMuNjIsMjI2LjQyYTgsOCwwLDAsMS0xMC4wNSw1LjJMMTI4LDIwNC4zOSw0Mi40MywyMzEuNjJhOCw4LDAsMSwxLTQuODUtMTUuMjVsNjQtMjAuMzctNjQtMjAuMzhhOCw4LDAsMSwxLDQuODUtMTUuMjRMMTI4LDE4Ny42bDg1LjU3LTI3LjIyYTgsOCwwLDEsMSw0Ljg1LDE1LjI0bC02NCwyMC4zOCw2NCwyMC4zN0E4LDgsMCwwLDEsMjIzLjYyLDIyNi40MlpNNjgsMTA4YzAtMjAuMSw5Ljc3LTQwLjg3LDI4LjI0LTYwYTE1NiwxNTYsMCwwLDEsMjcuNTctMjIuNzYsOCw4LDAsMCwxLDguMzgsMEMxMzQuNDcsMjYuNTksMTg4LDYwLjA4LDE4OCwxMDhhNjAsNjAsMCwwLDEtMTIwLDBabTYwLDQ0YTE2LDE2LDAsMCwwLDE2LTE2YzAtMTMuNTctMTAtMjQuNDYtMTYtMjkuNzktNiw1LjMzLTE2LDE2LjIyLTE2LDI5Ljc5QTE2LDE2LDAsMCwwLDEyOCwxNTJaTTg0LDEwOGE0My44Myw0My44MywwLDAsMCwxMi4wOSwzMC4yNGMwLS43NC0uMDktMS40OS0uMDktMi4yNCwwLTI4LDI2LjQ0LTQ1LjkxLDI3LjU2LTQ2LjY2YTgsOCwwLDAsMSw4Ljg4LDBDMTMzLjU2LDkwLjA5LDE2MCwxMDgsMTYwLDEzNmMwLC43NSwwLDEuNS0uMDksMi4yNEE0My44Myw0My44MywwLDAsMCwxNzIsMTA4YzAtMzItMzIuMjYtNTgtNDQtNjYuMzRDMTE2LjI3LDUwLDg0LDc2LDg0LDEwOFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTkuODEsMjI1LjIxQTQsNCwwLDAsMSwyMTYsMjI4YTMuOTIsMy45MiwwLDAsMS0xLjIxLS4xOUwxMjgsMjAwLjIsNDEuMjEsMjI3LjgxQTMuOTIsMy45MiwwLDAsMSw0MCwyMjhhNCw0LDAsMCwxLTEuMjEtNy44MWw3Ni0yNC4xOS03Ni0yNC4xOWE0LDQsMCwxLDEsMi40Mi03LjYyTDEyOCwxOTEuOGw4Ni43OS0yNy42MWE0LDQsMCwxLDEsMi40Miw3LjYybC03NiwyNC4xOSw3NiwyNC4xOUE0LDQsMCwwLDEsMjE5LjgxLDIyNS4yMVpNNzIsMTA4YzAtMTksOS4zOC0zOC44NSwyNy4xMi01Ny4yN0ExNTIsMTUyLDAsMCwxLDEyNS45LDI4LjU5YTQsNCwwLDAsMSw0LjIsMCwxNTIsMTUyLDAsMCwxLDI2Ljc4LDIyLjE0QzE3NC42Miw2OS4xNSwxODQsODksMTg0LDEwOGE1Niw1NiwwLDAsMS01NC41Niw1NmMtLjQ4LDAtMSwwLTEuNDQsMHMtMSwwLTEuNDQsMEE1Niw1NiwwLDAsMSw3MiwxMDhabTU2LDQ4YTIwLDIwLDAsMCwwLDIwLTIwYzAtMTcuMzktMTQuMzctMzAuNTMtMjAtMzUtNS42Myw0LjQ4LTIwLDE3LjYyLTIwLDM1QTIwLDIwLDAsMCwwLDEyOCwxNTZaTTgwLDEwOGE0OCw0OCwwLDAsMCwyMy4yOCw0MS4xM0EyNy44MywyNy44MywwLDAsMSwxMDAsMTM2YzAtMjUuODQsMjQuNzMtNDIuNjMsMjUuNzgtNDMuMzNhNCw0LDAsMCwxLDQuNDQsMGMxLjA1LjcsMjUuNzgsMTcuNDksMjUuNzgsNDMuMzNhMjcuODMsMjcuODMsMCwwLDEtMy4yOCwxMy4xM0E0OCw0OCwwLDAsMCwxNzYsMTA4YzAtMzYuMzctMzguNDktNjQuNzYtNDgtNzEuMjFDMTE4LjUsNDMuMjUsODAsNzEuNjgsODAsMTA4WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Campfire";
export { I as Campfire };
