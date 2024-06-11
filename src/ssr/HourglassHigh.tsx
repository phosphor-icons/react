/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/HourglassHigh";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMjRINzJBMTYsMTYsMCwwLDAsNTYsNDBWNzZhMTYuMDcsMTYuMDcsMCwwLDAsNi40LDEyLjhMMTE0LjY3LDEyOCw2Mi40LDE2Ny4yQTE2LjA3LDE2LjA3LDAsMCwwLDU2LDE4MHYzNmExNiwxNiwwLDAsMCwxNiwxNkgxODRhMTYsMTYsMCwwLDAsMTYtMTZWMTgwLjM2YTE2LjA5LDE2LjA5LDAsMCwwLTYuMzUtMTIuNzdMMTQxLjI3LDEyOGw1Mi4zOC0zOS42QTE2LjA1LDE2LjA1LDAsMCwwLDIwMCw3NS42NFY0MEExNiwxNiwwLDAsMCwxODQsMjRabTAsMTZWNTZINzJWNDBabTAsMTc2SDcyVjE4MGw1Ni00Miw1Niw0Mi4zNVptLTU2LTk4TDcyLDc2VjcySDE4NHYzLjY0WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMjhINzJBMTIsMTIsMCwwLDAsNjAsNDBWNzZhMTIsMTIsMCwwLDAsNC44LDkuNkwxMjEuMzMsMTI4LDY0LjgsMTcwLjRBMTIsMTIsMCwwLDAsNjAsMTgwdjM2YTEyLDEyLDAsMCwwLDEyLDEySDE4NGExMiwxMiwwLDAsMCwxMi0xMlYxODAuMzZhMTIuMDUsMTIuMDUsMCwwLDAtNC43Ni05LjU3TDEzNC42MywxMjhsNTYuNjEtNDIuNzlBMTIuMDUsMTIuMDUsMCwwLDAsMTk2LDc1LjY0VjQwQTEyLDEyLDAsMCwwLDE4NCwyOFpNNzIsMzZIMTg0YTQsNCwwLDAsMSw0LDRWNjBINjhWNDBBNCw0LDAsMCwxLDcyLDM2Wk0xODgsMTgwLjM2VjIxNmE0LDQsMCwwLDEtNCw0SDcyYTQsNCwwLDAsMS00LTRWMTgwYTQsNCwwLDAsMSwxLjYtMy4yTDEyOCwxMzNsNTguNDIsNDQuMTZBNCw0LDAsMCwxLDE4OCwxODAuMzZaTTE4Ni40MSw3OC44MywxMjgsMTIzLDY5LjYsNzkuMkE0LDQsMCwwLDEsNjgsNzZWNjhIMTg4djcuNjRBNCw0LDAsMCwxLDE4Ni40MSw3OC44M1oiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMjZINzJBMTQsMTQsMCwwLDAsNTgsNDBWNzZhMTQuMDYsMTQuMDYsMCwwLDAsNS42LDExLjJMMTE4LDEyOCw2My42LDE2OC44QTE0LjA2LDE0LjA2LDAsMCwwLDU4LDE4MHYzNmExNCwxNCwwLDAsMCwxNCwxNEgxODRhMTQsMTQsMCwwLDAsMTQtMTRWMTgwLjM2YTE0LjA4LDE0LjA4LDAsMCwwLTUuNTYtMTEuMTdMMTM4LDEyOGw1NC40OS00MS4xOUExNC4wOCwxNC4wOCwwLDAsMCwxOTgsNzUuNjRWNDBBMTQsMTQsMCwwLDAsMTg0LDI2Wk03MiwzOEgxODRhMiwyLDAsMCwxLDIsMlY1OEg3MFY0MEEyLDIsMCwwLDEsNzIsMzhaTTE4NiwxODAuMzZWMjE2YTIsMiwwLDAsMS0yLDJINzJhMiwyLDAsMCwxLTItMlYxODBhMiwyLDAsMCwxLC44LTEuNkwxMjgsMTM1LjUxbDU3LjIyLDQzLjI1QTIsMiwwLDAsMSwxODYsMTgwLjM2Wm0tLjc5LTEwMy4xMkwxMjgsMTIwLjQ5LDcwLjgsNzcuNkEyLDIsMCwwLDEsNzAsNzZWNzBIMTg2djUuNjRBMiwyLDAsMCwxLDE4NS4yMSw3Ny4yNFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMjBINzJBMjAsMjAsMCwwLDAsNTIsNDBWNzZhMjAuMSwyMC4xLDAsMCwwLDgsMTZsNDgsMzZMNjAsMTY0YTIwLjEsMjAuMSwwLDAsMC04LDE2djM2YTIwLDIwLDAsMCwwLDIwLDIwSDE4NGEyMCwyMCwwLDAsMCwyMC0yMFYxODAuMzZhMjAuMTMsMjAuMTMsMCwwLDAtNy45NC0xNkwxNDcuOSwxMjhsNDguMTYtMzYuNGEyMC4xMywyMC4xMywwLDAsMCw3Ljk0LTE2VjQwQTIwLDIwLDAsMCwwLDE4NCwyMFptLTQsMjRWNjBINzZWNDRabS01Miw2OUw4OS4zMyw4NGg3N1ptNTIsOTlINzZWMTgybDUyLTM5LDUyLDM5LjMzWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNzUuNjRWNDBhMTYsMTYsMCwwLDAtMTYtMTZINzJBMTYsMTYsMCwwLDAsNTYsNDBWNzZhMTYuMDcsMTYuMDcsMCwwLDAsNi40LDEyLjhMMTE0LjY3LDEyOCw2Mi40LDE2Ny4yQTE2LjA3LDE2LjA3LDAsMCwwLDU2LDE4MHYzNmExNiwxNiwwLDAsMCwxNiwxNkgxODRhMTYsMTYsMCwwLDAsMTYtMTZWMTgwLjM2YTE2LjA5LDE2LjA5LDAsMCwwLTYuMzUtMTIuNzdMMTQxLjI3LDEyOGw1Mi4zOC0zOS41OUExNi4wOSwxNi4wOSwwLDAsMCwyMDAsNzUuNjRaTTE4NCw0MFY2NEg3MlY0MFptMCwxNzZINzJWMTgwbDU2LTQyLDU2LDQyLjM1WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsNjRWNzUuNjRBOCw4LDAsMCwxLDE4OC44Miw4MkwxMjgsMTI4LDY3LjIsODIuNEE4LDgsMCwwLDEsNjQsNzZWNjRaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTg0LDI0SDcyQTE2LDE2LDAsMCwwLDU2LDQwVjc2YTE2LjA3LDE2LjA3LDAsMCwwLDYuNCwxMi44TDExNC42NywxMjgsNjIuNCwxNjcuMkExNi4wNywxNi4wNywwLDAsMCw1NiwxODB2MzZhMTYsMTYsMCwwLDAsMTYsMTZIMTg0YTE2LDE2LDAsMCwwLDE2LTE2VjE4MC4zNmExNi4wOSwxNi4wOSwwLDAsMC02LjM1LTEyLjc3TDE0MS4yNywxMjhsNTIuMzgtMzkuNTlBMTYuMDksMTYuMDksMCwwLDAsMjAwLDc1LjY0VjQwQTE2LDE2LDAsMCwwLDE4NCwyNFptMCwxNlY1Nkg3MlY0MFptMCwxNzZINzJWMTgwbDU2LTQyLDU2LDQyLjM1Wm0tNTYtOThMNzIsNzZWNzJIMTg0djMuNjRaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "HourglassHigh";
export { I as HourglassHigh };
