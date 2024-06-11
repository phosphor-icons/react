/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Heart";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzgsMzZjLTIwLjA5LDAtMzcuOTIsNy45My01MCwyMS41NkMxMTUuOTIsNDMuOTMsOTguMDksMzYsNzgsMzZhNjYuMDgsNjYuMDgsMCwwLDAtNjYsNjZjMCw3Mi4zNCwxMDUuODEsMTMwLjE0LDExMC4zMSwxMzIuNTdhMTIsMTIsMCwwLDAsMTEuMzgsMEMxMzguMTksMjMyLjE0LDI0NCwxNzQuMzQsMjQ0LDEwMkE2Ni4wOCw2Ni4wOCwwLDAsMCwxNzgsMzZabS01LjQ5LDE0Mi4zNkEzMjguNjksMzI4LjY5LDAsMCwxLDEyOCwyMTAuMTZhMzI4LjY5LDMyOC42OSwwLDAsMS00NC41MS0zMS44QzYxLjgyLDE1OS43NywzNiwxMzEuNDIsMzYsMTAyQTQyLDQyLDAsMCwxLDc4LDYwYzE3LjgsMCwzMi43LDkuNCwzOC44OSwyNC41NGExMiwxMiwwLDAsMCwyMi4yMiwwQzE0NS4zLDY5LjQsMTYwLjIsNjAsMTc4LDYwYTQyLDQyLDAsMCwxLDQyLDQyQzIyMCwxMzEuNDIsMTk0LjE4LDE1OS43NywxNzIuNTEsMTc4LjM2WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTAyYzAsNjYtMTA0LDEyMi0xMDQsMTIyUzI0LDE2OCwyNCwxMDJBNTQsNTQsMCwwLDEsNzgsNDhjMjIuNTksMCw0MS45NCwxMi4zMSw1MCwzMiw4LjA2LTE5LjY5LDI3LjQxLTMyLDUwLTMyQTU0LDU0LDAsMCwxLDIzMiwxMDJaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTc4LDQwYy0yMC42NSwwLTM4LjczLDguODgtNTAsMjMuODlDMTE2LjczLDQ4Ljg4LDk4LjY1LDQwLDc4LDQwYTYyLjA3LDYyLjA3LDAsMCwwLTYyLDYyYzAsNzAsMTAzLjc5LDEyNi42NiwxMDguMjEsMTI5YTgsOCwwLDAsMCw3LjU4LDBDMTM2LjIxLDIyOC42NiwyNDAsMTcyLDI0MCwxMDJBNjIuMDcsNjIuMDcsMCwwLDAsMTc4LDQwWk0xMjgsMjE0LjhDMTA5Ljc0LDIwNC4xNiwzMiwxNTUuNjksMzIsMTAyQTQ2LjA2LDQ2LjA2LDAsMCwxLDc4LDU2YzE5LjQ1LDAsMzUuNzgsMTAuMzYsNDIuNiwyN2E4LDgsMCwwLDAsMTQuOCwwYzYuODItMTYuNjcsMjMuMTUtMjcsNDIuNi0yN2E0Ni4wNiw0Ni4wNiwwLDAsMSw0Niw0NkMyMjQsMTU1LjYxLDE0Ni4yNCwyMDQuMTUsMTI4LDIxNC44WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTAyYzAsNzAtMTAzLjc5LDEyNi42Ni0xMDguMjEsMTI5YTgsOCwwLDAsMS03LjU4LDBDMTE5Ljc5LDIyOC42NiwxNiwxNzIsMTYsMTAyQTYyLjA3LDYyLjA3LDAsMCwxLDc4LDQwYzIwLjY1LDAsMzguNzMsOC44OCw1MCwyMy44OUMxMzkuMjcsNDguODgsMTU3LjM1LDQwLDE3OCw0MEE2Mi4wNyw2Mi4wNywwLDAsMSwyNDAsMTAyWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzgsNDJjLTIxLDAtMzkuMjYsOS40Ny01MCwyNS4zNEMxMTcuMjYsNTEuNDcsOTksNDIsNzgsNDJhNjAuMDcsNjAuMDcsMCwwLDAtNjAsNjBjMCwyOS4yLDE4LjIsNTkuNTksNTQuMSw5MC4zMWEzMzQuNjgsMzM0LjY4LDAsMCwwLDUzLjA2LDM3LDYsNiwwLDAsMCw1LjY4LDAsMzM0LjY4LDMzNC42OCwwLDAsMCw1My4wNi0zN0MyMTkuOCwxNjEuNTksMjM4LDEzMS4yLDIzOCwxMDJBNjAuMDcsNjAuMDcsMCwwLDAsMTc4LDQyWk0xMjgsMjE3LjExQzExMS41OSwyMDcuNjQsMzAsMTU3LjcyLDMwLDEwMkE0OC4wNSw0OC4wNSwwLDAsMSw3OCw1NGMyMC4yOCwwLDM3LjMxLDEwLjgzLDQ0LjQ1LDI4LjI3YTYsNiwwLDAsMCwxMS4xLDBDMTQwLjY5LDY0LjgzLDE1Ny43Miw1NCwxNzgsNTRhNDguMDUsNDguMDUsMCwwLDEsNDgsNDhDMjI2LDE1Ny43MiwxNDQuNDEsMjA3LjY0LDEyOCwyMTcuMTFaIi8+PC9zdmc+)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzgsNDBjLTIwLjY1LDAtMzguNzMsOC44OC01MCwyMy44OUMxMTYuNzMsNDguODgsOTguNjUsNDAsNzgsNDBhNjIuMDcsNjIuMDcsMCwwLDAtNjIsNjJjMCw3MCwxMDMuNzksMTI2LjY2LDEwOC4yMSwxMjlhOCw4LDAsMCwwLDcuNTgsMEMxMzYuMjEsMjI4LjY2LDI0MCwxNzIsMjQwLDEwMkE2Mi4wNyw2Mi4wNywwLDAsMCwxNzgsNDBaTTEyOCwyMTQuOEMxMDkuNzQsMjA0LjE2LDMyLDE1NS42OSwzMiwxMDJBNDYuMDYsNDYuMDYsMCwwLDEsNzgsNTZjMTkuNDUsMCwzNS43OCwxMC4zNiw0Mi42LDI3YTgsOCwwLDAsMCwxNC44LDBjNi44Mi0xNi42NywyMy4xNS0yNyw0Mi42LTI3YTQ2LjA2LDQ2LjA2LDAsMCwxLDQ2LDQ2QzIyNCwxNTUuNjEsMTQ2LjI0LDIwNC4xNSwxMjgsMjE0LjhaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzgsNDRjLTIxLjQ0LDAtMzkuOTIsMTAuMTktNTAsMjcuMDdDMTE3LjkyLDU0LjE5LDk5LjQ0LDQ0LDc4LDQ0YTU4LjA3LDU4LjA3LDAsMCwwLTU4LDU4YzAsMjguNTksMTgsNTguNDcsNTMuNCw4OC43OWEzMzMuODEsMzMzLjgxLDAsMCwwLDUyLjcsMzYuNzMsNCw0LDAsMCwwLDMuOCwwLDMzMy44MSwzMzMuODEsMCwwLDAsNTIuNy0zNi43M0MyMTgsMTYwLjQ3LDIzNiwxMzAuNTksMjM2LDEwMkE1OC4wNyw1OC4wNywwLDAsMCwxNzgsNDRaTTEyOCwyMTkuNDJjLTE0LTgtMTAwLTU5LjM1LTEwMC0xMTcuNDJBNTAuMDYsNTAuMDYsMCwwLDEsNzgsNTJjMjEuMTEsMCwzOC44NSwxMS4zMSw0Ni4zLDI5LjUxYTQsNCwwLDAsMCw3LjQsMEMxMzkuMTUsNjMuMzEsMTU2Ljg5LDUyLDE3OCw1MmE1MC4wNiw1MC4wNiwwLDAsMSw1MCw1MEMyMjgsMTYwLDE0MiwyMTEuNDYsMTI4LDIxOS40MloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Heart";
export { I as Heart };
