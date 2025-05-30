/* GENERATED FILE */
import * as React from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Microphone";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTc2YTQ4LjA1LDQ4LjA1LDAsMCwwLDQ4LTQ4VjY0YTQ4LDQ4LDAsMCwwLTk2LDB2NjRBNDguMDUsNDguMDUsMCwwLDAsMTI4LDE3NlpNOTYsNjRhMzIsMzIsMCwwLDEsNjQsMHY2NGEzMiwzMiwwLDAsMS02NCwwWm00MCwxNDMuNlYyNDBhOCw4LDAsMCwxLTE2LDBWMjA3LjZBODAuMTEsODAuMTEsMCwwLDEsNDgsMTI4YTgsOCwwLDAsMSwxNiwwLDY0LDY0LDAsMCwwLDEyOCwwLDgsOCwwLDAsMSwxNiwwQTgwLjExLDgwLjExLDAsMCwxLDEzNiwyMDcuNloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTcyYTQ0LjA1LDQ0LjA1LDAsMCwwLDQ0LTQ0VjY0YTQ0LDQ0LDAsMCwwLTg4LDB2NjRBNDQuMDUsNDQuMDUsMCwwLDAsMTI4LDE3MlpNOTIsNjRhMzYsMzYsMCwwLDEsNzIsMHY2NGEzNiwzNiwwLDAsMS03MiwwWm00MCwxMzkuODlWMjQwYTQsNCwwLDAsMS04LDBWMjAzLjg5QTc2LjA5LDc2LjA5LDAsMCwxLDUyLDEyOGE0LDQsMCwwLDEsOCwwLDY4LDY4LDAsMCwwLDEzNiwwLDQsNCwwLDAsMSw4LDBBNzYuMDksNzYuMDksMCwwLDEsMTMyLDIwMy44OVoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTc0YTQ2LjA2LDQ2LjA2LDAsMCwwLDQ2LTQ2VjY0YTQ2LDQ2LDAsMCwwLTkyLDB2NjRBNDYuMDYsNDYuMDYsMCwwLDAsMTI4LDE3NFpNOTQsNjRhMzQsMzQsMCwwLDEsNjgsMHY2NGEzNCwzNCwwLDAsMS02OCwwWm00MCwxNDEuNzVWMjQwYTYsNiwwLDAsMS0xMiwwVjIwNS43NUE3OC4wOSw3OC4wOSwwLDAsMSw1MCwxMjhhNiw2LDAsMCwxLDEyLDAsNjYsNjYsMCwwLDAsMTMyLDAsNiw2LDAsMCwxLDEyLDBBNzguMDksNzguMDksMCwwLDEsMTM0LDIwNS43NVoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTgwYTUyLjA2LDUyLjA2LDAsMCwwLDUyLTUyVjY0QTUyLDUyLDAsMCwwLDc2LDY0djY0QTUyLjA2LDUyLjA2LDAsMCwwLDEyOCwxODBaTTEwMCw2NGEyOCwyOCwwLDAsMSw1NiwwdjY0YTI4LDI4LDAsMCwxLTU2LDBabTQwLDE1NS4yMlYyNDBhMTIsMTIsMCwwLDEtMjQsMFYyMTkuMjJBOTIuMTQsOTIuMTQsMCwwLDEsMzYsMTI4YTEyLDEyLDAsMCwxLDI0LDAsNjgsNjgsMCwwLDAsMTM2LDAsMTIsMTIsMCwwLDEsMjQsMEE5Mi4xNCw5Mi4xNCwwLDAsMSwxNDAsMjE5LjIyWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04MCwxMjhWNjRhNDgsNDgsMCwwLDEsOTYsMHY2NGE0OCw0OCwwLDAsMS05NiwwWm0xMjgsMGE4LDgsMCwwLDAtMTYsMCw2NCw2NCwwLDAsMS0xMjgsMCw4LDgsMCwwLDAtMTYsMCw4MC4xMSw4MC4xMSwwLDAsMCw3Miw3OS42VjI0MGE4LDgsMCwwLDAsMTYsMFYyMDcuNkE4MC4xMSw4MC4xMSwwLDAsMCwyMDgsMTI4WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsNjR2NjRhNDAsNDAsMCwwLDEtNDAsNDBoMGE0MCw0MCwwLDAsMS00MC00MFY2NGE0MCw0MCwwLDAsMSw0MC00MGgwQTQwLDQwLDAsMCwxLDE2OCw2NFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xMjgsMTc2YTQ4LjA1LDQ4LjA1LDAsMCwwLDQ4LTQ4VjY0YTQ4LDQ4LDAsMCwwLTk2LDB2NjRBNDguMDUsNDguMDUsMCwwLDAsMTI4LDE3NlpNOTYsNjRhMzIsMzIsMCwwLDEsNjQsMHY2NGEzMiwzMiwwLDAsMS02NCwwWm00MCwxNDMuNlYyNDBhOCw4LDAsMCwxLTE2LDBWMjA3LjZBODAuMTEsODAuMTEsMCwwLDEsNDgsMTI4YTgsOCwwLDAsMSwxNiwwLDY0LDY0LDAsMCwwLDEyOCwwLDgsOCwwLDAsMSwxNiwwQTgwLjExLDgwLjExLDAsMCwxLDEzNiwyMDcuNloiLz48L3N2Zz4=)
 */
const I: Icon = React.forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "MicrophoneIcon";

/** @deprecated Use MicrophoneIcon */
export const Microphone = I;
export { I as MicrophoneIcon };
