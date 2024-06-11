/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Highlighter";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTMuNjYsMTA2LjM0YTgsOCwwLDAsMC0xMS4zMiwwTDE5MiwxNTYuNjksMTA3LjMxLDcybDUwLjM1LTUwLjM0YTgsOCwwLDEsMC0xMS4zMi0xMS4zMkw5Niw2MC42OUExNiwxNiwwLDAsMCw5My4xOCw3OS41TDcyLDEwMC42OWExNiwxNiwwLDAsMCwwLDIyLjYyTDc2LjY5LDEyOCwxOC4zNCwxODYuMzRhOCw4LDAsMCwwLDMuMTMsMTMuMjVsNzIsMjRBNy44OCw3Ljg4LDAsMCwwLDk2LDIyNGE4LDgsMCwwLDAsNS42Ni0yLjM0TDEzNiwxODcuMzFsNC42OSw0LjY5YTE2LDE2LDAsMCwwLDIyLjYyLDBsMjEuMTktMjEuMThBMTYsMTYsMCwwLDAsMjAzLjMxLDE2OGw1MC4zNS01MC4zNEE4LDgsMCwwLDAsMjUzLjY2LDEwNi4zNFpNOTMuODQsMjA2Ljg1bC01NS0xOC4zNUw4OCwxMzkuMzEsMTI0LjY5LDE3NlpNMTUyLDE4MC42OSw4My4zMSwxMTIsMTA0LDkxLjMxLDE3Mi42OSwxNjBaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTAuODMsMTA5LjE3YTQsNCwwLDAsMC01LjY2LDBsLTUwLjM0LDUwLjM0YTQsNCwwLDAsMS01LjY2LDBMMTA0LjQ5LDc0LjgzYTQsNCwwLDAsMSwwLTUuNjZsNTAuMzQtNTAuMzRhNCw0LDAsMCwwLTUuNjYtNS42Nkw5OC44Myw2My41MUExMiwxMiwwLDAsMCw5OC4zNyw4MEw3NC44MywxMDMuNTFhMTIsMTIsMCwwLDAsMCwxN0w4Mi4zNCwxMjgsMjEuMTcsMTg5LjE3YTQsNCwwLDAsMCwxLjU3LDYuNjJsNzIsMjRBMy45MiwzLjkyLDAsMCwwLDk2LDIyMGE0LDQsMCwwLDAsMi44My0xLjE3TDEzNiwxODEuNjZsNy41MSw3LjUxYTEyLDEyLDAsMCwwLDE3LDBMMTg0LDE2NS42M2ExMiwxMiwwLDAsMCwxNi40Ny0uNDZsNTAuMzQtNTAuMzRBNCw0LDAsMCwwLDI1MC44MywxMDkuMTdaTTk0LjkyLDIxMS40MiwzMS40LDE5MC4yNSw4OCwxMzMuNjYsMTMwLjM0LDE3NlptNTkuOTEtMjcuOTFhNCw0LDAsMCwxLTUuNjYsMEw4MC40OSwxMTQuODNhNCw0LDAsMCwxLDAtNS42NkwxMDQsODUuNjYsMTc4LjM0LDE2MFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTIuMjQsMTA3Ljc2YTYsNiwwLDAsMC04LjQ4LDBMMTkzLjQxLDE1OC4xYTIsMiwwLDAsMS0yLjgyLDBMMTA1LjksNzMuNDFhMiwyLDAsMCwxLDAtMi44Mmw1MC4zNC01MC4zNWE2LDYsMCwwLDAtOC40OC04LjQ4TDk3LjQxLDYyLjFBMTQsMTQsMCwwLDAsOTUuNyw3OS44MUw3My40MSwxMDIuMWExNCwxNCwwLDAsMCwwLDE5LjhsNi4xLDYuMUwxOS43NiwxODcuNzZhNiw2LDAsMCwwLDIuMzQsOS45M2w3MiwyNGE2LDYsMCwwLDAsNi4xNC0xLjQ1TDEzNiwxODQuNDlsNi4xLDYuMWExNCwxNCwwLDAsMCwxOS44LDBsMjIuMjgtMjIuMjlhMTQsMTQsMCwwLDAsMTcuNzItMS43MWw1MC4zNC01MC4zNUE2LDYsMCwwLDAsMjUyLjI0LDEwNy43NlpNOTQuMzgsMjA5LjE0LDM1LjExLDE4OS4zOCw4OCwxMzYuNDksMTI3LjUxLDE3NlptNTktMjdhMiwyLDAsMCwxLTIuODIsMGwtMTAuMzUtMTAuMzRoMGwtNDgtNDhoMEw4MS45LDExMy40MWEyLDIsMCwwLDEsMC0yLjgyTDEwNCw4OC40OSwxNzUuNTEsMTYwWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTIuNDksMTA3LjUxYTEyLDEyLDAsMCwwLTE3LDBMMTkyLDE1MSwxMTMsNzJsNDMuNTItNDMuNTFhMTIsMTIsMCwwLDAtMTctMTdMOTMuMTcsNTcuODZhMjAsMjAsMCwwLDAtNC43MiwyMC43Mkw2OS4xNyw5Ny44NmEyMCwyMCwwLDAsMCwwLDI4LjI4TDcxLDEyOCwxNS41MSwxODMuNTFhMTIsMTIsMCwwLDAsNC43LDE5Ljg3bDcyLDI0QTExLjgsMTEuOCwwLDAsMCw5NiwyMjhhMTIsMTIsMCwwLDAsOC40OS0zLjUyTDEzNiwxOTNsMS44NiwxLjg2YTIwLDIwLDAsMCwwLDI4LjI4LDBsMTkuMjctMTkuMjdhMjAuMjcsMjAuMjcsMCwwLDAsNi41OSwxLjEzLDE5Ljg2LDE5Ljg2LDAsMCwwLDE0LjE0LTUuODZsNDYuMzUtNDYuMzRBMTIsMTIsMCwwLDAsMjUyLjQ5LDEwNy41MVpNOTIuNzYsMjAyLjI3LDQ2LjIxLDE4Ni43Niw4OCwxNDVsMzEsMzFaTTE1MiwxNzUsOTYuNDksMTE5LjUyaDBMODksMTEybDE1LTE1LDYzLDYzWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTMuNjYsMTA2LjM0YTgsOCwwLDAsMC0xMS4zMiwwTDE5MiwxNTYuNjksMTA3LjMxLDcybDUwLjM1LTUwLjM0YTgsOCwwLDEsMC0xMS4zMi0xMS4zMkw5Niw2MC42OUExNiwxNiwwLDAsMCw5My4xOCw3OS41TDcyLDEwMC42OWExNiwxNiwwLDAsMCwwLDIyLjYyTDc2LjY5LDEyOCwxOC4zNCwxODYuMzRhOCw4LDAsMCwwLDMuMTMsMTMuMjVsNzIsMjRBNy44OCw3Ljg4LDAsMCwwLDk2LDIyNGE4LDgsMCwwLDAsNS42Ni0yLjM0TDEzNiwxODcuMzFsNC42OSw0LjY5YTE2LDE2LDAsMCwwLDIyLjYyLDBsMjEuMTgtMjEuMThBMTYsMTYsMCwwLDAsMjAzLjMxLDE2OGw1MC4zNS01MC4zNEE4LDgsMCwwLDAsMjUzLjY2LDEwNi4zNFpNMTUyLDE4MC42OSw4My4zMSwxMTIsMTA0LDkxLjMxLDE3Mi42OSwxNjBaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYsMTc2LDk2LDIxNiwyNCwxOTJsNjQtNjRaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjUzLjY2LDEwNi4zNGE4LDgsMCwwLDAtMTEuMzIsMEwxOTIsMTU2LjY5LDEwOS42Niw3NC4zNGgwTDEwNy4zMSw3Mmw1MC4zNS01MC4zNGE4LDgsMCwxLDAtMTEuMzItMTEuMzJMOTYsNjAuNjlBMTYsMTYsMCwwLDAsOTMuMTgsNzkuNUw3MiwxMDAuNjlhMTYsMTYsMCwwLDAsMCwyMi42Mkw3Ni42OSwxMjgsMTguMzQsMTg2LjM0YTgsOCwwLDAsMCwzLjEzLDEzLjI1bDcyLDI0QTcuODgsNy44OCwwLDAsMCw5NiwyMjRhOCw4LDAsMCwwLDUuNjYtMi4zNEwxMzYsMTg3LjMxbDQuNjksNC42OWExNiwxNiwwLDAsMCwyMi42MiwwbDIxLjE4LTIxLjE4QTE2LDE2LDAsMCwwLDIwMy4zMSwxNjhsNTAuMzUtNTAuMzRBOCw4LDAsMCwwLDI1My42NiwxMDYuMzRaTTkzLjg0LDIwNi44NWwtNTUtMTguMzVMODgsMTM5LjMxLDEyNC42OSwxNzZaTTE1MiwxODAuNjlsLTEwLjM0LTEwLjM1aDBsLTQ4LTQ4aDBMODMuMzEsMTEyLDEwNCw5MS4zMSwxNzIuNjksMTYwWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Highlighter";
export { I as Highlighter };
