/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Queue";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yOCw2NEExMiwxMiwwLDAsMSw0MCw1MkgyMTZhMTIsMTIsMCwwLDEsMCwyNEg0MEExMiwxMiwwLDAsMSwyOCw2NFptMTA0LDUySDQwYTEyLDEyLDAsMCwwLDAsMjRoOTJhMTIsMTIsMCwwLDAsMC0yNFptMCw2NEg0MGExMiwxMiwwLDAsMCwwLDI0aDkyYTEyLDEyLDAsMCwwLDAtMjRabTEyMC0yMGExMiwxMiwwLDAsMS01LjY0LDEwLjE4bC02NCw0MEExMiwxMiwwLDAsMSwxNjQsMjAwVjEyMGExMiwxMiwwLDAsMSwxOC4zNi0xMC4xOGw2NCw0MEExMiwxMiwwLDAsMSwyNTIsMTYwWm0tMzQuNjQsMEwxODgsMTQxLjY1djM2LjdaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTYwbC02NCw0MFYxMjBaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMzIsNjRhOCw4LDAsMCwxLDgtOEgyMTZhOCw4LDAsMCwxLDAsMTZINDBBOCw4LDAsMCwxLDMyLDY0Wm0xMDQsNTZINDBhOCw4LDAsMCwwLDAsMTZoOTZhOCw4LDAsMCwwLDAtMTZabTAsNjRINDBhOCw4LDAsMCwwLDAsMTZoOTZhOCw4LDAsMCwwLDAtMTZabTExMi0yNGE4LDgsMCwwLDEtMy43Niw2Ljc4bC02NCw0MEE4LDgsMCwwLDEsMTY4LDIwMFYxMjBhOCw4LDAsMCwxLDEyLjI0LTYuNzhsNjQsNDBBOCw4LDAsMCwxLDI0OCwxNjBabS0yMy4wOSwwTDE4NCwxMzQuNDN2NTEuMTRaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTY0LDcySDE5MmE4LDgsMCwwLDEsMCwxNkg2NGE4LDgsMCwwLDEsMC0xNlptNDAsMTEySDY0YTgsOCwwLDAsMSwwLTE2aDQwYTgsOCwwLDAsMSwwLDE2Wm0wLTQ4SDY0YTgsOCwwLDAsMSwwLTE2aDQwYTgsOCwwLDAsMSwwLDE2Wm05Mi40NCwyMi42Ni00OCwzMkE4LDgsMCwwLDEsMTQ0LDE5MmE4LDgsMCwwLDEtOC04VjEyMGE4LDgsMCwwLDEsMTIuNDQtNi42Nmw0OCwzMmE4LDgsMCwwLDEsMCwxMy4zMloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0zNCw2NGE2LDYsMCwwLDEsNi02SDIxNmE2LDYsMCwwLDEsMCwxMkg0MEE2LDYsMCwwLDEsMzQsNjRabTEwMiw1OEg0MGE2LDYsMCwwLDAsMCwxMmg5NmE2LDYsMCwwLDAsMC0xMlptMCw2NEg0MGE2LDYsMCwwLDAsMCwxMmg5NmE2LDYsMCwwLDAsMC0xMlptMTEwLTI2YTYsNiwwLDAsMS0yLjgyLDUuMDlsLTY0LDQwQTYsNiwwLDAsMSwxNzAsMjAwVjEyMGE2LDYsMCwwLDEsOS4xOC01LjA5bDY0LDQwQTYsNiwwLDAsMSwyNDYsMTYwWm0tMTcuMzIsMEwxODIsMTMwLjgzdjU4LjM0WiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0zMiw2NGE4LDgsMCwwLDEsOC04SDIxNmE4LDgsMCwwLDEsMCwxNkg0MEE4LDgsMCwwLDEsMzIsNjRabTEwNCw1Nkg0MGE4LDgsMCwwLDAsMCwxNmg5NmE4LDgsMCwwLDAsMC0xNlptMCw2NEg0MGE4LDgsMCwwLDAsMCwxNmg5NmE4LDgsMCwwLDAsMC0xNlptMTEyLTI0YTgsOCwwLDAsMS0zLjc2LDYuNzhsLTY0LDQwQTgsOCwwLDAsMSwxNjgsMjAwVjEyMGE4LDgsMCwwLDEsMTIuMjQtNi43OGw2NCw0MEE4LDgsMCwwLDEsMjQ4LDE2MFptLTIzLjA5LDBMMTg0LDEzNC40M3Y1MS4xNFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0zNiw2NGE0LDQsMCwwLDEsNC00SDIxNmE0LDQsMCwwLDEsMCw4SDQwQTQsNCwwLDAsMSwzNiw2NFptMTAwLDYwSDQwYTQsNCwwLDAsMCwwLDhoOTZhNCw0LDAsMCwwLDAtOFptMCw2NEg0MGE0LDQsMCwwLDAsMCw4aDk2YTQsNCwwLDAsMCwwLThabTEwOC0yOGE0LDQsMCwwLDEtMS44OCwzLjM5bC02NCw0MEE0LDQsMCwwLDEsMTc2LDIwNGE0LjA2LDQuMDYsMCwwLDEtMS45NC0uNUE0LDQsMCwwLDEsMTcyLDIwMFYxMjBhNCw0LDAsMCwxLDYuMTItMy4zOWw2NCw0MEE0LDQsMCwwLDEsMjQ0LDE2MFptLTExLjU1LDBMMTgwLDEyNy4yMnY2NS41NloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Queue";
export { I as Queue };
