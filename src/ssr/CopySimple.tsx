/* GENERATED FILE */
import * as React from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/CopySimple";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsNjRINDBhOCw4LDAsMCwwLTgsOFYyMTZhOCw4LDAsMCwwLDgsOEgxODRhOCw4LDAsMCwwLDgtOFY3MkE4LDgsMCwwLDAsMTg0LDY0Wm0tOCwxNDRINDhWODBIMTc2Wk0yMjQsNDBWMTg0YTgsOCwwLDAsMS0xNiwwVjQ4SDcyYTgsOCwwLDAsMSwwLTE2SDIxNkE4LDgsMCwwLDEsMjI0LDQwWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsNjhINDBhNCw0LDAsMCwwLTQsNFYyMTZhNCw0LDAsMCwwLDQsNEgxODRhNCw0LDAsMCwwLDQtNFY3MkE0LDQsMCwwLDAsMTg0LDY4Wm0tNCwxNDRINDRWNzZIMTgwWk0yMjAsNDBWMTg0YTQsNCwwLDAsMS04LDBWNDRINzJhNCw0LDAsMCwxLDAtOEgyMTZBNCw0LDAsMCwxLDIyMCw0MFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsNjZINDBhNiw2LDAsMCwwLTYsNlYyMTZhNiw2LDAsMCwwLDYsNkgxODRhNiw2LDAsMCwwLDYtNlY3MkE2LDYsMCwwLDAsMTg0LDY2Wm0tNiwxNDRINDZWNzhIMTc4Wk0yMjIsNDBWMTg0YTYsNiwwLDAsMS0xMiwwVjQ2SDcyYTYsNiwwLDAsMSwwLTEySDIxNkE2LDYsMCwwLDEsMjIyLDQwWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODAsNjRINDBBMTIsMTIsMCwwLDAsMjgsNzZWMjE2YTEyLDEyLDAsMCwwLDEyLDEySDE4MGExMiwxMiwwLDAsMCwxMi0xMlY3NkExMiwxMiwwLDAsMCwxODAsNjRaTTE2OCwyMDRINTJWODhIMTY4Wk0yMjgsNDBWMTgwYTEyLDEyLDAsMCwxLTI0LDBWNTJINzZhMTIsMTIsMCwwLDEsMC0yNEgyMTZBMTIsMTIsMCwwLDEsMjI4LDQwWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsNzJWMjE2YTgsOCwwLDAsMS04LDhINDBhOCw4LDAsMCwxLTgtOFY3MmE4LDgsMCwwLDEsOC04SDE4NEE4LDgsMCwwLDEsMTkyLDcyWm0yNC00MEg3MmE4LDgsMCwwLDAsMCwxNkgyMDhWMTg0YTgsOCwwLDAsMCwxNiwwVjQwQTgsOCwwLDAsMCwyMTYsMzJaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsNzJWMjE2SDQwVjcyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTE4NCw2NEg0MGE4LDgsMCwwLDAtOCw4VjIxNmE4LDgsMCwwLDAsOCw4SDE4NGE4LDgsMCwwLDAsOC04VjcyQTgsOCwwLDAsMCwxODQsNjRabS04LDE0NEg0OFY4MEgxNzZaTTIyNCw0MFYxODRhOCw4LDAsMCwxLTE2LDBWNDhINzJhOCw4LDAsMCwxLDAtMTZIMjE2QTgsOCwwLDAsMSwyMjQsNDBaIi8+PC9zdmc+)
 */
const I: Icon = React.forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "CopySimpleIcon";

/** @deprecated Use CopySimpleIcon */
export const CopySimple = I;
export { I as CopySimpleIcon };
