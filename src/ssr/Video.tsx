/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Video";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMzZINDBBMjAsMjAsMCwwLDAsMjAsNTZWMTYwYTIwLDIwLDAsMCwwLDIwLDIwSDIxNmEyMCwyMCwwLDAsMCwyMC0yMFY1NkEyMCwyMCwwLDAsMCwyMTYsMzZabS00LDEyMEg0NFY2MEgyMTJabTI0LDUyYTEyLDEyLDAsMCwxLTEyLDEySDMyYTEyLDEyLDAsMCwxLDAtMjRIMjI0QTEyLDEyLDAsMCwxLDIzNiwyMDhaTTEwNCwxMjhWODhhMTIsMTIsMCwwLDEsMTguMzYtMTAuMThsMzIsMjBhMTIsMTIsMCwwLDEsMCwyMC4zNmwtMzIsMjBBMTIsMTIsMCwwLDEsMTA0LDEyOFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDhINDBhOCw4LDAsMCwwLTgsOFYxNjhhOCw4LDAsMCwwLDgsOEgyMTZhOCw4LDAsMCwwLDgtOFY1NkE4LDgsMCwwLDAsMjE2LDQ4Wk0xMTIsMTQ0VjgwbDQ4LDMyWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTE2NC40NCwxMDUuMzRsLTQ4LTMyQTgsOCwwLDAsMCwxMDQsODB2NjRhOCw4LDAsMCwwLDEyLjQ0LDYuNjZsNDgtMzJhOCw4LDAsMCwwLDAtMTMuMzJaTTEyMCwxMjkuMDVWOTVsMjUuNTgsMTdaTTIxNiw0MEg0MEExNiwxNiwwLDAsMCwyNCw1NlYxNjhhMTYsMTYsMCwwLDAsMTYsMTZIMjE2YTE2LDE2LDAsMCwwLDE2LTE2VjU2QTE2LDE2LDAsMCwwLDIxNiw0MFptMCwxMjhINDBWNTZIMjE2VjE2OFptMTYsNDBhOCw4LDAsMCwxLTgsOEgzMmE4LDgsMCwwLDEsMC0xNkgyMjRBOCw4LDAsMCwxLDIzMiwyMDhaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMjA4YTgsOCwwLDAsMS04LDhIMzJhOCw4LDAsMCwxLDAtMTZIMjI0QTgsOCwwLDAsMSwyMzIsMjA4Wm0wLTE1MlYxNjhhMTYsMTYsMCwwLDEtMTYsMTZINDBhMTYsMTYsMCwwLDEtMTYtMTZWNTZBMTYsMTYsMCwwLDEsNDAsNDBIMjE2QTE2LDE2LDAsMCwxLDIzMiw1NlptLTY4LDU2YTgsOCwwLDAsMC0zLjQxLTYuNTVsLTQwLTI4QTgsOCwwLDAsMCwxMDgsODR2NTZhOCw4LDAsMCwwLDEyLjU5LDYuNTVsNDAtMjhBOCw4LDAsMCwwLDE2NCwxMTJaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjMuMzMsMTA3bC00OC0zMkE2LDYsMCwwLDAsMTA2LDgwdjY0YTYsNiwwLDAsMCw5LjMzLDVsNDgtMzJhNiw2LDAsMCwwLDAtMTBaTTExOCwxMzIuNzlWOTEuMjFMMTQ5LjE4LDExMlpNMjE2LDQySDQwQTE0LDE0LDAsMCwwLDI2LDU2VjE2OGExNCwxNCwwLDAsMCwxNCwxNEgyMTZhMTQsMTQsMCwwLDAsMTQtMTRWNTZBMTQsMTQsMCwwLDAsMjE2LDQyWm0yLDEyNmEyLDIsMCwwLDEtMiwySDQwYTIsMiwwLDAsMS0yLTJWNTZhMiwyLDAsMCwxLDItMkgyMTZhMiwyLDAsMCwxLDIsMlptMTIsNDBhNiw2LDAsMCwxLTYsNkgzMmE2LDYsMCwwLDEsMC0xMkgyMjRBNiw2LDAsMCwxLDIzMCwyMDhaIi8+PC9zdmc+)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjQuNDQsMTA1LjM0bC00OC0zMkE4LDgsMCwwLDAsMTA0LDgwdjY0YTgsOCwwLDAsMCwxMi40NCw2LjY2bDQ4LTMyYTgsOCwwLDAsMCwwLTEzLjMyWk0xMjAsMTI5LjA1Vjk1bDI1LjU4LDE3Wk0yMTYsNDBINDBBMTYsMTYsMCwwLDAsMjQsNTZWMTY4YTE2LDE2LDAsMCwwLDE2LDE2SDIxNmExNiwxNiwwLDAsMCwxNi0xNlY1NkExNiwxNiwwLDAsMCwyMTYsNDBabTAsMTI4SDQwVjU2SDIxNlYxNjhabTE2LDQwYTgsOCwwLDAsMS04LDhIMzJhOCw4LDAsMCwxLDAtMTZIMjI0QTgsOCwwLDAsMSwyMzIsMjA4WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjIuMjIsMTA4LjY3bC00OC0zMkE0LDQsMCwwLDAsMTA4LDgwdjY0YTQsNCwwLDAsMCwyLjExLDMuNTMsNCw0LDAsMCwwLDQuMTEtLjJsNDgtMzJhNCw0LDAsMCwwLDAtNi42NlpNMTE2LDEzNi41M1Y4Ny40N0wxNTIuNzksMTEyWk0yMTYsNDRINDBBMTIsMTIsMCwwLDAsMjgsNTZWMTY4YTEyLDEyLDAsMCwwLDEyLDEySDIxNmExMiwxMiwwLDAsMCwxMi0xMlY1NkExMiwxMiwwLDAsMCwyMTYsNDRabTQsMTI0YTQsNCwwLDAsMS00LDRINDBhNCw0LDAsMCwxLTQtNFY1NmE0LDQsMCwwLDEsNC00SDIxNmE0LDQsMCwwLDEsNCw0Wm04LDQwYTQsNCwwLDAsMS00LDRIMzJhNCw0LDAsMCwxLDAtOEgyMjRBNCw0LDAsMCwxLDIyOCwyMDhaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Video";
export { I as Video };
