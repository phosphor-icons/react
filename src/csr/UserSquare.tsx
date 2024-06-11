/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/UserSquare";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjhINDhBMjAsMjAsMCwwLDAsMjgsNDhWMjA4YTIwLDIwLDAsMCwwLDIwLDIwSDIwOGEyMCwyMCwwLDAsMCwyMC0yMFY0OEEyMCwyMCwwLDAsMCwyMDgsMjhabS00LDI0VjE5Ni4yNGE4My42Myw4My42MywwLDAsMC0zOS4wOC0zOS42Nyw1Miw1MiwwLDEsMC03My44NCwwQTgzLjYzLDgzLjYzLDAsMCwwLDUyLDE5Ni4yNFY1MlpNMTAwLDEyMGEyOCwyOCwwLDEsMSwyOCwyOEEyOCwyOCwwLDAsMSwxMDAsMTIwWm0yOCw1MmE1OS4zNCw1OS4zNCwwLDAsMSwzNy42OSwxMy4zMUE2MC40NSw2MC40NSwwLDAsMSwxODEuMDYsMjA0SDc0Ljk0YTYwLjQ1LDYwLjQ1LDAsMCwxLDE1LjM3LTE4LjY5QTU5LjM0LDU5LjM0LDAsMCwxLDEyOCwxNzJaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNDBINDhhOCw4LDAsMCwwLTgsOFYyMDhhOCw4LDAsMCwwLDgsOEgyMDhhOCw4LDAsMCwwLDgtOFY0OEE4LDgsMCwwLDAsMjA4LDQwWk01Ny43OCwyMTZBNzIsNzIsMCwwLDEsMTI4LDE2MGE0MCw0MCwwLDEsMSw0MC00MCw0MCw0MCwwLDAsMS00MCw0MCw3Miw3MiwwLDAsMSw3MC4yMiw1NloiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTk2LDEyMGEzMiwzMiwwLDEsMSwzMiwzMkEzMiwzMiwwLDAsMSw5NiwxMjBaTTY4LjY3LDIwOEE2NC40NSw2NC40NSwwLDAsMSw4Ny44LDE4Mi4yYTY0LDY0LDAsMCwxLDgwLjQsMEE2NC40NSw2NC40NSwwLDAsMSwxODcuMzMsMjA4Wk0yMDgsMjA4aC0zLjY3YTc5Ljg3LDc5Ljg3LDAsMCwwLTQ2LjY5LTUwLjI5LDQ4LDQ4LDAsMSwwLTU5LjI4LDBBNzkuODcsNzkuODcsMCwwLDAsNTEuNjcsMjA4SDQ4VjQ4SDIwOFYyMDhaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzIsMTIwYTQ0LDQ0LDAsMSwxLTQ0LTQ0QTQ0LDQ0LDAsMCwxLDE3MiwxMjBabTUyLTcyVjIwOGExNiwxNiwwLDAsMS0xNiwxNkg0OGExNiwxNiwwLDAsMS0xNi0xNlY0OEExNiwxNiwwLDAsMSw0OCwzMkgyMDhBMTYsMTYsMCwwLDEsMjI0LDQ4Wk0yMDgsMjA4VjQ4SDQ4VjIwOGgzLjY3YTgwLjU4LDgwLjU4LDAsMCwxLDI2LjA3LTM4LjI1cTMuMDgtMi40OCw2LjM2LTQuNjJhNCw0LDAsMCwxLDQuODEuMzMsNTkuODIsNTkuODIsMCwwLDAsNzguMTgsMCw0LDQsMCwwLDEsNC44MS0uMzNxMy4yOCwyLjE1LDYuMzYsNC42MkE4MC41OCw4MC41OCwwLDAsMSwyMDQuMzMsMjA4SDIwOFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzRINDhBMTQsMTQsMCwwLDAsMzQsNDhWMjA4YTE0LDE0LDAsMCwwLDE0LDE0SDIwOGExNCwxNCwwLDAsMCwxNC0xNFY0OEExNCwxNCwwLDAsMCwyMDgsMzRaTTk0LDEyMGEzNCwzNCwwLDEsMSwzNCwzNEEzNCwzNCwwLDAsMSw5NCwxMjBaTTY1Ljc3LDIxMGE2Ni40Myw2Ni40MywwLDAsMSwyMC43Ny0yOS4zNiw2Niw2NiwwLDAsMSw4Mi45MiwwQTY2LjQzLDY2LjQzLDAsMCwxLDE5MC4yMywyMTBaTTIxMCwyMDhhMiwyLDAsMCwxLTIsMmgtNS4xN2E3Ny44NSw3Ny44NSwwLDAsMC00OS4zOC01MS43MSw0Niw0NiwwLDEsMC01MC45LDBBNzcuODUsNzcuODUsMCwwLDAsNTMuMTcsMjEwSDQ4YTIsMiwwLDAsMS0yLTJWNDhhMiwyLDAsMCwxLDItMkgyMDhhMiwyLDAsMCwxLDIsMloiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTk2LDEyMGEzMiwzMiwwLDEsMSwzMiwzMkEzMiwzMiwwLDAsMSw5NiwxMjBaTTY4LjY3LDIwOEE2NC4zNiw2NC4zNiwwLDAsMSw4Ny44LDE4Mi4yYTY0LDY0LDAsMCwxLDgwLjQsMEE2NC4zNiw2NC4zNiwwLDAsMSwxODcuMzMsMjA4Wk0yMDgsMjA4aC0zLjY3YTc5LjksNzkuOSwwLDAsMC00Ni42OC01MC4yOSw0OCw0OCwwLDEsMC01OS4zLDBBNzkuOSw3OS45LDAsMCwwLDUxLjY3LDIwOEg0OFY0OEgyMDhWMjA4WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzZINDhBMTIsMTIsMCwwLDAsMzYsNDhWMjA4YTEyLDEyLDAsMCwwLDEyLDEySDIwOGExMiwxMiwwLDAsMCwxMi0xMlY0OEExMiwxMiwwLDAsMCwyMDgsMzZaTTYzLDIxMmE2OCw2OCwwLDAsMSwxMzAsMFptMTQ5LTRhNCw0LDAsMCwxLTQsNGgtNi42NmE3Niw3NiwwLDAsMC01Mi43NS01My4xMyw0NCw0NCwwLDEsMC00MS4xOCwwQTc2LDc2LDAsMCwwLDU0LjY2LDIxMkg0OGE0LDQsMCwwLDEtNC00VjQ4YTQsNCwwLDAsMSw0LTRIMjA4YTQsNCwwLDAsMSw0LDRabS04NC01MmEzNiwzNiwwLDEsMSwzNi0zNkEzNiwzNiwwLDAsMSwxMjgsMTU2WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "UserSquare";
export { I as UserSquare };
