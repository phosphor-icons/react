/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/LockLaminated";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsODBIMTc2VjU2YTQ4LDQ4LDAsMCwwLTk2LDBWODBINDhBMTYsMTYsMCwwLDAsMzIsOTZWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY5NkExNiwxNiwwLDAsMCwyMDgsODBaTTQ4LDEyOEgyMDh2MTZINDhabTAsMzJIMjA4djE2SDQ4Wk05Niw1NmEzMiwzMiwwLDAsMSw2NCwwVjgwSDk2Wk0yMDgsOTZ2MTZINDhWOTZabTAsMTEySDQ4VjE5MkgyMDh2MTZaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsODRIMTcyVjU2YTQ0LDQ0LDAsMCwwLTg4LDBWODRINDhBMTIsMTIsMCwwLDAsMzYsOTZWMjA4YTEyLDEyLDAsMCwwLDEyLDEySDIwOGExMiwxMiwwLDAsMCwxMi0xMlY5NkExMiwxMiwwLDAsMCwyMDgsODRaTTQ0LDEyNEgyMTJ2MjRINDRabTAsMzJIMjEydjI0SDQ0Wk05Miw1NmEzNiwzNiwwLDAsMSw3MiwwVjg0SDkyWk00OCw5MkgyMDhhNCw0LDAsMCwxLDQsNHYyMEg0NFY5NkE0LDQsMCwwLDEsNDgsOTJaTTIwOCwyMTJINDhhNCw0LDAsMCwxLTQtNFYxODhIMjEydjIwQTQsNCwwLDAsMSwyMDgsMjEyWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsODJIMTc0VjU2YTQ2LDQ2LDAsMCwwLTkyLDBWODJINDhBMTQsMTQsMCwwLDAsMzQsOTZWMjA4YTE0LDE0LDAsMCwwLDE0LDE0SDIwOGExNCwxNCwwLDAsMCwxNC0xNFY5NkExNCwxNCwwLDAsMCwyMDgsODJaTTQ2LDEyNkgyMTB2MjBINDZabTAsMzJIMjEwdjIwSDQ2Wk05NCw1NmEzNCwzNCwwLDAsMSw2OCwwVjgySDk0Wk00OCw5NEgyMDhhMiwyLDAsMCwxLDIsMnYxOEg0NlY5NkEyLDIsMCwwLDEsNDgsOTRaTTIwOCwyMTBINDhhMiwyLDAsMCwxLTItMlYxOTBIMjEwdjE4QTIsMiwwLDAsMSwyMDgsMjEwWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNzZIMTgwVjU2QTUyLDUyLDAsMCwwLDc2LDU2Vjc2SDQ4QTIwLDIwLDAsMCwwLDI4LDk2VjIwOGEyMCwyMCwwLDAsMCwyMCwyMEgyMDhhMjAsMjAsMCwwLDAsMjAtMjBWOTZBMjAsMjAsMCwwLDAsMjA4LDc2Wk01MiwxNDRIMjA0djE2SDUyWm00OC04OGEyOCwyOCwwLDAsMSw1NiwwVjc2SDEwMFptMTA0LDQ0djIwSDUyVjEwMFpNNTIsMjA0VjE4NEgyMDR2MjBaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsODBIMTc2VjU2YTQ4LDQ4LDAsMCwwLTk2LDBWODBINDhBMTYsMTYsMCwwLDAsMzIsOTZWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY5NkExNiwxNiwwLDAsMCwyMDgsODBaTTk2LDU2YTMyLDMyLDAsMCwxLDY0LDBWODBIOTZabTg4LDEzNkg3MmE4LDgsMCwwLDEsMC0xNkgxODRhOCw4LDAsMCwxLDAsMTZabTAtMzJINzJhOCw4LDAsMCwxLDAtMTZIMTg0YTgsOCwwLDAsMSwwLDE2Wm0wLTMySDcyYTgsOCwwLDAsMSwwLTE2SDE4NGE4LDgsMCwwLDEsMCwxNloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsOTZWMjA4YTgsOCwwLDAsMS04LDhINDhhOCw4LDAsMCwxLTgtOFY5NmE4LDgsMCwwLDEsOC04SDIwOEE4LDgsMCwwLDEsMjE2LDk2WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIwOCw4MEgxNzZWNTZhNDgsNDgsMCwwLDAtOTYsMFY4MEg0OEExNiwxNiwwLDAsMCwzMiw5NlYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIMjA4YTE2LDE2LDAsMCwwLDE2LTE2Vjk2QTE2LDE2LDAsMCwwLDIwOCw4MFpNNDgsMTI4SDIwOHYxNkg0OFptMCwzMkgyMDh2MTZINDhaTTk2LDU2YTMyLDMyLDAsMCwxLDY0LDBWODBIOTZaTTIwOCw5NnYxNkg0OFY5NlptMCwxMTJINDhWMTkySDIwOHYxNloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "LockLaminated";
export { I as LockLaminated };
