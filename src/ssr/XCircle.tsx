/* GENERATED FILE */
import * as React from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/XCircle";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjUuNjYsMTAxLjY2LDEzOS4zMSwxMjhsMjYuMzUsMjYuMzRhOCw4LDAsMCwxLTExLjMyLDExLjMyTDEyOCwxMzkuMzFsLTI2LjM0LDI2LjM1YTgsOCwwLDAsMS0xMS4zMi0xMS4zMkwxMTYuNjksMTI4LDkwLjM0LDEwMS42NmE4LDgsMCwwLDEsMTEuMzItMTEuMzJMMTI4LDExNi42OWwyNi4zNC0yNi4zNWE4LDgsMCwwLDEsMTEuMzIsMTEuMzJaTTIzMiwxMjhBMTA0LDEwNCwwLDEsMSwxMjgsMjQsMTA0LjExLDEwNC4xMSwwLDAsMSwyMzIsMTI4Wm0tMTYsMGE4OCw4OCwwLDEsMC04OCw4OEE4OC4xLDg4LjEsMCwwLDAsMjE2LDEyOFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjIuODMsOTguODMsMTMzLjY2LDEyOGwyOS4xNywyOS4xN2E0LDQsMCwwLDEtNS42Niw1LjY2TDEyOCwxMzMuNjYsOTguODMsMTYyLjgzYTQsNCwwLDAsMS01LjY2LTUuNjZMMTIyLjM0LDEyOCw5My4xNyw5OC44M2E0LDQsMCwwLDEsNS42Ni01LjY2TDEyOCwxMjIuMzRsMjkuMTctMjkuMTdhNCw0LDAsMSwxLDUuNjYsNS42NlpNMjI4LDEyOEExMDAsMTAwLDAsMSwxLDEyOCwyOCwxMDAuMTEsMTAwLjExLDAsMCwxLDIyOCwxMjhabS04LDBhOTIsOTIsMCwxLDAtOTIsOTJBOTIuMSw5Mi4xLDAsMCwwLDIyMCwxMjhaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjQuMjQsMTAwLjI0LDEzNi40OCwxMjhsMjcuNzYsMjcuNzZhNiw2LDAsMSwxLTguNDgsOC40OEwxMjgsMTM2LjQ4bC0yNy43NiwyNy43NmE2LDYsMCwwLDEtOC40OC04LjQ4TDExOS41MiwxMjgsOTEuNzYsMTAwLjI0YTYsNiwwLDAsMSw4LjQ4LTguNDhMMTI4LDExOS41MmwyNy43Ni0yNy43NmE2LDYsMCwwLDEsOC40OCw4LjQ4Wk0yMzAsMTI4QTEwMiwxMDIsMCwxLDEsMTI4LDI2LDEwMi4xMiwxMDIuMTIsMCwwLDEsMjMwLDEyOFptLTEyLDBhOTAsOTAsMCwxLDAtOTAsOTBBOTAuMSw5MC4xLDAsMCwwLDIxOCwxMjhaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjguNDksMTA0LjQ5LDE0NSwxMjhsMjMuNTIsMjMuNTFhMTIsMTIsMCwwLDEtMTcsMTdMMTI4LDE0NWwtMjMuNTEsMjMuNTJhMTIsMTIsMCwwLDEtMTctMTdMMTExLDEyOCw4Ny41MSwxMDQuNDlhMTIsMTIsMCwwLDEsMTctMTdMMTI4LDExMWwyMy41MS0yMy41MmExMiwxMiwwLDAsMSwxNywxN1pNMjM2LDEyOEExMDgsMTA4LDAsMSwxLDEyOCwyMCwxMDguMTIsMTA4LjEyLDAsMCwxLDIzNiwxMjhabS0yNCwwYTg0LDg0LDAsMSwwLTg0LDg0QTg0LjA5LDg0LjA5LDAsMCwwLDIxMiwxMjhaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wm0zNy42NiwxMzAuMzRhOCw4LDAsMCwxLTExLjMyLDExLjMyTDEyOCwxMzkuMzFsLTI2LjM0LDI2LjM1YTgsOCwwLDAsMS0xMS4zMi0xMS4zMkwxMTYuNjksMTI4LDkwLjM0LDEwMS42NmE4LDgsMCwwLDEsMTEuMzItMTEuMzJMMTI4LDExNi42OWwyNi4zNC0yNi4zNWE4LDgsMCwwLDEsMTEuMzIsMTEuMzJMMTM5LjMxLDEyOFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTI4YTk2LDk2LDAsMSwxLTk2LTk2QTk2LDk2LDAsMCwxLDIyNCwxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTY1LjY2LDEwMS42NiwxMzkuMzEsMTI4bDI2LjM1LDI2LjM0YTgsOCwwLDAsMS0xMS4zMiwxMS4zMkwxMjgsMTM5LjMxbC0yNi4zNCwyNi4zNWE4LDgsMCwwLDEtMTEuMzItMTEuMzJMMTE2LjY5LDEyOCw5MC4zNCwxMDEuNjZhOCw4LDAsMCwxLDExLjMyLTExLjMyTDEyOCwxMTYuNjlsMjYuMzQtMjYuMzVhOCw4LDAsMCwxLDExLjMyLDExLjMyWk0yMzIsMTI4QTEwNCwxMDQsMCwxLDEsMTI4LDI0LDEwNC4xMSwxMDQuMTEsMCwwLDEsMjMyLDEyOFptLTE2LDBhODgsODgsMCwxLDAtODgsODhBODguMSw4OC4xLDAsMCwwLDIxNiwxMjhaIi8+PC9zdmc+)
 */
const I: Icon = React.forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "XCircleIcon";

/** @deprecated Use XCircleIcon */
export const XCircle = I;
export { I as XCircleIcon };
