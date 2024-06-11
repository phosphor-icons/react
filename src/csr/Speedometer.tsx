/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Speedometer";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTQuMzQsMTU0LjM0bDk2LTk2YTgsOCwwLDAsMSwxMS4zMiwxMS4zMmwtOTYsOTZhOCw4LDAsMCwxLTExLjMyLTExLjMyWk0xMjgsODhhNjMuOSw2My45LDAsMCwxLDIwLjQ0LDMuMzMsOCw4LDAsMSwwLDUuMTEtMTUuMTZBODAsODAsMCwwLDAsNDguNDksMTYwLjg4LDgsOCwwLDAsMCw1Ni40MywxNjhjLjI5LDAsLjU5LDAsLjg5LS4wNWE4LDgsMCwwLDAsNy4wNy04LjgzQTY0LjkyLDY0LjkyLDAsMCwxLDY0LDE1Miw2NC4wNyw2NC4wNywwLDAsMSwxMjgsODhabTk5Ljc0LDEzYTgsOCwwLDAsMC0xNC4yNCw3LjMsOTYuMjcsOTYuMjcsMCwwLDEsNSw3NS43MWwtMTgxLjEtLjA3QTk2LjI0LDk2LjI0LDAsMCwxLDEyOCw1NmguODhhOTUsOTUsMCwwLDEsNDIuODIsMTAuNUE4LDgsMCwxLDAsMTc5LDUyLjI3YTExMiwxMTIsMCwwLDAtMTU2LjY2LDEzN0ExNi4wNywxNi4wNywwLDAsMCwzNy40NiwyMDBIMjE4LjUzYTE2LDE2LDAsMCwwLDE1LjExLTEwLjcxLDExMi4zNSwxMTIuMzUsMCwwLDAtNS45LTg4LjNaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTcuMTcsMTU3LjE3bDk2LTk2YTQsNCwwLDEsMSw1LjY2LDUuNjZsLTk2LDk2YTQsNCwwLDAsMS01LjY2LTUuNjZaTTEyOCw4NGE2Ny45NCw2Ny45NCwwLDAsMSwyMS43MiwzLjU0QTQsNCwwLDEsMCwxNTIuMjcsODAsNzYsNzYsMCwwLDAsNTIsMTUyYTc5LjI3LDc5LjI3LDAsMCwwLC40Niw4LjQ0LDQsNCwwLDAsMCw0LDMuNTZsLjQ1LDBhNCw0LDAsMCwwLDMuNTQtNC40MkE2OCw2OCwwLDAsMSwxMjgsODRabTk2LjE3LDE4LjgyYTQsNCwwLDEsMC03LjExLDMuNjQsMTAwLjM0LDEwMC4zNCwwLDAsMSw1LjI2LDc4Ljg0LDQsNCwwLDAsMS0zLjc5LDIuN0gzNy40NmE0LjA3LDQuMDcsMCwwLDEtMy44LTIuNzRBMTAwLjA1LDEwMC4wNSwwLDAsMSwxNzMuNTQsNjIuOTRhNCw0LDAsMSwwLDMuNjQtNy4xMkExMDcsMTA3LDAsMCwwLDEyOSw0NGgtMUExMDguMDYsMTA4LjA2LDAsMCwwLDI2LjEyLDE4Ny45MiwxMi4wNywxMi4wNywwLDAsMCwzNy40NiwxOTZIMjE4LjUzYTEyLDEyLDAsMCwwLDExLjM0LTgsMTA4LjMxLDEwOC4zMSwwLDAsMC01LjctODUuMTRaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTUuNzYsMTU1Ljc2bDk2LTk2YTYsNiwwLDAsMSw4LjQ4LDguNDhsLTk2LDk2YTYsNiwwLDAsMS04LjQ4LTguNDhaTTEyOCw4NmE2NS45LDY1LjksMCwwLDEsMjEuMDgsMy40NCw2LDYsMCwwLDAsMy44My0xMS4zOCw3OCw3OCwwLDAsMC0xMDIuNDMsODIuNiw2LDYsMCwwLDAsNiw1LjM0LDUuMTIsNS4xMiwwLDAsMCwuNjcsMCw2LDYsMCwwLDAsNS4zLTYuNjJBNjksNjksMCwwLDEsNjIsMTUyLDY2LjA4LDY2LjA4LDAsMCwxLDEyOCw4NlptOTgsMTUuOWE2LDYsMCwxLDAtMTAuNjgsNS40OCw5OC4zNSw5OC4zNSwwLDAsMSw1LjE2LDc3LjI1LDIsMiwwLDAsMS0xLjkxLDEuMzdIMzcuNDZhMi4wNywyLjA3LDAsMCwxLTEuOTEtMS40MUE5OC4yMyw5OC4yMywwLDAsMSwxMjgsNTRoLjlhOTcsOTcsMCwwLDEsNDMuNzEsMTAuNzJBNiw2LDAsMSwwLDE3OC4xLDU0LDEwOC45MiwxMDguOTIsMCwwLDAsMTI5LDQyaC0xQTExMC4wNiwxMTAuMDYsMCwwLDAsMjQuMjMsMTg4LjU4LDE0LjA4LDE0LjA4LDAsMCwwLDM3LjQ2LDE5OEgyMTguNTNhMTQuMDYsMTQuMDYsMCwwLDAsMTMuMjItOS4zN0ExMTAuMzQsMTEwLjM0LDAsMCwwLDIyNiwxMDEuOVoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTkuNTEsMTQzLjUxbDg4LTg4YTEyLDEyLDAsMSwxLDE3LDE3bC04OCw4OGExMiwxMiwwLDEsMS0xNy0xN1ptMTQuMjMtNDMuMmExMiwxMiwwLDEsMCwyLjYyLTIzLjg1QTc1LjE1LDc1LjE1LDAsMCwwLDEyOCw3NmE3Ni4wOCw3Ni4wOCwwLDAsMC03Niw3NiwxMiwxMiwwLDAsMCwyNCwwLDUyLjA2LDUyLjA2LDAsMCwxLDUyLTUyQTU0Ljc1LDU0Ljc1LDAsMCwxLDEzMy43NCwxMDAuMzFabTEwMS41NCw3LjVBMTIsMTIsMCwwLDAsMjEzLjA5LDExN2E5Mi40Nyw5Mi40NywwLDAsMSwyLjU4LDYzSDQwLjM0QTkyLjIzLDkyLjIzLDAsMCwxLDEyOCw2MGguODRhOTEuNDMsOTEuNDMsMCwwLDEsMzQuMiw2LjkxLDEyLDEyLDAsMCwwLDkuMTQtMjIuMTlBMTE2LjA3LDExNi4wNywwLDAsMCwxOC41NywxOTAuNTgsMjAuMDksMjAuMDksMCwwLDAsMzcuNDYsMjA0SDIxOC41M2EyMC4wNiwyMC4wNiwwLDAsMCwxOC44OC0xMy4zOCwxMTYuMzksMTE2LjM5LDAsMCwwLTIuMTMtODIuODFaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjEuODcsOTAuODZhNCw0LDAsMCwwLTYuMTctLjYybC03NS40Miw3NS40MkE4LDgsMCwwLDEsMTI5LDE1NC4zNWw5Mi43LTkyLjY5YTgsOCwwLDAsMC0xMS4zMi0xMS4zMkwxOTcsNjMuNzNBMTEyLjA1LDExMi4wNSwwLDAsMCwyMi4zNCwxODkuMjUsMTYuMDksMTYuMDksMCwwLDAsMzcuNDYsMjAwSDIxOC41M2ExNiwxNiwwLDAsMCwxNS4xMS0xMC43MSwxMTIuMjgsMTEyLjI4LDAsMCwwLTExLjc3LTk4LjQzWk01Ny40NCwxNjYuNDFhOCw4LDAsMCwxLTYuMjUsOS40Myw3Ljg5LDcuODksMCwwLDEtMS42LjE2LDgsOCwwLDAsMS03LjgzLTYuNDFBODguMDYsODguMDYsMCwwLDEsMTQzLjU5LDY1LjM4YTgsOCwwLDAsMS0yLjgyLDE1Ljc1LDcyLjA3LDcyLjA3LDAsMCwwLTgzLjMzLDg1LjI4WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTUyYTEwMy45MywxMDMuOTMsMCwwLDEtNS45LDM0LjYzLDgsOCwwLDAsMS03LjU3LDUuMzdIMzcuNDZhOC4wNSw4LjA1LDAsMCwxLTcuNTctNS40MUExMDQuMDYsMTA0LjA2LDAsMCwxLDI0LDE1MS4xOUMyNC40NCw5NCw3MS43Myw0Ny40OSwxMjksNDhBMTA0LDEwNCwwLDAsMSwyMzIsMTUyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTExNC4zNCwxNTQuMzRsOTYtOTZhOCw4LDAsMCwxLDExLjMyLDExLjMybC05Niw5NmE4LDgsMCwwLDEtMTEuMzItMTEuMzJaTTEyOCw4OGE2My45LDYzLjksMCwwLDEsMjAuNDQsMy4zMyw4LDgsMCwxLDAsNS4xMS0xNS4xNkE4MCw4MCwwLDAsMCw0OC40OSwxNjAuODgsOCw4LDAsMCwwLDU2LjQzLDE2OGMuMjksMCwuNTksMCwuODktLjA1YTgsOCwwLDAsMCw3LjA3LTguODNBNjQuOTIsNjQuOTIsMCwwLDEsNjQsMTUyLDY0LjA3LDY0LjA3LDAsMCwxLDEyOCw4OFptOTkuNzQsMTNhOCw4LDAsMCwwLTE0LjI0LDcuMyw5Ni4yNyw5Ni4yNywwLDAsMSw1LDc1LjcxbC0xODEuMS0uMDdBOTYuMjQsOTYuMjQsMCwwLDEsMTI4LDU2aC44OGE5NSw5NSwwLDAsMSw0Mi44MiwxMC41QTgsOCwwLDEsMCwxNzksNTIuMjcsMTEwLjgsMTEwLjgsMCwwLDAsMTI5LDQwaC0xQTExMi4wNSwxMTIuMDUsMCwwLDAsMjIuMzUsMTg5LjI1LDE2LjA3LDE2LjA3LDAsMCwwLDM3LjQ2LDIwMEgyMTguNTNhMTYsMTYsMCwwLDAsMTUuMTEtMTAuNzEsMTEyLjM1LDExMi4zNSwwLDAsMC01LjktODguM1oiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Speedometer";
export { I as Speedometer };
