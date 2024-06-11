/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/TrayArrowUp";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJabTAsMTZWMTUyaC0yOC43QTE1Ljg2LDE1Ljg2LDAsMCwwLDE2OCwxNTYuNjlMMTQ4LjY5LDE3NkgxMDcuMzFMODgsMTU2LjY5QTE1Ljg2LDE1Ljg2LDAsMCwwLDc2LjY5LDE1Mkg0OFY0OFptMCwxNjBINDhWMTY4SDc2LjY5TDk2LDE4Ny4zMUExNS44NiwxNS44NiwwLDAsMCwxMDcuMzEsMTkyaDQxLjM4QTE1Ljg2LDE1Ljg2LDAsMCwwLDE2MCwxODcuMzFMMTc5LjMxLDE2OEgyMDh2NDBaTTkwLjM0LDEwOS42NmE4LDgsMCwwLDEsMC0xMS4zMmwzMi0zMmE4LDgsMCwwLDEsMTEuMzIsMGwzMiwzMmE4LDgsMCwwLDEtMTEuMzIsMTEuMzJMMTM2LDkxLjMxVjE1MmE4LDgsMCwwLDEtMTYsMFY5MS4zMWwtMTguMzQsMTguMzVBOCw4LDAsMCwxLDkwLjM0LDEwOS42NloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzZINDhBMTIsMTIsMCwwLDAsMzYsNDhWMjA4YTEyLDEyLDAsMCwwLDEyLDEySDIwOGExMiwxMiwwLDAsMCwxMi0xMlY0OEExMiwxMiwwLDAsMCwyMDgsMzZaTTQ4LDQ0SDIwOGE0LDQsMCwwLDEsNCw0VjE1NkgxNzkuMzFhMTEuOTMsMTEuOTMsMCwwLDAtOC40OCwzLjUxbC0xOS4zMiwxOS4zMmE0LDQsMCwwLDEtMi44MiwxLjE3SDEwNy4zMWE0LDQsMCwwLDEtMi44Mi0xLjE3TDg1LjE3LDE1OS41MkExMS45LDExLjksMCwwLDAsNzYuNjksMTU2SDQ0VjQ4QTQsNCwwLDAsMSw0OCw0NFpNMjA4LDIxMkg0OGE0LDQsMCwwLDEtNC00VjE2NEg3Ni42OWE0LDQsMCwwLDEsMi44MiwxLjE3bDE5LjMyLDE5LjMxYTExLjksMTEuOSwwLDAsMCw4LjQ4LDMuNTJoNDEuMzhhMTEuOTMsMTEuOTMsMCwwLDAsOC40OC0zLjUxbDE5LjMyLTE5LjMyYTQsNCwwLDAsMSwyLjgyLTEuMTdIMjEydjQ0QTQsNCwwLDAsMSwyMDgsMjEyWk05My4xNywxMDYuODNhNCw0LDAsMCwxLDAtNS42NmwzMi0zMmE0LDQsMCwwLDEsNS42NiwwbDMyLDMyYTQsNCwwLDAsMS01LjY2LDUuNjZMMTMyLDgxLjY2VjE1MmE0LDQsMCwwLDEtOCwwVjgxLjY2TDk4LjgzLDEwNi44M0E0LDQsMCwwLDEsOTMuMTcsMTA2LjgzWiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzRINDhBMTQsMTQsMCwwLDAsMzQsNDhWMjA4YTE0LDE0LDAsMCwwLDE0LDE0SDIwOGExNCwxNCwwLDAsMCwxNC0xNFY0OEExNCwxNCwwLDAsMCwyMDgsMzRaTTQ4LDQ2SDIwOGEyLDIsMCwwLDEsMiwyVjE1NEgxNzkuMzFhMTMuOSwxMy45LDAsMCwwLTkuODksNC4xTDE1MC4xLDE3Ny40MWEyLDIsMCwwLDEtMS40MS41OUgxMDcuMzFhMiwyLDAsMCwxLTEuNDEtLjU5TDg2LjU5LDE1OC4xYTEzLjk0LDEzLjk0LDAsMCwwLTkuOS00LjFINDZWNDhBMiwyLDAsMCwxLDQ4LDQ2Wk0yMDgsMjEwSDQ4YTIsMiwwLDAsMS0yLTJWMTY2SDc2LjY5YTIsMiwwLDAsMSwxLjQxLjU5TDk3LjQxLDE4NS45YTEzLjk0LDEzLjk0LDAsMCwwLDkuOSw0LjFoNDEuMzhhMTMuOSwxMy45LDAsMCwwLDkuODktNC4xbDE5LjMyLTE5LjMxYTIsMiwwLDAsMSwxLjQxLS41OUgyMTB2NDJBMiwyLDAsMCwxLDIwOCwyMTBaTTkxLjc2LDEwOC4yNGE2LDYsMCwwLDEsMC04LjQ4bDMyLTMyYTYsNiwwLDAsMSw4LjQ4LDBsMzIsMzJhNiw2LDAsMSwxLTguNDgsOC40OEwxMzQsODYuNDlWMTUyYTYsNiwwLDAsMS0xMiwwVjg2LjQ5bC0yMS43NiwyMS43NUE2LDYsMCwwLDEsOTEuNzYsMTA4LjI0WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjhINDhBMjAsMjAsMCwwLDAsMjgsNDhWMjA4YTIwLDIwLDAsMCwwLDIwLDIwSDIwOGEyMCwyMCwwLDAsMCwyMC0yMFY0OEEyMCwyMCwwLDAsMCwyMDgsMjhabS00LDI0djkySDE3OS4zMWExOS44NiwxOS44NiwwLDAsMC0xNC4xNCw1Ljg2TDE0NywxNjhIMTA5TDkwLjgzLDE0OS44NkExOS44NiwxOS44NiwwLDAsMCw3Ni42OSwxNDRINTJWNTJaTTUyLDIwNFYxNjhINzVsMTguMTQsMTguMTRBMTkuODYsMTkuODYsMCwwLDAsMTA3LjMxLDE5Mmg0MS4zOGExOS44NiwxOS44NiwwLDAsMCwxNC4xNC01Ljg2TDE4MSwxNjhoMjN2MzZabTM1LjUxLTg3LjUxYTEyLDEyLDAsMCwxLDAtMTdsMzItMzJhMTIsMTIsMCwwLDEsMTcsMGwzMiwzMmExMiwxMiwwLDAsMS0xNywxN0wxNDAsMTA1djM1YTEyLDEyLDAsMCwxLTI0LDBWMTA1bC0xMS41MSwxMS41MkExMiwxMiwwLDAsMSw4Ny41MSwxMTYuNDlaIi8+PC9zdmc+)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTkwLjM0LDk4LjM0bDMyLTMyYTgsOCwwLDAsMSwxMS4zMiwwbDMyLDMyYTgsOCwwLDAsMS0xMS4zMiwxMS4zMkwxMzYsOTEuMzFWMTUyYTgsOCwwLDAsMS0xNiwwVjkxLjMxbC0xOC4zNCwxOC4zNUE4LDgsMCwwLDEsOTAuMzQsOTguMzRaTTIwOCwyMDhINDhWMTY4SDc2LjY5TDk2LDE4Ny4zMUExNS44NiwxNS44NiwwLDAsMCwxMDcuMzEsMTkyaDQxLjM4QTE1Ljg2LDE1Ljg2LDAsMCwwLDE2MCwxODcuMzFMMTc5LjMxLDE2OEgyMDh2NDBaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDhWMTYwSDE3OS4zMWE4LDgsMCwwLDAtNS42NiwyLjM0bC0xOS4zMSwxOS4zMmE4LDgsMCwwLDEtNS42NiwyLjM0SDEwNy4zMWE4LDgsMCwwLDEtNS42Ni0yLjM0TDgyLjM0LDE2Mi4zNEE4LDgsMCwwLDAsNzYuNjgsMTYwSDQwVjQ4YTgsOCwwLDAsMSw4LThIMjA4QTgsOCwwLDAsMSwyMTYsNDhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjA4LDMySDQ4QTE2LDE2LDAsMCwwLDMyLDQ4VjIwOGExNiwxNiwwLDAsMCwxNiwxNkgyMDhhMTYsMTYsMCwwLDAsMTYtMTZWNDhBMTYsMTYsMCwwLDAsMjA4LDMyWm0wLDE2VjE1MmgtMjguN0ExNS44NiwxNS44NiwwLDAsMCwxNjgsMTU2LjY5TDE0OC42OSwxNzZIMTA3LjMxTDg4LDE1Ni42OUExNS44NiwxNS44NiwwLDAsMCw3Ni42OSwxNTJINDhWNDhabTAsMTYwSDQ4VjE2OEg3Ni42OUw5NiwxODcuMzFBMTUuODYsMTUuODYsMCwwLDAsMTA3LjMxLDE5Mmg0MS4zOEExNS44NiwxNS44NiwwLDAsMCwxNjAsMTg3LjMxTDE3OS4zMSwxNjhIMjA4djQwWk05MC4zNCwxMDkuNjZhOCw4LDAsMCwxLDAtMTEuMzJsMzItMzJhOCw4LDAsMCwxLDExLjMyLDBsMzIsMzJhOCw4LDAsMCwxLTExLjMyLDExLjMyTDEzNiw5MS4zMVYxNTJhOCw4LDAsMCwxLTE2LDBWOTEuMzFsLTE4LjM0LDE4LjM1QTgsOCwwLDAsMSw5MC4zNCwxMDkuNjZaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "TrayArrowUp";
export { I as TrayArrowUp };
