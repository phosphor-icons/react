/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Yarn";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMjEySDE5NS44M0ExMDcuOTQsMTA3Ljk0LDAsMSwwLDEyOCwyMzZsMTA0LDBhMTIsMTIsMCwxLDAsMC0yNFpNMTI4LDQ0YTgzLjMsODMuMywwLDAsMSwzNC45LDcuNjNRMTUzLjIxLDU2LjQ1LDE0NCw2Mi4xNGEyMjcuNTgsMjI3LjU4LDAsMCwwLTMyLjEzLTE2LjU4QTg0LjQ5LDg0LjQ5LDAsMCwxLDEyOCw0NFpNNzkuMzMsNTkuNkEyMDEuNiwyMDEuNiwwLDAsMSwxMjIuNSw3Ny4zMXEtNi43Myw1LjM1LTEzLDExLjJBMTg1LjQ4LDE4NS40OCwwLDAsMCw2NSw3Mi40OSw4NSw4NSwwLDAsMSw3OS4zMyw1OS42Wk01MS4xMSw5NC4yM2ExNjEuNSwxNjEuNSwwLDAsMSw0MC43NSwxMi40M3EtNS40NCw2LjI1LTEwLjQ0LDEyLjlhMTQ1Ljg2LDE0NS44NiwwLDAsMC0zNS4zNy05LjkyQTgzLDgzLDAsMCwxLDUxLjExLDk0LjIzWm0yLjc2LDczLjIzYTgzLjQ5LDgzLjQ5LDAsMCwxLTkuNjYtMzMuODNBMTIyLjE1LDEyMi4xNSwwLDAsMSw2Ny43OSwxNDAsMjI4Ljc2LDIyOC43NiwwLDAsMCw1My44NywxNjcuNDZaTTcxLDE4OS42N0EyMDUuMzgsMjA1LjM4LDAsMCwxLDE4Ni4xLDY3LjQyYTg1LjM2LDg1LjM2LDAsMCwxLDExLDEyLjg2QTE4Ny44NywxODcuODcsMCwwLDAsODQuNTUsMTk5Ljg2LDg0LjA4LDg0LjA4LDAsMCwxLDcxLDE4OS42N1ptNTEuNjcsMjIuMTVhODQuMDgsODQuMDgsMCwwLDEtMTYtMi41NSwxNjMuODcsMTYzLjg3LDAsMCwxLDEwMS4wNy0xMDcuNCw4My40Myw4My40MywwLDAsMSwzLjUyLDE1Ljc4QTE0OC43NiwxNDguNzYsMCwwLDAsMTIyLjcxLDIxMS44MlptMjYuNC0yLjUxYTEyNC43OCwxMjQuNzgsMCwwLDEsNjEuMzEtNjUuMTVBODQuMjUsODQuMjUsMCwwLDEsMTQ5LjExLDIwOS4zMVoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTI4YTk2LDk2LDAsMSwxLTk2LTk2QTk2LDk2LDAsMCwxLDIyNCwxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjMyLDIxNkgxODMuMzlBMTAzLjk1LDEwMy45NSwwLDEsMCwxMjgsMjMybDEwNCwwYTgsOCwwLDEsMCwwLTE2Wk0xMjgsNDBhODcuNTEsODcuNTEsMCwwLDEsNDMuOTMsMTEuNzcsMjIyLjA2LDIyMi4wNiwwLDAsMC0yNy44OCwxNS4wOSwyMjIuMjMsMjIyLjIzLDAsMCwwLTQ1LTIyQTg3LjUyLDg3LjUyLDAsMCwxLDEyOCw0MFpNNzguNTYsNTUuMjRhMjA2LDIwNiwwLDAsMSw1MS4xMSwyMS41N0EyMjUuNzYsMjI1Ljc2LDAsMCwwLDExMC4xLDkzLjM2LDE4MS41NCwxODEuNTQsMCwwLDAsNTcuNzMsNzUuMDksODguNjcsODguNjcsMCwwLDEsNzguNTYsNTUuMjRaTTQ4LjcyLDg5LjgyYTE2NS44MiwxNjUuODIsMCwwLDEsNDkuNjcsMTUuNTFBMjI4LDIyOCwwLDAsMCw4Mi43NiwxMjQuNSwxNDIuNjUsMTQyLjY1LDAsMCwwLDQxLjI4LDExMyw4Ny41LDg3LjUsMCwwLDEsNDguNzIsODkuODJaTTQwLDEyOWExMjYuMDcsMTI2LjA3LDAsMCwxLDMzLjYzLDksMjIyLjM2LDIyMi4zNiwwLDAsMC0xOS4wNywzOC40NUE4Ny41MSw4Ny41MSwwLDAsMSw0MCwxMjlabTI2LjQyLDYxLjgxQTIwOS4zNiwyMDkuMzYsMCwwLDEsMTg3LDYyLjc0YTg5LDg5LDAsMCwxLDE2LjIyLDE5LjU3QTE4My44OSwxODMuODksMCwwLDAsODcsMjA1LjgyLDg4LjU2LDg4LjU2LDAsMCwxLDY2LjQzLDE5MC44MVpNMTI1LjY2LDIxNkE4Ny42Niw4Ny42NiwwLDAsMSwxMDEuODMsMjEyLDE2Ny44NCwxNjcuODQsMCwwLDEsMjEwLjI4LDk2Ljc5YTg3LjM1LDg3LjM1LDAsMCwxLDUuMzgsMjMuNTVBMTQ0LjU5LDE0NC41OSwwLDAsMCwxMjUuNjYsMjE2Wm04OS44Mi03OC40NGE4OC4xOSw4OC4xOSwwLDAsMS03Mi42Nyw3Ny4yMkExMjguNjQsMTI4LjY0LDAsMCwxLDIxNS40OCwxMzcuNTNaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik02OS40LDE0NC44OWEyMjAuOTQsMjIwLjk0LDAsMCwwLTE4Ljc3LDQyLjYsNCw0LDAsMCwxLTcsMS4xOSwxMDMuNDQsMTAzLjQ0LDAsMCwxLTE4LjgzLTQ4LjExLDQsNCwwLDAsMSw0LjEzLTQuNDdBMTE5LDExOSwwLDAsMSw2OS40LDE0NC44OVpNNDQsNzcuMTRhMTgwLjA2LDE4MC4wNiwwLDAsMSw2MywxOS4xMiwyMjYuOSwyMjYuOSwwLDAsMSwyMi42LTE5LjQ5LDIwNi40MiwyMDYuNDIsMCwwLDAtNjkuMjgtMjUuNiw0LDQsMCwwLDAtMy40MiwxQTEwNS4zLDEwNS4zLDAsMCwwLDQxLjA4LDcxLDQsNCwwLDAsMCw0NCw3Ny4xNFpNMjM5LjU4LDIyMS4zNUE3LjkxLDcuOTEsMCwwLDAsMjMyLDIxNkgxODMuMzZBMTA0LjI1LDEwNC4yNSwwLDAsMCwyMzAuMjUsMTQ3YTQsNCwwLDAsMC01LjI3LTQuNTJBMTIwLjYsMTIwLjYsMCwwLDAsMTUwLjg4LDIxNkgxMzRhMTM2LjU1LDEzNi41NSwwLDAsMSw5NC43OC05MS4zNyw0LDQsMCwwLDAsMi45Mi00LjE1LDEwMi41OSwxMDIuNTksMCwwLDAtMy41OC0yMC41Niw0LDQsMCwwLDAtNC44OS0yLjhBMTY0LjUzLDE2NC41MywwLDAsMCwxMDMsMjI1YTQsNCwwLDAsMCwzLjA4LDQuNjlBMTAzLjksMTAzLjksMCwwLDAsMTI4LDIzMmgwbDEwNCwwQTgsOCwwLDAsMCwyMzkuNTgsMjIxLjM1Wm0tMjExLTEwMS4yN2ExMzQuNTEsMTM0LjUxLDAsMCwxLDQ5LjM5LDExQTIyNC40NCwyMjQuNDQsMCwwLDEsOTUuNTIsMTA4LjQsMTY0LjI4LDE2NC4yOCwwLDAsMCwzMy4zNiw5Mi4yOGE0LDQsMCwwLDAtNCwyLjc1LDEwMywxMDMsMCwwLDAtNC42MywyMC42MUE0LDQsMCwwLDAsMjguNTcsMTIwLjA4Wk04NS44NCw0MC42NkEyMjIuODEsMjIyLjgxLDAsMCwxLDE0NCw2Ni44YTIyMS4zLDIyMS4zLDAsMCwxLDM4LjgtMTkuNjcsNCw0LDAsMCwwLC43LTcuMDgsMTAzLjg2LDEwMy44NiwwLDAsMC05OC4yLTYuODVBNCw0LDAsMCwwLDg1Ljg0LDQwLjY2Wk0yMTYsODIuNTFhNCw0LDAsMCwwLDIuNC01Ljg3LDEwNSwxMDUsMCwwLDAtMTIuODItMTcuODEsNCw0LDAsMCwwLTQuMjEtMS4xOUEyMDguODEsMjA4LjgxLDAsMCwwLDYyLjIxLDIwNS41MWE0LDQsMCwwLDAsMS40NCw0LjEzQTEwNC4yNSwxMDQuMjUsMCwwLDAsODIuMiwyMjEuMzZhNCw0LDAsMCwwLDUuNzEtMi43NUExODAuNjEsMTgwLjYxLDAsMCwxLDIxNiw4Mi41MVoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMjE4SDE3NmExMDIsMTAyLDAsMSwwLTQ4LDEybDEwNCwwYTYsNiwwLDEsMCwwLTEyWk0xMjgsMzhhODkuNTMsODkuNTMsMCwwLDEsNDguMjQsMTQsMjIwLjA2LDIyMC4wNiwwLDAsMC0zMi4xOSwxNy4xOUEyMjAuMzgsMjIwLjM4LDAsMCwwLDkzLjIsNDUsODkuNjUsODkuNjUsMCwwLDEsMTI4LDM4Wk03OC4yLDUzLjA3YTIwOC42MSwyMDguNjEsMCwwLDEsNTUuMDksMjMuNTdBMjIzLjc5LDIyMy43OSwwLDAsMCwxMTAuNDUsOTUuOCwxODAsMTgwLDAsMCwwLDU0LjIzLDc2LjUsOTAuODUsOTAuODUsMCwwLDEsNzguMiw1My4wN1pNNDcuNTgsODcuNjJhMTY4LjEzLDE2OC4xMywwLDAsMSw1NC4wNywxNy4xMUEyMjMuNDQsMjIzLjQ0LDAsMCwwLDgzLjQyLDEyNywxNDAuNDMsMTQwLjQzLDAsMCwwLDM5LDExNC43OSw4OS41Myw4OS41MywwLDAsMSw0Ny41OCw4Ny42MlptNy41Myw5My4xMUE4OS40OSw4OS40OSwwLDAsMSwzOCwxMjhjMC0uNDIsMC0uODMsMC0xLjI1QTEyOC41LDEyOC41LDAsMCwxLDc2LjYsMTM3LjA4LDIyMC40NSwyMjAuNDUsMCwwLDAsNTUuMTEsMTgwLjczWm05LDEwLjY0QTIxMS4yNywyMTEuMjcsMCwwLDEsMTg3LjM5LDYwLjQ0YTkwLjYyLDkwLjYyLDAsMCwxLDE4Ljc2LDIzQTE4MS44NiwxODEuODYsMCwwLDAsODguMjIsMjA4LjcxLDkwLjQsOTAuNCwwLDAsMSw2NC4xNSwxOTEuMzdabTYzLDI2LjYyYTg5LjcxLDg5LjcxLDAsMCwxLTI3Ljc1LTQuNjUsMTY5Ljg2LDE2OS44NiwwLDAsMSwxMTItMTE5LDg5LjEyLDg5LjEyLDAsMCwxLDYuMzQsMjcuNDFBMTQyLjU3LDE0Mi41NywwLDAsMCwxMjcuMTUsMjE4Wm05MC42Mi04My41M2E5MC4xNSw5MC4xNSwwLDAsMS03Ny44OCw4Mi43NUExMzAuNjIsMTMwLjYyLDAsMCwxLDIxNy43NywxMzQuNDZaIi8+PC9zdmc+)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMjE2SDE4My4zOUExMDMuOTUsMTAzLjk1LDAsMSwwLDEyOCwyMzJsMTA0LDBhOCw4LDAsMSwwLDAtMTZaTTEyOCw0MGE4Ny41MSw4Ny41MSwwLDAsMSw0My45MywxMS43NywyMjIuMDYsMjIyLjA2LDAsMCwwLTI3Ljg4LDE1LjA5LDIyMi4yMywyMjIuMjMsMCwwLDAtNDUtMjJBODcuNTIsODcuNTIsMCwwLDEsMTI4LDQwWk03OC41Niw1NS4yNGEyMDYsMjA2LDAsMCwxLDUxLjExLDIxLjU3QTIyNS43NiwyMjUuNzYsMCwwLDAsMTEwLjEsOTMuMzYsMTgxLjU0LDE4MS41NCwwLDAsMCw1Ny43Myw3NS4wOSw4OC42Nyw4OC42NywwLDAsMSw3OC41Niw1NS4yNFpNNDguNzIsODkuODJhMTY1LjgyLDE2NS44MiwwLDAsMSw0OS42NywxNS41MUEyMjgsMjI4LDAsMCwwLDgyLjc2LDEyNC41LDE0Mi42NSwxNDIuNjUsMCwwLDAsNDEuMjgsMTEzLDg3LjUsODcuNSwwLDAsMSw0OC43Miw4OS44MlpNNDAsMTI5YTEyNi4wNywxMjYuMDcsMCwwLDEsMzMuNjMsOSwyMjIuMzYsMjIyLjM2LDAsMCwwLTE5LjA3LDM4LjQ1QTg3LjUxLDg3LjUxLDAsMCwxLDQwLDEyOVptMjYuNDIsNjEuODFBMjA5LjM2LDIwOS4zNiwwLDAsMSwxODcsNjIuNzRhODksODksMCwwLDEsMTYuMjIsMTkuNTdBMTgzLjg5LDE4My44OSwwLDAsMCw4NywyMDUuODIsODguNTYsODguNTYsMCwwLDEsNjYuNDMsMTkwLjgxWk0xMjUuNjYsMjE2QTg3LjY2LDg3LjY2LDAsMCwxLDEwMS44MywyMTIsMTY3Ljg0LDE2Ny44NCwwLDAsMSwyMTAuMjgsOTYuNzlhODcuMzUsODcuMzUsMCwwLDEsNS4zOCwyMy41NUExNDQuNTksMTQ0LjU5LDAsMCwwLDEyNS42NiwyMTZabTg5LjgyLTc4LjQ0YTg4LjE5LDg4LjE5LDAsMCwxLTcyLjY3LDc3LjIyQTEyOC42NCwxMjguNjQsMCwwLDEsMjE1LjQ4LDEzNy41M1oiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMjIwaDBsLTY0Ljc5LDBBMTAwLDEwMCwwLDEsMCwxMjgsMjI4bDEwNCwwYTQsNCwwLDAsMCwwLThaTTEyOCwzNmE5MS41LDkxLjUsMCwwLDEsNTIuNDMsMTYuNDQsMjE5LjQxLDIxOS40MSwwLDAsMC0zNi4zOCwxOS4xOEEyMTguNjMsMjE4LjYzLDAsMCwwLDg3LjYzLDQ1LjM1LDkxLjMxLDkxLjMxLDAsMCwxLDEyOCwzNlpNNzcuODUsNTAuOTFhMjEwLjQ1LDIxMC40NSwwLDAsMSw1OSwyNS42LDIyMC44MywyMjAuODMsMCwwLDAtMjYuMDcsMjEuNzdBMTc3LjgxLDE3Ny44MSwwLDAsMCw1MC44MSw3OCw5Mi41OSw5Mi41OSwwLDAsMSw3Ny44NSw1MC45MVpNNDYuNDQsODUuNDZhMTY5Ljg0LDE2OS44NCwwLDAsMSw1OC40NywxOC43MywyMjEuODEsMjIxLjgxLDAsMCwwLTIwLjg0LDI1LjMyLDEzOC41LDEzOC41LDAsMCwwLTQ3LjM2LTEyLjk0QTkxLjM2LDkxLjM2LDAsMCwxLDQ2LjQ0LDg1LjQ2Wm05LjMyLDk5LjQ0QTkxLjU0LDkxLjU0LDAsMCwxLDM2LDEyOGMwLTEuMTYsMC0yLjMuMDctMy40NWExMzAuNSwxMzAuNSwwLDAsMSw0My40NiwxMS42N0EyMTguMzcsMjE4LjM3LDAsMCwwLDU1Ljc2LDE4NC45Wm02LjEyLDdBMjEzLjMyLDIxMy4zMiwwLDAsMSwxODcuNzksNTguMTNhOTIuNzEsOTIuNzEsMCwwLDEsMjEuMjgsMjYuNDIsMTc5Ljg3LDE3OS44NywwLDAsMC0xMTkuNTMsMTI3QTkyLjY1LDkyLjY1LDAsMCwxLDYxLjg4LDE5MS45Wk0xMjgsMjIwYTkxLjYyLDkxLjYyLDAsMCwxLTMxLTUuMzdBMTcxLjgyLDE3MS44MiwwLDAsMSwyMTIuNTksOTEuODRhOTEuMjksOTEuMjksMCwwLDEsNy4yOCwzMS4yOEExNDAuNTQsMTQwLjU0LDAsMCwwLDEyOC42OSwyMjBabTkxLjkyLTg4LjQ1YTkyLjEzLDkyLjEzLDAsMCwxLTgyLjgxLDg4QTEzMi41OCwxMzIuNTgsMCwwLDEsMjE5LjkyLDEzMS41NVoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Yarn";
export { I as Yarn };
