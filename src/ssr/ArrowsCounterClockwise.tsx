/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/ArrowsCounterClockwise";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04OCwxMDhINDBBMTIsMTIsMCwwLDEsMjgsOTZWNDhhMTIsMTIsMCwwLDEsMjQsMFY2N2w3LjgtNy44QTk5LjQyLDk5LjQyLDAsMCwxLDEzMCwyOS45NGguNTZhOTkuMzgsOTkuMzgsMCwwLDEsNjkuODcsMjguNDcsMTIsMTIsMCwwLDEtMTYuNzgsMTcuMTYsNzYsNzYsMCwwLDAtMTA2Ljg0LjYzTDY5LDg0SDg4YTEyLDEyLDAsMCwxLDAsMjRabTEyOCw0MEgxNjhhMTIsMTIsMCwwLDAsMCwyNGgxOWwtNy44LDcuOGE3NS41NSw3NS41NSwwLDAsMS01My4zMiwyMi4yNmgtLjQzYTc1LjQ5LDc1LjQ5LDAsMCwxLTUzLjA5LTIxLjYzLDEyLDEyLDAsMCwwLTE2Ljc4LDE3LjE2LDk5LjM4LDk5LjM4LDAsMCwwLDY5Ljg3LDI4LjQ3SDEyNmE5OS40Miw5OS40MiwwLDAsMCw3MC4xNi0yOS4yOUwyMDQsMTg5djE5YTEyLDEyLDAsMCwwLDI0LDBWMTYwQTEyLDEyLDAsMCwwLDIxNiwxNDhaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTI4YTg4LDg4LDAsMSwxLTg4LTg4QTg4LDg4LDAsMCwxLDIxNiwxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNODgsMTA0SDQwYTgsOCwwLDAsMS04LThWNDhhOCw4LDAsMCwxLDE2LDBWNzYuNjlMNjIuNjMsNjIuMDZBOTUuNDMsOTUuNDMsMCwwLDEsMTMwLDMzLjk0aC41M2E5NS4zNiw5NS4zNiwwLDAsMSw2Ny4wNywyNy4zMyw4LDgsMCwwLDEtMTEuMTgsMTEuNDQsNzkuNTIsNzkuNTIsMCwwLDAtNTUuODktMjIuNzdoLS40NUE3OS41Niw3OS41NiwwLDAsMCw3My45NCw3My4zN0w1OS4zMSw4OEg4OGE4LDgsMCwwLDEsMCwxNlptMTI4LDQ4SDE2OGE4LDgsMCwwLDAsMCwxNmgyOC42OWwtMTQuNjMsMTQuNjNhNzkuNTYsNzkuNTYsMCwwLDEtNTYuMTMsMjMuNDNoLS40NWE3OS41Miw3OS41MiwwLDAsMS01NS44OS0yMi43Nyw4LDgsMCwxLDAtMTEuMTgsMTEuNDQsOTUuMzYsOTUuMzYsMCwwLDAsNjcuMDcsMjcuMzNIMTI2YTk1LjQzLDk1LjQzLDAsMCwwLDY3LjM2LTI4LjEyTDIwOCwxNzkuMzFWMjA4YTgsOCwwLDAsMCwxNiwwVjE2MEE4LDgsMCwwLDAsMjE2LDE1MloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04OCwxMDRINDBhOCw4LDAsMCwxLTgtOFY0OGE4LDgsMCwwLDEsMTMuNjYtNS42Nkw2NCw2MC43YTk1LjQyLDk1LjQyLDAsMCwxLDY2LTI2Ljc2aC41M2E5NS4zNiw5NS4zNiwwLDAsMSw2Ny4wNywyNy4zMyw4LDgsMCwwLDEtMTEuMTgsMTEuNDQsNzkuNTIsNzkuNTIsMCwwLDAtNTUuODktMjIuNzdoLS40NUE3OS40OCw3OS40OCwwLDAsMCw3NS4zNSw3Mkw5My42Niw5MC4zNEE4LDgsMCwwLDEsODgsMTA0Wm0xMjgsNDhIMTY4YTgsOCwwLDAsMC01LjY2LDEzLjY2TDE4MC42NSwxODRhNzkuNDgsNzkuNDgsMCwwLDEtNTQuNzIsMjIuMDloLS40NWE3OS41Miw3OS41MiwwLDAsMS01NS44OS0yMi43Nyw4LDgsMCwxLDAtMTEuMTgsMTEuNDQsOTUuMzYsOTUuMzYsMCwwLDAsNjcuMDcsMjcuMzNIMTI2YTk1LjQyLDk1LjQyLDAsMCwwLDY2LTI2Ljc2bDE4LjM2LDE4LjM2QTgsOCwwLDAsMCwyMjQsMjA4VjE2MEE4LDgsMCwwLDAsMjE2LDE1MloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04OCwxMDJINDBhNiw2LDAsMCwxLTYtNlY0OGE2LDYsMCwwLDEsMTIsMFY4MS41MmwxOC0xOGE5My40NSw5My40NSwwLDAsMSw2Ni0yNy41M2guNTJBOTMuMzksOTMuMzksMCwwLDEsMTk2LjE5LDYyLjdhNiw2LDAsMCwxLTguMzgsOC41OEE4Miw4MiwwLDAsMCw3Mi41Myw3Mkw1NC40OCw5MEg4OGE2LDYsMCwwLDEsMCwxMlptMTI4LDUySDE2OGE2LDYsMCwwLDAsMCwxMmgzMy41MmwtMTguMDUsMThhODEuNTEsODEuNTEsMCwwLDEtNTcuNTMsMjRoLS40NmE4MS41LDgxLjUsMCwwLDEtNTcuMjktMjMuMzQsNiw2LDAsMCwwLTguMzgsOC41OCw5My4zOSw5My4zOSwwLDAsMCw2NS42NywyNi43NkgxMjZhOTMuNDUsOTMuNDUsMCwwLDAsNjYtMjcuNTNsMTgtMTguMDVWMjA4YTYsNiwwLDAsMCwxMiwwVjE2MEE2LDYsMCwwLDAsMjE2LDE1NFoiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04OCwxMDRINDBhOCw4LDAsMCwxLTgtOFY0OGE4LDgsMCwwLDEsMTYsMFY3Ni42OUw2Mi42Myw2Mi4wNkE5NS40Myw5NS40MywwLDAsMSwxMzAsMzMuOTRoLjUzYTk1LjM2LDk1LjM2LDAsMCwxLDY3LjA3LDI3LjMzLDgsOCwwLDAsMS0xMS4xOCwxMS40NCw3OS41Miw3OS41MiwwLDAsMC01NS44OS0yMi43N2gtLjQ1QTc5LjU2LDc5LjU2LDAsMCwwLDczLjk0LDczLjM3TDU5LjMxLDg4SDg4YTgsOCwwLDAsMSwwLDE2Wm0xMjgsNDhIMTY4YTgsOCwwLDAsMCwwLDE2aDI4LjY5bC0xNC42MywxNC42M2E3OS41Niw3OS41NiwwLDAsMS01Ni4xMywyMy40M2gtLjQ1YTc5LjUyLDc5LjUyLDAsMCwxLTU1Ljg5LTIyLjc3LDgsOCwwLDEsMC0xMS4xOCwxMS40NCw5NS4zNiw5NS4zNiwwLDAsMCw2Ny4wNywyNy4zM0gxMjZhOTUuNDMsOTUuNDMsMCwwLDAsNjcuMzYtMjguMTJMMjA4LDE3OS4zMVYyMDhhOCw4LDAsMCwwLDE2LDBWMTYwQTgsOCwwLDAsMCwyMTYsMTUyWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04OCwxMDBINDBhNCw0LDAsMCwxLTQtNFY0OGE0LDQsMCwwLDEsOCwwVjg2LjM0TDY1LjQ2LDY0Ljg5QTkxLjM5LDkxLjM5LDAsMCwxLDEzMCwzNy45NGguNTFBOTEuNDMsOTEuNDMsMCwwLDEsMTk0LjgsNjQuMTNhNCw0LDAsMCwxLTUuNiw1LjcyLDgzLjQ0LDgzLjQ0LDAsMCwwLTU4LjY4LTIzLjkxaC0uNDdhODMuNTIsODMuNTIsMCwwLDAtNTguOTQsMjQuNkw0OS42Niw5Mkg4OGE0LDQsMCwwLDEsMCw4Wm0xMjgsNTZIMTY4YTQsNCwwLDAsMCwwLDhoMzguMzRsLTIxLjQ1LDIxLjQ2QTgzLjUyLDgzLjUyLDAsMCwxLDEyNiwyMTAuMDZoLS40N0E4My40NCw4My40NCwwLDAsMSw2Ni44LDE4Ni4xNWE0LDQsMCwwLDAtNS42LDUuNzIsOTEuNDMsOTEuNDMsMCwwLDAsNjQuMjgsMjYuMTlIMTI2YTkxLjM5LDkxLjM5LDAsMCwwLDY0LjU1LTI2Ljk1TDIxMiwxNjkuNjZWMjA4YTQsNCwwLDAsMCw4LDBWMTYwQTQsNCwwLDAsMCwyMTYsMTU2WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ArrowsCounterClockwise";
export { I as ArrowsCounterClockwise };
