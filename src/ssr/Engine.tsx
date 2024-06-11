/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Engine";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsMTAwSDIyNUwxOTAuODMsNjUuODZBMTkuODYsMTkuODYsMCwwLDAsMTc2LjY5LDYwSDE0NFY0NGgyMGExMiwxMiwwLDAsMCwwLTI0SDEwMGExMiwxMiwwLDAsMCwwLDI0aDIwVjYwSDY0QTIwLDIwLDAsMCwwLDQ0LDgwdjQ4SDI4VjEwOGExMiwxMiwwLDAsMC0yNCwwdjY0YTEyLDEyLDAsMCwwLDI0LDBWMTUySDQ0djE2LjY5YTE5Ljg2LDE5Ljg2LDAsMCwwLDUuODYsMTQuMTRsMzkuMzEsMzkuMzFBMTkuODYsMTkuODYsMCwwLDAsMTAzLjMxLDIyOGg3My4zOGExOS44NiwxOS44NiwwLDAsMCwxNC4xNC01Ljg2TDIyNSwxODhoMTFhMjAsMjAsMCwwLDAsMjAtMjBWMTIwQTIwLDIwLDAsMCwwLDIzNiwxMDBabS00LDY0SDIyMGExMiwxMiwwLDAsMC04LjQ5LDMuNTFMMTc1LDIwNEgxMDVMNjgsMTY3Vjg0SDE3NWwzNi40OCwzNi40OUExMiwxMiwwLDAsMCwyMjAsMTI0aDEyWiIvPjwvc3ZnPg==)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsMTIwdjQ4YTgsOCwwLDAsMS04LDhIMjI0bC0zNy42NiwzNy42NmE4LDgsMCwwLDEtNS42NSwyLjM0SDEwMy4zMWE4LDgsMCwwLDEtNS42NS0yLjM0TDU4LjM0LDE3NC4zNEE4LDgsMCwwLDEsNTYsMTY4LjY5VjgwYTgsOCwwLDAsMSw4LThIMTgwLjY5YTgsOCwwLDAsMSw1LjY1LDIuMzRMMjI0LDExMmgxNkE4LDgsMCwwLDEsMjQ4LDEyMFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yNDAsMTA0SDIyNy4zMUwxOTIsNjguNjlBMTUuODYsMTUuODYsMCwwLDAsMTgwLjY5LDY0SDE0MFY0MGgyNGE4LDgsMCwwLDAsMC0xNkgxMDBhOCw4LDAsMCwwLDAsMTZoMjRWNjRINjRBMTYsMTYsMCwwLDAsNDgsODB2NTJIMjRWMTA4YTgsOCwwLDAsMC0xNiwwdjY0YTgsOCwwLDAsMCwxNiwwVjE0OEg0OHYyMC42OUExNS44NiwxNS44NiwwLDAsMCw1Mi42OSwxODBMOTIsMjE5LjMxQTE1Ljg2LDE1Ljg2LDAsMCwwLDEwMy4zMSwyMjRoNzcuMzhBMTUuODYsMTUuODYsMCwwLDAsMTkyLDIxOS4zMUwyMjcuMzEsMTg0SDI0MGExNiwxNiwwLDAsMCwxNi0xNlYxMjBBMTYsMTYsMCwwLDAsMjQwLDEwNFptMCw2NEgyMjRhOCw4LDAsMCwwLTUuNjYsMi4zNEwxODAuNjksMjA4SDEwMy4zMUw2NCwxNjguNjlWODBIMTgwLjY5bDM3LjY1LDM3LjY2QTgsOCwwLDAsMCwyMjQsMTIwaDE2WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTYsMTIwdjQ4YTE2LDE2LDAsMCwxLTE2LDE2SDIyNy4zMUwxOTIsMjE5LjMxQTE1Ljg2LDE1Ljg2LDAsMCwxLDE4MC42OSwyMjRIMTAzLjMxQTE1Ljg2LDE1Ljg2LDAsMCwxLDkyLDIxOS4zMUw1Mi42OSwxODBBMTUuODYsMTUuODYsMCwwLDEsNDgsMTY4LjY5VjE0OEgyNHYyNGE4LDgsMCwwLDEtMTYsMFYxMDhhOCw4LDAsMCwxLDE2LDB2MjRINDhWODBBMTYsMTYsMCwwLDEsNjQsNjRoNjBWNDBIMTAwYTgsOCwwLDAsMSwwLTE2aDY0YTgsOCwwLDAsMSwwLDE2SDE0MFY2NGg0MC42OUExNS44NiwxNS44NiwwLDAsMSwxOTIsNjguNjlMMjI3LjMxLDEwNEgyNDBBMTYsMTYsMCwwLDEsMjU2LDEyMFoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTA2SDIyNi40OUwxOTAuNTgsNzAuMWExMy45LDEzLjksMCwwLDAtOS44OS00LjFIMTM4VjM4aDI2YTYsNiwwLDAsMCwwLTEySDEwMGE2LDYsMCwwLDAsMCwxMmgyNlY2Nkg2NEExNCwxNCwwLDAsMCw1MCw4MHY1NEgyMlYxMDhhNiw2LDAsMCwwLTEyLDB2NjRhNiw2LDAsMCwwLDEyLDBWMTQ2SDUwdjIyLjY5YTEzLjksMTMuOSwwLDAsMCw0LjEsOS44OUw5My40MiwyMTcuOWExMy45LDEzLjksMCwwLDAsOS44OSw0LjFoNzcuMzhhMTMuOSwxMy45LDAsMCwwLDkuODktNC4xTDIyNi40OSwxODJIMjQwYTE0LDE0LDAsMCwwLDE0LTE0VjEyMEExNCwxNCwwLDAsMCwyNDAsMTA2Wm0yLDYyYTIsMiwwLDAsMS0yLDJIMjI0YTYsNiwwLDAsMC00LjI0LDEuNzZMMTgyLjEsMjA5LjQyYTIsMiwwLDAsMS0xLjQxLjU4SDEwMy4zMWEyLDIsMCwwLDEtMS40MS0uNThMNjIuNTgsMTcwLjFhMiwyLDAsMCwxLS41OC0xLjQxVjgwYTIsMiwwLDAsMSwyLTJIMTgwLjY5YTIsMiwwLDAsMSwxLjQxLjU4bDM3LjY2LDM3LjY2QTYsNiwwLDAsMCwyMjQsMTE4aDE2YTIsMiwwLDAsMSwyLDJaIi8+PC9zdmc+)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTA0SDIyNy4zMUwxOTIsNjguNjlBMTUuODYsMTUuODYsMCwwLDAsMTgwLjY5LDY0SDE0MFY0MGgyNGE4LDgsMCwwLDAsMC0xNkgxMDBhOCw4LDAsMCwwLDAsMTZoMjRWNjRINjRBMTYsMTYsMCwwLDAsNDgsODB2NTJIMjRWMTA4YTgsOCwwLDAsMC0xNiwwdjY0YTgsOCwwLDAsMCwxNiwwVjE0OEg0OHYyMC42OUExNS44NiwxNS44NiwwLDAsMCw1Mi42OSwxODBMOTIsMjE5LjMxQTE1Ljg2LDE1Ljg2LDAsMCwwLDEwMy4zMSwyMjRoNzcuMzhBMTUuODYsMTUuODYsMCwwLDAsMTkyLDIxOS4zMUwyMjcuMzEsMTg0SDI0MGExNiwxNiwwLDAsMCwxNi0xNlYxMjBBMTYsMTYsMCwwLDAsMjQwLDEwNFptMCw2NEgyMjRhOCw4LDAsMCwwLTUuNjYsMi4zNEwxODAuNjksMjA4SDEwMy4zMUw2NCwxNjguNjlWODBIMTgwLjY5bDM3LjY1LDM3LjY2QTgsOCwwLDAsMCwyMjQsMTIwaDE2WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTA4SDIyNS42NkwxODkuMTcsNzEuNTFBMTEuOTMsMTEuOTMsMCwwLDAsMTgwLjY5LDY4SDEzNlYzNmgyOGE0LDQsMCwwLDAsMC04SDEwMGE0LDQsMCwwLDAsMCw4aDI4VjY4SDY0QTEyLDEyLDAsMCwwLDUyLDgwdjU2SDIwVjEwOGE0LDQsMCwwLDAtOCwwdjY0YTQsNCwwLDAsMCw4LDBWMTQ0SDUydjI0LjY5YTExLjkzLDExLjkzLDAsMCwwLDMuNTEsOC40OGwzOS4zMiwzOS4zMmExMS45MywxMS45MywwLDAsMCw4LjQ4LDMuNTFoNzcuMzhhMTEuOTMsMTEuOTMsMCwwLDAsOC40OC0zLjUxTDIyNS42NiwxODBIMjQwYTEyLDEyLDAsMCwwLDEyLTEyVjEyMEExMiwxMiwwLDAsMCwyNDAsMTA4Wm00LDYwYTQsNCwwLDAsMS00LDRIMjI0YTQsNCwwLDAsMC0yLjgzLDEuMTdsLTM3LjY2LDM3LjY2YTQsNCwwLDAsMS0yLjgyLDEuMTdIMTAzLjMxYTQsNCwwLDAsMS0yLjgyLTEuMTdMNjEuMTcsMTcxLjUxQTQsNCwwLDAsMSw2MCwxNjguNjlWODBhNCw0LDAsMCwxLDQtNEgxODAuNjlhNCw0LDAsMCwxLDIuODIsMS4xN2wzNy42NiwzNy42NkE0LDQsMCwwLDAsMjI0LDExNmgxNmE0LDQsMCwwLDEsNCw0WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Engine";
export { I as Engine };
