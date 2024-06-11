/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/PianoKeys";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjhINDhBMjAsMjAsMCwwLDAsMjgsNDhWMjA4YTIwLDIwLDAsMCwwLDIwLDIwSDIwOGEyMCwyMCwwLDAsMCwyMC0yMFY0OEEyMCwyMCwwLDAsMCwyMDgsMjhaTTkyLDEzMlY1MmgyNHY4MFptNTIsMjR2NDhIMTEyVjE1NlptMjAtMjRIMTQwVjUyaDI0Wk01Miw1Mkg2OHY5MmExMiwxMiwwLDAsMCwxMiwxMmg4djQ4SDUyWk0yMDQsMjA0SDE2OFYxNTZoOGExMiwxMiwwLDAsMCwxMi0xMlY1MmgxNloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsNDBWMTQ0SDE0NFY0MFpNNzIsMTQ0aDQwVjQwSDcyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIwOCwzMkg0OEExNiwxNiwwLDAsMCwzMiw0OFYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIMjA4YTE2LDE2LDAsMCwwLDE2LTE2VjQ4QTE2LDE2LDAsMCwwLDIwOCwzMlpNODAsNDhoMjR2ODhIODBabTMyLDEwNGE4LDgsMCwwLDAsOC04VjQ4aDE2djk2YTgsOCwwLDAsMCw4LDhoOHY1NkgxMDRWMTUyWm00MC0xNlY0OGgyNHY4OFpNNDgsNDhINjR2OTZhOCw4LDAsMCwwLDgsOEg4OHY1Nkg0OFpNMjA4LDIwOEgxNjhWMTUyaDE2YTgsOCwwLDAsMCw4LThWNDhoMTZWMjA4WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTg4LDIwOEg0OFY0OEg3MnY5NmE4LDgsMCwwLDAsOCw4aDhabTY0LDBIMTA0VjE1Mmg4YTgsOCwwLDAsMCw4LThWNDhoMTZ2OTZhOCw4LDAsMCwwLDgsOGg4Wm01NiwwSDE2OFYxNTJoOGE4LDgsMCwwLDAsOC04VjQ4aDI0VjIwOFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzRINDhBMTQsMTQsMCwwLDAsMzQsNDhWMjA4YTE0LDE0LDAsMCwwLDE0LDE0SDIwOGExNCwxNCwwLDAsMCwxNC0xNFY0OEExNCwxNCwwLDAsMCwyMDgsMzRaTTc4LDQ2aDI4djkySDc4Wm0zNCwxMDRhNiw2LDAsMCwwLDYtNlY0NmgyMHY5OGE2LDYsMCwwLDAsNiw2aDEwdjYwSDEwMlYxNTBabTM4LTEyVjQ2aDI4djkyWk00NiwyMDhWNDhhMiwyLDAsMCwxLDItMkg2NnY5OGE2LDYsMCwwLDAsNiw2SDkwdjYwSDQ4QTIsMiwwLDAsMSw0NiwyMDhabTE2NCwwYTIsMiwwLDAsMS0yLDJIMTY2VjE1MGgxOGE2LDYsMCwwLDAsNi02VjQ2aDE4YTIsMiwwLDAsMSwyLDJaIi8+PC9zdmc+)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTgwLDQ4aDI0djg4SDgwWm0zMiwxMDRhOCw4LDAsMCwwLDgtOFY0OGgxNnY5NmE4LDgsMCwwLDAsOCw4aDh2NTZIMTA0VjE1MlptNDAtMTZWNDhoMjR2ODhaTTQ4LDQ4SDY0djk2YTgsOCwwLDAsMCw4LDhIODh2NTZINDhaTTIwOCwyMDhIMTY4VjE1MmgxNmE4LDgsMCwwLDAsOC04VjQ4aDE2VjIwOFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzZINDhBMTIsMTIsMCwwLDAsMzYsNDhWMjA4YTEyLDEyLDAsMCwwLDEyLDEySDIwOGExMiwxMiwwLDAsMCwxMi0xMlY0OEExMiwxMiwwLDAsMCwyMDgsMzZaTTc2LDQ0aDMydjk2SDc2Wm0zNiwxMDRhNCw0LDAsMCwwLDQtNFY0NGgyNFYxNDRhNCw0LDAsMCwwLDQsNGgxMnY2NEgxMDBWMTQ4Wm0zNi04VjQ0aDMydjk2Wk00NCwyMDhWNDhhNCw0LDAsMCwxLDQtNEg2OFYxNDRhNCw0LDAsMCwwLDQsNEg5MnY2NEg0OEE0LDQsMCwwLDEsNDQsMjA4Wm0xNjgsMGE0LDQsMCwwLDEtNCw0SDE2NFYxNDhoMjBhNCw0LDAsMCwwLDQtNFY0NGgyMGE0LDQsMCwwLDEsNCw0WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "PianoKeys";
export { I as PianoKeys };
