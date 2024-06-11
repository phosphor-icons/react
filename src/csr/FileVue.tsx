/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/FileVue";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04Ny41NCwxNTQuNjlsLTIwLDU2YTgsOCwwLDAsMS0xNS4wNywwbC0yMC01NmE4LDgsMCwwLDEsMTUuMDctNS4zOEw2MCwxODQuMjFsMTIuNDctMzQuOWE4LDgsMCwwLDEsMTUuMDcsNS4zOFpNMjA4LDE2MGE4LDgsMCwwLDAsMC0xNkgxNzZhOCw4LDAsMCwwLTgsOHY1NmE4LDgsMCwwLDAsOCw4aDMyYTgsOCwwLDAsMCwwLTE2SDE4NFYxODhoMTZhOCw4LDAsMCwwLDAtMTZIMTg0VjE2MFptLTY0LTE2YTgsOCwwLDAsMC04LDh2MzhhMTAsMTAsMCwwLDEtMjAsMFYxNTJhOCw4LDAsMCwwLTE2LDB2MzhhMjYsMjYsMCwwLDAsNTIsMFYxNTJBOCw4LDAsMCwwLDE0NCwxNDRabTcyLTU2djI0YTgsOCwwLDAsMS0xNiwwVjk2SDE1MmE4LDgsMCwwLDEtOC04VjQwSDU2djcyYTgsOCwwLDAsMS0xNiwwVjQwQTE2LDE2LDAsMCwxLDU2LDI0aDk2YTgsOCwwLDAsMSw1LjY2LDIuMzRsNTYsNTZBOCw4LDAsMCwxLDIxNiw4OFptLTI3LjMxLThMMTYwLDUxLjMxVjgwWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04My43NywxNTMuMzVsLTIwLDU2YTQsNCwwLDAsMS03LjU0LDBsLTIwLTU2YTQsNCwwLDAsMSw3LjU0LTIuN0w2MCwxOTYuMTFsMTYuMjMtNDUuNDZhNCw0LDAsMCwxLDcuNTQsMi43Wk0yMDgsMTU2YTQsNCwwLDAsMCwwLThIMTc2YTQsNCwwLDAsMC00LDR2NTZhNCw0LDAsMCwwLDQsNGgzMmE0LDQsMCwwLDAsMC04SDE4MFYxODRoMjBhNCw0LDAsMCwwLDAtOEgxODBWMTU2Wm0tNjQtOGE0LDQsMCwwLDAtNCw0djM4YTE0LDE0LDAsMCwxLTI4LDBWMTUyYTQsNCwwLDAsMC04LDB2MzhhMjIsMjIsMCwwLDAsNDQsMFYxNTJBNCw0LDAsMCwwLDE0NCwxNDhabTY4LTYwdjI0YTQsNCwwLDAsMS04LDBWOTJIMTUyYTQsNCwwLDAsMS00LTRWMzZINTZhNCw0LDAsMCwwLTQsNHY3MmE0LDQsMCwwLDEtOCwwVjQwQTEyLDEyLDAsMCwxLDU2LDI4aDk2YTQsNCwwLDAsMSwyLjgzLDEuMTdsNTYsNTZBNCw0LDAsMCwxLDIxMiw4OFptLTEzLjY2LTRMMTU2LDQxLjY1Vjg0WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04NS42NSwxNTRsLTIwLDU2YTYsNiwwLDAsMS0xMS4zLDBsLTIwLTU2YTYsNiwwLDEsMSwxMS4zLTRMNjAsMTkwLjE2LDc0LjM1LDE1MGE2LDYsMCwwLDEsMTEuMyw0Wk0yMDgsMTU4YTYsNiwwLDAsMCwwLTEySDE3NmE2LDYsMCwwLDAtNiw2djU2YTYsNiwwLDAsMCw2LDZoMzJhNiw2LDAsMCwwLDAtMTJIMTgyVjE4NmgxOGE2LDYsMCwwLDAsMC0xMkgxODJWMTU4Wm0tNjQtMTJhNiw2LDAsMCwwLTYsNnYzOGExMiwxMiwwLDAsMS0yNCwwVjE1MmE2LDYsMCwwLDAtMTIsMHYzOGEyNCwyNCwwLDAsMCw0OCwwVjE1MkE2LDYsMCwwLDAsMTQ0LDE0NlptNzAtNTh2MjRhNiw2LDAsMCwxLTEyLDBWOTRIMTUyYTYsNiwwLDAsMS02LTZWMzhINTZhMiwyLDAsMCwwLTIsMnY3MmE2LDYsMCwwLDEtMTIsMFY0MEExNCwxNCwwLDAsMSw1NiwyNmg5NmE2LDYsMCwwLDEsNC4yNSwxLjc2bDU2LDU2QTYsNiwwLDAsMSwyMTQsODhabS0yMC40OC02TDE1OCw0Ni40OFY4MloiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04Ny4zLDE1NmwtMjAsNTZhMTIsMTIsMCwwLDEtMjIuNiwwbC0yMC01NkExMiwxMiwwLDAsMSw0Ny4zLDE0OEw1NiwxNzIuMzIsNjQuNywxNDhBMTIsMTIsMCwwLDEsODcuMywxNTZaTTIxMiwxOTZIMTkydi00aDEyYTEyLDEyLDAsMCwwLDAtMjRIMTkydi00aDIwYTEyLDEyLDAsMCwwLDAtMjRIMTgwYTEyLDEyLDAsMCwwLTEyLDEydjU2YTEyLDEyLDAsMCwwLDEyLDEyaDMyYTEyLDEyLDAsMCwwLDAtMjRabS02OC01NmExMiwxMiwwLDAsMC0xMiwxMnYzOGE2LDYsMCwwLDEtMTIsMFYxNTJhMTIsMTIsMCwwLDAtMjQsMHYzOGEzMCwzMCwwLDAsMCw2MCwwVjE1MkExMiwxMiwwLDAsMCwxNDQsMTQwWk0zNiwxMDhWNDBBMjAsMjAsMCwwLDEsNTYsMjBoOTZhMTIsMTIsMCwwLDEsOC40OSwzLjUybDU2LDU2QTEyLDEyLDAsMCwxLDIyMCw4OHYyMGExMiwxMiwwLDAsMS0yNCwwdi00SDE0OGExMiwxMiwwLDAsMS0xMi0xMlY0NEg2MHY2NGExMiwxMiwwLDAsMS0yNCwwWk0xNjAsODBoMjNMMTYwLDU3WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTMuNjYsODIuMzRsLTU2LTU2QTgsOCwwLDAsMCwxNTIsMjRoLTk2YTE2LDE2LDAsMCwwLTE2LDE2djc2YTQsNCwwLDAsMCw0LDRIMjEyYTQsNCwwLDAsMCw0LTRWODhBOCw4LDAsMCwwLDIxMy42Niw4Mi4zNFpNMTUyLDg4VjQ0bDQ0LDQ0Wk04Ny4zNiwxNTUsNjcuNDcsMjEwLjY5YTgsOCwwLDAsMS0xNS4wOCwwTDMyLjUsMTU1QTguMjEsOC4yMSwwLDAsMSwzNywxNDQuNTVhOCw4LDAsMCwxLDEwLjQ2LDQuNzZsMTIuNDcsMzQuOSwxMi40Ny0zNC45YTgsOCwwLDAsMSwxMC40Ni00Ljc2QTguMjIsOC4yMiwwLDAsMSw4Ny4zNiwxNTVaTTE4NCwxNjB2MTJoMTUuNzNhOC4xOSw4LjE5LDAsMCwxLDguMjYsNy40Nyw4LDgsMCwwLDEtOCw4LjUzSDE4NHYxMmgyMy43M2E4LjE4LDguMTgsMCwwLDEsOC4yNiw3LjQ3LDgsOCwwLDAsMS04LDguNTNIMTc2YTgsOCwwLDAsMS04LThWMTUyYTgsOCwwLDAsMSw4LThoMzEuNzRhOC4xOCw4LjE4LDAsMCwxLDguMjYsNy40Nyw4LDgsMCwwLDEtOCw4LjUzWm0tMzItOHYzNy40NWMwLDE0LjE0LTExLjA3LDI2LjEyLTI1LjIyLDI2LjU0QTI2LDI2LDAsMCwxLDEwMCwxOTBWMTUyLjI3YTguMTgsOC4xOCwwLDAsMSw3LjQ3LTguMjUsOCw4LDAsMCwxLDguNTQsOHYzNy42NUExMC4yMywxMC4yMywwLDAsMCwxMjUuMjcsMjAwLDEwLDEwLDAsMCwwLDEzNiwxOTBWMTUyLjI3YTguMTgsOC4xOCwwLDAsMSw3LjQ3LTguMjVBOCw4LDAsMCwxLDE1MiwxNTJaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsODhIMTUyVjMyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTg3LjU0LDE1NC42OWwtMjAsNTZhOCw4LDAsMCwxLTE1LjA3LDBsLTIwLTU2YTgsOCwwLDAsMSwxNS4wNy01LjM4TDYwLDE4NC4yMWwxMi40Ny0zNC45YTgsOCwwLDAsMSwxNS4wNyw1LjM4Wk0yMDgsMTYwYTgsOCwwLDAsMCwwLTE2SDE3NmE4LDgsMCwwLDAtOCw4djU2YTgsOCwwLDAsMCw4LDhoMzJhOCw4LDAsMCwwLDAtMTZIMTg0VjE4OGgxNmE4LDgsMCwwLDAsMC0xNkgxODRWMTYwWm0tNjQtMTZhOCw4LDAsMCwwLTgsOHYzOGExMCwxMCwwLDAsMS0yMCwwVjE1MmE4LDgsMCwwLDAtMTYsMHYzOGEyNiwyNiwwLDAsMCw1MiwwVjE1MkE4LDgsMCwwLDAsMTQ0LDE0NFptNzItNTZ2MjRhOCw4LDAsMCwxLTE2LDBWOTZIMTUyYTgsOCwwLDAsMS04LThWNDBINTZ2NzJhOCw4LDAsMCwxLTE2LDBWNDBBMTYsMTYsMCwwLDEsNTYsMjRoOTZhOCw4LDAsMCwxLDUuNjYsMi4zNGw1Niw1NkE4LDgsMCwwLDEsMjE2LDg4Wm0tMjcuMzEtOEwxNjAsNTEuMzFWODBaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "FileVue";
export { I as FileVue };
