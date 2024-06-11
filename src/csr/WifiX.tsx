/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/WifiX";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjkuNjYsOTguMzRhOCw4LDAsMCwxLTExLjMyLDExLjMyTDIwMCw5MS4zMWwtMTguMzQsMTguMzVhOCw4LDAsMCwxLTExLjMyLTExLjMyTDE4OC42OSw4MCwxNzAuMzQsNjEuNjZhOCw4LDAsMCwxLDExLjMyLTExLjMyTDIwMCw2OC42OWwxOC4zNC0xOC4zNWE4LDgsMCwwLDEsMTEuMzIsMTEuMzJMMjExLjMxLDgwWk0xMjgsMTkyYTEyLDEyLDAsMSwwLDEyLDEyQTEyLDEyLDAsMCwwLDEyOCwxOTJabTQ0LjcxLTMzLjQ3YTc2LjA1LDc2LjA1LDAsMCwwLTg5LjQyLDAsOCw4LDAsMCwwLDkuNDIsMTIuOTQsNjAsNjAsMCwwLDEsNzAuNTgsMCw4LDgsMCwxLDAsOS40Mi0xMi45NFpNMTM1LjYyLDY0LjE4YTgsOCwwLDEsMCwuNzYtMTZjLTIuNzgtLjEzLTUuNi0uMi04LjM4LS4yQTE3Mi4zNSwxNzIuMzUsMCwwLDAsMTguOTIsODcsOCw4LDAsMSwwLDI5LjA4LDk5LjM3LDE1Ni4yNSwxNTYuMjUsMCwwLDEsMTI4LDY0QzEzMC41Myw2NCwxMzMuMDksNjQuMDYsMTM1LjYyLDY0LjE4Wm0tLjE2LDQ4LjA3YTgsOCwwLDEsMCwxLjA4LTE2Yy0yLjgzLS4xOS01LjctLjI5LTguNTQtLjI5YTEyMi43NCwxMjIuNzQsMCwwLDAtNzcsMjYuNzdBOCw4LDAsMCwwLDU2LDEzN2E3LjkzLDcuOTMsMCwwLDAsNS0xLjczQTEwNi44NywxMDYuODcsMCwwLDEsMTI4LDExMkMxMzAuNDgsMTEyLDEzMywxMTIuMDgsMTM1LjQ2LDExMi4yNVoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYsMjA0YTgsOCwwLDEsMS04LThBOCw4LDAsMCwxLDEzNiwyMDRaTTIwNS42Niw4MGwyMS4xNy0yMS4xN2E0LDQsMCwxLDAtNS42Ni01LjY2TDIwMCw3NC4zNCwxNzguODMsNTMuMTdhNCw0LDAsMCwwLTUuNjYsNS42NkwxOTQuMzQsODBsLTIxLjE3LDIxLjE3YTQsNCwwLDAsMCw1LjY2LDUuNjZMMjAwLDg1LjY2bDIxLjE3LDIxLjE3YTQsNCwwLDEsMCw1LjY2LTUuNjZabS0zNS4zMSw4MS43N2E3Miw3MiwwLDAsMC04NC43MSwwLDQsNCwwLDAsMCw0LjcxLDYuNDYsNjQuMDUsNjQuMDUsMCwwLDEsNzUuMjksMCw0LDQsMCwxLDAsNC43MS02LjQ2Wk0xMzUuODEsNjAuMTlhNCw0LDAsMSwwLC4zOC04Yy0yLjcxLS4xMy01LjQ3LS4yLTguMTktLjJBMTY4LjMzLDE2OC4zMywwLDAsMCwyMS40Niw5MC4wOWE0LDQsMCwxLDAsNS4wOCw2LjE5QTE2MC4yMiwxNjAuMjIsMCwwLDEsMTI4LDYwQzEzMC41OSw2MCwxMzMuMjIsNjAuMDYsMTM1LjgxLDYwLjE5Wm0tLjA4LDQ4LjA3YTQsNCwwLDEsMCwuNTQtOGMtMi43NC0uMTktNS41Mi0uMjgtOC4yNy0uMjhhMTE4LjcyLDExOC43MiwwLDAsMC03NC40OCwyNS45MSw0LDQsMCwwLDAsNSw2LjI3QTExMC44NCwxMTAuODQsMCwwLDEsMTI4LDEwOEMxMzAuNTcsMTA4LDEzMy4xNywxMDguMDksMTM1LjczLDEwOC4yNloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzgsMjA0YTEwLDEwLDAsMSwxLTEwLTEwQTEwLDEwLDAsMCwxLDEzOCwyMDRaTTIwOC40OCw4MGwxOS43Ni0xOS43NmE2LDYsMCwwLDAtOC40OC04LjQ4TDIwMCw3MS41MiwxODAuMjQsNTEuNzZhNiw2LDAsMCwwLTguNDgsOC40OEwxOTEuNTIsODAsMTcxLjc2LDk5Ljc2YTYsNiwwLDEsMCw4LjQ4LDguNDhMMjAwLDg4LjQ4bDE5Ljc2LDE5Ljc2YTYsNiwwLDAsMCw4LjQ4LTguNDhabS0zNi45NSw4MC4xNWE3NCw3NCwwLDAsMC04Ny4wNiwwLDYsNiwwLDAsMCw3LjA2LDkuNyw2Miw2MiwwLDAsMSw3Mi45NCwwLDYsNiwwLDAsMCw4LjM4LTEuMzJBNiw2LDAsMCwwLDE3MS41MywxNjAuMTVabS0zNS44Mi05OGE2LDYsMCwwLDAsLjU4LTEyYy0yLjc1LS4xMy01LjU0LS4yLTguMjktLjJBMTcwLjMyLDE3MC4zMiwwLDAsMCwyMC4xOSw4OC41NWE2LDYsMCwxLDAsNy42Miw5LjI3QTE1OC4yNiwxNTguMjYsMCwwLDEsMTI4LDYyQzEzMC41Niw2MiwxMzMuMTYsNjIuMDYsMTM1LjcxLDYyLjE4Wm0tLjEyLDQ4LjA4YTYsNiwwLDEsMCwuODItMTJjLTIuNzktLjE5LTUuNjItLjI5LTguNDEtLjI5YTEyMC43NSwxMjAuNzUsMCwwLDAtNzUuNzMsMjYuMzQsNiw2LDAsMCwwLDcuNDYsOS40MUExMDguNzgsMTA4Ljc4LDAsMCwxLDEyOCwxMTBDMTMwLjUyLDExMCwxMzMuMDgsMTEwLjA5LDEzNS41OSwxMTAuMjZaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDQsMjA0YTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDE0NCwyMDRaTTIxNyw4MGwxNS41Mi0xNS41MWExMiwxMiwwLDAsMC0xNy0xN0wyMDAsNjMsMTg0LjQ5LDQ3LjUxYTEyLDEyLDAsMCwwLTE3LDE3TDE4Myw4MCwxNjcuNTEsOTUuNTFhMTIsMTIsMCwwLDAsMTcsMTdMMjAwLDk3bDE1LjUxLDE1LjUyYTEyLDEyLDAsMCwwLDE3LTE3Wm0tNDEuOSw3NS4zYTgwLDgwLDAsMCwwLTk0LjEzLDAsMTIsMTIsMCwxLDAsMTQuMTMsMTkuNCw1Niw1NiwwLDAsMSw2NS44NywwLDEyLDEyLDAsMCwwLDE0LjEzLTE5LjRaTTE0MCw1NmExMiwxMiwwLDAsMC0xMi0xMkExNzYuMjcsMTc2LjI3LDAsMCwwLDE2LjM5LDgzLjkxYTEyLDEyLDAsMSwwLDE1LjIzLDE4LjU1QTE1Mi4yNCwxNTIuMjQsMCwwLDEsMTI4LDY4LDEyLDEyLDAsMCwwLDE0MCw1NlptMCw0OGExMiwxMiwwLDAsMC0xMi0xMiwxMjYuNjYsMTI2LjY2LDAsMCwwLTc5LjQ1LDI3LjY0LDEyLDEyLDAsMCwwLDE0LjksMTguODFBMTAyLjg5LDEwMi44OSwwLDAsMSwxMjgsMTE2LDEyLDEyLDAsMCwwLDE0MCwxMDRaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjkuNjYsOTguMzRhOCw4LDAsMCwxLTExLjMyLDExLjMyTDIwMCw5MS4zMWwtMTguMzQsMTguMzVhOCw4LDAsMCwxLTExLjMyLTExLjMyTDE4OC42OSw4MCwxNzAuMzQsNjEuNjZhOCw4LDAsMCwxLDExLjMyLTExLjMyTDIwMCw2OC42OWwxOC4zNC0xOC4zNWE4LDgsMCwwLDEsMTEuMzIsMTEuMzJMMjExLjMxLDgwWk0yMDYuODUsMTMxYTMyLjc1LDMyLjc1LDAsMCwxLTQuMTUtMy4xNCw0LDQsMCwwLDAtNS4zNywwLDMyLDMyLDAsMCwxLTQ1LjE4LTQ1LjE4LDQsNCwwLDAsMCwwLTUuMzRBMzIsMzIsMCwwLDEsMTQ5LDM4LjkxYTQsNCwwLDAsMC0zLjExLTYuMDhRMTM3LDMyLDEyOCwzMkExODYuNjcsMTg2LjY3LDAsMCwwLDE0LjI4LDcwLjEsMTUuOTMsMTUuOTMsMCwwLDAsOC4xMSw4MC45MSwxNS42NSwxNS42NSwwLDAsMCwxMS42NSw5Mi44bDEwNCwxMjUuNDNBMTUuOTMsMTUuOTMsMCwwLDAsMTI4LDIyNGgwYTE1LjkzLDE1LjkzLDAsMCwwLDEyLjMxLTUuNzdsNjcuNDUtODEuMzFBNCw0LDAsMCwwLDIwNi44NSwxMzFaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQuMzksMTA0LjM0LDEzNC4xNSwyMTMuMTJhOCw4LDAsMCwxLTEyLjMsMEwxNy44LDg3LjY5YTcuNzksNy43OSwwLDAsMSwxLjMxLTExLjIxQTE3OS41OCwxNzkuNTgsMCwwLDEsMTI4LDQwYTE4MS44MiwxODEuODIsMCwwLDEsMzMuMDYsMyw3Ljk0LDcuOTQsMCwwLDEsNC4xNywyLjIxTDIyNCwxMDRaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjI5LjY2LDk4LjM0YTgsOCwwLDAsMS0xMS4zMiwxMS4zMkwyMDAsOTEuMzFsLTE4LjM0LDE4LjM1YTgsOCwwLDAsMS0xMS4zMi0xMS4zMkwxODguNjksODAsMTcwLjM0LDYxLjY2YTgsOCwwLDAsMSwxMS4zMi0xMS4zMkwyMDAsNjguNjlsMTguMzQtMTguMzVhOCw4LDAsMCwxLDExLjMyLDExLjMyTDIxMS4zMSw4MFptLTMzLjA2LDM5LjVhOCw4LDAsMCwwLTExLjI3LDFMMTI4LDIwOCwyNC4wOSw4Mi43NEExNzAuNzYsMTcwLjc2LDAsMCwxLDEyOCw0OGMyLjU0LDAsNS4xMS4wNiw3LjY1LjE3YTgsOCwwLDAsMCwuNy0xNmMtMi43Ny0uMTItNS41OC0uMTgtOC4zNS0uMThBMTg2LjY3LDE4Ni42NywwLDAsMCwxNC4yOCw3MC4xLDE1LjkzLDE1LjkzLDAsMCwwLDguMTEsODAuOTEsMTUuNjUsMTUuNjUsMCwwLDAsMTEuNjUsOTIuOGwxMDQsMTI1LjQzQTE1LjkzLDE1LjkzLDAsMCwwLDEyOCwyMjRoMGExNS45MywxNS45MywwLDAsMCwxMi4zMS01Ljc3bDU3LjM0LTY5LjEyQTgsOCwwLDAsMCwxOTYuNiwxMzcuODRaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "WifiX";
export { I as WifiX };
