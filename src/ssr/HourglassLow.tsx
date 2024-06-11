/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/HourglassLow";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNzUuNjRWNDBhMTYsMTYsMCwwLDAtMTYtMTZINzJBMTYsMTYsMCwwLDAsNTYsNDBWNzZhMTYuMDcsMTYuMDcsMCwwLDAsNi40LDEyLjhMMTE0LjY3LDEyOCw2Mi40LDE2Ny4yQTE2LjA3LDE2LjA3LDAsMCwwLDU2LDE4MHYzNmExNiwxNiwwLDAsMCwxNiwxNkgxODRhMTYsMTYsMCwwLDAsMTYtMTZWMTgwLjM2YTE2LjA4LDE2LjA4LDAsMCwwLTYuMzUtMTIuNzZMMTQxLjI3LDEyOGw1Mi4zOC0zOS42QTE2LjA1LDE2LjA1LDAsMCwwLDIwMCw3NS42NFpNMTc4LjIzLDE3Nkg3Ny4zM0wxMjgsMTM4Wk03MiwyMTZWMTkySDE4NHYyNFpNMTg0LDc1LjY0LDEyOCwxMTgsNzIsNzZWNDBIMTg0WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTYsNzUuNjRWNDBhMTIsMTIsMCwwLDAtMTItMTJINzJBMTIsMTIsMCwwLDAsNjAsNDBWNzZhMTIsMTIsMCwwLDAsNC44LDkuNkwxMjEuMzMsMTI4LDY0LjgsMTcwLjRBMTIsMTIsMCwwLDAsNjAsMTgwdjM2YTEyLDEyLDAsMCwwLDEyLDEySDE4NGExMiwxMiwwLDAsMCwxMi0xMlYxODAuMzZhMTIuMDUsMTIuMDUsMCwwLDAtNC43Ni05LjU3TDEzNC42MywxMjhsNTYuNjEtNDIuNzlBMTIuMDUsMTIuMDUsMCwwLDAsMTk2LDc1LjY0Wk0xODQsMjIwSDcyYTQsNCwwLDAsMS00LTRWMTg4SDE4OHYyOEE0LDQsMCwwLDEsMTg0LDIyMFptNC00MEg2OGE0LDQsMCwwLDEsMS42LTMuMkwxMjgsMTMzbDU4LjQyLDQ0LjE2QTQsNCwwLDAsMSwxODgsMTgwWm0wLTEwNC4zNmE0LDQsMCwwLDEtMS41OSwzLjE5TDEyOCwxMjMsNjkuNiw3OS4yQTQsNCwwLDAsMSw2OCw3NlY0MGE0LDQsMCwwLDEsNC00SDE4NGE0LDQsMCwwLDEsNCw0WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTgsNzUuNjRWNDBhMTQsMTQsMCwwLDAtMTQtMTRINzJBMTQsMTQsMCwwLDAsNTgsNDBWNzZhMTQuMDYsMTQuMDYsMCwwLDAsNS42LDExLjJMMTE4LDEyOCw2My42LDE2OC44QTE0LjA2LDE0LjA2LDAsMCwwLDU4LDE4MHYzNmExNCwxNCwwLDAsMCwxNCwxNEgxODRhMTQsMTQsMCwwLDAsMTQtMTRWMTgwLjM2YTE0LjA4LDE0LjA4LDAsMCwwLTUuNTYtMTEuMTdMMTM4LDEyOGw1NC40OS00MS4xOUExNC4wOCwxNC4wOCwwLDAsMCwxOTgsNzUuNjRaTTE4NC4yLDE3OEg3MS4zM0wxMjgsMTM1LjUxWm0tLjIsNDBINzJhMiwyLDAsMCwxLTItMlYxOTBIMTg2djI2QTIsMiwwLDAsMSwxODQsMjE4Wm0yLTE0Mi4zNmEyLDIsMCwwLDEtLjc5LDEuNkwxMjgsMTIwLjQ5LDcwLjgsNzcuNkEyLDIsMCwwLDEsNzAsNzZWNDBhMiwyLDAsMCwxLDItMkgxODRhMiwyLDAsMCwxLDIsMloiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQsNzUuNjRWNDBhMjAsMjAsMCwwLDAtMjAtMjBINzJBMjAsMjAsMCwwLDAsNTIsNDBWNzZhMjAuMSwyMC4xLDAsMCwwLDgsMTZsNDgsMzZMNjAsMTY0YTIwLjEsMjAuMSwwLDAsMC04LDE2djM2YTIwLDIwLDAsMCwwLDIwLDIwSDE4NGEyMCwyMCwwLDAsMCwyMC0yMFYxODAuMzZhMjAuMTMsMjAuMTMsMCwwLDAtNy45NC0xNkwxNDcuOSwxMjhsNDguMTYtMzYuNEEyMC4xMywyMC4xMywwLDAsMCwyMDQsNzUuNjRaTTE2Ni4zMSwxNzJoLTc3TDEyOCwxNDNaTTc2LDIxMlYxOTZIMTgwdjE2Wk0xODAsNzMuNjUsMTI4LDExMyw3Niw3NFY0NEgxODBaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNzUuNjRWNDBhMTYsMTYsMCwwLDAtMTYtMTZINzJBMTYsMTYsMCwwLDAsNTYsNDBWNzZhMTYuMDcsMTYuMDcsMCwwLDAsNi40LDEyLjhMMTE0LjY3LDEyOCw2Mi40LDE2Ny4yQTE2LjA3LDE2LjA3LDAsMCwwLDU2LDE4MHYzNmExNiwxNiwwLDAsMCwxNiwxNkgxODRhMTYsMTYsMCwwLDAsMTYtMTZWMTgwLjM2YTE2LjA4LDE2LjA4LDAsMCwwLTYuMzUtMTIuNzZMMTQxLjI3LDEyOGw1Mi4zOC0zOS41OUExNi4wOSwxNi4wOSwwLDAsMCwyMDAsNzUuNjRaTTE3OC4yMywxNzZINzcuMzNMMTI4LDEzOFpNMTg0LDc1LjY0LDEyOCwxMTgsNzIsNzZWNDBIMTg0WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMTg0djMyYTgsOCwwLDAsMS04LDhINzJhOCw4LDAsMCwxLTgtOFYxODRaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjAwLDc1LjY0VjQwYTE2LDE2LDAsMCwwLTE2LTE2SDcyQTE2LDE2LDAsMCwwLDU2LDQwVjc2YTE2LjA3LDE2LjA3LDAsMCwwLDYuNCwxMi44TDExNC42NywxMjgsNjIuNCwxNjcuMkExNi4wNywxNi4wNywwLDAsMCw1NiwxODB2MzZhMTYsMTYsMCwwLDAsMTYsMTZIMTg0YTE2LDE2LDAsMCwwLDE2LTE2VjE4MC4zNmExNi4wOCwxNi4wOCwwLDAsMC02LjM1LTEyLjc2TDE0MS4yNywxMjhsNTIuMzgtMzkuNTlBMTYuMDksMTYuMDksMCwwLDAsMjAwLDc1LjY0Wk0xNzguMjMsMTc2SDc3LjMzTDEyOCwxMzhaTTcyLDIxNlYxOTJIMTg0djI0Wk0xODQsNzUuNjQsMTI4LDExOCw3Miw3NlY0MEgxODRaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "HourglassLow";
export { I as HourglassLow };
