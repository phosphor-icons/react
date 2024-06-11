/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/StarAndCrescent";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTUuNjQsMTk5LjI4YTgwLDgwLDAsMCwxLDAtMTQyLjU2LDgsOCwwLDAsMCwwLTE0LjI1QTk0LjkzLDk0LjkzLDAsMCwwLDExMiwzMmE5Niw5NiwwLDAsMCwwLDE5Miw5NC45Myw5NC45MywwLDAsMCw0My42NC0xMC40Nyw4LDgsMCwwLDAsMC0xNC4yNVpNMTEyLDIwOEE4MCw4MCwwLDEsMSwxMzQuNCw1MS4xNmE5Ni4wOCw5Ni4wOCwwLDAsMCwwLDE1My42OEE3OS44Miw3OS44MiwwLDAsMSwxMTIsMjA4Wm0xMzkuMTctODcuMzUtMjYuNS0xMS40My0yLjMxLTI5Ljg0YTgsOCwwLDAsMC0xNC4xNC00LjQ3TDE4OS42Myw5Ny40MmwtMjcuNzEtNi44NWE4LDgsMCwwLDAtOC44MSwxMS44MkwxNjguMTgsMTI4bC0xNS4wNywyNS42MWE4LDgsMCwwLDAsOC44MSwxMS44MmwyNy43MS02Ljg1LDE4LjU5LDIyLjUxYTgsOCwwLDAsMCwxNC4xNC00LjQ3bDIuMzEtMjkuODQsMjYuNS0xMS40M2E4LDgsMCwwLDAsMC0xNC43Wk0yMTMuODksMTM0YTgsOCwwLDAsMC00LjgsNi43M2wtMS4xNSwxNC44OS05LjE4LTExLjExYTgsOCwwLDAsMC02LjE3LTIuOTEsOC40LDguNCwwLDAsMC0xLjkyLjIzbC0xNC4xMiwzLjUsNy44MS0xMy4yN2E4LDgsMCwwLDAsMC04LjEybC03LjgxLTEzLjI3LDE0LjEyLDMuNWE4LDgsMCwwLDAsOC4wOS0yLjY4bDkuMTgtMTEuMTEsMS4xNSwxNC44OWE4LDgsMCwwLDAsNC44LDYuNzNsMTMuOTIsNloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTMuODIsNTMuMTZhNCw0LDAsMCwwLDAtNy4xM0E5MS4wOSw5MS4wOSwwLDAsMCwxMTIsMzZhOTIsOTIsMCwwLDAsMCwxODQsOTEuMDksOTEuMDksMCwwLDAsNDEuODItMTAsNCw0LDAsMCwwLDAtNy4xMyw4NCw4NCwwLDAsMSwwLTE0OS42OFpNMTAwLDEyOGE5MS42Myw5MS42MywwLDAsMCw0My4yMSw3OEE4My4yMyw4My4yMywwLDAsMSwxMTIsMjEyYTg0LDg0LDAsMCwxLDAtMTY4LDgzLjIzLDgzLjIzLDAsMCwxLDMxLjIxLDZBOTEuNjMsOTEuNjMsMCwwLDAsMTAwLDEyOFptMTQ5LjU4LTMuNjctMjguNzEtMTIuNC0yLjQ5LTMyLjI0YTQsNCwwLDAsMC03LjA4LTIuMjRsLTIwLjE5LDI0LjQ2TDE2MSw5NC40NWE0LDQsMCwwLDAtNC40MSw1LjkxTDE3Mi44MiwxMjhsLTE2LjI3LDI3LjY0YTQsNCwwLDAsMCw0LjQxLDUuOTFsMzAuMTUtNy40NiwyMC4xOSwyNC40NmE0LDQsMCwwLDAsMy4wOSwxLjQ1LDMuODEsMy44MSwwLDAsMCwxLjItLjE5LDQsNCwwLDAsMCwyLjc5LTMuNWwyLjQ5LTMyLjI0LDI4LjcxLTEyLjRhNCw0LDAsMCwwLDAtNy4zNFptLTM0LjEsMTMuMzVhNCw0LDAsMCwwLTIuNCwzLjM2bC0xLjkyLDI0Ljc3LTE1LjQ5LTE4Ljc2YTQsNCwwLDAsMC0zLjA4LTEuNDUsNCw0LDAsMCwwLTEsLjEybC0yMy4zNiw1Ljc4TDE4MC45MSwxMzBhNCw0LDAsMCwwLDAtNC4wNkwxNjguMjcsMTA0LjVsMjMuMzYsNS43OGE0LDQsMCwwLDAsNC0xLjMzbDE1LjQ5LTE4Ljc2TDIxMy4wOCwxMTVhNCw0LDAsMCwwLDIuNCwzLjM2TDIzNy45LDEyOFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTQuNzMsMjAxLjA2YTgyLDgyLDAsMCwxLDAtMTQ2LjEyLDYsNiwwLDAsMCwwLTEwLjY5QTkzLDkzLDAsMCwwLDExMiwzNGE5NCw5NCwwLDAsMCwwLDE4OCw5Myw5MywwLDAsMCw0Mi43My0xMC4yNSw2LDYsMCwwLDAsMC0xMC42OVpNMTEyLDIxMEE4Miw4MiwwLDEsMSwxMzguODEsNTAuNDdhOTQsOTQsMCwwLDAsMCwxNTUuMDZBODEuNCw4MS40LDAsMCwxLDExMiwyMTBabTEzOC4zOC04Ny41MS0yNy42MS0xMS45MS0yLjQtMzFhNiw2LDAsMCwwLTEwLjYxLTMuMzZMMTkwLjM3LDk5LjY3bC0yOC45My03LjE2YTYsNiwwLDAsMC02LjYxLDguODdMMTcwLjUsMTI4bC0xNS42NywyNi42MmE2LDYsMCwwLDAsNi42MSw4Ljg3bDI4LjkzLTcuMTYsMTkuMzksMjMuNDlhNiw2LDAsMCwwLDEwLjYxLTMuMzZsMi40LTMxLDI3LjYxLTExLjkxYTYsNiwwLDAsMCwwLTExWm0tMzUuNjksMTMuMzVhNiw2LDAsMCwwLTMuNjEsNWwtMS41MywxOS44My0xMi4zMy0xNC45NGE2LDYsMCwwLDAtNC42My0yLjE4LDUuOTIsNS45MiwwLDAsMC0xLjQ0LjE4bC0xOC43NCw0LjYzTDE4Mi42NCwxMzFhNiw2LDAsMCwwLDAtNi4wOGwtMTAuMjMtMTcuMzcsMTguNzQsNC42M2E2LDYsMCwwLDAsNi4wNy0ybDEyLjMzLTE0Ljk0LDEuNTMsMTkuODNhNiw2LDAsMCwwLDMuNjEsNUwyMzIuODYsMTI4WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTcuNDYsMTk1LjcyYTc2LDc2LDAsMCwxLDAtMTM1LjQ0LDEyLDEyLDAsMCwwLDAtMjEuMzcsMTAwLDEwMCwwLDEsMCwwLDE3OC4xOCwxMiwxMiwwLDAsMCwwLTIxLjM3Wk0xMTIsMjA0YTc2LDc2LDAsMCwxLDAtMTUyLDc3LjIsNzcuMiwwLDAsMSwxMy41NywxLjE5LDEwMC4xNCwxMDAuMTQsMCwwLDAsMCwxNDkuNjJBNzcuMiw3Ny4yLDAsMCwxLDExMiwyMDRabTEzNi43NS04N0wyMjQuNDcsMTA2LjVsLTIuMTItMjcuNDJhMTIsMTIsMCwwLDAtMjEuMjItNi43MmwtMTcsMjAuNTgtMjUuMjYtNi4yNWExMiwxMiwwLDAsMC0xMy4yMiwxNy43M0wxNTkuNTQsMTI4bC0xMy44OCwyMy41OGExMiwxMiwwLDAsMCwxMy4yMiwxNy43M2wyNS4yNi02LjI1LDE3LDIwLjU4YTEyLDEyLDAsMCwwLDkuMjYsNC4zNiwxMS44OCwxMS44OCwwLDAsMCwzLjYyLS41NiwxMiwxMiwwLDAsMCw4LjM0LTEwLjUybDIuMTItMjcuNDJMMjQ4Ljc1LDEzOWExMiwxMiwwLDAsMCwwLTIyWm0tNDAuNDQsMTMuMzVhMTIsMTIsMCwwLDAtNy4yMSwxMC4wOWwtLjM5LDVMMTk3Ljg0LDE0MmExMiwxMiwwLDAsMC05LjI1LTQuMzYsMTEuNzYsMTEuNzYsMCwwLDAtMi44OC4zNWwtNC44OSwxLjIxLDMtNS4wN2ExMiwxMiwwLDAsMCwwLTEyLjE4bC0zLTUuMDcsNC44OSwxLjIxYTEyLDEyLDAsMCwwLDEyLjEzLTRsMi44Ny0zLjQ4LjM5LDVhMTIsMTIsMCwwLDAsNy4yMSwxMC4wOWw1LjQsMi4zM1oiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsMjA2LjRhOCw4LDAsMCwxLTQuMzYsNy4xM0E5NC45Myw5NC45MywwLDAsMSwxMTIsMjI0YTk2LDk2LDAsMCwxLDAtMTkyLDk0LjkzLDk0LjkzLDAsMCwxLDQzLjY0LDEwLjQ3LDgsOCwwLDAsMSwwLDE0LjI1LDgwLDgwLDAsMCwwLDAsMTQyLjU2QTgsOCwwLDAsMSwxNjAsMjA2LjRabTkxLjE3LTg1Ljc1LTI2LjUtMTEuNDMtMi4zMS0yOS44NGE4LDgsMCwwLDAtMTQuMTQtNC40N0wxODkuNjMsOTcuNDJsLTI3LjcxLTYuODVhOCw4LDAsMCwwLTguODEsMTEuODJMMTY4LjE4LDEyOGwtMTUuMDcsMjUuNjFhOCw4LDAsMCwwLDguODEsMTEuODJsMjcuNzEtNi44NSwxOC41OSwyMi41MWE4LDgsMCwwLDAsMTQuMTQtNC40N2wyLjMxLTI5Ljg0LDI2LjUtMTEuNDNhOCw4LDAsMCwwLDAtMTQuN1oiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsMjA2LjRhODgsODgsMCwxLDEsMC0xNTYuOCw4OCw4OCwwLDAsMCwwLDE1Ni44Wm02NS4wNi05MS43NUwyMTQuMzksODBsLTIxLjgsMjYuNEwxNjAsOTguMzMsMTc3LjQ2LDEyOCwxNjAsMTU3LjY3bDMyLjU5LTguMDcsMjEuOCwyNi40LDIuNjctMzQuNjVMMjQ4LDEyOFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xNTUuNjQsMTk5LjI4YTgwLDgwLDAsMCwxLDAtMTQyLjU2LDgsOCwwLDAsMCwwLTE0LjI1QTk0LjkzLDk0LjkzLDAsMCwwLDExMiwzMmE5Niw5NiwwLDAsMCwwLDE5Miw5NC45Myw5NC45MywwLDAsMCw0My42NC0xMC40Nyw4LDgsMCwwLDAsMC0xNC4yNVpNMTEyLDIwOEE4MCw4MCwwLDEsMSwxMzQuNCw1MS4xNmE5Ni4wOCw5Ni4wOCwwLDAsMCwwLDE1My42OEE3OS44Miw3OS44MiwwLDAsMSwxMTIsMjA4Wm0xMzkuMTctODcuMzUtMjYuNS0xMS40My0yLjMxLTI5Ljg0YTgsOCwwLDAsMC0xNC4xNC00LjQ3TDE4OS42Myw5Ny40MmwtMjcuNzEtNi44NWE4LDgsMCwwLDAtOC44MSwxMS44MkwxNjguMTgsMTI4bC0xNS4wNywyNS42MWE4LDgsMCwwLDAsOC44MSwxMS44MmwyNy43MS02Ljg1LDE4LjU5LDIyLjUxYTgsOCwwLDAsMCwxNC4xNC00LjQ3bDIuMzEtMjkuODQsMjYuNS0xMS40M2E4LDgsMCwwLDAsMC0xNC43Wk0yMTMuODksMTM0YTgsOCwwLDAsMC00LjgsNi43M2wtMS4xNSwxNC44OS05LjE4LTExLjExYTgsOCwwLDAsMC02LjE3LTIuOTEsOC40LDguNCwwLDAsMC0xLjkyLjIzbC0xNC4xMiwzLjUsNy44MS0xMy4yN2E4LDgsMCwwLDAsMC04LjEybC03LjgxLTEzLjI3LDE0LjEyLDMuNWE4LDgsMCwwLDAsOC4wOS0yLjY4bDkuMTgtMTEuMTEsMS4xNSwxNC44OWE4LDgsMCwwLDAsNC44LDYuNzNsMTMuOTIsNloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "StarAndCrescent";
export { I as StarAndCrescent };
