/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Columns";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDAsMjhINjRBMjAsMjAsMCwwLDAsNDQsNDhWMjA4YTIwLDIwLDAsMCwwLDIwLDIwaDM2YTIwLDIwLDAsMCwwLDIwLTIwVjQ4QTIwLDIwLDAsMCwwLDEwMCwyOFpNOTYsMjA0SDY4VjUySDk2Wk0xOTIsMjhIMTU2YTIwLDIwLDAsMCwwLTIwLDIwVjIwOGEyMCwyMCwwLDAsMCwyMCwyMGgzNmEyMCwyMCwwLDAsMCwyMC0yMFY0OEEyMCwyMCwwLDAsMCwxOTIsMjhabS00LDE3NkgxNjBWNTJoMjhaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTIsNDhWMjA4YTgsOCwwLDAsMS04LDhINjRhOCw4LDAsMCwxLTgtOFY0OGE4LDgsMCwwLDEsOC04aDQwQTgsOCwwLDAsMSwxMTIsNDhabTgwLThIMTUyYTgsOCwwLDAsMC04LDhWMjA4YTgsOCwwLDAsMCw4LDhoNDBhOCw4LDAsMCwwLDgtOFY0OEE4LDgsMCwwLDAsMTkyLDQwWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTEwNCwzMkg2NEExNiwxNiwwLDAsMCw0OCw0OFYyMDhhMTYsMTYsMCwwLDAsMTYsMTZoNDBhMTYsMTYsMCwwLDAsMTYtMTZWNDhBMTYsMTYsMCwwLDAsMTA0LDMyWm0wLDE3Nkg2NFY0OGg0MFpNMTkyLDMySDE1MmExNiwxNiwwLDAsMC0xNiwxNlYyMDhhMTYsMTYsMCwwLDAsMTYsMTZoNDBhMTYsMTYsMCwwLDAsMTYtMTZWNDhBMTYsMTYsMCwwLDAsMTkyLDMyWm0wLDE3NkgxNTJWNDhoNDBaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjAsNDhWMjA4YTE2LDE2LDAsMCwxLTE2LDE2SDY0YTE2LDE2LDAsMCwxLTE2LTE2VjQ4QTE2LDE2LDAsMCwxLDY0LDMyaDQwQTE2LDE2LDAsMCwxLDEyMCw0OFptNzItMTZIMTUyYTE2LDE2LDAsMCwwLTE2LDE2VjIwOGExNiwxNiwwLDAsMCwxNiwxNmg0MGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwxOTIsMzJaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDQsMzRINjRBMTQsMTQsMCwwLDAsNTAsNDhWMjA4YTE0LDE0LDAsMCwwLDE0LDE0aDQwYTE0LDE0LDAsMCwwLDE0LTE0VjQ4QTE0LDE0LDAsMCwwLDEwNCwzNFptMiwxNzRhMiwyLDAsMCwxLTIsMkg2NGEyLDIsMCwwLDEtMi0yVjQ4YTIsMiwwLDAsMSwyLTJoNDBhMiwyLDAsMCwxLDIsMlpNMTkyLDM0SDE1MmExNCwxNCwwLDAsMC0xNCwxNFYyMDhhMTQsMTQsMCwwLDAsMTQsMTRoNDBhMTQsMTQsMCwwLDAsMTQtMTRWNDhBMTQsMTQsMCwwLDAsMTkyLDM0Wm0yLDE3NGEyLDIsMCwwLDEtMiwySDE1MmEyLDIsMCwwLDEtMi0yVjQ4YTIsMiwwLDAsMSwyLTJoNDBhMiwyLDAsMCwxLDIsMloiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDQsMzJINjRBMTYsMTYsMCwwLDAsNDgsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2aDQwYTE2LDE2LDAsMCwwLDE2LTE2VjQ4QTE2LDE2LDAsMCwwLDEwNCwzMlptMCwxNzZINjRWNDhoNDBaTTE5MiwzMkgxNTJhMTYsMTYsMCwwLDAtMTYsMTZWMjA4YTE2LDE2LDAsMCwwLDE2LDE2aDQwYTE2LDE2LDAsMCwwLDE2LTE2VjQ4QTE2LDE2LDAsMCwwLDE5MiwzMlptMCwxNzZIMTUyVjQ4aDQwWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDQsMzZINjRBMTIsMTIsMCwwLDAsNTIsNDhWMjA4YTEyLDEyLDAsMCwwLDEyLDEyaDQwYTEyLDEyLDAsMCwwLDEyLTEyVjQ4QTEyLDEyLDAsMCwwLDEwNCwzNlptNCwxNzJhNCw0LDAsMCwxLTQsNEg2NGE0LDQsMCwwLDEtNC00VjQ4YTQsNCwwLDAsMSw0LTRoNDBhNCw0LDAsMCwxLDQsNFpNMTkyLDM2SDE1MmExMiwxMiwwLDAsMC0xMiwxMlYyMDhhMTIsMTIsMCwwLDAsMTIsMTJoNDBhMTIsMTIsMCwwLDAsMTItMTJWNDhBMTIsMTIsMCwwLDAsMTkyLDM2Wm00LDE3MmE0LDQsMCwwLDEtNCw0SDE1MmE0LDQsMCwwLDEtNC00VjQ4YTQsNCwwLDAsMSw0LTRoNDBhNCw0LDAsMCwxLDQsNFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Columns";
export { I as Columns };
