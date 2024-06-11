/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/CloudCheck";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsNDBBODguMDksODguMDksMCwwLDAsODEuMjksODguNjcsNjQsNjQsMCwxLDAsNzIsMjE2aDg4YTg4LDg4LDAsMCwwLDAtMTc2Wm0wLDE2MEg3MmE0OCw0OCwwLDAsMSwwLTk2YzEuMSwwLDIuMiwwLDMuMjkuMTFBODgsODgsMCwwLDAsNzIsMTI4YTgsOCwwLDAsMCwxNiwwLDcyLDcyLDAsMSwxLDcyLDcyWm0zNy42Ni05My42NmE4LDgsMCwwLDEsMCwxMS4zMmwtNDgsNDhhOCw4LDAsMCwxLTExLjMyLDBsLTI0LTI0YTgsOCwwLDAsMSwxMS4zMi0xMS4zMkwxNDQsMTQ4LjY5bDQyLjM0LTQyLjM1QTgsOCwwLDAsMSwxOTcuNjYsMTA2LjM0WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsNDRBODQuMTEsODQuMTEsMCwwLDAsODMuNTksOTMuMTIsNjAuNzEsNjAuNzEsMCwwLDAsNzIsOTJhNjAsNjAsMCwwLDAsMCwxMjBoODhhODQsODQsMCwwLDAsMC0xNjhabTAsMTYwSDcyYTUyLDUyLDAsMSwxLDguNTUtMTAzLjNBODMuNjYsODMuNjYsMCwwLDAsNzYsMTI4YTQsNCwwLDAsMCw4LDAsNzYsNzYsMCwxLDEsNzYsNzZabTM0LjgzLTk0LjgzYTQsNCwwLDAsMSwwLDUuNjZsLTQ4LDQ4YTQsNCwwLDAsMS01LjY2LDBsLTI0LTI0YTQsNCwwLDAsMSw1LjY2LTUuNjZMMTQ0LDE1NC4zNGw0NS4xNy00NS4xN0E0LDQsMCwwLDEsMTk0LjgzLDEwOS4xN1oiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsNDJBODYuMTEsODYuMTEsMCwwLDAsODIuNDMsOTAuODgsNjIsNjIsMCwxLDAsNzIsMjE0aDg4YTg2LDg2LDAsMCwwLDAtMTcyWm0wLDE2MEg3MmE1MCw1MCwwLDAsMSwwLTEwMCw1MC42Nyw1MC42NywwLDAsMSw1LjkxLjM1QTg1LjYxLDg1LjYxLDAsMCwwLDc0LDEyOGE2LDYsMCwwLDAsMTIsMCw3NCw3NCwwLDEsMSw3NCw3NFptMzYuMjQtOTQuMjRhNiw2LDAsMCwxLDAsOC40OGwtNDgsNDhhNiw2LDAsMCwxLTguNDgsMGwtMjQtMjRhNiw2LDAsMCwxLDguNDgtOC40OEwxNDQsMTUxLjUxbDQzLjc2LTQzLjc1QTYsNiwwLDAsMSwxOTYuMjQsMTA3Ljc2WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsMzZBOTIuMDksOTIuMDksMCwwLDAsNzksODQuMzYsNjgsNjgsMCwxLDAsNzIsMjIwaDg4YTkyLDkyLDAsMCwwLDAtMTg0Wm0wLDE2MEg3MmE0NCw0NCwwLDAsMS0xLjgyLTg4QTkxLjg2LDkxLjg2LDAsMCwwLDY4LDEyOGExMiwxMiwwLDAsMCwyNCwwLDY4LDY4LDAsMSwxLDY4LDY4Wm00MC40OS05Mi40OWExMiwxMiwwLDAsMSwwLDE3bC00OCw0OGExMiwxMiwwLDAsMS0xNywwbC0yNC0yNGExMiwxMiwwLDEsMSwxNy0xN0wxNDQsMTQzbDM5LjUxLTM5LjUyQTEyLDEyLDAsMCwxLDIwMC40OSwxMDMuNTFaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDcuOTMsMTI0LjUyQzI0Ni4xMSw3Ny41NCwyMDcuMDcsNDAsMTYwLjA2LDQwQTg4LjEsODguMSwwLDAsMCw4MS4yOSw4OC42N2gwQTg3LjQ4LDg3LjQ4LDAsMCwwLDcyLDEyNy43Myw4LjE4LDguMTgsMCwwLDEsNjQuNTcsMTM2LDgsOCwwLDAsMSw1NiwxMjhhMTAzLjY2LDEwMy42NiwwLDAsMSw1LjM0LTMyLjkyLDQsNCwwLDAsMC00Ljc1LTUuMThBNjQuMDksNjQuMDksMCwwLDAsOCwxNTJjMCwzNS4xOSwyOS43NSw2NCw2NSw2NEgxNjBBODguMDksODguMDksMCwwLDAsMjQ3LjkzLDEyNC41MlptLTUwLjI3LTYuODYtNDgsNDhhOCw4LDAsMCwxLTExLjMyLDBsLTI0LTI0YTgsOCwwLDAsMSwxMS4zMi0xMS4zMkwxNDQsMTQ4LjY5bDQyLjM0LTQyLjM1YTgsOCwwLDAsMSwxMS4zMiwxMS4zMloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTI4YTgwLDgwLDAsMCwxLTgwLDgwSDcyQTU2LDU2LDAsMSwxLDg1LjkyLDk3Ljc0bDAsLjFBODAsODAsMCwwLDEsMjQwLDEyOFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xNjAsNDBBODguMDksODguMDksMCwwLDAsODEuMjksODguNjcsNjQsNjQsMCwxLDAsNzIsMjE2aDg4YTg4LDg4LDAsMCwwLDAtMTc2Wm0wLDE2MEg3MmE0OCw0OCwwLDAsMSwwLTk2YzEuMSwwLDIuMiwwLDMuMjkuMTFBODgsODgsMCwwLDAsNzIsMTI4YTgsOCwwLDAsMCwxNiwwLDcyLDcyLDAsMSwxLDcyLDcyWm0zNy42Ni05My42NmE4LDgsMCwwLDEsMCwxMS4zMmwtNDgsNDhhOCw4LDAsMCwxLTExLjMyLDBsLTI0LTI0YTgsOCwwLDAsMSwxMS4zMi0xMS4zMkwxNDQsMTQ4LjY5bDQyLjM0LTQyLjM1QTgsOCwwLDAsMSwxOTcuNjYsMTA2LjM0WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "CloudCheck";
export { I as CloudCheck };
