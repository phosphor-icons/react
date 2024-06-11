/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/PersonArmsSpread";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzUuNCw4Ni44NUEyMy41NSwyMy41NSwwLDAsMCwyMTIsNjhIMTUwLjU5YTM2LDM2LDAsMSwwLTQ1LjE4LDBINDRBMjQsMjQsMCwwLDAsMzQsMTEzLjc5bC4xOS4wOSw0Ny42MywyMUw2MS43NiwyMTFhMjQsMjQsMCwwLDAsMTIuMTEsMzAuNzRBMjMuNzcsMjMuNzcsMCwwLDAsODQsMjQ0YTI0LDI0LDAsMCwwLDIxLjUyLTEzLjI5TDEyOCwxOTEuOTFsMjIuNTEsMzguOEEyNCwyNCwwLDAsMCwxOTQuMjQsMjExbC0yMC03Ni4xNSw0Ny42My0yMSwuMTktLjA5QTIzLjU1LDIzLjU1LDAsMCwwLDIzNS40LDg2Ljg1Wk0xMjgsMjhhMTIsMTIsMCwxLDEtMTIsMTJBMTIsMTIsMCwwLDEsMTI4LDI4Wm0yNy4xNiw4OWExMiwxMiwwLDAsMC02Ljc3LDE0TDE3MS4yNiwyMThhMTEuODcsMTEuODcsMCwwLDAsLjczLDJjLS4xNS0uMzItLjMyLS42NC0uNS0uOTVMMTM4LjM4LDE2MmExMiwxMiwwLDAsMC0yMC43NiwwTDg0LjUxLDIxOS4wNWMtLjE4LjMxLS4zNS42My0uNS45NWExMS44NywxMS44NywwLDAsMCwuNzMtMmwyMi44Ny04Ni45MmExMiwxMiwwLDAsMC02Ljc3LTE0TDQ0LDkySDIxMloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDQsNDBhMjQsMjQsMCwxLDEsMjQsMjRBMjQsMjQsMCwwLDEsMTA0LDQwWk0yMTIsODBINDRjLTEyLjg3LDAtMTYuNzEsMTcuNS01LDIyLjlMOTYsMTI4LDczLjEzLDIxNC45M2ExMiwxMiwwLDAsMCwyMS43NSwxMC4xNEwxMjgsMTY4bDMzLjEyLDU3LjA3YTEyLDEyLDAsMCwwLDIxLjc1LTEwLjE0TDE2MCwxMjhsNTctMjUuMUMyMjguNjksOTcuNSwyMjQuODUsODAsMjEyLDgwWiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTE2MCw0MGEzMiwzMiwwLDEsMC0zMiwzMkEzMiwzMiwwLDAsMCwxNjAsNDBaTTEyOCw1NmExNiwxNiwwLDEsMSwxNi0xNkExNiwxNiwwLDAsMSwxMjgsNTZaTTIzMS41LDg3LjcxQTE5LjYyLDE5LjYyLDAsMCwwLDIxMiw3Mkg0NGEyMCwyMCwwLDAsMC04LjM4LDM4LjE2bC4xMy4wNiw1MC43NSwyMi4zNS0yMSw3OS43MkEyMCwyMCwwLDAsMCwxMDIsMjI4LjgybDI2LTQ0Ljg4LDI2LDQ0Ljg4YTIwLDIwLDAsMCwwLDM2LjQtMTYuNTNsLTIxLTc5LjcyLDUwLjc1LTIyLjM1LjEzLS4wNkExOS42MywxOS42MywwLDAsMCwyMzEuNSw4Ny43MVptLTE3LjgsNy45LTU2LjkzLDI1LjA3YTgsOCwwLDAsMC00LjUxLDkuMzZMMTc1LjEzLDIxN2E3LDcsMCwwLDAsLjQ5LDEuMzUsNCw0LDAsMSwxLTcuMjUsMy4zOGMtLjExLS4yMi0uMjItLjQzLS4zNC0uNjNMMTM0LjkyLDE2NGE4LDgsMCwwLDAtMTMuODQsMEw4OCwyMjEuMDZjLS4xMi4yLS4yMy40MS0uMzQuNjNhNCw0LDAsMSwxLTcuMjUtMy4zOCw3LDcsMCwwLDAsLjQ5LTEuMzVMMTAzLjc0LDEzMGE4LDgsMCwwLDAtNC41MS05LjM2TDQyLjMsOTUuNjFBNCw0LDAsMCwxLDQ0LDg4SDIxMmE0LDQsMCwwLDEsMS43Myw3LjYxWiIvPjwvc3ZnPg==)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDAsMzZhMjgsMjgsMCwxLDEsMjgsMjhBMjgsMjgsMCwwLDEsMTAwLDM2Wk0yMjcuNiw5Mi41N0ExNS43LDE1LjcsMCwwLDAsMjEyLDgwSDQ0YTE2LDE2LDAsMCwwLTYuNywzMC41M2wuMDYsMCw1My44OSwyMy43My0yMS45Miw4My4zYTE2LDE2LDAsMCwwLDcuOSwyMC45MUExNS44MywxNS44MywwLDAsMCw4NCwyNDBhMTYsMTYsMCwwLDAsMTQuNDQtOS4wNkwxMjgsMTgwbDI5LjU4LDUxYTE2LDE2LDAsMCwwLDI5LjA3LTEzLjM1bC0yMS45Mi04My4zLDU0LTIzLjc2QTE1LjcsMTUuNywwLDAsMCwyMjcuNiw5Mi41N1oiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsNzBBMzAsMzAsMCwxLDAsOTgsNDAsMzAsMzAsMCwwLDAsMTI4LDcwWm0wLTQ4YTE4LDE4LDAsMSwxLTE4LDE4QTE4LDE4LDAsMCwxLDEyOCwyMlpNMjI5LjU1LDg4LjE0QTE3LjY2LDE3LjY2LDAsMCwwLDIxMiw3NEg0NGExOCwxOCwwLDAsMC03LjU1LDM0LjM0bC4xLDAsNTIuMzIsMjMtMjEuNDQsODEuNUExOCwxOCwwLDAsMCw4NCwyMzhhMTguMDcsMTguMDcsMCwwLDAsMTYuMTktMTAuMTRMMTI4LDE4MGwyNy44MSw0Ny45MWExOCwxOCwwLDAsMCwzMi43My0xNC45NGwtMjEuNDQtODEuNSw1Mi4zMi0yMywuMSwwQTE3LjY2LDE3LjY2LDAsMCwwLDIyOS41NSw4OC4xNFptLTE1LDkuMjktNTYuOTUsMjUuMDhhNiw2LDAsMCwwLTMuMzksN2wyMi44Nyw4Ni45M2E3LjY2LDcuNjYsMCwwLDAsLjM3LDEsNiw2LDAsMCwxLTEwLjg4LDUuMDcsNC4zLDQuMywwLDAsMC0uMjQtLjQ4TDEzMy4xOSwxNjVhNiw2LDAsMCwwLTEwLjM4LDBMODkuNjksMjIyLjA1Yy0uMDkuMTYtLjE3LjMxLS4yNS40OGE2LDYsMCwwLDEtOCwyLjksNiw2LDAsMCwxLTIuOS04LDcuNjYsNy42NiwwLDAsMCwuMzctMWwyMi44Ny04Ni45M2E2LDYsMCwwLDAtMy4zOS03TDQxLjQ3LDk3LjQzQTYsNiwwLDAsMSw0NCw4NkgyMTJhNiw2LDAsMCwxLDIuNTYsMTEuNDNaIi8+PC9zdmc+)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjAsNDBhMzIsMzIsMCwxLDAtMzIsMzJBMzIsMzIsMCwwLDAsMTYwLDQwWk0xMjgsNTZhMTYsMTYsMCwxLDEsMTYtMTZBMTYsMTYsMCwwLDEsMTI4LDU2Wk0yMzEuNSw4Ny43MUExOS42MiwxOS42MiwwLDAsMCwyMTIsNzJINDRhMjAsMjAsMCwwLDAtOC4zOCwzOC4xNmwuMTMsMCw1MC43NSwyMi4zNS0yMSw3OS43MkEyMCwyMCwwLDAsMCwxMDIsMjI4LjhsMjYtNDQuODcsMjYsNDQuODdhMjAsMjAsMCwwLDAsMzYuNC0xNi41MmwtMjEtNzkuNzIsNTAuNzUtMjIuMzUuMTMsMEExOS42NCwxOS42NCwwLDAsMCwyMzEuNSw4Ny43MVptLTE3LjgsNy45LTU2LjkzLDI1LjA2YTgsOCwwLDAsMC00LjUxLDkuMzZMMTc1LjEzLDIxN2E3LDcsMCwwLDAsLjQ5LDEuMzUsNCw0LDAsMCwxLTUsNS40NSw0LDQsMCwwLDEtMi4yNS0yLjA3LDYuMzEsNi4zMSwwLDAsMC0uMzQtLjYzTDEzNC45MiwxNjRhOCw4LDAsMCwwLTEzLjg0LDBMODgsMjIxLjA1YTYuMzEsNi4zMSwwLDAsMC0uMzQuNjMsNCw0LDAsMCwxLTIuMjUsMi4wNyw0LDQsMCwwLDEtNS01LjQ1LDcsNywwLDAsMCwuNDktMS4zNUwxMDMuNzQsMTMwYTgsOCwwLDAsMC00LjUxLTkuMzZMNDIuMyw5NS42MUE0LDQsMCwwLDEsNDQsODhIMjEyYTQsNCwwLDAsMSwxLjczLDcuNjFaIi8+PC9zdmc+)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsNjhhMjgsMjgsMCwxLDAtMjgtMjhBMjgsMjgsMCwwLDAsMTI4LDY4Wm0wLTQ4YTIwLDIwLDAsMSwxLTIwLDIwQTIwLDIwLDAsMCwxLDEyOCwyMFptOTkuNiw2OC41N0ExNS43LDE1LjcsMCwwLDAsMjEyLDc2SDQ0YTE2LDE2LDAsMCwwLTYuNywzMC41MmwuMDYsMCw1My44OSwyMy43My0yMS45Miw4My4zYTE2LDE2LDAsMCwwLDcuOSwyMC45MUExNS44MiwxNS44MiwwLDAsMCw4NCwyMzZhMTYsMTYsMCwwLDAsMTQuNDItOS4wN0wxMjgsMTc2bDI5LjU4LDUxYTE2LDE2LDAsMCwwLDI5LjA3LTEzLjM1bC0yMS45Mi04My4zLDU0LTIzLjc2QTE1LjY5LDE1LjY5LDAsMCwwLDIyNy42LDg4LjU3Wk0yMTUuMzksOTkuMjNsLTU3LDI1LjExYTQsNCwwLDAsMC0yLjI2LDQuNjhMMTc5LDIxNS45NGE0LjEyLDQuMTIsMCwwLDAsLjI0LjY3LDgsOCwwLDAsMS0zLjg3LDEwLjYzLDgsOCwwLDAsMS0xMC42My0zLjg3LDMsMywwLDAsMC0uMTYtLjMxTDEzMS40NiwxNjZhNCw0LDAsMCwwLTYuOTIsMEw5MS40MiwyMjMuMDZhMywzLDAsMCwwLS4xNi4zMSw4LDgsMCwxLDEtMTQuNS02Ljc2LDQuMTIsNC4xMiwwLDAsMCwuMjQtLjY3TDk5Ljg3LDEyOWE0LDQsMCwwLDAtMi4yNi00LjY4bC01Ny0yNS4wOUE4LDgsMCwwLDEsNDQsODRIMjEyYTgsOCwwLDAsMSwzLjQxLDE1LjIzWiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "PersonArmsSpread";
export { I as PersonArmsSpread };
