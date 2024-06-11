/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Radio";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsMTcyYTM2LDM2LDAsMSwwLTM2LTM2QTM2LDM2LDAsMCwwLDE2MCwxNzJabTAtNDhhMTIsMTIsMCwxLDEtMTIsMTJBMTIsMTIsMCwwLDEsMTYwLDEyNFptNTYtNjRIMTEzLjc2bDgxLjY5LTI0LjVhMTIsMTIsMCwwLDAtNi45LTIzbC0xNjAsNDhBMTIsMTIsMCwwLDAsMjAsNzJWMTkyYTIwLDIwLDAsMCwwLDIwLDIwSDIxNmEyMCwyMCwwLDAsMCwyMC0yMFY4MEEyMCwyMCwwLDAsMCwyMTYsNjBabS00LDEyOEg0NFY4NEgyMTJaTTYwLDExNmExMiwxMiwwLDAsMSwxMi0xMkg5NmExMiwxMiwwLDAsMSwwLDI0SDcyQTEyLDEyLDAsMCwxLDYwLDExNlptMCw0MGExMiwxMiwwLDAsMSwxMi0xMkg5NmExMiwxMiwwLDAsMSwwLDI0SDcyQTEyLDEyLDAsMCwxLDYwLDE1NloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNzJIMzJWMTkyYTgsOCwwLDAsMCw4LDhIMjE2YTgsOCwwLDAsMCw4LThWODBBOCw4LDAsMCwwLDIxNiw3MlptLTU2LDk2YTMyLDMyLDAsMSwxLDMyLTMyQTMyLDMyLDAsMCwxLDE2MCwxNjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTA0LDE2OGE4LDgsMCwwLDEtOCw4SDY0YTgsOCwwLDAsMSwwLTE2SDk2QTgsOCwwLDAsMSwxMDQsMTY4Wm0tOC00MEg2NGE4LDgsMCwwLDAsMCwxNkg5NmE4LDgsMCwwLDAsMC0xNlptMC0zMkg2NGE4LDgsMCwwLDAsMCwxNkg5NmE4LDgsMCwwLDAsMC0xNlpNMjMyLDgwVjE5MmExNiwxNiwwLDAsMS0xNiwxNkg0MGExNiwxNiwwLDAsMS0xNi0xNlY3MmE4LDgsMCwwLDEsNS43LTcuNjZsMTYwLTQ4YTgsOCwwLDAsMSw0LjYsMTUuMzNMODYuNTEsNjRIMjE2QTE2LDE2LDAsMCwxLDIzMiw4MFpNMjE2LDE5MlY4MEg0MFYxOTJIMjE2Wm0tMTYtNTZhNDAsNDAsMCwxLDEtNDAtNDBBNDAsNDAsMCwwLDEsMjAwLDEzNlptLTE2LDBhMjQsMjQsMCwxLDAtMjQsMjRBMjQsMjQsMCwwLDAsMTg0LDEzNloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNjRIODYuNTFMMTk0LjMsMzEuNjdhOCw4LDAsMCwwLTQuNi0xNS4zM2wtMTYwLDQ4aDBBOCw4LDAsMCwwLDI0LDcyVjE5MmExNiwxNiwwLDAsMCwxNiwxNkgyMTZhMTYsMTYsMCwwLDAsMTYtMTZWODBBMTYsMTYsMCwwLDAsMjE2LDY0Wk0xMDQsMTc2SDY0YTgsOCwwLDAsMSwwLTE2aDQwYTgsOCwwLDAsMSwwLDE2Wm0wLTMySDY0YTgsOCwwLDAsMSwwLTE2aDQwYTgsOCwwLDAsMSwwLDE2Wm0wLTMySDY0YTgsOCwwLDAsMSwwLTE2aDQwYTgsOCwwLDAsMSwwLDE2Wm02NCw1NmEzMiwzMiwwLDEsMSwzMi0zMkEzMiwzMiwwLDAsMSwxNjgsMTY4WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDIsMTA0YTYsNiwwLDAsMS02LDZINjRhNiw2LDAsMCwxLDAtMTJIOTZBNiw2LDAsMCwxLDEwMiwxMDRabS02LDI2SDY0YTYsNiwwLDAsMCwwLDEySDk2YTYsNiwwLDAsMCwwLTEyWm0wLDMySDY0YTYsNiwwLDAsMCwwLDEySDk2YTYsNiwwLDAsMCwwLTEyWk0yMzAsODBWMTkyYTE0LDE0LDAsMCwxLTE0LDE0SDQwYTE0LDE0LDAsMCwxLTE0LTE0VjcyYTYsNiwwLDAsMSw0LjI4LTUuNzVsMTYwLTQ4YTYsNiwwLDAsMSwzLjQ0LDExLjVMNzIuODgsNjZIMjE2QTE0LDE0LDAsMCwxLDIzMCw4MFptLTEyLDBhMiwyLDAsMCwwLTItMkgzOFYxOTJhMiwyLDAsMCwwLDIsMkgyMTZhMiwyLDAsMCwwLDItMlptLTIwLDU2YTM4LDM4LDAsMSwxLTM4LTM4QTM4LDM4LDAsMCwxLDE5OCwxMzZabS0xMiwwYTI2LDI2LDAsMSwwLTI2LDI2QTI2LDI2LDAsMCwwLDE4NiwxMzZaIi8+PC9zdmc+)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDQsMTY4YTgsOCwwLDAsMS04LDhINjRhOCw4LDAsMCwxLDAtMTZIOTZBOCw4LDAsMCwxLDEwNCwxNjhabS04LTQwSDY0YTgsOCwwLDAsMCwwLDE2SDk2YTgsOCwwLDAsMCwwLTE2Wm0wLTMySDY0YTgsOCwwLDAsMCwwLDE2SDk2YTgsOCwwLDAsMCwwLTE2Wk0yMzIsODBWMTkyYTE2LDE2LDAsMCwxLTE2LDE2SDQwYTE2LDE2LDAsMCwxLTE2LTE2VjcyYTgsOCwwLDAsMSw1LjctNy42NmwxNjAtNDhhOCw4LDAsMCwxLDQuNiwxNS4zM0w4Ni41MSw2NEgyMTZBMTYsMTYsMCwwLDEsMjMyLDgwWk0yMTYsMTkyVjgwSDQwVjE5MkgyMTZabS0xNi01NmE0MCw0MCwwLDEsMS00MC00MEE0MCw0MCwwLDAsMSwyMDAsMTM2Wm0tMTYsMGEyNCwyNCwwLDEsMC0yNCwyNEEyNCwyNCwwLDAsMCwxODQsMTM2WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDAsMTY4YTQsNCwwLDAsMS00LDRINjRhNCw0LDAsMCwxLDAtOEg5NkE0LDQsMCwwLDEsMTAwLDE2OFptLTQtMzZINjRhNCw0LDAsMCwwLDAsOEg5NmE0LDQsMCwwLDAsMC04Wk0yMjgsODBWMTkyYTEyLDEyLDAsMCwxLTEyLDEySDQwYTEyLDEyLDAsMCwxLTEyLTEyVjcyYTQsNCwwLDAsMSwyLjg1LTMuODFsMTYwLTQ4YTQsNCwwLDAsMSwyLjMsNy42Nkw1OS4yNSw2OEgyMTZBMTIsMTIsMCwwLDEsMjI4LDgwWm0tOCwwYTQsNCwwLDAsMC00LTRIMzZWMTkyYTQsNCwwLDAsMCw0LDRIMjE2YTQsNCwwLDAsMCw0LTRabS0yNCw1NmEzNiwzNiwwLDEsMS0zNi0zNkEzNiwzNiwwLDAsMSwxOTYsMTM2Wm0tOCwwYTI4LDI4LDAsMSwwLTI4LDI4QTI4LDI4LDAsMCwwLDE4OCwxMzZaTTk2LDEwMEg2NGE0LDQsMCwwLDAsMCw4SDk2YTQsNCwwLDAsMCwwLThaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Radio";
export { I as Radio };
