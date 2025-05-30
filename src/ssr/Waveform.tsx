/* GENERATED FILE */
import * as React from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Waveform";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik01Niw5NnY2NGE4LDgsMCwwLDEtMTYsMFY5NmE4LDgsMCwwLDEsMTYsMFpNODgsMjRhOCw4LDAsMCwwLTgsOFYyMjRhOCw4LDAsMCwwLDE2LDBWMzJBOCw4LDAsMCwwLDg4LDI0Wm00MCwzMmE4LDgsMCwwLDAtOCw4VjE5MmE4LDgsMCwwLDAsMTYsMFY2NEE4LDgsMCwwLDAsMTI4LDU2Wm00MCwzMmE4LDgsMCwwLDAtOCw4djY0YTgsOCwwLDAsMCwxNiwwVjk2QTgsOCwwLDAsMCwxNjgsODhabTQwLTE2YTgsOCwwLDAsMC04LDh2OTZhOCw4LDAsMCwwLDE2LDBWODBBOCw4LDAsMCwwLDIwOCw3MloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik01Miw5NnY2NGE0LDQsMCwwLDEtOCwwVjk2YTQsNCwwLDAsMSw4LDBaTTg4LDI4YTQsNCwwLDAsMC00LDRWMjI0YTQsNCwwLDAsMCw4LDBWMzJBNCw0LDAsMCwwLDg4LDI4Wm00MCwzMmE0LDQsMCwwLDAtNCw0VjE5MmE0LDQsMCwwLDAsOCwwVjY0QTQsNCwwLDAsMCwxMjgsNjBabTQwLDMyYTQsNCwwLDAsMC00LDR2NjRhNCw0LDAsMCwwLDgsMFY5NkE0LDQsMCwwLDAsMTY4LDkyWm00MC0xNmE0LDQsMCwwLDAtNCw0djk2YTQsNCwwLDAsMCw4LDBWODBBNCw0LDAsMCwwLDIwOCw3NloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik01NCw5NnY2NGE2LDYsMCwwLDEtMTIsMFY5NmE2LDYsMCwwLDEsMTIsMFpNODgsMjZhNiw2LDAsMCwwLTYsNlYyMjRhNiw2LDAsMCwwLDEyLDBWMzJBNiw2LDAsMCwwLDg4LDI2Wm00MCwzMmE2LDYsMCwwLDAtNiw2VjE5MmE2LDYsMCwwLDAsMTIsMFY2NEE2LDYsMCwwLDAsMTI4LDU4Wm00MCwzMmE2LDYsMCwwLDAtNiw2djY0YTYsNiwwLDAsMCwxMiwwVjk2QTYsNiwwLDAsMCwxNjgsOTBabTQwLTE2YTYsNiwwLDAsMC02LDZ2OTZhNiw2LDAsMCwwLDEyLDBWODBBNiw2LDAsMCwwLDIwOCw3NFoiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik02MCw5NnY2NGExMiwxMiwwLDAsMS0yNCwwVjk2YTEyLDEyLDAsMCwxLDI0LDBaTTg4LDIwQTEyLDEyLDAsMCwwLDc2LDMyVjIyNGExMiwxMiwwLDAsMCwyNCwwVjMyQTEyLDEyLDAsMCwwLDg4LDIwWm00MCwzMmExMiwxMiwwLDAsMC0xMiwxMlYxOTJhMTIsMTIsMCwwLDAsMjQsMFY2NEExMiwxMiwwLDAsMCwxMjgsNTJabTQwLDMyYTEyLDEyLDAsMCwwLTEyLDEydjY0YTEyLDEyLDAsMCwwLDI0LDBWOTZBMTIsMTIsMCwwLDAsMTY4LDg0Wm00MC0xNmExMiwxMiwwLDAsMC0xMiwxMnY5NmExMiwxMiwwLDAsMCwyNCwwVjgwQTEyLDEyLDAsMCwwLDIwOCw2OFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDBINDBBMTYsMTYsMCwwLDAsMjQsNTZWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDIxNmExNiwxNiwwLDAsMCwxNi0xNlY1NkExNiwxNiwwLDAsMCwyMTYsNDBaTTcyLDE1MmE4LDgsMCwwLDEtMTYsMFYxMDRhOCw4LDAsMCwxLDE2LDBabTMyLDMyYTgsOCwwLDAsMS0xNiwwVjcyYTgsOCwwLDAsMSwxNiwwWm0zMi0xNmE4LDgsMCwwLDEtMTYsMFY4OGE4LDgsMCwwLDEsMTYsMFptMzItMTZhOCw4LDAsMCwxLTE2LDBWMTA0YTgsOCwwLDAsMSwxNiwwWm0zMiw4YTgsOCwwLDAsMS0xNiwwVjk2YTgsOCwwLDAsMSwxNiwwWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsOTZ2NjRINDhWOTZaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNNTYsOTZ2NjRhOCw4LDAsMCwxLTE2LDBWOTZhOCw4LDAsMCwxLDE2LDBaTTg4LDI0YTgsOCwwLDAsMC04LDhWMjI0YTgsOCwwLDAsMCwxNiwwVjMyQTgsOCwwLDAsMCw4OCwyNFptNDAsMzJhOCw4LDAsMCwwLTgsOFYxOTJhOCw4LDAsMCwwLDE2LDBWNjRBOCw4LDAsMCwwLDEyOCw1NlptNDAsMzJhOCw4LDAsMCwwLTgsOHY2NGE4LDgsMCwwLDAsMTYsMFY5NkE4LDgsMCwwLDAsMTY4LDg4Wm00MC0xNmE4LDgsMCwwLDAtOCw4djk2YTgsOCwwLDAsMCwxNiwwVjgwQTgsOCwwLDAsMCwyMDgsNzJaIi8+PC9zdmc+)
 */
const I: Icon = React.forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "WaveformIcon";

/** @deprecated Use WaveformIcon */
export const Waveform = I;
export { I as WaveformIcon };
