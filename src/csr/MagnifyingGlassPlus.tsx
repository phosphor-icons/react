/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/MagnifyingGlassPlus";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsMTEyYTgsOCwwLDAsMS04LDhIMTIwdjI0YTgsOCwwLDAsMS0xNiwwVjEyMEg4MGE4LDgsMCwwLDEsMC0xNmgyNFY4MGE4LDgsMCwwLDEsMTYsMHYyNGgyNEE4LDgsMCwwLDEsMTUyLDExMlptNzcuNjYsMTE3LjY2YTgsOCwwLDAsMS0xMS4zMiwwbC01MC4wNi01MC4wN2E4OC4xMSw4OC4xMSwwLDEsMSwxMS4zMS0xMS4zMWw1MC4wNyw1MC4wNkE4LDgsMCwwLDEsMjI5LjY2LDIyOS42NlpNMTEyLDE4NGE3Miw3MiwwLDEsMC03Mi03MkE3Mi4wOCw3Mi4wOCwwLDAsMCwxMTIsMTg0WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDgsMTEyYTQsNCwwLDAsMS00LDRIMTE2djI4YTQsNCwwLDAsMS04LDBWMTE2SDgwYTQsNCwwLDAsMSwwLThoMjhWODBhNCw0LDAsMCwxLDgsMHYyOGgyOEE0LDQsMCwwLDEsMTQ4LDExMlptNzguODMsMTE0LjgzYTQsNCwwLDAsMS01LjY2LDBsLTUyLjctNTIuN2E4NC4xLDg0LjEsMCwxLDEsNS42Ni01LjY2bDUyLjcsNTIuN0E0LDQsMCwwLDEsMjI2LjgzLDIyNi44M1pNMTEyLDE4OGE3Niw3NiwwLDEsMC03Ni03NkE3Ni4wOCw3Ni4wOCwwLDAsMCwxMTIsMTg4WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTAsMTEyYTYsNiwwLDAsMS02LDZIMTE4djI2YTYsNiwwLDAsMS0xMiwwVjExOEg4MGE2LDYsMCwwLDEsMC0xMmgyNlY4MGE2LDYsMCwwLDEsMTIsMHYyNmgyNkE2LDYsMCwwLDEsMTUwLDExMlptNzguMjQsMTE2LjI0YTYsNiwwLDAsMS04LjQ4LDBsLTUxLjM4LTUxLjM4YTg2LjE1LDg2LjE1LDAsMSwxLDguNDgtOC40OGw1MS4zOCw1MS4zOEE2LDYsMCwwLDEsMjI4LjI0LDIyOC4yNFpNMTEyLDE4NmE3NCw3NCwwLDEsMC03NC03NEE3NC4wOSw3NC4wOSwwLDAsMCwxMTIsMTg2WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTYsMTEyYTEyLDEyLDAsMCwxLTEyLDEySDEyNHYyMGExMiwxMiwwLDAsMS0yNCwwVjEyNEg4MGExMiwxMiwwLDAsMSwwLTI0aDIwVjgwYTEyLDEyLDAsMCwxLDI0LDB2MjBoMjBBMTIsMTIsMCwwLDEsMTU2LDExMlptNzYuNDksMTIwLjQ5YTEyLDEyLDAsMCwxLTE3LDBMMTY4LDE4NWE5Mi4xMiw5Mi4xMiwwLDEsMSwxNy0xN2w0Ny41NCw0Ny41M0ExMiwxMiwwLDAsMSwyMzIuNDksMjMyLjQ5Wk0xMTIsMTgwYTY4LDY4LDAsMSwwLTY4LTY4QTY4LjA4LDY4LjA4LDAsMCwwLDExMiwxODBaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjkuNjYsMjE4LjM0LDE3OS42LDE2OC4yOGE4OC4yMSw4OC4yMSwwLDEsMC0xMS4zMiwxMS4zMWw1MC4wNiw1MC4wN2E4LDgsMCwwLDAsMTEuMzItMTEuMzJaTTE0NCwxMjBIMTIwdjI0YTgsOCwwLDAsMS0xNiwwVjEyMEg4MGE4LDgsMCwwLDEsMC0xNmgyNFY4MGE4LDgsMCwwLDEsMTYsMHYyNGgyNGE4LDgsMCwwLDEsMCwxNloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMTEyYTgwLDgwLDAsMSwxLTgwLTgwQTgwLDgwLDAsMCwxLDE5MiwxMTJaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjI5LjY2LDIxOC4zNCwxNzkuNiwxNjguMjhhODguMjEsODguMjEsMCwxLDAtMTEuMzIsMTEuMzFsNTAuMDYsNTAuMDdhOCw4LDAsMCwwLDExLjMyLTExLjMyWk00MCwxMTJhNzIsNzIsMCwxLDEsNzIsNzJBNzIuMDgsNzIuMDgsMCwwLDEsNDAsMTEyWm0xMTIsMGE4LDgsMCwwLDEtOCw4SDEyMHYyNGE4LDgsMCwwLDEtMTYsMFYxMjBIODBhOCw4LDAsMCwxLDAtMTZoMjRWODBhOCw4LDAsMCwxLDE2LDB2MjRoMjRBOCw4LDAsMCwxLDE1MiwxMTJaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "MagnifyingGlassPlus";
export { I as MagnifyingGlassPlus };
