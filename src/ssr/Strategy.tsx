/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Strategy";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04MCwxNDRhNDAsNDAsMCwxLDAsNDAsNDBBNDAsNDAsMCwwLDAsODAsMTQ0Wm0wLDU2YTE2LDE2LDAsMSwxLDE2LTE2QTE2LDE2LDAsMCwxLDgwLDIwMFpNNDgsMTI4YTEyLDEyLDAsMCwxLTguNDktMjAuNDlMNTEsOTYsMzkuNTEsODQuNDlhMTIsMTIsMCwwLDEsMTctMTdMNjgsNzksNzkuNTEsNjcuNTFhMTIsMTIsMCwwLDEsMTcsMTdMODUsOTZsMTEuNTIsMTEuNTFhMTIsMTIsMCwwLDEtMTcsMTdMNjgsMTEzLDU2LjQ5LDEyNC40OUExMiwxMiwwLDAsMSw0OCwxMjhabTE4NC40OSw3NS41MWExMiwxMiwwLDAsMS0xNywxN0wyMDQsMjA5bC0xMS41MSwxMS41MmExMiwxMiwwLDAsMS0xNy0xN0wxODcsMTkybC0xMS41Mi0xMS41MWExMiwxMiwwLDAsMSwxNy0xN0wyMDQsMTc1bDExLjUxLTExLjUyYTEyLDEyLDAsMCwxLDE3LDE3TDIyMSwxOTJabS00My40LTkyLjYyYy01LjIxLDIzLTIzLjMzLDQzLjUzLTQ1LjA5LDUxLjIyYTEyLDEyLDAsMSwxLTgtMjIuNjNjMTQuMDctNSwyNi4yNy0xOC45MSwyOS42Ny0zMy45LDIuMzctMTAuNDYuNC0yMC44NC01LjY4LTMwLjU0djlhMTIsMTIsMCwwLDEtMjQsMFY0NGExMiwxMiwwLDAsMSwxMi0xMmg0MGExMiwxMiwwLDAsMSwwLDI0SDE3NkMxODguNzcsNzIuNjEsMTkzLjQyLDkxLjc2LDE4OS4wOSwxMTAuODlaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDQsMTg4YTI4LDI4LDAsMSwxLTI4LTI4QTI4LDI4LDAsMCwxLDEwNCwxODhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNNzYsMTUyYTM2LDM2LDAsMSwwLDM2LDM2QTM2LDM2LDAsMCwwLDc2LDE1MlptMCw1NmEyMCwyMCwwLDEsMSwyMC0yMEEyMCwyMCwwLDAsMSw3NiwyMDhaTTQyLjM0LDEwNi4zNCw1Ni42OSw5Miw0Mi4zNCw3Ny42NkE4LDgsMCwwLDEsNTMuNjYsNjYuMzRMNjgsODAuNjksODIuMzQsNjYuMzRBOCw4LDAsMCwxLDkzLjY2LDc3LjY2TDc5LjMxLDkybDE0LjM1LDE0LjM0YTgsOCwwLDAsMS0xMS4zMiwxMS4zMkw2OCwxMDMuMzEsNTMuNjYsMTE3LjY2YTgsOCwwLDAsMS0xMS4zMi0xMS4zMlptMTg3LjMyLDk2YTgsOCwwLDAsMS0xMS4zMiwxMS4zMkwyMDQsMTk5LjMxbC0xNC4zNCwxNC4zNWE4LDgsMCwwLDEtMTEuMzItMTEuMzJMMTkyLjY5LDE4OGwtMTQuMzUtMTQuMzRhOCw4LDAsMCwxLDExLjMyLTExLjMyTDIwNCwxNzYuNjlsMTQuMzQtMTQuMzVhOCw4LDAsMCwxLDExLjMyLDExLjMyTDIxNS4zMSwxODhabS00NS4xOS04OS41MWMtNi4xOCwyMi4zMy0yNS4zMiw0MS42My00Ni41Myw0Ni45M0E4LjEzLDguMTMsMCwwLDEsMTM2LDE2MGE4LDgsMCwwLDEtMS45My0xNS43NmMxNS42My0zLjkxLDMwLjM1LTE4LjkxLDM1LTM1LjY4LDMuMTktMTEuNSwzLjIyLTI5LTE0LjcxLTQ2LjlMMTUyLDU5LjMxVjgwYTgsOCwwLDAsMS0xNiwwVjQwYTgsOCwwLDAsMSw4LThoNDBhOCw4LDAsMCwxLDAsMTZIMTYzLjMxbDIuMzUsMi4zNEMxODMuOSw2OC41OSwxOTAuNTgsOTAuNzgsMTg0LjQ3LDExMi44M1oiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDgsMTg4YTMyLDMyLDAsMSwxLTMyLTMyQTMyLDMyLDAsMCwxLDEwOCwxODhaTTUzLjY2LDExNy42Niw2OCwxMDMuMzFsMTQuMzQsMTQuMzVhOCw4LDAsMCwwLDExLjMyLTExLjMyTDc5LjMxLDkyLDkzLjY2LDc3LjY2QTgsOCwwLDAsMCw4Mi4zNCw2Ni4zNEw2OCw4MC42OSw1My42Niw2Ni4zNEE4LDgsMCwwLDAsNDIuMzQsNzcuNjZMNTYuNjksOTIsNDIuMzQsMTA2LjM0YTgsOCwwLDAsMCwxMS4zMiwxMS4zMlpNMjE1LjMxLDE4OGwxNC4zNS0xNC4zNGE4LDgsMCwwLDAtMTEuMzItMTEuMzJMMjA0LDE3Ni42OWwtMTQuMzQtMTQuMzVhOCw4LDAsMCwwLTExLjMyLDExLjMyTDE5Mi42OSwxODhsLTE0LjM1LDE0LjM0YTgsOCwwLDAsMCwxMS4zMiwxMS4zMkwyMDQsMTk5LjMxbDE0LjM0LDE0LjM1YTgsOCwwLDAsMCwxMS4zMi0xMS4zMlpNMTY1LjY2LDUwLjM0LDE2My4zMSw0OEgxODRhOCw4LDAsMCwwLDAtMTZIMTQ0YTgsOCwwLDAsMC04LDhWODBhOCw4LDAsMCwwLDE2LDBWNTkuMzFsMi4zNCwyLjM1YzE3LjkzLDE3LjkzLDE3LjksMzUuNCwxNC43MSw0Ni45LTQuNjQsMTYuNzctMTkuMzYsMzEuNzctMzUsMzUuNjhBOCw4LDAsMCwwLDEzNiwxNjBhOC4xMyw4LjEzLDAsMCwwLDEuOTUtLjI0YzIxLjIxLTUuMyw0MC4zNS0yNC42LDQ2LjUzLTQ2LjkzQzE5MC41OCw5MC43OCwxODMuOSw2OC41OSwxNjUuNjYsNTAuMzRaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03NiwxNTRhMzQsMzQsMCwxLDAsMzQsMzRBMzQsMzQsMCwwLDAsNzYsMTU0Wm0wLDU2YTIyLDIyLDAsMSwxLDIyLTIyQTIyLDIyLDAsMCwxLDc2LDIxMFpNNDMuNzYsMTA3Ljc2LDU5LjUyLDkyLDQzLjc2LDc2LjI0YTYsNiwwLDAsMSw4LjQ4LTguNDhMNjgsODMuNTIsODMuNzYsNjcuNzZhNiw2LDAsMCwxLDguNDgsOC40OEw3Ni40OCw5MmwxNS43NiwxNS43NmE2LDYsMCwxLDEtOC40OCw4LjQ4TDY4LDEwMC40OCw1Mi4yNCwxMTYuMjRhNiw2LDAsMCwxLTguNDgtOC40OFptMTg0LjQ4LDk2YTYsNiwwLDEsMS04LjQ4LDguNDhMMjA0LDE5Ni40OGwtMTUuNzYsMTUuNzZhNiw2LDAsMCwxLTguNDgtOC40OEwxOTUuNTIsMTg4bC0xNS43Ni0xNS43NmE2LDYsMCwwLDEsOC40OC04LjQ4TDIwNCwxNzkuNTJsMTUuNzYtMTUuNzZhNiw2LDAsMCwxLDguNDgsOC40OEwyMTIuNDgsMTg4Wk0xODIuNTUsMTEyLjNjLTYsMjEuNjYtMjQuNTUsNDAuMzgtNDUuMDksNDUuNTJBNi4xNCw2LjE0LDAsMCwxLDEzNiwxNThhNiw2LDAsMCwxLTEuNDYtMTEuODJjMTYuMjktNC4wNywzMS42Mi0xOS42NywzNi40NC0zNy4wOSwzLjMzLTEyLDMuMzktMzAuMjQtMTUuMjItNDguODVMMTUwLDU0LjQ4VjgwYTYsNiwwLDAsMS0xMiwwVjQwYTYsNiwwLDAsMSw2LTZoNDBhNiw2LDAsMCwxLDAsMTJIMTU4LjQ4bDUuNzYsNS43NkMxODIsNjkuNDcsMTg4LjQ1LDkxLDE4Mi41NSwxMTIuM1oiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03NiwxNTJhMzYsMzYsMCwxLDAsMzYsMzZBMzYsMzYsMCwwLDAsNzYsMTUyWm0wLDU2YTIwLDIwLDAsMSwxLDIwLTIwQTIwLDIwLDAsMCwxLDc2LDIwOFpNNDIuMzQsMTA2LjM0LDU2LjY5LDkyLDQyLjM0LDc3LjY2QTgsOCwwLDAsMSw1My42Niw2Ni4zNEw2OCw4MC42OSw4Mi4zNCw2Ni4zNEE4LDgsMCwwLDEsOTMuNjYsNzcuNjZMNzkuMzEsOTJsMTQuMzUsMTQuMzRhOCw4LDAsMCwxLTExLjMyLDExLjMyTDY4LDEwMy4zMSw1My42NiwxMTcuNjZhOCw4LDAsMCwxLTExLjMyLTExLjMyWm0xODcuMzIsOTZhOCw4LDAsMCwxLTExLjMyLDExLjMyTDIwNCwxOTkuMzFsLTE0LjM0LDE0LjM1YTgsOCwwLDAsMS0xMS4zMi0xMS4zMkwxOTIuNjksMTg4bC0xNC4zNS0xNC4zNGE4LDgsMCwwLDEsMTEuMzItMTEuMzJMMjA0LDE3Ni42OWwxNC4zNC0xNC4zNWE4LDgsMCwwLDEsMTEuMzIsMTEuMzJMMjE1LjMxLDE4OFptLTQ1LjE5LTg5LjUxYy02LjE4LDIyLjMzLTI1LjMyLDQxLjYzLTQ2LjUzLDQ2LjkzQTguMTMsOC4xMywwLDAsMSwxMzYsMTYwYTgsOCwwLDAsMS0xLjkzLTE1Ljc2YzE1LjYzLTMuOTEsMzAuMzUtMTguOTEsMzUtMzUuNjgsMy4xOS0xMS41LDMuMjItMjktMTQuNzEtNDYuOUwxNTIsNTkuMzFWODBhOCw4LDAsMCwxLTE2LDBWNDBhOCw4LDAsMCwxLDgtOGg0MGE4LDgsMCwwLDEsMCwxNkgxNjMuMzFsMi4zNSwyLjM0QzE4My45LDY4LjU5LDE5MC41OCw5MC43OCwxODQuNDcsMTEyLjgzWiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03NiwxNTZhMzIsMzIsMCwxLDAsMzIsMzJBMzIsMzIsMCwwLDAsNzYsMTU2Wm0wLDU2YTI0LDI0LDAsMSwxLDI0LTI0QTI0LDI0LDAsMCwxLDc2LDIxMlpNNDUuMTcsMTA5LjE3LDYyLjM0LDkyLDQ1LjE3LDc0LjgzYTQsNCwwLDAsMSw1LjY2LTUuNjZMNjgsODYuMzQsODUuMTcsNjkuMTdhNCw0LDAsMCwxLDUuNjYsNS42Nkw3My42Niw5MmwxNy4xNywxNy4xN2E0LDQsMCwwLDEtNS42Niw1LjY2TDY4LDk3LjY2LDUwLjgzLDExNC44M2E0LDQsMCwwLDEtNS42Ni01LjY2Wm0xODEuNjYsOTZhNCw0LDAsMCwxLTUuNjYsNS42NkwyMDQsMTkzLjY2bC0xNy4xNywxNy4xN2E0LDQsMCwwLDEtNS42Ni01LjY2TDE5OC4zNCwxODhsLTE3LjE3LTE3LjE3YTQsNCwwLDAsMSw1LjY2LTUuNjZMMjA0LDE4Mi4zNGwxNy4xNy0xNy4xN2E0LDQsMCwwLDEsNS42Niw1LjY2TDIwOS42NiwxODhabS00Ni4yMS05My40MWMtNS44MiwyMS0yMy43NywzOS4xNS00My42NSw0NC4xMmE0LjA5LDQuMDksMCwwLDEtMSwuMTIsNCw0LDAsMCwxLTEtNy44OGMxNi45NC00LjI0LDMyLjg3LTIwLjQyLDM3Ljg4LTM4LjQ5LDMuNDctMTIuNTMsMy41NS0zMS41MS0xNS43NC01MC44TDE0OCw0OS42NlY4MGE0LDQsMCwwLDEtOCwwVjQwYTQsNCwwLDAsMSw0LTRoNDBhNCw0LDAsMCwxLDAsOEgxNTMuNjZsOS4xNyw5LjE3QzE4MCw3MC4zNSwxODYuMzMsOTEuMTYsMTgwLjYyLDExMS43NloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Strategy";
export { I as Strategy };
