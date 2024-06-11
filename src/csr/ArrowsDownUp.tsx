/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/ArrowsDownUp";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTcuNjYsMTcwLjM0YTgsOCwwLDAsMSwwLDExLjMybC0zMiwzMmE4LDgsMCwwLDEtMTEuMzIsMGwtMzItMzJhOCw4LDAsMCwxLDExLjMyLTExLjMyTDcyLDE4OC42OVY0OGE4LDgsMCwwLDEsMTYsMFYxODguNjlsMTguMzQtMTguMzVBOCw4LDAsMCwxLDExNy42NiwxNzAuMzRabTk2LTk2LTMyLTMyYTgsOCwwLDAsMC0xMS4zMiwwbC0zMiwzMmE4LDgsMCwwLDAsMTEuMzIsMTEuMzJMMTY4LDY3LjMxVjIwOGE4LDgsMCwwLDAsMTYsMFY2Ny4zMWwxOC4zNCwxOC4zNWE4LDgsMCwwLDAsMTEuMzItMTEuMzJaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTQuODMsMTczLjE3YTQsNCwwLDAsMSwwLDUuNjZsLTMyLDMyYTQsNCwwLDAsMS01LjY2LDBsLTMyLTMyYTQsNCwwLDAsMSw1LjY2LTUuNjZMNzYsMTk4LjM0VjQ4YTQsNCwwLDAsMSw4LDBWMTk4LjM0bDI1LjE3LTI1LjE3QTQsNCwwLDAsMSwxMTQuODMsMTczLjE3Wm05Ni05Ni0zMi0zMmE0LDQsMCwwLDAtNS42NiwwbC0zMiwzMmE0LDQsMCwwLDAsNS42Niw1LjY2TDE3Miw1Ny42NlYyMDhhNCw0LDAsMCwwLDgsMFY1Ny42NmwyNS4xNywyNS4xN2E0LDQsMCwxLDAsNS42Ni01LjY2WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTYuMjQsMTcxLjc2YTYsNiwwLDAsMSwwLDguNDhsLTMyLDMyYTYsNiwwLDAsMS04LjQ4LDBsLTMyLTMyYTYsNiwwLDAsMSw4LjQ4LTguNDhMNzQsMTkzLjUxVjQ4YTYsNiwwLDAsMSwxMiwwVjE5My41MWwyMS43Ni0yMS43NUE2LDYsMCwwLDEsMTE2LjI0LDE3MS43NlptOTYtOTYtMzItMzJhNiw2LDAsMCwwLTguNDgsMGwtMzIsMzJhNiw2LDAsMCwwLDguNDgsOC40OEwxNzAsNjIuNDlWMjA4YTYsNiwwLDAsMCwxMiwwVjYyLjQ5bDIxLjc2LDIxLjc1YTYsNiwwLDAsMCw4LjQ4LTguNDhaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjAuNDksMTY3LjUxYTEyLDEyLDAsMCwxLDAsMTdsLTMyLDMyYTEyLDEyLDAsMCwxLTE3LDBsLTMyLTMyYTEyLDEyLDAsMSwxLDE3LTE3TDY4LDE3OVY0OGExMiwxMiwwLDAsMSwyNCwwVjE3OWwxMS41MS0xMS41MkExMiwxMiwwLDAsMSwxMjAuNDksMTY3LjUxWm05Ni05Ni0zMi0zMmExMiwxMiwwLDAsMC0xNywwbC0zMiwzMmExMiwxMiwwLDAsMCwxNywxN0wxNjQsNzdWMjA4YTEyLDEyLDAsMCwwLDI0LDBWNzdsMTEuNTEsMTEuNTJhMTIsMTIsMCwwLDAsMTctMTdaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTkuMzksMTcyLjk0YTgsOCwwLDAsMS0xLjczLDguNzJsLTMyLDMyYTgsOCwwLDAsMS0xMS4zMiwwbC0zMi0zMkE4LDgsMCwwLDEsNDgsMTY4SDcyVjQ4YTgsOCwwLDAsMSwxNiwwVjE2OGgyNEE4LDgsMCwwLDEsMTE5LjM5LDE3Mi45NFptOTQuMjctOTguNi0zMi0zMmE4LDgsMCwwLDAtMTEuMzIsMGwtMzIsMzJBOCw4LDAsMCwwLDE0NCw4OGgyNFYyMDhhOCw4LDAsMCwwLDE2LDBWODhoMjRhOCw4LDAsMCwwLDUuNjYtMTMuNjZaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsNDhWMjA4SDgwVjQ4WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTExNy42NiwxNzAuMzRhOCw4LDAsMCwxLDAsMTEuMzJsLTMyLDMyYTgsOCwwLDAsMS0xMS4zMiwwbC0zMi0zMmE4LDgsMCwwLDEsMTEuMzItMTEuMzJMNzIsMTg4LjY5VjQ4YTgsOCwwLDAsMSwxNiwwVjE4OC42OWwxOC4zNC0xOC4zNUE4LDgsMCwwLDEsMTE3LjY2LDE3MC4zNFptOTYtOTYtMzItMzJhOCw4LDAsMCwwLTExLjMyLDBsLTMyLDMyYTgsOCwwLDAsMCwxMS4zMiwxMS4zMkwxNjgsNjcuMzFWMjA4YTgsOCwwLDAsMCwxNiwwVjY3LjMxbDE4LjM0LDE4LjM1YTgsOCwwLDAsMCwxMS4zMi0xMS4zMloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ArrowsDownUp";
export { I as ArrowsDownUp };
