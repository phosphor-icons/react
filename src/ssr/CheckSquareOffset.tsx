/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/CheckSquareOffset";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsNDhWMjA4YTIwLDIwLDAsMCwxLTIwLDIwSDE0MGExMiwxMiwwLDAsMSwwLTI0aDY0VjUySDUydjg4YTEyLDEyLDAsMCwxLTI0LDBWNDhBMjAsMjAsMCwwLDEsNDgsMjhIMjA4QTIwLDIwLDAsMCwxLDIyOCw0OFpNMTI4LjQ5LDE1MS41MWExMiwxMiwwLDAsMC0xNywwTDY0LDE5OSw0OC40OSwxODMuNTFhMTIsMTIsMCwxLDAtMTcsMTdsMjQsMjRhMTIsMTIsMCwwLDAsMTcsMGw1Ni01NkExMiwxMiwwLDAsMCwxMjguNDksMTUxLjUxWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDhWMjA4YTgsOCwwLDAsMS04LDhINjRMNDAsMTkyVjQ4YTgsOCwwLDAsMSw4LThIMjA4QTgsOCwwLDAsMSwyMTYsNDhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjI0LDQ4VjIwOGExNiwxNiwwLDAsMS0xNiwxNkgxMzZhOCw4LDAsMCwxLDAtMTZoNzJWNDhINDh2OTZhOCw4LDAsMCwxLTE2LDBWNDhBMTYsMTYsMCwwLDEsNDgsMzJIMjA4QTE2LDE2LDAsMCwxLDIyNCw0OFpNMTI1LjY2LDE1NC4zNGE4LDgsMCwwLDAtMTEuMzIsMEw2NCwyMDQuNjksNDUuNjYsMTg2LjM0YTgsOCwwLDAsMC0xMS4zMiwxMS4zMmwyNCwyNGE4LDgsMCwwLDAsMTEuMzIsMGw1Ni01NkE4LDgsMCwwLDAsMTI1LjY2LDE1NC4zNFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTgwLDIwMGE4LDgsMCwwLDEtNS42Ni0yLjM0bC0xNi0xNmE4LDgsMCwwLDEsMTEuMzItMTEuMzJMODAsMTgwLjY5bDM0LjM0LTM0LjM1YTgsOCwwLDAsMSwxMS4zMiwxMS4zMmwtNDAsNDBBOCw4LDAsMCwxLDgwLDIwMFptMTIwLThhOCw4LDAsMCwxLTgsOEgxMzZhOCw4LDAsMCwxLDAtMTZoNDhWNzJINzJ2NjRhOCw4LDAsMCwxLTE2LDBWNjRhOCw4LDAsMCwxLDgtOEgxOTJhOCw4LDAsMCwxLDgsOFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIsNDhWMjA4YTE0LDE0LDAsMCwxLTE0LDE0SDEzNmE2LDYsMCwwLDEsMC0xMmg3MmEyLDIsMCwwLDAsMi0yVjQ4YTIsMiwwLDAsMC0yLTJINDhhMiwyLDAsMCwwLTIsMnY5NmE2LDYsMCwwLDEtMTIsMFY0OEExNCwxNCwwLDAsMSw0OCwzNEgyMDhBMTQsMTQsMCwwLDEsMjIyLDQ4Wk0xMTUuNzYsMTU1Ljc2LDY0LDIwNy41MSw0NC4yNCwxODcuNzZhNiw2LDAsMCwwLTguNDgsOC40OGwyNCwyNGE2LDYsMCwwLDAsOC40OCwwbDU2LTU2YTYsNiwwLDAsMC04LjQ4LTguNDhaIi8+PC9zdmc+)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDhWMjA4YTE2LDE2LDAsMCwxLTE2LDE2SDEzNmE4LDgsMCwwLDEsMC0xNmg3MlY0OEg0OHY5NmE4LDgsMCwwLDEtMTYsMFY0OEExNiwxNiwwLDAsMSw0OCwzMkgyMDhBMTYsMTYsMCwwLDEsMjI0LDQ4Wk0xMjUuNjYsMTU0LjM0YTgsOCwwLDAsMC0xMS4zMiwwTDY0LDIwNC42OSw0NS42NiwxODYuMzRhOCw4LDAsMCwwLTExLjMyLDExLjMybDI0LDI0YTgsOCwwLDAsMCwxMS4zMiwwbDU2LTU2QTgsOCwwLDAsMCwxMjUuNjYsMTU0LjM0WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAsNDhWMjA4YTEyLDEyLDAsMCwxLTEyLDEySDEzNmE0LDQsMCwwLDEsMC04aDcyYTQsNCwwLDAsMCw0LTRWNDhhNCw0LDAsMCwwLTQtNEg0OGE0LDQsMCwwLDAtNCw0djk2YTQsNCwwLDAsMS04LDBWNDhBMTIsMTIsMCwwLDEsNDgsMzZIMjA4QTEyLDEyLDAsMCwxLDIyMCw0OFpNMTE3LjE3LDE1Ny4xNyw2NCwyMTAuMzQsNDIuODMsMTg5LjE3YTQsNCwwLDAsMC01LjY2LDUuNjZsMjQsMjRhNCw0LDAsMCwwLDUuNjYsMGw1Ni01NmE0LDQsMCwwLDAtNS42Ni01LjY2WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "CheckSquareOffset";
export { I as CheckSquareOffset };
