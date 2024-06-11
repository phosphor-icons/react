/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Farm";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYuODMsMjIwLjQzYTgsOCwwLDAsMS0xMS4wOSwyLjIzQTE4My4xNSwxODMuMTUsMCwwLDAsMjQsMTkyYTgsOCwwLDAsMSwwLTE2LDE5OS4xMSwxOTkuMTEsMCwwLDEsMTEwLjYsMzMuMzRBOCw4LDAsMCwxLDEzNi44MywyMjAuNDNaTTI0LDE0NGE4LDgsMCwwLDAsMCwxNiwyMTQuODEsMjE0LjgxLDAsMCwxLDE1MS4xNyw2MS43MSw4LDgsMCwxLDAsMTEuMi0xMS40MkEyMzAuNjksMjMwLjY5LDAsMCwwLDI0LDE0NFptMjA4LDE2YTIxNi41MSwyMTYuNTEsMCwwLDAtNDguNTksNS40OXE4LjI0LDYuMjUsMTYsMTMuMTZBMjAxLjUzLDIwMS41MywwLDAsMSwyMzIsMTc2YTgsOCwwLDAsMSwwLDE2Yy02LDAtMTEuOTMuMjktMTcuODUuODZxOC4zMiw4LjY3LDE1Ljk0LDE4LjE0YTgsOCwwLDEsMS0xMi40OCwxMEEyNDcsMjQ3LDAsMCwwLDI0LDEyOGE4LDgsMCwwLDEsMC0xNiwyNjYuMzMsMjY2LjMzLDAsMCwxLDQ4LDQuMzdWODBhOCw4LDAsMCwxLDMuMi02LjRsNjQtNDhhOCw4LDAsMCwxLDkuNiwwbDY0LDQ4QTgsOCwwLDAsMSwyMTYsODB2MzIuNDljNS4zMS0uMzEsMTAuNjQtLjQ5LDE2LS40OWE4LDgsMCwwLDEsMCwxNiwyNDYuMywyNDYuMywwLDAsMC04NC4yNiwxNC42OXE5LjQ0LDUsMTguNDYsMTAuNzhBMjMyLjIsMjMyLjIsMCwwLDEsMjMyLDE0NGE4LDgsMCwwLDEsMCwxNlpNMTIwLDg4aDQ4YTgsOCwwLDAsMSw4LDh2MjEuOTRxMTEuODgtMi41NiwyNC00Vjg0TDE0NCw0Miw4OCw4NHYzNS44MXExMi4xOSwzLDI0LDcuMThWOTZBOCw4LDAsMCwxLDEyMCw4OFptOC4wNyw0NS4yN0EyNjIuNDgsMjYyLjQ4LDAsMCwxLDE2MCwxMjEuOTRWMTA0SDEyOHYyOS4yNFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTU2YTQsNCwwLDAsMCwwLTgsMjI4LjExLDIyOC4xMSwwLDAsMC02Ni40Miw5Ljg0LDI1Ni40NSwyNTYuNDUsMCwwLDAtMjcuNjYtMTUuNjdBMjUwLjEsMjUwLjEsMCwwLDEsMjMyLDEyNGE0LDQsMCwwLDAsMC04cS0xMC4wNiwwLTIwLC43NlY4MGE0LDQsMCwwLDAtMS42LTMuMmwtNjQtNDhhNCw0LDAsMCwwLTQuOCwwbC02NCw0OEE0LDQsMCwwLDAsNzYsODB2NDEuMkEyNjEuNzQsMjYxLjc0LDAsMCwwLDI0LDExNmE0LDQsMCwwLDAsMCw4LDI1MSwyNTEsMCwwLDEsMTk2LjczLDk0LjUsNCw0LDAsMCwwLDYuMjQtNSwyNjIuNjEsMjYyLjYxLDAsMCwwLTIxLjQ0LTIzLjY0QTE5MC4xMSwxOTAuMTEsMCwwLDEsMjMyLDE4OGE0LDQsMCwwLDAsMC04LDE5OC4xNSwxOTguMTUsMCwwLDAtMzMuODQsMi45MiwyNjEuNDQsMjYxLjQ0LDAsMCwwLTI0LTE5LjI1QTIyMC40NiwyMjAuNDYsMCwwLDEsMjMyLDE1NlptLTY4LTMxYTI1OS44NCwyNTkuODQsMCwwLDAtMzUuOTMsMTIuNjVjLTEuMzYtLjU4LTIuNzEtMS4xOC00LjA3LTEuNzRWMTAwaDQwWk04NCw4Mmw2MC00NSw2MCw0NXYzNS40OWEyNTguNTUsMjU4LjU1LDAsMCwwLTMyLDUuNDVWOTZhNCw0LDAsMCwwLTQtNEgxMjBhNCw0LDAsMCwwLTQsNHYzNi43MUEyNTguNjQsMjU4LjY0LDAsMCwwLDg0LDEyM1ptNDkuNSwxMzYuMjFhNCw0LDAsMCwxLTUuNTUsMS4xMkExODcuMDgsMTg3LjA4LDAsMCwwLDI0LDE4OGE0LDQsMCwwLDEsMC04LDE5NS4xMiwxOTUuMTIsMCwwLDEsMTA4LjM4LDMyLjY3QTQsNCwwLDAsMSwxMzMuNSwyMTguMjFabTUwLjA3LTUuMDdhNCw0LDAsMCwxLTUuNiw1LjcyQTIxOC43NiwyMTguNzYsMCwwLDAsMjQsMTU2YTQsNCwwLDAsMSwwLThBMjI2LjcxLDIyNi43MSwwLDAsMSwxODMuNTcsMjEzLjE0WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTU4YTYsNiwwLDAsMCwwLTEyLDIzMC4xMSwyMzAuMTEsMCwwLDAtNjYuMTEsOS42NSwyNjAuMzQsMjYwLjM0LDAsMCwwLTIzLjA3LTEzLjI4QTI0OC4yNSwyNDguMjUsMCwwLDEsMjMyLDEyNmE2LDYsMCwwLDAsMC0xMmMtNiwwLTEyLC4yMi0xOCwuNjJWODBhNiw2LDAsMCwwLTIuNC00LjhsLTY0LTQ4YTYsNiwwLDAsMC03LjIsMGwtNjQsNDhBNiw2LDAsMCwwLDc0LDgwdjM4Ljc3QTI2NC4yNSwyNjQuMjUsMCwwLDAsMjQsMTE0YTYsNiwwLDAsMCwwLDEyLDI0OSwyNDksMCwwLDEsMTk1LjE3LDkzLjc1LDYsNiwwLDAsMCw0LjY5LDIuMjUsNiw2LDAsMCwwLDQuNjctOS43NSwyNjUsMjY1LDAsMCwwLTE4LjY5LTIwLjk0QTE5MC41OCwxOTAuNTgsMCwwLDEsMjMyLDE5MGE2LDYsMCwwLDAsMC0xMiwxOTkuMSwxOTkuMSwwLDAsMC0zMy4yMSwyLjc5cS05LjYzLTguNjUtMjAtMTYuMjVBMjE4LjcyLDIxOC43MiwwLDAsMSwyMzIsMTU4Wk0xMjYsMTM0LjU2VjEwMmgzNnYyMS40NmEyNTkuMTEsMjU5LjExLDAsMCwwLTMzLjkzLDEyWk04Niw4M2w1OC00My41TDIwMiw4M3YzMi43MWEyNjAuNTEsMjYwLjUxLDAsMCwwLTI4LDQuNzNWOTZhNiw2LDAsMCwwLTYtNkgxMjBhNiw2LDAsMCwwLTYsNnYzMy44NWEyNTguODcsMjU4Ljg3LDAsMCwwLTI4LTguNDZabTQ5LjE3LDEzNi4zMmE2LDYsMCwwLDEtOC4zMiwxLjY4QTE4NS4xNCwxODUuMTQsMCwwLDAsMjQsMTkwYTYsNiwwLDAsMSwwLTEyLDE5Ny4xLDE5Ny4xLDAsMCwxLDEwOS40OSwzM0E2LDYsMCwwLDEsMTM1LjE3LDIxOS4zMlptNDkuOC03LjYxYTYsNiwwLDEsMS04LjQsOC41N0EyMTYuNzksMjE2Ljc5LDAsMCwwLDI0LDE1OGE2LDYsMCwwLDEsMC0xMkEyMjguNzQsMjI4Ljc0LDAsMCwxLDE4NSwyMTEuNzFaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzcuMTcsMjA3LjExQTEyLDEyLDAsMSwxLDE2MSwyMjQuODgsMjAzLjUzLDIwMy41MywwLDAsMCwyNCwxNzJhMTIsMTIsMCwwLDEsMC0yNEEyMjcuNDUsMjI3LjQ1LDAsMCwxLDE3Ny4xNywyMDcuMTFabS03NC43NC0yQTE4Ni40NywxODYuNDcsMCwwLDAsMjQsMTg4YTEyLDEyLDAsMCwwLDAsMjQsMTYyLjYxLDE2Mi42MSwwLDAsMSw2OC40MSwxNC45LDEyLDEyLDAsMSwwLDEwLTIxLjgxWk0yNDQsMTYwYTEyLDEyLDAsMCwxLTEyLDEyLDIwNS4xOSwyMDUuMTksMCwwLDAtMzEuMzgsMi40LDI3MCwyNzAsMCwwLDEsMzIuNTksMzQuMDksMTIsMTIsMCwxLDEtMTguNzIsMTVBMjQzLDI0MywwLDAsMCwyNCwxMzJhMTIsMTIsMCwwLDEsMC0yNCwyNzEsMjcxLDAsMCwxLDQ0LDMuNlY4MGExMiwxMiwwLDAsMSw0LjgtOS42bDY0LTQ4YTEyLDEyLDAsMCwxLDE0LjQsMGw2NCw0OEExMiwxMiwwLDAsMSwyMjAsODB2MjguMjhjNC0uMTcsOC0uMjgsMTItLjI4YTEyLDEyLDAsMCwxLDAsMjQsMjQyLjg1LDI0Mi44NSwwLDAsMC03NC40MiwxMS41NXE5LjI4LDUuMzUsMTguMTUsMTEuNDZBMjI4LjU5LDIyOC41OSwwLDAsMSwyMzIsMTQ4LDEyLDEyLDAsMCwxLDI0NCwxNjBabS04OC01MkgxMzJ2MTkuM3ExMS44My00Ljc3LDI0LTguMzlabS02NCw4LjY5YzUuMzksMS40LDEwLjcyLDMsMTYsNC43MlY5NmExMiwxMiwwLDAsMSwxMi0xMmg0OGExMiwxMiwwLDAsMSwxMiwxMnYxN3E4LTEuNTYsMTYtMi42NVY4NkwxNDQsNDcsOTIsODZaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYuODMsMjIwLjQzYTgsOCwwLDAsMS0xMS4wOSwyLjIzQTE4My4xNSwxODMuMTUsMCwwLDAsMjQsMTkyYTgsOCwwLDAsMSwwLTE2LDE5OS4xMSwxOTkuMTEsMCwwLDEsMTEwLjYsMzMuMzRBOCw4LDAsMCwxLDEzNi44MywyMjAuNDNaTTI0LDE0NGE4LDgsMCwwLDAsMCwxNiwyMTQuODEsMjE0LjgxLDAsMCwxLDE1MS4xNyw2MS43MSw4LDgsMCwxLDAsMTEuMi0xMS40MkEyMzAuNjksMjMwLjY5LDAsMCwwLDI0LDE0NFptMjA4LDE2YTIxNi41MSwyMTYuNTEsMCwwLDAtNDguNTksNS40OXE4LjI0LDYuMjUsMTYsMTMuMTZBMjAxLjUzLDIwMS41MywwLDAsMSwyMzIsMTc2YTgsOCwwLDAsMSwwLDE2Yy02LDAtMTEuOTMuMjktMTcuODUuODZxOC4zMiw4LjY3LDE1Ljk0LDE4LjE0YTgsOCwwLDEsMS0xMi40OCwxMEEyNDcsMjQ3LDAsMCwwLDI0LDEyOGE4LDgsMCwwLDEsMC0xNiwyNjUuNDMsMjY1LjQzLDAsMCwxLDQ4LDQuMzhWODBhOCw4LDAsMCwxLDMuMi02LjRsNjQtNDhhOCw4LDAsMCwxLDkuNiwwbDY0LDQ4QTgsOCwwLDAsMSwyMTYsODB2MzIuNWM1LjMxLS4zMiwxMC42NC0uNSwxNi0uNWE4LDgsMCwwLDEsMCwxNiwyNDYuMywyNDYuMywwLDAsMC04NC4yNiwxNC42OXE5LjQ0LDUsMTguNDYsMTAuNzhBMjMyLjIsMjMyLjIsMCwwLDEsMjMyLDE0NGE4LDgsMCwwLDEsMCwxNlpNMTI4LjA3LDEzMy4yN0EyNjEuNTEsMjYxLjUxLDAsMCwxLDE2OCwxMTkuODFWOTZIMTIwdjM0QzEyMi43MSwxMzEsMTI1LjQsMTMyLjEzLDEyOC4wNywxMzMuMjdaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjMuODUsMjE2SDI0VjEyMGEyNTcsMjU3LDAsMCwxLDU2LjIsNi4yMWwtLjItLjA3VjgwbDY0LTQ4LDY0LDQ4djQxLjExYTI1NC42NywyNTQuNjcsMCwwLDAtNDAsN1Y5NkgxMjB2NDIuNjFsMCwwLDAsMEEyNTYuNzksMjU2Ljc5LDAsMCwxLDIyMy44NSwyMTZaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjMyLDE2MGE4LDgsMCwwLDAsMC0xNiwyMzIuMiwyMzIuMiwwLDAsMC02NS44LDkuNDdxLTktNS43OC0xOC40Ni0xMC43OEEyNDYuMywyNDYuMywwLDAsMSwyMzIsMTI4YTgsOCwwLDAsMCwwLTE2Yy01LjM2LDAtMTAuNjkuMTgtMTYsLjQ5VjgwYTgsOCwwLDAsMC0zLjItNi40bC02NC00OGE4LDgsMCwwLDAtOS42LDBsLTY0LDQ4QTgsOCwwLDAsMCw3Miw4MHYzNi4zN0EyNjYuMzMsMjY2LjMzLDAsMCwwLDI0LDExMmE4LDgsMCwwLDAsMCwxNiwyNDcsMjQ3LDAsMCwxLDE5My42MSw5Myw4LDgsMCwxLDAsMTIuNDgtMTBxLTcuNTktOS41LTE1Ljk0LTE4LjE0YzUuOTItLjU3LDExLjg5LS44NiwxNy44NS0uODZhOCw4LDAsMCwwLDAtMTYsMjAxLjUzLDIwMS41MywwLDAsMC0zMi41OSwyLjY1cS03Ljc1LTYuOTItMTYtMTMuMTZBMjE2LjUxLDIxNi41MSwwLDAsMSwyMzIsMTYwWk0xMjgsMTMzLjI0VjEwNGgzMnYxNy45NGEyNjIuNDgsMjYyLjQ4LDAsMCwwLTMxLjkzLDExLjMzWk04OCw4NGw1Ni00Miw1Niw0MnYyOS45M3EtMTIuMTIsMS40NS0yNCw0Vjk2YTgsOCwwLDAsMC04LThIMTIwYTgsOCwwLDAsMC04LDh2MzFxLTExLjc5LTQuMTUtMjQtNy4xOFptNDguODMsMTM2LjQzYTgsOCwwLDAsMS0xMS4wOSwyLjIzQTE4My4xNSwxODMuMTUsMCwwLDAsMjQsMTkyYTgsOCwwLDAsMSwwLTE2LDE5OS4xMSwxOTkuMTEsMCwwLDEsMTEwLjYsMzMuMzRBOCw4LDAsMCwxLDEzNi44MywyMjAuNDNabTQ5LjU0LTEwLjE0YTgsOCwwLDEsMS0xMS4yLDExLjQyQTIxNC44MSwyMTQuODEsMCwwLDAsMjQsMTYwYTgsOCwwLDAsMSwwLTE2QTIzMC42OSwyMzAuNjksMCwwLDEsMTg2LjM3LDIxMC4yOVoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Farm";
export { I as Farm };
