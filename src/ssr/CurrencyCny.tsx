/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/CurrencyCny";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik01Niw1NmE4LDgsMCwwLDEsOC04SDE5MmE4LDgsMCwwLDEsMCwxNkg2NEE4LDgsMCwwLDEsNTYsNTZaTTIxNiwxNjBhOCw4LDAsMCwwLTgsOHYxNkgxNzZhMTYsMTYsMCwwLDEtMTYtMTZWMTIwaDQ4YTgsOCwwLDAsMCwwLTE2SDQ4YTgsOCwwLDAsMCwwLDE2SDk2djhhNTYuMDYsNTYuMDYsMCwwLDEtNTYsNTYsOCw4LDAsMCwwLDAsMTYsNzIuMDgsNzIuMDgsMCwwLDAsNzItNzJ2LThoMzJ2NDhhMzIsMzIsMCwwLDAsMzIsMzJoNDBhOCw4LDAsMCwwLDgtOFYxNjhBOCw4LDAsMCwwLDIxNiwxNjBaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik02MCw1NmE0LDQsMCwwLDEsNC00SDE5MmE0LDQsMCwwLDEsMCw4SDY0QTQsNCwwLDAsMSw2MCw1NlpNMjE2LDE2NGE0LDQsMCwwLDAtNCw0djIwSDE3NmEyMCwyMCwwLDAsMS0yMC0yMFYxMTZoNTJhNCw0LDAsMCwwLDAtOEg0OGE0LDQsMCwwLDAsMCw4aDUydjEyYTYwLjA3LDYwLjA3LDAsMCwxLTYwLDYwLDQsNCwwLDAsMCwwLDgsNjguMDcsNjguMDcsMCwwLDAsNjgtNjhWMTE2aDQwdjUyYTI4LDI4LDAsMCwwLDI4LDI4aDQwYTQsNCwwLDAsMCw0LTRWMTY4QTQsNCwwLDAsMCwyMTYsMTY0WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik01OCw1NmE2LDYsMCwwLDEsNi02SDE5MmE2LDYsMCwwLDEsMCwxMkg2NEE2LDYsMCwwLDEsNTgsNTZaTTIxNiwxNjJhNiw2LDAsMCwwLTYsNnYxOEgxNzZhMTgsMTgsMCwwLDEtMTgtMThWMTE4aDUwYTYsNiwwLDAsMCwwLTEySDQ4YTYsNiwwLDAsMCwwLDEySDk4djEwYTU4LjA3LDU4LjA3LDAsMCwxLTU4LDU4LDYsNiwwLDAsMCwwLDEyLDcwLjA4LDcwLjA4LDAsMCwwLDcwLTcwVjExOGgzNnY1MGEzMCwzMCwwLDAsMCwzMCwzMGg0MGE2LDYsMCwwLDAsNi02VjE2OEE2LDYsMCwwLDAsMjE2LDE2MloiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik01Miw1NkExMiwxMiwwLDAsMSw2NCw0NEgxOTJhMTIsMTIsMCwwLDEsMCwyNEg2NEExMiwxMiwwLDAsMSw1Miw1NlpNMjE2LDE1NmExMiwxMiwwLDAsMC0xMiwxMnYxMkgxNzZhMTIsMTIsMCwwLDEtMTItMTJWMTI0aDQ0YTEyLDEyLDAsMCwwLDAtMjRINDhhMTIsMTIsMCwwLDAsMCwyNEg5MnY0YTUyLjA2LDUyLjA2LDAsMCwxLTUyLDUyLDEyLDEyLDAsMCwwLDAsMjQsNzYuMDgsNzYuMDgsMCwwLDAsNzYtNzZ2LTRoMjR2NDRhMzYsMzYsMCwwLDAsMzYsMzZoNDBhMTIsMTIsMCwwLDAsMTItMTJWMTY4QTEyLDEyLDAsMCwwLDIxNiwxNTZaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTZBMTA0LDEwNCwwLDEsMCwyMzIsMTIwLDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDE2Wk04OCw3Mmg4MGE4LDgsMCwwLDEsMCwxNkg4OGE4LDgsMCwwLDEsMC0xNlptMTA0LDg4YTgsOCwwLDAsMS04LDhIMTYwYTI0LDI0LDAsMCwxLTI0LTI0VjEyMEgxMjBhNDguMDUsNDguMDUsMCwwLDEtNDgsNDgsOCw4LDAsMCwxLDAtMTYsMzIsMzIsMCwwLDAsMzItMzJIODBhOCw4LDAsMCwxLDAtMTZoOTZhOCw4LDAsMCwxLDAsMTZIMTUydjI0YTgsOCwwLDAsMCw4LDhoMTZ2LThhOCw4LDAsMCwxLDE2LDBaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsNTZ2NTZINjRWNTZaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNNTYsNTZhOCw4LDAsMCwxLDgtOEgxOTJhOCw4LDAsMCwxLDAsMTZINjRBOCw4LDAsMCwxLDU2LDU2Wk0yMTYsMTYwYTgsOCwwLDAsMC04LDh2MTZIMTc2YTE2LDE2LDAsMCwxLTE2LTE2VjEyMGg0OGE4LDgsMCwwLDAsMC0xNkg0OGE4LDgsMCwwLDAsMCwxNkg5NnY4YTU2LjA2LDU2LjA2LDAsMCwxLTU2LDU2LDgsOCwwLDAsMCwwLDE2LDcyLjA4LDcyLjA4LDAsMCwwLDcyLTcydi04aDMydjQ4YTMyLDMyLDAsMCwwLDMyLDMyaDQwYTgsOCwwLDAsMCw4LThWMTY4QTgsOCwwLDAsMCwyMTYsMTYwWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "CurrencyCny";
export { I as CurrencyCny };
