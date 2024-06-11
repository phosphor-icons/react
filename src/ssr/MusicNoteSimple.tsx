/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/MusicNoteSimple";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTEuNDUsNTIuNTFsLTgwLTI0QTEyLDEyLDAsMCwwLDExNiw0MFYxNDAuMjJBNTIsNTIsMCwxLDAsMTQwLDE4NFY1Ni4xM2w2NC41NSwxOS4zNmExMiwxMiwwLDEsMCw2LjktMjNaTTg4LDIxMmEyOCwyOCwwLDEsMSwyOC0yOEEyOCwyOCwwLDAsMSw4OCwyMTJaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTg0YTQwLDQwLDAsMSwxLTQwLTQwQTQwLDQwLDAsMCwxLDEyOCwxODRaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjEwLjMsNTYuMzRsLTgwLTI0QTgsOCwwLDAsMCwxMjAsNDBWMTQ4LjI2QTQ4LDQ4LDAsMSwwLDEzNiwxODRWNTAuNzVsNjkuNywyMC45MWE4LDgsMCwxLDAsNC42LTE1LjMyWk04OCwyMTZhMzIsMzIsMCwxLDEsMzItMzJBMzIsMzIsMCwwLDEsODgsMjE2WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTAuMyw1Ni4zNGwtODAtMjRBOCw4LDAsMCwwLDEyMCw0MFYxNDguMjZBNDgsNDgsMCwxLDAsMTM2LDE4NFY1MC43NWw2OS43LDIwLjkxYTgsOCwwLDEsMCw0LjYtMTUuMzJaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDkuNzIsNTguMjVsLTgwLTI0QTYsNiwwLDAsMCwxMjIsNDBWMTUzLjA1QTQ2LDQ2LDAsMSwwLDEzNCwxODRWNDguMDZsNzIuMjcsMjEuNjlhNiw2LDAsMSwwLDMuNDUtMTEuNVpNODgsMjE4YTM0LDM0LDAsMSwxLDM0LTM0QTM0LDM0LDAsMCwxLDg4LDIxOFoiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTAuMyw1Ni4zNGwtODAtMjRBOCw4LDAsMCwwLDEyMCw0MFYxNDguMjZBNDgsNDgsMCwxLDAsMTM2LDE4NFY1MC43NWw2OS43LDIwLjkxYTgsOCwwLDEsMCw0LjYtMTUuMzJaTTg4LDIxNmEzMiwzMiwwLDEsMSwzMi0zMkEzMiwzMiwwLDAsMSw4OCwyMTZaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDkuMTUsNjAuMTdsLTgwLTI0QTQsNCwwLDAsMCwxMjQsNDBWMTU4Ljc1QTQ0LDQ0LDAsMSwwLDEzMiwxODRWNDUuMzhsNzQuODUsMjIuNDVhNCw0LDAsMCwwLDIuMy03LjY2Wk04OCwyMjBhMzYsMzYsMCwxLDEsMzYtMzZBMzYsMzYsMCwwLDEsODgsMjIwWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "MusicNoteSimple";
export { I as MusicNoteSimple };
