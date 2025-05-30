/* GENERATED FILE */
import * as React from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Presentation";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDBIMTM2VjI0YTgsOCwwLDAsMC0xNiwwVjQwSDQwQTE2LDE2LDAsMCwwLDI0LDU2VjE3NmExNiwxNiwwLDAsMCwxNiwxNkg3OS4zNkw1Ny43NSwyMTlhOCw4LDAsMCwwLDEyLjUsMTBsMjkuNTktMzdoNTYuMzJsMjkuNTksMzdhOCw4LDAsMSwwLDEyLjUtMTBsLTIxLjYxLTI3SDIxNmExNiwxNiwwLDAsMCwxNi0xNlY1NkExNiwxNiwwLDAsMCwyMTYsNDBabTAsMTM2SDQwVjU2SDIxNlYxNzZaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDRIMTMyVjI0YTQsNCwwLDAsMC04LDBWNDRINDBBMTIsMTIsMCwwLDAsMjgsNTZWMTc2YTEyLDEyLDAsMCwwLDEyLDEySDg3LjY4bC0yNi44LDMzLjVhNCw0LDAsMSwwLDYuMjQsNUw5Ny45MiwxODhoNjAuMTZsMzAuOCwzOC41YTQsNCwwLDAsMCw2LjI0LTVMMTY4LjMyLDE4OEgyMTZhMTIsMTIsMCwwLDAsMTItMTJWNTZBMTIsMTIsMCwwLDAsMjE2LDQ0Wm00LDEzMmE0LDQsMCwwLDEtNCw0SDQwYTQsNCwwLDAsMS00LTRWNTZhNCw0LDAsMCwxLDQtNEgyMTZhNCw0LDAsMCwxLDQsNFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDJIMTM0VjI0YTYsNiwwLDAsMC0xMiwwVjQySDQwQTE0LDE0LDAsMCwwLDI2LDU2VjE3NmExNCwxNCwwLDAsMCwxNCwxNEg4My41Mkw1OS4zMSwyMjAuMjVhNiw2LDAsMCwwLDkuMzgsNy41TDk4Ljg4LDE5MGg1OC4yNGwzMC4xOSwzNy43NWE2LDYsMCwwLDAsOS4zOC03LjVMMTcyLjQ4LDE5MEgyMTZhMTQsMTQsMCwwLDAsMTQtMTRWNTZBMTQsMTQsMCwwLDAsMjE2LDQyWm0yLDEzNGEyLDIsMCwwLDEtMiwySDQwYTIsMiwwLDAsMS0yLTJWNTZhMiwyLDAsMCwxLDItMkgyMTZhMiwyLDAsMCwxLDIsMloiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMzZIMTQwVjI0YTEyLDEyLDAsMCwwLTI0LDBWMzZINDBBMjAsMjAsMCwwLDAsMjAsNTZWMTc2YTIwLDIwLDAsMCwwLDIwLDIwSDcxbC0xNi40LDIwLjVhMTIsMTIsMCwwLDAsMTguNzQsMTVsMjguNC0zNS41aDUyLjQ2bDI4LjQsMzUuNWExMiwxMiwwLDAsMCwxOC43NC0xNUwxODUsMTk2aDMxYTIwLDIwLDAsMCwwLDIwLTIwVjU2QTIwLDIwLDAsMCwwLDIxNiwzNlptLTQsMTM2SDQ0VjYwSDIxMloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDBIMTM2VjI0YTgsOCwwLDAsMC0xNiwwVjQwSDQwQTE2LDE2LDAsMCwwLDI0LDU2VjE3NmExNiwxNiwwLDAsMCwxNiwxNkg3OS4zNkw1Ny43NSwyMTlhOCw4LDAsMCwwLDEyLjUsMTBsMjkuNTktMzdoNTYuMzJsMjkuNTksMzdhOCw4LDAsMSwwLDEyLjUtMTBsLTIxLjYxLTI3SDIxNmExNiwxNiwwLDAsMCwxNi0xNlY1NkExNiwxNiwwLDAsMCwyMTYsNDBaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNTZWMTc2YTgsOCwwLDAsMS04LDhINDBhOCw4LDAsMCwxLTgtOFY1NmE4LDgsMCwwLDEsOC04SDIxNkE4LDgsMCwwLDEsMjI0LDU2WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIxNiw0MEgxMzZWMjRhOCw4LDAsMCwwLTE2LDBWNDBINDBBMTYsMTYsMCwwLDAsMjQsNTZWMTc2YTE2LDE2LDAsMCwwLDE2LDE2SDc5LjM2TDU3Ljc1LDIxOWE4LDgsMCwwLDAsMTIuNSwxMGwyOS41OS0zN2g1Ni4zMmwyOS41OSwzN2E4LDgsMCwxLDAsMTIuNS0xMGwtMjEuNjEtMjdIMjE2YTE2LDE2LDAsMCwwLDE2LTE2VjU2QTE2LDE2LDAsMCwwLDIxNiw0MFptMCwxMzZINDBWNTZIMjE2VjE3NloiLz48L3N2Zz4=)
 */
const I: Icon = React.forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "PresentationIcon";

/** @deprecated Use PresentationIcon */
export const Presentation = I;
export { I as PresentationIcon };
