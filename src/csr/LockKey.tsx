/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/LockKey";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNzZIMTgwVjU2QTUyLDUyLDAsMCwwLDc2LDU2Vjc2SDQ4QTIwLDIwLDAsMCwwLDI4LDk2VjIwOGEyMCwyMCwwLDAsMCwyMCwyMEgyMDhhMjAsMjAsMCwwLDAsMjAtMjBWOTZBMjAsMjAsMCwwLDAsMjA4LDc2Wk0xMDAsNTZhMjgsMjgsMCwwLDEsNTYsMFY3NkgxMDBaTTIwNCwyMDRINTJWMTAwSDIwNFptLTc2LTkyYTMyLDMyLDAsMCwwLTEyLDYxLjY2VjE4MGExMiwxMiwwLDAsMCwyNCwwdi02LjM0QTMyLDMyLDAsMCwwLDEyOCwxMTJabTAsMjRhOCw4LDAsMSwxLTgsOEE4LDgsMCwwLDEsMTI4LDEzNloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsODhINDhhOCw4LDAsMCwwLTgsOFYyMDhhOCw4LDAsMCwwLDgsOEgyMDhhOCw4LDAsMCwwLDgtOFY5NkE4LDgsMCwwLDAsMjA4LDg4Wm0tODAsNzJhMjAsMjAsMCwxLDEsMjAtMjBBMjAsMjAsMCwwLDEsMTI4LDE2MFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMDgsODBIMTc2VjU2YTQ4LDQ4LDAsMCwwLTk2LDBWODBINDhBMTYsMTYsMCwwLDAsMzIsOTZWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY5NkExNiwxNiwwLDAsMCwyMDgsODBaTTk2LDU2YTMyLDMyLDAsMCwxLDY0LDBWODBIOTZaTTIwOCwyMDhINDhWOTZIMjA4VjIwOFptLTgwLTk2YTI4LDI4LDAsMCwwLTgsNTQuODNWMTg0YTgsOCwwLDAsMCwxNiwwVjE2Ni44M0EyOCwyOCwwLDAsMCwxMjgsMTEyWm0wLDQwYTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDEyOCwxNTJaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsODBIMTc2VjU2YTQ4LDQ4LDAsMCwwLTk2LDBWODBINDhBMTYsMTYsMCwwLDAsMzIsOTZWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY5NkExNiwxNiwwLDAsMCwyMDgsODBabS03Miw3OC42M1YxODRhOCw4LDAsMCwxLTE2LDBWMTU4LjYzYTI0LDI0LDAsMSwxLDE2LDBaTTE2MCw4MEg5NlY1NmEzMiwzMiwwLDAsMSw2NCwwWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsODJIMTc0VjU2YTQ2LDQ2LDAsMCwwLTkyLDBWODJINDhBMTQsMTQsMCwwLDAsMzQsOTZWMjA4YTE0LDE0LDAsMCwwLDE0LDE0SDIwOGExNCwxNCwwLDAsMCwxNC0xNFY5NkExNCwxNCwwLDAsMCwyMDgsODJaTTk0LDU2YTM0LDM0LDAsMCwxLDY4LDBWODJIOTRaTTIxMCwyMDhhMiwyLDAsMCwxLTIsMkg0OGEyLDIsMCwwLDEtMi0yVjk2YTIsMiwwLDAsMSwyLTJIMjA4YTIsMiwwLDAsMSwyLDJabS04Mi05NGEyNiwyNiwwLDAsMC02LDUxLjI5VjE4NGE2LDYsMCwwLDAsMTIsMFYxNjUuMjlBMjYsMjYsMCwwLDAsMTI4LDExNFptMCw0MGExNCwxNCwwLDEsMSwxNC0xNEExNCwxNCwwLDAsMSwxMjgsMTU0WiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTEyYTI4LDI4LDAsMCwwLTgsNTQuODNWMTg0YTgsOCwwLDAsMCwxNiwwVjE2Ni44M0EyOCwyOCwwLDAsMCwxMjgsMTEyWm0wLDQwYTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDEyOCwxNTJabTgwLTcySDE3NlY1NmE0OCw0OCwwLDAsMC05NiwwVjgwSDQ4QTE2LDE2LDAsMCwwLDMyLDk2VjIwOGExNiwxNiwwLDAsMCwxNiwxNkgyMDhhMTYsMTYsMCwwLDAsMTYtMTZWOTZBMTYsMTYsMCwwLDAsMjA4LDgwWk05Niw1NmEzMiwzMiwwLDAsMSw2NCwwVjgwSDk2Wk0yMDgsMjA4SDQ4Vjk2SDIwOFYyMDhaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsODRIMTcyVjU2YTQ0LDQ0LDAsMCwwLTg4LDBWODRINDhBMTIsMTIsMCwwLDAsMzYsOTZWMjA4YTEyLDEyLDAsMCwwLDEyLDEySDIwOGExMiwxMiwwLDAsMCwxMi0xMlY5NkExMiwxMiwwLDAsMCwyMDgsODRaTTkyLDU2YTM2LDM2LDAsMCwxLDcyLDBWODRIOTJaTTIxMiwyMDhhNCw0LDAsMCwxLTQsNEg0OGE0LDQsMCwwLDEtNC00Vjk2YTQsNCwwLDAsMSw0LTRIMjA4YTQsNCwwLDAsMSw0LDRabS04NC05MmEyNCwyNCwwLDAsMC00LDQ3LjY2VjE4NGE0LDQsMCwwLDAsOCwwVjE2My42NkEyNCwyNCwwLDAsMCwxMjgsMTE2Wm0wLDQwYTE2LDE2LDAsMSwxLDE2LTE2QTE2LDE2LDAsMCwxLDEyOCwxNTZaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "LockKey";
export { I as LockKey };
