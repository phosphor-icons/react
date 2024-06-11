/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Stool";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQsNjRWNDBhMjAsMjAsMCwwLDAtMjAtMjBINzJBMjAsMjAsMCwwLDAsNTIsNDBWNjRBMjAsMjAsMCwwLDAsNzIsODRoMkw1Mi4xNSwyMjIuMTNhMTIsMTIsMCwxLDAsMjMuNywzLjc0TDgzLjEsMTgwaDg5LjhsNy4yNSw0NS44N2ExMiwxMiwwLDEsMCwyMy43LTMuNzRMMTgyLDg0aDJBMjAsMjAsMCwwLDAsMjA0LDY0Wk03Niw0NEgxODBWNjBINzZabTkzLjExLDExMkg4Ni44OUw5OC4yNSw4NGg1OS41WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsNDBWNjRhOCw4LDAsMCwxLTgsOEg3MmE4LDgsMCwwLDEtOC04VjQwYTgsOCwwLDAsMSw4LThIMTg0QTgsOCwwLDAsMSwxOTIsNDBaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjAwLDY0VjQwYTE2LDE2LDAsMCwwLTE2LTE2SDcyQTE2LDE2LDAsMCwwLDU2LDQwVjY0QTE2LDE2LDAsMCwwLDcyLDgwaDYuNjRMNTYuMSwyMjIuNzVhOCw4LDAsMCwwLDYuNjUsOS4xNUE3LjgyLDcuODIsMCwwLDAsNjQsMjMyYTgsOCwwLDAsMCw3Ljg5LTYuNzVMNzkuNjgsMTc2aDk2LjY0bDcuNzgsNDkuMjVBOCw4LDAsMCwwLDE5MiwyMzJhNy44Miw3LjgyLDAsMCwwLDEuMjYtLjEsOCw4LDAsMCwwLDYuNjUtOS4xNUwxNzcuMzYsODBIMTg0QTE2LDE2LDAsMCwwLDIwMCw2NFpNNzIsNDBIMTg0VjY0SDcyWk0xNzMuNzksMTYwSDgyLjIxTDk0Ljg0LDgwaDY2LjMyWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNjRWNDBhMTYsMTYsMCwwLDAtMTYtMTZINzJBMTYsMTYsMCwwLDAsNTYsNDBWNjRBMTYsMTYsMCwwLDAsNzIsODBoNi42NEw1Ni4xLDIyMi43NWE4LDgsMCwwLDAsNi42NSw5LjE1QTcuODIsNy44MiwwLDAsMCw2NCwyMzJhOCw4LDAsMCwwLDcuODktNi43NUw3OS42OCwxNzZoOTYuNjRsNy43OCw0OS4yNUE4LDgsMCwwLDAsMTkyLDIzMmE3LjgyLDcuODIsMCwwLDAsMS4yNi0uMSw4LDgsMCwwLDAsNi42NS05LjE1TDE3Ny4zNiw4MEgxODRBMTYsMTYsMCwwLDAsMjAwLDY0Wm0tMjYuMjEsOTZIODIuMjFMOTQuODQsODBoNjYuMzJaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTgsNjRWNDBhMTQsMTQsMCwwLDAtMTQtMTRINzJBMTQsMTQsMCwwLDAsNTgsNDBWNjRBMTQsMTQsMCwwLDAsNzIsNzhoOUw1OC4wNywyMjMuMDZhNiw2LDAsMCwwLDUsNi44Nyw2LDYsMCwwLDAsNi44Ni01TDc4LDE3NEgxNzhsOCw1MC45M2E2LDYsMCwxLDAsMTEuODYtMS44N0wxNzUsNzhoOUExNCwxNCwwLDAsMCwxOTgsNjRaTTcwLDY0VjQwYTIsMiwwLDAsMSwyLTJIMTg0YTIsMiwwLDAsMSwyLDJWNjRhMiwyLDAsMCwxLTIsMkg3MkEyLDIsMCwwLDEsNzAsNjRabTEwNi4xNCw5OEg3OS44Nkw5My4xMyw3OGg2OS43NFoiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNjRWNDBhMTYsMTYsMCwwLDAtMTYtMTZINzJBMTYsMTYsMCwwLDAsNTYsNDBWNjRBMTYsMTYsMCwwLDAsNzIsODBoNi42NEw1Ni4xLDIyMi43NWE4LDgsMCwwLDAsNi42NSw5LjE1QTcuODIsNy44MiwwLDAsMCw2NCwyMzJhOCw4LDAsMCwwLDcuODktNi43NUw3OS42OCwxNzZoOTYuNjRsNy43OCw0OS4yNUE4LDgsMCwwLDAsMTkyLDIzMmE3LjgyLDcuODIsMCwwLDAsMS4yNi0uMSw4LDgsMCwwLDAsNi42NS05LjE1TDE3Ny4zNiw4MEgxODRBMTYsMTYsMCwwLDAsMjAwLDY0Wk03Miw0MEgxODRWNjRINzJaTTE3My43OSwxNjBIODIuMjFMOTQuODQsODBoNjYuMzJaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTYsNjRWNDBhMTIsMTIsMCwwLDAtMTItMTJINzJBMTIsMTIsMCwwLDAsNjAsNDBWNjRBMTIsMTIsMCwwLDAsNzIsNzZIODMuMzJMNjAuMDUsMjIzLjM4QTQsNCwwLDAsMCw2My4zOCwyMjgsNC40Niw0LjQ2LDAsMCwwLDY0LDIyOCw0LDQsMCwwLDAsNjgsMjI0LjYyTDc2LjI2LDE3MkgxNzkuNzRsOC4zMSw1Mi42MkE0LDQsMCwwLDAsMTkyLDIyOGE0LjQ2LDQuNDYsMCwwLDAsLjYzLS4wNSw0LDQsMCwwLDAsMy4zMy00LjU3TDE3Mi42OCw3NkgxODRBMTIsMTIsMCwwLDAsMTk2LDY0Wk02OCw2NFY0MGE0LDQsMCwwLDEsNC00SDE4NGE0LDQsMCwwLDEsNCw0VjY0YTQsNCwwLDAsMS00LDRINzJBNCw0LDAsMCwxLDY4LDY0Wk0xNzguNDgsMTY0aC0xMDFsMTMuOS04OGg3My4xNloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Stool";
export { I as Stool };
