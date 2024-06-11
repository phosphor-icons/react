/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Gps";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTIwSDIxNS42M0E4OC4xMyw4OC4xMywwLDAsMCwxMzYsNDAuMzdWMTZhOCw4LDAsMCwwLTE2LDBWNDAuMzdBODguMTMsODguMTMsMCwwLDAsNDAuMzcsMTIwSDE2YTgsOCwwLDAsMCwwLDE2SDQwLjM3QTg4LjEzLDg4LjEzLDAsMCwwLDEyMCwyMTUuNjNWMjQwYTgsOCwwLDAsMCwxNiwwVjIxNS42M0E4OC4xMyw4OC4xMywwLDAsMCwyMTUuNjMsMTM2SDI0MGE4LDgsMCwwLDAsMC0xNlpNMTI4LDIwMGE3Miw3MiwwLDEsMSw3Mi03MkE3Mi4wOCw3Mi4wOCwwLDAsMSwxMjgsMjAwWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTI0SDIxMS45QTg0LjExLDg0LjExLDAsMCwwLDEzMiw0NC4xVjE2YTQsNCwwLDAsMC04LDBWNDQuMUE4NC4xMSw4NC4xMSwwLDAsMCw0NC4xLDEyNEgxNmE0LDQsMCwwLDAsMCw4SDQ0LjFBODQuMTEsODQuMTEsMCwwLDAsMTI0LDIxMS45VjI0MGE0LDQsMCwwLDAsOCwwVjIxMS45QTg0LjExLDg0LjExLDAsMCwwLDIxMS45LDEzMkgyNDBhNCw0LDAsMCwwLDAtOFpNMTI4LDIwNGE3Niw3NiwwLDEsMSw3Ni03NkE3Ni4wOCw3Ni4wOCwwLDAsMSwxMjgsMjA0WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTIySDIxMy43N0E4Ni4xMiw4Ni4xMiwwLDAsMCwxMzQsNDIuMjNWMTZhNiw2LDAsMCwwLTEyLDBWNDIuMjNBODYuMTIsODYuMTIsMCwwLDAsNDIuMjMsMTIySDE2YTYsNiwwLDAsMCwwLDEySDQyLjIzQTg2LjEyLDg2LjEyLDAsMCwwLDEyMiwyMTMuNzdWMjQwYTYsNiwwLDAsMCwxMiwwVjIxMy43N0E4Ni4xMiw4Ni4xMiwwLDAsMCwyMTMuNzcsMTM0SDI0MGE2LDYsMCwwLDAsMC0xMlpNMTI4LDIwMmE3NCw3NCwwLDEsMSw3NC03NEE3NC4wOSw3NC4wOSwwLDAsMSwxMjgsMjAyWiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTE2SDIxOS4yMkE5Mi4yMSw5Mi4yMSwwLDAsMCwxNDAsMzYuNzhWMTZhMTIsMTIsMCwwLDAtMjQsMFYzNi43OEE5Mi4yMSw5Mi4yMSwwLDAsMCwzNi43OCwxMTZIMTZhMTIsMTIsMCwwLDAsMCwyNEgzNi43OEE5Mi4yMSw5Mi4yMSwwLDAsMCwxMTYsMjE5LjIyVjI0MGExMiwxMiwwLDAsMCwyNCwwVjIxOS4yMkE5Mi4yMSw5Mi4yMSwwLDAsMCwyMTkuMjIsMTQwSDI0MGExMiwxMiwwLDAsMCwwLTI0Wk0xMjgsMTk2YTY4LDY4LDAsMSwxLDY4LTY4QTY4LjA3LDY4LjA3LDAsMCwxLDEyOCwxOTZaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsMTI4YTgsOCwwLDAsMS04LDhIMjE1LjYzQTg4LjEzLDg4LjEzLDAsMCwxLDEzNiwyMTUuNjNWMjQwYTgsOCwwLDAsMS0xNiwwVjIxNS42M0E4OC4xMyw4OC4xMywwLDAsMSw0MC4zNywxMzZIMTZhOCw4LDAsMCwxLDAtMTZINDAuMzdBODguMTMsODguMTMsMCwwLDEsMTIwLDQwLjM3VjE2YTgsOCwwLDAsMSwxNiwwVjQwLjM3QTg4LjEzLDg4LjEzLDAsMCwxLDIxNS42MywxMjBIMjQwQTgsOCwwLDAsMSwyNDgsMTI4WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTI4YTgwLDgwLDAsMSwxLTgwLTgwQTgwLDgwLDAsMCwxLDIwOCwxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjQwLDEyMEgyMTUuNjNBODguMTMsODguMTMsMCwwLDAsMTM2LDQwLjM3VjE2YTgsOCwwLDAsMC0xNiwwVjQwLjM3QTg4LjEzLDg4LjEzLDAsMCwwLDQwLjM3LDEyMEgxNmE4LDgsMCwwLDAsMCwxNkg0MC4zN0E4OC4xMyw4OC4xMywwLDAsMCwxMjAsMjE1LjYzVjI0MGE4LDgsMCwwLDAsMTYsMFYyMTUuNjNBODguMTMsODguMTMsMCwwLDAsMjE1LjYzLDEzNkgyNDBhOCw4LDAsMCwwLDAtMTZaTTEyOCwyMDBhNzIsNzIsMCwxLDEsNzItNzJBNzIuMDgsNzIuMDgsMCwwLDEsMTI4LDIwMFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Gps";
export { I as Gps };
