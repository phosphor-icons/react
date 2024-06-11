/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/LineSegments";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDEuNDcsMzAuNTNhMzYsMzYsMCwwLDAtNTAuOTIsMGgwYTM2LjA2LDM2LjA2LDAsMCwwLTEuMiw0OS42NmwtMjMuODMsNDQuMjZhMzYuMDgsMzYuMDgsMCwwLDAtMjEsMy4wN2wtMTYtMTZhMzYsMzYsMCwwLDAtNTcuOTQtNDFoMGEzNiwzNiwwLDAsMC0xLjIsNDkuNjZMNDUuNSwxNjQuNDVhMzYsMzYsMCwwLDAtMzEsMTAuMWgwYTM2LDM2LDAsMSwwLDUyLjEyLDEuMjZsMjMuODMtNDQuMjZBMzUuMjEsMzUuMjEsMCwwLDAsOTYsMTMyYTM2LjA3LDM2LjA3LDAsMCwwLDE1LjUxLTMuNWwxNiwxNmEzNiwzNiwwLDEsMCw1OS4xNC04LjY4TDIxMC41LDkxLjU1QTM2LjMyLDM2LjMyLDAsMCwwLDIxNiw5MmEzNiwzNiwwLDAsMCwyNS40Ni02MS40NVptLTE1NCw1N2ExMiwxMiwwLDAsMSwxNywxN2gwYTEyLDEyLDAsMCwxLTE3LTE3Wm0tMzksMTIxYTEyLDEyLDAsMSwxLDAtMTdBMTIsMTIsMCwwLDEsNDguNDcsMjA4LjVabTEyMC00MGExMiwxMiwwLDEsMSwwLTE3QTEyLDEyLDAsMCwxLDE2OC40OSwxNjguNDlabTU2LTEwNGExMiwxMiwwLDEsMSwwLTE3QTEyLDEyLDAsMCwxLDIyNC41LDY0LjQ4WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik01NywxODNBMjQsMjQsMCwxLDEsMjMsMTgzLDI0LDI0LDAsMCwxLDU3LDE4M1pNNzksNzlBMjQsMjQsMCwxLDAsMTEzLDc5LDI0LDI0LDAsMCwwLDc5LDc5Wm02NCw2NEEyNCwyNCwwLDEsMCwxNzcsMTQzLDI0LDI0LDAsMCwwLDE0MywxNDNaTTIzMywzOUEyNCwyNCwwLDEsMCwyMzMsNzMsMjQsMjQsMCwwLDAsMjMzLDM5WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIzOC42NCwzMy4zNmEzMiwzMiwwLDAsMC00NS4yNiwwaDBhMzIsMzIsMCwwLDAsMCw0NS4yNmMuMjkuMjkuNi41Ny45Ljg1bC0yNi42Myw0OS40NmEzMi4xOSwzMi4xOSwwLDAsMC0yMy45LDMuNWwtMjAuMTgtMjAuMThhMzIsMzIsMCwwLDAtNTAuMi0zOC44OWgwYTMyLDMyLDAsMCwwLDAsNDUuMjZjLjI5LjI5LjU5LjU3Ljg5Ljg1TDQ3LjYzLDE2OC45NGEzMiwzMiwwLDAsMC0zMC4yNyw4LjQ0aDBhMzIsMzIsMCwxLDAsNDUuMjYsMGMtLjI5LS4yOS0uNi0uNTctLjktLjg1bDI2LjYzLTQ5LjQ2QTMyLjQsMzIuNCwwLDAsMCw5NiwxMjhhMzIsMzIsMCwwLDAsMTYuMjUtNC40MWwyMC4xOCwyMC4xOGEzMiwzMiwwLDEsMCw1MC4yLTYuMzhjLS4yOS0uMjktLjU5LS41Ny0uODktLjg1bDI2LjYzLTQ5LjQ2QTMyLjMzLDMyLjMzLDAsMCwwLDIxNiw4OGEzMiwzMiwwLDAsMCwyMi42My01NC42MlpNNTEuMywyMTEuMzNhMTYsMTYsMCwwLDEtMjIuNjMtMjIuNjRoMEExNiwxNiwwLDEsMSw1MS4zLDIxMS4zM1ptMzMuMzgtMTA0YTE2LDE2LDAsMCwxLDAtMjIuNjNoMGExNiwxNiwwLDEsMSwwLDIyLjYzWm04Ni42NCw2NGExNiwxNiwwLDAsMS0yMi42My0yMi42M2gwYTE2LDE2LDAsMCwxLDIyLjYzLDIyLjYzWm01Ni0xMDRBMTYsMTYsMCwxLDEsMjA0LjcsNDQuNjdoMGExNiwxNiwwLDAsMSwyMi42MywyMi42NFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzUuODEsNzUuNzlBMjcuOTEsMjcuOTEsMCwwLDEsMjE2LDg0YTI4LjQ5LDI4LjQ5LDAsMCwxLTUuNjctLjU4bC0zMC41Nyw1Ni43NywwLDBhMjgsMjgsMCwxLDEtNDQuNDMsNi40OWwtMjYuMDYtMjYuMDZBMjguMDcsMjguMDcsMCwwLDEsOTYsMTI0YTI4LjQxLDI4LjQxLDAsMCwxLTUuNjctLjU4TDU5Ljc2LDE4MC4xOGwwLDBhMjgsMjgsMCwxLDEtMzkuNiwwaDBhMjgsMjgsMCwwLDEsMjUuNDctNy42MWwzMC41Ny01Ni43NywwLDBhMjguMDUsMjguMDUsMCwwLDEsMC0zOS42MWgwYTI4LDI4LDAsMCwxLDQ0LjQzLDMzLjEybDI2LjA2LDI2LjA2YTI4LjEsMjguMSwwLDAsMSwxOS0yLjc3bDMwLjU3LTU2Ljc3LDAsMGEyOCwyOCwwLDAsMSwwLTM5LjZoMGEyOCwyOCwwLDAsMSwzOS42LDM5LjZaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzcuMjMsMzQuNzdhMzAuMDYsMzAuMDYsMCwwLDAtNDIuNDQsMGgwYTMwLjA2LDMwLjA2LDAsMCwwLDAsNDIuNDRjLjY1LjY0LDEuMzIsMS4yNCwyLDEuODFsLTI4LjE0LDUyLjI2QTMwLjExLDMwLjExLDAsMCwwLDE0My40NiwxMzVMMTIxLDExMi41NEEzMCwzMCwwLDAsMCw3NC43OCw3NC43OGgwYTMwLDMwLDAsMCwwLDAsNDIuNDMsMjYuMjgsMjYuMjgsMCwwLDAsMiwxLjgyTDQ4LjY0LDE3MS4yOWEzMCwzMCwwLDAsMC0yOS44Nyw3LjVoMGEzMCwzMCwwLDEsMCw0Mi40NCwwYy0uNjUtLjY0LTEuMzItMS4yNC0yLTEuODFsMjguMTQtNTIuMjZBMzAuMDcsMzAuMDcsMCwwLDAsMTEyLjU0LDEyMUwxMzUsMTQzLjQ2YTMwLDMwLDAsMSwwLDQ2LjI1LTQuNjcsMjYuMjgsMjYuMjgsMCwwLDAtMi0xLjgybDI4LjE0LTUyLjI2YTMwLDMwLDAsMCwwLDI5Ljg3LTQ5Ljk0Wm0tMTg0LjUxLDE3OGExOCwxOCwwLDEsMSwwLTI1LjQ2QTE4LDE4LDAsMCwxLDUyLjcyLDIxMi43NFptMzAuNTUtMTA0YTE4LDE4LDAsMSwxLDI1LjQ2LDBBMTgsMTgsMCwwLDEsODMuMjcsMTA4LjczWm04OS40Niw2NGExOCwxOCwwLDEsMSwwLTI1LjQ2QTE4LDE4LDAsMCwxLDE3Mi43MywxNzIuNzNabTU2LTEwNGExOCwxOCwwLDEsMSwwLTI1LjQ2QTE4LDE4LDAsMCwxLDIyOC43NCw2OC43MloiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzguNjQsMzMuMzZhMzIsMzIsMCwwLDAtNDUuMjYsMGgwYTMyLDMyLDAsMCwwLDAsNDUuMjZjLjI5LjI5LjYuNTcuOS44NWwtMjYuNjMsNDkuNDZhMzIuMTksMzIuMTksMCwwLDAtMjMuOSwzLjVsLTIwLjE4LTIwLjE4YTMyLDMyLDAsMCwwLTUwLjItMzguODloMGEzMiwzMiwwLDAsMCwwLDQ1LjI2Yy4yOS4yOS41OS41Ny44OS44NUw0Ny42MywxNjguOTRhMzIsMzIsMCwwLDAtMzAuMjcsOC40NGgwYTMyLDMyLDAsMSwwLDQ1LjI2LDBjLS4yOS0uMjktLjYtLjU3LS45LS44NWwyNi42My00OS40NkEzMi40LDMyLjQsMCwwLDAsOTYsMTI4YTMyLDMyLDAsMCwwLDE2LjI1LTQuNDFsMjAuMTgsMjAuMThhMzIsMzIsMCwxLDAsNTAuMi02LjM4Yy0uMjktLjI5LS41OS0uNTctLjg5LS44NWwyNi42My00OS40NkEzMi4zMywzMi4zMywwLDAsMCwyMTYsODhhMzIsMzIsMCwwLDAsMjIuNjMtNTQuNjJaTTUxLjMsMjExLjMzYTE2LDE2LDAsMCwxLTIyLjYzLTIyLjY0aDBBMTYsMTYsMCwxLDEsNTEuMywyMTEuMzNabTMzLjM4LTEwNGExNiwxNiwwLDAsMSwwLTIyLjYzaDBhMTYsMTYsMCwxLDEsMCwyMi42M1ptODYuNjQsNjRhMTYsMTYsMCwwLDEtMjIuNjMtMjIuNjNoMGExNiwxNiwwLDAsMSwyMi42MywyMi42M1ptNTYtMTA0QTE2LDE2LDAsMSwxLDIwNC43LDQ0LjY3aDBhMTYsMTYsMCwwLDEsMjIuNjMsMjIuNjRaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzUuODEsMzYuMTlhMjgsMjgsMCwwLDAtMzkuNiwwaDBhMjgsMjgsMCwwLDAsMCwzOS42LDI2LjYyLDI2LjYyLDAsMCwwLDMuMTQsMi43MWwtMjkuNzMsNTUuMjFhMjguMDgsMjguMDgsMCwwLDAtMjYuMzgsMy44N2wtMjQuODItMjQuODJBMjgsMjgsMCwwLDAsNzYuMiw3Ni4xOWgwYTI4LDI4LDAsMCwwLDMuMTQsNDIuMzFMNDkuNiwxNzMuNzJhMjgsMjgsMCwwLDAtMjkuNDEsNi40OWgwYTI4LDI4LDAsMSwwLDM5LjYsMCwyOC42MywyOC42MywwLDAsMC0zLjE0LTIuNzFsMjkuNzMtNTUuMjFhMjgsMjgsMCwwLDAsMjYuMzgtMy44N2wyNC44MiwyNC44MmEyOCwyOCwwLDEsMCwzOS4wOS01Ljc0TDIwNi40LDgyLjI4YTI4LDI4LDAsMCwwLDI5LjQxLTQ2LjA5Wm0tMTgxLjY4LDE3OGEyMCwyMCwwLDEsMSwwLTI4LjI4QTIwLDIwLDAsMCwxLDU0LjEzLDIxNC4xNVptMjcuNzItMTA0YTIwLDIwLDAsMSwxLDI4LjI5LDBoMEEyMCwyMCwwLDAsMSw4MS44NSwxMTAuMTRabTkyLjMsNjRhMjAsMjAsMCwxLDEsMC0yOC4yOUEyMCwyMCwwLDAsMSwxNzQuMTUsMTc0LjE1Wm01Ni0xMDRhMjAsMjAsMCwxLDEsMC0yOC4yOUEyMCwyMCwwLDAsMSwyMzAuMTUsNzAuMTRaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "LineSegments";
export { I as LineSegments };
