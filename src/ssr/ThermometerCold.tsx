/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/ThermometerCold";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDguOTEsNzcuNzJsLTIwLDYuNDksMTIuMzQsMTdhOCw4LDAsMSwxLTEyLjk0LDkuNEwyMTYsOTMuNjFsLTEyLjM0LDE3YTgsOCwwLDAsMS0xMi45NC05LjRsMTIuMzQtMTctMjAtNi40OUE4LDgsMCwwLDEsMTg4LDYyLjVMMjA4LDY5VjQ4YTgsOCwwLDAsMSwxNiwwVjY5bDIwLTYuNDlhOCw4LDAsMCwxLDQuOTUsMTUuMjJaTTE1MiwxODRhMzIsMzIsMCwxLDEtNDAtMzFWMTIwYTgsOCwwLDAsMSwxNiwwdjMzQTMyLjA2LDMyLjA2LDAsMCwxLDE1MiwxODRabS0xNiwwYTE2LDE2LDAsMSwwLTE2LDE2QTE2LDE2LDAsMCwwLDEzNiwxODRabTQ4LDBBNjQsNjQsMCwxLDEsODAsMTM0VjQ4YTQwLDQwLDAsMCwxLDgwLDB2ODZBNjQuMDgsNjQuMDgsMCwwLDEsMTg0LDE4NFptLTE2LDBhNDguMDgsNDguMDgsMCwwLDAtMjAuNTgtMzkuNEE4LDgsMCwwLDEsMTQ0LDEzOFY0OGEyNCwyNCwwLDAsMC00OCwwdjkwYTgsOCwwLDAsMS0zLjQyLDYuNTZBNDgsNDgsMCwxLDAsMTY4LDE4NFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDcuNjcsNzMuOTJsLTI1LjIsOC4xOEwyMzgsMTAzLjU0YTQsNCwwLDEsMS02LjQ3LDQuN0wyMTYsODYuODFsLTE1LjU3LDIxLjQzYTQsNCwwLDAsMS0zLjI0LDEuNjUsNCw0LDAsMCwxLTMuMjMtNi4zNUwyMDkuNTMsODIuMWwtMjUuMi04LjE4YTQsNCwwLDEsMSwyLjQ3LTcuNjFMMjEyLDc0LjQ5VjQ4YTQsNCwwLDAsMSw4LDBWNzQuNDlsMjUuMi04LjE4YTQsNCwwLDEsMSwyLjQ3LDcuNjFaTTE0OCwxODRhMjgsMjgsMCwxLDEtMzItMjcuNzFWMTIwYTQsNCwwLDAsMSw4LDB2MzYuMjlBMjgsMjgsMCwwLDEsMTQ4LDE4NFptLTgsMGEyMCwyMCwwLDEsMC0yMCwyMEEyMCwyMCwwLDAsMCwxNDAsMTg0Wm00MCwwYTYwLDYwLDAsMSwxLTk2LTQ4VjQ4YTM2LDM2LDAsMCwxLDcyLDB2ODhBNjAuMDYsNjAuMDYsMCwwLDEsMTgwLDE4NFptLTgsMGE1Mi4wNiw1Mi4wNiwwLDAsMC0yMi4yOS00Mi42OEE0LDQsMCwwLDEsMTQ4LDEzOFY0OGEyOCwyOCwwLDAsMC01NiwwdjkwYTQsNCwwLDAsMS0xLjcxLDMuMjhBNTIsNTIsMCwxLDAsMTcyLDE4NFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDguMjksNzUuODJsLTIyLjU4LDcuMzMsMTMuOTUsMTkuMjFhNiw2LDAsMSwxLTkuNyw3LjA2TDIxNiw5MC4yMWwtMTQsMTkuMjFhNiw2LDAsMSwxLTkuNy03LjA2bDEzLjk1LTE5LjIxLTIyLjU4LTcuMzNhNiw2LDAsMSwxLDMuNzEtMTEuNDFMMjEwLDcxLjc0VjQ4YTYsNiwwLDAsMSwxMiwwVjcxLjc0bDIyLjU4LTcuMzNhNiw2LDAsMCwxLDMuNzEsMTEuNDFaTTE1MCwxODRhMzAsMzAsMCwxLDEtMzYtMjkuNFYxMjBhNiw2LDAsMCwxLDEyLDB2MzQuNkEzMC4wNSwzMC4wNSwwLDAsMSwxNTAsMTg0Wm0tMTIsMGExOCwxOCwwLDEsMC0xOCwxOEExOCwxOCwwLDAsMCwxMzgsMTg0Wm00NCwwQTYyLDYyLDAsMSwxLDgyLDEzNVY0OGEzOCwzOCwwLDAsMSw3Niwwdjg3QTYyLjA2LDYyLjA2LDAsMCwxLDE4MiwxODRabS0xMiwwYTUwLjA3LDUwLjA3LDAsMCwwLTIxLjQzLTQxQTYsNiwwLDAsMSwxNDYsMTM4VjQ4YTI2LDI2LDAsMCwwLTUyLDB2OTBBNiw2LDAsMCwxLDkxLjQzLDE0Myw1MCw1MCwwLDEsMCwxNzAsMTg0WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsNTZBNTIsNTIsMCwwLDAsNTYsNTZ2OTQuNjlhNjQsNjQsMCwxLDAsMTA0LDBaTTEwOCwyMjhhNDAsNDAsMCwwLDEtMzAuOTEtNjUuMzlBMTIsMTIsMCwwLDAsODAsMTU0Ljc4VjU2YTI4LDI4LDAsMCwxLDU2LDB2OTguNzdhMTIsMTIsMCwwLDAsMi43Nyw3LjY4QTQwLDQwLDAsMCwxLDEwOCwyMjhaTTI0Ni4xNCw4MS41MmwtMTQuNzIsNC43OSw5LjEsMTIuNTJhMTIsMTIsMCwxLDEtMTkuNDIsMTQuMTFMMjEyLDEwMC40MmwtOS4xLDEyLjUyYTEyLDEyLDAsMSwxLTE5LjQyLTE0LjExbDkuMS0xMi41Mi0xNC43Mi00Ljc5YTEyLDEyLDAsMSwxLDcuNDEtMjIuODJMMjAwLDYzLjQ4VjQ4YTEyLDEyLDAsMCwxLDI0LDBWNjMuNDhsMTQuNzMtNC43OGExMiwxMiwwLDEsMSw3LjQxLDIyLjgyWk0xMzIsMTg4YTI0LDI0LDAsMSwxLTM2LTIwLjc4VjEzMmExMiwxMiwwLDAsMSwyNCwwdjM1LjIyQTI0LDI0LDAsMCwxLDEzMiwxODhaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDguOTEsNzcuNzJsLTIwLDYuNDksMTIuMzQsMTdhOCw4LDAsMSwxLTEyLjk0LDkuNEwyMTYsOTMuNjFsLTEyLjM0LDE3YTgsOCwwLDAsMS0xMi45NC05LjRsMTIuMzQtMTctMjAtNi40OUE4LDgsMCwwLDEsMTg4LDYyLjVMMjA4LDY5VjQ4YTgsOCwwLDAsMSwxNiwwVjY5bDIwLTYuNDlhOCw4LDAsMCwxLDQuOTUsMTUuMjJaTTE3NiwxOTJhNTYsNTYsMCwxLDEtODgtNDZWNDBhMzIsMzIsMCwwLDEsNjQsMFYxNDZBNTYuMjMsNTYuMjMsMCwwLDEsMTc2LDE5MlptLTk1LjE4LThoNzguMzZBNDAuMTYsNDAuMTYsMCwwLDAsMTQwLDE1Ny4zNWE4LDgsMCwwLDEtNC02LjkzVjQwYTE2LDE2LDAsMCwwLTMyLDBWMTUwLjQyYTgsOCwwLDAsMS00LDYuOTNBNDAuMTYsNDAuMTYsMCwwLDAsODAuODIsMTg0WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsMTM4VjQ4YTMyLDMyLDAsMCwwLTY0LDB2OTBhNTYsNTYsMCwxLDAsNjQsMFptLTMyLDcwYTI0LDI0LDAsMSwxLDI0LTI0QTI0LDI0LDAsMCwxLDEyMCwyMDhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjQ4LjkxLDc3LjcybC0yMCw2LjQ5LDEyLjM0LDE3YTgsOCwwLDEsMS0xMi45NCw5LjRMMjE2LDkzLjYxbC0xMi4zNCwxN2E4LDgsMCwwLDEtMTIuOTQtOS40bDEyLjM0LTE3LTIwLTYuNDlBOCw4LDAsMCwxLDE4OCw2Mi41TDIwOCw2OVY0OGE4LDgsMCwwLDEsMTYsMFY2OWwyMC02LjQ5YTgsOCwwLDAsMSw0Ljk1LDE1LjIyWk0xNTIsMTg0YTMyLDMyLDAsMSwxLTQwLTMxVjEyMGE4LDgsMCwwLDEsMTYsMHYzM0EzMi4wNiwzMi4wNiwwLDAsMSwxNTIsMTg0Wm0tMTYsMGExNiwxNiwwLDEsMC0xNiwxNkExNiwxNiwwLDAsMCwxMzYsMTg0Wm00OCwwQTY0LDY0LDAsMSwxLDgwLDEzNFY0OGE0MCw0MCwwLDAsMSw4MCwwdjg2QTY0LjA4LDY0LjA4LDAsMCwxLDE4NCwxODRabS0xNiwwYTQ4LjA4LDQ4LjA4LDAsMCwwLTIwLjU4LTM5LjRBOCw4LDAsMCwxLDE0NCwxMzhWNDhhMjQsMjQsMCwwLDAtNDgsMHY5MGE4LDgsMCwwLDEtMy40Miw2LjU2QTQ4LDQ4LDAsMSwwLDE2OCwxODRaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ThermometerCold";
export { I as ThermometerCold };
