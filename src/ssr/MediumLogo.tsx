/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/MediumLogo";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik02OCw2MGE2OCw2OCwwLDEsMCw2OCw2OEE2OC4wNyw2OC4wNywwLDAsMCw2OCw2MFptMCwxMTJhNDQsNDQsMCwxLDEsNDQtNDRBNDQuMDUsNDQuMDUsMCwwLDEsNjgsMTcyWk0xODQsNjBjLTIzLjYzLDAtMzYsMzQuMjEtMzYsNjhzMTIuMzcsNjgsMzYsNjgsMzYtMzQuMjEsMzYtNjhTMjA3LjYzLDYwLDE4NCw2MFptMCwxMTEuODdjLTMuNzQtMi4xNi0xMi0xNy4wOS0xMi00My44N3M4LjI2LTQxLjcxLDEyLTQzLjg3YzMuNzQsMi4xNiwxMiwxNy4wOSwxMiw0My44N1MxODcuNzQsMTY5LjcxLDE4NCwxNzEuODdaTTI1Niw3MlYxODRhMTIsMTIsMCwwLDEtMjQsMFY3MmExMiwxMiwwLDAsMSwyNCwwWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTI4QTU2LDU2LDAsMSwxLDcyLDcyLDU2LDU2LDAsMCwxLDEyOCwxMjhabTU2LTU2Yy0xMy4yNSwwLTI0LDI1LjA3LTI0LDU2czEwLjc1LDU2LDI0LDU2LDI0LTI1LjA3LDI0LTU2UzE5Ny4yNSw3MiwxODQsNzJaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNNzIsNjRhNjQsNjQsMCwxLDAsNjQsNjRBNjQuMDcsNjQuMDcsMCwwLDAsNzIsNjRabTAsMTEyYTQ4LDQ4LDAsMSwxLDQ4LTQ4QTQ4LjA1LDQ4LjA1LDAsMCwxLDcyLDE3NlpNMTg0LDY0Yy01LjY4LDAtMTYuNCwyLjc2LTI0LjMyLDIxLjI1QzE1NC43Myw5Ni44LDE1MiwxMTIsMTUyLDEyOHMyLjczLDMxLjIsNy42OCw0Mi43NUMxNjcuNiwxODkuMjQsMTc4LjMyLDE5MiwxODQsMTkyczE2LjQtMi43NiwyNC4zMi0yMS4yNUMyMTMuMjcsMTU5LjIsMjE2LDE0NCwyMTYsMTI4cy0yLjczLTMxLjItNy42OC00Mi43NUMyMDAuNCw2Ni43NiwxODkuNjgsNjQsMTg0LDY0Wm0wLDExMmMtNS42NCwwLTE2LTE4LjIyLTE2LTQ4czEwLjM2LTQ4LDE2LTQ4LDE2LDE4LjIyLDE2LDQ4UzE4OS42NCwxNzYsMTg0LDE3NlpNMjQ4LDcyVjE4NGE4LDgsMCwwLDEtMTYsMFY3MmE4LDgsMCwwLDEsMTYsMFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYsMTI4QTY0LDY0LDAsMSwxLDcyLDY0LDY0LjA3LDY0LjA3LDAsMCwxLDEzNiwxMjhabTQ4LTY0Yy01LjY4LDAtMTYuNCwyLjc2LTI0LjMyLDIxLjI1QzE1NC43Myw5Ni44LDE1MiwxMTIsMTUyLDEyOHMyLjczLDMxLjIsNy42OCw0Mi43NUMxNjcuNiwxODkuMjQsMTc4LjMyLDE5MiwxODQsMTkyczE2LjQtMi43NiwyNC4zMi0yMS4yNUMyMTMuMjcsMTU5LjIsMjE2LDE0NCwyMTYsMTI4cy0yLjczLTMxLjItNy42OC00Mi43NUMyMDAuNCw2Ni43NiwxODkuNjgsNjQsMTg0LDY0Wm01NiwwYTgsOCwwLDAsMC04LDhWMTg0YTgsOCwwLDAsMCwxNiwwVjcyQTgsOCwwLDAsMCwyNDAsNjRaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03Miw2NmE2Miw2MiwwLDEsMCw2Miw2MkE2Mi4wNyw2Mi4wNywwLDAsMCw3Miw2NlptMCwxMTJhNTAsNTAsMCwxLDEsNTAtNTBBNTAuMDYsNTAuMDYsMCwwLDEsNzIsMTc4Wk0xODQsNjZjLTE3LjEsMC0zMCwyNi42NS0zMCw2MnMxMi45LDYyLDMwLDYyLDMwLTI2LjY1LDMwLTYyUzIwMS4xLDY2LDE4NCw2NlptMCwxMTJjLTcuMzQsMC0xOC0xOS40OC0xOC01MHMxMC42Ni01MCwxOC01MCwxOCwxOS40OCwxOCw1MFMxOTEuMzQsMTc4LDE4NCwxNzhaTTI0Niw3MlYxODRhNiw2LDAsMCwxLTEyLDBWNzJhNiw2LDAsMCwxLDEyLDBaIi8+PC9zdmc+)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03Miw2NGE2NCw2NCwwLDEsMCw2NCw2NEE2NC4wNyw2NC4wNywwLDAsMCw3Miw2NFptMCwxMTJhNDgsNDgsMCwxLDEsNDgtNDhBNDguMDUsNDguMDUsMCwwLDEsNzIsMTc2Wk0xODQsNjRjLTUuNjgsMC0xNi40LDIuNzYtMjQuMzIsMjEuMjVDMTU0LjczLDk2LjgsMTUyLDExMiwxNTIsMTI4czIuNzMsMzEuMiw3LjY4LDQyLjc1QzE2Ny42LDE4OS4yNCwxNzguMzIsMTkyLDE4NCwxOTJzMTYuNC0yLjc2LDI0LjMyLTIxLjI1QzIxMy4yNywxNTkuMiwyMTYsMTQ0LDIxNiwxMjhzLTIuNzMtMzEuMi03LjY4LTQyLjc1QzIwMC40LDY2Ljc2LDE4OS42OCw2NCwxODQsNjRabTAsMTEyYy01LjY0LDAtMTYtMTguMjItMTYtNDhzMTAuMzYtNDgsMTYtNDgsMTYsMTguMjIsMTYsNDhTMTg5LjY0LDE3NiwxODQsMTc2Wk0yNDgsNzJWMTg0YTgsOCwwLDAsMS0xNiwwVjcyYTgsOCwwLDAsMSwxNiwwWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03Miw2OGE2MCw2MCwwLDEsMCw2MCw2MEE2MC4wNyw2MC4wNywwLDAsMCw3Miw2OFptMCwxMTJhNTIsNTIsMCwxLDEsNTItNTJBNTIuMDYsNTIuMDYsMCwwLDEsNzIsMTgwWk0xODQsNjhjLTE2LDAtMjgsMjUuNzktMjgsNjBzMTIsNjAsMjgsNjAsMjgtMjUuNzksMjgtNjBTMjAwLDY4LDE4NCw2OFptMCwxMTJjLTkuNDYsMC0yMC0yMS4zNi0yMC01MnMxMC41NC01MiwyMC01MiwyMCwyMS4zNiwyMCw1MlMxOTMuNDYsMTgwLDE4NCwxODBaTTI0NCw3MlYxODRhNCw0LDAsMCwxLTgsMFY3MmE0LDQsMCwwLDEsOCwwWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "MediumLogo";
export { I as MediumLogo };
