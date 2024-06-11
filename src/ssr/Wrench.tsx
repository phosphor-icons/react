/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Wrench";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjYuNzYsNjlhOCw4LDAsMCwwLTEyLjg0LTIuODhsLTQwLjMsMzcuMTktMTcuMjMtMy43LTMuNy0xNy4yMywzNy4xOS00MC4zQTgsOCwwLDAsMCwxODcsMjkuMjQsNzIsNzIsMCwwLDAsODgsOTYsNzIuMzQsNzIuMzQsMCwwLDAsOTQsMTI0Ljk0TDMzLjc5LDE3N2MtLjE1LjEyLS4yOS4yNi0uNDMuMzlhMzIsMzIsMCwwLDAsNDUuMjYsNDUuMjZjLjEzLS4xMy4yNy0uMjguMzktLjQyTDEzMS4wNiwxNjJBNzIsNzIsMCwwLDAsMjMyLDk2LDcxLjU2LDcxLjU2LDAsMCwwLDIyNi43Niw2OVpNMTYwLDE1MmE1Ni4xNCw1Ni4xNCwwLDAsMS0yNy4wNy03LDgsOCwwLDAsMC05LjkyLDEuNzdMNjcuMTEsMjExLjUxYTE2LDE2LDAsMCwxLTIyLjYyLTIyLjYyTDEwOS4xOCwxMzNhOCw4LDAsMCwwLDEuNzctOS45Myw1Niw1NiwwLDAsMSw1OC4zNi04Mi4zMWwtMzEuMiwzMy44MWE4LDgsMCwwLDAtMS45NCw3LjFMMTQxLjgzLDEwOGE4LDgsMCwwLDAsNi4xNCw2LjE0bDI2LjM1LDUuNjZhOCw4LDAsMCwwLDcuMS0xLjk0bDMzLjgxLTMxLjJBNTYuMDYsNTYuMDYsMCwwLDEsMTYwLDE1MloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjMuMDUsNzAuNWE0LDQsMCwwLDAtNi40Mi0xLjQ0bC00MS44MiwzOC42TDE1MywxMDNsLTQuNjgtMjEuNzksMzguNi00MS44MmE0LDQsMCwwLDAtMS40NC02LjQzQTY4LDY4LDAsMCwwLDk4Ljk0LDEyNkwzNi40LDE4MGwtLjIxLjJhMjgsMjgsMCwwLDAsMzkuNiwzOS42bC4yLS4yMSw1NC02Mi41NEE2OCw2OCwwLDAsMCwyMjgsOTYsNjcuNTEsNjcuNTEsMCwwLDAsMjIzLjA1LDcwLjVaTTE2MCwxNTZhNjAsNjAsMCwwLDEtMjktNy40Nyw0LDQsMCwwLDAtNSwuODlMNzAsMjE0LjI1QTIwLDIwLDAsMCwxLDQxLjc1LDE4Nmw2NC44Mi01NmE0LDQsMCwwLDAsLjg5LTUsNjAsNjAsMCwwLDEsNjkuNDYtODYuNTlMMTQxLjA1LDc3LjI5YTQsNCwwLDAsMC0xLDMuNTVsNS42NiwyNi4zNWE0LDQsMCwwLDAsMy4wNywzLjA3bDI2LjM1LDUuNjZhNCw0LDAsMCwwLDMuNTUtMWwzOC44Ny0zNS44N0E2MC4wNSw2MC4wNSwwLDAsMSwxNjAsMTU2WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQuOTEsNjkuNzVhNiw2LDAsMCwwLTkuNjMtMi4xNmwtNDEuMDcsMzcuOUwxNTQuNywxMDEuM2wtNC4xOS0xOS41MSwzNy45LTQxLjA3YTYsNiwwLDAsMC0yLjE2LTkuNjMsNzAsNzAsMCwwLDAtODkuNzcsOTQuMzlsLTYxLjM5LDUzYy0uMTEuMDktLjIxLjE5LS4zMi4zQTMwLDMwLDAsMCwwLDc3LjIsMjIxLjIzYy4xMS0uMTEuMjEtLjIxLjMtLjMybDUzLTYxLjM5YTcwLDcwLDAsMCwwLDk0LjM5LTg5Ljc3Wk0xNjAsMTU0YTU4LDU4LDAsMCwxLTI4LTcuMjIsNiw2LDAsMCwwLTcuNDUsMS4zM0w2OC41NywyMTIuODhhMTgsMTgsMCwwLDEtMjUuNDUtMjUuNDVsNjQuNzYtNTUuOTRBNiw2LDAsMCwwLDEwOS4yLDEyNGE1OCw1OCwwLDAsMSw2NC04NC41M0wxMzkuNTgsNzUuOTNhNiw2LDAsMCwwLTEuNDUsNS4zM2w1LjY1LDI2LjM1YTYsNiwwLDAsMCw0LjYxLDQuNjFsMjYuMzUsNS42NWE2LDYsMCwwLDAsNS4zMy0xLjQ1TDIxNi40OSw4Mi44QTU4LjA2LDU4LjA2LDAsMCwxLDE2MCwxNTRaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAuNDcsNjcuNWExMiwxMiwwLDAsMC0xOS4yNi00LjMyTDE3Mi40Myw5OWwtMTIuNjgtMi43MkwxNTcsODMuNTdsMzUuNzktMzguNzhhMTIsMTIsMCwwLDAtNC4zMi0xOS4yNkE3Ni4wNyw3Ni4wNywwLDAsMCw4OC40MSwxMjEuNjRMMzAuOTIsMTc0LjE4YTQuNjgsNC42OCwwLDAsMC0uMzkuMzgsMzYsMzYsMCwwLDAsNTAuOTEsNTAuOTFsLjM4LS4zOSw1Mi41NC01Ny40OUE3Ni4wNSw3Ni4wNSwwLDAsMCwyMzAuNDcsNjcuNVpNMTYwLDE0OGE1MS41LDUxLjUsMCwwLDEtMjMuMzUtNS41MiwxMiwxMiwwLDAsMC0xNC4yNiwyLjYyTDY0LjMxLDIwOC42NmExMiwxMiwwLDAsMS0xNy0xN2w2My41NS01OC4wN2ExMiwxMiwwLDAsMCwyLjYyLTE0LjI2QTUxLjUsNTEuNSwwLDAsMSwxMDgsOTZhNTIuMDYsNTIuMDYsMCwwLDEsNTItNTJoLjg5TDEzNS4xNyw3MS44N2ExMiwxMiwwLDAsMC0yLjkxLDEwLjY1bDUuNjYsMjYuMzVhMTIsMTIsMCwwLDAsOS4yMSw5LjIxbDI2LjM1LDUuNjZhMTIsMTIsMCwwLDAsMTAuNjUtMi45MUwyMTIsOTUuMTJjMCwuMywwLC41OSwwLC44OUE1Mi4wNiw1Mi4wNiwwLDAsMSwxNjAsMTQ4WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsOTZhNzIsNzIsMCwwLDEtMTAwLjk0LDY2TDc5LDIyMi4yMmMtLjEyLjE0LS4yNi4yOS0uMzkuNDJhMzIsMzIsMCwwLDEtNDUuMjYtNDUuMjZjLjE0LS4xMy4yOC0uMjcuNDMtLjM5TDk0LDEyNC45NGE3Mi4wNyw3Mi4wNywwLDAsMSw4My41NC05OC43OCw4LDgsMCwwLDEsMy45MywxMy4xOUwxNDQsODBsNS42NiwyNi4zNUwxNzYsMTEybDQwLjY1LTM3LjUyYTgsOCwwLDAsMSwxMy4xOSwzLjkzQTcyLjYsNzIuNiwwLDAsMSwyMzIsOTZaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsOTZhNjQsNjQsMCwwLDEtOTQuOTQsNTZMNzMsMjE3QTI0LDI0LDAsMCwxLDM5LDE4M0wxMDQsMTI2Ljk0YTY0LDY0LDAsMCwxLDgwLTkwLjI5TDE0NCw4MGw1LjY2LDI2LjM0TDE3NiwxMTJsNDMuMzUtNDBBNjMuOCw2My44LDAsMCwxLDIyNCw5NloiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMjYuNzYsNjlhOCw4LDAsMCwwLTEyLjg0LTIuODhsLTQwLjMsMzcuMTktMTcuMjMtMy43LTMuNy0xNy4yMywzNy4xOS00MC4zQTgsOCwwLDAsMCwxODcsMjkuMjQsNzIsNzIsMCwwLDAsODgsOTYsNzIuMzQsNzIuMzQsMCwwLDAsOTQsMTI0Ljk0TDMzLjc5LDE3N2MtLjE1LjEyLS4yOS4yNi0uNDMuMzlhMzIsMzIsMCwwLDAsNDUuMjYsNDUuMjZjLjEzLS4xMy4yNy0uMjguMzktLjQyTDEzMS4wNiwxNjJBNzIsNzIsMCwwLDAsMjMyLDk2LDcxLjU2LDcxLjU2LDAsMCwwLDIyNi43Niw2OVpNMTYwLDE1MmE1Ni4xNCw1Ni4xNCwwLDAsMS0yNy4wNy03LDgsOCwwLDAsMC05LjkyLDEuNzdMNjcuMTEsMjExLjUxYTE2LDE2LDAsMCwxLTIyLjYyLTIyLjYyTDEwOS4xOCwxMzNhOCw4LDAsMCwwLDEuNzctOS45Myw1Niw1NiwwLDAsMSw1OC4zNi04Mi4zMWwtMzEuMiwzMy44MWE4LDgsMCwwLDAtMS45NCw3LjFMMTQxLjgzLDEwOGE4LDgsMCwwLDAsNi4xNCw2LjE0bDI2LjM1LDUuNjZhOCw4LDAsMCwwLDcuMS0xLjk0bDMzLjgxLTMxLjJBNTYuMDYsNTYuMDYsMCwwLDEsMTYwLDE1MloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Wrench";
export { I as Wrench };
