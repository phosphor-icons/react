/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/TrademarkRegistered";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wm0wLDE5MmE4OCw4OCwwLDEsMSw4OC04OEE4OC4xLDg4LjEsMCwwLDEsMTI4LDIxNlptMjMuMDktNzUuNzlBMzIsMzIsMCwwLDAsMTM2LDgwSDEwNGE4LDgsMCwwLDAtOCw4djgwYTgsOCwwLDAsMCwxNiwwVjE0NGgyMi4zOWwxOSwyOC40NGE4LDgsMCwwLDAsMTMuMzItOC44OFpNMTEyLDk2aDI0YTE2LDE2LDAsMCwxLDAsMzJIMTEyWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjhBMTAwLDEwMCwwLDEsMCwyMjgsMTI4LDEwMC4xMSwxMDAuMTEsMCwwLDAsMTI4LDI4Wm0wLDE5MmE5Miw5MiwwLDEsMSw5Mi05MkE5Mi4xLDkyLjEsMCwwLDEsMTI4LDIyMFptMTcuMTItODEuNTNBMjgsMjgsMCwwLDAsMTM2LDg0SDEwNGE0LDQsMCwwLDAtNCw0djgwYTQsNCwwLDAsMCw4LDBWMTQwaDI4LjUybDIwLjE1LDMwLjIzYTQsNCwwLDAsMCw2LjY2LTQuNDRaTTEwOCw5MmgyOGEyMCwyMCwwLDAsMSwwLDQwSDEwOFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjZBMTAyLDEwMiwwLDEsMCwyMzAsMTI4LDEwMi4xMiwxMDIuMTIsMCwwLDAsMTI4LDI2Wm0wLDE5MmE5MCw5MCwwLDEsMSw5MC05MEE5MC4xLDkwLjEsMCwwLDEsMTI4LDIxOFptMjAuMTYtNzguNThBMzAsMzAsMCwwLDAsMTM2LDgySDEwNGE2LDYsMCwwLDAtNiw2djgwYTYsNiwwLDAsMCwxMiwwVjE0MmgyNS40NkwxNTUsMTcxLjMzYTYsNiwwLDEsMCwxMC02LjY2Wk0xMTAsOTRoMjZhMTgsMTgsMCwwLDEsMCwzNkgxMTBaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjBBMTA4LDEwOCwwLDEsMCwyMzYsMTI4LDEwOC4xMiwxMDguMTIsMCwwLDAsMTI4LDIwWm0wLDE5MmE4NCw4NCwwLDEsMSw4NC04NEE4NC4wOSw4NC4wOSwwLDAsMSwxMjgsMjEyWm0yOC43LTcwLjU4QTM2LDM2LDAsMCwwLDEzNiw3NkgxMDRBMTIsMTIsMCwwLDAsOTIsODh2ODBhMTIsMTIsMCwwLDAsMjQsMFYxNDhoMTYuMjRMMTUwLDE3NC42NmExMiwxMiwwLDAsMCwyMC0xMy4zMlpNMTE2LDEwMGgyMGExMiwxMiwwLDAsMSwwLDI0SDExNloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsMTEyYTE2LDE2LDAsMCwxLTE2LDE2SDExMlY5NmgyNEExNiwxNiwwLDAsMSwxNTIsMTEyWm04MCwxNkExMDQsMTA0LDAsMSwxLDEyOCwyNCwxMDQuMTEsMTA0LjExLDAsMCwxLDIzMiwxMjhabS0xNiwwYTg4LDg4LDAsMSwwLTg4LDg4QTg4LjEsODguMSwwLDAsMCwyMTYsMTI4Wm0tMTYsMGE3Miw3MiwwLDEsMS03Mi03MkE3Mi4wOCw3Mi4wOCwwLDAsMSwyMDAsMTI4Wm0tMzMuMzQsMzUuNTYtMTUuNTctMjMuMzVBMzIsMzIsMCwwLDAsMTM2LDgwSDEwNGE4LDgsMCwwLDAtOCw4djgwYTgsOCwwLDAsMCwxNiwwVjE0NGgyMi4zOWwxOSwyOC40NGE4LDgsMCwwLDAsMTMuMzItOC44OFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTI4YTk2LDk2LDAsMSwxLTk2LTk2QTk2LDk2LDAsMCwxLDIyNCwxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTI4LDI0QTEwNCwxMDQsMCwxLDAsMjMyLDEyOCwxMDQuMTEsMTA0LjExLDAsMCwwLDEyOCwyNFptMCwxOTJhODgsODgsMCwxLDEsODgtODhBODguMSw4OC4xLDAsMCwxLDEyOCwyMTZabTIzLjA5LTc1Ljc5QTMyLDMyLDAsMCwwLDEzNiw4MEgxMDRhOCw4LDAsMCwwLTgsOHY4MGE4LDgsMCwwLDAsMTYsMFYxNDRoMjIuMzlsMTksMjguNDRhOCw4LDAsMCwwLDEzLjMyLTguODhaTTExMiw5NmgyNGExNiwxNiwwLDAsMSwwLDMySDExMloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "TrademarkRegistered";
export { I as TrademarkRegistered };
