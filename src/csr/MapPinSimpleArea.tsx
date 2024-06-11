/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/MapPinSimpleArea";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjAsMTAzLjJWMTc2YTgsOCwwLDAsMCwxNiwwVjEwMy4yYTQwLDQwLDAsMSwwLTE2LDBaTTEyOCw0MGEyNCwyNCwwLDEsMS0yNCwyNEEyNCwyNCwwLDAsMSwxMjgsNDBaTTI0MCwxNzZjMCwzMS4xOC01Ny43MSw0OC0xMTIsNDhTMTYsMjA3LjE4LDE2LDE3NmMwLTcuNzQsMy44MS0xOS4xMywyMi0yOS40MSwxMi4yNi02Ljk0LDI5LjEyLTEyLjI3LDQ4Ljc3LTE1LjQyQTgsOCwwLDEsMSw4OS4yNywxNDdjLTE3LjU0LDIuODItMzMsNy42My00My40MiwxMy41NUMzNy4wNSwxNjUuNSwzMiwxNzEuMTQsMzIsMTc2YzAsMTMuMzYsMzYuNTIsMzIsOTYsMzJzOTYtMTguNjQsOTYtMzJjMC00Ljg2LTUuMDUtMTAuNS0xMy44NS0xNS40OS0xMC40Ni01LjkyLTI1Ljg4LTEwLjczLTQzLjQyLTEzLjU1YTgsOCwwLDEsMSwyLjU0LTE1Ljc5YzE5LjY1LDMuMTUsMzYuNTEsOC40OCw0OC43NywxNS40MkMyMzYuMTksMTU2Ljg3LDI0MCwxNjguMjYsMjQwLDE3NloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjQsOTkuNzdWMTc2YTQsNCwwLDAsMCw4LDBWOTkuNzdhMzYsMzYsMCwxLDAtOCwwWk0xMjgsMzZhMjgsMjgsMCwxLDEtMjgsMjhBMjgsMjgsMCwwLDEsMTI4LDM2Wk0yMzYsMTc2YzAsMTIuNDYtMTEuNzMsMjMuODMtMzMsMzItMjAuMDksNy43My00Ni43MiwxMi03NSwxMnMtNTQuODktNC4yNS03NS0xMmMtMjEuMjktOC4xOS0zMy0xOS41Ni0zMy0zMiwwLTE4LjU1LDI1LjgxLTM0LjIyLDY3LjM3LTQwLjg4QTQsNCwwLDEsMSw4OC42MywxNDNDNTIuOTMsMTQ4Ljc0LDI4LDE2Mi4zLDI4LDE3NmMwLDE3LjM5LDQwLjE4LDM2LDEwMCwzNnMxMDAtMTguNjEsMTAwLTM2YzAtMTMuNy0yNC45My0yNy4yNi02MC42My0zM2E0LDQsMCwxLDEsMS4yNi03Ljg5QzIxMC4xOSwxNDEuNzgsMjM2LDE1Ny40NSwyMzYsMTc2WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjIsMTAxLjUyVjE3NmE2LDYsMCwwLDAsMTIsMFYxMDEuNTJhMzgsMzgsMCwxLDAtMTIsMFpNMTI4LDM4YTI2LDI2LDAsMSwxLTI2LDI2QTI2LDI2LDAsMCwxLDEyOCwzOFpNMjM4LDE3NmMwLDEzLjM0LTEyLjE4LDI1LjM4LTM0LjMxLDMzLjg4QzE4My4zOCwyMTcuNywxNTYuNSwyMjIsMTI4LDIyMnMtNTUuMzgtNC4zLTc1LjY5LTEyLjEyQzMwLjE4LDIwMS4zOCwxOCwxODkuMzQsMTgsMTc2YzAtMTkuNiwyNi40Ni0zNiw2OS4wNS00Mi44NkE2LDYsMCwwLDEsODksMTQ1Yy0xOCwyLjg5LTMzLjI3LDcuNjYtNDQuMDksMTMuNzhDMzUuMjgsMTY0LjIsMzAsMTcwLjMyLDMwLDE3NmMwLDE2LjA4LDQwLjI1LDM0LDk4LDM0czk4LTE3LjkyLDk4LTM0YzAtNS42OC01LjI4LTExLjgtMTQuODYtMTcuMjMtMTAuODItNi4xMi0yNi4wNy0xMC44OS00NC4wOS0xMy43OGE2LDYsMCwwLDEsMS45LTExLjg1QzIxMS41NCwxNDAsMjM4LDE1Ni40LDIzOCwxNzZaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTYsMTA2LjMyVjE3NmExMiwxMiwwLDAsMCwyNCwwVjEwNi4zMmE0NCw0NCwwLDEsMC0yNCwwWk0xMjgsNDRhMjAsMjAsMCwxLDEtMjAsMjBBMjAsMjAsMCwwLDEsMTI4LDQ0Wk0yNDQsMTc2YzAsMjEuNTktMjMuOSwzNC0zOC4xNSwzOS40OEMxODQuODYsMjIzLjU2LDE1Ny4yMiwyMjgsMTI4LDIyOGMtNTcuNjQsMC0xMTYtMTcuODYtMTE2LTUyLDAtMjIuMjMsMjYuMTItNDAuMiw2OS44OC00OC4wNmExMiwxMiwwLDEsMSw0LjI0LDIzLjYyQzUxLjkzLDE1Ny43MSwzNiwxNjkuNzgsMzYsMTc2YzAsNCw3LjEyLDExLjA3LDIyLjc3LDE3LjA4LDE4LjMsNyw0Mi44OSwxMC45Miw2OS4yMywxMC45MnM1MC45My0zLjg4LDY5LjIzLTEwLjkyQzIxMi44NywxODcuMDcsMjIwLDE4MCwyMjAsMTc2YzAtNi4yMi0xNS45My0xOC4yOS01MC4xMi0yNC40NGExMiwxMiwwLDEsMSw0LjI0LTIzLjYyQzIxNy44OCwxMzUuOCwyNDQsMTUzLjc3LDI0NCwxNzZaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04OCw2NGE0MCw0MCwwLDEsMSw0OCwzOS4xOVYxNzZhOCw4LDAsMCwxLTE2LDBWMTAzLjE5QTQwLjA1LDQwLjA1LDAsMCwxLDg4LDY0Wm0xMzAsODIuNTljLTEyLjI2LTYuOTQtMjkuMTItMTIuMjctNDguNzctMTUuNDJBOCw4LDAsMSwwLDE2Ni43MywxNDdjMTcuNTQsMi44MiwzMyw3LjYzLDQzLjQyLDEzLjU1QzIxOSwxNjUuNSwyMjQsMTcxLjE0LDIyNCwxNzZjMCwxMy4zNi0zNi41MiwzMi05NiwzMnMtOTYtMTguNjQtOTYtMzJjMC00Ljg2LDUtMTAuNSwxMy44NS0xNS40OSwxMC40Ni01LjkyLDI1Ljg4LTEwLjczLDQzLjQyLTEzLjU1YTgsOCwwLDEsMC0yLjU0LTE1Ljc5Yy0xOS42NSwzLjE1LTM2LjUxLDguNDgtNDguNzcsMTUuNDJDMTkuODEsMTU2Ljg3LDE2LDE2OC4yNiwxNiwxNzZjMCwzMS4xOCw1Ny43MSw0OCwxMTIsNDhzMTEyLTE2LjgyLDExMi00OEMyNDAsMTY4LjI2LDIzNi4xOSwxNTYuODcsMjE4LDE0Ni41OVoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsNjRhMzIsMzIsMCwxLDEtMzItMzJBMzIsMzIsMCwwLDEsMTYwLDY0WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTEyMCwxMDMuMlYxNzZhOCw4LDAsMCwwLDE2LDBWMTAzLjJhNDAsNDAsMCwxLDAtMTYsMFpNMTI4LDQwYTI0LDI0LDAsMSwxLTI0LDI0QTI0LDI0LDAsMCwxLDEyOCw0MFpNMjQwLDE3NmMwLDMxLjE4LTU3LjcxLDQ4LTExMiw0OFMxNiwyMDcuMTgsMTYsMTc2YzAtNy43NCwzLjgxLTE5LjEzLDIyLTI5LjQxLDEyLjI2LTYuOTQsMjkuMTItMTIuMjcsNDguNzctMTUuNDJBOCw4LDAsMSwxLDg5LjI3LDE0N2MtMTcuNTQsMi44Mi0zMyw3LjYzLTQzLjQyLDEzLjU1QzM3LjA1LDE2NS41LDMyLDE3MS4xNCwzMiwxNzZjMCwxMy4zNiwzNi41MiwzMiw5NiwzMnM5Ni0xOC42NCw5Ni0zMmMwLTQuODYtNS4wNS0xMC41LTEzLjg1LTE1LjQ5LTEwLjQ2LTUuOTItMjUuODgtMTAuNzMtNDMuNDItMTMuNTVhOCw4LDAsMSwxLDIuNTQtMTUuNzljMTkuNjUsMy4xNSwzNi41MSw4LjQ4LDQ4Ljc3LDE1LjQyQzIzNi4xOSwxNTYuODcsMjQwLDE2OC4yNiwyNDAsMTc2WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "MapPinSimpleArea";
export { I as MapPinSimpleArea };
