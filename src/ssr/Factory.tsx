/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Factory";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTYsMTc2YTgsOCwwLDAsMS04LDhIODBhOCw4LDAsMCwxLDAtMTZoMjhBOCw4LDAsMCwxLDExNiwxNzZabTYwLThIMTQ4YTgsOCwwLDAsMCwwLDE2aDI4YTgsOCwwLDAsMCwwLTE2Wm02NCw0OGE4LDgsMCwwLDEtOCw4SDI0YTgsOCwwLDAsMSwwLTE2aDhWODhhOCw4LDAsMCwxLDEyLjgtNi40TDk2LDEyMFY4OGE4LDgsMCwwLDEsMTIuOC02LjRsMzguNzQsMjkuMDVMMTU5LjEsMjkuNzRBMTYuMDgsMTYuMDgsMCwwLDEsMTc0Ljk0LDE2aDE4LjEyQTE2LjA4LDE2LjA4LDAsMCwxLDIwOC45LDI5Ljc0bDE1LDEwNS4xM3MuMDguNzguMDgsMS4xM3Y3Mmg4QTgsOCwwLDAsMSwyNDAsMjE2Wm0tNzcuODYtOTQuNCw4LjUzLDYuNGgzNi4xMUwxOTMuMDYsMzJIMTc0Ljk0Wk00OCwyMDhIMjA4VjE0NEgxNjhhOCw4LDAsMCwxLTQuOC0xLjZsLTE0LjQtMTAuOCwwLDBMMTEyLDEwNHYzMmE4LDgsMCwwLDEtMTIuOCw2LjRMNDgsMTA0WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTIsMTc2YTQsNCwwLDAsMS00LDRIODBhNCw0LDAsMCwxLDAtOGgyOEE0LDQsMCwwLDEsMTEyLDE3NlptNjQtNEgxNDhhNCw0LDAsMCwwLDAsOGgyOGE0LDQsMCwwLDAsMC04Wm02MCw0NGE0LDQsMCwwLDEtNCw0SDI0YTQsNCwwLDAsMSwwLThIMzZWODhhNCw0LDAsMCwxLDYuNC0zLjJMMTAwLDEyOFY4OGE0LDQsMCwwLDEsNi40LTMuMmw0NC4xNCwzMy4xMUwxNjMuMDYsMzAuM0ExMi4wNiwxMi4wNiwwLDAsMSwxNzQuOTQsMjBoMTguMTJhMTIuMDYsMTIuMDYsMCwwLDEsMTEuODgsMTAuM2wxNSwxMDUuMTNhMy42NCwzLjY0LDAsMCwxLDAsLjU3djc2aDEyQTQsNCwwLDAsMSwyMzYsMjE2Wm0tNzguMTYtOTIuNjJMMTY5LjMzLDEzMmg0Mi4wNkwxOTcsMzEuNDNhNCw0LDAsMCwwLTQtMy40M0gxNzQuOTRhNCw0LDAsMCwwLTQsMy40M1pNNDQsMjEySDIxMlYxNDBIMTY4YTQsNCwwLDAsMS0yLjQtLjhMMTA4LDk2djQwYTQsNCwwLDAsMS02LjQsMy4yTDQ0LDk2WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTQsMTc2YTYsNiwwLDAsMS02LDZIODBhNiw2LDAsMCwxLDAtMTJoMjhBNiw2LDAsMCwxLDExNCwxNzZabTYyLTZIMTQ4YTYsNiwwLDAsMCwwLDEyaDI4YTYsNiwwLDAsMCwwLTEyWm02Miw0NmE2LDYsMCwwLDEtNiw2SDI0YTYsNiwwLDAsMSwwLTEySDM0Vjg4YTYsNiwwLDAsMSw5LjYtNC44TDk4LDEyNFY4OGE2LDYsMCwwLDEsOS42LTQuOEwxNDksMTE0LjI4bDEyLTg0LjI2YTE0LjA3LDE0LjA3LDAsMCwxLDEzLjg2LTEyaDE4LjEyYTE0LjA3LDE0LjA3LDAsMCwxLDEzLjg2LDEybDE1LDEwNS4xM3MuMDYuNTkuMDYuODV2NzRoMTBBNiw2LDAsMCwxLDIzOCwyMTZabS03OC05My41MUwxNzAsMTMwaDM5LjA4TDE5NSwzMS43MmEyLDIsMCwwLDAtMi0xLjcySDE3NC45NGEyLDIsMCwwLDAtMiwxLjcyWk00NiwyMTBIMjEwVjE0MkgxNjhhNiw2LDAsMCwxLTMuNi0xLjJMMTUwLDEzMGwwLDBMMTEwLDEwMHYzNmE2LDYsMCwwLDEtOS42LDQuOEw0NiwxMDBaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjAsMTc2YTEyLDEyLDAsMCwxLTEyLDEySDgwYTEyLDEyLDAsMCwxLDAtMjRoMjhBMTIsMTIsMCwwLDEsMTIwLDE3NlptNTYtMTJIMTQ4YTEyLDEyLDAsMCwwLDAsMjRoMjhhMTIsMTIsMCwwLDAsMC0yNFptNjgsNTJhMTIsMTIsMCwwLDEtMTIsMTJIMjRhMTIsMTIsMCwwLDEsMC0yNGg0Vjg4YTEyLDEyLDAsMCwxLDE5LjItOS42TDkyLDExMlY4OGExMiwxMiwwLDAsMSwxOS4yLTkuNmwzMy4zMywyNSwxMC42MS03NC4yM0EyMC4xLDIwLjEsMCwwLDEsMTc0Ljk0LDEyaDE4LjEyYTIwLjEsMjAuMSwwLDAsMSwxOS44LDE3LjE3bDE1LDEwNS4xM2MwLC4xLjEyLDEuMzQuMTIsMS43djY4aDRBMTIsMTIsMCwwLDEsMjQ0LDIxNlptLTc3LjU3LTk2LjE3TDE3MiwxMjRoMzAuMTZMMTg5LjU5LDM2SDE3OC40MVpNNTIsMjA0SDIwNFYxNDhIMTY4YTEyLDEyLDAsMCwxLTcuMi0yLjRsLTE0LjM4LTEwLjc4LS4wNiwwTDExNiwxMTJ2MjRhMTIsMTIsMCwwLDEtMTkuMiw5LjZMNTIsMTEyWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMjA4aC04VjEzNmMwLS4wNSwwLS4wOSwwLS4xNHMwLS4yOSwwLS40MywwLS4yOCwwLS40MWEuNzYuNzYsMCwwLDAsMC0uMTVsLTE1LTEwNS4xM0ExNi4wOCwxNi4wOCwwLDAsMCwxOTMuMDYsMTZIMTc0Ljk0QTE2LjA4LDE2LjA4LDAsMCwwLDE1OS4xLDI5Ljc0bC0xMS41Niw4MC45MUwxMDguOCw4MS42QTgsOCwwLDAsMCw5Niw4OHYzMkw0NC44LDgxLjZBOCw4LDAsMCwwLDMyLDg4VjIwOEgyNGE4LDgsMCwwLDAsMCwxNkgyMzJhOCw4LDAsMCwwLDAtMTZaTTEwOCwxODRIODBhOCw4LDAsMCwxLDAtMTZoMjhhOCw4LDAsMCwxLDAsMTZabTY4LDBIMTQ4YTgsOCwwLDAsMSwwLTE2aDI4YTgsOCwwLDAsMSwwLDE2Wm0tNS4zMy01Ni04LjUzLTYuNEwxNzQuOTQsMzJoMTguMTJsMTMuNzIsOTZaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTM2djgwSDQwVjg4bDY0LDQ4Vjg4bDY0LDQ4WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTExNiwxNzZhOCw4LDAsMCwxLTgsOEg4MGE4LDgsMCwwLDEsMC0xNmgyOEE4LDgsMCwwLDEsMTE2LDE3NlptNjAtOEgxNDhhOCw4LDAsMCwwLDAsMTZoMjhhOCw4LDAsMCwwLDAtMTZabTY0LDQ4YTgsOCwwLDAsMS04LDhIMjRhOCw4LDAsMCwxLDAtMTZoOFY4OGE4LDgsMCwwLDEsMTIuOC02LjRMOTYsMTIwVjg4YTgsOCwwLDAsMSwxMi44LTYuNGwzOC43NCwyOS4wNUwxNTkuMSwyOS43NEExNi4wOCwxNi4wOCwwLDAsMSwxNzQuOTQsMTZoMTguMTJBMTYuMDgsMTYuMDgsMCwwLDEsMjA4LjksMjkuNzRsMTUsMTA1LjEzcy4wOC43OC4wOCwxLjEzdjcyaDhBOCw4LDAsMCwxLDI0MCwyMTZabS03Ny44Ni05NC40LDguNTMsNi40aDM2LjExTDE5My4wNiwzMkgxNzQuOTRaTTQ4LDIwOEgyMDhWMTQ0SDE2OGE4LDgsMCwwLDEtNC44LTEuNmwtMTQuNC0xMC44LDAsMEwxMTIsMTA0djMyYTgsOCwwLDAsMS0xMi44LDYuNEw0OCwxMDRaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Factory";
export { I as Factory };
