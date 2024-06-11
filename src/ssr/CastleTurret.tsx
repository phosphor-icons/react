/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/CastleTurret";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMjEySDIwNFYxMTdsMTAuMTQtMTAuMTRBMTkuODYsMTkuODYsMCwwLDAsMjIwLDkyLjY5VjQ4YTIwLDIwLDAsMCwwLTIwLTIwSDU2QTIwLDIwLDAsMCwwLDM2LDQ4VjkyLjY5YTE5Ljg2LDE5Ljg2LDAsMCwwLDUuODYsMTQuMTRMNTIsMTE3djk1SDQwYTEyLDEyLDAsMCwwLDAsMjRIMjE2YTEyLDEyLDAsMCwwLDAtMjRaTTcyLjQ5LDEwMy41MSw2MCw5MVY1Mkg4OFY3NmExMiwxMiwwLDAsMCwyNCwwVjUyaDMyVjc2YTEyLDEyLDAsMCwwLDI0LDBWNTJoMjhWOTFsLTEyLjQ5LDEyLjQ4QTEyLDEyLDAsMCwwLDE4MCwxMTJWMjEySDE2NFYxNjhhMzYsMzYsMCwwLDAtNzIsMHY0NEg3NlYxMTJBMTIsMTIsMCwwLDAsNzIuNDksMTAzLjUxWk0xNDAsMjEySDExNlYxNjhhMTIsMTIsMCwwLDEsMjQsMFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNDhWOTIuNjlhOCw4LDAsMCwxLTIuMzQsNS42NUwxOTIsMTEyVjIyNEgxNTJWMTY4YTI0LDI0LDAsMCwwLTQ4LDB2NTZINjRWMTEyTDUwLjM0LDk4LjM0QTgsOCwwLDAsMSw0OCw5Mi42OVY0OGE4LDgsMCwwLDEsOC04SDgwVjcyaDMyVjQwaDMyVjcyaDMyVjQwaDI0QTgsOCwwLDAsMSwyMDgsNDhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjE2LDIxNkgyMDBWMTE1LjMxTDIxMS4zMSwxMDRBMTUuODYsMTUuODYsMCwwLDAsMjE2LDkyLjY5VjQ4YTE2LDE2LDAsMCwwLTE2LTE2SDE3NmE4LDgsMCwwLDAtOCw4VjY0SDE1MlY0MGE4LDgsMCwwLDAtOC04SDExMmE4LDgsMCwwLDAtOCw4VjY0SDg4VjQwYTgsOCwwLDAsMC04LThINTZBMTYsMTYsMCwwLDAsNDAsNDhWOTIuNjlBMTUuODYsMTUuODYsMCwwLDAsNDQuNjksMTA0TDU2LDExNS4zMVYyMTZINDBhOCw4LDAsMCwwLDAsMTZIMjE2YTgsOCwwLDAsMCwwLTE2Wk02OS42NiwxMDYuMzQsNTYsOTIuNjlWNDhINzJWNzJhOCw4LDAsMCwwLDgsOGgzMmE4LDgsMCwwLDAsOC04VjQ4aDE2VjcyYTgsOCwwLDAsMCw4LDhoMzJhOCw4LDAsMCwwLDgtOFY0OGgxNlY5Mi42OWwtMTMuNjYsMTMuNjVBOCw4LDAsMCwwLDE4NCwxMTJWMjE2SDE2MFYxNjhhMzIsMzIsMCwwLDAtNjQsMHY0OEg3MlYxMTJBOCw4LDAsMCwwLDY5LjY2LDEwNi4zNFpNMTQ0LDIxNkgxMTJWMTY4YTE2LDE2LDAsMCwxLDMyLDBaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMjE2SDIwMFYxMTUuMzFMMjExLjMxLDEwNEExNS44NiwxNS44NiwwLDAsMCwyMTYsOTIuNjlWNDhhMTYsMTYsMCwwLDAtMTYtMTZIMTgwYTgsOCwwLDAsMC04LDhWNjRIMTQ4VjQwYTgsOCwwLDAsMC04LThIMTE2YTgsOCwwLDAsMC04LDhWNjRIODRWNDBhOCw4LDAsMCwwLTgtOEg1NkExNiwxNiwwLDAsMCw0MCw0OFY5Mi42OUExNS44NiwxNS44NiwwLDAsMCw0NC42OSwxMDRMNTYsMTE1LjMxVjIxNkg0MGE4LDgsMCwwLDAsMCwxNkgyMTZhOCw4LDAsMCwwLDAtMTZaTTExMiwxNjhhMTYsMTYsMCwwLDEsMzIsMHY0OEgxMTJaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMjE4SDE5OFYxMTQuNDlsMTEuOS0xMS45MWExMy45LDEzLjksMCwwLDAsNC4xLTkuODlWNDhhMTQsMTQsMCwwLDAtMTQtMTRIMTc2YTYsNiwwLDAsMC02LDZWNjZIMTUwVjQwYTYsNiwwLDAsMC02LTZIMTEyYTYsNiwwLDAsMC02LDZWNjZIODZWNDBhNiw2LDAsMCwwLTYtNkg1NkExNCwxNCwwLDAsMCw0Miw0OFY5Mi42OWExMy45LDEzLjksMCwwLDAsNC4xLDkuODlMNTgsMTE0LjQ5VjIxOEg0MGE2LDYsMCwwLDAsMCwxMkgyMTZhNiw2LDAsMCwwLDAtMTJaTTY4LjI0LDEwNy43Niw1NC41OCw5NC4xQTIsMiwwLDAsMSw1NCw5Mi42OVY0OGEyLDIsMCwwLDEsMi0ySDc0VjcyYTYsNiwwLDAsMCw2LDZoMzJhNiw2LDAsMCwwLDYtNlY0NmgyMFY3MmE2LDYsMCwwLDAsNiw2aDMyYTYsNiwwLDAsMCw2LTZWNDZoMThhMiwyLDAsMCwxLDIsMlY5Mi42OWEyLDIsMCwwLDEtLjU4LDEuNDFsLTEzLjY2LDEzLjY2QTYsNiwwLDAsMCwxODYsMTEyVjIxOEgxNThWMTY4YTMwLDMwLDAsMCwwLTYwLDB2NTBINzBWMTEyQTYsNiwwLDAsMCw2OC4yNCwxMDcuNzZaTTE0NiwyMThIMTEwVjE2OGExOCwxOCwwLDAsMSwzNiwwWiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMjE2SDIwMFYxMTUuMzFMMjExLjMxLDEwNEExNS44NiwxNS44NiwwLDAsMCwyMTYsOTIuNjlWNDhhMTYsMTYsMCwwLDAtMTYtMTZIMTc2YTgsOCwwLDAsMC04LDhWNjRIMTUyVjQwYTgsOCwwLDAsMC04LThIMTEyYTgsOCwwLDAsMC04LDhWNjRIODhWNDBhOCw4LDAsMCwwLTgtOEg1NkExNiwxNiwwLDAsMCw0MCw0OFY5Mi42OUExNS44NiwxNS44NiwwLDAsMCw0NC42OSwxMDRMNTYsMTE1LjMxVjIxNkg0MGE4LDgsMCwwLDAsMCwxNkgyMTZhOCw4LDAsMCwwLDAtMTZaTTY5LjY2LDEwNi4zNCw1Niw5Mi42OVY0OEg3MlY3MmE4LDgsMCwwLDAsOCw4aDMyYTgsOCwwLDAsMCw4LThWNDhoMTZWNzJhOCw4LDAsMCwwLDgsOGgzMmE4LDgsMCwwLDAsOC04VjQ4aDE2VjkyLjY5bC0xMy42NiwxMy42NUE4LDgsMCwwLDAsMTg0LDExMlYyMTZIMTYwVjE2OGEzMiwzMiwwLDAsMC02NCwwdjQ4SDcyVjExMkE4LDgsMCwwLDAsNjkuNjYsMTA2LjM0Wk0xNDQsMjE2SDExMlYxNjhhMTYsMTYsMCwwLDEsMzIsMFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMjIwSDE5NlYxMTMuNjZsMTIuNDktMTIuNDlBMTEuOTMsMTEuOTMsMCwwLDAsMjEyLDkyLjY5VjQ4YTEyLDEyLDAsMCwwLTEyLTEySDE3NmE0LDQsMCwwLDAtNCw0VjY4SDE0OFY0MGE0LDQsMCwwLDAtNC00SDExMmE0LDQsMCwwLDAtNCw0VjY4SDg0VjQwYTQsNCwwLDAsMC00LTRINTZBMTIsMTIsMCwwLDAsNDQsNDhWOTIuNjlhMTEuOTMsMTEuOTMsMCwwLDAsMy41MSw4LjQ4TDYwLDExMy42NlYyMjBINDBhNCw0LDAsMCwwLDAsOEgyMTZhNCw0LDAsMCwwLDAtOFpNNjYuODMsMTA5LjE3LDUzLjE3LDk1LjUxQTQsNCwwLDAsMSw1Miw5Mi42OVY0OGE0LDQsMCwwLDEsNC00SDc2VjcyYTQsNCwwLDAsMCw0LDRoMzJhNCw0LDAsMCwwLDQtNFY0NGgyNFY3MmE0LDQsMCwwLDAsNCw0aDMyYTQsNCwwLDAsMCw0LTRWNDRoMjBhNCw0LDAsMCwxLDQsNFY5Mi42OWE0LDQsMCwwLDEtMS4xNywyLjgybC0xMy42NiwxMy42NkE0LDQsMCwwLDAsMTg4LDExMlYyMjBIMTU2VjE2OGEyOCwyOCwwLDAsMC01NiwwdjUySDY4VjExMkE0LDQsMCwwLDAsNjYuODMsMTA5LjE3Wk0xNDgsMjIwSDEwOFYxNjhhMjAsMjAsMCwwLDEsNDAsMFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "CastleTurret";
export { I as CastleTurret };
