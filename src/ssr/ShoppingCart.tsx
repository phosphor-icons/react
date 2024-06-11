/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/ShoppingCart";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAuMTQsNTguODdBOCw4LDAsMCwwLDIyNCw1Nkg2Mi42OEw1Ni42LDIyLjU3QTgsOCwwLDAsMCw0OC43MywxNkgyNGE4LDgsMCwwLDAsMCwxNmgxOEw2Ny41NiwxNzIuMjlhMjQsMjQsMCwwLDAsNS4zMywxMS4yNywyOCwyOCwwLDEsMCw0NC40LDguNDRoNDUuNDJBMjcuNzUsMjcuNzUsMCwwLDAsMTYwLDIwNGEyOCwyOCwwLDEsMCwyOC0yOEg5MS4xN2E4LDgsMCwwLDEtNy44Ny02LjU3TDgwLjEzLDE1MmgxMTZhMjQsMjQsMCwwLDAsMjMuNjEtMTkuNzFsMTIuMTYtNjYuODZBOCw4LDAsMCwwLDIzMC4xNCw1OC44N1pNMTA0LDIwNGExMiwxMiwwLDEsMS0xMi0xMkExMiwxMiwwLDAsMSwxMDQsMjA0Wm05NiwwYTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDIwMCwyMDRabTQtNzQuNTdBOCw4LDAsMCwxLDE5Ni4xLDEzNkg3Ny4yMkw2NS41OSw3MkgyMTQuNDFaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjcuMDcsNjEuNDRBNCw0LDAsMCwwLDIyNCw2MEg1OS4zNEw1Mi42NiwyMy4yOEE0LDQsMCwwLDAsNDguNzMsMjBIMjRhNCw0LDAsMCwwLDAsOEg0NS4zOWw2LjY5LDM2LjhoMEw3MS40OSwxNzEuNThBMjAsMjAsMCwwLDAsNzksMTgzLjg1LDI0LDI0LDAsMSwwLDEwOS44NywxODhoNjAuMjZBMjQsMjQsMCwxLDAsMTg4LDE4MEg5MS4xN2ExMiwxMiwwLDAsMS0xMS44LTkuODVsLTQtMjIuMTVIMTk2LjFhMjAsMjAsMCwwLDAsMTkuNjgtMTYuNDJsMTIuMTYtNjYuODZBNCw0LDAsMCwwLDIyNy4wNyw2MS40NFpNMTA4LDIwNGExNiwxNiwwLDEsMS0xNi0xNkExNiwxNiwwLDAsMSwxMDgsMjA0Wm05NiwwYTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDIwNCwyMDRabTMuOTEtNzMuODVBMTIsMTIsMCwwLDEsMTk2LjEsMTQwSDczLjg4TDYwLjc5LDY4SDIxOS4yMVoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjguNjEsNjAuMTZBNiw2LDAsMCwwLDIyNCw1OEg2MUw1NC42MywyMi45M0E2LDYsMCwwLDAsNDguNzMsMThIMjRhNiw2LDAsMCwwLDAsMTJINDMuNzJMNjkuNTMsMTcxLjk0YTIxLjkzLDIxLjkzLDAsMCwwLDYuMjQsMTEuNzdBMjYsMjYsMCwxLDAsMTEzLjg5LDE5MGg1Mi4yMkEyNiwyNiwwLDEsMCwxODgsMTc4SDkxLjE3YTEwLDEwLDAsMCwxLTkuODQtOC4yMUw3Ny43MywxNTBIMTk2LjFhMjIsMjIsMCwwLDAsMjEuNjUtMTguMDZMMjI5LjksNjUuMDdBNiw2LDAsMCwwLDIyOC42MSw2MC4xNlpNMTA2LDIwNGExNCwxNCwwLDEsMS0xNC0xNEExNCwxNCwwLDAsMSwxMDYsMjA0Wm05NiwwYTE0LDE0LDAsMSwxLTE0LTE0QTE0LDE0LDAsMCwxLDIwMiwyMDRabTMuOTQtNzQuMjFBMTAsMTAsMCwwLDEsMTk2LjEsMTM4SDc1LjU1TDYzLjE5LDcwSDIxNi44MVoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzMuMjEsNTYuMzFBMTIsMTIsMCwwLDAsMjI0LDUySDY2TDYwLjUzLDIxLjg1QTEyLDEyLDAsMCwwLDQ4LjczLDEySDI0YTEyLDEyLDAsMCwwLDAsMjRIMzguNzFMNjMuNjIsMTczYTI4LDI4LDAsMCwwLDQuMDcsMTAuMjFBMzIsMzIsMCwxLDAsMTIzLDE5NmgzNGEzMiwzMiwwLDEsMCwzMS0yNEg5MS4xN2E0LDQsMCwwLDEtMy45My0zLjI4TDg0LjkyLDE1NkgxOTYuMWEyOCwyOCwwLDAsMCwyNy41NS0yM2wxMi4xNi02Ni44NkExMiwxMiwwLDAsMCwyMzMuMjEsNTYuMzFaTTEwMCwyMDRhOCw4LDAsMSwxLTgtOEE4LDgsMCwwLDEsMTAwLDIwNFptODgsOGE4LDgsMCwxLDEsOC04QTgsOCwwLDAsMSwxODgsMjEyWm0xMi04My4yOEE0LDQsMCwwLDEsMTk2LjEsMTMySDgwLjU2TDcwLjM4LDc2SDIwOS42MloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAuMTQsNTguODdBOCw4LDAsMCwwLDIyNCw1Nkg2Mi42OEw1Ni42LDIyLjU3QTgsOCwwLDAsMCw0OC43MywxNkgyNGE4LDgsMCwwLDAsMCwxNmgxOEw2Ny41NiwxNzIuMjlhMjQsMjQsMCwwLDAsNS4zMywxMS4yNywyOCwyOCwwLDEsMCw0NC40LDguNDRoNDUuNDJBMjcuNzUsMjcuNzUsMCwwLDAsMTYwLDIwNGEyOCwyOCwwLDEsMCwyOC0yOEg5MS4xN2E4LDgsMCwwLDEtNy44Ny02LjU3TDgwLjEzLDE1MmgxMTZhMjQsMjQsMCwwLDAsMjMuNjEtMTkuNzFsMTIuMTYtNjYuODZBOCw4LDAsMCwwLDIzMC4xNCw1OC44N1pNMTA0LDIwNGExMiwxMiwwLDEsMS0xMi0xMkExMiwxMiwwLDAsMSwxMDQsMjA0Wm05NiwwYTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDIwMCwyMDRaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNjRsLTEyLjE2LDY2Ljg2QTE2LDE2LDAsMCwxLDE5Ni4xLDE0NEg3MC41NUw1Niw2NFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMzAuMTQsNTguODdBOCw4LDAsMCwwLDIyNCw1Nkg2Mi42OEw1Ni42LDIyLjU3QTgsOCwwLDAsMCw0OC43MywxNkgyNGE4LDgsMCwwLDAsMCwxNmgxOEw2Ny41NiwxNzIuMjlhMjQsMjQsMCwwLDAsNS4zMywxMS4yNywyOCwyOCwwLDEsMCw0NC40LDguNDRoNDUuNDJBMjcuNzUsMjcuNzUsMCwwLDAsMTYwLDIwNGEyOCwyOCwwLDEsMCwyOC0yOEg5MS4xN2E4LDgsMCwwLDEtNy44Ny02LjU3TDgwLjEzLDE1MmgxMTZhMjQsMjQsMCwwLDAsMjMuNjEtMTkuNzFsMTIuMTYtNjYuODZBOCw4LDAsMCwwLDIzMC4xNCw1OC44N1pNMTA0LDIwNGExMiwxMiwwLDEsMS0xMi0xMkExMiwxMiwwLDAsMSwxMDQsMjA0Wm05NiwwYTEyLDEyLDAsMSwxLTEyLTEyQTEyLDEyLDAsMCwxLDIwMCwyMDRabTQtNzQuNTdBOCw4LDAsMCwxLDE5Ni4xLDEzNkg3Ny4yMkw2NS41OSw3MkgyMTQuNDFaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ShoppingCart";
export { I as ShoppingCart };
