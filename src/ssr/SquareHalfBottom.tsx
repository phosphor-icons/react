/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/SquareHalfBottom";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMzZINTZBMjAsMjAsMCwwLDAsMzYsNTZWMjAwYTIwLDIwLDAsMCwwLDIwLDIwSDIwMGEyMCwyMCwwLDAsMCwyMC0yMFY1NkEyMCwyMCwwLDAsMCwyMDAsMzZabS00LDI0djU2SDYwVjYwWm0tODAsODB2NTZIMTAwVjE0MFptMjQsMGgxNnY1NkgxNDBabS04MCwwSDc2djU2SDYwWm0xMjAsNTZWMTQwaDE2djU2WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTI4djcyYTgsOCwwLDAsMS04LDhINTZhOCw4LDAsMCwxLTgtOFYxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjAwLDQwSDU2QTE2LDE2LDAsMCwwLDQwLDU2VjIwMGExNiwxNiwwLDAsMCwxNiwxNkgyMDBhMTYsMTYsMCwwLDAsMTYtMTZWNTZBMTYsMTYsMCwwLDAsMjAwLDQwWm0wLDE2djY0SDU2VjU2Wm0wLDE0NEg1NlYxMzZIMjAwdjY0WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNDBINTZBMTYsMTYsMCwwLDAsNDAsNTZWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDIwMGExNiwxNiwwLDAsMCwxNi0xNlY1NkExNiwxNiwwLDAsMCwyMDAsNDBabTAsMTZ2NzJINTZWNTZaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNDJINTZBMTQsMTQsMCwwLDAsNDIsNTZWMjAwYTE0LDE0LDAsMCwwLDE0LDE0SDIwMGExNCwxNCwwLDAsMCwxNC0xNFY1NkExNCwxNCwwLDAsMCwyMDAsNDJaTTU2LDU0SDIwMGEyLDIsMCwwLDEsMiwydjY2SDU0VjU2QTIsMiwwLDAsMSw1Niw1NFptNTAsODB2NjhIODZWMTM0Wm0xMiwwaDIwdjY4SDExOFptMzIsMGgyMHY2OEgxNTBaTTU0LDIwMFYxMzRINzR2NjhINTZBMiwyLDAsMCwxLDU0LDIwMFptMTQ2LDJIMTgyVjEzNGgyMHY2NkEyLDIsMCwwLDEsMjAwLDIwMloiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNDBINTZBMTYsMTYsMCwwLDAsNDAsNTZWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDIwMGExNiwxNiwwLDAsMCwxNi0xNlY1NkExNiwxNiwwLDAsMCwyMDAsNDBabTAsMTZ2NjRINTZWNTZabS05Niw4MHY2NEg4OFYxMzZabTE2LDBoMTZ2NjRIMTIwWm0zMiwwaDE2djY0SDE1MlptLTk2LDBINzJ2NjRINTZabTE0NCw2NEgxODRWMTM2aDE2djY0WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNDRINTZBMTIsMTIsMCwwLDAsNDQsNTZWMjAwYTEyLDEyLDAsMCwwLDEyLDEySDIwMGExMiwxMiwwLDAsMCwxMi0xMlY1NkExMiwxMiwwLDAsMCwyMDAsNDRaTTU2LDUySDIwMGE0LDQsMCwwLDEsNCw0djY4SDUyVjU2QTQsNCwwLDAsMSw1Niw1MlptNTIsODB2NzJIODRWMTMyWm04LDBoMjR2NzJIMTE2Wm0zMiwwaDI0djcySDE0OFpNNTIsMjAwVjEzMkg3NnY3Mkg1NkE0LDQsMCwwLDEsNTIsMjAwWm0xNDgsNEgxODBWMTMyaDI0djY4QTQsNCwwLDAsMSwyMDAsMjA0WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "SquareHalfBottom";
export { I as SquareHalfBottom };
