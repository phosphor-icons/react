/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/ArrowSquareOut";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsMTA0YTEyLDEyLDAsMCwxLTI0LDBWNjlsLTU5LjUxLDU5LjUxYTEyLDEyLDAsMCwxLTE3LTE3TDE4Nyw1MkgxNTJhMTIsMTIsMCwwLDEsMC0yNGg2NGExMiwxMiwwLDAsMSwxMiwxMlptLTQ0LDI0YTEyLDEyLDAsMCwwLTEyLDEydjY0SDUyVjg0aDY0YTEyLDEyLDAsMCwwLDAtMjRINDhBMjAsMjAsMCwwLDAsMjgsODBWMjA4YTIwLDIwLDAsMCwwLDIwLDIwSDE3NmEyMCwyMCwwLDAsMCwyMC0yMFYxNDBBMTIsMTIsMCwwLDAsMTg0LDEyOFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsODBWMjA4YTgsOCwwLDAsMS04LDhINDhhOCw4LDAsMCwxLTgtOFY4MGE4LDgsMCwwLDEsOC04SDE3NkE4LDgsMCwwLDEsMTg0LDgwWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIyNCwxMDRhOCw4LDAsMCwxLTE2LDBWNTkuMzJsLTY2LjMzLDY2LjM0YTgsOCwwLDAsMS0xMS4zMi0xMS4zMkwxOTYuNjgsNDhIMTUyYTgsOCwwLDAsMSwwLTE2aDY0YTgsOCwwLDAsMSw4LDhabS00MCwyNGE4LDgsMCwwLDAtOCw4djcySDQ4VjgwaDcyYTgsOCwwLDAsMCwwLTE2SDQ4QTE2LDE2LDAsMCwwLDMyLDgwVjIwOGExNiwxNiwwLDAsMCwxNiwxNkgxNzZhMTYsMTYsMCwwLDAsMTYtMTZWMTM2QTgsOCwwLDAsMCwxODQsMTI4WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMTM2djcyYTE2LDE2LDAsMCwxLTE2LDE2SDQ4YTE2LDE2LDAsMCwxLTE2LTE2VjgwQTE2LDE2LDAsMCwxLDQ4LDY0aDcyYTgsOCwwLDAsMSwwLDE2SDQ4VjIwOEgxNzZWMTM2YTgsOCwwLDAsMSwxNiwwWm0zMi05NmE4LDgsMCwwLDAtOC04SDE1MmE4LDgsMCwwLDAtNS42NiwxMy42NkwxNzIuNjksNzJsLTQyLjM1LDQyLjM0YTgsOCwwLDAsMCwxMS4zMiwxMS4zMkwxODQsODMuMzFsMjYuMzQsMjYuMzVBOCw4LDAsMCwwLDIyNCwxMDRaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIsMTA0YTYsNiwwLDAsMS0xMiwwVjU0LjQ5bC02OS43NSw2OS43NWE2LDYsMCwwLDEtOC40OC04LjQ4TDIwMS41MSw0NkgxNTJhNiw2LDAsMCwxLDAtMTJoNjRhNiw2LDAsMCwxLDYsNlptLTM4LDI2YTYsNiwwLDAsMC02LDZ2NzJhMiwyLDAsMCwxLTIsMkg0OGEyLDIsMCwwLDEtMi0yVjgwYTIsMiwwLDAsMSwyLTJoNzJhNiw2LDAsMCwwLDAtMTJINDhBMTQsMTQsMCwwLDAsMzQsODBWMjA4YTE0LDE0LDAsMCwwLDE0LDE0SDE3NmExNCwxNCwwLDAsMCwxNC0xNFYxMzZBNiw2LDAsMCwwLDE4NCwxMzBaIi8+PC9zdmc+)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTA0YTgsOCwwLDAsMS0xNiwwVjU5LjMybC02Ni4zMyw2Ni4zNGE4LDgsMCwwLDEtMTEuMzItMTEuMzJMMTk2LjY4LDQ4SDE1MmE4LDgsMCwwLDEsMC0xNmg2NGE4LDgsMCwwLDEsOCw4Wm0tNDAsMjRhOCw4LDAsMCwwLTgsOHY3Mkg0OFY4MGg3MmE4LDgsMCwwLDAsMC0xNkg0OEExNiwxNiwwLDAsMCwzMiw4MFYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIMTc2YTE2LDE2LDAsMCwwLDE2LTE2VjEzNkE4LDgsMCwwLDAsMTg0LDEyOFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAsMTA0YTQsNCwwLDAsMS04LDBWNDkuNjZsLTczLjE2LDczLjE3YTQsNCwwLDAsMS01LjY2LTUuNjZMMjA2LjM0LDQ0SDE1MmE0LDQsMCwwLDEsMC04aDY0YTQsNCwwLDAsMSw0LDRabS0zNiwyOGE0LDQsMCwwLDAtNCw0djcyYTQsNCwwLDAsMS00LDRINDhhNCw0LDAsMCwxLTQtNFY4MGE0LDQsMCwwLDEsNC00aDcyYTQsNCwwLDAsMCwwLThINDhBMTIsMTIsMCwwLDAsMzYsODBWMjA4YTEyLDEyLDAsMCwwLDEyLDEySDE3NmExMiwxMiwwLDAsMCwxMi0xMlYxMzZBNCw0LDAsMCwwLDE4NCwxMzJaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ArrowSquareOut";
export { I as ArrowSquareOut };
