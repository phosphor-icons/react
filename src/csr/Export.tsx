/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Export";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAsMTEydjk2YTIwLDIwLDAsMCwxLTIwLDIwSDU2YTIwLDIwLDAsMCwxLTIwLTIwVjExMkEyMCwyMCwwLDAsMSw1Niw5Mkg3NmExMiwxMiwwLDAsMSwwLDI0SDYwdjg4SDE5NlYxMTZIMTgwYTEyLDEyLDAsMCwxLDAtMjRoMjBBMjAsMjAsMCwwLDEsMjIwLDExMlpNOTYuNDksNzIuNDksMTE2LDUzdjgzYTEyLDEyLDAsMCwwLDI0LDBWNTNsMTkuNTEsMTkuNTJhMTIsMTIsMCwxLDAsMTctMTdsLTQwLTQwYTEyLDEyLDAsMCwwLTE3LDBsLTQwLDQwYTEyLDEyLDAsMSwwLDE3LDE3WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTA0VjIxNkg0OFYxMDRaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjE2LDExMnY5NmExNiwxNiwwLDAsMS0xNiwxNkg1NmExNiwxNiwwLDAsMS0xNi0xNlYxMTJBMTYsMTYsMCwwLDEsNTYsOTZIODBhOCw4LDAsMCwxLDAsMTZINTZ2OTZIMjAwVjExMkgxNzZhOCw4LDAsMCwxLDAtMTZoMjRBMTYsMTYsMCwwLDEsMjE2LDExMlpNOTMuNjYsNjkuNjYsMTIwLDQzLjMxVjEzNmE4LDgsMCwwLDAsMTYsMFY0My4zMWwyNi4zNCwyNi4zNWE4LDgsMCwwLDAsMTEuMzItMTEuMzJsLTQwLTQwYTgsOCwwLDAsMC0xMS4zMiwwbC00MCw0MEE4LDgsMCwwLDAsOTMuNjYsNjkuNjZaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTEydjk2YTE2LDE2LDAsMCwxLTE2LDE2SDU2YTE2LDE2LDAsMCwxLTE2LTE2VjExMkExNiwxNiwwLDAsMSw1Niw5Nmg2NHY0OGE4LDgsMCwwLDAsMTYsMFY5Nmg2NEExNiwxNiwwLDAsMSwyMTYsMTEyWk0xMzYsNDMuMzFsMjYuMzQsMjYuMzVhOCw4LDAsMCwwLDExLjMyLTExLjMybC00MC00MGE4LDgsMCwwLDAtMTEuMzIsMGwtNDAsNDBBOCw4LDAsMCwwLDkzLjY2LDY5LjY2TDEyMCw0My4zMVY5NmgxNloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTQsMTEydjk2YTE0LDE0LDAsMCwxLTE0LDE0SDU2YTE0LDE0LDAsMCwxLTE0LTE0VjExMkExNCwxNCwwLDAsMSw1Niw5OEg4MGE2LDYsMCwwLDEsMCwxMkg1NmEyLDIsMCwwLDAtMiwydjk2YTIsMiwwLDAsMCwyLDJIMjAwYTIsMiwwLDAsMCwyLTJWMTEyYTIsMiwwLDAsMC0yLTJIMTc2YTYsNiwwLDAsMSwwLTEyaDI0QTE0LDE0LDAsMCwxLDIxNCwxMTJaTTkyLjI0LDY4LjI0LDEyMiwzOC40OVYxMzZhNiw2LDAsMCwwLDEyLDBWMzguNDlsMjkuNzYsMjkuNzVhNiw2LDAsMSwwLDguNDgtOC40OGwtNDAtNDBhNiw2LDAsMCwwLTguNDgsMGwtNDAsNDBhNiw2LDAsMSwwLDguNDgsOC40OFoiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTEydjk2YTE2LDE2LDAsMCwxLTE2LDE2SDU2YTE2LDE2LDAsMCwxLTE2LTE2VjExMkExNiwxNiwwLDAsMSw1Niw5Nkg4MGE4LDgsMCwwLDEsMCwxNkg1NnY5NkgyMDBWMTEySDE3NmE4LDgsMCwwLDEsMC0xNmgyNEExNiwxNiwwLDAsMSwyMTYsMTEyWk05My42Niw2OS42NiwxMjAsNDMuMzFWMTM2YTgsOCwwLDAsMCwxNiwwVjQzLjMxbDI2LjM0LDI2LjM1YTgsOCwwLDAsMCwxMS4zMi0xMS4zMmwtNDAtNDBhOCw4LDAsMCwwLTExLjMyLDBsLTQwLDQwQTgsOCwwLDAsMCw5My42Niw2OS42NloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsMTEydjk2YTEyLDEyLDAsMCwxLTEyLDEySDU2YTEyLDEyLDAsMCwxLTEyLTEyVjExMmExMiwxMiwwLDAsMSwxMi0xMkg4MGE0LDQsMCwwLDEsMCw4SDU2YTQsNCwwLDAsMC00LDR2OTZhNCw0LDAsMCwwLDQsNEgyMDBhNCw0LDAsMCwwLDQtNFYxMTJhNCw0LDAsMCwwLTQtNEgxNzZhNCw0LDAsMCwxLDAtOGgyNEExMiwxMiwwLDAsMSwyMTIsMTEyWk05MC44Myw2Ni44MywxMjQsMzMuNjZWMTM2YTQsNCwwLDAsMCw4LDBWMzMuNjZsMzMuMTcsMzMuMTdhNCw0LDAsMSwwLDUuNjYtNS42NmwtNDAtNDBhNCw0LDAsMCwwLTUuNjYsMGwtNDAsNDBhNCw0LDAsMCwwLDUuNjYsNS42NloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Export";
export { I as Export };
