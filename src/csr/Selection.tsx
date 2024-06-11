/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Selection";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsNDBhOCw4LDAsMCwxLTgsOEgxMTJhOCw4LDAsMCwxLDAtMTZoMzJBOCw4LDAsMCwxLDE1Miw0MFptLTgsMTY4SDExMmE4LDgsMCwwLDAsMCwxNmgzMmE4LDgsMCwwLDAsMC0xNlpNMjA4LDMySDE4NGE4LDgsMCwwLDAsMCwxNmgyNFY3MmE4LDgsMCwwLDAsMTYsMFY0OEExNiwxNiwwLDAsMCwyMDgsMzJabTgsNzJhOCw4LDAsMCwwLTgsOHYzMmE4LDgsMCwwLDAsMTYsMFYxMTJBOCw4LDAsMCwwLDIxNiwxMDRabTAsNzJhOCw4LDAsMCwwLTgsOHYyNEgxODRhOCw4LDAsMCwwLDAsMTZoMjRhMTYsMTYsMCwwLDAsMTYtMTZWMTg0QTgsOCwwLDAsMCwyMTYsMTc2Wk00MCwxNTJhOCw4LDAsMCwwLDgtOFYxMTJhOCw4LDAsMCwwLTE2LDB2MzJBOCw4LDAsMCwwLDQwLDE1MlptMzIsNTZINDhWMTg0YTgsOCwwLDAsMC0xNiwwdjI0YTE2LDE2LDAsMCwwLDE2LDE2SDcyYTgsOCwwLDAsMCwwLTE2Wk03MiwzMkg0OEExNiwxNiwwLDAsMCwzMiw0OFY3MmE4LDgsMCwwLDAsMTYsMFY0OEg3MmE4LDgsMCwwLDAsMC0xNloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDgsNDBhNCw0LDAsMCwxLTQsNEgxMTJhNCw0LDAsMCwxLDAtOGgzMkE0LDQsMCwwLDEsMTQ4LDQwWm0tNCwxNzJIMTEyYTQsNCwwLDAsMCwwLDhoMzJhNCw0LDAsMCwwLDAtOFpNMjA4LDM2SDE4NGE0LDQsMCwwLDAsMCw4aDI0YTQsNCwwLDAsMSw0LDRWNzJhNCw0LDAsMCwwLDgsMFY0OEExMiwxMiwwLDAsMCwyMDgsMzZabTgsNzJhNCw0LDAsMCwwLTQsNHYzMmE0LDQsMCwwLDAsOCwwVjExMkE0LDQsMCwwLDAsMjE2LDEwOFptMCw3MmE0LDQsMCwwLDAtNCw0djI0YTQsNCwwLDAsMS00LDRIMTg0YTQsNCwwLDAsMCwwLDhoMjRhMTIsMTIsMCwwLDAsMTItMTJWMTg0QTQsNCwwLDAsMCwyMTYsMTgwWk00MCwxNDhhNCw0LDAsMCwwLDQtNFYxMTJhNCw0LDAsMCwwLTgsMHYzMkE0LDQsMCwwLDAsNDAsMTQ4Wm0zMiw2NEg0OGE0LDQsMCwwLDEtNC00VjE4NGE0LDQsMCwwLDAtOCwwdjI0YTEyLDEyLDAsMCwwLDEyLDEySDcyYTQsNCwwLDAsMCwwLThaTTcyLDM2SDQ4QTEyLDEyLDAsMCwwLDM2LDQ4VjcyYTQsNCwwLDAsMCw4LDBWNDhhNCw0LDAsMCwxLDQtNEg3MmE0LDQsMCwwLDAsMC04WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTAsNDBhNiw2LDAsMCwxLTYsNkgxMTJhNiw2LDAsMCwxLDAtMTJoMzJBNiw2LDAsMCwxLDE1MCw0MFptLTYsMTcwSDExMmE2LDYsMCwwLDAsMCwxMmgzMmE2LDYsMCwwLDAsMC0xMlpNMjA4LDM0SDE4NGE2LDYsMCwwLDAsMCwxMmgyNGEyLDIsMCwwLDEsMiwyVjcyYTYsNiwwLDAsMCwxMiwwVjQ4QTE0LDE0LDAsMCwwLDIwOCwzNFptOCw3MmE2LDYsMCwwLDAtNiw2djMyYTYsNiwwLDAsMCwxMiwwVjExMkE2LDYsMCwwLDAsMjE2LDEwNlptMCw3MmE2LDYsMCwwLDAtNiw2djI0YTIsMiwwLDAsMS0yLDJIMTg0YTYsNiwwLDAsMCwwLDEyaDI0YTE0LDE0LDAsMCwwLDE0LTE0VjE4NEE2LDYsMCwwLDAsMjE2LDE3OFpNNDAsMTUwYTYsNiwwLDAsMCw2LTZWMTEyYTYsNiwwLDAsMC0xMiwwdjMyQTYsNiwwLDAsMCw0MCwxNTBabTMyLDYwSDQ4YTIsMiwwLDAsMS0yLTJWMTg0YTYsNiwwLDAsMC0xMiwwdjI0YTE0LDE0LDAsMCwwLDE0LDE0SDcyYTYsNiwwLDAsMCwwLTEyWk03MiwzNEg0OEExNCwxNCwwLDAsMCwzNCw0OFY3MmE2LDYsMCwwLDAsMTIsMFY0OGEyLDIsMCwwLDEsMi0ySDcyYTYsNiwwLDAsMCwwLTEyWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTYsNDBhMTIsMTIsMCwwLDEtMTIsMTJIMTEyYTEyLDEyLDAsMCwxLDAtMjRoMzJBMTIsMTIsMCwwLDEsMTU2LDQwWk0xNDQsMjA0SDExMmExMiwxMiwwLDAsMCwwLDI0aDMyYTEyLDEyLDAsMCwwLDAtMjRaTTIwOCwyOEgxODRhMTIsMTIsMCwwLDAsMCwyNGgyMFY3MmExMiwxMiwwLDAsMCwyNCwwVjQ4QTIwLDIwLDAsMCwwLDIwOCwyOFptOCw3MmExMiwxMiwwLDAsMC0xMiwxMnYzMmExMiwxMiwwLDAsMCwyNCwwVjExMkExMiwxMiwwLDAsMCwyMTYsMTAwWm0wLDcyYTEyLDEyLDAsMCwwLTEyLDEydjIwSDE4NGExMiwxMiwwLDAsMCwwLDI0aDI0YTIwLDIwLDAsMCwwLDIwLTIwVjE4NEExMiwxMiwwLDAsMCwyMTYsMTcyWk00MCwxNTZhMTIsMTIsMCwwLDAsMTItMTJWMTEyYTEyLDEyLDAsMCwwLTI0LDB2MzJBMTIsMTIsMCwwLDAsNDAsMTU2Wm0zMiw0OEg1MlYxODRhMTIsMTIsMCwwLDAtMjQsMHYyNGEyMCwyMCwwLDAsMCwyMCwyMEg3MmExMiwxMiwwLDAsMCwwLTI0Wk03MiwyOEg0OEEyMCwyMCwwLDAsMCwyOCw0OFY3MmExMiwxMiwwLDAsMCwyNCwwVjUySDcyYTEyLDEyLDAsMCwwLDAtMjRaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTEwNCwyMDBINzJhMTYsMTYsMCwwLDEtMTYtMTZWMTUyYTgsOCwwLDAsMSwxNiwwdjMyaDMyYTgsOCwwLDAsMSwwLDE2Wm0wLTEyOEg3MnYzMmE4LDgsMCwwLDEtMTYsMFY3MkExNiwxNiwwLDAsMSw3Miw1NmgzMmE4LDgsMCwwLDEsMCwxNlptOTYsMTEyYTE2LDE2LDAsMCwxLTE2LDE2SDE1MmE4LDgsMCwwLDEsMC0xNmgzMlYxNTJhOCw4LDAsMCwxLDE2LDBabTAtODBhOCw4LDAsMCwxLTE2LDBWNzJIMTUyYTgsOCwwLDAsMSwwLTE2aDMyYTE2LDE2LDAsMCwxLDE2LDE2WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDBWMjE2SDQwVjQwWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTE1Miw0MGE4LDgsMCwwLDEtOCw4SDExMmE4LDgsMCwwLDEsMC0xNmgzMkE4LDgsMCwwLDEsMTUyLDQwWm0tOCwxNjhIMTEyYTgsOCwwLDAsMCwwLDE2aDMyYTgsOCwwLDAsMCwwLTE2Wk0yMDgsMzJIMTg0YTgsOCwwLDAsMCwwLDE2aDI0VjcyYTgsOCwwLDAsMCwxNiwwVjQ4QTE2LDE2LDAsMCwwLDIwOCwzMlptOCw3MmE4LDgsMCwwLDAtOCw4djMyYTgsOCwwLDAsMCwxNiwwVjExMkE4LDgsMCwwLDAsMjE2LDEwNFptMCw3MmE4LDgsMCwwLDAtOCw4djI0SDE4NGE4LDgsMCwwLDAsMCwxNmgyNGExNiwxNiwwLDAsMCwxNi0xNlYxODRBOCw4LDAsMCwwLDIxNiwxNzZaTTQwLDE1MmE4LDgsMCwwLDAsOC04VjExMmE4LDgsMCwwLDAtMTYsMHYzMkE4LDgsMCwwLDAsNDAsMTUyWm0zMiw1Nkg0OFYxODRhOCw4LDAsMCwwLTE2LDB2MjRhMTYsMTYsMCwwLDAsMTYsMTZINzJhOCw4LDAsMCwwLDAtMTZaTTcyLDMySDQ4QTE2LDE2LDAsMCwwLDMyLDQ4VjcyYTgsOCwwLDAsMCwxNiwwVjQ4SDcyYTgsOCwwLDAsMCwwLTE2WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Selection";
export { I as Selection };
