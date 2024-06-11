/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/ShieldCheck";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNDBINDhBMTYsMTYsMCwwLDAsMzIsNTZ2NTZjMCw1Mi43MiwyNS41Miw4NC42Nyw0Ni45MywxMDIuMTksMjMuMDYsMTguODYsNDYsMjUuMjYsNDcsMjUuNTNhOCw4LDAsMCwwLDQuMiwwYzEtLjI3LDIzLjkxLTYuNjcsNDctMjUuNTNDMTk4LjQ4LDE5Ni42NywyMjQsMTY0LjcyLDIyNCwxMTJWNTZBMTYsMTYsMCwwLDAsMjA4LDQwWm0wLDcyYzAsMzcuMDctMTMuNjYsNjcuMTYtNDAuNiw4OS40MkExMjkuMywxMjkuMywwLDAsMSwxMjgsMjIzLjYyYTEyOC4yNSwxMjguMjUsMCwwLDEtMzguOTItMjEuODFDNjEuODIsMTc5LjUxLDQ4LDE0OS4zLDQ4LDExMmwwLTU2LDE2MCwwWk04Mi4zNCwxNDEuNjZhOCw4LDAsMCwxLDExLjMyLTExLjMyTDExMiwxNDguNjlsNTAuMzQtNTAuMzVhOCw4LDAsMCwxLDExLjMyLDExLjMybC01Niw1NmE4LDgsMCwwLDEtMTEuMzIsMFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNDRINDhBMTIsMTIsMCwwLDAsMzYsNTZ2NTZjMCw1MS4xNiwyNC43Myw4Mi4xMiw0NS40Nyw5OS4xLDIyLjQsMTguMzIsNDQuNTUsMjQuNSw0NS40OCwyNC43NmE0LDQsMCwwLDAsMi4xLDBjLjkzLS4yNiwyMy4wOC02LjQ0LDQ1LjQ4LTI0Ljc2LDIwLjc0LTE3LDQ1LjQ3LTQ3Ljk0LDQ1LjQ3LTk5LjFWNTZBMTIsMTIsMCwwLDAsMjA4LDQ0Wm00LDY4YzAsMzguNDQtMTQuMjMsNjkuNjMtNDIuMjksOTIuNzFBMTMyLjQ1LDEzMi40NSwwLDAsMSwxMjgsMjI3LjgyYTEzMi4yMywxMzIuMjMsMCwwLDEtNDEuNzEtMjMuMTFDNTguMjMsMTgxLjYzLDQ0LDE1MC40NCw0NCwxMTJWNTZhNCw0LDAsMCwxLDQtNEgyMDhhNCw0LDAsMCwxLDQsNFptLTQxLjE3LTEwLjgzYTQsNCwwLDAsMSwwLDUuNjZsLTU2LDU2YTQsNCwwLDAsMS01LjY2LDBsLTI0LTI0YTQsNCwwLDAsMSw1LjY2LTUuNjZMMTEyLDE1NC4zNGw1My4xNy01My4xN0E0LDQsMCwwLDEsMTcwLjgzLDEwMS4xN1oiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNDJINDhBMTQsMTQsMCwwLDAsMzQsNTZ2NTZjMCw1MS45NCwyNS4xMiw4My40LDQ2LjIsMTAwLjY0LDIyLjczLDE4LjYsNDUuMjcsMjQuODksNDYuMjIsMjUuMTVhNiw2LDAsMCwwLDMuMTYsMGMuOTUtLjI2LDIzLjQ5LTYuNTUsNDYuMjItMjUuMTVDMTk2Ljg4LDE5NS40LDIyMiwxNjMuOTQsMjIyLDExMlY1NkExNCwxNCwwLDAsMCwyMDgsNDJabTIsNzBjMCwzNy43Ni0xMy45NCw2OC4zOS00MS40NCw5MS4wNkExMzEuMTcsMTMxLjE3LDAsMCwxLDEyOCwyMjUuNzJhMTMwLjk0LDEzMC45NCwwLDAsMS00MC41Ni0yMi42NkM1OS45NCwxODAuMzksNDYsMTQ5Ljc2LDQ2LDExMlY1NmEyLDIsMCwwLDEsMi0ySDIwOGEyLDIsMCwwLDEsMiwyWk0xNzIuMjQsOTkuNzZhNiw2LDAsMCwxLDAsOC40OGwtNTYsNTZhNiw2LDAsMCwxLTguNDgsMGwtMjQtMjRhNiw2LDAsMCwxLDguNDgtOC40OEwxMTIsMTUxLjUxbDUxLjc2LTUxLjc1QTYsNiwwLDAsMSwxNzIuMjQsOTkuNzZaIi8+PC9zdmc+)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzZINDhBMjAsMjAsMCwwLDAsMjgsNTZ2NTZjMCw1NC4yOSwyNi4zMiw4Ny4yMiw0OC40LDEwNS4yOSwyMy43MSwxOS4zOSw0Ny40NCwyNiw0OC40NCwyNi4yOWExMi4xLDEyLjEsMCwwLDAsNi4zMiwwYzEtLjI4LDI0LjczLTYuOSw0OC40NC0yNi4yOSwyMi4wOC0xOC4wNyw0OC40LTUxLDQ4LjQtMTA1LjI5VjU2QTIwLDIwLDAsMCwwLDIwOCwzNlptLTQsNzZjMCwzNS43MS0xMy4wOSw2NC42OS0zOC45MSw4Ni4xNUExMjYuMjgsMTI2LjI4LDAsMCwxLDEyOCwyMTkuMzhhMTI2LjE0LDEyNi4xNCwwLDAsMS0zNy4wOS0yMS4yM0M2NS4wOSwxNzYuNjksNTIsMTQ3LjcxLDUyLDExMlY2MEgyMDRaTTc5LjUxLDE0NC40OWExMiwxMiwwLDEsMSwxNy0xN0wxMTIsMTQzbDQ3LjUxLTQ3LjUyYTEyLDEyLDAsMCwxLDE3LDE3bC01Niw1NmExMiwxMiwwLDAsMS0xNywwWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNDBINDhBMTYsMTYsMCwwLDAsMzIsNTZ2NTZjMCw1Mi43MiwyNS41Miw4NC42Nyw0Ni45MywxMDIuMTksMjMuMDYsMTguODYsNDYsMjUuMjYsNDcsMjUuNTNhOCw4LDAsMCwwLDQuMiwwYzEtLjI3LDIzLjkxLTYuNjcsNDctMjUuNTNDMTk4LjQ4LDE5Ni42NywyMjQsMTY0LjcyLDIyNCwxMTJWNTZBMTYsMTYsMCwwLDAsMjA4LDQwWm0tMzQuMzIsNjkuNjYtNTYsNTZhOCw4LDAsMCwxLTExLjMyLDBsLTI0LTI0YTgsOCwwLDAsMSwxMS4zMi0xMS4zMkwxMTIsMTQ4LjY5bDUwLjM0LTUwLjM1YTgsOCwwLDAsMSwxMS4zMiwxMS4zMloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNTZ2NTZjMCw5Ni04OCwxMjAtODgsMTIwUzQwLDIwOCw0MCwxMTJWNTZhOCw4LDAsMCwxLDgtOEgyMDhBOCw4LDAsMCwxLDIxNiw1NloiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0yMDgsNDBINDhBMTYsMTYsMCwwLDAsMzIsNTZ2NTZjMCw1Mi43MiwyNS41Miw4NC42Nyw0Ni45MywxMDIuMTksMjMuMDYsMTguODYsNDYsMjUuMjYsNDcsMjUuNTNhOCw4LDAsMCwwLDQuMiwwYzEtLjI3LDIzLjkxLTYuNjcsNDctMjUuNTNDMTk4LjQ4LDE5Ni42NywyMjQsMTY0LjcyLDIyNCwxMTJWNTZBMTYsMTYsMCwwLDAsMjA4LDQwWm0wLDcyYzAsMzcuMDctMTMuNjYsNjcuMTYtNDAuNiw4OS40MkExMjkuMywxMjkuMywwLDAsMSwxMjgsMjIzLjYyYTEyOC4yNSwxMjguMjUsMCwwLDEtMzguOTItMjEuODFDNjEuODIsMTc5LjUxLDQ4LDE0OS4zLDQ4LDExMmwwLTU2LDE2MCwwWk04Mi4zNCwxNDEuNjZhOCw4LDAsMCwxLDExLjMyLTExLjMyTDExMiwxNDguNjlsNTAuMzQtNTAuMzVhOCw4LDAsMCwxLDExLjMyLDExLjMybC01Niw1NmE4LDgsMCwwLDEtMTEuMzIsMFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ShieldCheck";
export { I as ShieldCheck };
