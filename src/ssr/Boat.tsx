/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/Boat";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIuMzMsMTA2Ljc5LDIxMiwxMDMuMzVWNTZhMjAsMjAsMCwwLDAtMjAtMjBIMTQwVjI0YTEyLDEyLDAsMCwwLTI0LDBWMzZINjRBMjAsMjAsMCwwLDAsNDQsNTZ2NDcuMzVsLTEwLjMzLDMuNDRhMjAsMjAsMCwwLDAtMTMuNjcsMTlWMTUyYzAsNjQuNjMsMTAwLjgsOTAuNTcsMTA1LjA5LDkxLjY0YTExLjk0LDExLjk0LDAsMCwwLDUuODIsMEMxMzUuMiwyNDIuNTcsMjM2LDIxNi42MywyMzYsMTUyVjEyNS43N0EyMCwyMCwwLDAsMCwyMjIuMzMsMTA2Ljc5Wk02OCw2MEgxODhWOTUuMzVMMTMxLjc5LDc2LjYyYTExLjg1LDExLjg1LDAsMCwwLTcuNTgsMEw2OCw5NS4zNVptMTQ0LDkyYzAsMzYuNjktNTguMDgsNjAuNDMtODQsNjcuNTktMjUuOTQtNy4xNy04NC0zMC45LTg0LTY3LjU5VjEyOC42NWw3Mi0yNFYxNjhhMTIsMTIsMCwwLDAsMjQsMFYxMDQuNjVsNzIsMjRaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTI1Ljc3VjE1MmMwLDU2LTk2LDgwLTk2LDgwcy05Ni0yNC05Ni04MFYxMjUuNzdhOCw4LDAsMCwxLDUuNDctNy41OUwxMjgsODhsOTAuNTMsMzAuMThBOCw4LDAsMCwxLDIyNCwxMjUuNzdaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjIxLjA2LDExMC41OSwyMDgsMTA2LjIzVjU2YTE2LDE2LDAsMCwwLTE2LTE2SDEzNlYyNGE4LDgsMCwwLDAtMTYsMFY0MEg2NEExNiwxNiwwLDAsMCw0OCw1NnY1MC4yM2wtMTMuMDYsNC4zNkExNiwxNiwwLDAsMCwyNCwxMjUuNzdWMTUyYzAsNjEuNTQsOTcuODksODYuNzIsMTAyLjA2LDg3Ljc2YTgsOCwwLDAsMCwzLjg4LDBDMTM0LjExLDIzOC43MiwyMzIsMjEzLjU0LDIzMiwxNTJWMTI1Ljc3QTE2LDE2LDAsMCwwLDIyMS4wNiwxMTAuNTlaTTY0LDU2SDE5MnY0NC45TDEzMC41Myw4MC40MWE4LDgsMCwwLDAtNS4wNiwwTDY0LDEwMC45Wm0xNTIsOTZjMCwyNC45MS0yMy42OCw0My00My41NSw1My44M0EyMjguMTMsMjI4LjEzLDAsMCwxLDEyOCwyMjMuNzIsMjI2Ljg1LDIyNi44NSwwLDAsMSw4My44MSwyMDZDNDcuNiwxODYuMzUsNDAsMTY1Ljc5LDQwLDE1MlYxMjUuNzdMMTIwLDk5LjFWMTY4YTgsOCwwLDAsMCwxNiwwVjk5LjFsODAsMjYuNjdaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjEuMDYsMTEwLjU5LDIwOCwxMDYuMjNWNTZhMTYsMTYsMCwwLDAtMTYtMTZIMTM2VjI0YTgsOCwwLDAsMC0xNiwwVjQwSDY0QTE2LDE2LDAsMCwwLDQ4LDU2djUwLjIzbC0xMy4wNiw0LjM2QTE2LDE2LDAsMCwwLDI0LDEyNS43N1YxNTJjMCw2MS41NCw5Ny44OSw4Ni43MiwxMDIuMDYsODcuNzZhOCw4LDAsMCwwLDMuODgsMEMxMzQuMTEsMjM4LjcyLDIzMiwyMTMuNTQsMjMyLDE1MlYxMjUuNzdBMTYsMTYsMCwwLDAsMjIxLjA2LDExMC41OVpNMTM2LDE2OGE4LDgsMCwwLDEtMTYsMFYxMDQuODdhOCw4LDAsMCwxLDE2LDBabTU2LTY3LjFMMTMwLjUzLDgwLjQxYTgsOCwwLDAsMC01LjA2LDBMNjQsMTAwLjlWNTZIMTkyWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjAuNDMsMTEyLjQ4LDIwNiwxMDcuNjhWNTZhMTQsMTQsMCwwLDAtMTQtMTRIMTM0VjI0YTYsNiwwLDAsMC0xMiwwVjQySDY0QTE0LDE0LDAsMCwwLDUwLDU2djUxLjY4bC0xNC40Myw0LjhBMTQsMTQsMCwwLDAsMjYsMTI1Ljc3VjE1MmMwLDYwLDk2LjQ0LDg0Ljc5LDEwMC41NCw4NS44MmE2LDYsMCwwLDAsMi45MiwwLDIzNS40NCwyMzUuNDQsMCwwLDAsNDkuNC0xOS41NEMyMTIuMzIsMjAwLjE1LDIzMCwxNzcuMjQsMjMwLDE1MlYxMjUuNzdBMTQsMTQsMCwwLDAsMjIwLjQzLDExMi40OFpNNjIsNTZhMiwyLDAsMCwxLDItMkgxOTJhMiwyLDAsMCwxLDIsMnY0Ny42OEwxMjkuOSw4Mi4zMWE2LDYsMCwwLDAtMy44LDBMNjIsMTAzLjY4Wm0xNTYsOTZjMCw0Ny4xLTc4LjI4LDcwLjU0LTkwLDczLjc5QzExNi4yNywyMjIuNTQsMzgsMTk5LjEsMzgsMTUyVjEyNS43N2EyLDIsMCwwLDEsMS4zNy0xLjlMMTIyLDk2LjMyVjE2OGE2LDYsMCwwLDAsMTIsMFY5Ni4zMmw4Mi42MywyNy41NWEyLDIsMCwwLDEsMS4zNywxLjlaIi8+PC9zdmc+)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjEuMDYsMTEwLjU5LDIwOCwxMDYuMjNWNTZhMTYsMTYsMCwwLDAtMTYtMTZIMTM2VjI0YTgsOCwwLDAsMC0xNiwwVjQwSDY0QTE2LDE2LDAsMCwwLDQ4LDU2djUwLjIzbC0xMy4wNiw0LjM2QTE2LDE2LDAsMCwwLDI0LDEyNS43N1YxNTJjMCw2MS41NCw5Ny44OSw4Ni43MiwxMDIuMDYsODcuNzZhOCw4LDAsMCwwLDMuODgsMEMxMzQuMTEsMjM4LjcyLDIzMiwyMTMuNTQsMjMyLDE1MlYxMjUuNzdBMTYsMTYsMCwwLDAsMjIxLjA2LDExMC41OVpNNjQsNTZIMTkydjQ0LjlMMTMwLjUzLDgwLjQxYTgsOCwwLDAsMC01LjA2LDBMNjQsMTAwLjlabTE1Miw5NmMwLDI0LjkxLTIzLjY4LDQzLTQzLjU1LDUzLjgzQTIyOC4xMywyMjguMTMsMCwwLDEsMTI4LDIyMy43MiwyMjYuODUsMjI2Ljg1LDAsMCwxLDgzLjgxLDIwNkM0Ny42LDE4Ni4zNSw0MCwxNjUuNzksNDAsMTUyVjEyNS43N0wxMjAsOTkuMVYxNjhhOCw4LDAsMCwwLDE2LDBWOTkuMWw4MCwyNi42N1oiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTkuNzksMTE0LjM4LDIwNCwxMDkuMTJWNTZhMTIsMTIsMCwwLDAtMTItMTJIMTMyVjI0YTQsNCwwLDAsMC04LDBWNDRINjRBMTIsMTIsMCwwLDAsNTIsNTZ2NTMuMTJsLTE1LjgsNS4yNkExMiwxMiwwLDAsMCwyOCwxMjUuNzdWMTUyYzAsMjQuNDYsMTcuMzIsNDYuNzcsNTAuMDksNjQuNTJBMjMzLjIyLDIzMy4yMiwwLDAsMCwxMjcsMjM1Ljg4YTQsNCwwLDAsMCwxLjk0LDAsMjMzLjIyLDIzMy4yMiwwLDAsMCw0OC45NC0xOS4zNkMyMTAuNjgsMTk4Ljc3LDIyOCwxNzYuNDYsMjI4LDE1MlYxMjUuNzdBMTIsMTIsMCwwLDAsMjE5Ljc5LDExNC4zOFpNNjAsNTZhNCw0LDAsMCwxLDQtNEgxOTJhNCw0LDAsMCwxLDQsNHY1MC40NUwxMjkuMjYsODQuMjFhMy44OSwzLjg5LDAsMCwwLTIuNTIsMEw2MCwxMDYuNDVabTE2MCw5NmMwLDQ5LjMyLTgyLjA4LDczLjE2LTkyLDc1Ljg2LTkuOTItMi43LTkyLTI2LjU0LTkyLTc1Ljg2VjEyNS43N2E0LDQsMCwwLDEsMi43My0zLjhMMTI0LDkzLjU1VjE2OGE0LDQsMCwwLDAsOCwwVjkzLjU1TDIxNy4yNiwxMjJhNCw0LDAsMCwxLDIuNzQsMy44WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Boat";
export { I as Boat };
