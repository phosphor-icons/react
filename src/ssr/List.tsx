/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/List";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsMTI4YTEyLDEyLDAsMCwxLTEyLDEySDQwYTEyLDEyLDAsMCwxLDAtMjRIMjE2QTEyLDEyLDAsMCwxLDIyOCwxMjhaTTQwLDc2SDIxNmExMiwxMiwwLDAsMCwwLTI0SDQwYTEyLDEyLDAsMCwwLDAsMjRaTTIxNiwxODBINDBhMTIsMTIsMCwwLDAsMCwyNEgyMTZhMTIsMTIsMCwwLDAsMC0yNFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNjRWMTkySDQwVjY0WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIyNCwxMjhhOCw4LDAsMCwxLTgsOEg0MGE4LDgsMCwwLDEsMC0xNkgyMTZBOCw4LDAsMCwxLDIyNCwxMjhaTTQwLDcySDIxNmE4LDgsMCwwLDAsMC0xNkg0MGE4LDgsMCwwLDAsMCwxNlpNMjE2LDE4NEg0MGE4LDgsMCwwLDAsMCwxNkgyMTZhOCw4LDAsMCwwLDAtMTZaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTE5MiwxODRINjRhOCw4LDAsMCwxLDAtMTZIMTkyYTgsOCwwLDAsMSwwLDE2Wm0wLTQ4SDY0YTgsOCwwLDAsMSwwLTE2SDE5MmE4LDgsMCwwLDEsMCwxNlptMC00OEg2NGE4LDgsMCwwLDEsMC0xNkgxOTJhOCw4LDAsMCwxLDAsMTZaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIsMTI4YTYsNiwwLDAsMS02LDZINDBhNiw2LDAsMCwxLDAtMTJIMjE2QTYsNiwwLDAsMSwyMjIsMTI4Wk00MCw3MEgyMTZhNiw2LDAsMCwwLDAtMTJINDBhNiw2LDAsMCwwLDAsMTJaTTIxNiwxODZINDBhNiw2LDAsMCwwLDAsMTJIMjE2YTYsNiwwLDAsMCwwLTEyWiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTI4YTgsOCwwLDAsMS04LDhINDBhOCw4LDAsMCwxLDAtMTZIMjE2QTgsOCwwLDAsMSwyMjQsMTI4Wk00MCw3MkgyMTZhOCw4LDAsMCwwLDAtMTZINDBhOCw4LDAsMCwwLDAsMTZaTTIxNiwxODRINDBhOCw4LDAsMCwwLDAsMTZIMjE2YTgsOCwwLDAsMCwwLTE2WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAsMTI4YTQsNCwwLDAsMS00LDRINDBhNCw0LDAsMCwxLDAtOEgyMTZBNCw0LDAsMCwxLDIyMCwxMjhaTTQwLDY4SDIxNmE0LDQsMCwwLDAsMC04SDQwYTQsNCwwLDAsMCwwLDhaTTIxNiwxODhINDBhNCw0LDAsMCwwLDAsOEgyMTZhNCw0LDAsMCwwLDAtOFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "List";
export { I as List };
