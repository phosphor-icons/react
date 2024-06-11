/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Coffee";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04MCw1NlYyNGE4LDgsMCwwLDEsMTYsMFY1NmE4LDgsMCwwLDEtMTYsMFptNDAsOGE4LDgsMCwwLDAsOC04VjI0YTgsOCwwLDAsMC0xNiwwVjU2QTgsOCwwLDAsMCwxMjAsNjRabTMyLDBhOCw4LDAsMCwwLDgtOFYyNGE4LDgsMCwwLDAtMTYsMFY1NkE4LDgsMCwwLDAsMTUyLDY0Wm05Niw1NnY4YTQwLDQwLDAsMCwxLTM3LjUxLDM5LjkxLDk2LjU5LDk2LjU5LDAsMCwxLTI3LDQwLjA5SDIwOGE4LDgsMCwwLDEsMCwxNkgzMmE4LDgsMCwwLDEsMC0xNkg1Ni41NEE5Ni4zLDk2LjMsMCwwLDEsMjQsMTM2Vjg4YTgsOCwwLDAsMSw4LThIMjA4QTQwLDQwLDAsMCwxLDI0OCwxMjBaTTIwMCw5Nkg0MHY0MGE4MC4yNyw4MC4yNywwLDAsMCw0NS4xMiw3Mmg2OS43NkE4MC4yNyw4MC4yNywwLDAsMCwyMDAsMTM2Wm0zMiwyNGEyNCwyNCwwLDAsMC0xNi0yMi42MlYxMzZhOTUuNzgsOTUuNzgsMCwwLDEtMS4yLDE1QTI0LDI0LDAsMCwwLDIzMiwxMjhaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04NCw1NlYyNGE0LDQsMCwwLDEsOCwwVjU2YTQsNCwwLDAsMS04LDBabTM2LDRhNCw0LDAsMCwwLDQtNFYyNGE0LDQsMCwwLDAtOCwwVjU2QTQsNCwwLDAsMCwxMjAsNjBabTMyLDBhNCw0LDAsMCwwLDQtNFYyNGE0LDQsMCwwLDAtOCwwVjU2QTQsNCwwLDAsMCwxNTIsNjBabTkyLDYwdjhhMzYsMzYsMCwwLDEtMzYsMzZoLS40MWE5Mi41Myw5Mi41MywwLDAsMS0zNS43Niw0OEgyMDhhNCw0LDAsMCwxLDAsOEgzMmE0LDQsMCwwLDEsMC04SDY4LjE3QTkyLjM0LDkyLjM0LDAsMCwxLDI4LDEzNlY4OGE0LDQsMCwwLDEsNC00SDIwOEEzNiwzNiwwLDAsMSwyNDQsMTIwWm0tNDAsMTZWOTJIMzZ2NDRhODQuMjgsODQuMjgsMCwwLDAsNDguMjEsNzZoNzEuNThBODQuMjgsODQuMjgsMCwwLDAsMjA0LDEzNlptMzItMTZhMjgsMjgsMCwwLDAtMjQtMjcuNzFWMTM2YTkxLjc1LDkxLjc1LDAsMCwxLTIuMiwxOS45NEEyOCwyOCwwLDAsMCwyMzYsMTI4WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04Miw1NlYyNGE2LDYsMCwwLDEsMTIsMFY1NmE2LDYsMCwwLDEtMTIsMFptMzgsNmE2LDYsMCwwLDAsNi02VjI0YTYsNiwwLDAsMC0xMiwwVjU2QTYsNiwwLDAsMCwxMjAsNjJabTMyLDBhNiw2LDAsMCwwLDYtNlYyNGE2LDYsMCwwLDAtMTIsMFY1NkE2LDYsMCwwLDAsMTUyLDYyWm05NCw1OHY4YTM4LDM4LDAsMCwxLTM2Ljk0LDM4LDk0LjU1LDk0LjU1LDAsMCwxLTMxLjEzLDQ0SDIwOGE2LDYsMCwwLDEsMCwxMkgzMmE2LDYsMCwwLDEsMC0xMkg2Mi4wN0E5NC4zNCw5NC4zNCwwLDAsMSwyNiwxMzZWODhhNiw2LDAsMCwxLDYtNkgyMDhBMzgsMzgsMCwwLDEsMjQ2LDEyMFptLTQ0LDE2Vjk0SDM4djQyYTgyLjI3LDgyLjI3LDAsMCwwLDQ2LjY3LDc0aDcwLjY2QTgyLjI3LDgyLjI3LDAsMCwwLDIwMiwxMzZabTMyLTE2YTI2LDI2LDAsMCwwLTIwLTI1LjI5VjEzNmE5My4xOCw5My4xOCwwLDAsMS0xLjY5LDE3LjY0QTI2LDI2LDAsMCwwLDIzNCwxMjhaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsNzZIMzJBMTIsMTIsMCwwLDAsMjAsODh2NDhhMTAwLjI0LDEwMC4yNCwwLDAsMCwyNi43Myw2OEgzMmExMiwxMiwwLDAsMCwwLDI0SDIwOGExMiwxMiwwLDAsMCwwLTI0SDE5My4yN2ExMDAuNzUsMTAwLjc1LDAsMCwwLDIwLTMyQTQ0LDQ0LDAsMCwwLDI1NiwxMjh2LThBNDQuMDUsNDQuMDUsMCwwLDAsMjEyLDc2Wm0tMTYsNjBhNzYuMjcsNzYuMjcsMCwwLDEtNDIsNjhIODZhNzYuMjcsNzYuMjcsMCwwLDEtNDItNjhWMTAwSDE5NlptMzYtOGEyMCwyMCwwLDAsMS0xMi41NywxOC41NUE5Ny4xNyw5Ny4xNywwLDAsMCwyMjAsMTM2VjEwMS42OEEyMCwyMCwwLDAsMSwyMzIsMTIwWk02OCw0OFYyNGExMiwxMiwwLDAsMSwyNCwwVjQ4YTEyLDEyLDAsMCwxLTI0LDBabTQwLDBWMjRhMTIsMTIsMCwwLDEsMjQsMFY0OGExMiwxMiwwLDAsMS0yNCwwWm00MCwwVjI0YTEyLDEyLDAsMCwxLDI0LDBWNDhhMTIsMTIsMCwwLDEtMjQsMFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsODBIMzJhOCw4LDAsMCwwLTgsOHY0OGE5Ni4zLDk2LjMsMCwwLDAsMzIuNTQsNzJIMzJhOCw4LDAsMCwwLDAsMTZIMjA4YTgsOCwwLDAsMCwwLTE2SDE4My40NmE5Ni41OSw5Ni41OSwwLDAsMCwyNy00MC4wOUE0MCw0MCwwLDAsMCwyNDgsMTI4di04QTQwLDQwLDAsMCwwLDIwOCw4MFptMjQsNDhhMjQsMjQsMCwwLDEtMTcuMiwyMyw5NS43OCw5NS43OCwwLDAsMCwxLjItMTVWOTcuMzhBMjQsMjQsMCwwLDEsMjMyLDEyMFpNMTEyLDU2VjI0YTgsOCwwLDAsMSwxNiwwVjU2YTgsOCwwLDAsMS0xNiwwWm0zMiwwVjI0YTgsOCwwLDAsMSwxNiwwVjU2YTgsOCwwLDAsMS0xNiwwWk04MCw1NlYyNGE4LDgsMCwwLDEsMTYsMFY1NmE4LDgsMCwwLDEtMTYsMFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsODh2NDhhODgsODgsMCwwLDEtNTEuMyw4MEg4My4zQTg4LDg4LDAsMCwxLDMyLDEzNlY4OFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik04MCw1NlYyNGE4LDgsMCwwLDEsMTYsMFY1NmE4LDgsMCwwLDEtMTYsMFptNDAsOGE4LDgsMCwwLDAsOC04VjI0YTgsOCwwLDAsMC0xNiwwVjU2QTgsOCwwLDAsMCwxMjAsNjRabTMyLDBhOCw4LDAsMCwwLDgtOFYyNGE4LDgsMCwwLDAtMTYsMFY1NkE4LDgsMCwwLDAsMTUyLDY0Wm05Niw1NnY4YTQwLDQwLDAsMCwxLTM3LjUxLDM5LjkxLDk2LjU5LDk2LjU5LDAsMCwxLTI3LDQwLjA5SDIwOGE4LDgsMCwwLDEsMCwxNkgzMmE4LDgsMCwwLDEsMC0xNkg1Ni41NEE5Ni4zLDk2LjMsMCwwLDEsMjQsMTM2Vjg4YTgsOCwwLDAsMSw4LThIMjA4QTQwLDQwLDAsMCwxLDI0OCwxMjBaTTIwMCw5Nkg0MHY0MGE4MC4yNyw4MC4yNywwLDAsMCw0NS4xMiw3Mmg2OS43NkE4MC4yNyw4MC4yNywwLDAsMCwyMDAsMTM2Wm0zMiwyNGEyNCwyNCwwLDAsMC0xNi0yMi42MlYxMzZhOTUuNzgsOTUuNzgsMCwwLDEtMS4yLDE1QTI0LDI0LDAsMCwwLDIzMiwxMjhaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Coffee";
export { I as Coffee };
