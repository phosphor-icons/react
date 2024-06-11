/* GENERATED FILE */
import React, { forwardRef } from "react";
import type { Icon } from "../lib/types";
import IconBase from "../lib/IconBase";
import weights from "../defs/ShirtFolded";

/**
 * @bold ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMzZIMTc3TDE2NC40OSwyMy41MWgwQTEyLDEyLDAsMCwwLDE1NiwyMEgxMDBhMTIsMTIsMCwwLDAtOC40OSwzLjUxaDBMNzksMzZINTZBMjAsMjAsMCwwLDAsMzYsNTZWMjA4YTIwLDIwLDAsMCwwLDIwLDIwSDIwMGEyMCwyMCwwLDAsMCwyMC0yMFY1NkEyMCwyMCwwLDAsMCwyMDAsMzZaTTk2LDUzbDcuMzMtNy4zM0wxMTguODIsNzIuMiw5Niw5NC40OFpNMTM3LjE4LDcyLjJsMTUuNDktMjYuNTZMMTYwLDUzVjk0LjQ4Wk02MCw2MEg3MnY0NGEyMCwyMCwwLDAsMCwzNC4wOCwxNC4yMUwxMTYsMTA4LjVWMjA0SDYwWk0xOTYsMjA0SDE0MFYxMDguNWw5LjkyLDkuNjlBMjAsMjAsMCwwLDAsMTg0LDEwNFY2MGgxMloiLz48L3N2Zz4=)
 * @duotone ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNTZWMjA4YTgsOCwwLDAsMS04LDhINTZhOCw4LDAsMCwxLTgtOFY1NmE4LDgsMCwwLDEsOC04SDgwdjU2YTgsOCwwLDAsMCwxMy4xMiw2LjE1TDEyOCw4MGwzNC44OCwzMC4xM0E4LDgsMCwwLDAsMTc2LDEwNFY0OGgyNEE4LDgsMCwwLDEsMjA4LDU2WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIwMCw0MEgxNzkuMzFMMTY1LjY2LDI2LjM0aDBBOCw4LDAsMCwwLDE2MCwyNEg5NmE4LDgsMCwwLDAtNS42NiwyLjM0aDBMNzYuNjksNDBINTZBMTYsMTYsMCwwLDAsNDAsNTZWMjA4YTE2LDE2LDAsMCwwLDE2LDE2SDIwMGExNiwxNiwwLDAsMCwxNi0xNlY1NkExNiwxNiwwLDAsMCwyMDAsNDBabS0zOC43Niw0LjU2TDE2OCw1MS4zMVYxMDRMMTM4LjU3LDc4LjU2Wk04OCw1MS4zMWw2Ljc2LTYuNzUsMjIuNjcsMzRMODgsMTA0Wk01Niw1Nkg3MnY0OGExNS44NSwxNS44NSwwLDAsMCw5LjIxLDE0LjQ5QTE2LjEsMTYuMSwwLDAsMCw4OCwxMjBhMTUuODksMTUuODksMCwwLDAsMTAuMi0zLjczLjUyLjUyLDAsMCwwLC4xMS0uMUwxMjAsOTcuNDhWMjA4SDU2Wk0yMDAsMjA4SDEzNlY5Ny40OGwyMS42NSwxOC43YS41Mi41MiwwLDAsMCwuMTEuMUExNS44OSwxNS44OSwwLDAsMCwxNjgsMTIwYTE2LjEsMTYuMSwwLDAsMCw2LjgzLTEuNTRBMTUuODUsMTUuODUsMCwwLDAsMTg0LDEwNFY1NmgxNloiLz48L3N2Zz4=)
 * @fill ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDEsNDBIMTc5LjM1TDE2NS42NiwyNi4zNEE4LDgsMCwwLDAsMTYwLDI0SDk2YTgsOCwwLDAsMC01LjY2LDIuMzRMNzYuNjUsNDBINTVBMTUsMTUsMCwwLDAsNDAsNTVWMjA5YTE1LDE1LDAsMCwwLDE1LDE1aDYxYTQsNCwwLDAsMCw0LTRWMTA0LjI3QTguMTgsOC4xOCwwLDAsMSwxMjcuNDcsOTZhOCw4LDAsMCwxLDguNTMsOFYyMjBhNCw0LDAsMCwwLDQsNGg2MWExNSwxNSwwLDAsMCwxNS0xNVY1NUExNSwxNSwwLDAsMCwyMDEsNDBaTTg2LjU0LDEwNy4wOEE0LDQsMCwwLDEsODAsMTA0VjU5LjMxTDk1LjI0LDQ0LjA3bDIzLjQ3LDM1LjIxWk0xMjgsODBoMHYwWm00OCwyNGE0LDQsMCwwLDEtMi4zLDMuNjMsMy45MywzLjkzLDAsMCwxLTQuMjEtLjUxbC0zMi4yLTI3LjgyLDIzLjQ3LTM1LjIxTDE3Niw1OS4zMVoiLz48L3N2Zz4=)
 * @light ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNDJIMTc4LjQ4TDE2NC4yNSwyNy43NkE2LDYsMCwwLDAsMTYwLDI2SDk2YTYsNiwwLDAsMC00LjI1LDEuNzZMNzcuNTIsNDJINTZBMTQsMTQsMCwwLDAsNDIsNTZWMjA4YTE0LDE0LDAsMCwwLDE0LDE0SDIwMGExNCwxNCwwLDAsMCwxNC0xNFY1NkExNCwxNCwwLDAsMCwyMDAsNDJaTTEyOCw2OS4xOCwxMDcuMjEsMzhoNDEuNThabTMyLjkzLTI3Ljc2TDE3MCw1MC40OVYxMDRhMiwyLDAsMCwxLTMuMjUsMS41NkwxMzUuOTMsNzguOTJaTTg2LDUwLjQ5bDkuMDctOS4wNywyNSwzNy41TDg5LjI1LDEwNS41NEEyLDIsMCwwLDEsODYsMTA0Wk01NCwyMDhWNTZhMiwyLDAsMCwxLDItMkg3NHY1MGExMy44NywxMy44NywwLDAsMCw4LjA2LDEyLjY4QTE0LjExLDE0LjExLDAsMCwwLDg4LDExOCwxMy44NywxMy44NywwLDAsMCw5NywxMTQuNzRsLjA4LS4wNywyNS0yMS41NlYyMTBINTZBMiwyLDAsMCwxLDU0LDIwOFptMTQ4LDBhMiwyLDAsMCwxLTIsMkgxMzRWOTMuMTFsMjUsMjEuNTYuMDguMDdBMTMuODcsMTMuODcsMCwwLDAsMTY4LDExOGExNC4wOCwxNC4wOCwwLDAsMCw2LTEuMzVBMTMuODcsMTMuODcsMCwwLDAsMTgyLDEwNFY1NGgxOGEyLDIsMCwwLDEsMiwyWiIvPjwvc3ZnPg==)
 * @regular ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNDBIMTc5LjMxTDE2NS42NiwyNi4zNGgwQTgsOCwwLDAsMCwxNjAsMjRIOTZhOCw4LDAsMCwwLTUuNjYsMi4zNGgwTDc2LjY5LDQwSDU2QTE2LDE2LDAsMCwwLDQwLDU2VjIwOGExNiwxNiwwLDAsMCwxNiwxNkgyMDBhMTYsMTYsMCwwLDAsMTYtMTZWNTZBMTYsMTYsMCwwLDAsMjAwLDQwWk0xMjgsNjUuNTgsMTExLDQwaDM0LjFabTMzLjI0LTIxTDE2OCw1MS4zMVYxMDRMMTM4LjU3LDc4LjU2Wk04OCw1MS4zMWw2Ljc2LTYuNzUsMjIuNjcsMzRMODgsMTA0Wk01Niw1Nkg3MnY0OGExNS44NSwxNS44NSwwLDAsMCw5LjIxLDE0LjQ5QTE2LjEsMTYuMSwwLDAsMCw4OCwxMjBhMTUuODksMTUuODksMCwwLDAsMTAuMi0zLjczLjUyLjUyLDAsMCwwLC4xMS0uMUwxMjAsOTcuNDhWMjA4SDU2Wk0yMDAsMjA4SDEzNlY5Ny40OGwyMS42NSwxOC43YS41Mi41MiwwLDAsMCwuMTEuMUExNS44OSwxNS44OSwwLDAsMCwxNjgsMTIwYTE2LjEsMTYuMSwwLDAsMCw2LjgzLTEuNTRBMTUuODUsMTUuODUsMCwwLDAsMTg0LDEwNFY1NmgxNloiLz48L3N2Zz4=)
 * @thin ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsNDRIMTc3LjY2TDE2Mi44MywyOS4xN2gwQTQsNCwwLDAsMCwxNjAsMjhIOTZhNCw0LDAsMCwwLTIuODMsMS4xN2gwTDc4LjM0LDQ0SDU2QTEyLDEyLDAsMCwwLDQ0LDU2VjIwOGExMiwxMiwwLDAsMCwxMiwxMkgyMDBhMTIsMTIsMCwwLDAsMTItMTJWNTZBMTIsMTIsMCwwLDAsMjAwLDQ0Wk0xMjgsNzIuNzksMTAzLjQ3LDM2aDQ5LjA2Wm0zMi42Mi0zNC41MUwxNzIsNDkuNjZWMTA0YTQsNCwwLDAsMS0yLjMsMy42MywzLjkzLDMuOTMsMCwwLDEtNC4yMS0uNTFsLTMyLjItMjcuODJaTTg0LDQ5LjY2LDk1LjM4LDM4LjI4bDI3LjMzLDQxLTMyLjE3LDI3LjhBNCw0LDAsMCwxLDg0LDEwNFpNNTIsMjA4VjU2YTQsNCwwLDAsMSw0LTRINzZ2NTJhMTEuODksMTEuODksMCwwLDAsNi45MSwxMC44N0ExMi4wOCwxMi4wOCwwLDAsMCw4OCwxMTZhMTEuODgsMTEuODgsMCwwLDAsNy42NS0yLjhsLjA2LDBMMTI0LDg4Ljc0VjIxMkg1NkE0LDQsMCwwLDEsNTIsMjA4Wm0xNTIsMGE0LDQsMCwwLDEtNCw0SDEzMlY4OC43NGwyOC4zMiwyNC40NkExMS45LDExLjksMCwwLDAsMTY4LDExNmExMi4wOCwxMi4wOCwwLDAsMCw1LjEyLTEuMTVBMTEuODksMTEuODksMCwwLDAsMTgwLDEwNFY1MmgyMGE0LDQsMCwwLDEsNCw0WiIvPjwvc3ZnPg==)
 */
const I: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

I.displayName = "ShirtFolded";
export { I as ShirtFolded };
