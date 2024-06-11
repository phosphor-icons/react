/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Compass";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjBBMTA4LDEwOCwwLDEsMCwyMzYsMTI4LDEwOC4xMiwxMDguMTIsMCwwLDAsMTI4LDIwWm0wLDE5MmE4NCw4NCwwLDEsMSw4NC04NEE4NC4wOSw4NC4wOSwwLDAsMSwxMjgsMjEyWk0xNjMuMjcsNzdsLTU2LDI0YTEyLDEyLDAsMCwwLTYuMyw2LjNsLTI0LDU2QTEyLDEyLDAsMCwwLDkyLjczLDE3OWw1Ni0yNGExMiwxMiwwLDAsMCw2LjMtNi4zbDI0LTU2QTEyLDEyLDAsMCwwLDE2My4yNyw3N1ptLTI4LjQxLDU3Ljg5LTI0LDEwLjI5LDEwLjI5LTI0LDI0LTEwLjI5WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMzJhOTYsOTYsMCwxLDAsOTYsOTZBOTYsOTYsMCwwLDAsMTI4LDMyWm0xNiwxMTJMODAsMTc2bDMyLTY0LDY0LTMyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTEyOCwyNEExMDQsMTA0LDAsMSwwLDIzMiwxMjgsMTA0LjExLDEwNC4xMSwwLDAsMCwxMjgsMjRabTAsMTkyYTg4LDg4LDAsMSwxLDg4LTg4QTg4LjEsODguMSwwLDAsMSwxMjgsMjE2Wk0xNzIuNDIsNzIuODRsLTY0LDMyYTguMDUsOC4wNSwwLDAsMC0zLjU4LDMuNThsLTMyLDY0QTgsOCwwLDAsMCw4MCwxODRhOC4xLDguMSwwLDAsMCwzLjU4LS44NGw2NC0zMmE4LjA1LDguMDUsMCwwLDAsMy41OC0zLjU4bDMyLTY0YTgsOCwwLDAsMC0xMC43NC0xMC43NFpNMTM4LDEzOCw5Ny44OSwxNTguMTEsMTE4LDExOGw0MC4xNS0yMC4wN1oiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wm01MS41OCw1Ny43OS0zMiw2NGE0LjA4LDQuMDgsMCwwLDEtMS43OSwxLjc5bC02NCwzMmE0LDQsMCwwLDEtNS4zNy01LjM3bDMyLTY0YTQuMDgsNC4wOCwwLDAsMSwxLjc5LTEuNzlsNjQtMzJBNCw0LDAsMCwxLDE3OS41OCw4MS43OVoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjZBMTAyLDEwMiwwLDEsMCwyMzAsMTI4LDEwMi4xMiwxMDIuMTIsMCwwLDAsMTI4LDI2Wm0wLDE5MmE5MCw5MCwwLDEsMSw5MC05MEE5MC4xLDkwLjEsMCwwLDEsMTI4LDIxOFpNMTczLjMyLDc0LjYzbC02NCwzMmE2LDYsMCwwLDAtMi42OSwyLjY5bC0zMiw2NEE2LDYsMCwwLDAsODAsMTgyYTYuMDYsNi4wNiwwLDAsMCwyLjY4LS42M2w2NC0zMmE2LDYsMCwwLDAsMi42OS0yLjY5bDMyLTY0YTYsNiwwLDAsMC04LjA1LTguMDVabS0zMy43OSw2NC45TDkzLjQyLDE2Mi41OGwyMy00Ni4xMSw0Ni4xMS0yM1oiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wm0wLDE5MmE4OCw4OCwwLDEsMSw4OC04OEE4OC4xLDg4LjEsMCwwLDEsMTI4LDIxNlpNMTcyLjQyLDcyLjg0bC02NCwzMmE4LjA1LDguMDUsMCwwLDAtMy41OCwzLjU4bC0zMiw2NEE4LDgsMCwwLDAsODAsMTg0YTguMSw4LjEsMCwwLDAsMy41OC0uODRsNjQtMzJhOC4wNSw4LjA1LDAsMCwwLDMuNTgtMy41OGwzMi02NGE4LDgsMCwwLDAtMTAuNzQtMTAuNzRaTTEzOCwxMzgsOTcuODksMTU4LjExLDExOCwxMThsNDAuMTUtMjAuMDdaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjhBMTAwLDEwMCwwLDEsMCwyMjgsMTI4LDEwMC4xMSwxMDAuMTEsMCwwLDAsMTI4LDI4Wm0wLDE5MmE5Miw5MiwwLDEsMSw5Mi05MkE5Mi4xLDkyLjEsMCwwLDEsMTI4LDIyMFpNMTc0LjIxLDc2LjQybC02NCwzMmE0LjA4LDQuMDgsMCwwLDAtMS43OSwxLjc5bC0zMiw2NEE0LDQsMCwwLDAsODAsMTgwYTQuMDUsNC4wNSwwLDAsMCwxLjc5LS40Mmw2NC0zMmE0LjA4LDQuMDgsMCwwLDAsMS43OS0xLjc5bDMyLTY0YTQsNCwwLDAsMC01LjM3LTUuMzdaTTE0MSwxNDFsLTUyLjA4LDI2TDExNSwxMTVsNTIuMDgtMjZaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Compass";
export { I as Compass };
