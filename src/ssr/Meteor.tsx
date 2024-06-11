/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Meteor";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05NiwxMjRhMzYsMzYsMCwxLDAsMzYsMzZBMzYsMzYsMCwwLDAsOTYsMTI0Wm0wLDQ4YTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDk2LDE3MlptMTI4LjQ5LTUyLjQ5YTEyLDEyLDAsMCwxLDAsMTdsLTQ4LDQ4YTEyLDEyLDAsMCwxLTE3LTE3bDQ4LTQ4QTEyLDEyLDAsMCwxLDIyNC40OSwxMTkuNTFabS0zNi0yMGExMiwxMiwwLDAsMSwwLDE3bC0yMCwyMGExMiwxMiwwLDAsMS0xNy0xN2wyMC0yMEExMiwxMiwwLDAsMSwxODguNDksOTkuNTFabTQ0LTI3LTE2LDE2YTEyLDEyLDAsMCwxLTE3LTE3bDE2LTE2YTEyLDEyLDAsMCwxLDE3LDE3Wm0tMTEzLDE1LDcyLTcyYTEyLDEyLDAsMCwxLDE3LDE3bC03Miw3MmExMiwxMiwwLDEsMS0xNy0xN1ptMzAuMjMsMTA5LjI2YTEyLDEyLDAsMCwxLDAsMTdBNzYsNzYsMCwxLDEsNDIuMjYsMTA2LjI2TDEyNSwyMy41MWExMiwxMiwwLDEsMSwxNywxN0w1OS4yMywxMjMuMjNhNTIsNTIsMCwwLDAsNzMuNTQsNzMuNTRBMTIsMTIsMCwwLDEsMTQ5Ljc0LDE5Ni43N1oiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTYwYTMyLDMyLDAsMSwxLTMyLTMyQTMyLDMyLDAsMCwxLDEyOCwxNjBaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNOTYsMTIwYTQwLDQwLDAsMSwwLDQwLDQwQTQwLDQwLDAsMCwwLDk2LDEyMFptMCw2NGEyNCwyNCwwLDEsMSwyNC0yNEEyNCwyNCwwLDAsMSw5NiwxODRabTEyNS42Ni02MS42NmE4LDgsMCwwLDEsMCwxMS4zMmwtNDgsNDhhOCw4LDAsMCwxLTExLjMyLTExLjMybDQ4LTQ4QTgsOCwwLDAsMSwyMjEuNjYsMTIyLjM0Wm0tNTYsMTEuMzJhOCw4LDAsMCwxLTExLjMyLTExLjMybDI0LTI0YTgsOCwwLDAsMSwxMS4zMiwxMS4zMlptNjQtNjQtMTYsMTZhOCw4LDAsMCwxLTExLjMyLTExLjMybDE2LTE2YTgsOCwwLDAsMSwxMS4zMiwxMS4zMlpNMTIyLjM0LDkwLjM0bDcyLTcyYTgsOCwwLDEsMSwxMS4zMiwxMS4zMmwtNzIsNzJhOCw4LDAsMCwxLTExLjMyLTExLjMyWk0xNDYuOTEsMTk5LjZhOCw4LDAsMCwxLDAsMTEuMzFBNzIsNzIsMCwxLDEsNDUuMDksMTA5LjA5bDgyLjc0LTgyLjc1YTgsOCwwLDEsMSwxMS4zMiwxMS4zMkw1Ni40LDEyMC40YTU2LDU2LDAsMCwwLDc5LjIsNzkuMkE4LDgsMCwwLDEsMTQ2LjkxLDE5OS42WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYsMTYwYTQwLDQwLDAsMSwxLTQwLTQwQTQwLDQwLDAsMCwxLDEzNiwxNjBabTc0LjM0LTM3LjY2LTQ4LDQ4YTgsOCwwLDAsMCwxMS4zMiwxMS4zMmw0OC00OGE4LDgsMCwwLDAtMTEuMzItMTEuMzJabS0yMC42OC0xMi42OGE4LDgsMCwwLDAtMTEuMzItMTEuMzJsLTI0LDI0YTgsOCwwLDAsMCwxMS4zMiwxMS4zMlptNDAtNTEuMzJhOCw4LDAsMCwwLTExLjMyLDBsLTE2LDE2YTgsOCwwLDAsMCwxMS4zMiwxMS4zMmwxNi0xNkE4LDgsMCwwLDAsMjI5LjY2LDU4LjM0Wk0xMjIuMzQsMTAxLjY2YTgsOCwwLDAsMCwxMS4zMiwwbDcyLTcyYTgsOCwwLDEsMC0xMS4zMi0xMS4zMmwtNzIsNzJBOCw4LDAsMCwwLDEyMi4zNCwxMDEuNjZaTTEzNS42LDE5OS42YTU2LDU2LDAsMCwxLTc5LjItNzkuMmw4Mi43NS04Mi43NGE4LDgsMCwxLDAtMTEuMzItMTEuMzJMNDUuMDksMTA5LjA5QTcyLDcyLDAsMSwwLDE0Ni45MSwyMTAuOTEsOCw4LDAsMCwwLDEzNS42LDE5OS42WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05NiwxMjJhMzgsMzgsMCwxLDAsMzgsMzhBMzgsMzgsMCwwLDAsOTYsMTIyWm0wLDY0YTI2LDI2LDAsMSwxLDI2LTI2QTI2LDI2LDAsMCwxLDk2LDE4NlptMTI0LjI0LTYyLjI0YTYsNiwwLDAsMSwwLDguNDhsLTQ4LDQ4YTYsNiwwLDAsMS04LjQ4LTguNDhsNDgtNDhBNiw2LDAsMCwxLDIyMC4yNCwxMjMuNzZabS01Niw4LjQ4YTYsNiwwLDAsMS04LjQ4LTguNDhsMjQtMjRhNiw2LDAsMCwxLDguNDgsOC40OFptNjQtNjQtMTYsMTZhNiw2LDAsMCwxLTguNDgtOC40OGwxNi0xNmE2LDYsMCwwLDEsOC40OCw4LjQ4Wk0xMjMuNzYsOTEuNzZsNzItNzJhNiw2LDAsMCwxLDguNDgsOC40OGwtNzIsNzJhNiw2LDAsMSwxLTguNDgtOC40OFpNMTQ1LjUsMjAxYTYsNiwwLDAsMSwwLDguNDksNzAsNzAsMCwwLDEtOTktOTlsODIuNzUtODIuNzRhNiw2LDAsMSwxLDguNDgsOC40OEw1NSwxMTlhNTgsNTgsMCwxLDAsODIsODJBNiw2LDAsMCwxLDE0NS41LDIwMVoiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05NiwxMjBhNDAsNDAsMCwxLDAsNDAsNDBBNDAsNDAsMCwwLDAsOTYsMTIwWm0wLDY0YTI0LDI0LDAsMSwxLDI0LTI0QTI0LDI0LDAsMCwxLDk2LDE4NFptMTI1LjY2LTYxLjY2YTgsOCwwLDAsMSwwLDExLjMybC00OCw0OGE4LDgsMCwwLDEtMTEuMzItMTEuMzJsNDgtNDhBOCw4LDAsMCwxLDIyMS42NiwxMjIuMzRaTTE2MCwxMzZhOCw4LDAsMCwxLTUuNjYtMTMuNjZsMjQtMjRhOCw4LDAsMCwxLDExLjMyLDExLjMybC0yNCwyNEE4LDgsMCwwLDEsMTYwLDEzNlptNjkuNjYtNjYuMzQtMTYsMTZhOCw4LDAsMCwxLTExLjMyLTExLjMybDE2LTE2YTgsOCwwLDAsMSwxMS4zMiwxMS4zMlpNMTIyLjM0LDkwLjM0bDcyLTcyYTgsOCwwLDEsMSwxMS4zMiwxMS4zMmwtNzIsNzJhOCw4LDAsMCwxLTExLjMyLTExLjMyWk0xNDYuOTEsMTk5LjZhOCw4LDAsMCwxLDAsMTEuMzFBNzIsNzIsMCwxLDEsNDUuMDksMTA5LjA5bDgyLjc0LTgyLjc1YTgsOCwwLDEsMSwxMS4zMiwxMS4zMkw1Ni40LDEyMC40YTU2LDU2LDAsMCwwLDc5LjIsNzkuMkE4LDgsMCwwLDEsMTQ2LjkxLDE5OS42WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05NiwxMjRhMzYsMzYsMCwxLDAsMzYsMzZBMzYsMzYsMCwwLDAsOTYsMTI0Wm0wLDY0YTI4LDI4LDAsMSwxLDI4LTI4QTI4LDI4LDAsMCwxLDk2LDE4OFptMTIyLjgzLTYyLjgzYTQsNCwwLDAsMSwwLDUuNjZsLTQ4LDQ4YTQsNCwwLDAsMS01LjY2LTUuNjZsNDgtNDhBNCw0LDAsMCwxLDIxOC44MywxMjUuMTdabS0zMi0xOC4zNC0yNCwyNGE0LDQsMCwwLDEtNS42Ni01LjY2bDI0LTI0YTQsNCwwLDEsMSw1LjY2LDUuNjZabTQwLTQwLTE2LDE2YTQsNCwwLDAsMS01LjY2LTUuNjZsMTYtMTZhNCw0LDAsMSwxLDUuNjYsNS42NlpNMTI1LjE3LDkzLjE3bDcyLTcyYTQsNCwwLDEsMSw1LjY2LDUuNjZsLTcyLDcyYTQsNCwwLDEsMS01LjY2LTUuNjZabTE4LjkxLDEwOS4yNmE0LDQsMCwwLDEsMCw1LjY1LDY4LDY4LDAsMSwxLTk2LjE2LTk2LjE2bDgyLjc0LTgyLjc1YTQsNCwwLDEsMSw1LjY2LDUuNjZMNTMuNTcsMTE3LjU3YTYwLDYwLDAsMCwwLDg0Ljg2LDg0Ljg2QTQsNCwwLDAsMSwxNDQuMDgsMjAyLjQzWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Meteor";
export { I as Meteor };
