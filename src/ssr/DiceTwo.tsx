/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/DiceTwo";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMzJINjRBMzIsMzIsMCwwLDAsMzIsNjRWMTkyYTMyLDMyLDAsMCwwLDMyLDMySDE5MmEzMiwzMiwwLDAsMCwzMi0zMlY2NEEzMiwzMiwwLDAsMCwxOTIsMzJabTE2LDE2MGExNiwxNiwwLDAsMS0xNiwxNkg2NGExNiwxNiwwLDAsMS0xNi0xNlY2NEExNiwxNiwwLDAsMSw2NCw0OEgxOTJhMTYsMTYsMCwwLDEsMTYsMTZabS04OC04NGExMiwxMiwwLDEsMS0xMi0xMkExMiwxMiwwLDAsMSwxMjAsMTA4Wm00MCw0MGExMiwxMiwwLDEsMS0xMi0xMkExMiwxMiwwLDAsMSwxNjAsMTQ4WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMzZINjRBMjgsMjgsMCwwLDAsMzYsNjRWMTkyYTI4LDI4LDAsMCwwLDI4LDI4SDE5MmEyOCwyOCwwLDAsMCwyOC0yOFY2NEEyOCwyOCwwLDAsMCwxOTIsMzZabTIwLDE1NmEyMCwyMCwwLDAsMS0yMCwyMEg2NGEyMCwyMCwwLDAsMS0yMC0yMFY2NEEyMCwyMCwwLDAsMSw2NCw0NEgxOTJhMjAsMjAsMCwwLDEsMjAsMjBabS05Ni04NGE4LDgsMCwxLDEtOC04QTgsOCwwLDAsMSwxMTYsMTA4Wm00MCw0MGE4LDgsMCwxLDEtOC04QTgsOCwwLDAsMSwxNTYsMTQ4WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMzRINjRBMzAsMzAsMCwwLDAsMzQsNjRWMTkyYTMwLDMwLDAsMCwwLDMwLDMwSDE5MmEzMCwzMCwwLDAsMCwzMC0zMFY2NEEzMCwzMCwwLDAsMCwxOTIsMzRabTE4LDE1OGExOCwxOCwwLDAsMS0xOCwxOEg2NGExOCwxOCwwLDAsMS0xOC0xOFY2NEExOCwxOCwwLDAsMSw2NCw0NkgxOTJhMTgsMTgsMCwwLDEsMTgsMThabS05Mi04NGExMCwxMCwwLDEsMS0xMC0xMEExMCwxMCwwLDAsMSwxMTgsMTA4Wm00MCw0MGExMCwxMCwwLDEsMS0xMC0xMEExMCwxMCwwLDAsMSwxNTgsMTQ4WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMjhINjRBMzYsMzYsMCwwLDAsMjgsNjRWMTkyYTM2LDM2LDAsMCwwLDM2LDM2SDE5MmEzNiwzNiwwLDAsMCwzNi0zNlY2NEEzNiwzNiwwLDAsMCwxOTIsMjhabTEyLDE2NGExMiwxMiwwLDAsMS0xMiwxMkg2NGExMiwxMiwwLDAsMS0xMi0xMlY2NEExMiwxMiwwLDAsMSw2NCw1MkgxOTJhMTIsMTIsMCwwLDEsMTIsMTJabS04NC04OGExNiwxNiwwLDEsMS0xNi0xNkExNiwxNiwwLDAsMSwxMjAsMTA0Wm00OCw0OGExNiwxNiwwLDEsMS0xNi0xNkExNiwxNiwwLDAsMSwxNjgsMTUyWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMzJINjRBMzIsMzIsMCwwLDAsMzIsNjRWMTkyYTMyLDMyLDAsMCwwLDMyLDMySDE5MmEzMiwzMiwwLDAsMCwzMi0zMlY2NEEzMiwzMiwwLDAsMCwxOTIsMzJabS04NCw4OGExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSwxMDgsMTIwWm00MCw0MGExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSwxNDgsMTYwWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNjRWMTkyYTI0LDI0LDAsMCwxLTI0LDI0SDY0YTI0LDI0LDAsMCwxLTI0LTI0VjY0QTI0LDI0LDAsMCwxLDY0LDQwSDE5MkEyNCwyNCwwLDAsMSwyMTYsNjRaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTkyLDMySDY0QTMyLDMyLDAsMCwwLDMyLDY0VjE5MmEzMiwzMiwwLDAsMCwzMiwzMkgxOTJhMzIsMzIsMCwwLDAsMzItMzJWNjRBMzIsMzIsMCwwLDAsMTkyLDMyWm0xNiwxNjBhMTYsMTYsMCwwLDEtMTYsMTZINjRhMTYsMTYsMCwwLDEtMTYtMTZWNjRBMTYsMTYsMCwwLDEsNjQsNDhIMTkyYTE2LDE2LDAsMCwxLDE2LDE2Wm0tODgtODRhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsMTIwLDEwOFptNDAsNDBhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsMTYwLDE0OFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "DiceTwo";
export { I as DiceTwo };
