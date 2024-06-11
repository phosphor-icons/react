/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Ambulance";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04MCwxMjBhOCw4LDAsMCwxLDgtOGgxNlY5NmE4LDgsMCwwLDEsMTYsMHYxNmgxNmE4LDgsMCwwLDEsMCwxNkgxMjB2MTZhOCw4LDAsMCwxLTE2LDBWMTI4SDg4QTgsOCwwLDAsMSw4MCwxMjBabTE3NiwwdjY0YTE2LDE2LDAsMCwxLTE2LDE2SDIyM2EzMiwzMiwwLDAsMS02MiwwSDExMWEzMiwzMiwwLDAsMS02MiwwSDMyYTE2LDE2LDAsMCwxLTE2LTE2VjcyQTE2LDE2LDAsMCwxLDMyLDU2SDE4NGE4LDgsMCwwLDEsOCw4djhoMzQuNThhMTUuOTMsMTUuOTMsMCwwLDEsMTQuODYsMTAuMDZsMTQsMzVBNy45Miw3LjkyLDAsMCwxLDI1NiwxMjBaTTE5Miw4OHYyNGg0NC4xOGwtOS42LTI0Wk0zMiwxODRINDlhMzIsMzIsMCwwLDEsNjIsMGg1MGEzMi4xMSwzMi4xMSwwLDAsMSwxNS0xOS42OVY3MkgzMlptNjQsOGExNiwxNiwwLDEsMC0xNiwxNkExNiwxNiwwLDAsMCw5NiwxOTJabTExMiwwYTE2LDE2LDAsMSwwLTE2LDE2QTE2LDE2LDAsMCwwLDIwOCwxOTJabTMyLThWMTI4SDE5MnYzMmEzMi4wNiwzMi4wNiwwLDAsMSwzMSwyNFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04NCwxMjBhNCw0LDAsMCwxLDQtNGgyMFY5NmE0LDQsMCwwLDEsOCwwdjIwaDIwYTQsNCwwLDAsMSwwLDhIMTE2djIwYTQsNCwwLDAsMS04LDBWMTI0SDg4QTQsNCwwLDAsMSw4NCwxMjBabTE2OCwwdjY0YTEyLDEyLDAsMCwxLTEyLDEySDIxOS43MWEyOCwyOCwwLDAsMS01NS40MiwwSDEwNy43MWEyOCwyOCwwLDAsMS01NS40MiwwSDMyYTEyLDEyLDAsMCwxLTEyLTEyVjcyQTEyLDEyLDAsMCwxLDMyLDYwSDE4NGE0LDQsMCwwLDEsNCw0Vjc2aDM4LjU4YTEyLDEyLDAsMCwxLDExLjE1LDcuNTRsMTQsMzVBNCw0LDAsMCwxLDI1MiwxMjBaTTE4OCw4NHYzMmg1NC4wOUwyMzAuMyw4Ni41MUE0LDQsMCwwLDAsMjI2LjU4LDg0Wk0zMiwxODhINTIuMjlhMjgsMjgsMCwwLDEsNTUuNDIsMGg1Ni41OEEyOC4wNSwyOC4wNSwwLDAsMSwxODAsMTY2LjcxVjY4SDMyYTQsNCwwLDAsMC00LDRWMTg0QTQsNCwwLDAsMCwzMiwxODhabTY4LDRhMjAsMjAsMCwxLDAtMjAsMjBBMjAsMjAsMCwwLDAsMTAwLDE5MlptMTEyLDBhMjAsMjAsMCwxLDAtMjAsMjBBMjAsMjAsMCwwLDAsMjEyLDE5MlptMzItOFYxMjRIMTg4djQwLjI5QTI4LDI4LDAsMCwxLDIxOS43MSwxODhIMjQwQTQsNCwwLDAsMCwyNDQsMTg0WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04MiwxMjBhNiw2LDAsMCwxLDYtNmgxOFY5NmE2LDYsMCwwLDEsMTIsMHYxOGgxOGE2LDYsMCwwLDEsMCwxMkgxMTh2MThhNiw2LDAsMCwxLTEyLDBWMTI2SDg4QTYsNiwwLDAsMSw4MiwxMjBabTE3MiwwdjY0YTE0LDE0LDAsMCwxLTE0LDE0SDIyMS40YTMwLDMwLDAsMCwxLTU4LjgsMEgxMDkuNGEzMCwzMCwwLDAsMS01OC44LDBIMzJhMTQsMTQsMCwwLDEtMTQtMTRWNzJBMTQsMTQsMCwwLDEsMzIsNThIMTg0YTYsNiwwLDAsMSw2LDZWNzRoMzYuNThhMTMuOTMsMTMuOTMsMCwwLDEsMTMsOC44bDE0LDM1QTYuMSw2LjEsMCwwLDEsMjU0LDEyMFpNMTkwLDg2djI4aDQ5LjE0bC0xMC43LTI2Ljc0QTIsMiwwLDAsMCwyMjYuNTgsODZaTTMyLDE4Nkg1MC42YTMwLDMwLDAsMCwxLDU4LjgsMGg1My4yQTMwLjEsMzAuMSwwLDAsMSwxNzgsMTY1LjQ4VjcwSDMyYTIsMiwwLDAsMC0yLDJWMTg0QTIsMiwwLDAsMCwzMiwxODZabTY2LDZhMTgsMTgsMCwxLDAtMTgsMThBMTgsMTgsMCwwLDAsOTgsMTkyWm0xMTIsMGExOCwxOCwwLDEsMC0xOCwxOEExOCwxOCwwLDAsMCwyMTAsMTkyWm0zMi04VjEyNkgxOTB2MzYuMDdjLjY2LDAsMS4zMy0uMDcsMi0uMDdhMzAuMDUsMzAuMDUsMCwwLDEsMjkuNCwyNEgyNDBBMiwyLDAsMCwwLDI0MiwxODRaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04MCwxMjBhMTIsMTIsMCwwLDEsMTItMTJoOHYtOGExMiwxMiwwLDAsMSwyNCwwdjhoOGExMiwxMiwwLDAsMSwwLDI0aC04djhhMTIsMTIsMCwwLDEtMjQsMHYtOEg5MkExMiwxMiwwLDAsMSw4MCwxMjBabTE3NiwwdjY0YTIwLDIwLDAsMCwxLTIwLDIwSDIyNS45NGEzNiwzNiwwLDAsMS02Ny44OCwwSDExMy45NGEzNiwzNiwwLDAsMS02Ny44OCwwSDMyYTIwLDIwLDAsMCwxLTIwLTIwVjcyQTIwLDIwLDAsMCwxLDMyLDUySDE4NGExMiwxMiwwLDAsMSwxMiwxMnY0aDI2LjU4YTE5LjksMTkuOSwwLDAsMSwxOC41NywxMi41N2wxNCwzNUExMiwxMiwwLDAsMSwyNTYsMTIwWk0xOTYsOTJ2MTZoMzAuMjhsLTYuNC0xNlpNMzYsMTgwSDQ2LjA2YTM2LDM2LDAsMCwxLDY3Ljg4LDBoNDQuMTJBMzYuMzIsMzYuMzIsMCwwLDEsMTcyLDE2Mi4wOFY3NkgzNlptNTYsMTJhMTIsMTIsMCwxLDAtMTIsMTJBMTIsMTIsMCwwLDAsOTIsMTkyWm0xMTIsMGExMiwxMiwwLDEsMC0xMiwxMkExMiwxMiwwLDAsMCwyMDQsMTkyWm0yOC0xMlYxMzJIMTk2djI0LjIzQTM2LjA5LDM2LjA5LDAsMCwxLDIyNS45NCwxODBaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTUuNDMsMTE3bC0xNC0zNUExNS45MywxNS45MywwLDAsMCwyMjYuNTgsNzJIMTkyVjY0YTgsOCwwLDAsMC04LThIMzJBMTYsMTYsMCwwLDAsMTYsNzJWMTg0YTE2LDE2LDAsMCwwLDE2LDE2SDQ5YTMyLDMyLDAsMCwwLDYyLDBoNTBhMzIsMzIsMCwwLDAsNjIsMGgxN2ExNiwxNiwwLDAsMCwxNi0xNlYxMjBBNy45Miw3LjkyLDAsMCwwLDI1NS40MywxMTdaTTgwLDIwOGExNiwxNiwwLDEsMSwxNi0xNkExNiwxNiwwLDAsMSw4MCwyMDhabTU2LTgwSDEyMHYxNmE4LDgsMCwwLDEtMTYsMFYxMjhIODhhOCw4LDAsMCwxLDAtMTZoMTZWOTZhOCw4LDAsMCwxLDE2LDB2MTZoMTZhOCw4LDAsMCwxLDAsMTZabTU2LDgwYTE2LDE2LDAsMSwxLDE2LTE2QTE2LDE2LDAsMCwxLDE5MiwyMDhabTAtOTZWODhoMzQuNThsOS42LDI0WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsMTIwdjY0YTgsOCwwLDAsMS04LDhIMjE2YTI0LDI0LDAsMCwwLTMyLTIyLjYzaDBBMjQsMjQsMCwwLDAsMTY4LDE5MkgxMDRhMjQsMjQsMCwwLDAtNDgsMEgzMmE4LDgsMCwwLDEtOC04VjcyYTgsOCwwLDAsMSw4LThIMTg0djU2WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTgwLDEyMGE4LDgsMCwwLDEsOC04aDE2Vjk2YTgsOCwwLDAsMSwxNiwwdjE2aDE2YTgsOCwwLDAsMSwwLDE2SDEyMHYxNmE4LDgsMCwwLDEtMTYsMFYxMjhIODhBOCw4LDAsMCwxLDgwLDEyMFptMTc2LDB2NjRhMTYsMTYsMCwwLDEtMTYsMTZIMjIzYTMyLDMyLDAsMCwxLTYyLDBIMTExYTMyLDMyLDAsMCwxLTYyLDBIMzJhMTYsMTYsMCwwLDEtMTYtMTZWNzJBMTYsMTYsMCwwLDEsMzIsNTZIMTg0YTgsOCwwLDAsMSw4LDh2OGgzNC41OGExNS45MywxNS45MywwLDAsMSwxNC44NiwxMC4wNmwxNCwzNUE3LjkyLDcuOTIsMCwwLDEsMjU2LDEyMFpNMTkyLDg4djI0aDQ0LjE4bC05LjYtMjRaTTMyLDE4NEg0OWEzMiwzMiwwLDAsMSw2MiwwaDUwYTMyLjExLDMyLjExLDAsMCwxLDE1LTE5LjY5VjcySDMyWm02NCw4YTE2LDE2LDAsMSwwLTE2LDE2QTE2LDE2LDAsMCwwLDk2LDE5MlptMTEyLDBhMTYsMTYsMCwxLDAtMTYsMTZBMTYsMTYsMCwwLDAsMjA4LDE5MlptMzItOFYxMjhIMTkydjMyYTMyLjA2LDMyLjA2LDAsMCwxLDMxLDI0WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Ambulance";
export { I as Ambulance };
