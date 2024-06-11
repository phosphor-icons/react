/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/BabyCarriage";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsMzJoLThhMTYsMTYsMCwwLDAtMTYsMTZ2NTZINTUuMkE0MC4wNyw0MC4wNywwLDAsMCwxNiw3MmE4LDgsMCwwLDAsMCwxNiwyNCwyNCwwLDAsMSwyNCwyNCw4MC4wOSw4MC4wOSwwLDAsMCw4MCw4MGg0MGE4MCw4MCwwLDAsMCwwLTE2MFptNjMuNDgsNzJIMTY2LjgxbDQxLjg2LTMzLjQ5QTYzLjczLDYzLjczLDAsMCwxLDIyMy40OCwxMDRaTTE2MCw0OGE2My41OSw2My41OSwwLDAsMSwzNi42OSwxMS42MUwxNTIsOTUuMzVWNDhabTAsMTI4SDEyMGE2NC4wOSw2NC4wOSwwLDAsMS02My41LTU2aDE2N0E2NC4wOSw2NC4wOSwwLDAsMSwxNjAsMTc2Wm0tNTYsNDhhMTYsMTYsMCwxLDEtMTYtMTZBMTYsMTYsMCwwLDEsMTA0LDIyNFptMTA0LDBhMTYsMTYsMCwxLDEtMTYtMTZBMTYsMTYsMCwwLDEsMjA4LDIyNFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsMzZoLThhMTIsMTIsMCwwLDAtMTIsMTJ2NjBINTEuNzdBMzYsMzYsMCwwLDAsMTYsNzZhNCw0LDAsMCwwLDAsOCwyOCwyOCwwLDAsMSwyOCwyOCw3Ni4wOCw3Ni4wOCwwLDAsMCw3Niw3Nmg0MGE3Niw3NiwwLDAsMCwwLTE1MlptNjcuODcsNzJIMTU1LjRsNTMuNzEtNDNBNjcuNzYsNjcuNzYsMCwwLDEsMjI3Ljg3LDEwOFpNMTUyLDQ0aDhhNjcuNzIsNjcuNzIsMCwwLDEsNDMuMiwxNS41MkwxNDgsMTAzLjY4VjQ4QTQsNCwwLDAsMSwxNTIsNDRabTgsMTM2SDEyMGE2OC4wOCw2OC4wOCwwLDAsMS02Ny44OC02NEgyMjcuODhBNjguMDgsNjguMDgsMCwwLDEsMTYwLDE4MFptLTYwLDQ0YTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDEwMCwyMjRabTEwNCwwYTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDIwNCwyMjRaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsMzRoLThhMTQsMTQsMCwwLDAtMTQsMTR2NThINTMuNTJBMzguMDUsMzguMDUsMCwwLDAsMTYsNzRhNiw2LDAsMCwwLDAsMTIsMjYsMjYsMCwwLDEsMjYsMjYsNzguMDksNzguMDksMCwwLDAsNzgsNzhoNDBhNzgsNzgsMCwwLDAsMC0xNTZabTY1LjcxLDcySDE2MS4xbDQ3LjgyLTM4LjI1QTY1LjY2LDY1LjY2LDAsMCwxLDIyNS43MSwxMDZaTTE1Miw0Nmg4YTY1LjY3LDY1LjY3LDAsMCwxLDQwLDEzLjUzbC01MCw0MFY0OEEyLDIsMCwwLDEsMTUyLDQ2Wm04LDEzMkgxMjBhNjYuMDksNjYuMDksMCwwLDEtNjUuNzMtNjBIMjI1LjczQTY2LjA5LDY2LjA5LDAsMCwxLDE2MCwxNzhabS01OCw0NmExNCwxNCwwLDEsMS0xNC0xNEExNCwxNCwwLDAsMSwxMDIsMjI0Wm0xMDQsMGExNCwxNCwwLDEsMS0xNC0xNEExNCwxNCwwLDAsMSwyMDYsMjI0WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsMjhoLThhMjAsMjAsMCwwLDAtMjAsMjB2NTJINTguMTZBNDAuMDcsNDAuMDcsMCwwLDAsMjAsNzJhMTIsMTIsMCwwLDAsMCwyNCwxNiwxNiwwLDAsMSwxNiwxNiw4NC4wOSw4NC4wOSwwLDAsMCw4NCw4NGg0MGE4NCw4NCwwLDAsMCwwLTE2OFptNDguMDYsNDguMTJBNTkuNTgsNTkuNTgsMCwwLDEsMjE4Ljc5LDEwMEgxNzguMjFaTTE2MCw1MmE1OS42Niw1OS42NiwwLDAsMSwyOS44Myw4TDE1Niw4N1Y1MlptMCwxMjBIMTIwYTYwLjEsNjAuMSwwLDAsMS01OC43OS00OEgyMTguNzlBNjAuMSw2MC4xLDAsMCwxLDE2MCwxNzJabS01Miw1MmEyMCwyMCwwLDEsMS0yMC0yMEEyMCwyMCwwLDAsMSwxMDgsMjI0Wm0xMDQsMGEyMCwyMCwwLDEsMS0yMC0yMEEyMCwyMCwwLDAsMSwyMTIsMjI0WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTUuNTgsNTQuNTVhNy41Myw3LjUzLDAsMCwwLTEuMzItMS4yN0E3OS42OCw3OS42OCwwLDAsMCwxNjAsMzJoLThhMTYsMTYsMCwwLDAtMTYsMTZ2NTZINTUuMkE0MC4wNyw0MC4wNywwLDAsMCwxNiw3MmE4LDgsMCwwLDAsMCwxNiwyNCwyNCwwLDAsMSwyNCwyNCw4MC4wOSw4MC4wOSwwLDAsMCw4MCw4MGg0MEE3OS45NCw3OS45NCwwLDAsMCwyMTUuNTgsNTQuNTVabS02LjkxLDE2QTYzLjczLDYzLjczLDAsMCwxLDIyMy40OCwxMDRIMTY2LjgxWk0xNjAsNDhhNjMuNTksNjMuNTksMCwwLDEsMzYuNjksMTEuNjFMMTUyLDk1LjM1VjQ4Wk0xMDQsMjI0YTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDEwNCwyMjRabTEwNCwwYTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDIwOCwyMjRaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTEySDE0NFY0OGE4LDgsMCwwLDEsOC04aDhBNzIsNzIsMCwwLDEsMjMyLDExMloiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xNjAsMzJoLThhMTYsMTYsMCwwLDAtMTYsMTZ2NTZINTUuMkE0MC4wNyw0MC4wNywwLDAsMCwxNiw3MmE4LDgsMCwwLDAsMCwxNiwyNCwyNCwwLDAsMSwyNCwyNCw4MC4wOSw4MC4wOSwwLDAsMCw4MCw4MGg0MGE4MCw4MCwwLDAsMCwwLTE2MFptNjMuNDgsNzJIMTY2LjgxbDQxLjg2LTMzLjQ5QTYzLjczLDYzLjczLDAsMCwxLDIyMy40OCwxMDRaTTE2MCw0OGE2My41OSw2My41OSwwLDAsMSwzNi42OSwxMS42MUwxNTIsOTUuMzVWNDhabTAsMTI4SDEyMGE2NC4wOSw2NC4wOSwwLDAsMS02My41LTU2aDE2N0E2NC4wOSw2NC4wOSwwLDAsMSwxNjAsMTc2Wm0tNTYsNDhhMTYsMTYsMCwxLDEtMTYtMTZBMTYsMTYsMCwwLDEsMTA0LDIyNFptMTA0LDBhMTYsMTYsMCwxLDEtMTYtMTZBMTYsMTYsMCwwLDEsMjA4LDIyNFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "BabyCarriage";
export { I as BabyCarriage };
