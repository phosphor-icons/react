/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/FileAudio";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05OS4wNiwxMjguNjFhOCw4LDAsMCwwLTguNzIsMS43M0w2OC42OSwxNTJINDhhOCw4LDAsMCwwLTgsOHY0MGE4LDgsMCwwLDAsOCw4SDY4LjY5bDIxLjY1LDIxLjY2QTgsOCwwLDAsMCwxMDQsMjI0VjEzNkE4LDgsMCwwLDAsOTkuMDYsMTI4LjYxWk04OCwyMDQuNjksNzcuNjYsMTk0LjM0QTgsOCwwLDAsMCw3MiwxOTJINTZWMTY4SDcyYTgsOCwwLDAsMCw1LjY2LTIuMzRMODgsMTU1LjMxWk0xNTIsMTgwYTQwLjU1LDQwLjU1LDAsMCwxLTIwLDM0LjkxQTgsOCwwLDAsMSwxMjQsMjAxLjA5YTI0LjQ5LDI0LjQ5LDAsMCwwLDAtNDIuMThBOCw4LDAsMCwxLDEzMiwxNDUuMDksNDAuNTUsNDAuNTUsMCwwLDEsMTUyLDE4MFptNjEuNjYtOTcuNjYtNTYtNTZBOCw4LDAsMCwwLDE1MiwyNEg1NkExNiwxNiwwLDAsMCw0MCw0MHY4MGE4LDgsMCwwLDAsMTYsMFY0MGg4OFY4OGE4LDgsMCwwLDAsOCw4aDQ4VjIxNkgxNjhhOCw4LDAsMCwwLDAsMTZoMzJhMTYsMTYsMCwwLDAsMTYtMTZWODhBOCw4LDAsMCwwLDIxMy42Niw4Mi4zNFpNMTYwLDUxLjMxLDE4OC42OSw4MEgxNjBaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05Ny41MywxMzIuM2E0LDQsMCwwLDAtNC4zNi44N0w3MC4zNCwxNTZINDhhNCw0LDAsMCwwLTQsNHY0MGE0LDQsMCwwLDAsNCw0SDcwLjM0bDIyLjgzLDIyLjgzQTQsNCwwLDAsMCwxMDAsMjI0VjEzNkE0LDQsMCwwLDAsOTcuNTMsMTMyLjNabS01LjUzLDgyTDc0LjgzLDE5Ny4xN0E0LDQsMCwwLDAsNzIsMTk2SDUyVjE2NEg3MmE0LDQsMCwwLDAsMi44My0xLjE3TDkyLDE0NS42NlpNMTQ4LDE4MGEzNi41MiwzNi41MiwwLDAsMS0xOCwzMS40NSw0LDQsMCwwLDEtNC02LjksMjguNSwyOC41LDAsMCwwLDAtNDkuMSw0LDQsMCwwLDEsNC02LjlBMzYuNTIsMzYuNTIsMCwwLDEsMTQ4LDE4MFptNjIuODMtOTQuODMtNTYtNTZBNCw0LDAsMCwwLDE1MiwyOEg1NkExMiwxMiwwLDAsMCw0NCw0MHY4MGE0LDQsMCwwLDAsOCwwVjQwYTQsNCwwLDAsMSw0LTRoOTJWODhhNCw0LDAsMCwwLDQsNGg1MlYyMTZhNCw0LDAsMCwxLTQsNEgxNjhhNCw0LDAsMCwwLDAsOGgzMmExMiwxMiwwLDAsMCwxMi0xMlY4OEE0LDQsMCwwLDAsMjEwLjgzLDg1LjE3Wk0xNTYsNDEuNjUsMTk4LjM0LDg0SDE1NloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05OC4zLDEzMC40NmE2LDYsMCwwLDAtNi41NCwxLjNMNjkuNTEsMTU0SDQ4YTYsNiwwLDAsMC02LDZ2NDBhNiw2LDAsMCwwLDYsNkg2OS41MWwyMi4yNSwyMi4yNEE2LDYsMCwwLDAsMTAyLDIyNFYxMzZBNiw2LDAsMCwwLDk4LjMsMTMwLjQ2Wm0tOC4zLDc5TDc2LjI0LDE5NS43NkE2LDYsMCwwLDAsNzIsMTk0SDU0VjE2Nkg3MmE2LDYsMCwwLDAsNC4yNC0xLjc2TDkwLDE1MC40OVpNMTUwLDE4MGEzOC41MywzOC41MywwLDAsMS0xOSwzMy4xOEE2LDYsMCwwLDEsMTI1LDIwMi44MmEyNi41LDI2LjUsMCwwLDAsMC00NS42NEE2LDYsMCwwLDEsMTMxLDE0Ni44MiwzOC41MywzOC41MywwLDAsMSwxNTAsMTgwWm02Mi4yNC05Ni4yNC01Ni01NkE2LDYsMCwwLDAsMTUyLDI2SDU2QTE0LDE0LDAsMCwwLDQyLDQwdjgwYTYsNiwwLDAsMCwxMiwwVjQwYTIsMiwwLDAsMSwyLTJoOTBWODhhNiw2LDAsMCwwLDYsNmg1MFYyMTZhMiwyLDAsMCwxLTIsMkgxNjhhNiw2LDAsMCwwLDAsMTJoMzJhMTQsMTQsMCwwLDAsMTQtMTRWODhBNiw2LDAsMCwwLDIxMi4yNCw4My43NlpNMTU4LDQ2LjQ4LDE5My41Miw4MkgxNThaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05Ni41OSwxMjQuOTFhMTIsMTIsMCwwLDAtMTMuMDgsMi42TDYzLDE0OEg0NGExMiwxMiwwLDAsMC0xMiwxMnY0MGExMiwxMiwwLDAsMCwxMiwxMkg2M2wyMC40OCwyMC40OEExMiwxMiwwLDAsMCwxMDQsMjI0VjEzNkExMiwxMiwwLDAsMCw5Ni41OSwxMjQuOTFaTTgwLDE5NWwtMy41MS0zLjUyQTEyLDEyLDAsMCwwLDY4LDE4OEg1NlYxNzJINjhhMTIsMTIsMCwwLDAsOC40OS0zLjUxTDgwLDE2NVptODAtMTVhNDQuNTUsNDQuNTUsMCwwLDEtMjEuOTUsMzguMzZBMTIsMTIsMCwxLDEsMTI2LDE5Ny42NGEyMC41MSwyMC41MSwwLDAsMCwwLTM1LjI4LDEyLDEyLDAsMSwxLDEyLjEtMjAuNzJBNDQuNTUsNDQuNTUsMCwwLDEsMTYwLDE4MFpNMjE2LjQ5LDc5LjUxbC01Ni01NkExMiwxMiwwLDAsMCwxNTIsMjBINTZBMjAsMjAsMCwwLDAsMzYsNDB2NzJhMTIsMTIsMCwwLDAsMjQsMFY0NGg3NlY5MmExMiwxMiwwLDAsMCwxMiwxMmg0OFYyMTJIMTgwYTEyLDEyLDAsMCwwLDAsMjRoMjBhMjAsMjAsMCwwLDAsMjAtMjBWODhBMTIsMTIsMCwwLDAsMjE2LjQ5LDc5LjUxWk0xNjAsNTdsMjMsMjNIMTYwWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsMTgwYTQwLjU1LDQwLjU1LDAsMCwxLTIwLDM0LjkxQTgsOCwwLDAsMSwxMjQsMjAxLjA5YTI0LjQ5LDI0LjQ5LDAsMCwwLDAtNDIuMThBOCw4LDAsMCwxLDEzMiwxNDUuMDksNDAuNTUsNDAuNTUsMCwwLDEsMTUyLDE4MFpNOTkuMDYsMTI4LjYxYTgsOCwwLDAsMC04LjcyLDEuNzNMNjguNjksMTUySDQ4YTgsOCwwLDAsMC04LDh2NDBhOCw4LDAsMCwwLDgsOEg2OC42OWwyMS42NSwyMS42NkE4LDgsMCwwLDAsMTA0LDIyNFYxMzZBOCw4LDAsMCwwLDk5LjA2LDEyOC42MVpNMjE2LDg4VjIxNmExNiwxNiwwLDAsMS0xNiwxNkgxNjhhOCw4LDAsMCwxLDAtMTZoMzJWOTZIMTUyYTgsOCwwLDAsMS04LThWNDBINTZ2ODBhOCw4LDAsMCwxLTE2LDBWNDBBMTYsMTYsMCwwLDEsNTYsMjRoOTZhOCw4LDAsMCwxLDUuNjYsMi4zNGw1Niw1NkE4LDgsMCwwLDEsMjE2LDg4Wm0tNTYtOGgyOC42OUwxNjAsNTEuMzFaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03MiwxNjBsMjQtMjR2ODhMNzIsMjAwSDQ4VjE2MFpNMTUyLDMyVjg4aDU2WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTk5LjA2LDEyOC42MWE4LDgsMCwwLDAtOC43MiwxLjczTDY4LjY5LDE1Mkg0OGE4LDgsMCwwLDAtOCw4djQwYTgsOCwwLDAsMCw4LDhINjguNjlsMjEuNjUsMjEuNjZBOCw4LDAsMCwwLDEwNCwyMjRWMTM2QTgsOCwwLDAsMCw5OS4wNiwxMjguNjFaTTg4LDIwNC42OSw3Ny42NiwxOTQuMzRBOCw4LDAsMCwwLDcyLDE5Mkg1NlYxNjhINzJhOCw4LDAsMCwwLDUuNjYtMi4zNEw4OCwxNTUuMzFaTTE1MiwxODBhNDAuNTUsNDAuNTUsMCwwLDEtMjAsMzQuOTFBOCw4LDAsMCwxLDEyNCwyMDEuMDlhMjQuNDksMjQuNDksMCwwLDAsMC00Mi4xOEE4LDgsMCwwLDEsMTMyLDE0NS4wOSw0MC41NSw0MC41NSwwLDAsMSwxNTIsMTgwWm02MS42Ni05Ny42Ni01Ni01NkE4LDgsMCwwLDAsMTUyLDI0SDU2QTE2LDE2LDAsMCwwLDQwLDQwdjgwYTgsOCwwLDAsMCwxNiwwVjQwaDg4Vjg4YTgsOCwwLDAsMCw4LDhoNDhWMjE2SDE2OGE4LDgsMCwwLDAsMCwxNmgzMmExNiwxNiwwLDAsMCwxNi0xNlY4OEE4LDgsMCwwLDAsMjEzLjY2LDgyLjM0Wk0xNjAsNTEuMzEsMTg4LjY5LDgwSDE2MFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "FileAudio";
export { I as FileAudio };
