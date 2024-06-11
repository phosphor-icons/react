/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import SSRBase from "../lib/SSRBase";
import weights from "../defs/ScribbleLoop";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTIuOSwxNTJjLTEuMzMtMS40Ny0yMy43NS0yNS44NS02MC4yMS00MC42OS0yLjE1LTE4LjI4LTkuMS0zNC45LTIwLjEtNDcuNzFDMTU3LjEyLDQ1LjUyLDEzNC43OSwzNiwxMDgsMzYsNTQuNDQsMzYsMTkuNjksODMuNzksMTguMjQsODUuODJhMTIsMTIsMCwwLDAsMTkuNTMsMTRDMzguMDUsOTkuMzgsNjYuNjUsNjAsMTA4LDYwYzE5Ljg1LDAsMzUuNDUsNi40NSw0Ni4zOCwxOS4xOGE2MS4zNSw2MS4zNSwwLDAsMSwxMi40LDI0QTE0My42LDE0My42LDAsMCwwLDEzNi42MSwxMDBjLTI3LDAtNDkuNzksNy4xMy02NS44NSwyMC42M0M1Ni4zLDEzMi43OSw0OCwxNDkuNzgsNDgsMTY3LjI1LDQ4LDE5My40Niw2Ny40NCwyMjAsMTA0LjYxLDIyMGM1MS45MywwLDgyLjM0LTQwLjI4LDg3Ljg3LTgyLjQzYTE1Ni40NiwxNTYuNDYsMCwwLDEsNDIuNjIsMzAuNDhBMTIsMTIsMCwxLDAsMjUyLjksMTUyWk0xNTIuMzcsMTczLjc0QzE0NC4wOSwxODMuOSwxMjkuMDksMTk2LDEwNC42MSwxOTYsODIuMDgsMTk2LDcyLDE4MS41Niw3MiwxNjcuMjUsNzIsMTQ2LjQyLDkyLjIyLDEyNCwxMzYuNjEsMTI0YTExOS44NSwxMTkuODUsMCwwLDEsMzIuNjQsNC42MkMxNjguMjQsMTQ1LjQ0LDE2Mi4yMSwxNjEuNjYsMTUyLjM3LDE3My43NFoiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDguNiwyMDhjLTY0LDAtNjQtOTYsMzItOTZhMTM0LjQ0LDEzNC40NCwwLDAsMSw0NC43Myw3LjgzaDBDMTg3LDE2Mi4zNiwxNTkuODgsMjA4LDEwOC42LDIwOFoiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yNTMuOTMsMTU0LjYzYy0xLjMyLTEuNDYtMjQuMDktMjYuMjItNjEtNDAuNTYtMS43Mi0xOC40Mi04LjQ2LTM1LjE3LTE5LjQxLTQ3LjkyQzE1OC44Nyw0OSwxMzcuNTgsNDAsMTEyLDQwLDYwLjQ4LDQwLDI2Ljg5LDg2LjE4LDI1LjQ5LDg4LjE1YTgsOCwwLDAsMCwxMyw5LjMxQzM4LjgsOTcuMDUsNjguODEsNTYsMTEyLDU2YzIwLjc3LDAsMzcuODYsNy4xMSw0OS40MSwyMC41Nyw3LjQyLDguNjQsMTIuNDQsMTkuNjksMTQuNjcsMzJBMTQwLjg3LDE0MC44NywwLDAsMCwxNDAuNiwxMDRjLTI2LjA2LDAtNDcuOTMsNi44MS02My4yNiwxOS42OUM2My43OCwxMzUuMDksNTYsMTUxLDU2LDE2Ny4yNUE0Ny41OSw0Ny41OSwwLDAsMCw2OS44NywyMDEuM2M5LjY2LDkuNjIsMjMuMDYsMTQuNywzOC43MywxNC43LDUxLjgxLDAsODEuMTgtNDIuMTMsODQuNDktODQuNDJhMTYxLjQzLDE2MS40MywwLDAsMSw0OSwzMy43OSw4LDgsMCwxLDAsMTEuODYtMTAuNzRabS05NC40NiwyMS42NEMxNTAuNjQsMTg3LjA5LDEzNC42NiwyMDAsMTA4LjYsMjAwLDgzLjMyLDIwMCw3MiwxODMuNTUsNzIsMTY3LjI1LDcyLDE0NC40OSw5My40NywxMjAsMTQwLjYsMTIwYTEyNC4zNCwxMjQuMzQsMCwwLDEsMzYuNzgsNS42OEMxNzYuOTMsMTQ0LjQ0LDE3MC40NiwxNjIuNzgsMTU5LjQ3LDE3Ni4yN1oiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMTI4YTgxLjQsODEuNCwwLDAsMSwyNS42OSw0LjI4QzE1MS41NiwxNTQuODcsMTM3LjMzLDE3NiwxMTIsMTc2Yy0xNS44LDAtMjQuMDYtMTAuODUtMjQuMDYtMjEuNTgsMC02LjU5LDMtMTIuNzUsOC41Ni0xNy4zNUMxMDMuNjIsMTMxLjE0LDExNC41MiwxMjgsMTI4LDEyOFptOTYtODBWMjA4YTE2LDE2LDAsMCwxLTE2LDE2SDQ4YTE2LDE2LDAsMCwxLTE2LTE2VjQ4QTE2LDE2LDAsMCwxLDQ4LDMySDIwOEExNiwxNiwwLDAsMSwyMjQsNDhabS0xOC4xMSw5OC41OWExMjAuMjEsMTIwLjIxLDAsMCwwLTM2LjA4LTI1LjIxYy0uOS0xNC4zNS01Ljc1LTI3LjU0LTEzLjg5LTM3LjU1QzE0NS4zOCw3MC44NiwxMzAuMTksNjQsMTEyLDY0LDc2LjQ0LDY0LDUwLjY4LDk3Ljc2LDQ5LjYsOTkuMmE4LDgsMCwwLDAsMTIuNzksOS42MkM2Mi42MSwxMDguNTMsODQuNTEsODAsMTEyLDgwYzEzLjQsMCwyNCw0LjY4LDMxLjUsMTMuOTJhNDcuNTQsNDcuNTQsMCwwLDEsOS40OCwyMS40QTk2Ljc1LDk2Ljc1LDAsMCwwLDEyOCwxMTJjLTE3LjI3LDAtMzEuNzEsNC40Mi00MS43NCwxMi43OEM3NywxMzIuNDcsNzEuOTQsMTQzLDcxLjk0LDE1NC40Miw3MS45NCwxNzIuNjQsODYsMTkyLDExMiwxOTJhNTQsNTQsMCwwLDAsNDMuNTMtMjEuMjNBNzAsNzAsMCwwLDAsMTY5LDEzOC44OWExMDYuMjQsMTA2LjI0LDAsMCwxLDI1LjEzLDE4LjUyLDgsOCwwLDEsMCwxMS43OC0xMC44MloiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTIuNDUsMTU2Yy0xLjMyLTEuNDYtMjQuMjctMjYuNDItNjEuMzctNDAuNS0xLjUtMTguNDktOC4xMy0zNS4zMS0xOS00OEMxNTcuNzQsNTAuOCwxMzcsNDIsMTEyLDQyLDYxLjQ5LDQyLDI4LjUsODcuMzgsMjcuMTIsODkuMzFhNiw2LDAsMSwwLDkuNzYsN0MzNy4xOCw5NS44Nyw2Ny43NSw1NCwxMTIsNTRjMjEuMzcsMCwzOSw3LjM1LDUwLjkzLDIxLjI3LDguMjYsOS42MiwxMy42NCwyMi4xNCwxNS42MiwzNi4wNmExMzksMTM5LDAsMCwwLTM4LTUuMzNjLTI1LjU4LDAtNDcsNi42NS02MiwxOS4yMi0xMy4xLDExLTIwLjYyLDI2LjM0LTIwLjYyLDQyYTQ1LjY1LDQ1LjY1LDAsMCwwLDEzLjI4LDMyLjY0QzgwLjU2LDIwOS4xMiw5My40NywyMTQsMTA4LjYsMjE0YzUxLjczLDAsODAuNTUtNDMuMDksODIuNjgtODUuMzgsMzIuMDUsMTMuNDksNTIsMzUuMDksNTIuMjcsMzUuNGE2LDYsMCwwLDAsOC45LThaTTE2MSwxNzcuNTNDMTUxLjkyLDE4OC42OSwxMzUuNDQsMjAyLDEwOC42LDIwMiw5MCwyMDIsNzAsMTkxLjEyLDcwLDE2Ny4yNSw3MCwxNDMuNTMsOTIuMDksMTE4LDE0MC42LDExOGExMjYuNzQsMTI2Ljc0LDAsMCwxLDM4LjgsNi4yMkMxNzkuMjYsMTQzLjk0LDE3Mi41OCwxNjMuMzQsMTYxLDE3Ny41M1oiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTMuOTMsMTU0LjYzYy0xLjMyLTEuNDYtMjQuMDktMjYuMjItNjEtNDAuNTYtMS43Mi0xOC40Mi04LjQ2LTM1LjE3LTE5LjQxLTQ3LjkyQzE1OC44Nyw0OSwxMzcuNTgsNDAsMTEyLDQwLDYwLjQ4LDQwLDI2Ljg5LDg2LjE4LDI1LjQ5LDg4LjE1YTgsOCwwLDAsMCwxMyw5LjMxQzM4LjgsOTcuMDUsNjguODEsNTYsMTEyLDU2YzIwLjc3LDAsMzcuODYsNy4xMSw0OS40MSwyMC41Nyw3LjQyLDguNjQsMTIuNDQsMTkuNjksMTQuNjcsMzJBMTQwLjg3LDE0MC44NywwLDAsMCwxNDAuNiwxMDRjLTI2LjA2LDAtNDcuOTMsNi44MS02My4yNiwxOS42OUM2My43OCwxMzUuMDksNTYsMTUxLDU2LDE2Ny4yNUE0Ny41OSw0Ny41OSwwLDAsMCw2OS44NywyMDEuM2M5LjY2LDkuNjIsMjMuMDYsMTQuNywzOC43MywxNC43LDUxLjgxLDAsODEuMTgtNDIuMTMsODQuNDktODQuNDJhMTYxLjQzLDE2MS40MywwLDAsMSw0OSwzMy43OSw4LDgsMCwxLDAsMTEuODYtMTAuNzRabS05NC40NiwyMS42NEMxNTAuNjQsMTg3LjA5LDEzNC42NiwyMDAsMTA4LjYsMjAwLDgzLjMyLDIwMCw3MiwxODMuNTUsNzIsMTY3LjI1LDcyLDE0NC40OSw5My40NywxMjAsMTQwLjYsMTIwYTEyNC4zNCwxMjQuMzQsMCwwLDEsMzYuNzgsNS42OEMxNzYuOTMsMTQ0LjQ0LDE3MC40NiwxNjIuNzgsMTU5LjQ3LDE3Ni4yN1oiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTEsMTU3LjMyYy0xLjMyLTEuNDYtMjQuNDctMjYuNjMtNjEuNzktNDAuNDMtMS4yNi0xOC41Ni03Ljc4LTM1LjQ1LTE4LjY2LTQ4LjEzQzE1Ni42Miw1Mi41NiwxMzYuMzgsNDQsMTEyLDQ0LDYyLjUxLDQ0LDMwLjEsODguNTgsMjguNzQsOTAuNDhhNCw0LDAsMCwwLDYuNTEsNC42NUMzNS41Niw5NC43LDY2LjY4LDUyLDExMiw1MmMyMiwwLDQwLjExLDcuNiw1Mi40NSwyMiw5LjExLDEwLjYxLDE0LjgxLDI0LjYyLDE2LjQ2LDQwLjEzQTEzNy44NCwxMzcuODQsMCwwLDAsMTQwLjYsMTA4Yy0yNS4xLDAtNDYuMDksNi40OC02MC42OSwxOC43NUM2Ny4yNiwxMzcuMzksNjAsMTUyLjE1LDYwLDE2Ny4yNWE0My42NCw0My42NCwwLDAsMCwxMi42OSwzMS4yMkM4MS41OSwyMDcuMzIsOTQsMjEyLDEwOC42LDIxMmM1MS42MywwLDc5Ljg3LTQ0LjA4LDgwLjc4LTg2LjMyLDM0LjA3LDEzLjU4LDU1LjM2LDM2LjY3LDU1LjY1LDM3YTQsNCwwLDEsMCw1Ljk0LTUuMzZabS04OC40LDIxLjQ3Yy05LjM3LDExLjUtMjYuMzQsMjUuMjEtNTQsMjUuMjFDODAuNzEsMjA0LDY4LDE4NSw2OCwxNjcuMjUsNjgsMTQyLjU3LDkwLjcyLDExNiwxNDAuNiwxMTZhMTI5LjIzLDEyOS4yMywwLDAsMSw0MC44LDYuNzd2LjgxQzE4MS40LDE0NCwxNzQuNTQsMTY0LjEsMTYyLjU3LDE3OC43OVoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <SSRBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ScribbleLoop";
export { I as ScribbleLoop };
