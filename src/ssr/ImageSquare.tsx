/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/ImageSquare";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjhINDhBMjAsMjAsMCwwLDAsMjgsNDhWMjA4YTIwLDIwLDAsMCwwLDIwLDIwSDIwOGEyMCwyMCwwLDAsMCwyMC0yMFY0OEEyMCwyMCwwLDAsMCwyMDgsMjhabS00LDI0djYzLjcyTDE4Ni4xNCw5Ny44NmEyMCwyMCwwLDAsMC0yOC4yOCwwTDUyLDIwMy43MlY1MlpNODUuNjYsMjA0LDE3MiwxMTcuNjZsMzIsMzJWMjA0Wk03Niw5NmEyMCwyMCwwLDEsMSwyMCwyMEEyMCwyMCwwLDAsMSw3Niw5NloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNDBINDhhOCw4LDAsMCwwLTgsOFYyMDhhOCw4LDAsMCwwLDgsOGg4LjY5TDE2Ni4zNCwxMDYuMzRhOCw4LDAsMCwxLDExLjMyLDBMMjE2LDE0NC42OVY0OEE4LDgsMCwwLDAsMjA4LDQwWk05NiwxMTJhMTYsMTYsMCwxLDEsMTYtMTZBMTYsMTYsMCwwLDEsOTYsMTEyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIwOCwzMkg0OEExNiwxNiwwLDAsMCwzMiw0OFYyMDhhMTYsMTYsMCwwLDAsMTYsMTZIMjA4YTE2LDE2LDAsMCwwLDE2LTE2VjQ4QTE2LDE2LDAsMCwwLDIwOCwzMlpNNDgsNDhIMjA4djc3LjM4bC0yNC42OS0yNC43YTE2LDE2LDAsMCwwLTIyLjYyLDBMNTMuMzcsMjA4SDQ4Wk0yMDgsMjA4SDc2bDk2LTk2LDM2LDM2djYwWk05NiwxMjBBMjQsMjQsMCwxLDAsNzIsOTYsMjQsMjQsMCwwLDAsOTYsMTIwWm0wLTMyYTgsOCwwLDEsMS04LDhBOCw4LDAsMCwxLDk2LDg4WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTQ4LDQ4SDIwOHY3Ny4zOGwtMjQuNjktMjQuN2ExNiwxNiwwLDAsMC0yMi42MiwwTDUzLjM3LDIwOEg0OFpNODAsOTZhMTYsMTYsMCwxLDEsMTYsMTZBMTYsMTYsMCwwLDEsODAsOTZaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzRINDhBMTQsMTQsMCwwLDAsMzQsNDhWMjA4YTE0LDE0LDAsMCwwLDE0LDE0SDIwOGExNCwxNCwwLDAsMCwxNC0xNFY0OEExNCwxNCwwLDAsMCwyMDgsMzRaTTQ2LDIwOFY0OGEyLDIsMCwwLDEsMi0ySDIwOGEyLDIsMCwwLDEsMiwydjgyLjJsLTI4LjEtMjguMWExNCwxNCwwLDAsMC0xOS44LDBMNTQuMiwyMTBINDhBMiwyLDAsMCwxLDQ2LDIwOFptMTYyLDJINzEuMTdsOTkuNDEtOTkuNDFhMiwyLDAsMCwxLDIuODMsMEwyMTAsMTQ3LjE3VjIwOEEyLDIsMCwwLDEsMjA4LDIxMFpNOTYsMTE4QTIyLDIyLDAsMSwwLDc0LDk2LDIyLDIyLDAsMCwwLDk2LDExOFptMC0zMkExMCwxMCwwLDEsMSw4Niw5NiwxMCwxMCwwLDAsMSw5Niw4NloiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTQ4LDQ4SDIwOHY3Ny4zOGwtMjQuNjktMjQuN2ExNiwxNiwwLDAsMC0yMi42MiwwTDUzLjM3LDIwOEg0OFpNMjA4LDIwOEg3Nmw5Ni05NiwzNiwzNnY2MFpNOTYsMTIwQTI0LDI0LDAsMSwwLDcyLDk2LDI0LDI0LDAsMCwwLDk2LDEyMFptMC0zMmE4LDgsMCwxLDEtOCw4QTgsOCwwLDAsMSw5Niw4OFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzZINDhBMTIsMTIsMCwwLDAsMzYsNDhWMjA4YTEyLDEyLDAsMCwwLDEyLDEySDIwOGExMiwxMiwwLDAsMCwxMi0xMlY0OEExMiwxMiwwLDAsMCwyMDgsMzZaTTQ0LDIwOFY0OGE0LDQsMCwwLDEsNC00SDIwOGE0LDQsMCwwLDEsNCw0djg3bC0zMS41MS0zMS41MmExMiwxMiwwLDAsMC0xNywwTDU1LDIxMkg0OEE0LDQsMCwwLDEsNDQsMjA4Wm0xNjQsNEg2Ni4zNEwxNjkuMTcsMTA5LjE3YTQsNCwwLDAsMSw1LjY2LDBMMjEyLDE0Ni4zNFYyMDhBNCw0LDAsMCwxLDIwOCwyMTJaTTk2LDExNkEyMCwyMCwwLDEsMCw3Niw5NiwyMCwyMCwwLDAsMCw5NiwxMTZabTAtMzJBMTIsMTIsMCwxLDEsODQsOTYsMTIsMTIsMCwwLDEsOTYsODRaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ImageSquare";
export { I as ImageSquare };
