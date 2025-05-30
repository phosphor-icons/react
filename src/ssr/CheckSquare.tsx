/* GENERATED FILE */
import * as React from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/CheckSquare";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzMuNjYsOTguMzRhOCw4LDAsMCwxLDAsMTEuMzJsLTU2LDU2YTgsOCwwLDAsMS0xMS4zMiwwbC0yNC0yNGE4LDgsMCwwLDEsMTEuMzItMTEuMzJMMTEyLDE0OC42OWw1MC4zNC01MC4zNUE4LDgsMCwwLDEsMTczLjY2LDk4LjM0Wk0yMjQsNDhWMjA4YTE2LDE2LDAsMCwxLTE2LDE2SDQ4YTE2LDE2LDAsMCwxLTE2LTE2VjQ4QTE2LDE2LDAsMCwxLDQ4LDMySDIwOEExNiwxNiwwLDAsMSwyMjQsNDhaTTIwOCwyMDhWNDhINDhWMjA4SDIwOFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzAuODMsMTAxLjE3YTQsNCwwLDAsMSwwLDUuNjZsLTU2LDU2YTQsNCwwLDAsMS01LjY2LDBsLTI0LTI0YTQsNCwwLDAsMSw1LjY2LTUuNjZMMTEyLDE1NC4zNGw1My4xNy01My4xN0E0LDQsMCwwLDEsMTcwLjgzLDEwMS4xN1pNMjIwLDQ4VjIwOGExMiwxMiwwLDAsMS0xMiwxMkg0OGExMiwxMiwwLDAsMS0xMi0xMlY0OEExMiwxMiwwLDAsMSw0OCwzNkgyMDhBMTIsMTIsMCwwLDEsMjIwLDQ4Wm0tOCwwYTQsNCwwLDAsMC00LTRINDhhNCw0LDAsMCwwLTQsNFYyMDhhNCw0LDAsMCwwLDQsNEgyMDhhNCw0LDAsMCwwLDQtNFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzIuMjQsOTkuNzZhNiw2LDAsMCwxLDAsOC40OGwtNTYsNTZhNiw2LDAsMCwxLTguNDgsMGwtMjQtMjRhNiw2LDAsMCwxLDguNDgtOC40OEwxMTIsMTUxLjUxbDUxLjc2LTUxLjc1QTYsNiwwLDAsMSwxNzIuMjQsOTkuNzZaTTIyMiw0OFYyMDhhMTQsMTQsMCwwLDEtMTQsMTRINDhhMTQsMTQsMCwwLDEtMTQtMTRWNDhBMTQsMTQsMCwwLDEsNDgsMzRIMjA4QTE0LDE0LDAsMCwxLDIyMiw0OFptLTEyLDBhMiwyLDAsMCwwLTItMkg0OGEyLDIsMCwwLDAtMiwyVjIwOGEyLDIsMCwwLDAsMiwySDIwOGEyLDIsMCwwLDAsMi0yWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03OS41MSwxNDQuNDlhMTIsMTIsMCwxLDEsMTctMTdMMTEyLDE0M2w0Ny41MS00Ny41MmExMiwxMiwwLDAsMSwxNywxN2wtNTYsNTZhMTIsMTIsMCwwLDEtMTcsMFpNMjI4LDQ4VjIwOGEyMCwyMCwwLDAsMS0yMCwyMEg0OGEyMCwyMCwwLDAsMS0yMC0yMFY0OEEyMCwyMCwwLDAsMSw0OCwyOEgyMDhBMjAsMjAsMCwwLDEsMjI4LDQ4Wm0tMjQsNEg1MlYyMDRIMjA0WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJabS0zNC4zNCw3Ny42Ni01Niw1NmE4LDgsMCwwLDEtMTEuMzIsMGwtMjQtMjRhOCw4LDAsMCwxLDExLjMyLTExLjMyTDExMiwxNDguNjlsNTAuMzQtNTAuMzVhOCw4LDAsMCwxLDExLjMyLDExLjMyWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDhWMjA4YTgsOCwwLDAsMS04LDhINDhhOCw4LDAsMCwxLTgtOFY0OGE4LDgsMCwwLDEsOC04SDIwOEE4LDgsMCwwLDEsMjE2LDQ4WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTE3My42Niw5OC4zNGE4LDgsMCwwLDEsMCwxMS4zMmwtNTYsNTZhOCw4LDAsMCwxLTExLjMyLDBsLTI0LTI0YTgsOCwwLDAsMSwxMS4zMi0xMS4zMkwxMTIsMTQ4LjY5bDUwLjM0LTUwLjM1QTgsOCwwLDAsMSwxNzMuNjYsOTguMzRaTTIyNCw0OFYyMDhhMTYsMTYsMCwwLDEtMTYsMTZINDhhMTYsMTYsMCwwLDEtMTYtMTZWNDhBMTYsMTYsMCwwLDEsNDgsMzJIMjA4QTE2LDE2LDAsMCwxLDIyNCw0OFpNMjA4LDIwOFY0OEg0OFYyMDhIMjA4WiIvPjwvc3ZnPg==)
 */
const I: Icon = React.forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "CheckSquareIcon";

/** @deprecated Use CheckSquareIcon */
export const CheckSquare = I;
export { I as CheckSquareIcon };
