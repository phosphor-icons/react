/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/BatteryLow";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTYsNTJIMjhBMjgsMjgsMCwwLDAsMCw4MHY5NmEyOCwyOCwwLDAsMCwyOCwyOEgxOTZhMjgsMjgsMCwwLDAsMjgtMjhWODBBMjgsMjgsMCwwLDAsMTk2LDUyWm00LDEyNGE0LDQsMCwwLDEtNCw0SDI4YTQsNCwwLDAsMS00LTRWODBhNCw0LDAsMCwxLDQtNEgxOTZhNCw0LDAsMCwxLDQsNFpNNjQsMTA0djQ4YTEyLDEyLDAsMCwxLTI0LDBWMTA0YTEyLDEyLDAsMCwxLDI0LDBabTE5MiwwdjQ4YTEyLDEyLDAsMCwxLTI0LDBWMTA0YTEyLDEyLDAsMCwxLDI0LDBaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsODB2OTZhMTYsMTYsMCwwLDEtMTYsMTZIMzJhMTYsMTYsMCwwLDEtMTYtMTZWODBBMTYsMTYsMCwwLDEsMzIsNjRIMjAwQTE2LDE2LDAsMCwxLDIxNiw4MFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMDAsNTZIMzJBMjQsMjQsMCwwLDAsOCw4MHY5NmEyNCwyNCwwLDAsMCwyNCwyNEgyMDBhMjQsMjQsMCwwLDAsMjQtMjRWODBBMjQsMjQsMCwwLDAsMjAwLDU2Wm04LDEyMGE4LDgsMCwwLDEtOCw4SDMyYTgsOCwwLDAsMS04LThWODBhOCw4LDAsMCwxLDgtOEgyMDBhOCw4LDAsMCwxLDgsOFpNNjQsOTZ2NjRhOCw4LDAsMCwxLTE2LDBWOTZhOCw4LDAsMCwxLDE2LDBabTE5MiwwdjY0YTgsOCwwLDAsMS0xNiwwVjk2YTgsOCwwLDAsMSwxNiwwWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03Miw5NnY2NGE4LDgsMCwwLDEtOCw4SDQ4YTgsOCwwLDAsMS04LThWOTZhOCw4LDAsMCwxLDgtOEg2NEE4LDgsMCwwLDEsNzIsOTZaTTIyNCw4MHY5NmEyNCwyNCwwLDAsMS0yNCwyNEgzMkEyNCwyNCwwLDAsMSw4LDE3NlY4MEEyNCwyNCwwLDAsMSwzMiw1NkgyMDBBMjQsMjQsMCwwLDEsMjI0LDgwWm0tMTYsMGE4LDgsMCwwLDAtOC04SDMyYTgsOCwwLDAsMC04LDh2OTZhOCw4LDAsMCwwLDgsOEgyMDBhOCw4LDAsMCwwLDgtOFptNDAsOGE4LDgsMCwwLDAtOCw4djY0YTgsOCwwLDAsMCwxNiwwVjk2QTgsOCwwLDAsMCwyNDgsODhaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNThIMzJBMjIsMjIsMCwwLDAsMTAsODB2OTZhMjIsMjIsMCwwLDAsMjIsMjJIMjAwYTIyLDIyLDAsMCwwLDIyLTIyVjgwQTIyLDIyLDAsMCwwLDIwMCw1OFptMTAsMTE4YTEwLDEwLDAsMCwxLTEwLDEwSDMyYTEwLDEwLDAsMCwxLTEwLTEwVjgwQTEwLDEwLDAsMCwxLDMyLDcwSDIwMGExMCwxMCwwLDAsMSwxMCwxMFpNNjIsOTZ2NjRhNiw2LDAsMCwxLTEyLDBWOTZhNiw2LDAsMCwxLDEyLDBabTE5MiwwdjY0YTYsNiwwLDAsMS0xMiwwVjk2YTYsNiwwLDAsMSwxMiwwWiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNTZIMzJBMjQsMjQsMCwwLDAsOCw4MHY5NmEyNCwyNCwwLDAsMCwyNCwyNEgyMDBhMjQsMjQsMCwwLDAsMjQtMjRWODBBMjQsMjQsMCwwLDAsMjAwLDU2Wm04LDEyMGE4LDgsMCwwLDEtOCw4SDMyYTgsOCwwLDAsMS04LThWODBhOCw4LDAsMCwxLDgtOEgyMDBhOCw4LDAsMCwxLDgsOFpNNjQsOTZ2NjRhOCw4LDAsMCwxLTE2LDBWOTZhOCw4LDAsMCwxLDE2LDBabTE5MiwwdjY0YTgsOCwwLDAsMS0xNiwwVjk2YTgsOCwwLDAsMSwxNiwwWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNjBIMzJBMjAsMjAsMCwwLDAsMTIsODB2OTZhMjAsMjAsMCwwLDAsMjAsMjBIMjAwYTIwLDIwLDAsMCwwLDIwLTIwVjgwQTIwLDIwLDAsMCwwLDIwMCw2MFptMTIsMTE2YTEyLDEyLDAsMCwxLTEyLDEySDMyYTEyLDEyLDAsMCwxLTEyLTEyVjgwQTEyLDEyLDAsMCwxLDMyLDY4SDIwMGExMiwxMiwwLDAsMSwxMiwxMlpNNjAsOTZ2NjRhNCw0LDAsMCwxLTgsMFY5NmE0LDQsMCwwLDEsOCwwWm0xOTIsMHY2NGE0LDQsMCwwLDEtOCwwVjk2YTQsNCwwLDAsMSw4LDBaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "BatteryLow";
export { I as BatteryLow };
