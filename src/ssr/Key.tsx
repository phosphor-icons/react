/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Key";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTYsNzZhMTYsMTYsMCwxLDEtMTYtMTZBMTYsMTYsMCwwLDEsMTk2LDc2Wm00OCwyMi43NEE4NC4zLDg0LjMsMCwwLDEsMTYwLjExLDE4MEgxNjBhODMuNTIsODMuNTIsMCwwLDEtMjMuNjUtMy4zOGwtNy44Niw3Ljg3QTEyLDEyLDAsMCwxLDEyMCwxODhIMTA4djEyYTEyLDEyLDAsMCwxLTEyLDEySDg0djEyYTEyLDEyLDAsMCwxLTEyLDEySDQwYTIwLDIwLDAsMCwxLTIwLTIwVjE4Ny4zMWExOS44NiwxOS44NiwwLDAsMSw1Ljg2LTE0LjE0bDUzLjUyLTUzLjUyQTg0LDg0LDAsMSwxLDI0NCw5OC43NFpNMjAyLjQzLDUzLjU3QTU5LjQ4LDU5LjQ4LDAsMCwwLDE1OCwzNmMtMzIsMS01OCwyNy44OS01OCw1OS44OWE1OS42OSw1OS42OSwwLDAsMCw0LjIsMjIuMTksMTIsMTIsMCwwLDEtMi41NSwxMy4yMUw0NCwxODl2MjNINjBWMjAwYTEyLDEyLDAsMCwxLDEyLTEySDg0VjE3NmExMiwxMiwwLDAsMSwxMi0xMmgxOWw5LjY1LTkuNjVhMTIsMTIsMCwwLDEsMTMuMjItMi41NUE1OS41OCw1OS41OCwwLDAsMCwxNjAsMTU2aC4wOGMzMiwwLDU4Ljg3LTI2LjA3LDU5Ljg5LTU4QTU5LjU1LDU5LjU1LDAsMCwwLDIwMi40Myw1My41N1oiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsOTguMzZDMjMwLjczLDEzNi45MiwxOTguNjcsMTY4LDE2MC4wOSwxNjhhNzEuNjgsNzEuNjgsMCwwLDEtMjYuOTItNS4xN2gwTDEyMCwxNzZIOTZ2MjRINzJ2MjRINDBhOCw4LDAsMCwxLTgtOFYxODcuMzFhOCw4LDAsMCwxLDIuMzQtNS42NWw1OC44My01OC44M2gwQTcxLjY4LDcxLjY4LDAsMCwxLDg4LDk1LjkxYzAtMzguNTgsMzEuMDgtNzAuNjQsNjkuNjQtNzEuODdBNzIsNzIsMCwwLDEsMjMyLDk4LjM2WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIxNi41NywzOS40M0E4MCw4MCwwLDAsMCw4My45MSwxMjAuNzhMMjguNjksMTc2QTE1Ljg2LDE1Ljg2LDAsMCwwLDI0LDE4Ny4zMVYyMTZhMTYsMTYsMCwwLDAsMTYsMTZINzJhOCw4LDAsMCwwLDgtOFYyMDhIOTZhOCw4LDAsMCwwLDgtOFYxODRoMTZhOCw4LDAsMCwwLDUuNjYtMi4zNGw5LjU2LTkuNTdBNzkuNzMsNzkuNzMsMCwwLDAsMTYwLDE3NmguMUE4MCw4MCwwLDAsMCwyMTYuNTcsMzkuNDNaTTIyNCw5OC4xYy0xLjA5LDM0LjA5LTI5Ljc1LDYxLjg2LTYzLjg5LDYxLjlIMTYwYTYzLjcsNjMuNywwLDAsMS0yMy42NS00LjUxLDgsOCwwLDAsMC04Ljg0LDEuNjhMMTE2LjY5LDE2OEg5NmE4LDgsMCwwLDAtOCw4djE2SDcyYTgsOCwwLDAsMC04LDh2MTZINDBWMTg3LjMxbDU4LjgzLTU4LjgyYTgsOCwwLDAsMCwxLjY4LTguODRBNjMuNzIsNjMuNzIsMCwwLDEsOTYsOTUuOTJjMC0zNC4xNCwyNy44MS02Mi44LDYxLjktNjMuODlBNjQsNjQsMCwwLDEsMjI0LDk4LjFaTTE5Miw3NmExMiwxMiwwLDEsMS0xMi0xMkExMiwxMiwwLDAsMSwxOTIsNzZaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYuNTcsMzkuNDNBODAsODAsMCwwLDAsODMuOTEsMTIwLjc4TDI4LjY5LDE3NkExNS44NiwxNS44NiwwLDAsMCwyNCwxODcuMzFWMjE2YTE2LDE2LDAsMCwwLDE2LDE2SDcyYTgsOCwwLDAsMCw4LThWMjA4SDk2YTgsOCwwLDAsMCw4LThWMTg0aDE2YTgsOCwwLDAsMCw1LjY2LTIuMzRsOS41Ni05LjU3QTc5LjczLDc5LjczLDAsMCwwLDE2MCwxNzZoLjFBODAsODAsMCwwLDAsMjE2LjU3LDM5LjQzWk0xODAsOTJhMTYsMTYsMCwxLDEsMTYtMTZBMTYsMTYsMCwwLDEsMTgwLDkyWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTUuMTUsNDAuODVBNzgsNzgsMCwwLDAsODYuMiwxMjEuMzFsLTU2LjEsNTYuMWExMy45NCwxMy45NCwwLDAsMC00LjEsOS45VjIxNmExNCwxNCwwLDAsMCwxNCwxNEg3MmE2LDYsMCwwLDAsNi02VjIwNkg5NmE2LDYsMCwwLDAsNi02VjE4MmgxOGE2LDYsMCwwLDAsNC4yNC0xLjc2bDEwLjQ1LTEwLjQ0QTc3LjU5LDc3LjU5LDAsMCwwLDE2MCwxNzRoLjFBNzgsNzgsMCwwLDAsMjE1LjE1LDQwLjg1Wk0yMjYsOTguMTZjLTEuMTIsMzUuMTYtMzAuNjcsNjMuOC02NS44OCw2My44NGE2NS45Myw2NS45MywwLDAsMS0yNC41MS00LjY3LDYsNiwwLDAsMC02LjY0LDEuMjZMMTE3LjUxLDE3MEg5NmE2LDYsMCwwLDAtNiw2djE4SDcyYTYsNiwwLDAsMC02LDZ2MThINDBhMiwyLDAsMCwxLTItMlYxODcuMzFhMiwyLDAsMCwxLC41OC0xLjQxbDU4LjgzLTU4LjgzYTYsNiwwLDAsMCwxLjI2LTYuNjRBNjUuNjEsNjUuNjEsMCwwLDEsOTQsOTUuOTJDOTQsNjAuNzEsMTIyLjY4LDMxLjE2LDE1Ny44MywzMEE2Niw2NiwwLDAsMSwyMjYsOTguMTZaTTE5MCw3NmExMCwxMCwwLDEsMS0xMC0xMEExMCwxMCwwLDAsMSwxOTAsNzZaIi8+PC9zdmc+)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYuNTcsMzkuNDNBODAsODAsMCwwLDAsODMuOTEsMTIwLjc4TDI4LjY5LDE3NkExNS44NiwxNS44NiwwLDAsMCwyNCwxODcuMzFWMjE2YTE2LDE2LDAsMCwwLDE2LDE2SDcyYTgsOCwwLDAsMCw4LThWMjA4SDk2YTgsOCwwLDAsMCw4LThWMTg0aDE2YTgsOCwwLDAsMCw1LjY2LTIuMzRsOS41Ni05LjU3QTc5LjczLDc5LjczLDAsMCwwLDE2MCwxNzZoLjFBODAsODAsMCwwLDAsMjE2LjU3LDM5LjQzWk0yMjQsOTguMWMtMS4wOSwzNC4wOS0yOS43NSw2MS44Ni02My44OSw2MS45SDE2MGE2My43LDYzLjcsMCwwLDEtMjMuNjUtNC41MSw4LDgsMCwwLDAtOC44NCwxLjY4TDExNi42OSwxNjhIOTZhOCw4LDAsMCwwLTgsOHYxNkg3MmE4LDgsMCwwLDAtOCw4djE2SDQwVjE4Ny4zMWw1OC44My01OC44MmE4LDgsMCwwLDAsMS42OC04Ljg0QTYzLjcyLDYzLjcyLDAsMCwxLDk2LDk1LjkyYzAtMzQuMTQsMjcuODEtNjIuOCw2MS45LTYzLjg5QTY0LDY0LDAsMCwxLDIyNCw5OC4xWk0xOTIsNzZhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsMTkyLDc2WiIvPjwvc3ZnPg==)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTMuNzQsNDIuMjZBNzYsNzYsMCwwLDAsODguNTEsMTIxLjg0bC01Nyw1N0ExMS45MywxMS45MywwLDAsMCwyOCwxODcuMzFWMjE2YTEyLDEyLDAsMCwwLDEyLDEySDcyYTQsNCwwLDAsMCw0LTRWMjA0SDk2YTQsNCwwLDAsMCw0LTRWMTgwaDIwYTQsNCwwLDAsMCwyLjgzLTEuMTdsMTEuMzMtMTEuMzRBNzUuNzIsNzUuNzIsMCwwLDAsMTYwLDE3MmguMUE3Niw3NiwwLDAsMCwyMTMuNzQsNDIuMjZabTE0LjIyLDU2Yy0xLjE1LDM2LjIyLTMxLjYsNjUuNzItNjcuODcsNjUuNzdIMTYwYTY3LjUyLDY3LjUyLDAsMCwxLTI1LjIxLTQuODMsNCw0LDAsMCwwLTQuNDUuODNsLTEyLDEySDk2YTQsNCwwLDAsMC00LDR2MjBINzJhNCw0LDAsMCwwLTQsNHYyMEg0MGE0LDQsMCwwLDEtNC00VjE4Ny4zMWE0LjA2LDQuMDYsMCwwLDEsMS4xNy0yLjgzTDk2LDEyNS42NmE0LDQsMCwwLDAsLjgzLTQuNDVBNjcuNTEsNjcuNTEsMCwwLDEsOTIsOTUuOTFDOTIsNTkuNjQsMTIxLjU1LDI5LjE5LDE1Ny43NywyOEE2OCw2OCwwLDAsMSwyMjgsOTguMjNaTTE4OCw3NmE4LDgsMCwxLDEtOC04QTgsOCwwLDAsMSwxODgsNzZaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Key";
export { I as Key };
