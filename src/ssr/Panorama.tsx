/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Panorama";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDEuNzUsNTEuMzJhMTUuODgsMTUuODgsMCwwLDAtMTMuODYtMi43N2wtMy40OC45NEMyMDUuNjEsNTQuNTYsMTcwLjYxLDY0LDEyOCw2NFM1MC4zOSw1NC41NiwzMS41OSw0OS40OWwtMy40OC0uOTRBMTYsMTYsMCwwLDAsOCw2NFYxOTJhMTYsMTYsMCwwLDAsMTYsMTYsMTYuMjIsMTYuMjIsMCwwLDAsNC4xOC0uNTVsMy4xOC0uODZDNTAuMTMsMjAxLjQ5LDg1LjE3LDE5MiwxMjgsMTkyczc3Ljg3LDkuNDksOTYuNjksMTQuNTlsMy4xOC44NkExNiwxNiwwLDAsMCwyNDgsMTkyVjY0QTE1LjksMTUuOSwwLDAsMCwyNDEuNzUsNTEuMzJaTTI3LjQyLDY0LjkzQzQ2Ljk0LDcwLjIsODMuMjcsODAsMTI4LDgwczgxLjA2LTkuOCwxMDAuNTgtMTUuMDdMMjMyLDY0VjE4Mi43NmwtNTguMDctNTguMDdhMTYsMTYsMCwwLDAtMjIuNjMsMGwtMjAsMjAtNDQtNDRhMTYsMTYsMCwwLDAtMjIuNjIsMEwyNCwxNDEuMzdWNjRaTTIxMy44NCwxODcuMjFhMzkxLjIyLDM5MS4yMiwwLDAsMC00OS05TDE0Mi42MywxNTZsMjAtMjBaTTI3LjEzLDE5MS4xNCwyNCwxOTJWMTY0bDUyLTUyLDY0LjI1LDY0LjI1cS02LS4yNC0xMi4yNS0uMjVDODMsMTc2LDQ1LjI4LDE4Ni4yMywyNy4xMywxOTEuMTRaTTE5MiwxMDhhMTIsMTIsMCwxLDEsMTIsMTJBMTIsMTIsMCwwLDEsMTkyLDEwOFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzkuMzEsNTQuNDlhMTEuODgsMTEuODgsMCwwLDAtMTAuMzktMi4wOGwtMy40Ny45M0MyMDYuNDcsNTguNDcsMTcxLjE0LDY4LDEyOCw2OFM0OS41Myw1OC40NywzMC41NSw1My4zNGwtMy40Ny0uOTNBMTIsMTIsMCwwLDAsMTIsNjRWMTkyYTExLjk1LDExLjk1LDAsMCwwLDE1LjA5LDExLjU5bDMuMTgtLjg1QzQ5LjI3LDE5Ny41OCw4NC42NCwxODgsMTI4LDE4OHM3OC43Myw5LjU4LDk3LjczLDE0LjczbDMuMTguODVBMTIsMTIsMCwwLDAsMjQ0LDE5MlY2NEExMS45MiwxMS45MiwwLDAsMCwyMzkuMzEsNTQuNDlaTTIxLjU3LDYwLjgzQTQsNCwwLDAsMSwyNCw2MGE0LjE5LDQuMTksMCwwLDEsMSwuMTRsMy40NC45M0M0Ny44LDY2LjI5LDgzLjgsNzYsMTI4LDc2czgwLjItOS43MSw5OS41NC0xNC45M2wzLjQ1LS45M0E0LDQsMCwwLDEsMjM2LDY0VjE5MmMwLC4xMywwLC4yNCwwLC4zN2wtNjQuODUtNjQuODVhMTIsMTIsMCwwLDAtMTcsMGwtMjIuODMsMjIuODNMODQuNDksMTAzLjUxYTEyLDEyLDAsMCwwLTE3LDBMMjAsMTUxVjY0QTQsNCwwLDAsMSwyMS41Nyw2MC44M1pNMjguMTcsMTk1bC0zLjE1Ljg1QTQsNCwwLDAsMSwyMCwxOTJWMTYyLjM0bDUzLjE3LTUzLjE3YTQsNCwwLDAsMSw1LjY2LDBsNzEuNjcsNzEuNjdjLTcuMjQtLjUzLTE0Ljc2LS44NC0yMi41LS44NEM4My41NywxODAsNDYuMTYsMTkwLjEzLDI4LjE3LDE5NVpNMTYzLDE4MmwtMjYtMjYsMjIuODMtMjIuODNhNCw0LDAsMCwxLDUuNjYsMGw2MS42NCw2MS42NEMyMTQsMTkxLjI1LDE5MS4xMSwxODUuMTQsMTYzLDE4MlptMzMtNzRhOCw4LDAsMSwxLDgsOEE4LDgsMCwwLDEsMTk2LDEwOFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAuNTMsNTIuOWExMy44OCwxMy44OCwwLDAsMC0xMi4xMi0yLjQybC0zLjQ4Ljk0QzIwNiw1Ni41MSwxNzAuODcsNjYsMTI4LDY2UzUwLDU2LjUxLDMxLjA3LDUxLjQybC0zLjQ4LS45NEExNCwxNCwwLDAsMCwxMCw2NFYxOTJhMTMuOTUsMTMuOTUsMCwwLDAsMTcuNjEsMTMuNTJsMy4xOC0uODVDNDkuNywxOTkuNTMsODQuOTEsMTkwLDEyOCwxOTBzNzguMyw5LjUzLDk3LjIxLDE0LjY2bDMuMTguODVBMTQsMTQsMCwwLDAsMjQ2LDE5MlY2NEExMy45MywxMy45MywwLDAsMCwyNDAuNTMsNTIuOVpNMjIuNzgsNjIuNDJBMiwyLDAsMCwxLDI0LDYyYTIuMDYsMi4wNiwwLDAsMSwuNTIuMDhsMy40NC45MkM0Ny4zNyw2OC4yNCw4My41NCw3OCwxMjgsNzhzODAuNjMtOS43NiwxMDAuMDYtMTVsMy40NC0uOTJBMiwyLDAsMCwxLDIzNCw2NFYxODcuNTdMMTcyLjUzLDEyNi4xYTE0LDE0LDAsMCwwLTE5LjgsMGwtMjEuNDIsMjEuNDFMODUuOSwxMDIuMWExNCwxNCwwLDAsMC0xOS44LDBMMjIsMTQ2LjJWNjRBMiwyLDAsMCwxLDIyLjc4LDYyLjQyWk0yMjAuNDEsMTkxYTQwMC4zOSw0MDAuMzksMCwwLDAtNTYuNTItMTAuODZMMTM5LjgsMTU2bDIxLjQxLTIxLjQxYTIsMiwwLDAsMSwyLjgzLDBaTTI3LjY1LDE5My4wN2wtMy4xNS44NkEyLDIsMCwwLDEsMjIsMTkyVjE2My4xN2w1Mi41OC01Mi41OGEyLDIsMCwwLDEsMi44NCwwbDY3LjkxLDY3LjkxYy01LjYzLS4zMi0xMS40Mi0uNS0xNy4zMy0uNUM4My4zMSwxNzgsNDUuNzIsMTg4LjE4LDI3LjY1LDE5My4wN1pNMTk0LDEwOGExMCwxMCwwLDEsMSwxMCwxMEExMCwxMCwwLDAsMSwxOTQsMTA4WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDQuMTgsNDguMTVhMTkuODIsMTkuODIsMCwwLDAtMTcuMzItMy40NmwtMy40OS45NEMyMDQuNzQsNTAuNjUsMTcwLjA4LDYwLDEyOCw2MFM1MS4yNiw1MC42NSwzMi42Myw0NS42M2wtMy40OS0uOTRBMjAsMjAsMCwwLDAsNCw2NFYxOTJhMjAsMjAsMCwwLDAsMTkuOTQsMjAsMjAuNDIsMjAuNDIsMCwwLDAsNS4yMy0uNjlsMy4xOS0uODdDNTEsMjA1LjM5LDg1LjcsMTk2LDEyOCwxOTZzNzcsOS40LDk1LjY0LDE0LjQ1bDMuMTkuODdBMjAsMjAsMCwwLDAsMjUyLDE5MlY2NEExOS44NSwxOS44NSwwLDAsMCwyNDQuMTgsNDguMTVaTTEyOCw4NGM0NCwwLDgxLjE0LTkuNjksMTAwLTE0Ljc3VjE3Ny4wOGwtNTEuMjMtNTEuMjJhMjAsMjAsMCwwLDAtMjguMjgsMEwxMzEuMzEsMTQzLDkwLjE0LDEwMS44NmEyMCwyMCwwLDAsMC0yOC4yOCwwTDI4LDEzNS43MVY2OS4yM0M0Ni44Niw3NC4zMSw4NCw4NCwxMjgsODRabTIwLjI4LDc2LDE0LjM1LTE0LjM1LDMzLjQ2LDMzLjQ2Yy0xMC4wOS0yLTIxLjUyLTMuOTMtMzMuOTQtNS4yNVpNMjgsMTg2Ljc2VjE2OS42NWw0OC00OEwxMjYuMzUsMTcyQzgzLjEyLDE3Mi4yNCw0Ni43NCwxODEuNywyOCwxODYuNzZaTTE4NCwxMDhhMTYsMTYsMCwxLDEsMTYsMTZBMTYsMTYsMCwwLDEsMTg0LDEwOFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDEuNzUsNTEuMzJhMTUuODcsMTUuODcsMCwwLDAtMTMuODYtMi43N2wtMy40OC45NEMyMDUuNjEsNTQuNTYsMTcwLjYxLDY0LDEyOCw2NFM1MC4zOSw1NC41NiwzMS41OSw0OS40OWwtMy40OC0uOTRBMTYsMTYsMCwwLDAsOCw2NFYxOTJhMTYsMTYsMCwwLDAsMTYsMTYsMTYuMjIsMTYuMjIsMCwwLDAsNC4xOC0uNTVsMy4xOC0uODZDNTAuMTMsMjAxLjQ5LDg1LjE3LDE5MiwxMjgsMTkyczc3Ljg3LDkuNDksOTYuNjksMTQuNTlsMy4xOC44NkExNiwxNiwwLDAsMCwyNDgsMTkyVjY0QTE1LjksMTUuOSwwLDAsMCwyNDEuNzUsNTEuMzJaTTIwNCw5NmExMiwxMiwwLDEsMS0xMiwxMkExMiwxMiwwLDAsMSwyMDQsOTZabS03Niw4MGMtNDUsMC04Mi43MiwxMC4yMy0xMDAuODcsMTUuMTRMMjQsMTkydi0zOS4zbDQ2LjM0LTQ2LjM1YTgsOCwwLDAsMSwxMS4zMiwwTDE1Mi4yOCwxNzdDMTQ0LjQ5LDE3Ni4zNSwxMzYuMzcsMTc2LDEyOCwxNzZabTEwMC44NywxNS4xNGE0NDguNyw0NDguNywwLDAsMC01MS0xMS4ybC0zNS4yNi0zNS4yNkwxNTcsMTMwLjM0YTgsOCwwLDAsMSwxMS4zMSwwbDYwLjg5LDYwLjg4WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsNjRWMTkyYTgsOCwwLDAsMS0zLjQ3LDYuNmwtNjguMjUtNjguMjVhOCw4LDAsMCwwLTExLjMxLDBMMTMxLjMxLDE1Niw4MS42NiwxMDYuMzRhOCw4LDAsMCwwLTExLjMyLDBMMTYsMTYwLjY5VjY0YTgsOCwwLDAsMSwxMC4wNS03Ljc0QzQzLjM1LDYwLjg5LDgxLjQ0LDcyLDEyOCw3MlMyMTIuNjUsNjAuODksMjMwLDU2LjI3QTgsOCwwLDAsMSwyNDAsNjRaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjQxLjc1LDUxLjMyYTE1Ljg4LDE1Ljg4LDAsMCwwLTEzLjg2LTIuNzdsLTMuNDguOTRDMjA1LjYxLDU0LjU2LDE3MC42MSw2NCwxMjgsNjRTNTAuMzksNTQuNTYsMzEuNTksNDkuNDlsLTMuNDgtLjk0QTE2LDE2LDAsMCwwLDgsNjRWMTkyYTE2LDE2LDAsMCwwLDE2LDE2LDE2LjIyLDE2LjIyLDAsMCwwLDQuMTgtLjU1bDMuMTgtLjg2QzUwLjEzLDIwMS40OSw4NS4xNywxOTIsMTI4LDE5MnM3Ny44Nyw5LjQ5LDk2LjY5LDE0LjU5bDMuMTguODZBMTYsMTYsMCwwLDAsMjQ4LDE5MlY2NEExNS45LDE1LjksMCwwLDAsMjQxLjc1LDUxLjMyWk0yNy40Miw2NC45M0M0Ni45NCw3MC4yLDgzLjI3LDgwLDEyOCw4MHM4MS4wNi05LjgsMTAwLjU4LTE1LjA3TDIzMiw2NFYxODIuNzZsLTU4LjA3LTU4LjA3YTE2LDE2LDAsMCwwLTIyLjYzLDBsLTIwLDIwLTQ0LTQ0YTE2LDE2LDAsMCwwLTIyLjYyLDBMMjQsMTQxLjM3VjY0Wk0yMTMuODQsMTg3LjIxYTM5MS4yMiwzOTEuMjIsMCwwLDAtNDktOUwxNDIuNjMsMTU2bDIwLTIwWk0yNy4xMywxOTEuMTQsMjQsMTkyVjE2NGw1Mi01Miw2NC4yNSw2NC4yNXEtNi0uMjQtMTIuMjUtLjI1QzgzLDE3Niw0NS4yOCwxODYuMjMsMjcuMTMsMTkxLjE0Wk0xOTIsMTA4YTEyLDEyLDAsMSwxLDEyLDEyQTEyLDEyLDAsMCwxLDE5MiwxMDhaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Panorama";
export { I as Panorama };
