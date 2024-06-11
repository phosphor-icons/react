/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Gif";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDgsNzJWMTg0YTEyLDEyLDAsMCwxLTI0LDBWNzJhMTIsMTIsMCwwLDEsMjQsMFptODQsMTJhMTIsMTIsMCwwLDAsMC0yNEgxNzZhMTIsMTIsMCwwLDAtMTIsMTJWMTg0YTEyLDEyLDAsMCwwLDI0LDBWMTQwaDM2YTEyLDEyLDAsMCwwLDAtMjRIMTg4Vjg0Wk05NiwxMTZINzJhMTIsMTIsMCwwLDAsMCwyNEg4NHYxMmEyMCwyMCwwLDAsMS00MCwwVjEwNEEyMCwyMCwwLDAsMSw2NCw4NGM5LjQyLDAsMTguMTgsNi40NSwyMC4zOCwxNWExMiwxMiwwLDEsMCwyMy4yNC02QzEwMi43LDczLjg4LDg0LjM1LDYwLDY0LDYwYTQ0LjA1LDQ0LjA1LDAsMCwwLTQ0LDQ0djQ4YTQ0LDQ0LDAsMCwwLDg4LDBWMTI4QTEyLDEyLDAsMCwwLDk2LDExNloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNTZWMjAwYTE2LDE2LDAsMCwxLTE2LDE2SDQ4YTE2LDE2LDAsMCwxLTE2LTE2VjU2QTE2LDE2LDAsMCwxLDQ4LDQwSDIwOEExNiwxNiwwLDAsMSwyMjQsNTZaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTQ0LDcyVjE4NGE4LDgsMCwwLDEtMTYsMFY3MmE4LDgsMCwwLDEsMTYsMFptODgtOEgxNzZhOCw4LDAsMCwwLTgsOFYxODRhOCw4LDAsMCwwLDE2LDBWMTM2aDQwYTgsOCwwLDAsMCwwLTE2SDE4NFY4MGg0OGE4LDgsMCwwLDAsMC0xNlpNOTYsMTIwSDcyYTgsOCwwLDAsMCwwLDE2SDg4djE2YTI0LDI0LDAsMCwxLTQ4LDBWMTA0QTI0LDI0LDAsMCwxLDY0LDgwYzExLjE5LDAsMjEuNjEsNy43NCwyNC4yNSwxOGE4LDgsMCwwLDAsMTUuNS00Qzk5LjI3LDc2LjYyLDgyLjU2LDY0LDY0LDY0YTQwLDQwLDAsMCwwLTQwLDQwdjQ4YTQwLDQwLDAsMCwwLDgwLDBWMTI4QTgsOCwwLDAsMCw5NiwxMjBaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDBINDBBMTYsMTYsMCwwLDAsMjQsNTZWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDIxNmExNiwxNiwwLDAsMCwxNi0xNlY1NkExNiwxNiwwLDAsMCwyMTYsNDBaTTExMiwxNDRhMzIsMzIsMCwwLDEtNjQsMFYxMTJhMzIsMzIsMCwwLDEsNTUuODUtMjEuMzMsOCw4LDAsMSwxLTExLjkyLDEwLjY2QTE2LDE2LDAsMCwwLDY0LDExMnYzMmExNiwxNiwwLDAsMCwzMiwwdi04SDg4YTgsOCwwLDAsMSwwLTE2aDE2YTgsOCwwLDAsMSw4LDhabTMyLDI0YTgsOCwwLDAsMS0xNiwwVjg4YTgsOCwwLDAsMSwxNiwwWm02MC03MkgxNzZ2MjRoMjBhOCw4LDAsMCwxLDAsMTZIMTc2djMyYTgsOCwwLDAsMS0xNiwwVjg4YTgsOCwwLDAsMSw4LThoMzZhOCw4LDAsMCwxLDAsMTZaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDIsNzJWMTg0YTYsNiwwLDAsMS0xMiwwVjcyYTYsNiwwLDAsMSwxMiwwWm05MC02SDE3NmE2LDYsMCwwLDAtNiw2VjE4NGE2LDYsMCwwLDAsMTIsMFYxMzRoNDJhNiw2LDAsMCwwLDAtMTJIMTgyVjc4aDUwYTYsNiwwLDAsMCwwLTEyWk05NiwxMjJINzJhNiw2LDAsMCwwLDAsMTJIOTB2MThhMjYsMjYsMCwwLDEtNTIsMFYxMDRBMjYsMjYsMCwwLDEsNjQsNzhjMTIuMDcsMCwyMy4zMyw4LjM4LDI2LjE5LDE5LjVhNiw2LDAsMSwwLDExLjYyLTNDOTcuNTYsNzgsODEuNjYsNjYsNjQsNjZhMzgsMzgsMCwwLDAtMzgsMzh2NDhhMzgsMzgsMCwwLDAsNzYsMFYxMjhBNiw2LDAsMCwwLDk2LDEyMloiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDQsNzJWMTg0YTgsOCwwLDAsMS0xNiwwVjcyYTgsOCwwLDAsMSwxNiwwWm04OC04SDE3NmE4LDgsMCwwLDAtOCw4VjE4NGE4LDgsMCwwLDAsMTYsMFYxMzZoNDBhOCw4LDAsMCwwLDAtMTZIMTg0VjgwaDQ4YTgsOCwwLDAsMCwwLTE2Wk05NiwxMjBINzJhOCw4LDAsMCwwLDAsMTZIODh2MTZhMjQsMjQsMCwwLDEtNDgsMFYxMDRBMjQsMjQsMCwwLDEsNjQsODBjMTEuMTksMCwyMS42MSw3Ljc0LDI0LjI1LDE4YTgsOCwwLDAsMCwxNS41LTRDOTkuMjcsNzYuNjIsODIuNTYsNjQsNjQsNjRhNDAsNDAsMCwwLDAtNDAsNDB2NDhhNDAsNDAsMCwwLDAsODAsMFYxMjhBOCw4LDAsMCwwLDk2LDEyMFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDAsNzJWMTg0YTQsNCwwLDAsMS04LDBWNzJhNCw0LDAsMCwxLDgsMFptOTItNEgxNzZhNCw0LDAsMCwwLTQsNFYxODRhNCw0LDAsMCwwLDgsMFYxMzJoNDRhNCw0LDAsMCwwLDAtOEgxODBWNzZoNTJhNCw0LDAsMCwwLDAtOFpNOTYsMTI0SDcyYTQsNCwwLDAsMCwwLDhIOTJ2MjBhMjgsMjgsMCwwLDEtNTYsMFYxMDRBMjgsMjgsMCwwLDEsNjQsNzZjMTMsMCwyNSw5LDI4LjEzLDIxYTQsNCwwLDEsMCw3Ljc0LTJDOTUuODUsNzkuMzYsODAuNzYsNjgsNjQsNjhhMzYsMzYsMCwwLDAtMzYsMzZ2NDhhMzYsMzYsMCwwLDAsNzIsMFYxMjhBNCw0LDAsMCwwLDk2LDEyNFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Gif";
export { I as Gif };
