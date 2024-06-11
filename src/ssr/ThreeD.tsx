/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/ThreeD";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04OCwxNDhhMTYsMTYsMCwwLDAtMTYtMTYsMTIsMTIsMCwwLDEtOS44My0xOC44OEw3Nyw5Mkg1MmExMiwxMiwwLDAsMSwwLTI0aDQ4YTEyLDEyLDAsMCwxLDkuODMsMTguODhsLTE4LjM0LDI2LjJBNDAsNDAsMCwxLDEsNDMuNDMsMTc2LDEyLDEyLDAsMSwxLDYwLjU3LDE1OS4yLDE2LDE2LDAsMCwwLDg4LDE0OFptNzYtODBhNjAsNjAsMCwwLDEsMCwxMjBIMTQwYTEyLDEyLDAsMCwxLTEyLTEyVjgwYTEyLDEyLDAsMCwxLDEyLTEyWm0wLDI0SDE1MnY3MmgxMmEzNiwzNiwwLDAsMCwwLTcyWk0zMiw1NkgyMjRhMTIsMTIsMCwwLDAsMC0yNEgzMmExMiwxMiwwLDAsMCwwLDI0Wk0yMjQsMjAwSDMyYTEyLDEyLDAsMCwwLDAsMjRIMjI0YTEyLDEyLDAsMCwwLDAtMjRaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDhWMjA4SDMyVjQ4WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTk2LDE0OGEyMCwyMCwwLDAsMC0yMC0yMCw4LDgsMCwwLDEtNi41NS0xMi41OUw4OC42Myw4OEg1NmE4LDgsMCwwLDEsMC0xNmg0OGE4LDgsMCwwLDEsNi41NSwxMi41OWwtMjEsMzBBMzYsMzYsMCwwLDEsNzYsMTg0YTM1LjcxLDM1LjcxLDAsMCwxLTI1LjcxLTEwLjgxQTgsOCwwLDEsMSw2MS43MSwxNjIsMjAsMjAsMCwwLDAsOTYsMTQ4Wm02NC03NmE1Niw1NiwwLDAsMSwwLDExMkgxMzZhOCw4LDAsMCwxLTgtOFY4MGE4LDgsMCwwLDEsOC04Wm0wLDE2SDE0NHY4MGgxNmE0MCw0MCwwLDAsMCwwLTgwWk0zMiw1NkgyMjRhOCw4LDAsMCwwLDAtMTZIMzJhOCw4LDAsMCwwLDAsMTZaTTIyNCwyMDBIMzJhOCw4LDAsMCwwLDAsMTZIMjI0YTgsOCwwLDAsMCwwLTE2WiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMTI4YTMyLDMyLDAsMCwxLTMyLDMyaC04Vjk2aDhBMzIsMzIsMCwwLDEsMTg0LDEyOFptNDgtNzJWMjAwYTE2LDE2LDAsMCwxLTE2LDE2SDQwYTE2LDE2LDAsMCwxLTE2LTE2VjU2QTE2LDE2LDAsMCwxLDQwLDQwSDIxNkExNiwxNiwwLDAsMSwyMzIsNTZaTTExMiwxNDRhMzIsMzIsMCwwLDAtMTguMzEtMjguOTJMMTEwLjQsOTIuOEE4LDgsMCwwLDAsMTA0LDgwSDY0YTgsOCwwLDAsMCwwLDE2SDg4TDczLjYsMTE1LjJBOCw4LDAsMCwwLDgwLDEyOGExNiwxNiwwLDEsMS0xMC42NiwyNy45Myw4LDgsMCwxLDAtMTAuNjgsMTEuOTJBMzIsMzIsMCwwLDAsMTEyLDE0NFptODgtMTZhNDguMDUsNDguMDUsMCwwLDAtNDgtNDhIMTM2YTgsOCwwLDAsMC04LDh2ODBhOCw4LDAsMCwwLDgsOGgxNkE0OC4wNSw0OC4wNSwwLDAsMCwyMDAsMTI4WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05OCwxNDhhMjIsMjIsMCwwLDAtMjItMjIsNiw2LDAsMCwxLTQuOTItOS40NEw5Mi40OCw4Nkg1NmE2LDYsMCwwLDEsMC0xMmg0OGE2LDYsMCwwLDEsNC45Miw5LjQ0TDg2LjM5LDExNS42MmEzNCwzNCwwLDEsMS0zNC42OCw1Ni4xNyw2LDYsMCwwLDEsOC41OC04LjM5QTIyLDIyLDAsMCwwLDk4LDE0OFptNjItNzRhNTQsNTQsMCwwLDEsMCwxMDhIMTM2YTYsNiwwLDAsMS02LTZWODBhNiw2LDAsMCwxLDYtNlptMCwxMkgxNDJ2ODRoMThhNDIsNDIsMCwwLDAsMC04NFpNMzIsNTRIMjI0YTYsNiwwLDAsMCwwLTEySDMyYTYsNiwwLDAsMCwwLDEyWk0yMjQsMjAySDMyYTYsNiwwLDAsMCwwLDEySDIyNGE2LDYsMCwwLDAsMC0xMloiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05NiwxNDhhMjAsMjAsMCwwLDAtMjAtMjAsOCw4LDAsMCwxLTYuNTUtMTIuNTlMODguNjMsODhINTZhOCw4LDAsMCwxLDAtMTZoNDhhOCw4LDAsMCwxLDYuNTUsMTIuNTlsLTIxLDMwQTM2LDM2LDAsMCwxLDc2LDE4NGEzNS43MSwzNS43MSwwLDAsMS0yNS43MS0xMC44MUE4LDgsMCwxLDEsNjEuNzEsMTYyLDIwLDIwLDAsMCwwLDk2LDE0OFptNjQtNzZhNTYsNTYsMCwwLDEsMCwxMTJIMTM2YTgsOCwwLDAsMS04LThWODBhOCw4LDAsMCwxLDgtOFptMCwxNkgxNDR2ODBoMTZhNDAsNDAsMCwwLDAsMC04MFpNMzIsNTZIMjI0YTgsOCwwLDAsMCwwLTE2SDMyYTgsOCwwLDAsMCwwLDE2Wk0yMjQsMjAwSDMyYTgsOCwwLDAsMCwwLDE2SDIyNGE4LDgsMCwwLDAsMC0xNloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDAsMTQ4YTI0LDI0LDAsMCwwLTI0LTI0LDQsNCwwLDAsMS0zLjI4LTYuMjlMOTYuMzIsODRINTZhNCw0LDAsMCwxLDAtOGg0OGE0LDQsMCwwLDEsMy4yOCw2LjI5TDgzLjEyLDExNi44YTMyLDMyLDAsMSwxLTMwLDUzLjYsNCw0LDAsMSwxLDUuNzItNS42QTI0LDI0LDAsMCwwLDEwMCwxNDhabTYwLTcyYTUyLDUyLDAsMCwxLDAsMTA0SDEzNmE0LDQsMCwwLDEtNC00VjgwYTQsNCwwLDAsMSw0LTRabTAsOEgxNDB2ODhoMjBhNDQsNDQsMCwwLDAsMC04OFpNMzIsNTJIMjI0YTQsNCwwLDAsMCwwLThIMzJhNCw0LDAsMCwwLDAsOFpNMjI0LDIwNEgzMmE0LDQsMCwwLDAsMCw4SDIyNGE0LDQsMCwwLDAsMC04WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ThreeD";
export { I as ThreeD };
