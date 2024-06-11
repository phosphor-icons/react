/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/PaperPlaneRight";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzMuODYsMTEwLjQ4LDY1LjgsMTQuNThBMjAsMjAsMCwwLDAsMzcuMTUsMzguNjRMNjcuMzMsMTI4LDM3LjE1LDIxNy4zNkEyMCwyMCwwLDAsMCw1NiwyNDRhMjAuMSwyMC4xLDAsMCwwLDkuODEtMi41OGwuMDktLjA2LDE2OC05Ni4wN2EyMCwyMCwwLDAsMCwwLTM0LjgxWk02My4xOSwyMTUuMjYsODguNjEsMTQwSDE0NGExMiwxMiwwLDAsMCwwLTI0SDg4LjYxTDYzLjE4LDQwLjcybDE1Mi43Niw4Ny4xN1oiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjcuOTEsMTM0Ljg2LDU5LjkzLDIzMWE4LDgsMCwwLDEtMTEuNDQtOS42N0w4MCwxMjgsNDguNDksMzQuNzJhOCw4LDAsMCwxLDExLjQ0LTkuNjdsMTY4LDk1Ljg1QTgsOCwwLDAsMSwyMjcuOTEsMTM0Ljg2WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIzMS44NywxMTRsLTE2OC05NS44OUExNiwxNiwwLDAsMCw0MC45MiwzNy4zNEw3MS41NSwxMjgsNDAuOTIsMjE4LjY3QTE2LDE2LDAsMCwwLDU2LDI0MGExNi4xNSwxNi4xNSwwLDAsMCw3LjkzLTIuMWwxNjcuOTItOTYuMDVhMTYsMTYsMCwwLDAsLjA1LTI3Ljg5Wk01NiwyMjRhLjU2LjU2LDAsMCwwLDAtLjEyTDg1Ljc0LDEzNkgxNDRhOCw4LDAsMCwwLDAtMTZIODUuNzRMNTYuMDYsMzIuMTZBLjQ2LjQ2LDAsMCwwLDU2LDMybDE2OCw5NS44M1oiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTI3Ljg5YTE2LDE2LDAsMCwxLTguMTgsMTRMNjMuOSwyMzcuOUExNi4xNSwxNi4xNSwwLDAsMSw1NiwyNDBhMTYsMTYsMCwwLDEtMTUtMjEuMzNsMjctNzkuOTVBNCw0LDAsMCwxLDcxLjcyLDEzNkgxNDRhOCw4LDAsMCwwLDgtOC41Myw4LjE5LDguMTksMCwwLDAtOC4yNi03LjQ3aC03MmE0LDQsMCwwLDEtMy43OS0yLjcybC0yNy03OS45NEExNiwxNiwwLDAsMSw2My44NCwxOC4wN2wxNjgsOTUuODlBMTYsMTYsMCwwLDEsMjQwLDEyNy44OVoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAuODgsMTE1LjY5bC0xNjgtOTUuODhhMTQsMTQsMCwwLDAtMjAsMTYuODdMNzMuNjYsMTI4LDQyLjgxLDIxOS4zM0ExNCwxNCwwLDAsMCw1NiwyMzhhMTQuMTUsMTQuMTUsMCwwLDAsNi45My0xLjgzTDIzMC44NCwxNDAuMWExNCwxNCwwLDAsMCwwLTI0LjQxWm0tNS45NSwxNEw1NywyMjUuNzNhMiwyLDAsMCwxLTIuODYtMi40Mi40Mi40MiwwLDAsMCwwLS4xTDg0LjMsMTM0SDE0NGE2LDYsMCwwLDAsMC0xMkg4NC4zTDU0LjE3LDMyLjhhLjMuMywwLDAsMCwwLS4xLDEuODcsMS44NywwLDAsMSwuNi0yLjJBMS44NSwxLjg1LDAsMCwxLDU3LDMwLjI1bDE2OCw5NS44OWExLjkzLDEuOTMsMCwwLDEsMSwxLjc0QTIsMiwwLDAsMSwyMjQuOTMsMTI5LjY2WiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzEuODcsMTE0bC0xNjgtOTUuODlBMTYsMTYsMCwwLDAsNDAuOTIsMzcuMzRMNzEuNTUsMTI4LDQwLjkyLDIxOC42N0ExNiwxNiwwLDAsMCw1NiwyNDBhMTYuMTUsMTYuMTUsMCwwLDAsNy45My0yLjFsMTY3LjkyLTk2LjA1YTE2LDE2LDAsMCwwLC4wNS0yNy44OVpNNTYsMjI0YS41Ni41NiwwLDAsMCwwLS4xMkw4NS43NCwxMzZIMTQ0YTgsOCwwLDAsMCwwLTE2SDg1Ljc0TDU2LjA2LDMyLjE2QS40Ni40NiwwLDAsMCw1NiwzMmwxNjgsOTUuODNaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjkuODksMTE3LjQzbC0xNjgtOTUuODhBMTIsMTIsMCwwLDAsNDQuNywzNmwzMS4wOCw5Mkw0NC43MSwyMjBBMTIsMTIsMCwwLDAsNTYsMjM2YTEyLjEzLDEyLjEzLDAsMCwwLDUuOTMtMS41N2wxNjcuOTQtOTYuMDhhMTIsMTIsMCwwLDAsMC0yMC45MlptLTQsMTRMNTgsMjI3LjQ3YTQsNCwwLDAsMS01LjcyLTQuODNsMC0uMDdMODIuODcsMTMySDE0NGE0LDQsMCwwLDAsMC04SDgyLjg3TDUyLjI2LDMzLjM3QTMuODksMy44OSwwLDAsMSw1My40NCwyOSw0LjEzLDQuMTMsMCwwLDEsNTYsMjhhMy44OCwzLjg4LDAsMCwxLDEuOTMuNTRsMTY4LDk1Ljg3YTQsNCwwLDAsMSwwLDdaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "PaperPlaneRight";
export { I as PaperPlaneRight };
