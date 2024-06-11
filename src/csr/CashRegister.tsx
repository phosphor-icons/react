/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/CashRegister";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzkuNzYsMTU4LjA2LDIxNy4yOCw2OC4xMkExNiwxNiwwLDAsMCwyMDEuNzUsNTZIMTM2VjQwYTE2LDE2LDAsMCwwLTE2LTE2SDgwQTE2LDE2LDAsMCwwLDY0LDQwVjU2SDU0LjI1QTE2LDE2LDAsMCwwLDM4LjcyLDY4LjEyTDE2LjI0LDE1OC4wNkE3LjkzLDcuOTMsMCwwLDAsMTYsMTYwdjMyYTE2LDE2LDAsMCwwLDE2LDE2SDIyNGExNiwxNiwwLDAsMCwxNi0xNlYxNjBBNy45Myw3LjkzLDAsMCwwLDIzOS43NiwxNTguMDZaTTgwLDQwaDQwVjU2SDgwWk01NC4yNSw3MmgxNDcuNWwyMCw4MEgzNC4yNVpNMzIsMTkyVjE2OEgyMjR2MjRaTTY0LDk2YTgsOCwwLDAsMSw4LThIODhhOCw4LDAsMCwxLDAsMTZINzJBOCw4LDAsMCwxLDY0LDk2Wm00OCwwYTgsOCwwLDAsMSw4LThoMTZhOCw4LDAsMCwxLDAsMTZIMTIwQTgsOCwwLDAsMSwxMTIsOTZabTQ4LDBhOCw4LDAsMCwxLDgtOGgxNmE4LDgsMCwwLDEsMCwxNkgxNjhBOCw4LDAsMCwxLDE2MCw5NlpNNjQsMTI4YTgsOCwwLDAsMSw4LThIODhhOCw4LDAsMCwxLDAsMTZINzJBOCw4LDAsMCwxLDY0LDEyOFptNDgsMGE4LDgsMCwwLDEsOC04aDE2YTgsOCwwLDAsMSwwLDE2SDEyMEE4LDgsMCwwLDEsMTEyLDEyOFptNDgsMGE4LDgsMCwwLDEsOC04aDE2YTgsOCwwLDAsMSwwLDE2SDE2OEE4LDgsMCwwLDEsMTYwLDEyOFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzUuODgsMTU5LDIxMy40LDY5LjA5QTEyLDEyLDAsMCwwLDIwMS43NSw2MEgxMzJWNDBhMTIsMTIsMCwwLDAtMTItMTJIODBBMTIsMTIsMCwwLDAsNjgsNDBWNjBINTQuMjVBMTIsMTIsMCwwLDAsNDIuNiw2OS4wOUwyMC4xMiwxNTlhNCw0LDAsMCwwLS4xMiwxdjMyYTEyLDEyLDAsMCwwLDEyLDEySDIyNGExMiwxMiwwLDAsMCwxMi0xMlYxNjBBNCw0LDAsMCwwLDIzNS44OCwxNTlaTTc2LDQwYTQsNCwwLDAsMSw0LTRoNDBhNCw0LDAsMCwxLDQsNFY2MEg3NlpNNTAuMzcsNzFhNCw0LDAsMCwxLDMuODgtM2gxNDcuNWE0LDQsMCwwLDEsMy44OCwzbDIxLjI1LDg1SDI5LjEyWk0yMjQsMTk2SDMyYTQsNCwwLDAsMS00LTRWMTY0SDIyOHYyOEE0LDQsMCwwLDEsMjI0LDE5NlpNNjgsOTZhNCw0LDAsMCwxLDQtNEg4OGE0LDQsMCwwLDEsMCw4SDcyQTQsNCwwLDAsMSw2OCw5NlptNDgsMGE0LDQsMCwwLDEsNC00aDE2YTQsNCwwLDAsMSwwLDhIMTIwQTQsNCwwLDAsMSwxMTYsOTZabTQ4LDBhNCw0LDAsMCwxLDQtNGgxNmE0LDQsMCwwLDEsMCw4SDE2OEE0LDQsMCwwLDEsMTY0LDk2Wk02OCwxMjhhNCw0LDAsMCwxLDQtNEg4OGE0LDQsMCwwLDEsMCw4SDcyQTQsNCwwLDAsMSw2OCwxMjhabTQ4LDBhNCw0LDAsMCwxLDQtNGgxNmE0LDQsMCwwLDEsMCw4SDEyMEE0LDQsMCwwLDEsMTE2LDEyOFptNDgsMGE0LDQsMCwwLDEsNC00aDE2YTQsNCwwLDAsMSwwLDhIMTY4QTQsNCwwLDAsMSwxNjQsMTI4WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzcuODIsMTU4LjU0LDIxNS4zNCw2OC42MUExNCwxNCwwLDAsMCwyMDEuNzUsNThIMTM0VjQwYTE0LDE0LDAsMCwwLTE0LTE0SDgwQTE0LDE0LDAsMCwwLDY2LDQwVjU4SDU0LjI1QTE0LDE0LDAsMCwwLDQwLjY2LDY4LjZMMTguMTgsMTU4LjU0QTYsNiwwLDAsMCwxOCwxNjB2MzJhMTQsMTQsMCwwLDAsMTQsMTRIMjI0YTE0LDE0LDAsMCwwLDE0LTE0VjE2MEE2LDYsMCwwLDAsMjM3LjgyLDE1OC41NFpNNzgsNDBhMiwyLDAsMCwxLDItMmg0MGEyLDIsMCwwLDEsMiwyVjU4SDc4Wk01Mi4zMSw3MS41MUEyLDIsMCwwLDEsNTQuMjUsNzBoMTQ3LjVhMiwyLDAsMCwxLDEuOTQsMS41MUwyMjQuMzIsMTU0SDMxLjY4Wk0yMjQsMTk0SDMyYTIsMiwwLDAsMS0yLTJWMTY2SDIyNnYyNkEyLDIsMCwwLDEsMjI0LDE5NFpNNjYsOTZhNiw2LDAsMCwxLDYtNkg4OGE2LDYsMCwwLDEsMCwxMkg3MkE2LDYsMCwwLDEsNjYsOTZabTQ4LDBhNiw2LDAsMCwxLDYtNmgxNmE2LDYsMCwwLDEsMCwxMkgxMjBBNiw2LDAsMCwxLDExNCw5NlptNDgsMGE2LDYsMCwwLDEsNi02aDE2YTYsNiwwLDAsMSwwLDEySDE2OEE2LDYsMCwwLDEsMTYyLDk2Wk02NiwxMjhhNiw2LDAsMCwxLDYtNkg4OGE2LDYsMCwwLDEsMCwxMkg3MkE2LDYsMCwwLDEsNjYsMTI4Wm00OCwwYTYsNiwwLDAsMSw2LTZoMTZhNiw2LDAsMCwxLDAsMTJIMTIwQTYsNiwwLDAsMSwxMTQsMTI4Wm00OCwwYTYsNiwwLDAsMSw2LTZoMTZhNiw2LDAsMCwxLDAsMTJIMTY4QTYsNiwwLDAsMSwxNjIsMTI4WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDMuNjEsMTU3LDIyMS4xNyw3MWEyMCwyMCwwLDAsMC0xOS4zNS0xNUgxNDBWNDBhMjAsMjAsMCwwLDAtMjAtMjBIODBBMjAsMjAsMCwwLDAsNjAsNDBWNTZINTQuMThBMjAsMjAsMCwwLDAsMzQuODMsNzFMMTIuMzksMTU3YTExLjk0LDExLjk0LDAsMCwwLS4zOSwzdjMyYTIwLDIwLDAsMCwwLDIwLDIwSDIyNGEyMCwyMCwwLDAsMCwyMC0yMFYxNjBBMTEuOTQsMTEuOTQsMCwwLDAsMjQzLjYxLDE1N1pNODQsNDRoMzJWNTZIODRaTTU3LjI3LDgwSDE5OC43M2wxNy43NCw2OEgzOS41M1pNMzYsMTg4VjE3MkgyMjB2MTZabTI4LTcyYTEyLDEyLDAsMCwxLDEyLTEyaDhhMTIsMTIsMCwwLDEsMCwyNEg3NkExMiwxMiwwLDAsMSw2NCwxMTZabTQ4LDBhMTIsMTIsMCwwLDEsMTItMTJoOGExMiwxMiwwLDAsMSwwLDI0aC04QTEyLDEyLDAsMCwxLDExMiwxMTZabTQ4LDBhMTIsMTIsMCwwLDEsMTItMTJoOGExMiwxMiwwLDAsMSwwLDI0aC04QTEyLDEyLDAsMCwxLDE2MCwxMTZaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzkuNzYsMTU4LjA2LDIxNy4yOCw2OC4xMkExNiwxNiwwLDAsMCwyMDEuNzUsNTZIMTM2VjQwYTE2LDE2LDAsMCwwLTE2LTE2SDgwQTE2LDE2LDAsMCwwLDY0LDQwVjU2SDU0LjI1QTE2LDE2LDAsMCwwLDM4LjcyLDY4LjEyTDE2LjI0LDE1OC4wNkE3LjkzLDcuOTMsMCwwLDAsMTYsMTYwdjMyYTE2LDE2LDAsMCwwLDE2LDE2SDIyNGExNiwxNiwwLDAsMCwxNi0xNlYxNjBBNy45Myw3LjkzLDAsMCwwLDIzOS43NiwxNTguMDZaTTE2OCw4OGgxNmE4LDgsMCwwLDEsMCwxNkgxNjhhOCw4LDAsMCwxLDAtMTZabTAsMzJoMTZhOCw4LDAsMCwxLDAsMTZIMTY4YTgsOCwwLDAsMSwwLTE2Wk0xMzYsODhhOCw4LDAsMCwxLDAsMTZIMTIwYTgsOCwwLDAsMSwwLTE2Wm04LDQwYTgsOCwwLDAsMS04LDhIMTIwYTgsOCwwLDAsMSwwLTE2aDE2QTgsOCwwLDAsMSwxNDQsMTI4Wk04MCw0MGg0MFY1Nkg4MFpNNzIsODhIODhhOCw4LDAsMCwxLDAsMTZINzJhOCw4LDAsMCwxLDAtMTZabTAsMzJIODhhOCw4LDAsMCwxLDAsMTZINzJhOCw4LDAsMCwxLDAtMTZabTE1Miw3MkgzMlYxNjhIMjI0WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTYwSDI0TDQ2LjQ5LDcwLjA2QTgsOCwwLDAsMSw1NC4yNSw2NGgxNDcuNWE4LDgsMCwwLDEsNy43Niw2LjA2WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIzOS43NiwxNTguMDYsMjE3LjI4LDY4LjEyQTE2LDE2LDAsMCwwLDIwMS43NSw1NkgxMzZWNDBhMTYsMTYsMCwwLDAtMTYtMTZIODBBMTYsMTYsMCwwLDAsNjQsNDBWNTZINTQuMjVBMTYsMTYsMCwwLDAsMzguNzIsNjguMTJMMTYuMjQsMTU4LjA2QTcuOTMsNy45MywwLDAsMCwxNiwxNjB2MzJhMTYsMTYsMCwwLDAsMTYsMTZIMjI0YTE2LDE2LDAsMCwwLDE2LTE2VjE2MEE3LjkzLDcuOTMsMCwwLDAsMjM5Ljc2LDE1OC4wNlpNODAsNDBoNDBWNTZIODBaTTU0LjI1LDcyaDE0Ny41bDIwLDgwSDM0LjI1Wk0zMiwxOTJWMTY4SDIyNHYyNFpNNjQsOTZhOCw4LDAsMCwxLDgtOEg4OGE4LDgsMCwwLDEsMCwxNkg3MkE4LDgsMCwwLDEsNjQsOTZabTQ4LDBhOCw4LDAsMCwxLDgtOGgxNmE4LDgsMCwwLDEsMCwxNkgxMjBBOCw4LDAsMCwxLDExMiw5NlptNDgsMGE4LDgsMCwwLDEsOC04aDE2YTgsOCwwLDAsMSwwLDE2SDE2OEE4LDgsMCwwLDEsMTYwLDk2Wk02NCwxMjhhOCw4LDAsMCwxLDgtOEg4OGE4LDgsMCwwLDEsMCwxNkg3MkE4LDgsMCwwLDEsNjQsMTI4Wm00OCwwYTgsOCwwLDAsMSw4LThoMTZhOCw4LDAsMCwxLDAsMTZIMTIwQTgsOCwwLDAsMSwxMTIsMTI4Wm00OCwwYTgsOCwwLDAsMSw4LThoMTZhOCw4LDAsMCwxLDAsMTZIMTY4QTgsOCwwLDAsMSwxNjAsMTI4WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "CashRegister";
export { I as CashRegister };
