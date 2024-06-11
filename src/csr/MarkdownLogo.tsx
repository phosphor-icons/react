/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/MarkdownLogo";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNDRIMjRBMjAsMjAsMCwwLDAsNCw2NFYxOTJhMjAsMjAsMCwwLDAsMjAsMjBIMjMyYTIwLDIwLDAsMCwwLDIwLTIwVjY0QTIwLDIwLDAsMCwwLDIzMiw0NFptLTQsMTQ0SDI4VjY4SDIyOFpNNDgsMTQ4VjEwOGExMiwxMiwwLDAsMSwyMC40OS04LjQ5TDg4LDExOWwxOS41MS0xOS41MkExMiwxMiwwLDAsMSwxMjgsMTA4djQwYTEyLDEyLDAsMCwxLTI0LDBWMTM3bC03LjUxLDcuNTJhMTIsMTIsMCwwLDEtMTcsMEw3MiwxMzd2MTFhMTIsMTIsMCwwLDEtMjQsMFptOTguNjMtMjMuNWExMiwxMiwwLDAsMSwxNi44Ny0xLjg3bC41LjRWMTA4YTEyLDEyLDAsMCwxLDI0LDB2MTVsLjUtLjRhMTIsMTIsMCwwLDEsMTUsMTguNzRsLTIwLDE2YTEyLDEyLDAsMCwxLTE1LDBsLTIwLTE2QTEyLDEyLDAsMCwxLDE0Ni42MywxMjQuNVoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsNjRWMTkyYTgsOCwwLDAsMS04LDhIMjRhOCw4LDAsMCwxLTgtOFY2NGE4LDgsMCwwLDEsOC04SDIzMkE4LDgsMCwwLDEsMjQwLDY0WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIzMiw0OEgyNEExNiwxNiwwLDAsMCw4LDY0VjE5MmExNiwxNiwwLDAsMCwxNiwxNkgyMzJhMTYsMTYsMCwwLDAsMTYtMTZWNjRBMTYsMTYsMCwwLDAsMjMyLDQ4Wm0wLDE0NEgyNFY2NEgyMzJWMTkyWk0xMjgsMTA0djQ4YTgsOCwwLDAsMS0xNiwwVjEyMy4zMUw5My42NiwxNDEuNjZhOCw4LDAsMCwxLTExLjMyLDBMNjQsMTIzLjMxVjE1MmE4LDgsMCwwLDEtMTYsMFYxMDRhOCw4LDAsMCwxLDEzLjY2LTUuNjZMODgsMTI0LjY5bDI2LjM0LTI2LjM1QTgsOCwwLDAsMSwxMjgsMTA0Wm03Ny42NiwxOC4zNGE4LDgsMCwwLDEsMCwxMS4zMmwtMjQsMjRhOCw4LDAsMCwxLTExLjMyLDBsLTI0LTI0YTgsOCwwLDAsMSwxMS4zMi0xMS4zMkwxNjgsMTMyLjY5VjEwNGE4LDgsMCwwLDEsMTYsMHYyOC42OWwxMC4zNC0xMC4zNUE4LDgsMCwwLDEsMjA1LjY2LDEyMi4zNFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNDhIMjRBMTYsMTYsMCwwLDAsOCw2NFYxOTJhMTYsMTYsMCwwLDAsMTYsMTZIMjMyYTE2LDE2LDAsMCwwLDE2LTE2VjY0QTE2LDE2LDAsMCwwLDIzMiw0OFpNMTI4LDE1MmE4LDgsMCwwLDEtMTYsMFYxMjMuMzFMOTMuNjYsMTQxLjY2YTgsOCwwLDAsMS0xMS4zMiwwTDY0LDEyMy4zMVYxNTJhOCw4LDAsMCwxLTE2LDBWMTA0YTgsOCwwLDAsMSwxMy42Ni01LjY2TDg4LDEyNC42OWwyNi4zNC0yNi4zNUE4LDgsMCwwLDEsMTI4LDEwNFptNzcuNjYtMTguMzQtMjQsMjRhOCw4LDAsMCwxLTExLjMyLDBsLTI0LTI0YTgsOCwwLDAsMSwxMS4zMi0xMS4zMkwxNjgsMTMyLjY5VjEwNGE4LDgsMCwwLDEsMTYsMHYyOC42OWwxMC4zNC0xMC4zNWE4LDgsMCwwLDEsMTEuMzIsMTEuMzJaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNTBIMjRBMTQsMTQsMCwwLDAsMTAsNjRWMTkyYTE0LDE0LDAsMCwwLDE0LDE0SDIzMmExNCwxNCwwLDAsMCwxNC0xNFY2NEExNCwxNCwwLDAsMCwyMzIsNTBabTIsMTQyYTIsMiwwLDAsMS0yLDJIMjRhMiwyLDAsMCwxLTItMlY2NGEyLDIsMCwwLDEsMi0ySDIzMmEyLDIsMCwwLDEsMiwyWk0xMjYsMTA0djQ4YTYsNiwwLDAsMS0xMiwwVjExOC40OUw5Mi4yNCwxNDAuMjRhNiw2LDAsMCwxLTguNDgsMEw2MiwxMTguNDlWMTUyYTYsNiwwLDAsMS0xMiwwVjEwNGE2LDYsMCwwLDEsMTAuMjQtNC4yNEw4OCwxMjcuNTFsMjcuNzYtMjcuNzVBNiw2LDAsMCwxLDEyNiwxMDRabTc4LjI0LDE5Ljc2YTYsNiwwLDAsMSwwLDguNDhsLTI0LDI0YTYsNiwwLDAsMS04LjQ4LDBsLTI0LTI0YTYsNiwwLDEsMSw4LjQ4LTguNDhMMTcwLDEzNy41MVYxMDRhNiw2LDAsMCwxLDEyLDB2MzMuNTFsMTMuNzYtMTMuNzVBNiw2LDAsMCwxLDIwNC4yNCwxMjMuNzZaIi8+PC9zdmc+)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNDhIMjRBMTYsMTYsMCwwLDAsOCw2NFYxOTJhMTYsMTYsMCwwLDAsMTYsMTZIMjMyYTE2LDE2LDAsMCwwLDE2LTE2VjY0QTE2LDE2LDAsMCwwLDIzMiw0OFptMCwxNDRIMjRWNjRIMjMyVjE5MlpNMTI4LDEwNHY0OGE4LDgsMCwwLDEtMTYsMFYxMjMuMzFMOTMuNjYsMTQxLjY2YTgsOCwwLDAsMS0xMS4zMiwwTDY0LDEyMy4zMVYxNTJhOCw4LDAsMCwxLTE2LDBWMTA0YTgsOCwwLDAsMSwxMy42Ni01LjY2TDg4LDEyNC42OWwyNi4zNC0yNi4zNUE4LDgsMCwwLDEsMTI4LDEwNFptNzcuNjYsMTguMzRhOCw4LDAsMCwxLDAsMTEuMzJsLTI0LDI0YTgsOCwwLDAsMS0xMS4zMiwwbC0yNC0yNGE4LDgsMCwwLDEsMTEuMzItMTEuMzJMMTY4LDEzMi42OVYxMDRhOCw4LDAsMCwxLDE2LDB2MjguNjlsMTAuMzQtMTAuMzVBOCw4LDAsMCwxLDIwNS42NiwxMjIuMzRaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNTJIMjRBMTIsMTIsMCwwLDAsMTIsNjRWMTkyYTEyLDEyLDAsMCwwLDEyLDEySDIzMmExMiwxMiwwLDAsMCwxMi0xMlY2NEExMiwxMiwwLDAsMCwyMzIsNTJabTQsMTQwYTQsNCwwLDAsMS00LDRIMjRhNCw0LDAsMCwxLTQtNFY2NGE0LDQsMCwwLDEsNC00SDIzMmE0LDQsMCwwLDEsNCw0Wk0xMjQsMTA0djQ4YTQsNCwwLDAsMS04LDBWMTEzLjY2TDkwLjgzLDEzOC44M2E0LDQsMCwwLDEtNS42NiwwTDYwLDExMy42NlYxNTJhNCw0LDAsMCwxLTgsMFYxMDRhNCw0LDAsMCwxLDYuODMtMi44M0w4OCwxMzAuMzRsMjkuMTctMjkuMTdBNCw0LDAsMCwxLDEyNCwxMDRabTc4LjgzLDIxLjE3YTQsNCwwLDAsMSwwLDUuNjZsLTI0LDI0YTQsNCwwLDAsMS01LjY2LDBsLTI0LTI0YTQsNCwwLDEsMSw1LjY2LTUuNjZMMTcyLDE0Mi4zNFYxMDRhNCw0LDAsMCwxLDgsMHYzOC4zNGwxNy4xNy0xNy4xN0E0LDQsMCwwLDEsMjAyLjgzLDEyNS4xN1oiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "MarkdownLogo";
export { I as MarkdownLogo };
