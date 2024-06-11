/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/ChartLineUp";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMjA4YTgsOCwwLDAsMS04LDhIMzJhOCw4LDAsMCwxLTgtOFY0OGE4LDgsMCwwLDEsMTYsMFYxNTYuNjlsNTAuMzQtNTAuMzVhOCw4LDAsMCwxLDExLjMyLDBMMTI4LDEzMi42OSwxODAuNjksODBIMTYwYTgsOCwwLDAsMSwwLTE2aDQwYTgsOCwwLDAsMSw4LDh2NDBhOCw4LDAsMCwxLTE2LDBWOTEuMzFsLTU4LjM0LDU4LjM1YTgsOCwwLDAsMS0xMS4zMiwwTDk2LDEyMy4zMWwtNTYsNTZWMjAwSDIyNEE4LDgsMCwwLDEsMjMyLDIwOFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsMjA4YTQsNCwwLDAsMS00LDRIMzJhNCw0LDAsMCwxLTQtNFY0OGE0LDQsMCwwLDEsOCwwVjE2Ni4zNGw1Ny4xNy01Ny4xN2E0LDQsMCwwLDEsNS42NiwwTDEyOCwxMzguMzQsMTkwLjM0LDc2SDE2MGE0LDQsMCwwLDEsMC04aDQwYTQsNCwwLDAsMSw0LDR2NDBhNCw0LDAsMCwxLTgsMFY4MS42NmwtNjUuMTcsNjUuMTdhNCw0LDAsMCwxLTUuNjYsMEw5NiwxMTcuNjZsLTYwLDYwVjIwNEgyMjRBNCw0LDAsMCwxLDIyOCwyMDhaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAsMjA4YTYsNiwwLDAsMS02LDZIMzJhNiw2LDAsMCwxLTYtNlY0OGE2LDYsMCwwLDEsMTIsMFYxNjEuNTJsNTMuNzYtNTMuNzZhNiw2LDAsMCwxLDguNDgsMEwxMjgsMTM1LjUxLDE4NS41Miw3OEgxNjBhNiw2LDAsMCwxLDAtMTJoNDBhNiw2LDAsMCwxLDYsNnY0MGE2LDYsMCwwLDEtMTIsMFY4Ni40OGwtNjEuNzYsNjEuNzZhNiw2LDAsMCwxLTguNDgsMEw5NiwxMjAuNDlsLTU4LDU4VjIwMkgyMjRBNiw2LDAsMCwxLDIzMCwyMDhaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsMjA4YTEyLDEyLDAsMCwxLTEyLDEySDMyYTEyLDEyLDAsMCwxLTEyLTEyVjQ4YTEyLDEyLDAsMCwxLDI0LDB2OTlsNDMuNTEtNDMuNTJhMTIsMTIsMCwwLDEsMTcsMEwxMjgsMTI3bDQzLTQzSDE2MGExMiwxMiwwLDAsMSwwLTI0aDQwYTEyLDEyLDAsMCwxLDEyLDEydjQwYTEyLDEyLDAsMCwxLTI0LDBWMTAxbC01MS41MSw1MS41MmExMiwxMiwwLDAsMS0xNywwTDk2LDEyOSw0NCwxODF2MTVIMjI0QTEyLDEyLDAsMCwxLDIzNiwyMDhaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDBINDBBMTYsMTYsMCwwLDAsMjQsNTZWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDIxNmExNiwxNiwwLDAsMCwxNi0xNlY1NkExNiwxNiwwLDAsMCwyMTYsNDBaTTIwMCwxOTJINTZhOCw4LDAsMCwxLTgtOFY3MmE4LDgsMCwwLDEsMTYsMHY3Ni42OWwzNC4zNC0zNC4zNWE4LDgsMCwwLDEsMTEuMzIsMEwxMjgsMTMyLjY5LDE3Mi42OSw4OEgxNDRhOCw4LDAsMCwxLDAtMTZoNDhhOCw4LDAsMCwxLDgsOHY0OGE4LDgsMCwwLDEtMTYsMFY5OS4zMWwtNTAuMzQsNTAuMzVhOCw4LDAsMCwxLTExLjMyLDBMMTA0LDEzMS4zMWwtNDAsNDBWMTc2SDIwMGE4LDgsMCwwLDEsMCwxNloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNjRWMjA4SDMyVjQ4SDIwOEExNiwxNiwwLDAsMSwyMjQsNjRaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjMyLDIwOGE4LDgsMCwwLDEtOCw4SDMyYTgsOCwwLDAsMS04LThWNDhhOCw4LDAsMCwxLDE2LDBWMTU2LjY5bDUwLjM0LTUwLjM1YTgsOCwwLDAsMSwxMS4zMiwwTDEyOCwxMzIuNjksMTgwLjY5LDgwSDE2MGE4LDgsMCwwLDEsMC0xNmg0MGE4LDgsMCwwLDEsOCw4djQwYTgsOCwwLDAsMS0xNiwwVjkxLjMxbC01OC4zNCw1OC4zNWE4LDgsMCwwLDEtMTEuMzIsMEw5NiwxMjMuMzFsLTU2LDU2VjIwMEgyMjRBOCw4LDAsMCwxLDIzMiwyMDhaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ChartLineUp";
export { I as ChartLineUp };
