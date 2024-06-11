/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/SpinnerGap";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDAsMzJWNjRhMTIsMTIsMCwwLDEtMjQsMFYzMmExMiwxMiwwLDAsMSwyNCwwWm04NCw4NEgxOTJhMTIsMTIsMCwwLDAsMCwyNGgzMmExMiwxMiwwLDAsMCwwLTI0Wm0tNDIuMjYsNDguNzdhMTIsMTIsMCwxLDAtMTcsMTdsMjIuNjMsMjIuNjNhMTIsMTIsMCwwLDAsMTctMTdaTTEyOCwxODBhMTIsMTIsMCwwLDAtMTIsMTJ2MzJhMTIsMTIsMCwwLDAsMjQsMFYxOTJBMTIsMTIsMCwwLDAsMTI4LDE4MFpNNzQuMjYsMTY0Ljc3LDUxLjYzLDE4Ny40YTEyLDEyLDAsMCwwLDE3LDE3bDIyLjYzLTIyLjYzYTEyLDEyLDAsMSwwLTE3LTE3Wk03NiwxMjhhMTIsMTIsMCwwLDAtMTItMTJIMzJhMTIsMTIsMCwwLDAsMCwyNEg2NEExMiwxMiwwLDAsMCw3NiwxMjhaTTY4LjYsNTEuNjNhMTIsMTIsMCwxLDAtMTcsMTdMNzQuMjYsOTEuMjNhMTIsMTIsMCwwLDAsMTctMTdaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTI4YTk2LDk2LDAsMSwxLTk2LTk2QTk2LDk2LDAsMCwxLDIyNCwxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTM2LDMyVjY0YTgsOCwwLDAsMS0xNiwwVjMyYTgsOCwwLDAsMSwxNiwwWm04OCw4OEgxOTJhOCw4LDAsMCwwLDAsMTZoMzJhOCw4LDAsMCwwLDAtMTZabS00NS4wOSw0Ny42YTgsOCwwLDAsMC0xMS4zMSwxMS4zMWwyMi42MiwyMi42M2E4LDgsMCwwLDAsMTEuMzItMTEuMzJaTTEyOCwxODRhOCw4LDAsMCwwLTgsOHYzMmE4LDgsMCwwLDAsMTYsMFYxOTJBOCw4LDAsMCwwLDEyOCwxODRaTTc3LjA5LDE2Ny42LDU0LjQ2LDE5MC4yMmE4LDgsMCwwLDAsMTEuMzIsMTEuMzJMODguNCwxNzguOTFBOCw4LDAsMCwwLDc3LjA5LDE2Ny42Wk03MiwxMjhhOCw4LDAsMCwwLTgtOEgzMmE4LDgsMCwwLDAsMCwxNkg2NEE4LDgsMCwwLDAsNzIsMTI4Wk02NS43OCw1NC40NkE4LDgsMCwwLDAsNTQuNDYsNjUuNzhMNzcuMDksODguNEE4LDgsMCwwLDAsODguNCw3Ny4wOVoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wk00OCwxMzZhOCw4LDAsMCwxLDAtMTZINzJhOCw4LDAsMCwxLDAsMTZabTQ2LjA2LDM3LjI1LTE3LDE3YTgsOCwwLDAsMS0xMS4zMi0xMS4zMmwxNy0xN2E4LDgsMCwwLDEsMTEuMzEsMTEuMzFabTAtNzkuMTlhOCw4LDAsMCwxLTExLjMxLDBsLTE3LTE3QTgsOCwwLDAsMSw3Ny4wOSw2NS43N2wxNywxN0E4LDgsMCwwLDEsOTQuMDYsOTQuMDZaTTEzNiwyMDhhOCw4LDAsMCwxLTE2LDBWMTg0YTgsOCwwLDAsMSwxNiwwWm0wLTEzNmE4LDgsMCwwLDEtMTYsMFY0OGE4LDgsMCwwLDEsMTYsMFptNTQuMjMsMTE4LjIzYTgsOCwwLDAsMS0xMS4zMiwwbC0xNy0xN2E4LDgsMCwwLDEsMTEuMzEtMTEuMzFsMTcsMTdBOCw4LDAsMCwxLDE5MC4yMywxOTAuMjNaTTIwOCwxMzZIMTg0YTgsOCwwLDAsMSwwLTE2aDI0YTgsOCwwLDAsMSwwLDE2WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzQsMzJWNjRhNiw2LDAsMCwxLTEyLDBWMzJhNiw2LDAsMCwxLDEyLDBabTkwLDkwSDE5MmE2LDYsMCwwLDAsMCwxMmgzMmE2LDYsMCwwLDAsMC0xMlptLTQ2LjUsNDdBNiw2LDAsMCwwLDE2OSwxNzcuNWwyMi42MywyMi42MmE2LDYsMCwwLDAsOC40OC04LjQ4Wk0xMjgsMTg2YTYsNiwwLDAsMC02LDZ2MzJhNiw2LDAsMCwwLDEyLDBWMTkyQTYsNiwwLDAsMCwxMjgsMTg2Wk03OC41LDE2OSw1NS44OCwxOTEuNjRhNiw2LDAsMSwwLDguNDgsOC40OEw4NywxNzcuNUE2LDYsMCwxLDAsNzguNSwxNjlaTTcwLDEyOGE2LDYsMCwwLDAtNi02SDMyYTYsNiwwLDAsMCwwLDEySDY0QTYsNiwwLDAsMCw3MCwxMjhaTTY0LjM2LDU1Ljg4YTYsNiwwLDAsMC04LjQ4LDguNDhMNzguNSw4N0E2LDYsMCwxLDAsODcsNzguNVoiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYsMzJWNjRhOCw4LDAsMCwxLTE2LDBWMzJhOCw4LDAsMCwxLDE2LDBabTg4LDg4SDE5MmE4LDgsMCwwLDAsMCwxNmgzMmE4LDgsMCwwLDAsMC0xNlptLTQ1LjA5LDQ3LjZhOCw4LDAsMCwwLTExLjMxLDExLjMxbDIyLjYyLDIyLjYzYTgsOCwwLDAsMCwxMS4zMi0xMS4zMlpNMTI4LDE4NGE4LDgsMCwwLDAtOCw4djMyYTgsOCwwLDAsMCwxNiwwVjE5MkE4LDgsMCwwLDAsMTI4LDE4NFpNNzcuMDksMTY3LjYsNTQuNDYsMTkwLjIyYTgsOCwwLDAsMCwxMS4zMiwxMS4zMkw4OC40LDE3OC45MUE4LDgsMCwwLDAsNzcuMDksMTY3LjZaTTcyLDEyOGE4LDgsMCwwLDAtOC04SDMyYTgsOCwwLDAsMCwwLDE2SDY0QTgsOCwwLDAsMCw3MiwxMjhaTTY1Ljc4LDU0LjQ2QTgsOCwwLDAsMCw1NC40Niw2NS43OEw3Ny4wOSw4OC40QTgsOCwwLDAsMCw4OC40LDc3LjA5WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzIsMzJWNjRhNCw0LDAsMCwxLTgsMFYzMmE0LDQsMCwwLDEsOCwwWm05Miw5MkgxOTJhNCw0LDAsMCwwLDAsOGgzMmE0LDQsMCwwLDAsMC04Wm0tNDcuOTIsNDYuNDNhNCw0LDAsMSwwLTUuNjUsNS42NWwyMi42MiwyMi42M2E0LDQsMCwwLDAsNS42Ni01LjY2Wk0xMjgsMTg4YTQsNCwwLDAsMC00LDR2MzJhNCw0LDAsMCwwLDgsMFYxOTJBNCw0LDAsMCwwLDEyOCwxODhaTTc5LjkyLDE3MC40Myw1Ny4yOSwxOTMuMDVBNCw0LDAsMCwwLDYzLDE5OC43MWwyMi42Mi0yMi42M2E0LDQsMCwxLDAtNS42NS01LjY1Wk02OCwxMjhhNCw0LDAsMCwwLTQtNEgzMmE0LDQsMCwwLDAsMCw4SDY0QTQsNCwwLDAsMCw2OCwxMjhaTTYzLDU3LjI5QTQsNCwwLDAsMCw1Ny4yOSw2M0w3OS45Miw4NS41N2E0LDQsMCwxLDAsNS42NS01LjY1WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "SpinnerGap";
export { I as SpinnerGap };
