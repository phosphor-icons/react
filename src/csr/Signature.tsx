/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Signature";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTY0SDcwLjM4YzIuMi00LjQyLDQuNDEtOC45NCw2LjU5LTEzLjUybC43OS0xLjY2YzEzLjUyLTEuNjUsMjguNjktMTEuMyw0NS4zOC0yOC44Nyw1LjMxLDEyLDE0LDI0LjczLDI3LjU5LDI3LjI5LDUuMjYsMSwxMy41MS43OSwyMi45My01LjgyYTU3Ljg2LDU3Ljg2LDAsMCwwLDktNy45MUMxOTAuOSwxNDEuMiwyMDUuNjgsMTQ4LDIzMiwxNDhhMTIsMTIsMCwwLDAsMC0yNGMtMzEsMC0zNS40Mi0xMC40OS0zNi0xMi4zOC40OS01LjM3LTIuNzUtOS43Ni03Ljg4LTExLjYzcy0xMS4xNy43OC0xNC4yMiw1LjQ2Yy0xMCwxNS4zMi0xNi42MiwxOC42Mi0xOC43NSwxOC4yMS00Ljg4LS45MS0xMi4zOS0xNS41NC0xNS40NC0zMC4wOWExMiwxMiwwLDAsMC0yMS4xMy01Yy0xMC4zLDEyLjkyLTE5LjE2LDIxLjc5LTI2LjQ3LDI3LjU2LDIxLjE5LTUyLjk0LDE3LTcyLjIyLDExLjM3LTgyLjI1Qzk4LjQ4LDI0LjkxLDg5LjQxLDIwLDc4LDIwLDU5LjkyLDIwLDQ1LjM2LDM2LjU1LDM5LDY0LjI2Yy0zLjQ1LDE1LjEtNCwzMS44MS0xLjQ2LDQ1Ljg1LDIuNjUsMTQuNzEsOC4zNiwyNS43LDE2LjY4LDMyLjIzQzUwLjY5LDE0OS43OCw0NywxNTcuMDYsNDMuNDcsMTY0SDI0YTEyLDEyLDAsMCwwLDAsMjRoNi43Yy05LjcsMTcuNjctMTYuODUsMjkuNi0xNywyOS44MWExMiwxMiwwLDEsMCwyMC41NiwxMi4zOEMzNC45MSwyMjkuMTUsNDUuMjMsMjEyLDU4LDE4OEgyMzJhMTIsMTIsMCwwLDAsMC0yNFpNNjIuNDMsNjkuNkM2NS43Nyw1NSw3Mi40NSw0NCw3OCw0NGMzLjcxLDAsNC4yOSwxLDQuNjQsMS42NCwxLjQzLDIuNTMsNi41NSwxNy4wNy0xNy40NCw3Mi43OGE0NC42NCw0NC42NCwwLDAsMS00LTEyLjU2QzU5LjIzLDk0Ljg5LDU5LjY4LDgxLjY3LDYyLjQzLDY5LjZaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik02Ny40MSwxNDIuNTZDMzUuNzEsMTI5LjUyLDQ1LjQxLDMyLjA3LDc4LDMyLDExMS44MiwzMi4wNSw5Miw5MC4yNiw2Ny40MSwxNDIuNTZaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjMyLDE2OEg2My44NmMyLjY2LTUuMjQsNS4zMy0xMC42Myw4LTE2LjExLDE0Ljk0LDEuNjUsMzIuNTgtOC43OCw1Mi42Ni0zMS4xNCw1LDEzLjQ2LDE0LjQ1LDMwLjkzLDMwLjU4LDMxLjI1LDkuMDkuMTgsMTguMTEtNS4yLDI3LjQyLTE2LjM3QzE4OS4zMSwxNDMuNzUsMjAzLjMsMTUyLDIzMiwxNTJhOCw4LDAsMCwwLDAtMTZjLTMwLjQzLDAtMzkuNDMtMTAuNDUtNDAtMTYuMTFhNy42Nyw3LjY3LDAsMCwwLTUuNDYtNy43NSw4LjE0LDguMTQsMCwwLDAtOS4yNSwzLjQ5QzE2NS4yMywxMzQuMTcsMTU4LDEzNi4wNiwxNTUuMzgsMTM2Yy04LjI2LS4xNi0xNi42Ni0xOS41Mi0xOS41NC0zMy40MmE4LDgsMCwwLDAtMTQuMDktMy4zN0MxMDEuNTQsMTI0LjU1LDg4LDEzMy4wOCw3OS41NywxMzUuMjksODguMDYsMTE2LjQyLDk0LjQsOTkuODUsOTguNDYsODUuOWM2LjgyLTIzLjQ0LDcuMzItMzkuODMsMS41MS01MC4xLTMtNS4zOC05LjM0LTExLjgtMjIuMDYtMTEuOEM2MS44NSwyNCw0OS4xOCwzOS4xOCw0My4xNCw2NS42NWMtMy41OSwxNS43MS00LjE4LDMzLjIxLTEuNjIsNDhzNy44NywyNS41NSwxNS41OSwzMS45NGMtMy43Myw3LjcyLTcuNTMsMTUuMjYtMTEuMjMsMjIuNDFIMjRhOCw4LDAsMCwwLDAsMTZIMzcuNDFjLTExLjMyLDIxLTIwLjEyLDM1LjY0LTIwLjI2LDM1Ljg4YTgsOCwwLDEsMCwxMy43MSw4LjI0Yy4xNS0uMjYsMTEuMjctMTguNzksMjQuNy00NC4xMkgyMzJhOCw4LDAsMCwwLDAtMTZaTTU4Ljc0LDY5LjIxQzYyLjcyLDUxLjc0LDcwLjQzLDQwLDc3LjkxLDQwYzUuMzMsMCw3LjEsMS44Niw4LjEzLDMuNjcsMyw1LjMzLDYuNTIsMjQuMTktMjEuNjYsODYuMzlDNTYuMTIsMTE4Ljc4LDUzLjMxLDkzLDU4Ljc0LDY5LjIxWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04MC4zLDEyMC4yNkE1OC4yOSw1OC4yOSwwLDAsMSw4MSw5Ny4wN0M4My4zMiw4Nyw4Ny44OSw4MCw5Mi4xLDgwYzIuNTcsMCwyLjk0LjY3LDMuMTIsMSwuODgsMS42MSw0LDEwLjkzLTEyLjYzLDQ2LjUyQTI4Ljg3LDI4Ljg3LDAsMCwxLDgwLjMsMTIwLjI2Wk0yMzIsNTZWMjAwYTE2LDE2LDAsMCwxLTE2LDE2SDQwYTE2LDE2LDAsMCwxLTE2LTE2VjU2QTE2LDE2LDAsMCwxLDQwLDQwSDIxNkExNiwxNiwwLDAsMSwyMzIsNTZaTTg0LDE2MGMyLTMuNTksMy45NC03LjMyLDUuOS0xMS4xNCwxMC4zNC0uMzIsMjIuMjEtNy41NywzNS40Ny0yMS42OCw1LDkuNjksMTEuMzgsMTUuMjUsMTguODcsMTYuNTUsOCwxLjM4LDE2LTIuMzgsMjMuOTQtMTEuMiw2LDUuNTMsMTYuMTUsMTEuNDcsMzEuOCwxMS40N2E4LDgsMCwwLDAsMC0xNmMtMTcuOTEsMC0yNC4zLTEwLjg4LTI0Ljg0LTExLjg2YTcuODMsNy44MywwLDAsMC02LjU0LTQuNTEsOCw4LDAsMCwwLTcuMjUsMy42Yy02Ljc4LDEwLTExLjg3LDEzLjE2LTE0LjM5LDEyLjczLTQtLjY5LTkuMTUtMTAtMTEuMjMtMThhOCw4LDAsMCwwLTE0LTNjLTguODgsMTAuOTQtMTYuMywxNy43OS0yMi4xMywyMS42NiwxNS44LTM1LjY1LDEzLjI3LTQ4LjU5LDkuNi01NS4zQzEwNy4zNSw2OS44NCwxMDIuNTksNjQsOTIuMSw2NCw3OS42Niw2NCw2OS42OCw3NSw2NS40MSw5My40NmE3NSw3NSwwLDAsMC0uODMsMjkuODFjMS43LDguOSw1LjE3LDE1LjczLDEwLjE2LDIwLjEyLTMsNS44MS02LjA5LDExLjQzLTksMTYuNjFINTZhOCw4LDAsMCwwLDAsMTZoLjQ0Yy00LjI2LDcuMTItNy4xMSwxMS41OS03LjE4LDExLjY5YTgsOCwwLDAsMCwxMy40OCw4LjYyYy4zNi0uNTUsNS40Ny04LjU3LDEyLjI5LTIwLjMxSDIwMGE4LDgsMCwwLDAsMC0xNloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTcwSDYwLjZjMy4zNC02LjU0LDYuNzMtMTMuMzUsMTAuMDYtMjAuMjlhMjYuNjQsMjYuNjQsMCwwLDAsNC4zLjM1YzE0LjIzLDAsMzEuMDktMTEuMTIsNTAuMzMtMzMuMjIsMSwzLDIuMiw2LjI1LDMuNjgsOS41Niw2Ljg5LDE1LjQ1LDE1LjY4LDIzLjM5LDI2LjE0LDIzLjZoLjM5YzguODEsMCwxNy43MS01Ljc3LDI3LTE3LjU4QzE4OC4zMywxNDAuNjgsMjAxLjYyLDE1MCwyMzIsMTUwYTYsNiwwLDAsMCwwLTEyYy0zOS42OSwwLTQxLjg4LTE2LjYxLTQyLTE4LjA2YTUuODMsNS44MywwLDAsMC00LjE1LTUuOCw2LjA5LDYuMDksMCwwLDAtNi44OCwyLjU5QzE2Ni44MSwxMzUuNCwxNTguOSwxMzguMDYsMTU1LjM0LDEzOGMtMTAuNzgtLjIxLTE5LjExLTIzLjY4LTIxLjQ2LTM1YTYsNiwwLDAsMC0xMC41Ny0yLjUzQzEwNC42NCwxMjMuODYsODgsMTM3LDc2LjE4LDEzNy45MiwxMDAsODUuODQsMTA3LjIzLDUyLjcsOTguMjMsMzYuNzgsOTUuNDQsMzEuODYsODkuNjYsMjYsNzcuOTEsMjZjLTE1LDAtMjcsMTQuNjItMzIuODIsNDAuMUMzOC4yOCw5NS45NCw0Mi4xMiwxMzIsNTkuNjIsMTQ1Yy00LjE1LDguNjQtOC40LDE3LjA4LTEyLjUyLDI1SDI0YTYsNiwwLDAsMCwwLDEySDQwLjc2QzI4LjY1LDIwNC41OCwxOSwyMjAuNjYsMTguODYsMjIwLjkxYTYsNiwwLDEsMCwxMC4yOCw2LjE4Yy4xNi0uMjYsMTEuNTYtMTkuMjcsMjUuMjEtNDUuMDlIMjMyYTYsNiwwLDAsMCwwLTEyWk01Ni43OSw2OC43N0M2MS4wNSw1MC4wOCw2OS4zNCwzOCw3Ny45MSwzOGM2LjQsMCw4LjY0LDIuNTEsOS44Nyw0LjY5LDQsNyw2LDI4LjE1LTIyLjg4LDkxQzU0LjU5LDEyMy4zOSw1MC43Myw5NS4zLDU2Ljc5LDY4Ljc3WiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTY4SDYzLjg2YzIuNjYtNS4yNCw1LjMzLTEwLjYzLDgtMTYuMTEsMTUsMS42NSwzMi41OC04Ljc4LDUyLjY2LTMxLjE0LDUsMTMuNDYsMTQuNDUsMzAuOTMsMzAuNTgsMzEuMjUsOS4wNi4xOCwxOC4xMS01LjIsMjcuNDItMTYuMzdDMTg5LjMxLDE0My43NSwyMDMuMywxNTIsMjMyLDE1MmE4LDgsMCwwLDAsMC0xNmMtMzAuNDMsMC0zOS40My0xMC40NS00MC0xNi4xMWE3LjY3LDcuNjcsMCwwLDAtNS40Ni03Ljc1LDguMTQsOC4xNCwwLDAsMC05LjI1LDMuNDljLTEyLjA3LDE4LjU0LTE5LjM4LDIwLjQzLTIxLjkyLDIwLjM3LTguMjYtLjE2LTE2LjY2LTE5LjUyLTE5LjU0LTMzLjQyYTgsOCwwLDAsMC0xNC4wOS0zLjM3QzEwMS41NCwxMjQuNTUsODgsMTMzLjA4LDc5LjU3LDEzNS4yOSw4OC4wNiwxMTYuNDIsOTQuNCw5OS44NSw5OC40Niw4NS45YzYuODItMjMuNDQsNy4zMi0zOS44MywxLjUxLTUwLjEtMy01LjM4LTkuMzQtMTEuOC0yMi4wNi0xMS44QzYxLjg1LDI0LDQ5LjE4LDM5LjE4LDQzLjE0LDY1LjY1Yy0zLjU5LDE1LjcxLTQuMTgsMzMuMjEtMS42Miw0OHM3Ljg3LDI1LjU1LDE1LjU5LDMxLjk0Yy0zLjczLDcuNzItNy41MywxNS4yNi0xMS4yMywyMi40MUgyNGE4LDgsMCwwLDAsMCwxNkgzNy40MWMtMTEuMzIsMjEtMjAuMTIsMzUuNjQtMjAuMjYsMzUuODhhOCw4LDAsMSwwLDEzLjcxLDguMjRjLjE1LS4yNiwxMS4yNy0xOC43OSwyNC43LTQ0LjEySDIzMmE4LDgsMCwwLDAsMC0xNlpNNTguNzQsNjkuMjFDNjIuNzIsNTEuNzQsNzAuNDMsNDAsNzcuOTEsNDBjNS4zMywwLDcuMSwxLjg2LDguMTMsMy42NywzLDUuMzMsNi41MiwyNC4xOS0yMS42Niw4Ni4zOUM1Ni4xMiwxMTguNzgsNTMuMzEsOTMsNTguNzQsNjkuMjFaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTcySDU3LjMyYzQtNy44Myw4LjE4LTE2LjExLDEyLjIxLTI0LjU2LDE1LjE0LDMuNTUsMzQuMTMtOC4wNiw1Ni41NC0zNC41OSwzLjY3LDEyLjUsMTIuNTMsMzQuODMsMjkuMDgsMzUuMTVoLjM1YzguNzEsMCwxNy42NC02LjI1LDI3LjE2LTE5LjA2QzE4Ny4xNywxMzcuMTQsMTk5LjMxLDE0OCwyMzIsMTQ4YTQsNCwwLDAsMCwwLThjLTQyLjg4LDAtNDQtMTkuMjQtNDQtMjBhNCw0LDAsMCwwLTcuMzUtMi4xOEMxNjguNzQsMTM2LjEsMTYwLjQyLDE0MCwxNTUuNDgsMTQwaC0uMThjLTEzLS4yNS0yMS4yOS0yNi41Mi0yMy4zOC0zNi42MWE0LDQsMCwwLDAtNy0xLjY5Yy0yMC45NCwyNi4yNy0zOS4wNiwzOS41NS01MS44LDM4LjJDOTcuMzEsODcuNSwxMDUuMTksNTMuMTYsOTYuNDksMzcuNzcsOTQsMzMuMzEsODguNywyOCw3Ny45MSwyOCw2NC4wOSwyOCw1Mi41NCw0Mi40MSw0Nyw2Ni41NEExMjIuNywxMjIuNywwLDAsMCw0NS40NiwxMTNjMi42NCwxNS4yOSw4LjM5LDI2LjA1LDE2LjY5LDMxLjM1LTQuNTgsOS42LTkuMywxOS0xMy44NCwyNy42OEgyNGE0LDQsMCwwLDAsMCw4SDQ0LjFjLTEyLjg3LDI0LjE3LTIzLjM3LDQxLjY4LTIzLjUzLDQxLjk0YTQsNCwwLDAsMCwxLjM3LDUuNDlBMy45MywzLjkzLDAsMCwwLDI0LDIyOGE0LDQsMCwwLDAsMy40My0xLjk0Yy4xNi0uMjcsMTEuODUtMTkuNzUsMjUuNzItNDYuMDZIMjMyYTQsNCwwLDAsMCwwLThaTTUzLjM0LDExMS42MWExMTQuODEsMTE0LjgxLDAsMCwxLDEuNDktNDMuMjlDNTguNCw1Mi43LDY2LjM0LDM2LDc3LjkxLDM2YzcuNTIsMCwxMC4yMywzLjI2LDExLjYxLDUuN0M5OSw1OC40LDc5LjkyLDEwNiw2NS42LDEzNyw1OS43NiwxMzIuNjksNTUuNDYsMTIzLjgzLDUzLjM0LDExMS42MVoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Signature";
export { I as Signature };
