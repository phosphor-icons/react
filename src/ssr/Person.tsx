/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Person";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsNDBhMzIsMzIsMCwxLDAtMzIsMzJBMzIsMzIsMCwwLDAsMTYwLDQwWk0xMjgsNTZhMTYsMTYsMCwxLDEsMTYtMTZBMTYsMTYsMCwwLDEsMTI4LDU2Wm05MC4zNCw3OC4wNUwxNzMuMTcsODIuODNhMzIsMzIsMCwwLDAtMjQtMTAuODNIMTA2LjgzYTMyLDMyLDAsMCwwLTI0LDEwLjgzTDM3LjY2LDEzNC4wNWEyMCwyMCwwLDAsMCwyOC4xMywyOC40M2wxNi4zLTEzLjA4TDY1LjU1LDIxMi4yOEEyMCwyMCwwLDAsMCwxMDIsMjI4LjhsMjYtNDQuODcsMjYsNDQuODdhMjAsMjAsMCwwLDAsMzYuNDEtMTYuNTJMMTczLjkxLDE0OS40bDE2LjMsMTMuMDhhMjAsMjAsMCwwLDAsMjguMTMtMjguNDNabS0xMS41MSwxNi43N2E0LDQsMCwwLDEtNS42NiwwYy0uMjEtLjItLjQyLS40LS42NS0uNThMMTY1LDEyMS43NkE4LDgsMCwwLDAsMTUyLjI2LDEzMEwxNzUuMTQsMjE3YTcuNzIsNy43MiwwLDAsMCwuNDgsMS4zNSw0LDQsMCwxLDEtNy4yNSwzLjM4LDYuMjUsNi4yNSwwLDAsMC0uMzMtLjYzTDEzNC45MiwxNjRhOCw4LDAsMCwwLTEzLjg0LDBMODgsMjIxLjA1YTYuMjUsNi4yNSwwLDAsMC0uMzMuNjMsNCw0LDAsMCwxLTIuMjYsMi4wNyw0LDQsMCwwLDEtNS01LjQ1LDcuNzIsNy43MiwwLDAsMCwuNDgtMS4zNUwxMDMuNzQsMTMwQTgsOCwwLDAsMCw5MSwxMjEuNzZMNTUuNDgsMTUwLjI0Yy0uMjMuMTgtLjQ0LjM4LS42NS41OGE0LDQsMCwxLDEtNS42Ni01LjY1Yy4xMi0uMTIuMjMtLjI0LjM0LS4zN0w5NC44Myw5My40MWExNiwxNiwwLDAsMSwxMi01LjQxaDQyLjM0YTE2LDE2LDAsMCwxLDEyLDUuNDFsNDUuMzIsNTEuMzljLjExLjEzLjIyLjI1LjM0LjM3QTQsNCwwLDAsMSwyMDYuODMsMTUwLjgyWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsNjhhMjgsMjgsMCwxLDAtMjgtMjhBMjgsMjgsMCwwLDAsMTI4LDY4Wm0wLTQ4YTIwLDIwLDAsMSwxLTIwLDIwQTIwLDIwLDAsMCwxLDEyOCwyMFptODcuNDIsMTE2Ljc4LTQ1LjI1LTUxLjNhMjgsMjgsMCwwLDAtMjEtOS40OEgxMDYuODNhMjgsMjgsMCwwLDAtMjEsOS40OGwtNDUuMjUsNTEuM2ExNiwxNiwwLDAsMCwyMi41NiwyMi42OUw4OSwxMzguN2wtMTkuNyw3NC44OGExNiwxNiwwLDAsMCwyOS4wOCwxMy4zNUwxMjgsMTc2bDI5LjU4LDUxYTE2LDE2LDAsMCwwLDI5LjA4LTEzLjM1TDE2NywxMzguN2wyNS45LDIwLjc3YTE2LDE2LDAsMCwwLDIyLjU2LTIyLjY5Wm0tNS43NiwxNi44N2E4LDgsMCwwLDEtMTEuMzEsMCwzLjExLDMuMTEsMCwwLDAtLjMzLS4yOWwtMzUuNTEtMjguNDhhNCw0LDAsMCwwLTYuMzgsNC4xM0wxNzksMjE1Ljk0YTQuMTIsNC4xMiwwLDAsMCwuMjQuNjcsOCw4LDAsMSwxLTE0LjUsNi43NmMtLjA1LS4xMS0uMTEtLjIxLS4xNy0uMzJMMTMxLjQ2LDE2NmE0LDQsMCwwLDAtNi45MiwwTDkxLjQyLDIyMy4wNWMtLjA2LjExLS4xMi4yMS0uMTcuMzJhOCw4LDAsMSwxLTE0LjUtNi43Niw0LjEyLDQuMTIsMCwwLDAsLjI0LS42N0w5OS44NywxMjlhNCw0LDAsMCwwLTYuMzgtNC4xM0w1OCwxNTMuMzZhMy4xMSwzLjExLDAsMCwwLS4zMy4yOSw4LDgsMCwwLDEtMTEuMzEtMTEuMzFsLjE3LS4xOEw5MS44Myw5MC43N2EyMCwyMCwwLDAsMSwxNS02Ljc3aDQyLjM0YTIwLDIwLDAsMCwxLDE1LDYuNzdsNDUuMzIsNTEuMzkuMTcuMThBOCw4LDAsMCwxLDIwOS42NiwxNTMuNjVaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsNzBBMzAsMzAsMCwxLDAsOTgsNDAsMzAsMzAsMCwwLDAsMTI4LDcwWm0wLTQ4YTE4LDE4LDAsMSwxLTE4LDE4QTE4LDE4LDAsMCwxLDEyOCwyMlptODguODgsMTEzLjQyTDE3MS42Nyw4NC4xNkEzMCwzMCwwLDAsMCwxNDkuMTcsNzRIMTA2LjgzYTMwLDMwLDAsMCwwLTIyLjUsMTAuMTVMMzkuMTIsMTM1LjQyQTE4LDE4LDAsMCwwLDY0LjQ2LDE2MWwyMS4xMS0xNi45M0w2Ny40NCwyMTIuOTJhMTgsMTgsMCwwLDAsMzIuNzUsMTQuOTRMMTI4LDE4MGwyNy44MSw0Ny45MWExOCwxOCwwLDAsMCwzMi43NS0xNC45NGwtMTguMTMtNjguODdMMTkxLjU0LDE2MWExOCwxOCwwLDAsMCwyNS4zNC0yNS41NlptLTguNjMsMTYuODJhNiw2LDAsMCwxLTguNDksMCw0LjE1LDQuMTUsMCwwLDAtLjQ5LS40NGwtMzUuNTEtMjguNDhhNiw2LDAsMCwwLTkuNTYsNi4ybDIyLjg3LDg2LjkzYTcuNjYsNy42NiwwLDAsMCwuMzcsMSw2LDYsMCwwLDEtMTAuODgsNS4wNyw0LjM3LDQuMzcsMCwwLDAtLjI1LS40OEwxMzMuMTksMTY1YTYsNiwwLDAsMC0xMC4zOCwwTDg5LjY5LDIyMi4wNWE0LjM3LDQuMzcsMCwwLDAtLjI1LjQ4LDYsNiwwLDAsMS0xMC44OC01LjA3LDcuNjYsNy42NiwwLDAsMCwuMzctMWwyMi44Ny04Ni45M0E2LDYsMCwwLDAsOTkuMjcsMTIzLDYuMDcsNi4wNywwLDAsMCw5NiwxMjJhNiw2LDAsMCwwLTMuNzYsMS4zMkw1Ni43MywxNTEuOGE0LjE1LDQuMTUsMCwwLDAtLjQ5LjQ0LDYsNiwwLDAsMS04LjQ5LTguNDlsLjI2LS4yN0w5My4zMyw5Mi4wOUExOCwxOCwwLDAsMSwxMDYuODMsODZoNDIuMzRhMTgsMTgsMCwwLDEsMTMuNSw2LjA5TDIwOCwxNDMuNDhsLjI2LjI3QTYsNiwwLDAsMSwyMDguMjUsMTUyLjI0WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjEuMjksMTMxLjM0LDE3Ni4xNyw4MC4xOUEzNiwzNiwwLDAsMCwxNTAuNTUsNjhhMzYsMzYsMCwxLDAtNDUuMSwwQTM2LDM2LDAsMCwwLDc5LjgzLDgwLjE5TDM0LjcxLDEzMS4zNGEyNCwyNCwwLDAsMCwzMy43LDM0LjE2bDYuNzMtNS4zOUw2MS43NCwyMTFhMjQsMjQsMCwwLDAsNDMuNzQsMTkuNjlMMTI4LDE5MS45bDIyLjUyLDM4Ljc5YTIzLjgyLDIzLjgyLDAsMCwwLDEzLjI3LDExLjg1QTI0LDI0LDAsMCwwLDE5NC4yNiwyMTFsLTEzLjQtNTAuODksNi43Myw1LjM5YTI0LDI0LDAsMCwwLDMzLjctMzQuMTZaTTEyOCwyOGExMiwxMiwwLDEsMS0xMiwxMkExMiwxMiwwLDAsMSwxMjgsMjhabTc1LDExOS4xMi0zNS41Mi0yOC40OWExMiwxMiwwLDAsMC0xOS4xMSwxMi40MkwxNzEuMjcsMjE4YTEyLjE4LDEyLjE4LDAsMCwwLC43MywyLDEwLjcyLDEwLjcyLDAsMCwwLS41LTFMMTM4LjM4LDE2MmExMiwxMiwwLDAsMC0yMC43NiwwTDg0LjUsMjE5YTEwLjcyLDEwLjcyLDAsMCwwLS41LDEsMTMuMTYsMTMuMTYsMCwwLDAsLjczLTJsMjIuODctODYuOTJhMTIsMTIsMCwwLDAtMTkuMTEtMTIuNDJMNTMsMTQ3LjEyYTExLjUsMTEuNSwwLDAsMC0xLC44N2MuMTgtLjE3LjM1LS4zNi41Mi0uNTRMOTcuODMsOTYuMDZhMTIsMTIsMCwwLDEsOS00LjA2aDQyLjM0YTEyLDEyLDAsMCwxLDksNC4wNmw0NS4zMiw1MS4zOWMuMTcuMTguMzQuMzcuNTIuNTRBMTEuNSwxMS41LDAsMCwwLDIwMywxNDcuMTJaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDAsMzZhMjgsMjgsMCwxLDEsMjgsMjhBMjgsMjgsMCwwLDEsMTAwLDM2Wk0yMTUuNDIsMTQwLjc4bC00NS4yNS01MS4zYTI4LDI4LDAsMCwwLTIxLTkuNDhIMTA2LjgzYTI4LDI4LDAsMCwwLTIxLDkuNDhsLTQ1LjI1LDUxLjNhMTYsMTYsMCwwLDAsMjIuNTYsMjIuNjlMODksMTQyLjdsLTE5LjcsNzQuODhhMTYsMTYsMCwwLDAsMjkuMDgsMTMuMzVMMTI4LDE4MGwyOS41OCw1MWExNiwxNiwwLDAsMCwyOS4wOC0xMy4zNUwxNjcsMTQyLjdsMjUuOSwyMC43N2ExNiwxNiwwLDAsMCwyMi41Ni0yMi42OVoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDQsNDBhMjQsMjQsMCwxLDEsMjQsMjRBMjQsMjQsMCwwLDEsMTA0LDQwWm0xMDguNDksOTkuNTFMMTY3LjE3LDg4LjEzYTI0LDI0LDAsMCwwLTE4LTguMTNIMTA2LjgzYTI0LDI0LDAsMCwwLTE4LDguMTNMNDMuNTEsMTM5LjUxYTEyLDEyLDAsMCwwLDE3LDE3TDk2LDEyOCw3My4xMywyMTQuOTNhMTIsMTIsMCwwLDAsMjEuNzUsMTAuMTRMMTI4LDE2OGwzMy4xMiw1Ny4wN2ExMiwxMiwwLDAsMCwyMS43NS0xMC4xNEwxNjAsMTI4bDM1LjUxLDI4LjQ5YTEyLDEyLDAsMCwwLDE3LTE3WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTE2MCw0MGEzMiwzMiwwLDEsMC0zMiwzMkEzMiwzMiwwLDAsMCwxNjAsNDBaTTEyOCw1NmExNiwxNiwwLDEsMSwxNi0xNkExNiwxNiwwLDAsMSwxMjgsNTZabTkwLjM0LDc4LjA1TDE3My4xNyw4Mi44M2EzMiwzMiwwLDAsMC0yNC0xMC44M0gxMDYuODNhMzIsMzIsMCwwLDAtMjQsMTAuODNMMzcuNjYsMTM0LjA1YTIwLDIwLDAsMCwwLDI4LjEzLDI4LjQzbDE2LjMtMTMuMDhMNjUuNTUsMjEyLjI4QTIwLDIwLDAsMCwwLDEwMiwyMjguOGwyNi00NC44NywyNiw0NC44N2EyMCwyMCwwLDAsMCwzNi40MS0xNi41MkwxNzMuOTEsMTQ5LjRsMTYuMywxMy4wOGEyMCwyMCwwLDAsMCwyOC4xMy0yOC40M1ptLTExLjUxLDE2Ljc3YTQsNCwwLDAsMS01LjY2LDBjLS4yMS0uMi0uNDItLjQtLjY1LS41OEwxNjUsMTIxLjc2QTgsOCwwLDAsMCwxNTIuMjYsMTMwTDE3NS4xNCwyMTdhNy43Miw3LjcyLDAsMCwwLC40OCwxLjM1LDQsNCwwLDEsMS03LjI1LDMuMzgsNi4yNSw2LjI1LDAsMCwwLS4zMy0uNjNMMTM0LjkyLDE2NGE4LDgsMCwwLDAtMTMuODQsMEw4OCwyMjEuMDVhNi4yNSw2LjI1LDAsMCwwLS4zMy42Myw0LDQsMCwwLDEtMi4yNiwyLjA3LDQsNCwwLDAsMS01LTUuNDUsNy43Miw3LjcyLDAsMCwwLC40OC0xLjM1TDEwMy43NCwxMzBBOCw4LDAsMCwwLDkxLDEyMS43Nkw1NS40OCwxNTAuMjRjLS4yMy4xOC0uNDQuMzgtLjY1LjU4YTQsNCwwLDEsMS01LjY2LTUuNjVjLjEyLS4xMi4yMy0uMjQuMzQtLjM3TDk0LjgzLDkzLjQxYTE2LDE2LDAsMCwxLDEyLTUuNDFoNDIuMzRhMTYsMTYsMCwwLDEsMTIsNS40MWw0NS4zMiw1MS4zOWMuMTEuMTMuMjIuMjUuMzQuMzdBNCw0LDAsMCwxLDIwNi44MywxNTAuODJaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Person";
export { I as Person };
