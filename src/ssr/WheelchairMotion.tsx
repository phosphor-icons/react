/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/WheelchairMotion";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsODBhMzIsMzIsMCwxLDAtMzItMzJBMzIsMzIsMCwwLDAsMTc2LDgwWm0wLTQ4YTE2LDE2LDAsMSwxLTE2LDE2QTE2LDE2LDAsMCwxLDE3NiwzMlptLTgsMTM2YTY0LDY0LDAsMSwxLTY0LTY0LDgsOCwwLDAsMSwwLDE2LDQ4LDQ4LDAsMSwwLDQ4LDQ4LDgsOCwwLDAsMSwxNiwwWm0zOC4xOS0zNy4wN2E4LDgsMCwwLDEsMS42NSw2LjY0bC0xNiw4MEE4LDgsMCwwLDEsMTg0LDIyNGE3Ljc3LDcuNzcsMCwwLDEtMS41OC0uMTYsOCw4LDAsMCwxLTYuMjctOS40MUwxOTAuMjQsMTQ0SDEyOGE4LDgsMCwwLDEtNi45NC0xMmwyMC4wNi0zNC45YTgwLjA5LDgwLjA5LDAsMCwwLTg4LDkuMTdBOCw4LDAsMSwxLDQyLjkxLDk0YTk2LDk2LDAsMCwxLDExMy40Ni02LjQyLDgsOCwwLDAsMSwyLjU3LDEwLjY5TDE0MS44MiwxMjhIMjAwQTgsOCwwLDAsMSwyMDYuMTksMTMwLjkzWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsNzZhMjgsMjgsMCwxLDAtMjgtMjhBMjgsMjgsMCwwLDAsMTc2LDc2Wm0wLTQ4YTIwLDIwLDAsMSwxLTIwLDIwQTIwLDIwLDAsMCwxLDE3NiwyOFpNMTY0LDE2OGE2MCw2MCwwLDEsMS02MC02MCw0LDQsMCwwLDEsMCw4LDUyLDUyLDAsMSwwLDUyLDUyLDQsNCwwLDAsMSw4LDBabTM5LjA5LTM0LjU0YTQsNCwwLDAsMSwuODMsMy4zMmwtMTYsODBBNCw0LDAsMCwxLDE4NCwyMjBhMy40NCwzLjQ0LDAsMCwxLS43OC0uMDgsNCw0LDAsMCwxLTMuMTQtNC43bDE1LTc1LjIySDEyOGE0LDQsMCwwLDEtMy40Ny02bDIyLjA4LTM4LjQyYTg0LjA1LDg0LjA1LDAsMCwwLTk2LjA2LDcuNjFBNCw0LDAsMCwxLDQ1LjQ1LDk3YTkyLDkyLDAsMCwxLDEwOC43My02LjE1LDQsNCwwLDAsMSwxLjI5LDUuMzRMMTM0LjkxLDEzMkgyMDBBNCw0LDAsMCwxLDIwMy4wOSwxMzMuNDZaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsNzhhMzAsMzAsMCwxLDAtMzAtMzBBMzAsMzAsMCwwLDAsMTc2LDc4Wm0wLTQ4YTE4LDE4LDAsMSwxLTE4LDE4QTE4LDE4LDAsMCwxLDE3NiwzMFpNMTY2LDE2OGE2Miw2MiwwLDEsMS02Mi02Miw2LDYsMCwwLDEsMCwxMiw1MCw1MCwwLDEsMCw1MCw1MCw2LDYsMCwwLDEsMTIsMFptMzguNjQtMzUuOGE2LDYsMCwwLDEsMS4yNCw1bC0xNiw4MEE2LDYsMCwwLDEsMTg0LDIyMmE2LjA4LDYuMDgsMCwwLDEtMS4xOS0uMTIsNiw2LDAsMCwxLTQuNy03LjA2TDE5Mi42OCwxNDJIMTI4YTYsNiwwLDAsMS01LjItOWwyMS4wNy0zNi42OGE4Mi4wNSw4Mi4wNSwwLDAsMC05Mi4wNSw4LjQxLDYsNiwwLDEsMS03LjY0LTkuMjUsOTQsOTQsMCwwLDEsMTExLjEtNi4yOCw2LDYsMCwwLDEsMS45Miw4TDEzOC4zNywxMzBIMjAwQTYsNiwwLDAsMSwyMDQuNjQsMTMyLjJaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsODRhMzYsMzYsMCwxLDAtMzYtMzZBMzYsMzYsMCwwLDAsMTc2LDg0Wm0wLTQ4YTEyLDEyLDAsMSwxLTEyLDEyQTEyLDEyLDAsMCwxLDE3NiwzNlptMjkuMjgsOTYuMzlhMTIsMTIsMCwwLDEsMi40OSwxMGwtMTYsODBBMTIsMTIsMCwwLDEsMTgwLDIzMmExMS44NywxMS44NywwLDAsMS0yLjM2LS4yMywxMiwxMiwwLDAsMS05LjQyLTE0LjEyTDE4MS4zNiwxNTJIMTI0YTEyLDEyLDAsMCwxLTEwLjQtMThsMTcuOTItMzEuMmE3Ni4xLDc2LjEsMCwwLDAtNzkuODgsMTAuNTVBMTIsMTIsMCwwLDEsMzYuMzYsOTQuODZhMTAwLDEwMCwwLDAsMSwxMTguMTktNi42OCwxMiwxMiwwLDAsMSwzLjg1LDE2TDE0NC43NCwxMjhIMTk2QTEyLDEyLDAsMCwxLDIwNS4yOCwxMzIuMzlabS00MS40Nyw0NC41MmE2NCw2NCwwLDEsMS03My42NC02OC4xNiwxMiwxMiwwLDAsMSwzLjY2LDIzLjcyLDQwLDQwLDAsMSwwLDQ2LjA1LDQyLjYyLDEyLDEyLDAsMSwxLDIzLjkzLDEuODJaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDQsNDhhMzIsMzIsMCwxLDEsMzIsMzJBMzIsMzIsMCwwLDEsMTQ0LDQ4Wm0xNiwxMTJhOCw4LDAsMCwwLTgsOCw0OCw0OCwwLDEsMS00OC00OCw4LDgsMCwwLDAsMC0xNiw2NCw2NCwwLDEsMCw2NCw2NEE4LDgsMCwwLDAsMTYwLDE2MFptNDAtMzJIMTQxLjgybDE3LjEyLTI5Ljc4YTgsOCwwLDAsMC0yLjU3LTEwLjY5QTk2LDk2LDAsMCwwLDQyLjkxLDk0YTgsOCwwLDEsMCwxMC4xOCwxMi4zMyw4MC4wOSw4MC4wOSwwLDAsMSw4OC05LjE3TDEyMS4wNiwxMzJBOCw4LDAsMCwwLDEyOCwxNDRoNjIuMjRsLTE0LjA4LDcwLjQzYTgsOCwwLDAsMCw2LjI3LDkuNDFBNy43Nyw3Ljc3LDAsMCwwLDE4NCwyMjRhOCw4LDAsMCwwLDcuODMtNi40M2wxNi04MEE4LDgsMCwwLDAsMjAwLDEyOFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNDhhMjQsMjQsMCwxLDEtMjQtMjRBMjQsMjQsMCwwLDEsMjAwLDQ4WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTE3Niw4MGEzMiwzMiwwLDEsMC0zMi0zMkEzMiwzMiwwLDAsMCwxNzYsODBabTAtNDhhMTYsMTYsMCwxLDEtMTYsMTZBMTYsMTYsMCwwLDEsMTc2LDMyWm0tOCwxMzZhNjQsNjQsMCwxLDEtNjQtNjQsOCw4LDAsMCwxLDAsMTYsNDgsNDgsMCwxLDAsNDgsNDgsOCw4LDAsMCwxLDE2LDBabTM4LjE5LTM3LjA3YTgsOCwwLDAsMSwxLjY1LDYuNjRsLTE2LDgwQTgsOCwwLDAsMSwxODQsMjI0YTcuNzcsNy43NywwLDAsMS0xLjU4LS4xNiw4LDgsMCwwLDEtNi4yNy05LjQxTDE5MC4yNCwxNDRIMTI4YTgsOCwwLDAsMS02Ljk0LTEybDIwLjA2LTM0LjlhODAuMDksODAuMDksMCwwLDAtODgsOS4xN0E4LDgsMCwxLDEsNDIuOTEsOTRhOTYsOTYsMCwwLDEsMTEzLjQ2LTYuNDIsOCw4LDAsMCwxLDIuNTcsMTAuNjlMMTQxLjgyLDEyOEgyMDBBOCw4LDAsMCwxLDIwNi4xOSwxMzAuOTNaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "WheelchairMotion";
export { I as WheelchairMotion };
