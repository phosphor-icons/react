/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Egg";

/**
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODYuNjYsNTkuNTZDMTY4LjQ3LDMyLjI5LDE0Ni41NCwxNiwxMjgsMTZTODcuNTMsMzIuMjksNjkuMzQsNTkuNTZDNTAuNyw4Ny41NCw0MCwxMjEuMjMsNDAsMTUyYTg4LDg4LDAsMCwwLDE3NiwwQzIxNiwxMjEuMjMsMjA1LjMsODcuNTQsMTg2LjY2LDU5LjU2Wk0xMjgsMjI0YTcyLjA4LDcyLjA4LDAsMCwxLTcyLTcyYzAtMjcuNjksOS43Mi01OC4xNSwyNi42Ni04My41NkM5Ny4xOSw0Ni42NCwxMTUuNDEsMzIsMTI4LDMyczMwLjgxLDE0LjY0LDQ1LjM0LDM2LjQ0QzE5MC4yOCw5My44NSwyMDAsMTI0LjMxLDIwMCwxNTJBNzIuMDgsNzIuMDgsMCwwLDEsMTI4LDIyNFoiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjBDOTIuODcsMjAsNDQsODYuNTIsNDQsMTUyYTg0LDg0LDAsMCwwLDE2OCwwQzIxMiw4Ni41MiwxNjMuMTMsMjAsMTI4LDIwWm0wLDIwOGE3Ni4wOCw3Ni4wOCwwLDAsMS03Ni03NmMwLTI4LjQ2LDEwLTU5LjczLDI3LjMzLTg1Ljc4Qzk0LjgxLDQzLDExMy45MSwyOCwxMjgsMjhzMzMuMTksMTUsNDguNjcsMzguMjJDMTk0LDkyLjI3LDIwNCwxMjMuNTQsMjA0LDE1MkE3Ni4wOCw3Ni4wOCwwLDAsMSwxMjgsMjI4WiIvPjwvc3ZnPg==)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODUsNjAuNjdDMTY3LjE4LDM0LDE0NS44NywxOCwxMjgsMThTODguODIsMzQsNzEsNjAuNjdDNTIuNTcsODguMzIsNDIsMTIxLjYxLDQyLDE1MmE4Niw4NiwwLDAsMCwxNzIsMEMyMTQsMTIxLjYxLDIwMy40Myw4OC4zMiwxODUsNjAuNjdaTTEyOCwyMjZhNzQuMDksNzQuMDksMCwwLDEtNzQtNzRjMC0yOC4wOCw5Ljg0LTU4Ljk0LDI3LTg0LjY3Qzk2LjExLDQ0LjY1LDExNC41NiwzMCwxMjgsMzBzMzEuODksMTQuNjUsNDcsMzcuMzNjMTcuMTUsMjUuNzMsMjcsNTYuNTksMjcsODQuNjdBNzQuMDksNzQuMDksMCwwLDEsMTI4LDIyNloiLz48L3N2Zz4=)
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTAsNTcuMzRDMTcxLjA2LDI5LDE0Ny44OCwxMiwxMjgsMTJTODQuOTQsMjksNjYsNTcuMzRDNDYuOTQsODYsMzYsMTIwLjQ2LDM2LDE1MmE5Miw5MiwwLDAsMCwxODQsMEMyMjAsMTIwLjQ2LDIwOS4wNiw4NiwxOTAsNTcuMzRaTTEyOCwyMjBhNjguMDcsNjguMDcsMCwwLDEtNjgtNjhjMC02MS4xMiw0Ni4xOS0xMTYsNjgtMTE2czY4LDU0Ljg4LDY4LDExNkE2OC4wNyw2OC4wNywwLDAsMSwxMjgsMjIwWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMTUyYTg4LDg4LDAsMCwxLTE3NiwwYzAtMzAuNzcsMTAuNy02NC40NiwyOS4zNC05Mi40NEM4Ny41MywzMi4yOSwxMDkuNDYsMTYsMTI4LDE2czQwLjQ3LDE2LjI5LDU4LjY2LDQzLjU2QzIwNS4zLDg3LjU0LDIxNiwxMjEuMjMsMjE2LDE1MloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTUyYTgwLDgwLDAsMCwxLTE2MCwwQzQ4LDg4LDk2LDI0LDEyOCwyNFMyMDgsODgsMjA4LDE1MloiIG9wYWNpdHk9IjAuMiIvPjxwYXRoIGQ9Ik0xODYuNjYsNTkuNTZDMTY4LjQ3LDMyLjI5LDE0Ni41NCwxNiwxMjgsMTZTODcuNTMsMzIuMjksNjkuMzQsNTkuNTZDNTAuNyw4Ny41NCw0MCwxMjEuMjMsNDAsMTUyYTg4LDg4LDAsMCwwLDE3NiwwQzIxNiwxMjEuMjMsMjA1LjMsODcuNTQsMTg2LjY2LDU5LjU2Wk0xMjgsMjI0YTcyLjA4LDcyLjA4LDAsMCwxLTcyLTcyYzAtMjcuNjksOS43Mi01OC4xNSwyNi42Ni04My41NkM5Ny4xOSw0Ni42NCwxMTUuNDEsMzIsMTI4LDMyczMwLjgxLDE0LjY0LDQ1LjM0LDM2LjQ0QzE5MC4yOCw5My44NSwyMDAsMTI0LjMxLDIwMCwxNTJBNzIuMDgsNzIuMDgsMCwwLDEsMTI4LDIyNFoiLz48L3N2Zz4=)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Egg";
export { I as Egg };
