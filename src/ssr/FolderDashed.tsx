/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/FolderDashed";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05NiwyMDhhOCw4LDAsMCwxLTgsOEgzOS4zOEExNS40LDE1LjQsMCwwLDEsMjQsMjAwLjYyVjE5MmE4LDgsMCwwLDEsMTYsMHY4SDg4QTgsOCwwLDAsMSw5NiwyMDhabTY0LThIMTI4YTgsOCwwLDAsMCwwLDE2aDMyYTgsOCwwLDAsMCwwLTE2Wm02NC01NmE4LDgsMCwwLDAtOCw4djQ4SDIwMGE4LDgsMCwwLDAsMCwxNmgxNi44OUExNS4xMywxNS4xMywwLDAsMCwyMzIsMjAwLjg5VjE1MkE4LDgsMCwwLDAsMjI0LDE0NFptLTgtNzJIMTY4YTgsOCwwLDAsMCwwLDE2aDQ4djI0YTgsOCwwLDAsMCwxNiwwVjg4QTE2LDE2LDAsMCwwLDIxNiw3MlpNMjQsODBWNTZBMTYsMTYsMCwwLDEsNDAsNDBIOTIuNjlBMTUuODYsMTUuODYsMCwwLDEsMTA0LDQ0LjY5bDI5LjY2LDI5LjY1QTgsOCwwLDAsMSwxMjgsODhIMzJBOCw4LDAsMCwxLDI0LDgwWm0xNi04aDY4LjY5bC0xNi0xNkg0MFptLTgsODhhOCw4LDAsMCwwLDgtOFYxMjBhOCw4LDAsMCwwLTE2LDB2MzJBOCw4LDAsMCwwLDMyLDE2MFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05MiwyMDhhNCw0LDAsMCwxLTQsNEgzOS4zOEExMS40LDExLjQsMCwwLDEsMjgsMjAwLjYyVjE5MmE0LDQsMCwwLDEsOCwwdjguNjJBMy4zOSwzLjM5LDAsMCwwLDM5LjM4LDIwNEg4OEE0LDQsMCwwLDEsOTIsMjA4Wm02OC00SDEyOGE0LDQsMCwwLDAsMCw4aDMyYTQsNCwwLDAsMCwwLThabTY0LTU2YTQsNCwwLDAsMC00LDR2NDguODlhMy4xMiwzLjEyLDAsMCwxLTMuMTEsMy4xMUgyMDBhNCw0LDAsMCwwLDAsOGgxNi44OUExMS4xMiwxMS4xMiwwLDAsMCwyMjgsMjAwLjg5VjE1MkE0LDQsMCwwLDAsMjI0LDE0OFptLTgtNzJIMTY4YTQsNCwwLDAsMCwwLDhoNDhhNCw0LDAsMCwxLDQsNHYyNGE0LDQsMCwwLDAsOCwwVjg4QTEyLDEyLDAsMCwwLDIxNiw3NlpNMjgsODBWNTZBMTIsMTIsMCwwLDEsNDAsNDRIOTIuNjlhMTEuOSwxMS45LDAsMCwxLDguNDgsMy41MmwyOS42NiwyOS42NUE0LDQsMCwwLDEsMTI4LDg0SDMyQTQsNCwwLDAsMSwyOCw4MFptOC00aDgyLjM0TDk1LjUxLDUzLjE3QTQsNCwwLDAsMCw5Mi42OSw1Mkg0MGE0LDQsMCwwLDAtNCw0Wm0tNCw4MGE0LDQsMCwwLDAsNC00VjEyMGE0LDQsMCwwLDAtOCwwdjMyQTQsNCwwLDAsMCwzMiwxNTZaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05NCwyMDhhNiw2LDAsMCwxLTYsNkgzOS4zOEExMy4zOSwxMy4zOSwwLDAsMSwyNiwyMDAuNjJWMTkyYTYsNiwwLDAsMSwxMiwwdjguNjJBMS40LDEuNCwwLDAsMCwzOS4zOCwyMDJIODhBNiw2LDAsMCwxLDk0LDIwOFptNjYtNkgxMjhhNiw2LDAsMCwwLDAsMTJoMzJhNiw2LDAsMCwwLDAtMTJabTY0LTU2YTYsNiwwLDAsMC02LDZ2NDguODlhMS4xMSwxLjExLDAsMCwxLTEuMTEsMS4xMUgyMDBhNiw2LDAsMCwwLDAsMTJoMTYuODlBMTMuMTIsMTMuMTIsMCwwLDAsMjMwLDIwMC44OVYxNTJBNiw2LDAsMCwwLDIyNCwxNDZabS04LTcySDE2OGE2LDYsMCwwLDAsMCwxMmg0OGEyLDIsMCwwLDEsMiwydjI0YTYsNiwwLDAsMCwxMiwwVjg4QTE0LDE0LDAsMCwwLDIxNiw3NFpNMjYsODBWNTZBMTQsMTQsMCwwLDEsNDAsNDJIOTIuNjlhMTMuOTQsMTMuOTQsMCwwLDEsOS45LDQuMWwyOS42NSwyOS42NkE2LDYsMCwwLDEsMTI4LDg2SDMyQTYsNiwwLDAsMSwyNiw4MFptMTItNmg3NS41MUw5NC4xLDU0LjU5QTIsMiwwLDAsMCw5Mi42OSw1NEg0MGEyLDIsMCwwLDAtMiwyWm0tNiw4NGE2LDYsMCwwLDAsNi02VjEyMGE2LDYsMCwwLDAtMTIsMHYzMkE2LDYsMCwwLDAsMzIsMTU4WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDAsMjA4YTEyLDEyLDAsMCwxLTEyLDEySDM5LjM4QTE5LjQxLDE5LjQxLDAsMCwxLDIwLDIwMC42MlYxOTJhMTIsMTIsMCwwLDEsMjQsMHY0SDg4QTEyLDEyLDAsMCwxLDEwMCwyMDhabTYwLTEySDEyOGExMiwxMiwwLDAsMCwwLDI0aDMyYTEyLDEyLDAsMCwwLDAtMjRabTY0LTU2YTEyLDEyLDAsMCwwLTEyLDEydjQ0SDIwMGExMiwxMiwwLDAsMCwwLDI0aDE2Ljg5QTE5LjEzLDE5LjEzLDAsMCwwLDIzNiwyMDAuODlWMTUyQTEyLDEyLDAsMCwwLDIyNCwxNDBabS04LTcySDE2OGExMiwxMiwwLDAsMCwwLDI0aDQ0djIwYTEyLDEyLDAsMCwwLDI0LDBWODhBMjAsMjAsMCwwLDAsMjE2LDY4Wk0zMiwxNjRhMTIsMTIsMCwwLDAsMTItMTJWMTIwYTEyLDEyLDAsMCwwLTI0LDB2MzJBMTIsMTIsMCwwLDAsMzIsMTY0Wk0yMCw4MFY1MkEyMCwyMCwwLDAsMSw0MCwzMkg5Mi40MWEyMCwyMCwwLDAsMSwxNC45NCw2LjcxaDBMMTM3LDcyYTEyLDEyLDAsMCwxLTksMjBIMzJBMTIsMTIsMCwwLDEsMjAsODBaTTQ0LDY4aDU3LjI4TDkwLjYxLDU2SDQ0WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05NiwyMDhhOCw4LDAsMCwxLTgsOEgzOS4zOEExNS40LDE1LjQsMCwwLDEsMjQsMjAwLjYyVjE5MmE4LDgsMCwwLDEsMTYsMHY4SDg4QTgsOCwwLDAsMSw5NiwyMDhabTY0LThIMTI4YTgsOCwwLDAsMCwwLDE2aDMyYTgsOCwwLDAsMCwwLTE2Wm02NC01NmE4LDgsMCwwLDAtOCw4djQ4SDIwMGE4LDgsMCwwLDAsMCwxNmgxNi44OUExNS4xMywxNS4xMywwLDAsMCwyMzIsMjAwLjg5VjE1MkE4LDgsMCwwLDAsMjI0LDE0NFptLTgtNzJIMTY4YTgsOCwwLDAsMCwwLDE2aDQ4djI0YTgsOCwwLDAsMCwxNiwwVjg4QTE2LDE2LDAsMCwwLDIxNiw3MlpNMzIsODhoOTZhOCw4LDAsMCwwLDUuNjYtMTMuNjZMMTA0LDQ0LjY5QTE1Ljg2LDE1Ljg2LDAsMCwwLDkyLjY5LDQwSDQwQTE2LDE2LDAsMCwwLDI0LDU2VjgwQTgsOCwwLDAsMCwzMiw4OFptMCw3MmE4LDgsMCwwLDAsOC04VjEyMGE4LDgsMCwwLDAtMTYsMHYzMkE4LDgsMCwwLDAsMzIsMTYwWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsODBIMzJWNTZhOCw4LDAsMCwxLDgtOEg5Mi42OWE4LDgsMCwwLDEsNS42NSwyLjM0WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTk2LDIwOGE4LDgsMCwwLDEtOCw4SDM5LjM4QTE1LjQsMTUuNCwwLDAsMSwyNCwyMDAuNjJWMTkyYTgsOCwwLDAsMSwxNiwwdjhIODhBOCw4LDAsMCwxLDk2LDIwOFptNjQtOEgxMjhhOCw4LDAsMCwwLDAsMTZoMzJhOCw4LDAsMCwwLDAtMTZabTY0LTU2YTgsOCwwLDAsMC04LDh2NDhIMjAwYTgsOCwwLDAsMCwwLDE2aDE2Ljg5QTE1LjEzLDE1LjEzLDAsMCwwLDIzMiwyMDAuODlWMTUyQTgsOCwwLDAsMCwyMjQsMTQ0Wm0tOC03MkgxNjhhOCw4LDAsMCwwLDAsMTZoNDh2MjRhOCw4LDAsMCwwLDE2LDBWODhBMTYsMTYsMCwwLDAsMjE2LDcyWk0yNCw4MFY1NkExNiwxNiwwLDAsMSw0MCw0MEg5Mi42OUExNS44NiwxNS44NiwwLDAsMSwxMDQsNDQuNjlsMjkuNjYsMjkuNjVBOCw4LDAsMCwxLDEyOCw4OEgzMkE4LDgsMCwwLDEsMjQsODBabTE2LThoNjguNjlsLTE2LTE2SDQwWm0tOCw4OGE4LDgsMCwwLDAsOC04VjEyMGE4LDgsMCwwLDAtMTYsMHYzMkE4LDgsMCwwLDAsMzIsMTYwWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "FolderDashed";
export { I as FolderDashed, I as FolderDotted };
