/* GENERATED FILE */
import * as React from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/TextHSix";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsNTZWMTc2YTgsOCwwLDAsMS0xNiwwVjEyNEg0OHY1MmE4LDgsMCwwLDEtMTYsMFY1NmE4LDgsMCwwLDEsMTYsMHY1Mmg4OFY1NmE4LDgsMCwwLDEsMTYsMFptOTYsMTI0YTM2LDM2LDAsMSwxLTY3LjM0LTE3LjY4Yy4wNy0uMTQuMTQtLjI4LjIyLS40MmwzMi4yNS01NGE4LDgsMCwwLDEsMTMuNzQsOC4ybC0xNi42OSwyOGMuNiwwLDEuMjEtLjA1LDEuODItLjA1QTM2LDM2LDAsMCwxLDI0OCwxODBabS0xNiwwYTIwLDIwLDAsMSwwLTIwLDIwQTIwLDIwLDAsMCwwLDIzMiwxODBaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsMTQ4YTMyLjA4LDMyLjA4LDAsMCwwLTkuNzUsMS41MmwyMS4xOC0zNS40N2E0LDQsMCwwLDAtNi44Ni00LjFsLTMyLjI1LDU0YS44OS44OSwwLDAsMC0uMDguMTdBMzIsMzIsMCwxLDAsMjEyLDE0OFptMCw1NmEyNCwyNCwwLDEsMSwyNC0yNEEyNCwyNCwwLDAsMSwyMTIsMjA0Wk0xNDgsNTZWMTc2YTQsNCwwLDAsMS04LDBWMTIwSDQ0djU2YTQsNCwwLDAsMS04LDBWNTZhNCw0LDAsMCwxLDgsMHY1Nmg5NlY1NmE0LDQsMCwwLDEsOCwwWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsMTQ2YTM0LjUsMzQuNSwwLDAsMC01LjYuNDdsMTguNzUtMzEuMzlhNiw2LDAsMCwwLTEwLjMtNi4xNmwtMzIuMjUsNTQtLjIyLjQxQTM0LDM0LDAsMSwwLDIxMiwxNDZabTAsNTZhMjIsMjIsMCwxLDEsMjItMjJBMjIsMjIsMCwwLDEsMjEyLDIwMlpNMTUwLDU2VjE3NmE2LDYsMCwwLDEtMTIsMFYxMjJINDZ2NTRhNiw2LDAsMCwxLTEyLDBWNTZhNiw2LDAsMCwxLDEyLDB2NTRoOTJWNTZhNiw2LDAsMCwxLDEyLDBaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTcuMDYsMTQwLjMzbDEzLjI0LTIyLjE4YTEyLDEyLDAsMSwwLTIwLjYtMTIuM2wtMzIuMjUsNTRjLS4wOS4xNS0uMTcuMzEtLjI1LjQ3YTQwLDQwLDAsMSwwLDM5Ljg2LTIwWk0yMTIsMTk2YTE2LDE2LDAsMSwxLDE2LTE2QTE2LDE2LDAsMCwxLDIxMiwxOTZaTTE1Niw1NlYxNzZhMTIsMTIsMCwwLDEtMjQsMFYxMjhINTJ2NDhhMTIsMTIsMCwwLDEtMjQsMFY1NmExMiwxMiwwLDAsMSwyNCwwdjQ4aDgwVjU2YTEyLDEyLDAsMCwxLDI0LDBaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMTUyYTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDE5MiwxNTJaTTIyNCw0OFYyMDhhMTYsMTYsMCwwLDEtMTYsMTZINDhhMTYsMTYsMCwwLDEtMTYtMTZWNDhBMTYsMTYsMCwwLDEsNDgsMzJIMjA4QTE2LDE2LDAsMCwxLDIyNCw0OFpNMTI4LDgwYTgsOCwwLDAsMC0xNiwwdjMySDcyVjgwYTgsOCwwLDAsMC0xNiwwdjgwYTgsOCwwLDAsMCwxNiwwVjEyOGg0MHYzMmE4LDgsMCwwLDAsMTYsMFptODAsNzJhMzIsMzIsMCwwLDAtMzItMzJsMTEuNTUtMjBhOCw4LDAsMCwwLTEzLjg2LThsLTI1LjQsNDQtLjE0LjI3QTMyLDMyLDAsMSwwLDIwOCwxNTJaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsNzJWMTkyYTE2LDE2LDAsMCwxLTE2LDE2SDU2YTE2LDE2LDAsMCwxLTE2LTE2VjU2SDIyNEExNiwxNiwwLDAsMSwyNDAsNzJaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTUyLDU2VjE3NmE4LDgsMCwwLDEtMTYsMFYxMjRINDh2NTJhOCw4LDAsMCwxLTE2LDBWNTZhOCw4LDAsMCwxLDE2LDB2NTJoODhWNTZhOCw4LDAsMCwxLDE2LDBabTk2LDEyNGEzNiwzNiwwLDEsMS02Ny4zNC0xNy42OGMuMDctLjE0LjE0LS4yOC4yMi0uNDJsMzIuMjUtNTRhOCw4LDAsMCwxLDEzLjc0LDguMmwtMTYuNjksMjhjLjYsMCwxLjIxLS4wNSwxLjgyLS4wNUEzNiwzNiwwLDAsMSwyNDgsMTgwWm0tMTYsMGEyMCwyMCwwLDEsMC0yMCwyMEEyMCwyMCwwLDAsMCwyMzIsMTgwWiIvPjwvc3ZnPg==)
 */
const I: Icon = React.forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "TextHSixIcon";

/** @deprecated Use TextHSixIcon */
export const TextHSix = I;
export { I as TextHSixIcon };
