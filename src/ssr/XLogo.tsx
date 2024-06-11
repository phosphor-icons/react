/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/XLogo";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTguMTIsMjA5LjU2bC02MS05NS44LDU5LjcyLTY1LjY5YTEyLDEyLDAsMCwwLTE3Ljc2LTE2LjE0TDE0My44MSw5Mi43NywxMDYuMTIsMzMuNTZBMTIsMTIsMCwwLDAsOTYsMjhINDhBMTIsMTIsMCwwLDAsMzcuODgsNDYuNDRsNjEsOTUuOEwzOS4xMiwyMDcuOTNhMTIsMTIsMCwxLDAsMTcuNzYsMTYuMTRsNTUuMzEtNjAuODQsMzcuNjksNTkuMjFBMTIsMTIsMCwwLDAsMTYwLDIyOGg0OGExMiwxMiwwLDAsMCwxMC4xMi0xOC40NFpNMTY2LjU5LDIwNCw2OS44Niw1Mkg4OS40MWw5Ni43MywxNTJaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjE2SDE2MEw0OCw0MEg5NloiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMTQuNzUsMjExLjcxbC02Mi42LTk4LjM4LDYxLjc3LTY3Ljk1YTgsOCwwLDAsMC0xMS44NC0xMC43NkwxNDMuMjQsOTkuMzQsMTAyLjc1LDM1LjcxQTgsOCwwLDAsMCw5NiwzMkg0OGE4LDgsMCwwLDAtNi43NSwxMi4zbDYyLjYsOTguMzctNjEuNzcsNjhhOCw4LDAsMSwwLDExLjg0LDEwLjc2bDU4Ljg0LTY0LjcyLDQwLjQ5LDYzLjYzQTgsOCwwLDAsMCwxNjAsMjI0aDQ4YTgsOCwwLDAsMCw2Ljc1LTEyLjI5Wk0xNjQuMzksMjA4LDYyLjU3LDQ4aDI5TDE5My40MywyMDhaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTUsMjE5Ljg1YTgsOCwwLDAsMS03LDQuMTVIMTYwYTgsOCwwLDAsMS02Ljc1LTMuNzFsLTQwLjQ5LTYzLjYzTDUzLjkyLDIyMS4zOGE4LDgsMCwwLDEtMTEuODQtMTAuNzZsNjEuNzctNjhMNDEuMjUsNDQuM0E4LDgsMCwwLDEsNDgsMzJIOTZhOCw4LDAsMCwxLDYuNzUsMy43MWw0MC40OSw2My42Myw1OC44NC02NC43MmE4LDgsMCwwLDEsMTEuODQsMTAuNzZsLTYxLjc3LDY3Ljk1LDYyLjYsOTguMzhBOCw4LDAsMCwxLDIxNSwyMTkuODVaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTMuMDYsMjEyLjc4bC02My40Mi05OS42NkwyMTIuNDQsNDRBNiw2LDAsMSwwLDIwMy41NiwzNkwxNDMsMTAyLjYybC00MS45LTY1Ljg0QTYsNiwwLDAsMCw5NiwzNEg0OGE2LDYsMCwwLDAtNS4wNiw5LjIybDYzLjQyLDk5LjY2TDQzLjU2LDIxMkE2LDYsMCwwLDAsNTIuNDQsMjIwTDExMywxNTMuMzhsNDEuOSw2NS44NEE2LDYsMCwwLDAsMTYwLDIyMmg0OGE2LDYsMCwwLDAsNS4wNi05LjIyWk0xNjMuMjksMjEwLDU4LjkzLDQ2SDkyLjcxTDE5Ny4wNywyMTBaIi8+PC9zdmc+)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTQuNzUsMjExLjcxbC02Mi42LTk4LjM4LDYxLjc3LTY3Ljk1YTgsOCwwLDAsMC0xMS44NC0xMC43NkwxNDMuMjQsOTkuMzQsMTAyLjc1LDM1LjcxQTgsOCwwLDAsMCw5NiwzMkg0OGE4LDgsMCwwLDAtNi43NSwxMi4zbDYyLjYsOTguMzctNjEuNzcsNjhhOCw4LDAsMSwwLDExLjg0LDEwLjc2bDU4Ljg0LTY0LjcyLDQwLjQ5LDYzLjYzQTgsOCwwLDAsMCwxNjAsMjI0aDQ4YTgsOCwwLDAsMCw2Ljc1LTEyLjI5Wk0xNjQuMzksMjA4LDYyLjU3LDQ4aDI5TDE5My40MywyMDhaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTEuMzcsMjEzLjg1LDE0Ny4xMywxMTIuOSwyMTEsNDIuNjlBNCw0LDAsMCwwLDIwNSwzNy4zMUwxNDIuNjgsMTA1LjksOTkuMzgsMzcuODVBNCw0LDAsMCwwLDk2LDM2SDQ4YTQsNCwwLDAsMC0zLjM3LDYuMTVMMTA4Ljg3LDE0My4xLDQ1LDIxMy4zMUE0LDQsMCwxLDAsNTEsMjE4LjY5bDYyLjM2LTY4LjU5LDQzLjMsNjguMDVBNCw0LDAsMCwwLDE2MCwyMjBoNDhhNCw0LDAsMCwwLDMuMzctNi4xNVpNMTYyLjIsMjEyLDU1LjI5LDQ0SDkzLjhMMjAwLjcxLDIxMloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "XLogo";
export { I as XLogo };
