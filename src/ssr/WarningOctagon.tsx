/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/WarningOctagon";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjAsMTM2VjgwYTgsOCwwLDAsMSwxNiwwdjU2YTgsOCwwLDAsMS0xNiwwWk0yMzIsOTEuNTV2NzIuOWExNS44NiwxNS44NiwwLDAsMS00LjY5LDExLjMxbC01MS41NSw1MS41NUExNS44NiwxNS44NiwwLDAsMSwxNjQuNDUsMjMySDkxLjU1YTE1Ljg2LDE1Ljg2LDAsMCwxLTExLjMxLTQuNjlMMjguNjksMTc1Ljc2QTE1Ljg2LDE1Ljg2LDAsMCwxLDI0LDE2NC40NVY5MS41NWExNS44NiwxNS44NiwwLDAsMSw0LjY5LTExLjMxTDgwLjI0LDI4LjY5QTE1Ljg2LDE1Ljg2LDAsMCwxLDkxLjU1LDI0aDcyLjlhMTUuODYsMTUuODYsMCwwLDEsMTEuMzEsNC42OWw1MS41NSw1MS41NUExNS44NiwxNS44NiwwLDAsMSwyMzIsOTEuNTVabS0xNiwwTDE2NC40NSw0MEg5MS41NUw0MCw5MS41NXY3Mi45TDkxLjU1LDIxNmg3Mi45TDIxNiwxNjQuNDVaTTEyOCwxNjBhMTIsMTIsMCwxLDAsMTIsMTJBMTIsMTIsMCwwLDAsMTI4LDE2MFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjQsMTM2VjgwYTQsNCwwLDAsMSw4LDB2NTZhNCw0LDAsMCwxLTgsMFpNMjI4LDkxLjU1djcyLjlhMTIsMTIsMCwwLDEtMy41MSw4LjQ5bC01MS41NSw1MS41NWExMiwxMiwwLDAsMS04LjQ5LDMuNTFIOTEuNTVhMTIsMTIsMCwwLDEtOC40OS0zLjUxTDMxLjUxLDE3Mi45NEExMiwxMiwwLDAsMSwyOCwxNjQuNDVWOTEuNTVhMTIsMTIsMCwwLDEsMy41MS04LjQ5TDgzLjA2LDMxLjUxQTEyLDEyLDAsMCwxLDkxLjU1LDI4aDcyLjlhMTIsMTIsMCwwLDEsOC40OSwzLjUxbDUxLjU1LDUxLjU1QTEyLDEyLDAsMCwxLDIyOCw5MS41NVptLTgsMGE0LDQsMCwwLDAtMS4xNy0yLjgzTDE2Ny4yOCwzNy4xN0E0LjA2LDQuMDYsMCwwLDAsMTY0LjQ1LDM2SDkxLjU1YTQuMDYsNC4wNiwwLDAsMC0yLjgzLDEuMTdMMzcuMTcsODguNzJBNCw0LDAsMCwwLDM2LDkxLjU1djcyLjlhNCw0LDAsMCwwLDEuMTcsMi44M2w1MS41NSw1MS41NUE0LjA2LDQuMDYsMCwwLDAsOTEuNTUsMjIwaDcyLjlhNC4wNiw0LjA2LDAsMCwwLDIuODMtMS4xN2w1MS41NS01MS41NWE0LDQsMCwwLDAsMS4xNy0yLjgzWk0xMjgsMTY0YTgsOCwwLDEsMCw4LDhBOCw4LDAsMCwwLDEyOCwxNjRaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjIsMTM2VjgwYTYsNiwwLDAsMSwxMiwwdjU2YTYsNiwwLDAsMS0xMiwwWk0yMzAsOTEuNTV2NzIuOWExMy45MiwxMy45MiwwLDAsMS00LjEsOS45TDE3NC4zNSwyMjUuOWExMy45MiwxMy45MiwwLDAsMS05LjksNC4xSDkxLjU1YTEzLjkyLDEzLjkyLDAsMCwxLTkuOS00LjFMMzAuMSwxNzQuMzVhMTMuOTIsMTMuOTIsMCwwLDEtNC4xLTkuOVY5MS41NWExMy45MiwxMy45MiwwLDAsMSw0LjEtOS45TDgxLjY1LDMwLjFhMTMuOTIsMTMuOTIsMCwwLDEsOS45LTQuMWg3Mi45YTEzLjkyLDEzLjkyLDAsMCwxLDkuOSw0LjFMMjI1LjksODEuNjVBMTMuOTIsMTMuOTIsMCwwLDEsMjMwLDkxLjU1Wm0tMTIsMGEyLDIsMCwwLDAtLjU5LTEuNDJMMTY1Ljg3LDM4LjU5YTIsMiwwLDAsMC0xLjQyLS41OUg5MS41NWEyLDIsMCwwLDAtMS40MS41OUwzOC41OCw5MC4xM0EyLDIsMCwwLDAsMzgsOTEuNTV2NzIuOWEyLDIsMCwwLDAsLjU5LDEuNDJsNTEuNTQsNTEuNTRhMiwyLDAsMCwwLDEuNDIuNTloNzIuOWEyLDIsMCwwLDAsMS40MS0uNTlsNTEuNTYtNTEuNTRhMiwyLDAsMCwwLC41OC0xLjQyWk0xMjgsMTYyYTEwLDEwLDAsMSwwLDEwLDEwQTEwLDEwLDAsMCwwLDEyOCwxNjJaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTYsMTMyVjgwYTEyLDEyLDAsMCwxLDI0LDB2NTJhMTIsMTIsMCwwLDEtMjQsMFpNMjM2LDkxLjU1djcyLjlhMTkuODYsMTkuODYsMCwwLDEtNS44NiwxNC4xNGwtNTEuNTUsNTEuNTVBMTkuODUsMTkuODUsMCwwLDEsMTY0LjQ1LDIzNkg5MS41NWExOS44NSwxOS44NSwwLDAsMS0xNC4xNC01Ljg2TDI1Ljg2LDE3OC41OUExOS44NiwxOS44NiwwLDAsMSwyMCwxNjQuNDVWOTEuNTVhMTkuODYsMTkuODYsMCwwLDEsNS44Ni0xNC4xNEw3Ny40MSwyNS44NkExOS44NSwxOS44NSwwLDAsMSw5MS41NSwyMGg3Mi45YTE5Ljg1LDE5Ljg1LDAsMCwxLDE0LjE0LDUuODZsNTEuNTUsNTEuNTVBMTkuODYsMTkuODYsMCwwLDEsMjM2LDkxLjU1Wm0tMjQsMS42NkwxNjIuNzksNDRIOTMuMjFMNDQsOTMuMjF2NjkuNThMOTMuMjEsMjEyaDY5LjU4TDIxMiwxNjIuNzlaTTEyOCwxNTZhMTYsMTYsMCwxLDAsMTYsMTZBMTYsMTYsMCwwLDAsMTI4LDE1NloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjcuMzEsODAuMjMsMTc1Ljc3LDI4LjY5QTE2LjEzLDE2LjEzLDAsMCwwLDE2NC40NSwyNEg5MS41NWExNi4xMywxNi4xMywwLDAsMC0xMS4zMiw0LjY5TDI4LjY5LDgwLjIzQTE2LjEzLDE2LjEzLDAsMCwwLDI0LDkxLjU1djcyLjlhMTYuMTMsMTYuMTMsMCwwLDAsNC42OSwxMS4zMmw1MS41NCw1MS41NEExNi4xMywxNi4xMywwLDAsMCw5MS41NSwyMzJoNzIuOWExNi4xMywxNi4xMywwLDAsMCwxMS4zMi00LjY5bDUxLjU0LTUxLjU0QTE2LjEzLDE2LjEzLDAsMCwwLDIzMiwxNjQuNDVWOTEuNTVBMTYuMTMsMTYuMTMsMCwwLDAsMjI3LjMxLDgwLjIzWk0xMjAsODBhOCw4LDAsMCwxLDE2LDB2NTZhOCw4LDAsMCwxLTE2LDBabTgsMTA0YTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDEyOCwxODRaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsOTEuNTV2NzIuOWE4LDgsMCwwLDEtMi4zNCw1LjY2bC01MS41NSw1MS41NWE4LDgsMCwwLDEtNS42NiwyLjM0SDkxLjU1YTgsOCwwLDAsMS01LjY2LTIuMzRMMzQuMzQsMTcwLjExQTgsOCwwLDAsMSwzMiwxNjQuNDVWOTEuNTVhOCw4LDAsMCwxLDIuMzQtNS42Nkw4NS44OSwzNC4zNEE4LDgsMCwwLDEsOTEuNTUsMzJoNzIuOWE4LDgsMCwwLDEsNS42NiwyLjM0bDUxLjU1LDUxLjU1QTgsOCwwLDAsMSwyMjQsOTEuNTVaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTIwLDEzNlY4MGE4LDgsMCwwLDEsMTYsMHY1NmE4LDgsMCwwLDEtMTYsMFpNMjMyLDkxLjU1djcyLjlhMTUuODYsMTUuODYsMCwwLDEtNC42OSwxMS4zMWwtNTEuNTUsNTEuNTVBMTUuODYsMTUuODYsMCwwLDEsMTY0LjQ1LDIzMkg5MS41NWExNS44NiwxNS44NiwwLDAsMS0xMS4zMS00LjY5TDI4LjY5LDE3NS43NkExNS44NiwxNS44NiwwLDAsMSwyNCwxNjQuNDVWOTEuNTVhMTUuODYsMTUuODYsMCwwLDEsNC42OS0xMS4zMUw4MC4yNCwyOC42OUExNS44NiwxNS44NiwwLDAsMSw5MS41NSwyNGg3Mi45YTE1Ljg2LDE1Ljg2LDAsMCwxLDExLjMxLDQuNjlsNTEuNTUsNTEuNTVBMTUuODYsMTUuODYsMCwwLDEsMjMyLDkxLjU1Wm0tMTYsMEwxNjQuNDUsNDBIOTEuNTVMNDAsOTEuNTV2NzIuOUw5MS41NSwyMTZoNzIuOUwyMTYsMTY0LjQ1Wk0xMjgsMTYwYTEyLDEyLDAsMSwwLDEyLDEyQTEyLDEyLDAsMCwwLDEyOCwxNjBaIi8+PC9zdmc+)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "WarningOctagon";
export { I as WarningOctagon };
