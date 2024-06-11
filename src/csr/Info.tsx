/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Info";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wm0wLDE5MmE4OCw4OCwwLDEsMSw4OC04OEE4OC4xLDg4LjEsMCwwLDEsMTI4LDIxNlptMTYtNDBhOCw4LDAsMCwxLTgsOCwxNiwxNiwwLDAsMS0xNi0xNlYxMjhhOCw4LDAsMCwxLDAtMTYsMTYsMTYsMCwwLDEsMTYsMTZ2NDBBOCw4LDAsMCwxLDE0NCwxNzZaTTExMiw4NGExMiwxMiwwLDEsMSwxMiwxMkExMiwxMiwwLDAsMSwxMTIsODRaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDAsMTc2YTQsNCwwLDAsMS00LDQsMTIsMTIsMCwwLDEtMTItMTJWMTI4YTQsNCwwLDAsMC00LTQsNCw0LDAsMCwxLDAtOCwxMiwxMiwwLDAsMSwxMiwxMnY0MGE0LDQsMCwwLDAsNCw0QTQsNCwwLDAsMSwxNDAsMTc2Wk0xMjQsOTJhOCw4LDAsMSwwLTgtOEE4LDgsMCwwLDAsMTI0LDkyWm0xMDQsMzZBMTAwLDEwMCwwLDEsMSwxMjgsMjgsMTAwLjExLDEwMC4xMSwwLDAsMSwyMjgsMTI4Wm0tOCwwYTkyLDkyLDAsMSwwLTkyLDkyQTkyLjEsOTIuMSwwLDAsMCwyMjAsMTI4WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDIsMTc2YTYsNiwwLDAsMS02LDYsMTQsMTQsMCwwLDEtMTQtMTRWMTI4YTIsMiwwLDAsMC0yLTIsNiw2LDAsMCwxLDAtMTIsMTQsMTQsMCwwLDEsMTQsMTR2NDBhMiwyLDAsMCwwLDIsMkE2LDYsMCwwLDEsMTQyLDE3NlpNMTI0LDk0YTEwLDEwLDAsMSwwLTEwLTEwQTEwLDEwLDAsMCwwLDEyNCw5NFptMTA2LDM0QTEwMiwxMDIsMCwxLDEsMTI4LDI2LDEwMi4xMiwxMDIuMTIsMCwwLDEsMjMwLDEyOFptLTEyLDBhOTAsOTAsMCwxLDAtOTAsOTBBOTAuMSw5MC4xLDAsMCwwLDIxOCwxMjhaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDgsODRhMTYsMTYsMCwxLDEsMTYsMTZBMTYsMTYsMCwwLDEsMTA4LDg0Wm0xMjgsNDRBMTA4LDEwOCwwLDEsMSwxMjgsMjAsMTA4LjEyLDEwOC4xMiwwLDAsMSwyMzYsMTI4Wm0tMjQsMGE4NCw4NCwwLDEsMC04NCw4NEE4NC4wOSw4NC4wOSwwLDAsMCwyMTIsMTI4Wm0tNzIsMzYuNjhWMTMyYTIwLDIwLDAsMCwwLTIwLTIwLDEyLDEyLDAsMCwwLTQsMjMuMzJWMTY4YTIwLDIwLDAsMCwwLDIwLDIwLDEyLDEyLDAsMCwwLDQtMjMuMzJaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wm0tNCw0OGExMiwxMiwwLDEsMS0xMiwxMkExMiwxMiwwLDAsMSwxMjQsNzJabTEyLDExMmExNiwxNiwwLDAsMS0xNi0xNlYxMjhhOCw4LDAsMCwxLDAtMTYsMTYsMTYsMCwwLDEsMTYsMTZ2NDBhOCw4LDAsMCwxLDAsMTZaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTI4YTk2LDk2LDAsMSwxLTk2LTk2QTk2LDk2LDAsMCwxLDIyNCwxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTQ0LDE3NmE4LDgsMCwwLDEtOCw4LDE2LDE2LDAsMCwxLTE2LTE2VjEyOGE4LDgsMCwwLDEsMC0xNiwxNiwxNiwwLDAsMSwxNiwxNnY0MEE4LDgsMCwwLDEsMTQ0LDE3NlptODgtNDhBMTA0LDEwNCwwLDEsMSwxMjgsMjQsMTA0LjExLDEwNC4xMSwwLDAsMSwyMzIsMTI4Wm0tMTYsMGE4OCw4OCwwLDEsMC04OCw4OEE4OC4xLDg4LjEsMCwwLDAsMjE2LDEyOFpNMTI0LDk2YTEyLDEyLDAsMSwwLTEyLTEyQTEyLDEyLDAsMCwwLDEyNCw5NloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Info";
export { I as Info };
