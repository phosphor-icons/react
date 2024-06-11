/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Lightning";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTkuNzEsMTE3LjM4YTEyLDEyLDAsMCwwLTcuMjUtOC41MkwxNjEuMjgsODguMzlsMTAuNTktNzAuNjFhMTIsMTIsMCwwLDAtMjAuNjQtMTBsLTExMiwxMjBhMTIsMTIsMCwwLDAsNC4zMSwxOS4zM2w1MS4xOCwyMC40N0w4NC4xMywyMzguMjJhMTIsMTIsMCwwLDAsMjAuNjQsMTBsMTEyLTEyMEExMiwxMiwwLDAsMCwyMTkuNzEsMTE3LjM4Wk0xMTMuNiwyMDMuNTVsNi4yNy00MS43N2ExMiwxMiwwLDAsMC03LjQxLTEyLjkyTDY4Ljc0LDEzMS4zNywxNDIuNCw1Mi40NWwtNi4yNyw0MS43N2ExMiwxMiwwLDAsMCw3LjQxLDEyLjkybDQzLjcyLDE3LjQ5WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05NiwyNDBsMTYtODBMNDgsMTM2LDE2MCwxNiwxNDQsOTZsNjQsMjRaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjE1Ljc5LDExOC4xN2E4LDgsMCwwLDAtNS01LjY2TDE1My4xOCw5MC45bDE0LjY2LTczLjMzYTgsOCwwLDAsMC0xMy42OS03bC0xMTIsMTIwYTgsOCwwLDAsMCwzLDEzbDU3LjYzLDIxLjYxTDg4LjE2LDIzOC40M2E4LDgsMCwwLDAsMTMuNjksN2wxMTItMTIwQTgsOCwwLDAsMCwyMTUuNzksMTE4LjE3Wk0xMDkuMzcsMjE0bDEwLjQ3LTUyLjM4YTgsOCwwLDAsMC01LTkuMDZMNjIsMTMyLjcxbDg0LjYyLTkwLjY2TDEzNi4xNiw5NC40M2E4LDgsMCwwLDAsNSw5LjA2bDUyLjgsMTkuOFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTMuODUsMTI1LjQ2bC0xMTIsMTIwYTgsOCwwLDAsMS0xMy42OS03bDE0LjY2LTczLjMzTDQ1LjE5LDE0My40OWE4LDgsMCwwLDEtMy0xM2wxMTItMTIwYTgsOCwwLDAsMSwxMy42OSw3TDE1My4xOCw5MC45bDU3LjYzLDIxLjYxYTgsOCwwLDAsMSwzLDEyLjk1WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTMuODQsMTE4LjYzYTYsNiwwLDAsMC0zLjczLTQuMjVMMTUwLjg4LDkyLjE3bDE1LTc1YTYsNiwwLDAsMC0xMC4yNy01LjI3bC0xMTIsMTIwYTYsNiwwLDAsMCwyLjI4LDkuNzFsNTkuMjMsMjIuMjEtMTUsNzVhNiw2LDAsMCwwLDMuMTQsNi41MkE2LjA3LDYuMDcsMCwwLDAsOTYsMjQ2YTYsNiwwLDAsMCw0LjM5LTEuOTFsMTEyLTEyMEE2LDYsMCwwLDAsMjEzLjg0LDExOC42M1pNMTA2LDIyMC40NmwxMS44NS01OS4yOGE2LDYsMCwwLDAtMy43Ny02LjhsLTU1LjYtMjAuODUsOTEuNDYtOThMMTM4LjEyLDk0LjgyYTYsNiwwLDAsMCwzLjc3LDYuOGw1NS42LDIwLjg1WiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTUuNzksMTE4LjE3YTgsOCwwLDAsMC01LTUuNjZMMTUzLjE4LDkwLjlsMTQuNjYtNzMuMzNhOCw4LDAsMCwwLTEzLjY5LTdsLTExMiwxMjBhOCw4LDAsMCwwLDMsMTNsNTcuNjMsMjEuNjFMODguMTYsMjM4LjQzYTgsOCwwLDAsMCwxMy42OSw3bDExMi0xMjBBOCw4LDAsMCwwLDIxNS43OSwxMTguMTdaTTEwOS4zNywyMTRsMTAuNDctNTIuMzhhOCw4LDAsMCwwLTUtOS4wNkw2MiwxMzIuNzFsODQuNjItOTAuNjZMMTM2LjE2LDk0LjQzYTgsOCwwLDAsMCw1LDkuMDZsNTIuOCwxOS44WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTEuODksMTE5LjA5YTQsNCwwLDAsMC0yLjQ5LTIuODRsLTYwLjgxLTIyLjgsMTUuMzMtNzYuNjdhNCw0LDAsMCwwLTYuODQtMy41MWwtMTEyLDEyMGE0LDQsMCwwLDAtMSwzLjY0LDQsNCwwLDAsMCwyLjQ5LDIuODRsNjAuODEsMjIuOEw5Mi4wOCwyMzkuMjJhNCw0LDAsMCwwLDYuODQsMy41MWwxMTItMTIwQTQsNCwwLDAsMCwyMTEuODksMTE5LjA5Wk0xMDIuNjgsMjI3bDEzLjI0LTY2LjJhNCw0LDAsMCwwLTIuNTItNC41M0w1NSwxMzQuMzYsMTUzLjMyLDI5bC0xMy4yNCw2Ni4yYTQsNCwwLDAsMCwyLjUyLDQuNTNMMjAxLDEyMS42NFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Lightning";
export { I as Lightning };
