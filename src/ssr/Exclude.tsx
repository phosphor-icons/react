/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Exclude";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzQuNjMsODEuMzdhODAsODAsMCwxLDAtOTMuMjYsOTMuMjYsODAsODAsMCwxLDAsOTMuMjYtOTMuMjZaTTIyNCwxNjBjMCwxLjUyLS4wNywzLS4xOCw0LjUxbC01MC01MEE4MCw4MCwwLDAsMCwxNzYsOTgsNjQuMTEsNjQuMTEsMCwwLDEsMjI0LDE2MFptLTEzLjQ3LDM5LjIxTDE1Ny45MSwxNDYuNmE4MC41LDgwLjUsMCwwLDAsOS45My0xNS40NEwyMTkuNywxODNBNjQsNjQsMCwwLDEsMjEwLjUzLDE5OS4yMVpNMTgzLDIxOS43bC01MS44Ni01MS44NmE4MC41LDgwLjUsMCwwLDAsMTUuNDQtOS45M2w1Mi42MSw1Mi42MkE2NCw2NCwwLDAsMSwxODMsMjE5LjdaTTQ1LjQ3LDU2Ljc5LDk4LjA5LDEwOS40YTgwLjUsODAuNSwwLDAsMC05LjkzLDE1LjQ0TDM2LjMsNzNBNjQsNjQsMCwwLDEsNDUuNDcsNTYuNzlaTTczLDM2LjNsNTEuODYsNTEuODZhODAuNSw4MC41LDAsMCwwLTE1LjQ0LDkuOTNMNTYuNzksNDUuNDdBNjQsNjQsMCwwLDEsNzMsMzYuM1pNMTYwLDk2YTY0LjA3LDY0LjA3LDAsMCwxLTY0LDY0QTY0LjA3LDY0LjA3LDAsMCwxLDE2MCw5NlptLTItMTZhODAsODAsMCwwLDAtMTYuNDksMi4xM2wtNTAtNTBDOTMsMzIuMDcsOTQuNDgsMzIsOTYsMzJBNjQuMTEsNjQuMTEsMCwwLDEsMTU4LDgwLjA1Wk0zMiw5NmMwLTEuNTIuMDctMywuMTgtNC41MWw1MCw1MEE4MCw4MCwwLDAsMCw4MC4wNSwxNTgsNjQuMTEsNjQuMTEsMCwwLDEsMzIsOTZaTTk4LDE3NmE4MCw4MCwwLDAsMCwxNi40OS0yLjEzbDUwLDUwYy0xLjQ5LjExLTMsLjE4LTQuNTEuMThBNjQuMTEsNjQuMTEsMCwwLDEsOTgsMTc2WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzEuMTcsODQuODNhNzYsNzYsMCwxLDAtODYuMzQsODYuMzQsNzYsNzYsMCwxLDAsODYuMzQtODYuMzRaTTIyOCwxNjBhNjguNjMsNjguNjMsMCwwLDEtMS4yNywxMy4wN2wtNTcuMzQtNTcuMzRBNzYsNzYsMCwwLDAsMTcyLDk2YzAtMSwwLTItLjA3LTIuOTNBNjguMSw2OC4xLDAsMCwxLDIyOCwxNjBabS0xNy4yLDQ1LjE0LTU4LjM0LTU4LjMzYTc2LjM1LDc2LjM1LDAsMCwwLDE0LjA5LTIyLjZMMjI0LjMzLDE4MkE2OC4xNCw2OC4xNCwwLDAsMSwyMTAuOCwyMDUuMTRaTTE4MiwyMjQuMzNsLTU3Ljc4LTU3Ljc4YTc2LjM1LDc2LjM1LDAsMCwwLDIyLjYtMTQuMDlsNTguMzMsNTguMzRBNjguMTQsNjguMTQsMCwwLDEsMTgyLDIyNC4zM1pNNDUuMiw1MC44Nmw1OC4zNCw1OC4zM2E3Ni4zNSw3Ni4zNSwwLDAsMC0xNC4wOSwyMi42TDMxLjY3LDc0QTY4LjE0LDY4LjE0LDAsMCwxLDQ1LjIsNTAuODZaTTc0LDMxLjY3bDU3Ljc4LDU3Ljc4YTc2LjM1LDc2LjM1LDAsMCwwLTIyLjYsMTQuMDlMNTAuODYsNDUuMkE2OC4xNCw2OC4xNCwwLDAsMSw3NCwzMS42N1pNOTIsMTYwYTY4LjA3LDY4LjA3LDAsMCwxLDY4LTY4YzEuMywwLDIuNiwwLDMuODguMTJDMTY0LDkzLjQsMTY0LDk0LjcsMTY0LDk2YTY4LjA3LDY4LjA3LDAsMCwxLTY4LDY4Yy0xLjMsMC0yLjYtLjA1LTMuODgtLjEyQzkyLjA1LDE2Mi42LDkyLDE2MS4zLDkyLDE2MFptNzAuOTMtNzUuOTNjLTEsMC0yLS4wNy0yLjkzLS4wN2E3Niw3NiwwLDAsMC0xOS43MywyLjYxTDgyLjkzLDI5LjI3YTY4LDY4LDAsMCwxLDgwLDU0LjhaTTI4LDk2YTY4LjYzLDY4LjYzLDAsMCwxLDEuMjctMTMuMDdsNTcuMzQsNTcuMzRBNzYsNzYsMCwwLDAsODQsMTYwYzAsMSwwLDIsLjA3LDIuOTNBNjguMSw2OC4xLDAsMCwxLDI4LDk2Wm02NS4wNyw3NS45M2MxLDAsMiwuMDcsMi45My4wN2E3Niw3NiwwLDAsMCwxOS43My0yLjYxbDU3LjM0LDU3LjM0YTY4LDY4LDAsMCwxLTgwLTU0LjhaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzIuOTEsODMuMDlhNzgsNzgsMCwxLDAtODkuODIsODkuODIsNzgsNzgsMCwxLDAsODkuODItODkuODJaTTIyNiwxNjBhNjUuMzEsNjUuMzEsMCwwLDEtLjYyLDguOWwtNTMuNzYtNTMuNzdBNzcuODQsNzcuODQsMCwwLDAsMTc0LDk2YzAtLjE3LDAtLjMzLDAtLjQ5QTY2LjEsNjYuMSwwLDAsMSwyMjYsMTYwWk00NS4zMSw1My43OWw1NS41LDU1LjVhNzcuODYsNzcuODYsMCwwLDAtMTIsMTlMMzQsNzMuNDhBNjYsNjYsMCwwLDEsNDUuMzEsNTMuNzlaTTczLjQ4LDM0bDU0LjgsNTQuODFhNzcuODYsNzcuODYsMCwwLDAtMTksMTJsLTU1LjUtNTUuNUE2Niw2NiwwLDAsMSw3My40OCwzNFpNOTQsMTYwYTY2LjA4LDY2LjA4LDAsMCwxLDY2LTY2Yy42NSwwLDEuMywwLDEuOTUsMCwwLC42NS4wNSwxLjMuMDUsMmE2Ni4wOCw2Ni4wOCwwLDAsMS02Niw2NmMtLjY1LDAtMS4zLDAtMi0uMDVDOTQsMTYxLjMsOTQsMTYwLjY1LDk0LDE2MFptNTIuNzEtNC44MSw1NS41LDU1LjVBNjYsNjYsMCwwLDEsMTgyLjUyLDIyMmwtNTQuOC01NC44MUE3Ny44Niw3Ny44NiwwLDAsMCwxNDYuNzEsMTU1LjE5Wm04LjQ4LTguNDhhNzcuODYsNzcuODYsMCwwLDAsMTItMTlMMjIyLDE4Mi41MmE2Niw2NiwwLDAsMS0xMS4zNSwxOS42OVptNS4zLTY0LjdIMTYwYTc3Ljg0LDc3Ljg0LDAsMCwwLTE5LjEzLDIuMzhMODcuMSwzMC42MkE2NS4zMSw2NS4zMSwwLDAsMSw5NiwzMCw2Ni4xLDY2LjEsMCwwLDEsMTYwLjQ5LDgyWk0zMCw5NmE2NS4zMSw2NS4zMSwwLDAsMSwuNjItOC45bDUzLjc2LDUzLjc3QTc3Ljg0LDc3Ljg0LDAsMCwwLDgyLDE2MGMwLC4xNywwLC4zMywwLC40OUE2Ni4xLDY2LjEsMCwwLDEsMzAsOTZabTY1LjUxLDc4SDk2YTc3Ljg0LDc3Ljg0LDAsMCwwLDE5LjEzLTIuMzhsNTMuNzcsNTMuNzZhNjUuMzEsNjUuMzEsMCwwLDEtOC45LjYyQTY2LjEsNjYuMSwwLDAsMSw5NS41MSwxNzRaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzgsNzhBODQsODQsMCwxLDAsNzgsMTc4LDg0LDg0LDAsMSwwLDE3OCw3OFptNDIsODJhNjAuNzUsNjAuNzUsMCwwLDEtLjM4LDYuNjVsLTQ0LTQ0YTgzLjMxLDgzLjMxLDAsMCwwLDQtMTkuMzRBNjAuMDksNjAuMDksMCwwLDEsMjIwLDE2MFptLTExOS44NC00LjE2YTYwLjA3LDYwLjA3LDAsMCwxLDU1LjY4LTU1LjY4QTYwLjA3LDYwLjA3LDAsMCwxLDEwMC4xNiwxNTUuODRabTUyLjUxLTc5LjVhODMuMzEsODMuMzEsMCwwLDAtMTkuMzQsNGwtNDQtNDRBNjAuNzUsNjAuNzUsMCwwLDEsOTYsMzYsNjAuMDksNjAuMDksMCwwLDEsMTUyLjY3LDc2LjM0Wk02NC4xOSw0NS4xNmw0Ni43Myw0Ni43M2E4NSw4NSwwLDAsMC0xOSwxOUw0NS4xNiw2NC4xOUE2MC40NSw2MC40NSwwLDAsMSw2NC4xOSw0NS4xNlpNMzYsOTZhNjAuNzUsNjAuNzUsMCwwLDEsLjM4LTYuNjVsNDQsNDRhODMuMzEsODMuMzEsMCwwLDAtNCwxOS4zNEE2MC4wOSw2MC4wOSwwLDAsMSwzNiw5NlptNjcuMzMsODMuNjZhODMuMzEsODMuMzEsMCwwLDAsMTkuMzQtNGw0NCw0NEE2MC43NSw2MC43NSwwLDAsMSwxNjAsMjIwLDYwLjA5LDYwLjA5LDAsMCwxLDEwMy4zMywxNzkuNjZabTg4LjQ4LDMxLjE4LTQ2LjczLTQ2LjczYTg1LDg1LDAsMCwwLDE5LTE5bDQ2LjczLDQ2LjczQTYwLjQ1LDYwLjQ1LDAsMCwxLDE5MS44MSwyMTAuODRaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTYwQTgwLDgwLDAsMCwxLDgxLjM2LDE3NC42NGE4MCw4MCwwLDAsMCw5My4yOC05My4yOEE4MCw4MCwwLDAsMSwyNDAsMTYwWk0xNjAsODBhODAuMjksODAuMjksMCwwLDEsMTQuNjQsMS4zNiw4MCw4MCwwLDEsMC05My4yOCw5My4yOEE4MCw4MCwwLDAsMSwxNjAsODBaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04OCwxNjBhNzMuMzcsNzMuMzcsMCwwLDAsLjQsNy42LDcyLDcyLDAsMSwxLDc5LjItNzkuMkE3My4zNyw3My4zNywwLDAsMCwxNjAsODgsNzIsNzIsMCwwLDAsODgsMTYwWm03OS42LTcxLjZBNzMuMzcsNzMuMzcsMCwwLDEsMTY4LDk2YTcyLDcyLDAsMCwxLTcyLDcyLDczLjM3LDczLjM3LDAsMCwxLTcuNi0uNCw3Miw3MiwwLDEsMCw3OS4yLTc5LjJaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTc0LjYzLDgxLjM3YTgwLDgwLDAsMSwwLTkzLjI2LDkzLjI2LDgwLDgwLDAsMSwwLDkzLjI2LTkzLjI2Wk0zMiw5NmE2NCw2NCwwLDAsMSwxMjYtMTZBODAuMDgsODAuMDgsMCwwLDAsODAuMDUsMTU4LDY0LjExLDY0LjExLDAsMCwxLDMyLDk2Wm0xMjgsMGE2NC4wNyw2NC4wNywwLDAsMS02NCw2NEE2NC4wNyw2NC4wNywwLDAsMSwxNjAsOTZabTAsMTI4QTY0LjExLDY0LjExLDAsMCwxLDk4LDE3Niw4MC4wOCw4MC4wOCwwLDAsMCwxNzYsOTgsNjQsNjQsMCwwLDEsMTYwLDIyNFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Exclude";
export { I as Exclude };
