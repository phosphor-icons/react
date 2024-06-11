/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/HandPointing";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTYsODRhMzEuOTQsMzEuOTQsMCwwLDAtMTEuMjIsMkEzMiwzMiwwLDAsMCwxNDgsNjlWNDRhMzIsMzIsMCwwLDAtNjQsMHY2Ni44M0EzMiwzMiwwLDAsMCwzMi4yNSwxNDhsNC42OCw4LjI0QzcxLjExLDIxNi40OCw4Ni43MiwyNDQsMTM2LDI0NGE5Mi4xLDkyLjEsMCwwLDAsOTItOTJWMTE2QTMyLDMyLDAsMCwwLDE5Niw4NFptOCw2OGE2OC4wOCw2OC4wOCwwLDAsMS02OCw2OGMtMzQsMC00My40OS0xNC40NS03OC4yLTc1LjY1bC00LjY5LTguMjhhLjE2LjE2LDAsMCwxLDAtLjA3LDgsOCwwLDAsMSwxMy44Ni04Yy4wNi4xMi4xMy4yMy4yLjM1bDE4LjY4LDMwQTEyLDEyLDAsMCwwLDEwOCwxNTJWNDRhOCw4LDAsMCwxLDE2LDB2NjhhMTIsMTIsMCwwLDAsMjQsMFYxMDBhOCw4LDAsMCwxLDE2LDB2MjBhMTIsMTIsMCwwLDAsMjQsMHYtNGE4LDgsMCwwLDEsMTYsMFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTE2djM2YTgwLDgwLDAsMCwxLTgwLDgwYy00NC4xOCwwLTU1LjgxLTI0LTkzLjMyLTkwYTIwLDIwLDAsMCwxLDM0LjY0LTIwTDk2LDE1MlY0NGEyMCwyMCwwLDAsMSw0MCwwdjU2YTIwLDIwLDAsMCwxLDQwLDB2MTZhMjAsMjAsMCwwLDEsNDAsMFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xOTYsODhhMjcuODYsMjcuODYsMCwwLDAtMTMuMzUsMy4zOUEyOCwyOCwwLDAsMCwxNDQsNzQuN1Y0NGEyOCwyOCwwLDAsMC01NiwwdjgwbC0zLjgyLTYuMTNBMjgsMjgsMCwwLDAsMzUuNzMsMTQ2bDQuNjcsOC4yM0M3NC44MSwyMTQuODksODkuMDUsMjQwLDEzNiwyNDBhODguMSw4OC4xLDAsMCwwLDg4LTg4VjExNkEyOCwyOCwwLDAsMCwxOTYsODhabTEyLDY0YTcyLjA4LDcyLjA4LDAsMCwxLTcyLDcyYy0zNy42MywwLTQ3Ljg0LTE4LTgxLjY4LTc3LjY4bC00LjY5LTguMjcsMC0uMDVBMTIsMTIsMCwwLDEsNTQsMTIxLjYxYTExLjg4LDExLjg4LDAsMCwxLDYtMS42LDEyLDEyLDAsMCwxLDEwLjQxLDYsMS43NiwxLjc2LDAsMCwwLC4xNC4yM2wxOC42NywzMEE4LDgsMCwwLDAsMTA0LDE1MlY0NGExMiwxMiwwLDAsMSwyNCwwdjY4YTgsOCwwLDAsMCwxNiwwVjEwMGExMiwxMiwwLDAsMSwyNCwwdjIwYTgsOCwwLDAsMCwxNiwwdi00YTEyLDEyLDAsMCwxLDI0LDBaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTA0djUwLjkzYzAsNDYuMi0zNi44NSw4NC41NS04Myw4NS4wNkE4My43MSw4My43MSwwLDAsMSw4MC42LDIxNS40QzU4Ljc5LDE5Mi4zMywzNC4xNSwxMzYsMzQuMTUsMTM2YTE2LDE2LDAsMCwxLDYuNTMtMjIuMjNjNy42Ni00LDE3LjEtLjg0LDIxLjQsNi42MmwyMSwzNi40NGE2LjA5LDYuMDksMCwwLDAsNiwzLjA5bC4xMiwwQTguMTksOC4xOSwwLDAsMCw5NiwxNTEuNzRWMzJhMTYsMTYsMCwwLDEsMTYuNzctMTZjOC42MS40LDE1LjIzLDcuODIsMTUuMjMsMTYuNDNWMTA0YTgsOCwwLDAsMCw4LjUzLDgsOC4xNyw4LjE3LDAsMCwwLDcuNDctOC4yNVY4OGExNiwxNiwwLDAsMSwxNi43Ny0xNmM4LjYxLjQsMTUuMjMsNy44MiwxNS4yMywxNi40M1YxMTJhOCw4LDAsMCwwLDguNTMsOCw4LjE3LDguMTcsMCwwLDAsNy40Ny04LjI1di03LjI4YzAtOC42MSw2LjYyLTE2LDE1LjIzLTE2LjQzQTE2LDE2LDAsMCwxLDIyNCwxMDRaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTYsOTBhMjUuODcsMjUuODcsMCwwLDAtMTQuNTksNC40OUEyNiwyNiwwLDAsMCwxNDIsNzguMVY0NGEyNiwyNiwwLDAsMC01Miwwdjg3bC03LjUzLTEyLjFhMjYsMjYsMCwwLDAtNDUsMjYuMDdsNC42Nyw4LjI1YzM0LDYwLDQ4LjA3LDg0Ljc3LDkzLjg2LDg0Ljc3YTg2LjEsODYuMSwwLDAsMCw4Ni04NlYxMTZBMjYsMjYsMCwwLDAsMTk2LDkwWm0xNCw2MmE3NC4wOSw3NC4wOSwwLDAsMS03NCw3NGMtMzguOCwwLTUwLTE5LjgzLTgzLjQyLTc4LjY5TDQ3Ljg5LDEzOWwwLDBBMTQsMTQsMCwwLDEsNTMsMTE5Ljg4LDEzLjg3LDEzLjg3LDAsMCwxLDYwLDExOGExNCwxNCwwLDAsMSwxMi4xNSw3bC4xLjE3LDE4LjY4LDMwQTYsNiwwLDAsMCwxMDIsMTUyVjQ0YTE0LDE0LDAsMCwxLDI4LDB2NjhhNiw2LDAsMCwwLDEyLDBWMTAwYTE0LDE0LDAsMCwxLDI4LDB2MjBhNiw2LDAsMCwwLDEyLDB2LTRhMTQsMTQsMCwwLDEsMjgsMFoiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTYsODhhMjcuODYsMjcuODYsMCwwLDAtMTMuMzUsMy4zOUEyOCwyOCwwLDAsMCwxNDQsNzQuN1Y0NGEyOCwyOCwwLDAsMC01NiwwdjgwbC0zLjgyLTYuMTNBMjgsMjgsMCwwLDAsMzUuNzMsMTQ2bDQuNjcsOC4yM0M3NC44MSwyMTQuODksODkuMDUsMjQwLDEzNiwyNDBhODguMSw4OC4xLDAsMCwwLDg4LTg4VjExNkEyOCwyOCwwLDAsMCwxOTYsODhabTEyLDY0YTcyLjA4LDcyLjA4LDAsMCwxLTcyLDcyYy0zNy42MywwLTQ3Ljg0LTE4LTgxLjY4LTc3LjY4bC00LjY5LTguMjcsMC0uMDVBMTIsMTIsMCwwLDEsNTQsMTIxLjYxYTExLjg4LDExLjg4LDAsMCwxLDYtMS42LDEyLDEyLDAsMCwxLDEwLjQxLDYsMS43NiwxLjc2LDAsMCwwLC4xNC4yM2wxOC42NywzMEE4LDgsMCwwLDAsMTA0LDE1MlY0NGExMiwxMiwwLDAsMSwyNCwwdjY4YTgsOCwwLDAsMCwxNiwwVjEwMGExMiwxMiwwLDAsMSwyNCwwdjIwYTgsOCwwLDAsMCwxNiwwdi00YTEyLDEyLDAsMCwxLDI0LDBaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTYsOTJhMjMuODgsMjMuODgsMCwwLDAtMTYuMDcsNi4xOUEyNCwyNCwwLDAsMCwxNDAsODIuMTNWNDRhMjQsMjQsMCwwLDAtNDgsMHY5NEw4MC43NSwxMTkuOTRBMjQsMjQsMCwwLDAsMzkuMiwxNDRsNC42OCw4LjI1QzYxLjIxLDE4Mi44LDcyLjY2LDIwMyw4NS42NiwyMTYuMzMsOTkuMjgsMjMwLjMsMTEzLjg2LDIzNiwxMzYsMjM2YTg0LjA5LDg0LjA5LDAsMCwwLDg0LTg0VjExNkEyNCwyNCwwLDAsMCwxOTYsOTJabTE2LDYwYTc2LjA5LDc2LjA5LDAsMCwxLTc2LDc2Yy00MCwwLTUxLjM1LTIwLjA4LTg1LjE2LTc5LjcxTDQ2LjE1LDE0MHYwYTE2LDE2LDAsMCwxLDI3LjcxLTE2LC43NS43NSwwLDAsMSwuMDcuMTJsMTguNjgsMzBBNCw0LDAsMCwwLDEwMCwxNTJWNDRhMTYsMTYsMCwwLDEsMzIsMHY2OGE0LDQsMCwwLDAsOCwwVjEwMGExNiwxNiwwLDAsMSwzMiwwdjIwYTQsNCwwLDAsMCw4LDB2LTRhMTYsMTYsMCwwLDEsMzIsMFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "HandPointing";
export { I as HandPointing };
