/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Spade";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzEuNTgsMTYuODVhOCw4LDAsMCwwLTcuMTYsMEMxMjAuMzIsMTguOSwyNCw2Ny44NCwyNCwxMzZhNTYsNTYsMCwwLDAsNzQuMTUsNTNMODguMzQsMjIxLjdBOCw4LDAsMCwwLDk2LDIzMmg2NGE4LDgsMCwwLDAsNy42Ni0xMC4zTDE1Ny44NSwxODlBNTYsNTYsMCwwLDAsMjMyLDEzNkMyMzIsNjcuODQsMTM1LjY4LDE4LjksMTMxLjU4LDE2Ljg1Wk0xNzYsMTc2YTQwLDQwLDAsMCwxLTI2LjI5LTkuODUsOCw4LDAsMCwwLTEyLjkyLDguMzNMMTQ5LjI1LDIxNmgtNDIuNWwxMi40Ni00MS41MmE4LDgsMCwwLDAtMTIuOTItOC4zM0E0MCw0MCwwLDAsMSw0MCwxMzZjMC0yOS44OCwyNC40MS01Ni41NSw0NC44OS03My42NkEyNzkuMTMsMjc5LjEzLDAsMCwxLDEyOCwzMy4wNmEyNzkuMTMsMjc5LjEzLDAsMCwxLDQzLjExLDI5LjI4QzIwOC4yMSw5My4zNCwyMTYsMTE5LjUxLDIxNiwxMzZBNDAsNDAsMCwwLDEsMTc2LDE3NloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzguNTYsNTIuOTNhMjgxLjA4LDI4MS4wOCwwLDAsMC00OC43Ny0zMi41MSw0LDQsMCwwLDAtMy41OCwwQTI4MS4wOCwyODEuMDgsMCwwLDAsNzcuNDQsNTIuOTNDNDUuMSw3OS44OCwyOCwxMDguNjEsMjgsMTM2YTUyLDUyLDAsMCwwLDc2LjQ2LDQ1Ljg5bC0xMi4yOSw0MUE0LDQsMCwwLDAsOTYsMjI4aDY0YTQsNCwwLDAsMCwzLjgzLTUuMTVsLTEyLjI5LTQxQTUyLDUyLDAsMCwwLDIyOCwxMzZDMjI4LDEwOC42MSwyMTAuOSw3OS44OCwxNzguNTYsNTIuOTNaTTE3NiwxODBhNDQsNDQsMCwwLDEtMjguOTItMTAuODQsNCw0LDAsMCwwLTYuNDYsNC4xN2wxNCw0Ni42N0gxMDEuMzhsMTQtNDYuNjdhNCw0LDAsMCwwLTYuNDYtNC4xN0E0NCw0NCwwLDAsMSwzNiwxMzZjMC01Ni4wNiw3OS0xMDAuNTYsOTItMTA3LjQ5LDEzLDYuOTMsOTIsNTEuMzgsOTIsMTA3LjQ5QTQ0LjA1LDQ0LjA1LDAsMCwxLDE3NiwxODBaIi8+PC9zdmc+)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzkuODQsNTEuMzlhMjg0LjE0LDI4NC4xNCwwLDAsMC00OS4xNi0zMi43Niw2LDYsMCwwLDAtNS4zNiwwQTI4NC4xNCwyODQuMTQsMCwwLDAsNzYuMTYsNTEuMzlDNDIuODgsNzkuMTMsMjYsMTA3LjU5LDI2LDEzNmE1NCw1NCwwLDAsMCw3NS4yNCw0OS42NWwtMTEsMzYuNjNBNiw2LDAsMCwwLDk2LDIzMGg2NGE2LDYsMCwwLDAsNS43NS03LjcybC0xMS0zNi42M0E1NCw1NCwwLDAsMCwyMzAsMTM2QzIzMCwxMDcuNTksMjEzLjEyLDc5LjEzLDE3OS44NCw1MS4zOVpNMTc2LDE3OGE0Miw0MiwwLDAsMS0yNy42LTEwLjM0LDYsNiwwLDAsMC05LjY5LDYuMjRMMTUxLjk0LDIxOEgxMDQuMDZsMTMuMjMtNDQuMWE2LDYsMCwwLDAtOS42OS02LjI0QTQyLDQyLDAsMCwxLDM4LDEzNmMwLTUzLjczLDc0Ljc3LTk3LDkwLTEwNS4yMkMxNDMuMjQsMzksMjE4LDgyLjIsMjE4LDEzNkE0Miw0MiwwLDAsMSwxNzYsMTc4WiIvPjwvc3ZnPg==)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzMuMzcsMTMuMjdhMTIsMTIsMCwwLDAtMTAuNzQsMEMxMTguNDQsMTUuMzYsMjAsNjUuNCwyMCwxMzZhNjAsNjAsMCwwLDAsNjkuNTEsNTkuMjVsLTUuMjgsMjYuNEExMiwxMiwwLDAsMCw5NiwyMzZoNjRhMTIsMTIsMCwwLDAsMTEuNzctMTQuMzVsLTUuMjgtMjYuNEE2MCw2MCwwLDAsMCwyMzYsMTM2QzIzNiw2NS40LDEzNy41NiwxNS4zNiwxMzMuMzcsMTMuMjdaTTE3NiwxNzJhMzUuODgsMzUuODgsMCwwLDEtMTkuMDktNS40NywxMiwxMiwwLDAsMC0xOC4xNCwxMi41MkwxNDUuMzYsMjEySDExMC42NGw2LjU5LTMyLjk1YTEyLDEyLDAsMCwwLTE4LjE0LTEyLjUyQTM2LDM2LDAsMCwxLDQ0LDEzNmMwLTI4LjI5LDIzLjU3LTUzLjk1LDQzLjM0LTcwLjQ5QTI3NC42OCwyNzQuNjgsMCwwLDEsMTI4LDM3LjYzYTI3NC4xNiwyNzQuMTYsMCwwLDEsNDAuNjYsMjcuODhDMTg4LjQzLDgyLjA1LDIxMiwxMDcuNzEsMjEyLDEzNkEzNiwzNiwwLDAsMSwxNzYsMTcyWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTM2YTU2LDU2LDAsMCwxLTgzLjQsNDguODJsMTEuMDYsMzYuODhBOCw4LDAsMCwxLDE1MiwyMzJIMTA0YTgsOCwwLDAsMS03LjY2LTEwLjNsMTEuMDYtMzYuODhBNTYsNTYsMCwwLDEsMjQsMTM2YzAtMzIsMTcuNjUtNjIuODQsNTEtODkuMjdhMjM0LjE0LDIzNC4xNCwwLDAsMSw0OS44OS0zMC4xMSw3LjkzLDcuOTMsMCwwLDEsNi4xNiwwQTIzNC4xNCwyMzQuMTQsMCwwLDEsMTgxLDQ2LjczQzIxNC4zNSw3My4xNiwyMzIsMTA0LDIzMiwxMzZaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTM2YTQ4LDQ4LDAsMCwxLTc5LjU1LDM2LjE4TDE2MCwyMjRIOTZsMTUuNTUtNTEuODJBNDgsNDgsMCwwLDEsMzIsMTM2YzAtNjQsOTYtMTEyLDk2LTExMlMyMjQsNzIsMjI0LDEzNloiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xMzEuNTgsMTYuODVhOCw4LDAsMCwwLTcuMTYsMEMxMjAuMzIsMTguOSwyNCw2Ny44NCwyNCwxMzZhNTYsNTYsMCwwLDAsNzQuMTUsNTNMODguMzQsMjIxLjdBOCw4LDAsMCwwLDk2LDIzMmg2NGE4LDgsMCwwLDAsNy42Ni0xMC4zTDE1Ny44NSwxODlBNTYsNTYsMCwwLDAsMjMyLDEzNkMyMzIsNjcuODQsMTM1LjY4LDE4LjksMTMxLjU4LDE2Ljg1Wk0xNzYsMTc2YTQwLDQwLDAsMCwxLTI2LjI5LTkuODUsOCw4LDAsMCwwLTEyLjkyLDguMzNMMTQ5LjI1LDIxNmgtNDIuNWwxMi40Ni00MS41MmE4LDgsMCwwLDAtMTIuOTItOC4zM0E0MCw0MCwwLDAsMSw0MCwxMzZjMC0yOS44OCwyNC40MS01Ni41NSw0NC44OS03My42NkEyNzkuMTMsMjc5LjEzLDAsMCwxLDEyOCwzMy4wNmEyNzkuMTMsMjc5LjEzLDAsMCwxLDQzLjExLDI5LjI4QzIwOC4yMSw5My4zNCwyMTYsMTE5LjUxLDIxNiwxMzZBNDAsNDAsMCwwLDEsMTc2LDE3NloiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Spade";
export { I as Spade };
