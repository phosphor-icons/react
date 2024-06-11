/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/StackPlus";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMjAwYTEyLDEyLDAsMCwxLTEyLDEyaC04djhhMTIsMTIsMCwwLDEtMjQsMHYtOGgtOGExMiwxMiwwLDAsMSwwLTI0aDh2LThhMTIsMTIsMCwwLDEsMjQsMHY4aDhBMTIsMTIsMCwwLDEsMjQwLDIwMFpNMjE4LDExNy42MywxMjgsMTcwLjExLDM4LjA1LDExNy42M0ExMiwxMiwwLDAsMCwyNiwxMzguMzdsOTYsNTZhMTIsMTIsMCwwLDAsMTIuMSwwbDk2LTU2QTEyLDEyLDAsMSwwLDIxOCwxMTcuNjNaTTIwLDgwYTEyLDEyLDAsMCwxLDYtMTAuMzdsOTYtNTZhMTIuMDYsMTIuMDYsMCwwLDEsMTIuMSwwbDk2LDU2YTEyLDEyLDAsMCwxLDAsMjAuNzRsLTk2LDU2YTEyLDEyLDAsMCwxLTEyLjEsMGwtOTYtNTZBMTIsMTIsMCwwLDEsMjAsODBabTM1LjgyLDBMMTI4LDEyMi4xMSwyMDAuMTgsODAsMTI4LDM3Ljg5Wk0xMzgsMjEyLjMsMTI4LDIxOC4xMSwzOC4wNSwxNjUuNjNBMTIsMTIsMCwwLDAsMjYsMTg2LjM3bDk2LDU2YTEyLDEyLDAsMCwwLDEyLjEsMGwxNi05LjM0QTEyLDEyLDAsMSwwLDEzOCwyMTIuM1oiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsODBsLTk2LDU2TDMyLDgwbDk2LTU2WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTI0MCwyMDBhOCw4LDAsMCwxLTgsOEgyMTZ2MTZhOCw4LDAsMCwxLTE2LDBWMjA4SDE4NGE4LDgsMCwwLDEsMC0xNmgxNlYxNzZhOCw4LDAsMCwxLDE2LDB2MTZoMTZBOCw4LDAsMCwxLDI0MCwyMDBabS0yMC03OC45MS05Miw1My42NUwzNiwxMjEuMDlBOCw4LDAsMCwwLDI4LDEzNC45MWw5Niw1NmE4LDgsMCwwLDAsOC4wNiwwbDk2LTU2QTgsOCwwLDEsMCwyMjAsMTIxLjA5Wk0yNCw4MGE4LDgsMCwwLDEsNC02LjkxbDk2LTU2YTgsOCwwLDAsMSw4LjA2LDBsOTYsNTZhOCw4LDAsMCwxLDAsMTMuODJsLTk2LDU2YTgsOCwwLDAsMS04LjA2LDBsLTk2LTU2QTgsOCwwLDAsMSwyNCw4MFptMjMuODgsMEwxMjgsMTI2Ljc0LDIwOC4xMiw4MCwxMjgsMzMuMjZaTTE0MCwyMTUuNzZsLTEyLDdMMzYsMTY5LjA5QTgsOCwwLDAsMCwyOCwxODIuOTFsOTYsNTZhOCw4LDAsMCwwLDguMDYsMGwxNi05LjMzQTgsOCwwLDEsMCwxNDAsMjE1Ljc2WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNCw4MGE4LDgsMCwwLDEsNC02LjkxbDk2LTU2YTgsOCwwLDAsMSw4LjA2LDBsOTYsNTZhOCw4LDAsMCwxLDAsMTMuODJsLTk2LDU2YTgsOCwwLDAsMS04LjA2LDBsLTk2LTU2QTgsOCwwLDAsMSwyNCw4MFptMTk2LDQxLjA5LTkyLDUzLjY1TDM2LDEyMS4wOUE4LDgsMCwwLDAsMjgsMTM0LjkxbDk2LDU2YTgsOCwwLDAsMCw4LjA2LDBsOTYtNTZBOCw4LDAsMSwwLDIyMCwxMjEuMDlaTTIzMiwxOTJIMjE2VjE3NmE4LDgsMCwwLDAtMTYsMHYxNkgxODRhOCw4LDAsMCwwLDAsMTZoMTZ2MTZhOCw4LDAsMCwwLDE2LDBWMjA4aDE2YTgsOCwwLDAsMCwwLTE2Wm0tOTIsMjMuNzYtMTIsN0wzNiwxNjkuMDlBOCw4LDAsMCwwLDI4LDE4Mi45MWw5Niw1NmE4LDgsMCwwLDAsOC4wNiwwbDE2LTkuMzNBOCw4LDAsMSwwLDE0MCwyMTUuNzZaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzgsMjAwYTYsNiwwLDAsMS02LDZIMjE0djE4YTYsNiwwLDAsMS0xMiwwVjIwNkgxODRhNiw2LDAsMCwxLDAtMTJoMThWMTc2YTYsNiwwLDAsMSwxMiwwdjE4aDE4QTYsNiwwLDAsMSwyMzgsMjAwWm0tMTctNzcuMTgtOTMsNTQuMjNMMzUsMTIyLjgyYTYsNiwwLDAsMC02LDEwLjM2bDk2LDU2YTYsNiwwLDAsMCw2LDBsOTYtNTZhNiw2LDAsMCwwLTYtMTAuMzZaTTI2LDgwYTYsNiwwLDAsMSwzLTUuMThsOTYtNTZhNiw2LDAsMCwxLDYsMGw5Niw1NmE2LDYsMCwwLDEsMCwxMC4zNmwtOTYsNTZhNiw2LDAsMCwxLTYsMGwtOTYtNTZBNiw2LDAsMCwxLDI2LDgwWm0xNy45MSwwTDEyOCwxMjkuMDUsMjEyLjA5LDgwLDEyOCwzMVpNMTQxLDIxNy40OGwtMTMsNy41N0wzNSwxNzAuODJhNiw2LDAsMCwwLTYsMTAuMzZsOTYsNTZhNiw2LDAsMCwwLDYsMGwxNi05LjMzYTYsNiwwLDAsMC02LTEwLjM3WiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAuOTEsMTI0QTgsOCwwLDAsMSwyMjgsMTM0LjkxbC05Niw1NmE4LDgsMCwwLDEtOC4wNiwwbC05Ni01NkE4LDgsMCwwLDEsMzYsMTIxLjA5bDkyLDUzLjY1LDkyLTUzLjY1QTgsOCwwLDAsMSwyMzAuOTEsMTI0Wk0yNCw4MGE4LDgsMCwwLDEsNC02LjkxbDk2LTU2YTgsOCwwLDAsMSw4LjA2LDBsOTYsNTZhOCw4LDAsMCwxLDAsMTMuODJsLTk2LDU2YTgsOCwwLDAsMS04LjA2LDBsLTk2LTU2QTgsOCwwLDAsMSwyNCw4MFptMjMuODgsMEwxMjgsMTI2Ljc0LDIwOC4xMiw4MCwxMjgsMzMuMjZaTTIzMiwxOTJIMjE2VjE3NmE4LDgsMCwwLDAtMTYsMHYxNkgxODRhOCw4LDAsMCwwLDAsMTZoMTZ2MTZhOCw4LDAsMCwwLDE2LDBWMjA4aDE2YTgsOCwwLDAsMCwwLTE2Wm0tOTIsMjMuNzYtMTIsN0wzNiwxNjkuMDlBOCw4LDAsMCwwLDI4LDE4Mi45MWw5Niw1NmE4LDgsMCwwLDAsOC4wNiwwbDE2LTkuMzNBOCw4LDAsMSwwLDE0MCwyMTUuNzZaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsMjAwYTQsNCwwLDAsMS00LDRIMjEydjIwYTQsNCwwLDAsMS04LDBWMjA0SDE4NGE0LDQsMCwwLDEsMC04aDIwVjE3NmE0LDQsMCwwLDEsOCwwdjIwaDIwQTQsNCwwLDAsMSwyMzYsMjAwWm0tMTQtNzUuNDYtOTQsNTQuODNMMzQsMTI0LjU0YTQsNCwwLDAsMC00LDYuOTJsOTYsNTZhNCw0LDAsMCwwLDQsMGw5Ni01NmE0LDQsMCwxLDAtNC02LjkyWk0yOCw4MGE0LDQsMCwwLDEsMi0zLjQ2bDk2LTU2YTQsNCwwLDAsMSw0LDBsOTYsNTZhNCw0LDAsMCwxLDAsNi45MmwtOTYsNTZhNCw0LDAsMCwxLTQsMGwtOTYtNTZBNCw0LDAsMCwxLDI4LDgwWm0xMS45NCwwTDEyOCwxMzEuMzcsMjE2LjA2LDgwLDEyOCwyOC42M1pNMTQyLDIxOS4yMWwtMTQsOC4xNkwzNCwxNzIuNTRhNCw0LDAsMCwwLTQsNi45Mmw5Niw1NmE0LDQsMCwwLDAsNCwwbDE2LTkuMzRhNCw0LDAsMSwwLTQtNi45MVoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "StackPlus";
export { I as StackPlus };
