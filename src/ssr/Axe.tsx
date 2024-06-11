/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Axe";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTQuOTMsOTYuNDNBMjAsMjAsMCwwLDAsMjM4LjU2LDgzLDEyMiwxMjIsMCwwLDEsMTk4LjcsNzAuNTRsMy45Mi0zLjkyYTMyLDMyLDAsMCwwLTQ1LjI2LTQ1LjI2bC02LjY5LDYuNjlhMjAsMjAsMCwwLDAtMzAuMTUtMi4yMUw4MS44NCw2NC41MmEyMCwyMCwwLDAsMCwyLjIxLDMwLjE2TDkuMzYsMTY5LjM4YTMyLDMyLDAsMCwwLDQ1LjI1LDQ1LjI2bDcxLjkyLTcxLjkzQTEyMiwxMjIsMCwwLDEsMTM5LDE4Mi41N2EyMCwyMCwwLDAsMCwzNCwxMS41OEwyNTAuMTMsMTE3QTE5Ljg2LDE5Ljg2LDAsMCwwLDI1NC45Myw5Ni40M1ptLTgwLjYtNTguMWE4LDgsMCwxLDEsMTEuMzIsMTEuMzJsLTcuNTgsNy41N2ExMzUuNjUsMTM1LjY1LDAsMCwxLTExLjk0LTEwLjY4Wk0zNy42NCwxOTcuNjdhOCw4LDAsMCwxLTExLjMxLTExLjMybDc2LjIxLTc2LjIxYTEzNS42NSwxMzUuNjUsMCwwLDEsMTAuNjgsMTEuOTRabTEyMy44OC0yNmMtOS00OC41LTM5LjI3LTc4LjQ0LTU5LjM4LTkzLjQ3bDMyLTMyYzE1LDIwLjExLDQ1LDUwLjM0LDkzLjQ1LDU5LjM4WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDUuNjUsMTA4LjQ2bC04MS4xOSw4MS4xOUE4LDgsMCwwLDEsMTUwLjg3LDE4NWMtNy4wOS01My4xNC00Mi40MS04Ny44LTU5LjQ1LTk5Ljc2QTgsOCwwLDAsMSw5MC4zMyw3M0wxMjksMzQuMzNhOCw4LDAsMCwxLDEyLjIsMS4wOWMxMiwxNyw0Ni42Miw1Mi4zNiw5OS43Niw1OS40NUE4LDgsMCwwLDEsMjQ1LjY1LDEwOC40NloiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yNTUuMTUsOTcuNzJBMTYsMTYsMCwwLDAsMjQyLDg2Ljk0YTEzNi40NiwxMzYuNDYsMCwwLDEtNTEuNjUtMThsMTAuMzEtMTAuM2EyNSwyNSwwLDAsMC0zNS4zMi0zNS4zMmwtMTMuMiwxMy4yMWMtMi4zMy0yLjgtMy44MS00Ljg0LTQuNDEtNS42OWExNiwxNiwwLDAsMC0yNC40MS0yLjE1TDg0LjY4LDY3LjM2YTE2LDE2LDAsMCwwLDIuMTQsMjQuNGMuODYuNiwyLjksMi4wOCw1LjcsNC40MUw3LjMxLDE4MS4zN2EyNSwyNSwwLDAsMCwzNS4zMiwzNS4zMmw4Mi4zLTgyLjMxYTEzNi42MywxMzYuNjMsMCwwLDEsMTgsNTEuNjUsMTYsMTYsMCwwLDAsMTAuNzcsMTMuMTIsMTYuMjEsMTYuMjEsMCwwLDAsNS4xNS44NSwxNS44OCwxNS44OCwwLDAsMCwxMS4yNi00LjY5bDgxLjE4LTgxLjE5QTE1Ljg2LDE1Ljg2LDAsMCwwLDI1NS4xNSw5Ny43MlpNMTc2LjY5LDM0LjYzYTksOSwwLDEsMSwxMi42OCwxMi42OEwxNzYuODIsNTkuODZBMTUyLjUsMTUyLjUsMCwwLDEsMTYzLjEsNDguMjFaTTMxLjMxLDIwNS4zN2E5LDksMCwxLDEtMTIuNjgtMTIuNjhsODUuNTgtODUuNThhMTUwLjg5LDE1MC44OSwwLDAsMSwxMS42NSwxMy43MVpNMTU4LjgsMTgzLjkyQzE1MCwxMTguMjksMTAxLjUyLDgyLjUyLDk2LDc4LjY3TDEzNC42Niw0MGMzLjg2LDUuNSwzOS42Myw1NCwxMDUuMjUsNjIuNzhaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTUuMTUsOTcuNzJBMTYsMTYsMCwwLDAsMjQyLDg2Ljk0YTEzNi40NiwxMzYuNDYsMCwwLDEtNTEuNjUtMThsMTAuMzEtMTAuM2EyNSwyNSwwLDAsMC0zNS4zMi0zNS4zMmwtMTMuMiwxMy4yMWMtMi4zMy0yLjgtMy44MS00Ljg0LTQuNDEtNS42OWExNiwxNiwwLDAsMC0yNC40MS0yLjE1TDg0LjY4LDY3LjM2YTE2LDE2LDAsMCwwLDIuMTQsMjQuNGMuODYuNiwyLjksMi4wOCw1LjcsNC40MUw3LjMxLDE4MS4zN2EyNSwyNSwwLDAsMCwzNS4zMiwzNS4zMmw4Mi4zLTgyLjMxYTEzNi42MywxMzYuNjMsMCwwLDEsMTgsNTEuNjUsMTYsMTYsMCwwLDAsMTAuNzcsMTMuMTIsMTYuMjEsMTYuMjEsMCwwLDAsNS4xNS44NSwxNS44OCwxNS44OCwwLDAsMCwxMS4yNi00LjY5bDgxLjE4LTgxLjE5QTE1Ljg2LDE1Ljg2LDAsMCwwLDI1NS4xNSw5Ny43MlpNMjQxLDk0Ljg3Wk0xNzYuNjksMzQuNjNhOSw5LDAsMSwxLDEyLjY4LDEyLjY4TDE3Ni44Miw1OS44NkExNTIuNSwxNTIuNSwwLDAsMSwxNjMuMSw0OC4yMVpNMzEuMzEsMjA1LjM3YTksOSwwLDEsMS0xMi42OC0xMi42OGw4NS41OC04NS41OGExNDkuNzUsMTQ5Ljc1LDAsMCwxLDExLjY1LDEzLjcyWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTMuMjUsOTguMzZhMTQsMTQsMCwwLDAtMTEuNDgtOS40NCwxMzguNjUsMTM4LjY1LDAsMCwxLTU0LjYtMTkuNmwxMi4xLTEyLjExYTIzLDIzLDAsMSwwLTMyLjQ4LTMyLjQ4TDE1MiwzOS40N2MtMy4yMS0zLjczLTUuMTktNi40Ni01LjkyLTcuNWExNCwxNCwwLDAsMC0yMS4zNS0xLjg4TDg2LjA5LDY4Ljc3QTE0LDE0LDAsMCwwLDg4LDkwLjEyYzEsLjczLDMuNzcsMi43MSw3LjUsNS45Mkw4LjczLDE4Mi43OUEyMywyMywwLDAsMCwyNSwyMjJhMjIuNzksMjIuNzksMCwwLDAsMTYuMjQtNi43M2w4NC4xMS04NC4xYTEzOC42NSwxMzguNjUsMCwwLDEsMTkuNiw1NC42LDE0LDE0LDAsMCwwLDkuNDQsMTEuNDgsMTMuODYsMTMuODYsMCwwLDAsMTQuMzUtMy4zNmw4MS4xOC04MS4xOEExMy44NywxMy44NywwLDAsMCwyNTMuMjUsOTguMzZabS03OC02NS4xNWExMSwxMSwwLDAsMSwxNS41MiwxNS41MkwxNzcsNjIuNDlhMTUzLjY3LDE1My42NywwLDAsMS0xNi43Ni0xNC4yNlpNMzIuNzMsMjA2Ljc5YTExLDExLDAsMCwxLTE1LjUyLTE1LjUybDg3LTg3QTE1My42NywxNTMuNjcsMCwwLDEsMTE4LjQ5LDEyMVpNMjQxLjQxLDEwNC4yMmwtODEuMTksODEuMTlhMS44NywxLjg3LDAsMCwxLTIsLjQ4LDIsMiwwLDAsMS0xLjM4LTEuNzFDMTQ4LjE3LDExOS40LDEwMC4zLDg0LjExLDk0Ljg3LDgwLjNBMiwyLDAsMCwxLDk0LDc4LjgyYTEuOTQsMS45NCwwLDAsMSwuNTctMS41N2wzOC42Ny0zOC42N2EyLDIsMCwwLDEsMS4zOS0uNThoLjE4YTIsMiwwLDAsMSwxLjQ4Ljg2YzMuODEsNS40MywzOS4xLDUzLjMsMTAzLjg4LDYyYTIsMiwwLDAsMSwxLjcxLDEuMzhBMS44NSwxLjg1LDAsMCwxLDI0MS40MSwxMDQuMjJaIi8+PC9zdmc+)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTUuMTUsOTcuNzJBMTYsMTYsMCwwLDAsMjQyLDg2Ljk0YTEzNi40NiwxMzYuNDYsMCwwLDEtNTEuNjUtMThsMTAuMzEtMTAuM2EyNSwyNSwwLDAsMC0zNS4zMi0zNS4zMmwtMTMuMiwxMy4yMWMtMi4zMy0yLjgtMy44MS00Ljg0LTQuNDEtNS42OWExNiwxNiwwLDAsMC0yNC40MS0yLjE1TDg0LjY4LDY3LjM2YTE2LDE2LDAsMCwwLDIuMTQsMjQuNGMuODYuNiwyLjksMi4wOCw1LjcsNC40MUw3LjMxLDE4MS4zN2EyNSwyNSwwLDAsMCwzNS4zMiwzNS4zMmw4Mi4zLTgyLjMxYTEzNi42MywxMzYuNjMsMCwwLDEsMTgsNTEuNjUsMTYsMTYsMCwwLDAsMTAuNzcsMTMuMTIsMTYuMjEsMTYuMjEsMCwwLDAsNS4xNS44NSwxNS44OCwxNS44OCwwLDAsMCwxMS4yNi00LjY5bDgxLjE4LTgxLjE5QTE1Ljg2LDE1Ljg2LDAsMCwwLDI1NS4xNSw5Ny43MlpNMTc2LjY5LDM0LjYzYTksOSwwLDEsMSwxMi42OCwxMi42OEwxNzYuODIsNTkuODZBMTUyLjUsMTUyLjUsMCwwLDEsMTYzLjEsNDguMjFaTTMxLjMxLDIwNS4zN2E5LDksMCwxLDEtMTIuNjgtMTIuNjhsODUuNTgtODUuNThhMTUwLjg5LDE1MC44OSwwLDAsMSwxMS42NSwxMy43MVpNMTU4LjgsMTgzLjkyQzE1MCwxMTguMjksMTAxLjUyLDgyLjUyLDk2LDc4LjY3TDEzNC42Niw0MGMzLjg2LDUuNSwzOS42Myw1NCwxMDUuMjUsNjIuNzhaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTEuMzYsOTlhMTIsMTIsMCwwLDAtOS44Ni04LjA5QTE0MS4xMywxNDEuMTMsMCwwLDEsMTg0LDY5LjY3TDE5Ny44Niw1NS44QTIxLDIxLDAsMCwwLDE2OC4yLDI2LjE0TDE1Miw0Mi4zOWExMDcuMjQsMTA3LjI0LDAsMCwxLTcuNDctOS4yNywxMiwxMiwwLDAsMC0xOC4yOS0xLjYxTDg3LjUxLDcwLjE4YTEyLDEyLDAsMCwwLDEuNjEsMTguM0ExMDcuMjQsMTA3LjI0LDAsMCwxLDk4LjM5LDk2TDEwLjE0LDE4NC4yQTIxLDIxLDAsMCwwLDM5LjgsMjEzLjg2TDEyNS42NywxMjhhMTQxLDE0MSwwLDAsMSwyMS4yNCw1Ny41MiwxMiwxMiwwLDAsMCwyMC4zOCw3bDgxLjE5LTgxLjE5QTExLjg5LDExLjg5LDAsMCwwLDI1MS4zNiw5OVptLTc3LjUtNjcuMkExMywxMywwLDEsMSwxOTIuMiw1MC4xNGwtMTUsMTVhMTU2LjcyLDE1Ni43MiwwLDAsMS0xOS44MS0xNi44OFpNMzQuMTQsMjA4LjJBMTMsMTMsMCwxLDEsMTUuOCwxODkuODZsODguNDMtODguNDNhMTU2LjcyLDE1Ni43MiwwLDAsMSwxNi44OCwxOS44MVpNMjQyLjgyLDEwNS42NGwtODEuMTgsODEuMThhMy44NiwzLjg2LDAsMCwxLTQuMDgsMSw0LDQsMCwwLDEtMi43Mi0zLjM0QzE0Ni4zLDEyMC41MSw5OS4wNyw4NS42OSw5My43Miw4MS45M0E0LDQsMCwwLDEsOTIsNzlhMy45LDMuOSwwLDAsMSwxLjE0LTMuMTVsMzguNjgtMzguNjhhMy45MiwzLjkyLDAsMCwxLDIuOC0xLjE2bC4zNSwwYTQsNCwwLDAsMSwyLjk0LDEuN2MzLjc2LDUuMzUsMzguNTgsNTIuNTgsMTAyLjUyLDYxLjExYTQsNCwwLDAsMSwzLjMzLDIuNzNBMy44NiwzLjg2LDAsMCwxLDI0Mi44MiwxMDUuNjRaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Axe";
export { I as Axe };
