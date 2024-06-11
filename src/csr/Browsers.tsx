/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Browsers";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAsMzJINzZBMjAsMjAsMCwwLDAsNTYsNTJWNzJIMzZBMjAsMjAsMCwwLDAsMTYsOTJWMjA0YTIwLDIwLDAsMCwwLDIwLDIwSDE4MGEyMCwyMCwwLDAsMCwyMC0yMFYxODRoMjBhMjAsMjAsMCwwLDAsMjAtMjBWNTJBMjAsMjAsMCwwLDAsMjIwLDMyWk0xNzYsOTZ2MTZINDBWOTZabTAsMTA0SDQwVjEzNkgxNzZabTQwLTQwSDIwMFY5MmEyMCwyMCwwLDAsMC0yMC0yMEg4MFY1NkgyMTZaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNTZWMTY4YTgsOCwwLDAsMS04LDhIMTkyVjg4YTgsOCwwLDAsMC04LThINjRWNTZhOCw4LDAsMCwxLDgtOEgyMTZBOCw4LDAsMCwxLDIyNCw1NloiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMTYsNDBINzJBMTYsMTYsMCwwLDAsNTYsNTZWNzJINDBBMTYsMTYsMCwwLDAsMjQsODhWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDE4NGExNiwxNiwwLDAsMCwxNi0xNlYxODRoMTZhMTYsMTYsMCwwLDAsMTYtMTZWNTZBMTYsMTYsMCwwLDAsMjE2LDQwWk00MCw4OEgxODR2MTZINDBaTTE4NCwyMDBINDBWMTIwSDE4NHY4MFptMzItMzJIMjAwVjg4YTE2LDE2LDAsMCwwLTE2LTE2SDcyVjU2SDIxNloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDBINzJBMTYsMTYsMCwwLDAsNTYsNTZWNzJINDBBMTYsMTYsMCwwLDAsMjQsODhWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDE4NGExNiwxNiwwLDAsMCwxNi0xNlYxODRoMTZhMTYsMTYsMCwwLDAsMTYtMTZWNTZBMTYsMTYsMCwwLDAsMjE2LDQwWk0xODQsODh2MTZINDBWODhabTMyLDgwSDIwMFY4OGExNiwxNiwwLDAsMC0xNi0xNkg3MlY1NkgyMTZaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDJINzJBMTQsMTQsMCwwLDAsNTgsNTZWNzRINDBBMTQsMTQsMCwwLDAsMjYsODhWMjAwYTE0LDE0LDAsMCwwLDE0LDE0SDE4NGExNCwxNCwwLDAsMCwxNC0xNFYxODJoMThhMTQsMTQsMCwwLDAsMTQtMTRWNTZBMTQsMTQsMCwwLDAsMjE2LDQyWk00MCw4NkgxODRhMiwyLDAsMCwxLDIsMnYxOEgzOFY4OEEyLDIsMCwwLDEsNDAsODZaTTE4NiwyMDBhMiwyLDAsMCwxLTIsMkg0MGEyLDIsMCwwLDEtMi0yVjExOEgxODZabTMyLTMyYTIsMiwwLDAsMS0yLDJIMTk4Vjg4YTE0LDE0LDAsMCwwLTE0LTE0SDcwVjU2YTIsMiwwLDAsMSwyLTJIMjE2YTIsMiwwLDAsMSwyLDJaIi8+PC9zdmc+)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDBINzJBMTYsMTYsMCwwLDAsNTYsNTZWNzJINDBBMTYsMTYsMCwwLDAsMjQsODhWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDE4NGExNiwxNiwwLDAsMCwxNi0xNlYxODRoMTZhMTYsMTYsMCwwLDAsMTYtMTZWNTZBMTYsMTYsMCwwLDAsMjE2LDQwWk0xODQsODh2MTZINDBWODhabTAsMTEySDQwVjEyMEgxODR2ODBabTMyLTMySDIwMFY4OGExNiwxNiwwLDAsMC0xNi0xNkg3MlY1NkgyMTZaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDRINzJBMTIsMTIsMCwwLDAsNjAsNTZWNzZINDBBMTIsMTIsMCwwLDAsMjgsODhWMjAwYTEyLDEyLDAsMCwwLDEyLDEySDE4NGExMiwxMiwwLDAsMCwxMi0xMlYxODBoMjBhMTIsMTIsMCwwLDAsMTItMTJWNTZBMTIsMTIsMCwwLDAsMjE2LDQ0Wk00MCw4NEgxODRhNCw0LDAsMCwxLDQsNHYyMEgzNlY4OEE0LDQsMCwwLDEsNDAsODRaTTE4OCwyMDBhNCw0LDAsMCwxLTQsNEg0MGE0LDQsMCwwLDEtNC00VjExNkgxODhabTMyLTMyYTQsNCwwLDAsMS00LDRIMTk2Vjg4YTEyLDEyLDAsMCwwLTEyLTEySDY4VjU2YTQsNCwwLDAsMSw0LTRIMjE2YTQsNCwwLDAsMSw0LDRaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Browsers";
export { I as Browsers };
