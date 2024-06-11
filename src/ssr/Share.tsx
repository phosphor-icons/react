/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Share";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjkuNjYsMTA5LjY2bC00OCw0OGE4LDgsMCwwLDEtMTEuMzItMTEuMzJMMjA0LjY5LDExMkgxNjVhODgsODgsMCwwLDAtODUuMjMsNjYsOCw4LDAsMCwxLTE1LjUtNEExMDMuOTQsMTAzLjk0LDAsMCwxLDE2NSw5NmgzOS43MUwxNzAuMzQsNjEuNjZhOCw4LDAsMCwxLDExLjMyLTExLjMybDQ4LDQ4QTgsOCwwLDAsMSwyMjkuNjYsMTA5LjY2Wk0xOTIsMjA4SDQwVjg4YTgsOCwwLDAsMC0xNiwwVjIxNmE4LDgsMCwwLDAsOCw4SDE5MmE4LDgsMCwwLDAsMC0xNloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjYuODMsMTA2LjgzbC00OCw0OGE0LDQsMCwwLDEtNS42Ni01LjY2TDIxNC4zNCwxMDhIMTY1YTkyLDkyLDAsMCwwLTg5LjExLDY5QTQsNCwwLDAsMSw3MiwxODBhMy44NywzLjg3LDAsMCwxLTEtLjEzQTQsNCwwLDAsMSw2OC4xMywxNzUsOTkuOTMsOTkuOTMsMCwwLDEsMTY1LDEwMGg0OS4zNkwxNzMuMTcsNTguODNhNCw0LDAsMCwxLDUuNjYtNS42Nmw0OCw0OEE0LDQsMCwwLDEsMjI2LjgzLDEwNi44M1pNMTkyLDIxMkgzNlY4OGE0LDQsMCwwLDAtOCwwVjIxNmE0LDQsMCwwLDAsNCw0SDE5MmE0LDQsMCwwLDAsMC04WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjguMjQsMTA4LjI0bC00OCw0OGE2LDYsMCwwLDEtOC40OC04LjQ4TDIwOS41MSwxMTBIMTY1YTg5Ljk0LDg5Ljk0LDAsMCwwLTg3LjE3LDY3LjUsNiw2LDAsMCwxLTExLjYyLTNBMTAxLjk0LDEwMS45NCwwLDAsMSwxNjUsOThoNDQuNTNMMTcxLjc2LDYwLjI0YTYsNiwwLDAsMSw4LjQ4LTguNDhsNDgsNDhBNiw2LDAsMCwxLDIyOC4yNCwxMDguMjRaTTE5MiwyMTBIMzhWODhhNiw2LDAsMCwwLTEyLDBWMjE2YTYsNiwwLDAsMCw2LDZIMTkyYTYsNiwwLDAsMCwwLTEyWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIuNDksMTEyLjQ5bC00OCw0OGExMiwxMiwwLDAsMS0xNy0xN0wxOTUsMTE2SDE2NWE4NCw4NCwwLDAsMC04MS4zNiw2MywxMiwxMiwwLDEsMS0yMy4yNC02QTEwNy45NCwxMDcuOTQsMCwwLDEsMTY1LDkySDE5NUwxNjcuNTEsNjQuNDhhMTIsMTIsMCwwLDEsMTctMTdsNDgsNDhBMTIsMTIsMCwwLDEsMjMyLjQ5LDExMi40OVpNMTkyLDIwNEg0NFY4OGExMiwxMiwwLDAsMC0yNCwwVjIxNmExMiwxMiwwLDAsMCwxMiwxMkgxOTJhMTIsMTIsMCwwLDAsMC0yNFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjkuNjYsMTA5LjY2bC00OCw0OEE4LDgsMCwwLDEsMTY4LDE1MlYxMTJoLTNhODgsODgsMCwwLDAtODUuMjMsNjYsOCw4LDAsMCwxLTE1LjUtNEExMDMuOTQsMTAzLjk0LDAsMCwxLDE2NSw5NmgzVjU2YTgsOCwwLDAsMSwxMy42Ni01LjY2bDQ4LDQ4QTgsOCwwLDAsMSwyMjkuNjYsMTA5LjY2Wk0xOTIsMjA4SDQwVjg4YTgsOCwwLDAsMC0xNiwwVjIxNmE4LDgsMCwwLDAsOCw4SDE5MmE4LDgsMCwwLDAsMC0xNloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTA0bC00OCw0OFY1NloiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMjkuNjYsOTguMzRsLTQ4LTQ4QTgsOCwwLDAsMCwxNjgsNTZWOTZoLTNBMTAzLjk0LDEwMy45NCwwLDAsMCw2NC4yNSwxNzRhOCw4LDAsMCwwLDE1LjUsNEE4OCw4OCwwLDAsMSwxNjUsMTEyaDN2NDBhOCw4LDAsMCwwLDEzLjY2LDUuNjZsNDgtNDhBOCw4LDAsMCwwLDIyOS42Niw5OC4zNFpNMTg0LDEzMi42OVY3NS4zMUwyMTIuNjksMTA0Wk0yMDAsMjE2YTgsOCwwLDAsMS04LDhIMzJhOCw4LDAsMCwxLTgtOFY4OGE4LDgsMCwwLDEsMTYsMFYyMDhIMTkyQTgsOCwwLDAsMSwyMDAsMjE2WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Share";
export { I as Share };
