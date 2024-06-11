/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/ColumnsPlusLeft";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMzJIMTA0QTE2LDE2LDAsMCwwLDg4LDQ4VjIwOGExNiwxNiwwLDAsMCwxNiwxNmgyNGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwxMjgsMzJabTAsMTc2SDEwNFY0OGgyNFpNMjAwLDMySDE3NmExNiwxNiwwLDAsMC0xNiwxNlYyMDhhMTYsMTYsMCwwLDAsMTYsMTZoMjRhMTYsMTYsMCwwLDAsMTYtMTZWNDhBMTYsMTYsMCwwLDAsMjAwLDMyWm0wLDE3NkgxNzZWNDhoMjRaTTcyLDEyOGE4LDgsMCwwLDEtOCw4SDQ4djE2YTgsOCwwLDAsMS0xNiwwVjEzNkgxNmE4LDgsMCwwLDEsMC0xNkgzMlYxMDRhOCw4LDAsMCwxLDE2LDB2MTZINjRBOCw4LDAsMCwxLDcyLDEyOFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMzZIMTA0QTEyLDEyLDAsMCwwLDkyLDQ4VjIwOGExMiwxMiwwLDAsMCwxMiwxMmgyNGExMiwxMiwwLDAsMCwxMi0xMlY0OEExMiwxMiwwLDAsMCwxMjgsMzZabTQsMTcyYTQsNCwwLDAsMS00LDRIMTA0YTQsNCwwLDAsMS00LTRWNDhhNCw0LDAsMCwxLDQtNGgyNGE0LDQsMCwwLDEsNCw0Wk0yMDAsMzZIMTc2YTEyLDEyLDAsMCwwLTEyLDEyVjIwOGExMiwxMiwwLDAsMCwxMiwxMmgyNGExMiwxMiwwLDAsMCwxMi0xMlY0OEExMiwxMiwwLDAsMCwyMDAsMzZabTQsMTcyYTQsNCwwLDAsMS00LDRIMTc2YTQsNCwwLDAsMS00LTRWNDhhNCw0LDAsMCwxLDQtNGgyNGE0LDQsMCwwLDEsNCw0Wk02OCwxMjhhNCw0LDAsMCwxLTQsNEg0NHYyMGE0LDQsMCwwLDEtOCwwVjEzMkgxNmE0LDQsMCwwLDEsMC04SDM2VjEwNGE0LDQsMCwwLDEsOCwwdjIwSDY0QTQsNCwwLDAsMSw2OCwxMjhaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMzRIMTA0QTE0LDE0LDAsMCwwLDkwLDQ4VjIwOGExNCwxNCwwLDAsMCwxNCwxNGgyNGExNCwxNCwwLDAsMCwxNC0xNFY0OEExNCwxNCwwLDAsMCwxMjgsMzRabTIsMTc0YTIsMiwwLDAsMS0yLDJIMTA0YTIsMiwwLDAsMS0yLTJWNDhhMiwyLDAsMCwxLDItMmgyNGEyLDIsMCwwLDEsMiwyWk0yMDAsMzRIMTc2YTE0LDE0LDAsMCwwLTE0LDE0VjIwOGExNCwxNCwwLDAsMCwxNCwxNGgyNGExNCwxNCwwLDAsMCwxNC0xNFY0OEExNCwxNCwwLDAsMCwyMDAsMzRabTIsMTc0YTIsMiwwLDAsMS0yLDJIMTc2YTIsMiwwLDAsMS0yLTJWNDhhMiwyLDAsMCwxLDItMmgyNGEyLDIsMCwwLDEsMiwyWk03MCwxMjhhNiw2LDAsMCwxLTYsNkg0NnYxOGE2LDYsMCwwLDEtMTIsMFYxMzRIMTZhNiw2LDAsMCwxLDAtMTJIMzRWMTA0YTYsNiwwLDAsMSwxMiwwdjE4SDY0QTYsNiwwLDAsMSw3MCwxMjhaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjQsMjhIMTAwQTIwLDIwLDAsMCwwLDgwLDQ4VjIwOGEyMCwyMCwwLDAsMCwyMCwyMGgyNGEyMCwyMCwwLDAsMCwyMC0yMFY0OEEyMCwyMCwwLDAsMCwxMjQsMjhabS00LDE3NkgxMDRWNTJoMTZaTTIwMCwyOEgxNzZhMjAsMjAsMCwwLDAtMjAsMjBWMjA4YTIwLDIwLDAsMCwwLDIwLDIwaDI0YTIwLDIwLDAsMCwwLDIwLTIwVjQ4QTIwLDIwLDAsMCwwLDIwMCwyOFptLTQsMTc2SDE4MFY1MmgxNlpNNjgsMTI4YTEyLDEyLDAsMCwxLTEyLDEySDQ4djhhMTIsMTIsMCwwLDEtMjQsMHYtOEgxNmExMiwxMiwwLDAsMSwwLTI0aDh2LThhMTIsMTIsMCwwLDEsMjQsMHY4aDhBMTIsMTIsMCwwLDEsNjgsMTI4WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDQsNDhWMjA4YTE2LDE2LDAsMCwxLTE2LDE2SDEwNGExNiwxNiwwLDAsMS0xNi0xNlY0OGExNiwxNiwwLDAsMSwxNi0xNmgyNEExNiwxNiwwLDAsMSwxNDQsNDhabTU2LTE2SDE3NmExNiwxNiwwLDAsMC0xNiwxNlYyMDhhMTYsMTYsMCwwLDAsMTYsMTZoMjRhMTYsMTYsMCwwLDAsMTYtMTZWNDhBMTYsMTYsMCwwLDAsMjAwLDMyWk02NCwxMjBINDhWMTA0YTgsOCwwLDAsMC0xNiwwdjE2SDE2YTgsOCwwLDAsMCwwLDE2SDMydjE2YTgsOCwwLDAsMCwxNiwwVjEzNkg2NGE4LDgsMCwwLDAsMC0xNloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYsNDhWMjA4YTgsOCwwLDAsMS04LDhIMTA0YTgsOCwwLDAsMS04LThWNDhhOCw4LDAsMCwxLDgtOGgyNEE4LDgsMCwwLDEsMTM2LDQ4Wm02NC04SDE3NmE4LDgsMCwwLDAtOCw4VjIwOGE4LDgsMCwwLDAsOCw4aDI0YTgsOCwwLDAsMCw4LThWNDhBOCw4LDAsMCwwLDIwMCw0MFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xMjgsMzJIMTA0QTE2LDE2LDAsMCwwLDg4LDQ4VjIwOGExNiwxNiwwLDAsMCwxNiwxNmgyNGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwxMjgsMzJabTAsMTc2SDEwNFY0OGgyNFpNMjAwLDMySDE3NmExNiwxNiwwLDAsMC0xNiwxNlYyMDhhMTYsMTYsMCwwLDAsMTYsMTZoMjRhMTYsMTYsMCwwLDAsMTYtMTZWNDhBMTYsMTYsMCwwLDAsMjAwLDMyWm0wLDE3NkgxNzZWNDhoMjRaTTcyLDEyOGE4LDgsMCwwLDEtOCw4SDQ4djE2YTgsOCwwLDAsMS0xNiwwVjEzNkgxNmE4LDgsMCwwLDEsMC0xNkgzMlYxMDRhOCw4LDAsMCwxLDE2LDB2MTZINjRBOCw4LDAsMCwxLDcyLDEyOFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ColumnsPlusLeft";
export { I as ColumnsPlusLeft };
