/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/ArrowFatLinesLeft";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsNzJIMTI4VjMyYTgsOCwwLDAsMC0xMy42Ni01LjY2bC05Niw5NmE4LDgsMCwwLDAsMCwxMS4zMmw5Niw5NkE4LDgsMCwwLDAsMTI4LDIyNFYxODRoMjRhOCw4LDAsMCwwLDgtOFY4MEE4LDgsMCwwLDAsMTUyLDcyWm0tOCw5NkgxMjBhOCw4LDAsMCwwLTgsOHYyOC42OUwzNS4zMSwxMjgsMTEyLDUxLjMxVjgwYTgsOCwwLDAsMCw4LDhoMjRabTgwLTg4djk2YTgsOCwwLDAsMS0xNiwwVjgwYTgsOCwwLDAsMSwxNiwwWm0tMzIsMHY5NmE4LDgsMCwwLDEtMTYsMFY4MGE4LDgsMCwwLDEsMTYsMFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsNzZIMTI0VjMyYTQsNCwwLDAsMC02LjgzLTIuODNsLTk2LDk2YTQsNCwwLDAsMCwwLDUuNjZsOTYsOTZBNCw0LDAsMCwwLDEyNCwyMjRWMTgwaDI4YTQsNCwwLDAsMCw0LTRWODBBNCw0LDAsMCwwLDE1Miw3NlptLTQsOTZIMTIwYTQsNCwwLDAsMC00LDR2MzguMzRMMjkuNjYsMTI4LDExNiw0MS42NlY4MGE0LDQsMCwwLDAsNCw0aDI4Wm03Mi05MnY5NmE0LDQsMCwwLDEtOCwwVjgwYTQsNCwwLDAsMSw4LDBabS0zMiwwdjk2YTQsNCwwLDAsMS04LDBWODBhNCw0LDAsMCwxLDgsMFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsNzRIMTI2VjMyYTYsNiwwLDAsMC0xMC4yNC00LjI0bC05Niw5NmE2LDYsMCwwLDAsMCw4LjQ4bDk2LDk2QTYsNiwwLDAsMCwxMjYsMjI0VjE4MmgyNmE2LDYsMCwwLDAsNi02VjgwQTYsNiwwLDAsMCwxNTIsNzRabS02LDk2SDEyMGE2LDYsMCwwLDAtNiw2djMzLjUxTDMyLjQ5LDEyOCwxMTQsNDYuNDlWODBhNiw2LDAsMCwwLDYsNmgyNlptNzYtOTB2OTZhNiw2LDAsMCwxLTEyLDBWODBhNiw2LDAsMCwxLDEyLDBabS0zMiwwdjk2YTYsNiwwLDAsMS0xMiwwVjgwYTYsNiwwLDAsMSwxMiwwWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYsNjhoLTRWMzJhMTIsMTIsMCwwLDAtMjAuNDktOC40OWwtOTYsOTZhMTIsMTIsMCwwLDAsMCwxN2w5Niw5NkExMiwxMiwwLDAsMCwxMzIsMjI0VjE4OGg0YTEyLDEyLDAsMCwwLDEyLTEyVjgwQTEyLDEyLDAsMCwwLDEzNiw2OFptLTEyLDk2aC00YTEyLDEyLDAsMCwwLTEyLDEydjE5TDQxLDEyOGw2Ny02N1Y4MGExMiwxMiwwLDAsMCwxMiwxMmg0Wk0yMjgsODB2OTZhMTIsMTIsMCwwLDEtMjQsMFY4MGExMiwxMiwwLDAsMSwyNCwwWm0tNDAsMHY5NmExMiwxMiwwLDAsMS0yNCwwVjgwYTEyLDEyLDAsMCwxLDI0LDBaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsODB2OTZhOCw4LDAsMCwxLTgsOEgxMjh2NDBhOCw4LDAsMCwxLTEzLjY2LDUuNjZsLTk2LTk2YTgsOCwwLDAsMSwwLTExLjMybDk2LTk2QTgsOCwwLDAsMSwxMjgsMzJWNzJoMjRBOCw4LDAsMCwxLDE2MCw4MFptMjQtOGE4LDgsMCwwLDAtOCw4djk2YTgsOCwwLDAsMCwxNiwwVjgwQTgsOCwwLDAsMCwxODQsNzJabTMyLDBhOCw4LDAsMCwwLTgsOHY5NmE4LDgsMCwwLDAsMTYsMFY4MEE4LDgsMCwwLDAsMjE2LDcyWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsODB2OTZIMTIwdjQ4TDI0LDEyOGw5Ni05NlY4MFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xNTIsNzJIMTI4VjMyYTgsOCwwLDAsMC0xMy42Ni01LjY2bC05Niw5NmE4LDgsMCwwLDAsMCwxMS4zMmw5Niw5NkE4LDgsMCwwLDAsMTI4LDIyNFYxODRoMjRhOCw4LDAsMCwwLDgtOFY4MEE4LDgsMCwwLDAsMTUyLDcyWm0tOCw5NkgxMjBhOCw4LDAsMCwwLTgsOHYyOC42OUwzNS4zMSwxMjgsMTEyLDUxLjMxVjgwYTgsOCwwLDAsMCw4LDhoMjRabTgwLTg4djk2YTgsOCwwLDAsMS0xNiwwVjgwYTgsOCwwLDAsMSwxNiwwWm0tMzIsMHY5NmE4LDgsMCwwLDEtMTYsMFY4MGE4LDgsMCwwLDEsMTYsMFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ArrowFatLinesLeft";
export { I as ArrowFatLinesLeft };
