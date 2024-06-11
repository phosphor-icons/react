/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Pinwheel";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjkuNjYsMjE4LjM0bC00OC40Mi00OC40MWMxLjEtLjMzLDIuMTktLjY4LDMuMjctMS4wN0E2MCw2MCwwLDAsMCwyMjAuMzcsOTJhOCw4LDAsMCwwLTEwLjI1LTQuNzhsLTQ0LjIsMTYuMDhjLjMyLS42Mi42NC0xLjI0LjkzLTEuODhBNjAsNjAsMCwwLDAsOTIsMTkuNjUsOCw4LDAsMCwwLDg3LjE4LDI5LjlsMTYuMDgsNDQuMmMtLjYyLS4zMi0xLjI0LS42NC0xLjg4LS45M2E2MCw2MCwwLDAsMC04MS43Myw3NC44OSw4LDgsMCwwLDAsMTAuMjUsNC43OGw0NC4yLTE2LjA5Yy0uMzIuNjMtLjY0LDEuMjUtLjkzLDEuODlhNjAsNjAsMCwwLDAsNzQuODksODEuNzMsOCw4LDAsMCwwLDQuNzgtMTAuMjVsLTE2LjA5LTQ0LjJjLjYzLjMyLDEuMjUuNjQsMS44OS45M2E1OS44Nyw1OS44NywwLDAsMCwyMi40OCw1LjU4bDU3LjIyLDU3LjIzYTgsOCwwLDAsMCwxMS4zMi0xMS4zMlpNMTMxLjA3LDM2LjE1QTQ0LDQ0LDAsMCwxLDEzNC44LDExNEwxMDUuMTksMzIuNjNBNDMuNjMsNDMuNjMsMCwwLDEsMTMxLjA3LDM2LjE1Wk0zMi42MywxMzQuODJBNDQsNDQsMCwwLDEsMTE0LDEwNS4yMlpNMTA5LDIwMy44N2E0NCw0NCwwLDAsMS0zLjczLTc3LjgxbDI5LjYsODEuMzNBNDMuNiw0My42LDAsMCwxLDEwOSwyMDMuODdabTU1LjU2LTQ3LjM4aC0uMTFhNDQuMTQsNDQuMTQsMCwwLDEtMzguMzQtMjEuNjlsODEuMzMtMjkuNjFhNDQuMDYsNDQuMDYsMCwwLDEtNDIuODgsNTEuM1oiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjYuODMsMjIxLjE3LDE3My4zNSwxNjcuN2E1Ni44Myw1Ni44MywwLDAsMCw5Ljc5LTIuNiw1Niw1NiwwLDAsMCwzMy40Ny03MS43Nyw0LDQsMCwwLDAtNS4xMy0yLjM5bC01NS4zMSwyMC4xM2E1Ni43OCw1Ni43OCwwLDAsMCw3LjA2LTExLjM4LDU2LDU2LDAsMCwwLTY5LjktNzYuMjgsNCw0LDAsMCwwLTIuMzksNS4xMmwyMC4xMyw1NS4zMmE1Ni4zMyw1Ni4zMywwLDAsMC0xMS4zOC03LjA2LDU2LDU2LDAsMCwwLTc2LjI4LDY5LjlBNCw0LDAsMCwwLDI1LjQ3LDE0OWE0LDQsMCwwLDAsMy4wNi4xM0w4My44NSwxMjlhNTYsNTYsMCwwLDAsNjIuODQsODcuNjYsNCw0LDAsMCwwLDIuMzktNS4xM0wxMjksMTU2LjE3YTU2LjUsNTYuNSwwLDAsMCwxMS4zOCw3LjA2LDU1Ljg4LDU1Ljg4LDAsMCwwLDIyLjQ4LDUuMjRsNTguMzYsNTguMzZhNCw0LDAsMCwwLDUuNjYtNS42NlpNOTkuODgsMjkuNzFhNDgsNDgsMCwwLDEsMzIuNzIsODkuOVptMjUuMjEsOTIuNjctNy40NSwyLjcxLTIuNzItNy40NSw3LjQ2LTIuNzJaTTI5LjcxLDE0MC4xNGE0OCw0OCwwLDAsMSw4OS45LTMyLjcyWm0xMTAuNDMsNzAuMTdhNDgsNDgsMCwwLDEtMzIuNzItODkuOVptMjQuMjktNDkuODJhNDguMDgsNDguMDgsMCwwLDEtNDQtMjcuODlsODkuOS0zMi43MmE0OCw0OCwwLDAsMS00NS43OSw2MC42MVoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjguMjQsMjE5Ljc2LDE3Ny4zOCwxNjguOWE2MC4xOSw2MC4xOSwwLDAsMCw2LjQ1LTEuOTIsNTgsNTgsMCwwLDAsMzQuNjYtNzQuMzQsNiw2LDAsMCwwLTcuNjktMy41OEwxNjEuNSwxMDdhNjAuMTYsNjAuMTYsMCwwLDAsMy41NC02LjQ2LDU4LDU4LDAsMCwwLTcyLjQtNzksNiw2LDAsMCwwLTMuNTgsNy42OUwxMDcsNzguNTJBNjAuMTYsNjAuMTYsMCwwLDAsMTAwLjU0LDc1YTU4LDU4LDAsMCwwLTc5LDcyLjQsNiw2LDAsMCwwLDMuMSwzLjM4LDYsNiwwLDAsMCw0LjU5LjJMNzguNTIsMTMzQTU4LjMsNTguMywwLDAsMCw3NSwxMzkuNDgsNTguMDYsNTguMDYsMCwwLDAsMTI3LjUsMjIyYTU4LjI1LDU4LjI1LDAsMCwwLDE5Ljg4LTMuNTNBNiw2LDAsMCwwLDE1MSwyMTAuOEwxMzMsMTYxLjVBNTcuOCw1Ny44LDAsMCwwLDE2MiwxNzAuNDVsNTcuNzksNTcuNzlhNiw2LDAsMCwwLDguNDgtOC40OFpNMTAyLjUyLDMxLjExYTQ2LDQ2LDAsMCwxLDMxLjIsODUuNzJaTTMxLjExLDEzNy41YTQ2LDQ2LDAsMCwxLDg1LjcyLTMxLjJaTTEzNy41LDIwOC45YTQ2LDQ2LDAsMCwxLTMxLjItODUuNzJabTI2Ljk1LTUwLjQxYTQ2LjA3LDQ2LjA3LDAsMCwxLTQxLjI3LTI0Ljc3bDg1LjcyLTMxLjJhNDYuMDYsNDYuMDYsMCwwLDEtNDQuMzksNTZaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIuNDksMjE1LjUybC00NC00NGE2NCw2NCwwLDAsMCwzNS41OS04MSwxMiwxMiwwLDAsMC0xNS4zOC03LjE3bC0zNS42MSwxM0E2NCw2NCwwLDAsMCw5MC41OSwxNS44OWExMiwxMiwwLDAsMC03LjE3LDE1LjM4bDEzLDM1LjYxYTY0LDY0LDAsMCwwLTgwLjQ5LDgyLjU1LDEyLDEyLDAsMCwwLDE1LjM4LDcuMTdsMzUuNjEtMTNhNjMuOTQsNjMuOTQsMCwwLDAsODIuNTUsODAuNDksMTIsMTIsMCwwLDAsNy4xNy0xNS4zOGwtMTIuOTUtMzUuNTlhNjMuNTMsNjMuNTMsMCwwLDAsMTUuNywzLjE2bDU2LjE3LDU2LjE3YTEyLDEyLDAsMCwwLDE3LTE3Wk0xMjkuMzgsMzkuNzhhNDAsNDAsMCwwLDEsNy40Myw2OEwxMTAuNywzNi4wNUEzOS44MSwzOS44MSwwLDAsMSwxMjkuMzgsMzkuNzhaTTM2LjA1LDEyOS4zMmE0MCw0MCwwLDAsMSw3MS43NS0yNi4xMVptNzQuNTksNzAuOTJhNDAsNDAsMCwwLDEtNy40My02OEwxMjkuMzIsMjA0QTM5LjgzLDM5LjgzLDAsMCwxLDExMC42NCwyMDAuMjRabTM2LjQ1LTUxLjUxYTM5Ljg2LDM5Ljg2LDAsMCwxLTE0Ljg3LTExLjkyTDIwNCwxMTAuN2E0MCw0MCwwLDAsMS01Ni44OCwzOFoiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjkuNjYsMjE4LjM0bC00OC40Mi00OC40MWMxLjEtLjMzLDIuMTktLjY4LDMuMjctMS4wN0E2MCw2MCwwLDAsMCwyMjAuMzcsOTJhOCw4LDAsMCwwLTEwLjI1LTQuNzhsLTQ0LjIsMTYuMDhjLjMyLS42Mi42NC0xLjI0LjkzLTEuODhBNjAsNjAsMCwwLDAsOTIsMTkuNjUsOCw4LDAsMCwwLDg3LjE4LDI5LjlsMTYuMDksNDQuMjJjLS42My0uMzItMS4yNS0uNjUtMS44OS0xYTYwLDYwLDAsMCwwLTgxLjczLDc0Ljg5LDgsOCwwLDAsMCwxMC4yNSw0Ljc4bDQ0LjItMTYuMDljLS4zMi42My0uNjQsMS4yNS0uOTMsMS44OWE2MCw2MCwwLDAsMCw3NC44OSw4MS43Myw4LDgsMCwwLDAsNC43OC0xMC4yNWwtMTYuMDgtNDQuMThjLjYyLjMxLDEuMjQuNjIsMS44OC45MWE1OS44Nyw1OS44NywwLDAsMCwyMi40OCw1LjU4bDU3LjIyLDU3LjIzYTgsOCwwLDAsMCwxMS4zMi0xMS4zMlpNMTA5LDIwMy44N2E0NCw0NCwwLDAsMS0zLjczLTc3LjgxbDI5LjYsODEuMzNBNDMuNiw0My42LDAsMCwxLDEwOSwyMDMuODdabTQzLjQtMTA5LjI1QTQzLjc3LDQzLjc3LDAsMCwxLDEzNC44LDExNEwxMDUuMTksMzIuNjNhNDQsNDQsMCwwLDEsNDcuMTYsNjJaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjQuODgsMTA5Ljc0LDI3LjE1LDE0NS4zM2E1Miw1MiwwLDEsMSw5Ny43My0zNS41OVptODgtMTUuMDctOTcuNzMsMzUuNTlhNTIsNTIsMCwxLDAsOTcuNzMtMzUuNTlaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjI5LjY2LDIxOC4zNGwtNDguNDItNDguNDFjMS4xLS4zMywyLjE5LS42OCwzLjI3LTEuMDdBNjAsNjAsMCwwLDAsMjIwLjM3LDkyYTgsOCwwLDAsMC0xMC4yNS00Ljc4bC00NC4yLDE2LjA4Yy4zMi0uNjIuNjQtMS4yNC45My0xLjg4QTYwLDYwLDAsMCwwLDkyLDE5LjY1LDgsOCwwLDAsMCw4Ny4xOCwyOS45bDE2LjA4LDQ0LjJjLS42Mi0uMzItMS4yNC0uNjQtMS44OC0uOTNhNjAsNjAsMCwwLDAtODEuNzMsNzQuODksOCw4LDAsMCwwLDEwLjI1LDQuNzhsNDQuMi0xNi4wOWMtLjMyLjYzLS42NCwxLjI1LS45MywxLjg5YTYwLDYwLDAsMCwwLDc0Ljg5LDgxLjczLDgsOCwwLDAsMCw0Ljc4LTEwLjI1bC0xNi4wOS00NC4yYy42My4zMiwxLjI1LjY0LDEuODkuOTNhNTkuODcsNTkuODcsMCwwLDAsMjIuNDgsNS41OGw1Ny4yMiw1Ny4yM2E4LDgsMCwwLDAsMTEuMzItMTEuMzJaTTEzMS4wNywzNi4xNUE0NCw0NCwwLDAsMSwxMzQuOCwxMTRMMTA1LjE5LDMyLjYzQTQzLjYzLDQzLjYzLDAsMCwxLDEzMS4wNywzNi4xNVpNMzIuNjMsMTM0LjgyQTQ0LDQ0LDAsMCwxLDExNCwxMDUuMjJaTTEwOSwyMDMuODdhNDQsNDQsMCwwLDEtMy43My03Ny44MWwyOS42LDgxLjMzQTQzLjYsNDMuNiwwLDAsMSwxMDksMjAzLjg3Wm01NS41Ni00Ny4zOGgtLjExYTQ0LjE0LDQ0LjE0LDAsMCwxLTM4LjM0LTIxLjY5bDgxLjMzLTI5LjYxYTQ0LjA2LDQ0LjA2LDAsMCwxLTQyLjg4LDUxLjNaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Pinwheel";
export { I as Pinwheel };
