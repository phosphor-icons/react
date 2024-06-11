/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Tipi";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDIuMTEsMjA5LjUzbC05OS44Ni0xNTYsMTkuODYtMzFBMTIsMTIsMCwxLDAsMTQxLjg5LDkuNTNMMTI4LDMxLjI0LDExNC4xMSw5LjUzQTEyLDEyLDAsMCwwLDkzLjg5LDIyLjQ3bDE5Ljg2LDMxLTk5Ljg2LDE1NkExMiwxMiwwLDAsMCwyNCwyMjhIMjMyYTEyLDEyLDAsMCwwLDEwLjExLTE4LjQ3Wk05Ni4xNywyMDQsMTI4LDE1NC4yNiwxNTkuODMsMjA0Wm05Mi4xNiwwLTUwLjIyLTc4LjQ3YTEyLDEyLDAsMCwwLTIwLjIyLDBMNjcuNjcsMjA0SDQ1LjkzTDEyOCw3NS43NiwyMTAuMDcsMjA0WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQuMzIsMjE2SDcxLjY4TDEyOCwxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjM4Ljc0LDIxMS42OSwxMzcuNSw1My41bDIxLjI0LTMzLjE5YTgsOCwwLDAsMC0xMy40OC04LjYyTDEyOCwzOC42NmwtMTcuMjYtMjdhOCw4LDAsMSwwLTEzLjQ4LDguNjJMMTE4LjUsNTMuNSwxNy4yNiwyMTEuNjlBOCw4LDAsMCwwLDI0LDIyNEgyMzJhOCw4LDAsMCwwLDYuNzQtMTIuMzFaTTg2LjMsMjA4LDEyOCwxNDIuODQsMTY5LjcsMjA4Wm0xMDIuNCwwLTU0LTg0LjMxYTgsOCwwLDAsMC0xMy40OCwwTDY3LjMsMjA4SDM4LjYyTDEyOCw2OC4zNCwyMTcuMzgsMjA4WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzguNzQsMjExLjY5LDEzNy41LDUzLjVsMjEuMjQtMzMuMTlhOCw4LDAsMCwwLTEzLjQ4LTguNjJMMTI4LDM4LjY2bC0xNy4yNi0yN2E4LDgsMCwxLDAtMTMuNDgsOC42MkwxMTguNSw1My41LDE3LjI2LDIxMS42OUE4LDgsMCwwLDAsMjQsMjI0SDIzMmE4LDgsMCwwLDAsNi43NC0xMi4zMVptLTUwLTMuNjktNTQtODQuMzFhOCw4LDAsMCwwLTEzLjQ4LDBMNjcuMywyMDhIMzguNjJMMTI4LDY4LjM0LDIxNy4zOCwyMDhaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzcuMDUsMjEyLjc3LDEzNS4xMiw1My41bDIxLjkzLTM0LjI2QTYsNiwwLDEsMCwxNDcsMTIuNzdMMTI4LDQyLjM3bC0xOS0yOS42QTYsNiwwLDEsMCw5OSwxOS4yNEwxMjAuODgsNTMuNSwxOSwyMTIuNzdBNiw2LDAsMCwwLDI0LDIyMkgyMzJhNiw2LDAsMCwwLDUuMDUtOS4yM1pNODIuNjQsMjEwLDEyOCwxMzkuMTMsMTczLjM2LDIxMFptMTA1LDAtNTQuNTUtODUuMjNhNiw2LDAsMCwwLTEwLjEsMEw2OC40LDIxMEgzNUwxMjgsNjQuNjMsMjIxLDIxMFoiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzguNzQsMjExLjY5LDEzNy41LDUzLjVsMjEuMjQtMzMuMTlhOCw4LDAsMCwwLTEzLjQ4LTguNjJMMTI4LDM4LjY2bC0xNy4yNi0yN2E4LDgsMCwxLDAtMTMuNDgsOC42MkwxMTguNSw1My41LDE3LjI2LDIxMS42OUE4LDgsMCwwLDAsMjQsMjI0SDIzMmE4LDgsMCwwLDAsNi43NC0xMi4zMVpNODYuMywyMDgsMTI4LDE0Mi44NCwxNjkuNywyMDhabTEwMi40LDAtNTQtODQuMzFhOCw4LDAsMCwwLTEzLjQ4LDBMNjcuMywyMDhIMzguNjJMMTI4LDY4LjM0LDIxNy4zOCwyMDhaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzUuMzcsMjEzLjg0LDEzMi43NSw1My41bDIyLjYyLTM1LjM0YTQsNCwwLDEsMC02Ljc0LTQuMzJMMTI4LDQ2LjA4LDEwNy4zNywxMy44NGE0LDQsMCwwLDAtNi43NCw0LjMyTDEyMy4yNSw1My41LDIwLjYzLDIxMy44NEE0LDQsMCwwLDAsMjQsMjIwSDIzMmE0LDQsMCwwLDAsMy4zNy02LjE2Wk03OSwyMTJsNDktNzYuNThMMTc3LDIxMlptMTA3LjUyLDAtNTUuMTQtODYuMTZhNCw0LDAsMCwwLTYuNzQsMEw2OS40OSwyMTJIMzEuMzFMMTI4LDYwLjkyLDIyNC42OSwyMTJaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Tipi";
export { I as Tipi };
