/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/CraneTower";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsODBIMTA4Ljk0TDg3LjE2LDM2LjQyQTgsOCwwLDAsMCw4MCwzMkg0OGE4LDgsMCwwLDAtOCw4VjgwSDI0YTgsOCwwLDAsMCwwLDE2SDQwVjIwOEgyNGE4LDgsMCwwLDAsMCwxNkgxMjhhOCw4LDAsMCwwLDAtMTZIMTEyVjk2aDk2djg4SDE5MnYtOGE4LDgsMCwwLDAtMTYsMHY4YTE2LDE2LDAsMCwwLDE2LDE2aDE2YTE2LDE2LDAsMCwwLDE2LTE2Vjk2aDE2YTgsOCwwLDAsMCwwLTE2Wk01Niw0OEg3NS4wNmwxNiwzMkg1NlptMCwxNjBWMTYwSDk2djQ4Wm00MC02NEg1NlY5Nkg5NloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsODRIMTA2LjQ3TDgzLjU4LDM4LjIxQTQsNCwwLDAsMCw4MCwzNkg0OGE0LDQsMCwwLDAtNCw0Vjg0SDI0YTQsNCwwLDAsMCwwLDhINDRWMjEySDI0YTQsNCwwLDAsMCwwLDhIMTI4YTQsNCwwLDAsMCwwLThIMTA4VjkySDIxMnY5MmE0LDQsMCwwLDEtNCw0SDE5MmE0LDQsMCwwLDEtNC00di04YTQsNCwwLDAsMC04LDB2OGExMiwxMiwwLDAsMCwxMiwxMmgxNmExMiwxMiwwLDAsMCwxMi0xMlY5MmgyMGE0LDQsMCwwLDAsMC04Wk01Miw0NEg3Ny41M2wyMCw0MEg1MlptMCwxNjhWMTU2aDQ4djU2Wm00OC02NEg1MlY5Mmg0OFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsODJIMTA3LjcxTDg1LjM3LDM3LjMyQTYsNiwwLDAsMCw4MCwzNEg0OGE2LDYsMCwwLDAtNiw2VjgySDI0YTYsNiwwLDAsMCwwLDEySDQyVjIxMEgyNGE2LDYsMCwwLDAsMCwxMkgxMjhhNiw2LDAsMCwwLDAtMTJIMTEwVjk0SDIxMHY5MGEyLDIsMCwwLDEtMiwySDE5MmEyLDIsMCwwLDEtMi0ydi04YTYsNiwwLDAsMC0xMiwwdjhhMTQsMTQsMCwwLDAsMTQsMTRoMTZhMTQsMTQsMCwwLDAsMTQtMTRWOTRoMThhNiw2LDAsMCwwLDAtMTJaTTU0LDQ2SDc2LjI5bDE4LDM2SDU0Wm0wLDE2NFYxNThIOTh2NTJabTQ0LTY0SDU0Vjk0SDk4WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsNzZIMTExLjQyTDkwLjczLDM0LjYzQTEyLDEyLDAsMCwwLDgwLDI4SDQ4QTEyLDEyLDAsMCwwLDM2LDQwVjc2SDI0YTEyLDEyLDAsMCwwLDAsMjRIMzZWMjA0SDI0YTEyLDEyLDAsMCwwLDAsMjRIMTI4YTEyLDEyLDAsMCwwLDAtMjRIMTE2VjEwMGg4OHY4MEgxOTJ2LTRhMTIsMTIsMCwwLDAtMjQsMHY4YTIwLDIwLDAsMCwwLDIwLDIwaDIwYTIwLDIwLDAsMCwwLDIwLTIwVjEwMGgxMmExMiwxMiwwLDAsMCwwLTI0Wk02MCw1Mkg3Mi41OGwxMiwyNEg2MFptMCwxNTJWMTY0SDkydjQwWm0zMi02NEg2MFYxMDBIOTJaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjcuNzMsMjA4SDExMlYxNjRhNCw0LDAsMCwwLTQtNEg0NGE0LDQsMCwwLDAtNCw0djQ0SDI0LjI3QTguMTcsOC4xNywwLDAsMCwxNiwyMTUuNDcsOCw4LDAsMCwwLDI0LDIyNEgxMjhhOCw4LDAsMCwwLDgtOC41M0E4LjE3LDguMTcsMCwwLDAsMTI3LjczLDIwOFoiLz48cGF0aCBkPSJNMjM5LjczLDgwSDEwOC45NEw4Ny4xNiwzNi40MkE4LDgsMCwwLDAsODAsMzJINDhhOCw4LDAsMCwwLTgsOFY4MEgyNC4yN0E4LjE3LDguMTcsMCwwLDAsMTYsODcuNDcsOCw4LDAsMCwwLDI0LDk2SDQwdjQ0YTQsNCwwLDAsMCw0LDRoNjRhNCw0LDAsMCwwLDQtNFY5Nmg5NnY4OEgxOTJ2LTcuNzNhOC4xOCw4LjE4LDAsMCwwLTcuNDctOC4yNSw4LDgsMCwwLDAtOC41Myw4djhhMTYsMTYsMCwwLDAsMTYsMTZoMTZhMTYsMTYsMCwwLDAsMTYtMTZWOTZoMTZhOCw4LDAsMCwwLDgtOC41M0E4LjE3LDguMTcsMCwwLDAsMjM5LjczLDgwWk01Niw4MFY0OEg3NS4wNmwxNiwzMloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDQsODhWMjE2SDQ4VjQwSDgwWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTI0MCw4MEgxMDguOTRMODcuMTYsMzYuNDJBOCw4LDAsMCwwLDgwLDMySDQ4YTgsOCwwLDAsMC04LDhWODBIMjRhOCw4LDAsMCwwLDAsMTZINDBWMjA4SDI0YTgsOCwwLDAsMCwwLDE2SDEyOGE4LDgsMCwwLDAsMC0xNkgxMTJWOTZoOTZ2ODhIMTkydi04YTgsOCwwLDAsMC0xNiwwdjhhMTYsMTYsMCwwLDAsMTYsMTZoMTZhMTYsMTYsMCwwLDAsMTYtMTZWOTZoMTZhOCw4LDAsMCwwLDAtMTZaTTU2LDQ4SDc1LjA2bDE2LDMySDU2Wm0wLDE2MFYxNjBIOTZ2NDhabTQwLTY0SDU2Vjk2SDk2WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "CraneTower";
export { I as CraneTower };
