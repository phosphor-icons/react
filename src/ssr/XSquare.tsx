/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/XSquare";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjhINDhBMjAsMjAsMCwwLDAsMjgsNDhWMjA4YTIwLDIwLDAsMCwwLDIwLDIwSDIwOGEyMCwyMCwwLDAsMCwyMC0yMFY0OEEyMCwyMCwwLDAsMCwyMDgsMjhabS00LDE3Nkg1MlY1MkgyMDRaTTg3LjUxLDE1MS41MSwxMTEsMTI4LDg3LjUxLDEwNC40OWExMiwxMiwwLDAsMSwxNy0xN0wxMjgsMTExbDIzLjUxLTIzLjUyYTEyLDEyLDAsMCwxLDE3LDE3TDE0NSwxMjhsMjMuNTIsMjMuNTFhMTIsMTIsMCwwLDEtMTcsMTdMMTI4LDE0NWwtMjMuNTEsMjMuNTJhMTIsMTIsMCwwLDEtMTctMTdaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDhWMjA4YTgsOCwwLDAsMS04LDhINDhhOCw4LDAsMCwxLTgtOFY0OGE4LDgsMCwwLDEsOC04SDIwOEE4LDgsMCwwLDEsMjE2LDQ4WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIwOCwzMkg0OEExNiwxNiwwLDAsMCwzMiw0OFYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIMjA4YTE2LDE2LDAsMCwwLDE2LTE2VjQ4QTE2LDE2LDAsMCwwLDIwOCwzMlptMCwxNzZINDhWNDhIMjA4VjIwOFpNMTY1LjY2LDEwMS42NiwxMzkuMzEsMTI4bDI2LjM1LDI2LjM0YTgsOCwwLDAsMS0xMS4zMiwxMS4zMkwxMjgsMTM5LjMxbC0yNi4zNCwyNi4zNWE4LDgsMCwwLDEtMTEuMzItMTEuMzJMMTE2LjY5LDEyOCw5MC4zNCwxMDEuNjZhOCw4LDAsMCwxLDExLjMyLTExLjMyTDEyOCwxMTYuNjlsMjYuMzQtMjYuMzVhOCw4LDAsMCwxLDExLjMyLDExLjMyWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTE2NS42NiwxNTQuMzRhOCw4LDAsMCwxLTExLjMyLDExLjMyTDEyOCwxMzkuMzFsLTI2LjM0LDI2LjM1YTgsOCwwLDAsMS0xMS4zMi0xMS4zMkwxMTYuNjksMTI4LDkwLjM0LDEwMS42NmE4LDgsMCwwLDEsMTEuMzItMTEuMzJMMTI4LDExNi42OWwyNi4zNC0yNi4zNWE4LDgsMCwwLDEsMTEuMzIsMTEuMzJMMTM5LjMxLDEyOFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzRINDhBMTQsMTQsMCwwLDAsMzQsNDhWMjA4YTE0LDE0LDAsMCwwLDE0LDE0SDIwOGExNCwxNCwwLDAsMCwxNC0xNFY0OEExNCwxNCwwLDAsMCwyMDgsMzRabTIsMTc0YTIsMiwwLDAsMS0yLDJINDhhMiwyLDAsMCwxLTItMlY0OGEyLDIsMCwwLDEsMi0ySDIwOGEyLDIsMCwwLDEsMiwyWk0xNjQuMjQsMTAwLjI0LDEzNi40OCwxMjhsMjcuNzYsMjcuNzZhNiw2LDAsMSwxLTguNDgsOC40OEwxMjgsMTM2LjQ4bC0yNy43NiwyNy43NmE2LDYsMCwwLDEtOC40OC04LjQ4TDExOS41MiwxMjgsOTEuNzYsMTAwLjI0YTYsNiwwLDAsMSw4LjQ4LTguNDhMMTI4LDExOS41MmwyNy43Ni0yNy43NmE2LDYsMCwwLDEsOC40OCw4LjQ4WiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJabTAsMTc2SDQ4VjQ4SDIwOFYyMDhaTTE2NS42NiwxMDEuNjYsMTM5LjMxLDEyOGwyNi4zNSwyNi4zNGE4LDgsMCwwLDEtMTEuMzIsMTEuMzJMMTI4LDEzOS4zMWwtMjYuMzQsMjYuMzVhOCw4LDAsMCwxLTExLjMyLTExLjMyTDExNi42OSwxMjgsOTAuMzQsMTAxLjY2YTgsOCwwLDAsMSwxMS4zMi0xMS4zMkwxMjgsMTE2LjY5bDI2LjM0LTI2LjM1YTgsOCwwLDAsMSwxMS4zMiwxMS4zMloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzZINDhBMTIsMTIsMCwwLDAsMzYsNDhWMjA4YTEyLDEyLDAsMCwwLDEyLDEySDIwOGExMiwxMiwwLDAsMCwxMi0xMlY0OEExMiwxMiwwLDAsMCwyMDgsMzZabTQsMTcyYTQsNCwwLDAsMS00LDRINDhhNCw0LDAsMCwxLTQtNFY0OGE0LDQsMCwwLDEsNC00SDIwOGE0LDQsMCwwLDEsNCw0Wk0xNjIuODMsOTguODMsMTMzLjY2LDEyOGwyOS4xNywyOS4xN2E0LDQsMCwwLDEtNS42Niw1LjY2TDEyOCwxMzMuNjYsOTguODMsMTYyLjgzYTQsNCwwLDAsMS01LjY2LTUuNjZMMTIyLjM0LDEyOCw5My4xNyw5OC44M2E0LDQsMCwwLDEsNS42Ni01LjY2TDEyOCwxMjIuMzRsMjkuMTctMjkuMTdhNCw0LDAsMSwxLDUuNjYsNS42NloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "XSquare";
export { I as XSquare };
