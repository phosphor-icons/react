/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Synagogue";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNTcuMzhWMzJhOCw4LDAsMCwwLTE2LDBWNTcuMzhBMjQsMjQsMCwwLDAsMTc2LDgwdjQyLjIxTDEzNiw5OS4zNlY3MmE4LDgsMCwwLDAtMTYsMFY5OS4zNkw4MCwxMjIuMjFWODBBMjQsMjQsMCwwLDAsNjQsNTcuMzhWMzJhOCw4LDAsMCwwLTE2LDBWNTcuMzhBMjQsMjQsMCwwLDAsMzIsODBWMjE2YTgsOCwwLDAsMCw4LDhoNzJhOCw4LDAsMCwwLDgtOFYxNzZhOCw4LDAsMCwxLDE2LDB2NDBhOCw4LDAsMCwwLDgsOGg3MmE4LDgsMCwwLDAsOC04VjgwQTI0LDI0LDAsMCwwLDIwOCw1Ny4zOFpNMjAwLDcyYTgsOCwwLDAsMSw4LDh2MjRIMTkyVjgwQTgsOCwwLDAsMSwyMDAsNzJaTTU2LDcyYTgsOCwwLDAsMSw4LDh2MjRINDhWODBBOCw4LDAsMCwxLDU2LDcyWm0tOCw0OEg2NHY4OEg0OFptODAsMzJhMjQsMjQsMCwwLDAtMjQsMjR2MzJIODBWMTQwLjY0bDQ4LTI3LjQzLDQ4LDI3LjQzVjIwOEgxNTJWMTc2QTI0LDI0LDAsMCwwLDEyOCwxNTJabTY0LDU2VjEyMGgxNnY4OFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQsNjAuNFYzMmE0LDQsMCwwLDAtOCwwVjYwLjRBMjAsMjAsMCwwLDAsMTgwLDgwdjQ5LjExbC00OC0yNy40M1Y3MmE0LDQsMCwwLDAtOCwwdjI5LjY4TDc2LDEyOS4xMVY4MEEyMCwyMCwwLDAsMCw2MCw2MC40VjMyYTQsNCwwLDAsMC04LDBWNjAuNEEyMCwyMCwwLDAsMCwzNiw4MFYyMTZhNCw0LDAsMCwwLDQsNGg3MmE0LDQsMCwwLDAsNC00VjE3NmExMiwxMiwwLDAsMSwyNCwwdjQwYTQsNCwwLDAsMCw0LDRoNzJhNCw0LDAsMCwwLDQtNFY4MEEyMCwyMCwwLDAsMCwyMDQsNjAuNFpNMjAwLDY4YTEyLDEyLDAsMCwxLDEyLDEydjI4SDE4OFY4MEExMiwxMiwwLDAsMSwyMDAsNjhaTTU2LDY4QTEyLDEyLDAsMCwxLDY4LDgwdjI4SDQ0VjgwQTEyLDEyLDAsMCwxLDU2LDY4Wk00NCwxMTZINjh2OTZINDRabTg0LDQwYTIwLDIwLDAsMCwwLTIwLDIwdjM2SDc2VjEzOC4zMmw1Mi0yOS43MSw1MiwyOS43MVYyMTJIMTQ4VjE3NkEyMCwyMCwwLDAsMCwxMjgsMTU2Wm02MCw1NlYxMTZoMjR2OTZaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDYsNTguODRWMzJhNiw2LDAsMCwwLTEyLDBWNTguODRBMjIsMjIsMCwwLDAsMTc4LDgwdjQ1LjY2bC00NC0yNS4xNFY3MmE2LDYsMCwwLDAtMTIsMHYyOC41Mkw3OCwxMjUuNjZWODBBMjIsMjIsMCwwLDAsNjIsNTguODRWMzJhNiw2LDAsMCwwLTEyLDBWNTguODRBMjIsMjIsMCwwLDAsMzQsODBWMjE2YTYsNiwwLDAsMCw2LDZoNzJhNiw2LDAsMCwwLDYtNlYxNzZhMTAsMTAsMCwwLDEsMjAsMHY0MGE2LDYsMCwwLDAsNiw2aDcyYTYsNiwwLDAsMCw2LTZWODBBMjIsMjIsMCwwLDAsMjA2LDU4Ljg0Wk0yMDAsNzBhMTAsMTAsMCwwLDEsMTAsMTB2MjZIMTkwVjgwQTEwLDEwLDAsMCwxLDIwMCw3MFpNNTYsNzBBMTAsMTAsMCwwLDEsNjYsODB2MjZINDZWODBBMTAsMTAsMCwwLDEsNTYsNzBaTTQ2LDExOEg2NnY5Mkg0NlptODIsMzZhMjIsMjIsMCwwLDAtMjIsMjJ2MzRINzhWMTM5LjQ4bDUwLTI4LjU3LDUwLDI4LjU3VjIxMEgxNTBWMTc2QTIyLDIyLDAsMCwwLDEyOCwxNTRabTYyLDU2VjExOGgyMHY5MloiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNTQuMzRWMzJhMTIsMTIsMCwwLDAtMjQsMFY1NC4zNEEzMi4wNiwzMi4wNiwwLDAsMCwxNjQsODR2MjYuNzVMMTQwLDk3VjcyYTEyLDEyLDAsMCwwLTI0LDBWOTdMOTIsMTEwLjc1Vjg0QTMyLjA2LDMyLjA2LDAsMCwwLDcyLDU0LjM0VjMyYTEyLDEyLDAsMCwwLTI0LDBWNTQuMzRBMzIuMDYsMzIuMDYsMCwwLDAsMjgsODRWMjE2YTEyLDEyLDAsMCwwLDEyLDEySDIxNmExMiwxMiwwLDAsMCwxMi0xMlY4NEEzMi4wNiwzMi4wNiwwLDAsMCwyMDgsNTQuMzRaTTEyOCwxNjBhMTIsMTIsMCwwLDAtMTIsMTJ2MzJIOTJWMTM4LjM5bDM2LTIwLjU3LDM2LDIwLjU3VjIwNEgxNDBWMTcyQTEyLDEyLDAsMCwwLDEyOCwxNjBaTTUyLDg0YTgsOCwwLDAsMSwxNiwwdjE2SDUyWm0xMzYsMGE4LDgsMCwwLDEsMTYsMHYxNkgxODhaTTUyLDEyNEg2OHY4MEg1MlptMTM2LDgwVjEyNGgxNnY4MFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNTcuMzhWMzJhOCw4LDAsMCwwLTE2LDBWNTcuMzhBMjQsMjQsMCwwLDAsMTc2LDgwdjQyLjIxTDEzNiw5OS4zNlY3MmE4LDgsMCwwLDAtMTYsMFY5OS4zNkw4MCwxMjIuMjFWODBBMjQsMjQsMCwwLDAsNjQsNTcuMzhWMzJhOCw4LDAsMCwwLTE2LDBWNTcuMzhBMjQsMjQsMCwwLDAsMzIsODBWMjE2YTgsOCwwLDAsMCw4LDhoNjRhOCw4LDAsMCwwLDgtOFYxNzZhMTYsMTYsMCwwLDEsMzIsMHY0MGE4LDgsMCwwLDAsOCw4aDY0YTgsOCwwLDAsMCw4LThWODBBMjQsMjQsMCwwLDAsMjA4LDU3LjM4Wk02NCwyMDhINDhWMTEySDY0Wm0xNDQsMEgxOTJWMTEyaDE2WiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsODB2MzJIMTg0VjgwYTE2LDE2LDAsMCwxLDE2LTE2aDBBMTYsMTYsMCwwLDEsMjE2LDgwWk03Miw4MEExNiwxNiwwLDAsMCw1Niw2NGgwQTE2LDE2LDAsMCwwLDQwLDgwdjMySDcyWm0wLDU2djgwaDQwVjE3NmExNiwxNiwwLDAsMSwxNi0xNmgwYTE2LDE2LDAsMCwxLDE2LDE2djQwaDQwVjEzNmwtNTYtMzJaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjA4LDU3LjM4VjMyYTgsOCwwLDAsMC0xNiwwVjU3LjM4QTI0LDI0LDAsMCwwLDE3Niw4MHY0Mi4yMUwxMzYsOTkuMzZWNzJhOCw4LDAsMCwwLTE2LDBWOTkuMzZMODAsMTIyLjIxVjgwQTI0LDI0LDAsMCwwLDY0LDU3LjM4VjMyYTgsOCwwLDAsMC0xNiwwVjU3LjM4QTI0LDI0LDAsMCwwLDMyLDgwVjIxNmE4LDgsMCwwLDAsOCw4aDcyYTgsOCwwLDAsMCw4LThWMTc2YTgsOCwwLDAsMSwxNiwwdjQwYTgsOCwwLDAsMCw4LDhoNzJhOCw4LDAsMCwwLDgtOFY4MEEyNCwyNCwwLDAsMCwyMDgsNTcuMzhaTTIwMCw3MmE4LDgsMCwwLDEsOCw4djI0SDE5MlY4MEE4LDgsMCwwLDEsMjAwLDcyWk01Niw3MmE4LDgsMCwwLDEsOCw4djI0SDQ4VjgwQTgsOCwwLDAsMSw1Niw3MlptLTgsNDhINjR2ODhINDhabTgwLDMyYTI0LDI0LDAsMCwwLTI0LDI0djMySDgwVjE0MC42NGw0OC0yNy40Myw0OCwyNy40M1YyMDhIMTUyVjE3NkEyNCwyNCwwLDAsMCwxMjgsMTUyWm02NCw1NlYxMjBoMTZ2ODhaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Synagogue";
export { I as Synagogue };
