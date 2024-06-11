/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/ShareFat";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAuNDksMTAzLjUybC04MC04MEExMiwxMiwwLDAsMCwxNDAsMzJWNjguNzRjLTI1Ljc2LDMuMTItNTMuNjYsMTUuODktNzYuNzUsMzUuNDctMjkuMTYsMjQuNzQtNDcuMzIsNTYuNjktNTEuMTQsOTBBMTYsMTYsMCwwLDAsMzkuNjcsMjA3aDBjMTAuNDYtMTEuMTQsNDctNDUuNzQsMTAwLjMzLTUwLjQyVjE5MmExMiwxMiwwLDAsMCwyMC40OCw4LjQ4bDgwLTgwQTEyLDEyLDAsMCwwLDI0MC40OSwxMDMuNTJaTTE2NCwxNjNWMTQ0YTEyLDEyLDAsMCwwLTEyLTEyYy00OSwwLTg2LjU3LDIxLjU2LTEwOS43OSw0MC4xMSw3LjEzLTE4LjE2LDE5LjYzLTM1LjIyLDM2LjU3LTQ5LjU5QzEwMS4zLDEwMy40MSwxMjguNjcsOTIsMTUyLDkyYTEyLDEyLDAsMCwwLDEyLTEyVjYxbDUxLDUxWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsMTkyVjE0NGMtNjEuNCwwLTEwNC42MSwzNy4xOS0xMjEuMDcsNTQuNzJhNCw0LDAsMCwxLTYuOS0zLjE4QzMxLjUxLDEzMC40NSw5OS4xOSw4MCwxNTIsODBWMzJsODAsODBaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjM3LjY2LDEwNi4zNWwtODAtODBBOCw4LDAsMCwwLDE0NCwzMlY3Mi4zNWMtMjUuOTQsMi4yMi01NC41OSwxNC45Mi03OC4xNiwzNC45MS0yOC4zOCwyNC4wOC00Ni4wNSw1NS4xMS00OS43Niw4Ny4zN2ExMiwxMiwwLDAsMCwyMC42OCw5LjU4aDBjMTEtMTEuNzEsNTAuMTQtNDguNzQsMTA3LjI0LTUyVjE5MmE4LDgsMCwwLDAsMTMuNjYsNS42NWw4MC04MEE4LDgsMCwwLDAsMjM3LjY2LDEwNi4zNVpNMTYwLDE3Mi42OVYxNDRhOCw4LDAsMCwwLTgtOGMtMjguMDgsMC01NS40Myw3LjMzLTgxLjI5LDIxLjhhMTk2LjE3LDE5Ni4xNywwLDAsMC0zNi41NywyNi41MmM1LjgtMjMuODQsMjAuNDItNDYuNTEsNDIuMDUtNjQuODZDOTkuNDEsOTkuNzcsMTI3Ljc1LDg4LDE1Miw4OGE4LDgsMCwwLDAsOC04VjUxLjMyTDIyMC42OSwxMTJaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzcuNjYsMTE3LjY2bC04MCw4MEE4LDgsMCwwLDEsMTQ0LDE5MlYxNTIuMjNjLTU3LjEsMy4yNC05Ni4yNSw0MC4yNy0xMDcuMjQsNTJoMGExMiwxMiwwLDAsMS0yMC42OC05LjU4YzMuNzEtMzIuMjYsMjEuMzgtNjMuMjksNDkuNzYtODcuMzcsMjMuNTctMjAsNTIuMjItMzIuNjksNzguMTYtMzQuOTFWMzJhOCw4LDAsMCwxLDEzLjY2LTUuNjZsODAsODBBOCw4LDAsMCwxLDIzNy42NiwxMTcuNjZaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYuMjQsMTA3Ljc2bC04MC04MEE2LDYsMCwwLDAsMTQ2LDMyVjc0LjJjLTU0LjQ4LDMuNTktMTIwLjM5LDU1LTEyNy45MywxMjAuNjZhMTAsMTAsMCwwLDAsMTcuMjMsOGgwQzQ2LjU2LDE5MC44NSw4NywxNTIuNiwxNDYsMTUwLjEzVjE5MmE2LDYsMCwwLDAsMTAuMjQsNC4yNGw4MC04MEE2LDYsMCwwLDAsMjM2LjI0LDEwNy43NlpNMTU4LDE3Ny41MlYxNDRhNiw2LDAsMCwwLTYtNmMtMjcuNzMsMC01NC43Niw3LjI1LTgwLjMyLDIxLjU1YTE5My4zOCwxOTMuMzgsMCwwLDAtNDAuODEsMzAuNjVjNC43LTI2LjU2LDIwLjE2LTUyLDQ0LTcyLjI3Qzk4LjQ3LDk3Ljk0LDEyNy4yOSw4NiwxNTIsODZhNiw2LDAsMCwwLDYtNlY0Ni40OUwyMjMuNTEsMTEyWiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzcuNjYsMTA2LjM1bC04MC04MEE4LDgsMCwwLDAsMTQ0LDMyVjcyLjM1Yy0yNS45NCwyLjIyLTU0LjU5LDE0LjkyLTc4LjE2LDM0LjkxLTI4LjM4LDI0LjA4LTQ2LjA1LDU1LjExLTQ5Ljc2LDg3LjM3YTEyLDEyLDAsMCwwLDIwLjY4LDkuNThoMGMxMS0xMS43MSw1MC4xNC00OC43NCwxMDcuMjQtNTJWMTkyYTgsOCwwLDAsMCwxMy42Niw1LjY1bDgwLTgwQTgsOCwwLDAsMCwyMzcuNjYsMTA2LjM1Wk0xNjAsMTcyLjY5VjE0NGE4LDgsMCwwLDAtOC04Yy0yOC4wOCwwLTU1LjQzLDcuMzMtODEuMjksMjEuOGExOTYuMTcsMTk2LjE3LDAsMCwwLTM2LjU3LDI2LjUyYzUuOC0yMy44NCwyMC40Mi00Ni41MSw0Mi4wNS02NC44NkM5OS40MSw5OS43NywxMjcuNzUsODgsMTUyLDg4YTgsOCwwLDAsMCw4LThWNTEuMzJMMjIwLjY5LDExMloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzQuODMsMTA5LjE3bC04MC04MEE0LDQsMCwwLDAsMTQ4LDMyVjc2LjA5Yy01NCwyLjQ0LTEyMC40Myw1My41NS0xMjcuOTQsMTE5YTcuODcsNy44NywwLDAsMCw0LjU4LDguMTYsOCw4LDAsMCwwLDMuNDEuNzcsNy45LDcuOSwwLDAsMCw1Ljc5LTIuNTVoMGMxMS41My0xMi4yNyw1My4yOS01MS43MywxMTQuMTYtNTMuNFYxOTJhNCw0LDAsMCwwLDYuODMsMi44M2w4MC04MEE0LDQsMCwwLDAsMjM0LjgzLDEwOS4xN1pNMTU2LDE4Mi4zM1YxNDRhNCw0LDAsMCwwLTQtNGMtMjcuMzksMC01NC4wOCw3LjE3LTc5LjM0LDIxLjNBMTg5LjkxLDE4OS45MSwwLDAsMCwyOCwxOTZsMi45MiwyLjc0TDI4LDE5NmMzLjM2LTI5LjIxLDE5LjU1LTU3LjQ4LDQ1LjYtNzkuNTdDOTcuNTMsOTYuMTEsMTI2LjgzLDg0LDE1Miw4NGE0LDQsMCwwLDAsNC00VjQxLjY2TDIyNi4zNCwxMTJaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ShareFat";
export { I as ShareFat };
