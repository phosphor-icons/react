/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/Link";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTcuMTgsMTg4Ljc0YTEyLDEyLDAsMCwxLDAsMTdsLTUuMTIsNS4xMkE1OC4yNiw1OC4yNiwwLDAsMSw3MC42LDIyOGgwQTU4LjYyLDU4LjYyLDAsMCwxLDI5LjE0LDEyNy45Mkw2My44OSw5My4xN2E1OC42NCw1OC42NCwwLDAsMSw5OC41NiwyOC4xMSwxMiwxMiwwLDEsMS0yMy4zNyw1LjQ0LDM0LjY1LDM0LjY1LDAsMCwwLTU4LjIyLTE2LjU4TDQ2LjExLDE0NC44OUEzNC42MiwzNC42MiwwLDAsMCw3MC41NywyMDRoMGEzNC40MSwzNC40MSwwLDAsMCwyNC40OS0xMC4xNGw1LjExLTUuMTJBMTIsMTIsMCwwLDEsMTE3LjE4LDE4OC43NFpNMjI2LjgzLDQ1LjE3YTU4LjY1LDU4LjY1LDAsMCwwLTgyLjkzLDBsLTUuMTEsNS4xMWExMiwxMiwwLDAsMCwxNywxN2w1LjEyLTUuMTJhMzQuNjMsMzQuNjMsMCwxLDEsNDksNDlMMTc1LjEsMTQ1Ljg2QTM0LjM5LDM0LjM5LDAsMCwxLDE1MC42MSwxNTZoMGEzNC42MywzNC42MywwLDAsMS0zMy42OS0yNi43MiwxMiwxMiwwLDAsMC0yMy4zOCw1LjQ0QTU4LjY0LDU4LjY0LDAsMCwwLDE1MC41NiwxODBoLjA1YTU4LjI4LDU4LjI4LDAsMCwwLDQxLjQ3LTE3LjE3bDM0Ljc1LTM0Ljc1YTU4LjYyLDU4LjYyLDAsMCwwLDAtODIuOTFaIi8+PC9zdmc+)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTguMzQsMTE5LjYsMTgzLjYsMTU0LjM0YTQ2LjU4LDQ2LjU4LDAsMCwxLTQ0LjMxLDEyLjI2Yy0uMzEuMzQtLjYyLjY3LS45NSwxTDEwMy42LDIwMi4zNEE0Ni42Myw0Ni42MywwLDEsMSwzNy42NiwxMzYuNEw3Mi40LDEwMS42NkE0Ni42LDQ2LjYsMCwwLDEsMTE2LjcxLDg5LjRjLjMxLS4zNC42Mi0uNjcsMS0xTDE1Mi40LDUzLjY2YTQ2LjYzLDQ2LjYzLDAsMCwxLDY1Ljk0LDY1Ljk0WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTI0MCw4OC4yM2E1NC40Myw1NC40MywwLDAsMS0xNiwzN0wxODkuMjUsMTYwYTU0LjI3LDU0LjI3LDAsMCwxLTM4LjYzLDE2aC0uMDVBNTQuNjMsNTQuNjMsMCwwLDEsOTYsMTE5Ljg0YTgsOCwwLDAsMSwxNiwuNDVBMzguNjIsMzguNjIsMCwwLDAsMTUwLjU4LDE2MGgwYTM4LjM5LDM4LjM5LDAsMCwwLDI3LjMxLTExLjMxbDM0Ljc1LTM0Ljc1YTM4LjYzLDM4LjYzLDAsMCwwLTU0LjYzLTU0LjYzbC0xMSwxMUE4LDgsMCwwLDEsMTM1LjcsNTlsMTEtMTFBNTQuNjUsNTQuNjUsMCwwLDEsMjI0LDQ4LDU0Ljg2LDU0Ljg2LDAsMCwxLDI0MCw4OC4yM1pNMTA5LDE4NS42NmwtMTEsMTFBMzguNDEsMzguNDEsMCwwLDEsNzAuNiwyMDhoMGEzOC42MywzOC42MywwLDAsMS0yNy4yOS02NS45NEw3OCwxMDcuMzFBMzguNjMsMzguNjMsMCwwLDEsMTQ0LDEzNS43MWE4LDgsMCwwLDAsNy43OCw4LjIySDE1MmE4LDgsMCwwLDAsOC03Ljc4QTU0Ljg2LDU0Ljg2LDAsMCwwLDE0NCw5NmE1NC42NSw1NC42NSwwLDAsMC03Ny4yNywwTDMyLDEzMC43NUE1NC42Miw1NC42MiwwLDAsMCw3MC41NiwyMjRoMGE1NC4yOCw1NC4yOCwwLDAsMCwzOC42NC0xNmwxMS0xMUE4LDgsMCwwLDAsMTA5LDE4NS42NloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJINDhBMTYsMTYsMCwwLDAsMzIsNDhWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwOGExNiwxNiwwLDAsMCwxNi0xNlY0OEExNiwxNiwwLDAsMCwyMDgsMzJaTTExNS43LDE5Mi40OWE0My4zMSw0My4zMSwwLDAsMS01NS02Ni40M2wyNS4zNy0yNS4zN2E0My4zNSw0My4zNSwwLDAsMSw2MS4yNSwwLDQyLjksNDIuOSwwLDAsMSw5Ljk1LDE1LjQzLDgsOCwwLDEsMS0xNSw1LjZBMjcuMzMsMjcuMzMsMCwwLDAsOTcuMzcsMTEyTDcyLDEzNy4zN2EyNy4zMiwyNy4zMiwwLDAsMCwzNC42OCw0MS45MSw4LDgsMCwxLDEsOSwxMy4yMVptNzkuNjEtNjIuNTUtMjUuMzcsMjUuMzdBNDMsNDMsMCwwLDEsMTM5LjMyLDE2OGgwYTQzLjM1LDQzLjM1LDAsMCwxLTQwLjUzLTI4LjEyLDgsOCwwLDEsMSwxNS01LjZBMjcuMzUsMjcuMzUsMCwwLDAsMTM5LjI4LDE1MmgwYTI3LjE0LDI3LjE0LDAsMCwwLDE5LjMyLThMMTg0LDExOC42M2EyNy4zMiwyNy4zMiwwLDAsMC0zNC42OC00MS45MSw4LDgsMCwxLDEtOS0xMy4yMSw0My4zMiw0My4zMiwwLDAsMSw1NSw2Ni40M1oiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzgsODguMThhNTIuNDIsNTIuNDIsMCwwLDEtMTUuNCwzNS42NmwtMzQuNzUsMzQuNzVBNTIuMjgsNTIuMjgsMCwwLDEsMTUwLjYyLDE3NGgtLjA1QTUyLjYzLDUyLjYzLDAsMCwxLDk4LDExOS45YTYsNiwwLDAsMSw2LTUuODRoLjE3YTYsNiwwLDAsMSw1LjgzLDYuMTZBNDAuNjIsNDAuNjIsMCwwLDAsMTUwLjU4LDE2MmgwYTQwLjQsNDAuNCwwLDAsMCwyOC43My0xMS45bDM0Ljc1LTM0Ljc0QTQwLjYzLDQwLjYzLDAsMCwwLDE1Ni42Myw1Ny45bC0xMSwxMWE2LDYsMCwwLDEtOC40OS04LjQ5bDExLTExYTUyLjYyLDUyLjYyLDAsMCwxLDc0LjQzLDBBNTIuODMsNTIuODMsMCwwLDEsMjM4LDg4LjE4Wm0tMTI3LjYyLDk4LjktMTEsMTFBNDAuMzYsNDAuMzYsMCwwLDEsNzAuNiwyMTBoMGE0MC42Myw0MC42MywwLDAsMS0yOC43LTY5LjM2TDc2LjYyLDEwNS45QTQwLjYzLDQwLjYzLDAsMCwxLDE0NiwxMzUuNzdhNiw2LDAsMCwwLDUuODMsNi4xNkgxNTJhNiw2LDAsMCwwLDYtNS44NEE1Mi42Myw1Mi42MywwLDAsMCw2OC4xNCw5Ny40MkwzMy4zOCwxMzIuMTZBNTIuNjMsNTIuNjMsMCwwLDAsNzAuNTYsMjIyaDBhNTIuMjYsNTIuMjYsMCwwLDAsMzcuMjItMTUuNDJsMTEtMTFhNiw2LDAsMSwwLTguNDktOC40OFoiLz48L3N2Zz4=)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsODguMjNhNTQuNDMsNTQuNDMsMCwwLDEtMTYsMzdMMTg5LjI1LDE2MGE1NC4yNyw1NC4yNywwLDAsMS0zOC42MywxNmgtLjA1QTU0LjYzLDU0LjYzLDAsMCwxLDk2LDExOS44NGE4LDgsMCwwLDEsMTYsLjQ1QTM4LjYyLDM4LjYyLDAsMCwwLDE1MC41OCwxNjBoMGEzOC4zOSwzOC4zOSwwLDAsMCwyNy4zMS0xMS4zMWwzNC43NS0zNC43NWEzOC42MywzOC42MywwLDAsMC01NC42My01NC42M2wtMTEsMTFBOCw4LDAsMCwxLDEzNS43LDU5bDExLTExQTU0LjY1LDU0LjY1LDAsMCwxLDIyNCw0OCw1NC44Niw1NC44NiwwLDAsMSwyNDAsODguMjNaTTEwOSwxODUuNjZsLTExLDExQTM4LjQxLDM4LjQxLDAsMCwxLDcwLjYsMjA4aDBhMzguNjMsMzguNjMsMCwwLDEtMjcuMjktNjUuOTRMNzgsMTA3LjMxQTM4LjYzLDM4LjYzLDAsMCwxLDE0NCwxMzUuNzFhOCw4LDAsMCwwLDE2LC40NUE1NC44Niw1NC44NiwwLDAsMCwxNDQsOTZhNTQuNjUsNTQuNjUsMCwwLDAtNzcuMjcsMEwzMiwxMzAuNzVBNTQuNjIsNTQuNjIsMCwwLDAsNzAuNTYsMjI0aDBhNTQuMjgsNTQuMjgsMCwwLDAsMzguNjQtMTZsMTEtMTFBOCw4LDAsMCwwLDEwOSwxODUuNjZaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsODguMTJhNTAuNDQsNTAuNDQsMCwwLDEtMTQuODEsMzQuMzFsLTM0Ljc1LDM0Ljc0QTUwLjMzLDUwLjMzLDAsMCwxLDE1MC42MiwxNzJoLS4wNUE1MC42Myw1MC42MywwLDAsMSwxMDAsMTIwYTQsNCwwLDAsMSw0LTMuODloLjExYTQsNCwwLDAsMSwzLjg5LDQuMTFBNDIuNjQsNDIuNjQsMCwwLDAsMTUwLjU4LDE2NGgwYTQyLjMyLDQyLjMyLDAsMCwwLDMwLjE0LTEyLjQ5bDM0Ljc1LTM0Ljc0YTQyLjYzLDQyLjYzLDAsMSwwLTYwLjI5LTYwLjI4bC0xMSwxMWE0LDQsMCwwLDEtNS42Ni01LjY1bDExLTExQTUwLjY0LDUwLjY0LDAsMCwxLDIzNiw4OC4xMlpNMTExLjc4LDE4OC40OWwtMTEsMTFBNDIuMzMsNDIuMzMsMCwwLDEsNzAuNiwyMTJoMGE0Mi42Myw0Mi42MywwLDAsMS0zMC4xMS03Mi43N2wzNC43NS0zNC43NEE0Mi42Myw0Mi42MywwLDAsMSwxNDgsMTM1LjgyYTQsNCwwLDAsMCw4LC4yM0E1MC42NCw1MC42NCwwLDAsMCw2OS41NSw5OC44M0wzNC44LDEzMy41N0E1MC42Myw1MC42MywwLDAsMCw3MC41NiwyMjBoMGE1MC4zMyw1MC4zMywwLDAsMCwzNS44MS0xNC44M2wxMS0xMWE0LDQsMCwxLDAtNS42NS01LjY2WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "Link";
export { I as Link };
