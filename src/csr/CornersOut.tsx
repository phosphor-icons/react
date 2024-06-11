/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/CornersOut";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAsNDhWODhhMTIsMTIsMCwwLDEtMjQsMFY2MEgxNjhhMTIsMTIsMCwwLDEsMC0yNGg0MEExMiwxMiwwLDAsMSwyMjAsNDhaTTg4LDE5Nkg2MFYxNjhhMTIsMTIsMCwwLDAtMjQsMHY0MGExMiwxMiwwLDAsMCwxMiwxMkg4OGExMiwxMiwwLDAsMCwwLTI0Wm0xMjAtNDBhMTIsMTIsMCwwLDAtMTIsMTJ2MjhIMTY4YTEyLDEyLDAsMCwwLDAsMjRoNDBhMTIsMTIsMCwwLDAsMTItMTJWMTY4QTEyLDEyLDAsMCwwLDIwOCwxNTZaTTg4LDM2SDQ4QTEyLDEyLDAsMCwwLDM2LDQ4Vjg4YTEyLDEyLDAsMCwwLDI0LDBWNjBIODhhMTIsMTIsMCwwLDAsMC0yNFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNDhWMjA4SDQ4VjQ4WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIxNiw0OFY4OGE4LDgsMCwwLDEtMTYsMFY1NkgxNjhhOCw4LDAsMCwxLDAtMTZoNDBBOCw4LDAsMCwxLDIxNiw0OFpNODgsMjAwSDU2VjE2OGE4LDgsMCwwLDAtMTYsMHY0MGE4LDgsMCwwLDAsOCw4SDg4YTgsOCwwLDAsMCwwLTE2Wm0xMjAtNDBhOCw4LDAsMCwwLTgsOHYzMkgxNjhhOCw4LDAsMCwwLDAsMTZoNDBhOCw4LDAsMCwwLDgtOFYxNjhBOCw4LDAsMCwwLDIwOCwxNjBaTTg4LDQwSDQ4YTgsOCwwLDAsMC04LDhWODhhOCw4LDAsMCwwLDE2LDBWNTZIODhhOCw4LDAsMCwwLDAtMTZaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05My42NiwyMDIuMzRBOCw4LDAsMCwxLDg4LDIxNkg0OGE4LDgsMCwwLDEtOC04VjE2OGE4LDgsMCwwLDEsMTMuNjYtNS42NlpNODgsNDBINDhhOCw4LDAsMCwwLTgsOFY4OGE4LDgsMCwwLDAsMTMuNjYsNS42Nmw0MC00MEE4LDgsMCwwLDAsODgsNDBaTTIxMS4wNiwxNjAuNjFhOCw4LDAsMCwwLTguNzIsMS43M2wtNDAsNDBBOCw4LDAsMCwwLDE2OCwyMTZoNDBhOCw4LDAsMCwwLDgtOFYxNjhBOCw4LDAsMCwwLDIxMS4wNiwxNjAuNjFaTTIwOCw0MEgxNjhhOCw4LDAsMCwwLTUuNjYsMTMuNjZsNDAsNDBBOCw4LDAsMCwwLDIxNiw4OFY0OEE4LDgsMCwwLDAsMjA4LDQwWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTQsNDhWODhhNiw2LDAsMCwxLTEyLDBWNTRIMTY4YTYsNiwwLDAsMSwwLTEyaDQwQTYsNiwwLDAsMSwyMTQsNDhaTTg4LDIwMkg1NFYxNjhhNiw2LDAsMCwwLTEyLDB2NDBhNiw2LDAsMCwwLDYsNkg4OGE2LDYsMCwwLDAsMC0xMlptMTIwLTQwYTYsNiwwLDAsMC02LDZ2MzRIMTY4YTYsNiwwLDAsMCwwLDEyaDQwYTYsNiwwLDAsMCw2LTZWMTY4QTYsNiwwLDAsMCwyMDgsMTYyWk04OCw0Mkg0OGE2LDYsMCwwLDAtNiw2Vjg4YTYsNiwwLDAsMCwxMiwwVjU0SDg4YTYsNiwwLDAsMCwwLTEyWiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDhWODhhOCw4LDAsMCwxLTE2LDBWNTZIMTY4YTgsOCwwLDAsMSwwLTE2aDQwQTgsOCwwLDAsMSwyMTYsNDhaTTg4LDIwMEg1NlYxNjhhOCw4LDAsMCwwLTE2LDB2NDBhOCw4LDAsMCwwLDgsOEg4OGE4LDgsMCwwLDAsMC0xNlptMTIwLTQwYTgsOCwwLDAsMC04LDh2MzJIMTY4YTgsOCwwLDAsMCwwLDE2aDQwYTgsOCwwLDAsMCw4LThWMTY4QTgsOCwwLDAsMCwyMDgsMTYwWk04OCw0MEg0OGE4LDgsMCwwLDAtOCw4Vjg4YTgsOCwwLDAsMCwxNiwwVjU2SDg4YTgsOCwwLDAsMCwwLTE2WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsNDhWODhhNCw0LDAsMCwxLTgsMFY1MkgxNjhhNCw0LDAsMCwxLDAtOGg0MEE0LDQsMCwwLDEsMjEyLDQ4Wk04OCwyMDRINTJWMTY4YTQsNCwwLDAsMC04LDB2NDBhNCw0LDAsMCwwLDQsNEg4OGE0LDQsMCwwLDAsMC04Wm0xMjAtNDBhNCw0LDAsMCwwLTQsNHYzNkgxNjhhNCw0LDAsMCwwLDAsOGg0MGE0LDQsMCwwLDAsNC00VjE2OEE0LDQsMCwwLDAsMjA4LDE2NFpNODgsNDRINDhhNCw0LDAsMCwwLTQsNFY4OGE0LDQsMCwwLDAsOCwwVjUySDg4YTQsNCwwLDAsMCwwLThaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "CornersOut";
export { I as CornersOut };
