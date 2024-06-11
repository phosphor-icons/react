/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/RocketLaunch";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjcuODUsNDYuODlhMjAsMjAsMCwwLDAtMTguNzQtMTguNzRjLTEzLjEzLS43Ny00Ni42NS40Mi03NC40OCwyOC4yNEwxMzEsNjBINzQuMzZhMTkuODMsMTkuODMsMCwwLDAtMTQuMTQsNS44NkwyNS44NywxMDAuMTlhMjAsMjAsMCwwLDAsMTEuMzUsMzMuOTVsMzcuMTQsNS4xOCw0Mi4zMiw0Mi4zMiw1LjE5LDM3LjE4QTE5Ljg4LDE5Ljg4LDAsMCwwLDEzNS4zNCwyMzVhMjAuMTMsMjAuMTMsMCwwLDAsNi4zNywxLDE5LjksMTkuOSwwLDAsMCwxNC4xLTUuODdsMzQuMzQtMzQuMzVBMTkuODUsMTkuODUsMCwwLDAsMTk2LDE4MS42NFYxMjVsMy42LTMuNTlDMjI3LjQzLDkzLjU0LDIyOC42Miw2MCwyMjcuODUsNDYuODlaTTc2LDg0aDMxTDc1Ljc1LDExNS4yOGwtMjcuMjMtMy44Wk0xNTEuNiw3My4zN0E3Mi4yNyw3Mi4yNywwLDAsMSwyMDQsNTJhNzIuMTcsNzIuMTcsMCwwLDEtMjEuMzgsNTIuNDFMMTI4LDE1OSw5NywxMjhaTTE3MiwxODBsLTI3LjQ5LDI3LjQ5LTMuOC0yNy4yM0wxNzIsMTQ5Wm0tNzIsMjJjLTguNzEsMTEuODUtMjYuMTksMjYtNjAsMjZhMTIsMTIsMCwwLDEtMTItMTJjMC0zMy44NCwxNC4xMi01MS4zMiwyNi02MEExMiwxMiwwLDEsMSw2OC4xOCwxNzUuM0M2Mi4zLDE3OS42Myw1NS41MSwxODcuOCw1MywyMDNjMTUuMjEtMi41MSwyMy4zNy05LjMsMjcuNy0xNS4xOEExMiwxMiwwLDEsMSwxMDAsMjAyWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMTIwdjYxLjY1YTgsOCwwLDAsMS0yLjM0LDUuNjVsLTM0LjM1LDM0LjM1YTgsOCwwLDAsMS0xMy41Ny00LjUzTDEyOCwxNzZaTTEzNiw3Mkg3NC4zNWE4LDgsMCwwLDAtNS42NSwyLjM0TDM0LjM1LDEwOC42OWE4LDgsMCwwLDAsNC41MywxMy41N0w4MCwxMjhaTTQwLDIxNmMzNy42NSwwLDUwLjY5LTE5LjY5LDU0LjU2LTI4LjE4TDY4LjE4LDE2MS40NEM1OS42OSwxNjUuMzEsNDAsMTc4LjM1LDQwLDIxNloiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMjMuODUsNDcuMTJhMTYsMTYsMCwwLDAtMTUtMTVjLTEyLjU4LS43NS00NC43My40LTcxLjQxLDI3LjA3TDEzMi42OSw2NEg3NC4zNkExNS45MSwxNS45MSwwLDAsMCw2Myw2OC42OEwyOC43LDEwM2ExNiwxNiwwLDAsMCw5LjA3LDI3LjE2bDM4LjQ3LDUuMzcsNDQuMjEsNDQuMjEsNS4zNywzOC40OWExNS45NCwxNS45NCwwLDAsMCwxMC43OCwxMi45MiwxNi4xMSwxNi4xMSwwLDAsMCw1LjEuODNBMTUuOTEsMTUuOTEsMCwwLDAsMTUzLDIyNy4zTDE4Ny4zMiwxOTNBMTUuOTEsMTUuOTEsMCwwLDAsMTkyLDE4MS42NFYxMjMuMzFsNC43Ny00Ljc3QzIyMy40NSw5MS44NiwyMjQuNiw1OS43MSwyMjMuODUsNDcuMTJaTTc0LjM2LDgwaDQyLjMzTDc3LjE2LDExOS41Miw0MCwxMTQuMzRabTc0LjQxLTkuNDVhNzYuNjUsNzYuNjUsMCwwLDEsNTkuMTEtMjIuNDcsNzYuNDYsNzYuNDYsMCwwLDEtMjIuNDIsNTkuMTZMMTI4LDE2NC42OCw5MS4zMiwxMjhaTTE3NiwxODEuNjQsMTQxLjY3LDIxNmwtNS4xOS0zNy4xN0wxNzYsMTM5LjMxWm0tNzQuMTYsOS41Qzk3LjM0LDIwMSw4Mi4yOSwyMjQsNDAsMjI0YTgsOCwwLDAsMS04LThjMC00Mi4yOSwyMy01Ny4zNCwzMi44Ni02MS44NWE4LDgsMCwwLDEsNi42NCwxNC41NmMtNi40MywyLjkzLTIwLjYyLDEyLjM2LTIzLjEyLDM4LjkxLDI2LjU1LTIuNSwzNi0xNi42OSwzOC45MS0yMy4xMmE4LDgsMCwxLDEsMTQuNTYsNi42NFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDEuODUsMTkxLjE0Qzk3LjM0LDIwMSw4Mi4yOSwyMjQsNDAsMjI0YTgsOCwwLDAsMS04LThjMC00Mi4yOSwyMy01Ny4zNCwzMi44Ni02MS44NWE4LDgsMCwwLDEsNi42NCwxNC41NmMtNi40MywyLjkzLTIwLjYyLDEyLjM2LTIzLjEyLDM4LjkxLDI2LjU1LTIuNSwzNi0xNi42OSwzOC45MS0yMy4xMmE4LDgsMCwxLDEsMTQuNTYsNi42NFptMTIyLTE0NGExNiwxNiwwLDAsMC0xNS0xNWMtMTIuNTgtLjc1LTQ0LjczLjQtNzEuNCwyNy4wN2gwTDg4LDEwOC43QTgsOCwwLDAsMSw3Ni42Nyw5Ny4zOWwyNi41Ni0yNi41N0E0LDQsMCwwLDAsMTAwLjQxLDY0SDc0LjM1QTE1LjksMTUuOSwwLDAsMCw2Myw2OC42OEwyOC43LDEwM2ExNiwxNiwwLDAsMCw5LjA3LDI3LjE2bDM4LjQ3LDUuMzcsNDQuMjEsNDQuMjEsNS4zNywzOC40OWExNS45NCwxNS45NCwwLDAsMCwxMC43OCwxMi45MiwxNi4xMSwxNi4xMSwwLDAsMCw1LjEuODNBMTUuOTEsMTUuOTEsMCwwLDAsMTUzLDIyNy4zTDE4Ny4zMiwxOTNBMTYsMTYsMCwwLDAsMTkyLDE4MS42NVYxNTUuNTlhNCw0LDAsMCwwLTYuODMtMi44MmwtMjYuNTcsMjYuNTZhOCw4LDAsMCwxLTExLjcxLS40Miw4LjIsOC4yLDAsMCwxLC42LTExLjFsNDkuMjctNDkuMjdoMEMyMjMuNDUsOTEuODYsMjI0LjYsNTkuNzEsMjIzLjg1LDQ3LjEyWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjEuODYsNDcuMjRhMTQsMTQsMCwwLDAtMTMuMTEtMTMuMWMtMTIuMzEtLjczLTQzLjc3LjM5LTY5Ljg4LDI2LjVMMTMzLjUyLDY2SDc0LjM1YTEzLjksMTMuOSwwLDAsMC05Ljg5LDQuMUwzMC4xMSwxMDQuNDRhMTQsMTQsMCwwLDAsNy45NCwyMy43NmwzOS4xMyw1LjQ2LDQ1LjE2LDQ1LjE2TDEyNy44LDIxOGExNCwxNCwwLDAsMCwyMy43Niw3LjkybDM0LjM1LTM0LjM1YTEzLjkxLDEzLjkxLDAsMCwwLDQuMS05Ljg5VjEyMi40OGw1LjM1LTUuMzVoMEMyMjEuNDYsOTEsMjIyLjU5LDU5LjU2LDIyMS44Niw0Ny4yNFpNMzguMTEsMTE1YTIsMiwwLDAsMSwuNDktMkw3Mi45NCw3OC41OEEyLDIsMCwwLDEsNzQuMzUsNzhoNDcuMTdMNzcuODcsMTIxLjY0bC0zOC4xNC01LjMyQTEuOTMsMS45MywwLDAsMSwzOC4xMSwxMTVaTTE3OCwxODEuNjVhMiwyLDAsMCwxLS41OSwxLjQxTDE0My4wOCwyMTcuNGEyLDIsMCwwLDEtMy40LTEuMTFsLTUuMzItMzguMTZMMTc4LDEzNC40OFptOC44Ny03M2gwTDEyOCwxNjcuNTEsODguNDksMTI4bDU4Ljg3LTU4Ljg4YTc4LjQ3LDc4LjQ3LDAsMCwxLDYwLjY5LTIzQTIsMiwwLDAsMSwyMDkuODgsNDgsNzguNDcsNzguNDcsMCwwLDEsMTg2Ljg4LDEwOC42NFpNMTAwLDE5MC4zMUM5NS42OCwxOTkuODQsODEuMTMsMjIyLDQwLDIyMmE2LDYsMCwwLDEtNi02YzAtNDEuMTMsMjIuMTYtNTUuNjgsMzEuNjktNjBhNiw2LDAsMSwxLDUsMTAuOTJjLTcsMy4xNy0yMi41MywxMy41Mi0yNC40Nyw0Mi45MSwyOS4zOS0xLjk0LDM5Ljc0LTE3LjUyLDQyLjkxLTI0LjQ3YTYsNiwwLDEsMSwxMC45Miw1WiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjMuODUsNDcuMTJhMTYsMTYsMCwwLDAtMTUtMTVjLTEyLjU4LS43NS00NC43My40LTcxLjQxLDI3LjA3TDEzMi42OSw2NEg3NC4zNkExNS45MSwxNS45MSwwLDAsMCw2Myw2OC42OEwyOC43LDEwM2ExNiwxNiwwLDAsMCw5LjA3LDI3LjE2bDM4LjQ3LDUuMzcsNDQuMjEsNDQuMjEsNS4zNywzOC40OWExNS45NCwxNS45NCwwLDAsMCwxMC43OCwxMi45MiwxNi4xMSwxNi4xMSwwLDAsMCw1LjEuODNBMTUuOTEsMTUuOTEsMCwwLDAsMTUzLDIyNy4zTDE4Ny4zMiwxOTNBMTUuOTEsMTUuOTEsMCwwLDAsMTkyLDE4MS42NFYxMjMuMzFsNC43Ny00Ljc3QzIyMy40NSw5MS44NiwyMjQuNiw1OS43MSwyMjMuODUsNDcuMTJaTTc0LjM2LDgwaDQyLjMzTDc3LjE2LDExOS41Miw0MCwxMTQuMzRabTc0LjQxLTkuNDVhNzYuNjUsNzYuNjUsMCwwLDEsNTkuMTEtMjIuNDcsNzYuNDYsNzYuNDYsMCwwLDEtMjIuNDIsNTkuMTZMMTI4LDE2NC42OCw5MS4zMiwxMjhaTTE3NiwxODEuNjQsMTQxLjY3LDIxNmwtNS4xOS0zNy4xN0wxNzYsMTM5LjMxWm0tNzQuMTYsOS41Qzk3LjM0LDIwMSw4Mi4yOSwyMjQsNDAsMjI0YTgsOCwwLDAsMS04LThjMC00Mi4yOSwyMy01Ny4zNCwzMi44Ni02MS44NWE4LDgsMCwwLDEsNi42NCwxNC41NmMtNi40MywyLjkzLTIwLjYyLDEyLjM2LTIzLjEyLDM4LjkxLDI2LjU1LTIuNSwzNi0xNi42OSwzOC45MS0yMy4xMmE4LDgsMCwxLDEsMTQuNTYsNi42NFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTkuODYsNDcuMzZhMTIsMTIsMCwwLDAtMTEuMjItMTEuMjJjLTEyLS43MS00Mi44Mi4zOC02OC4zNSwyNS45MUwxMzQuMzUsNjhoLTYwYTExLjksMTEuOSwwLDAsMC04LjQ4LDMuNTJMMzEuNTIsMTA1Ljg1YTEyLDEyLDAsMCwwLDYuODEsMjAuMzdsMzkuNzksNS41NSw0Ni4xMSw0Ni4xMSw1LjU1LDM5LjgxYTEyLDEyLDAsMCwwLDIwLjM3LDYuNzlsMzQuMzQtMzQuMzVhMTEuOSwxMS45LDAsMCwwLDMuNTItOC40OHYtNjBsNS45NC01Ljk0QzIxOS40OCw5MC4xOCwyMjAuNTcsNTkuNDEsMjE5Ljg2LDQ3LjM2Wk0zNi4yMSwxMTUuNmEzLjk0LDMuOTQsMCwwLDEsMS00LjA5TDcxLjUzLDc3LjE3QTQsNCwwLDAsMSw3NC4zNSw3Nmg1Mkw3OC41OCwxMjMuNzYsMzkuNDQsMTE4LjNBMy45NCwzLjk0LDAsMCwxLDM2LjIxLDExNS42Wk0xODAsMTgxLjY1YTQsNCwwLDAsMS0xLjE3LDIuODNsLTM0LjM1LDM0LjM0YTQsNCwwLDAsMS02Ljc5LTIuMjVsLTUuNDYtMzkuMTVMMTgwLDEyOS42NVptLTUyLTExLjMxTDg1LjY2LDEyOGw2MC4yOC02MC4yOWMyMy4yNC0yMy4yNCw1MS4yNS0yNC4yMyw2Mi4yMi0yMy41OGEzLjkzLDMuOTMsMCwwLDEsMy43MSwzLjcxYy42NSwxMS0uMzUsMzktMjMuNTgsNjIuMjJaTTk4LjIxLDE4OS40OEM5NCwxOTguNjYsODAsMjIwLDQwLDIyMGE0LDQsMCwwLDEtNC00YzAtNDAsMjEuMzQtNTQsMzAuNTItNTguMjFhNCw0LDAsMCwxLDMuMzIsNy4yOGMtNy40NiwzLjQxLTI0LjQzLDE0LjY2LTI1Ljc2LDQ2Ljg1LDMyLjE5LTEuMzMsNDMuNDQtMTguMyw0Ni44NS0yNS43NmE0LDQsMCwxLDEsNy4yOCwzLjMyWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "RocketLaunch";
export { I as RocketLaunch };
